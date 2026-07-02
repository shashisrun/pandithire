import { NextResponse } from "next/server";

const OTP_EXPIRY_MINUTES = 5;

export async function POST(req: Request) {
  try {
    const { phone } = await req.json();
    if (!phone || phone.length < 10) {
      return NextResponse.json({ error: "Valid phone number required" }, { status: 400 });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const referenceId = crypto.randomUUID();
    const expiresAt = new Date(Date.now() + OTP_EXPIRY_MINUTES * 60 * 1000);

    // In production, send via MSG91/Twilio. For dev, log to console.
    console.log(`[OTP] Phone: ${phone}, OTP: ${otp}, Ref: ${referenceId}`);

    return NextResponse.json({
      success: true,
      referenceId,
      message: `OTP sent to ${phone}`,
      // In production, remove this debug field:
      devOtp: process.env.NODE_ENV === "development" ? otp : undefined,
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to send OTP" }, { status: 500 });
  }
}
