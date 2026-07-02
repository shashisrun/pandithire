import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const lead = await prisma.bhajanKirtanLead.create({
      data: {
        name: body.name,
        phone: body.phone,
        serviceType: body.serviceType,
        preferredDate: body.preferredDate,
        location: body.location,
        city: body.city,
        message: body.message,
        phoneVerified: body.phoneVerified || false,
        lang: body.lang,
        status: "new",
      },
    });
    return NextResponse.json({ success: true, id: lead.id });
  } catch (error) {
    return NextResponse.json({ error: "Failed to submit" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const leads = await prisma.bhajanKirtanLead.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(leads);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }
}
