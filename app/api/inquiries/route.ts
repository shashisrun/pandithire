import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const inquiry = await prisma.customerInquiry.create({
      data: {
        name: body.name,
        phone: body.phone,
        serviceType: body.serviceType || body.service,
        preferredDate: body.preferredDate || body.date,
        preferredTime: body.preferredTime || body.time,
        location: body.location,
        city: body.city,
        message: body.message,
        lang: body.lang,
        phoneVerified: body.phoneVerified || false,
        source: "website",
        status: "new",
      },
    });

    return NextResponse.json({ success: true, id: inquiry.id });
  } catch (error) {
    console.error("Enquiry submission error:", error);
    return NextResponse.json({ error: "Failed to submit enquiry" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const inquiries = await prisma.customerInquiry.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(inquiries);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch enquiries" }, { status: 500 });
  }
}
