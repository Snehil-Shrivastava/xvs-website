import { google } from "googleapis";
import { NextResponse } from "next/server";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { Resend } from "resend";
import AppointmentConfirmation from "@/emails/AppointmentConfirmation";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(advancedFormat);

const resend = new Resend(process.env.RESEND_API_KEY);

const getAbbreviation = (timezoneName: string): string => {
  const cleanedName = timezoneName.replace(/ *\([^)]*\) */g, "");
  const words = cleanedName.split(" ");
  return words.map((word) => word[0]).join("");
};

export async function POST(req: Request) {
  try {
    // 1. Parse the incoming form data
    const body = await req.json();
    const {
      date,
      time,
      duration,
      name,
      email,
      phone,
      message,
      industry,
      company,
      website,
      timezone: userTimezone,
    } = body;

    // 2. Basic Validation
    if (!date || !time || !name || !email || !duration) {
      return NextResponse.json(
        {
          error:
            "Missing required fields (date, time, name, email, or duration)",
        },
        { status: 400 },
      );
    }

    // 3. Authenticate with Google
    const serviceAccountKey = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
    if (!serviceAccountKey) {
      return NextResponse.json(
        { error: "Missing GOOGLE_SERVICE_ACCOUNT_KEY" },
        { status: 500 },
      );
    }

    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(serviceAccountKey),
      scopes: ["https://www.googleapis.com/auth/calendar.events"],
    });

    const calendar = google.calendar({ version: "v3", auth });

    // 4. Construct the Event Start and End times
    const startDateTime = dayjs.tz(
      `${date}T${time}:00`,
      userTimezone || "Asia/Kolkata",
    );
    // Assume the meeting is 1 hour long, matching your availability logic
    const endDateTime = startDateTime.add(duration, "minutes");

    // 5. Construct the Event Details
    const eventDescription = `
        <b>Name:</b> ${name}<br/>
        <b>Email:</b> ${email}<br/>
        <b>Phone:</b> ${phone}<br/>
        <b>Company:</b> ${company || "N/A"}<br/>
        <b>Industry:</b> ${industry || "N/A"}<br/>
        <b>Website:</b> ${website || "N/A"}<br/>
        <b>User Timezone:</b> ${userTimezone || "Asia/Kolkata"}<br />
        <br/>
        <b>Message:</b><br/>
        ${message}
    `;

    const event = {
      summary: `Consultation with ${name} (xVS Creations)`,
      description: eventDescription,
      start: {
        dateTime: startDateTime.toISOString(),
        timeZone: userTimezone || "Asia/Kolkata",
      },
      end: {
        dateTime: endDateTime.toISOString(),
        timeZone: userTimezone || "Asia/Kolkata",
      },
    };

    // 6. Insert the Event into Google Calendar
    // @ts-expect-error random
    await calendar.events.insert({
      calendarId: process.env.GOOGLE_CALENDAR_ID!,
      resource: event,
    });

    const abbreviation = getAbbreviation(
      startDateTime.tz(userTimezone).format("zzz"),
    );

    const formattedStartTime = `${startDateTime.tz(userTimezone).format("h:mm A")} ${abbreviation}`;
    const formattedDateEmail = startDateTime
      .tz(userTimezone)
      .format("MMMM D, YYYY");

    const userRmailPromise = resend.emails.send({
      from: "mail@xvscreations.in",
      to: email,
      // bcc: ["sanjeev@xvscreations.com"],
      subject: `Requested: Consultation with xVS Creations on ${startDateTime.format(
        "MMMM D",
      )}`,
      react: AppointmentConfirmation({
        name: name,
        formattedDate: formattedDateEmail,
        formattedStartTime: formattedStartTime,
        message: message,
      }),
      replyTo: `info@xvscreations.com`,
    });

    const adminEmailPromise = resend.emails.send({
      from: "mail@xvscreations.in",
      to: "sanjeev@xvscreations.com",
      subject: `New Booking: ${name} @ ${startDateTime.format("D MMM h:mm A")}`,
      html: `
        <h1>New Appointment Booked</h1>
        <p>
          <strong>Start Time:</strong> ${startDateTime.toISOString()}<br/>
          <strong>End Time:</strong> ${endDateTime.toISOString()}
        </p>
        <hr />
        <h3>Submitted Details:</h3>
        ${eventDescription} 
      `,
    });

    await Promise.all([userRmailPromise, adminEmailPromise]);

    return NextResponse.json({ success: true });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    console.error("Calendar Booking API error:", e);
    return NextResponse.json(
      { error: e.message || "Failed to book slot" },
      { status: 500 },
    );
  }
}
