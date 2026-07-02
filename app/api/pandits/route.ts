import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const pandit = await prisma.pandit.create({
      data: {
        fullName: body.fullName,
        fatherName: body.fatherName,
        dateOfBirth: body.dob,
        age: body.age ? parseInt(body.age) : null,
        mobile: body.mobile,
        whatsapp: body.whatsapp,
        email: body.email,
        address: body.address,
        city: body.city,
        state: body.state,
        pinCode: body.pinCode,
        mainSpecialization: body.mainSpec || body.mainSpecialization,
        otherServices: body.otherServices,
        experienceYears: body.experience ? parseInt(body.experience) : null,
        languagesKnown: body.languages,
        availableHomeVisit: body.homeVisit === "Yes",
        willingToTravel: body.travel === "Yes",
        serviceAreas: body.serviceAreas,
        workHours: body.workHours,
        expectedDakshina: body.dakshina,
        lang: body.lang,
        phoneVerified: body.phoneVerified || false,
      },
    });

    return NextResponse.json({ success: true, id: pandit.id });
  } catch (error) {
    console.error("Pandit registration error:", error);
    return NextResponse.json({ error: "Failed to register pandit" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const pandits = await prisma.pandit.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(pandits);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch pandits" }, { status: 500 });
  }
}
