import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { token } = await request.json();

    if (!token) {
      return NextResponse.json(
        { success: false, message: "Token missing" },
        { status: 400 },
      );
    }

    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    // Send token to Google's verification endpoint
    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${secretKey}&response=${token}`,
      },
    );

    const data = await response.json();

    // For v3: you might also want to check if data.score >= 0.5
    if (data.success) {
      return NextResponse.json({
        success: true,
        message: "Verification passed",
      });
    } else {
      return NextResponse.json(
        { success: false, errors: data["error-codes"] },
        { status: 400 },
      );
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, message: `Internal Server Error: ${error}` },
      { status: 500 },
    );
  }
}
