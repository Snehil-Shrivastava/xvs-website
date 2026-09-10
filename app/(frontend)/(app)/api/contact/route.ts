// import { Resend } from "resend";
// import { NextResponse } from "next/server";
// import ContactFormEmail from "@/emails/ContactFormEmail";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(request: Request) {
//   try {
//     const body = await request.json();
//     const { name, email, phone, message } = body;

//     // Validate required fields
//     if (!name || !email || !phone || !message) {
//       return NextResponse.json(
//         { error: "All fields are required" },
//         { status: 400 },
//       );
//     }

//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//       return NextResponse.json(
//         { error: "Invalid email address" },
//         { status: 400 },
//       );
//     }

//     const userEmailPromise = resend.emails.send({
//       from: "mail@xvscreations.in",
//       to: [email],
//       subject: "Thank you for contacting us!",
//       react: ContactFormEmail({
//         name,
//         email,
//         phone,
//         message,
//       }),
//       replyTo: "info@xvscreations.com",
//     });

//     const adminEmailPromise = resend.emails.send({
//       from: "mail@xvscreations.in",
//       to: ["sanjeev@xvscreations.com"],
//       subject: `New Contact Form: ${name}`,
//       html: `
//         <h2>New Contact Form Submission</h2>
//         <p>
//           <b>Name:</b> ${name}<br/>
//           <b>Email:</b> ${email}<br/>
//           <b>Phone:</b> ${phone}<br/>
//         </p>
//         <hr />
//         <h3>Message:</h3>
//         <p>${message.replace(/\n/g, "<br/>")}</p>
//       `,
//     });

//     const [userData, adminData] = await Promise.all([
//       userEmailPromise,
//       adminEmailPromise,
//     ]);

//     if (userData.error) {
//       console.error("User Confirmation Email Failed:", userData.error);
//     }
//     if (adminData.error) {
//       console.error("Admin Notification Email Failed:", adminData.error);
//     }

//     return NextResponse.json(
//       {
//         success: true,
//         message: "Emails sent successfully",
//         adminEmailId: adminData.data?.id,
//         userEmailId: userData.data?.id,
//       },
//       { status: 200 },
//     );
//   } catch (error) {
//     console.error("Error sending emails:", error);
//     return NextResponse.json(
//       { error: "Failed to send emails" },
//       { status: 500 },
//     );
//   }
// }

// --------------------------------------------------------------------

import { Resend } from "resend";
import { NextResponse } from "next/server";
import ContactFormEmail from "@/emails/ContactFormEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, captchaToken } = body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 },
      );
    }

    if (!captchaToken) {
      return NextResponse.json(
        { error: "Missing CAPTCHA verification" },
        { status: 400 },
      );
    }

    const verifyRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`,
      },
    );

    const verifyData = await verifyRes.json();

    if (!verifyData.success) {
      console.error("reCAPTCHA verification failed:", verifyData);
      return NextResponse.json(
        { error: "CAPTCHA verification failed. Please try again." },
        { status: 400 },
      );
    }

    // v3 returns a score from 0.0 (bot) to 1.0 (human) instead of pass/fail.
    // 0.5 is Google's suggested default threshold — tune based on your traffic.
    const RECAPTCHA_SCORE_THRESHOLD = 0.5;
    if (
      typeof verifyData.score === "number" &&
      verifyData.score < RECAPTCHA_SCORE_THRESHOLD
    ) {
      console.warn("reCAPTCHA low score:", verifyData.score);
      return NextResponse.json(
        { error: "CAPTCHA verification failed. Please try again." },
        { status: 400 },
      );
    }

    // Optional but recommended: confirm the action matches what the client sent
    if (verifyData.action && verifyData.action !== "contact_form") {
      console.warn("reCAPTCHA action mismatch:", verifyData.action);
      return NextResponse.json(
        { error: "CAPTCHA verification failed. Please try again." },
        { status: 400 },
      );
    }

    const userEmailPromise = resend.emails.send({
      from: "mail@xvscreations.in",
      to: [email],
      subject: "Thank you for contacting us!",
      react: ContactFormEmail({
        name,
        email,
        phone,
        message,
      }),
      replyTo: "info@xvscreations.com",
    });

    const adminEmailPromise = resend.emails.send({
      from: "mail@xvscreations.in",
      to: ["sanjeev@xvscreations.com"],
      subject: `New Contact Form: ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p>
          <b>Name:</b> ${name}<br/>
          <b>Email:</b> ${email}<br/>
          <b>Phone:</b> ${phone}<br/>
        </p>
        <hr />
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    const [userData, adminData] = await Promise.all([
      userEmailPromise,
      adminEmailPromise,
    ]);

    if (userData.error) {
      console.error("User Confirmation Email Failed:", userData.error);
    }
    if (adminData.error) {
      console.error("Admin Notification Email Failed:", adminData.error);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Emails sent successfully",
        adminEmailId: adminData.data?.id,
        userEmailId: userData.data?.id,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending emails:", error);
    return NextResponse.json(
      { error: "Failed to send emails" },
      { status: 500 },
    );
  }
}
