import { NextResponse } from "next/server";

// In production, verify against stored OTP in DB
// For MVP/dev: OTP "123456" is always valid
const DEV_OTP = "123456";

export async function POST(req: Request) {
  try {
    const { phone, otp, referenceId } = await req.json();
    if (!phone || !otp) {
      return NextResponse.json({ error: "Phone and OTP required" }, { status: 400 });
    }

    if (otp === DEV_OTP || process.env.NODE_ENV === "development") {
      return NextResponse.json({ success: true, verified: true });
    }

    return NextResponse.json({ error: "Invalid OTP" }, { status: 400 });
  } catch (error) {
    return NextResponse.json({ error: "OTP verification failed" }, { status: 500 });
  }
}
