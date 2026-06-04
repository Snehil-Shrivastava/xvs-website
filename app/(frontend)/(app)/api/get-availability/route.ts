import { google } from "googleapis";
import { NextResponse } from "next/server";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

// export const dynamic = "force-dynamic";

const buffer = 15;
const BUSINESS_TIMEZONE = "Asia/Kolkata";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");
  const duration = parseInt(searchParams.get("duration") || "30", 10);
  const userTimezone = searchParams.get("timezone") || BUSINESS_TIMEZONE;

  if (!startDate || !endDate) {
    return NextResponse.json(
      { error: "Missing startDate or endDate" },
      { status: 400 },
    );
  }

  try {
    const serviceAccountKey = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
    if (!serviceAccountKey) {
      return NextResponse.json(
        { error: "Missing GOOGLE_SERVICE_ACCOUNT_KEY" },
        { status: 500 },
      );
    }

    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(serviceAccountKey),
      scopes: ["https://www.googleapis.com/auth/calendar.readonly"],
    });

    const calendar = google.calendar({ version: "v3", auth });

    const events = await calendar.events.list({
      calendarId: process.env.GOOGLE_CALENDAR_ID!,
      timeMin: new Date(startDate).toISOString(),
      timeMax: new Date(endDate).toISOString(),
      singleEvents: true,
      orderBy: "startTime",
    });

    const bookedSlots =
      events.data.items
        ?.map((e) => {
          if (e.start?.dateTime) {
            return {
              start: e.start.dateTime,
              end: e.end?.dateTime,
            };
          } else if (e.start?.date) {
            const startOfAllDayEvent = dayjs
              .tz(e.start.date, BUSINESS_TIMEZONE)
              .startOf("day")
              .toISOString();
            const endOfAllDayEvent = dayjs
              .tz(e.start.date, BUSINESS_TIMEZONE)
              .endOf("day")
              .toISOString();

            return {
              start: startOfAllDayEvent,
              end: endOfAllDayEvent,
            };
          }
          return null;
        })
        .filter(Boolean) || [];

    const bookedSlotsWithBuffer = bookedSlots.map((slot) => ({
      start: slot?.start,
      end: dayjs(slot?.end).add(buffer, "minutes").toISOString(),
    }));

    const availability = generateAvailability(
      bookedSlotsWithBuffer,
      startDate,
      endDate,
      duration,
      userTimezone,
    );
    return NextResponse.json({ availability, timezone: userTimezone });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    console.error("Calendar API error:", e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

function generateAvailability(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  bookedSlots: any[],
  startDate: string,
  endDate: string,
  duration: number,
  userTimezone: string,
) {
  const availability: {
    date: string;
    slots: { time: string; available: boolean }[];
  }[] = [];

  const slotIncrement = Math.min(duration, 30);

  let currentDay = dayjs.tz(startDate, userTimezone).startOf("day");
  const lastDay = dayjs.tz(endDate, userTimezone).endOf("day");

  const minimumBookingTime = dayjs().tz(userTimezone).add(24, "hours");

  while (currentDay.isBefore(lastDay)) {
    const dayOfWeek = currentDay.day();
    if (dayOfWeek >= 1 && dayOfWeek <= 5) {
      const allSlotsForDay: { time: string; available: boolean }[] = [];

      const businessStartIST = currentDay
        .tz(BUSINESS_TIMEZONE)
        .hour(9)
        .minute(0)
        .second(0);
      const businessEndIST = currentDay
        .tz(BUSINESS_TIMEZONE)
        .hour(23)
        .minute(30)
        .second(0);

      let slotStart = businessStartIST.tz(userTimezone);
      const endOfDay = businessEndIST.tz(userTimezone);

      while (slotStart.isBefore(endOfDay)) {
        const slotEnd = slotStart.add(duration, "minutes");

        // Stop if slot would go past business hours
        if (slotEnd.isAfter(endOfDay)) {
          break;
        }

        // Check if slot is at least 24 hours in the future
        const isTooSoon = slotStart.isBefore(minimumBookingTime);

        // Check if the current slot overlaps with any booked event
        const overlappingBooking = bookedSlots.find(
          (booking) =>
            dayjs(booking.start).isBefore(slotEnd) &&
            dayjs(booking.end).isAfter(slotStart),
        );

        // Only add slots that are at least 24 hours away
        if (!isTooSoon) {
          allSlotsForDay.push({
            time: slotStart.format("HH:mm"),
            available: !overlappingBooking,
          });
        }

        // If there's an overlapping booking, jump to its end time (which already has buffer)
        if (overlappingBooking) {
          slotStart = slotStart.add(slotIncrement, "minutes");
        } else {
          // Normal increment by slot duration
          slotStart = slotStart.add(duration, "minutes");
        }
      }

      const hasAvaialableSlots = allSlotsForDay.some((slot) => slot.available);
      if (allSlotsForDay.length > 0 && hasAvaialableSlots) {
        availability.push({
          date: currentDay.format("YYYY-MM-DD"),
          slots: allSlotsForDay,
        });
      }
    }
    currentDay = currentDay.add(1, "day");
  }

  return availability;
}
