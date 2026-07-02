import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const lead = await prisma.rishtaLead.create({
      data: {
        forSelf: body.forSelf || "boy",
        name: body.name,
        phone: body.phone,
        email: body.email,
        dateOfBirth: body.dateOfBirth,
        education: body.education,
        location: body.location,
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
    const leads = await prisma.rishtaLead.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(leads);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }
}
