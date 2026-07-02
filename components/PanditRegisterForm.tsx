"use client";

import { useState } from "react";
import { businessInfo } from "@/data/businessInfo";
import type { Dictionary } from "@/lib/i18n/dictionaries";

const SERVICE_OPTIONS = [
  "Vivah Muhurat",
  "Grih Shanti",
  "Kundli Matching",
  "Vastu Solution",
  "Jyotish Paramarsh",
  "Puja & Abhishek",
  "Havan & Yagya",
  "Griha Pravesh Puja",
  "Satyanarayan Puja",
  "Rudrabhishek Puja",
  "Naamkaran Puja",
  "Mundan Puja",
  "Annaprashan Puja",
  "Festival Puja",
  "Other Religious Services",
];

export default function PanditRegisterForm({ dict }: { dict: Dictionary }) {
  const [submitted, setSubmitted] = useState(false);
  const r = dict.register;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const gv = (id: string) => (form.elements.namedItem(id) as HTMLInputElement)?.value || "";
    const selectedServices = SERVICE_OPTIONS.filter(
      (_, i) => (form.elements.namedItem(`svc_${i}`) as HTMLInputElement)?.checked
    ).join(", ");

    const msg = `*New Pandit Registration - PanditHire.in*

*Personal Information:*
Name: ${gv("fullName")}
Father/Guardian: ${gv("fatherName")}
DOB: ${gv("dob")}
Age: ${gv("age")}
Mobile: ${gv("mobile")}
WhatsApp: ${gv("whatsapp")}
Email: ${gv("email")}
Address: ${gv("address")}
City: ${gv("city")}
State: ${gv("state")}
Pin Code: ${gv("pinCode")}

*Professional Information:*
Main Specialization: ${gv("mainSpec")}
Other Services: ${gv("otherServices")}
Experience: ${gv("experience")} years
Languages: ${gv("languages")}
Home Visit: ${gv("homeVisit")}
Willing to Travel: ${gv("travel")}
Service Areas: ${gv("serviceAreas")}
Working Hours: ${gv("workHours")}
Expected Dakshina: ${gv("dakshina")}

*Services Offered:* ${selectedServices}

Documents will be shared separately.`;

    window.open(
      `https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent(msg)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{r.thankYou}</h3>
        <p className="text-gray-600">{r.thankYouText}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Personal Information */}
      <div>
        <h3 className="text-lg font-semibold text-primary mb-3 border-b pb-2">{r.personalInfo}</h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">{r.fullName}</label>
            <input type="text" id="fullName" name="fullName" required className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none text-sm" />
          </div>
          <div>
            <label htmlFor="fatherName" className="block text-sm font-medium text-gray-700 mb-1">{r.fatherName}</label>
            <input type="text" id="fatherName" name="fatherName" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none text-sm" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-1">{r.dateOfBirth}</label>
              <input type="date" id="dob" name="dob" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none text-sm" />
            </div>
            <div>
              <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">{r.age}</label>
              <input type="number" id="age" name="age" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none text-sm" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">{r.mobile}</label>
              <input type="tel" id="mobile" name="mobile" required className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none text-sm" placeholder="+91 99999 99999" />
            </div>
            <div>
              <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-1">{r.whatsapp}</label>
              <input type="tel" id="whatsapp" name="whatsapp" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none text-sm" />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">{r.emailOptional}</label>
            <input type="email" id="email" name="email" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none text-sm" />
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">{r.address}</label>
            <textarea id="address" name="address" rows={2} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none text-sm" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">{r.city}</label>
              <input type="text" id="city" name="city" required className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none text-sm" placeholder="E.g., Delhi" />
            </div>
            <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">{r.state}</label>
              <input type="text" id="state" name="state" required className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none text-sm" placeholder="E.g., Delhi" />
            </div>
            <div>
              <label htmlFor="pinCode" className="block text-sm font-medium text-gray-700 mb-1">{r.pinCode}</label>
              <input type="text" id="pinCode" name="pinCode" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none text-sm" />
            </div>
          </div>
        </div>
      </div>

      {/* Professional Information */}
      <div>
        <h3 className="text-lg font-semibold text-primary mb-3 border-b pb-2">{r.professionalInfo}</h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="mainSpec" className="block text-sm font-medium text-gray-700 mb-1">{r.mainSpecialization}</label>
            <input type="text" id="mainSpec" name="mainSpec" required className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none text-sm" placeholder="E.g., Vivah Muhurat, Grih Shanti" />
          </div>
          <div>
            <label htmlFor="otherServices" className="block text-sm font-medium text-gray-700 mb-1">{r.otherServices}</label>
            <input type="text" id="otherServices" name="otherServices" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none text-sm" placeholder="E.g., Havan, Puja, Kundli" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">{r.experienceYears}</label>
              <input type="number" id="experience" name="experience" required className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none text-sm" placeholder="E.g., 10" />
            </div>
            <div>
              <label htmlFor="languages" className="block text-sm font-medium text-gray-700 mb-1">{r.languagesKnown}</label>
              <input type="text" id="languages" name="languages" required className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none text-sm" placeholder="E.g., Hindi, Sanskrit, English" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{r.availableHomeVisit}</label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="homeVisit" value="Yes" defaultChecked /> <span className="text-sm">Yes</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="homeVisit" value="No" /> <span className="text-sm">No</span>
                </label>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{r.willingToTravel}</label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="travel" value="Yes" defaultChecked /> <span className="text-sm">Yes</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="travel" value="No" /> <span className="text-sm">No</span>
                </label>
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="serviceAreas" className="block text-sm font-medium text-gray-700 mb-1">{r.serviceAreas}</label>
            <input type="text" id="serviceAreas" name="serviceAreas" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none text-sm" placeholder="E.g., Delhi NCR, Noida, Gurgaon" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="workHours" className="block text-sm font-medium text-gray-700 mb-1">{r.preferredHours}</label>
              <input type="text" id="workHours" name="workHours" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none text-sm" placeholder="E.g., 7 AM - 8 PM" />
            </div>
            <div>
              <label htmlFor="dakshina" className="block text-sm font-medium text-gray-700 mb-1">{r.expectedDakshina}</label>
              <input type="text" id="dakshina" name="dakshina" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none text-sm" placeholder="E.g., ₹2,100 - ₹5,100" />
            </div>
          </div>
        </div>
      </div>

      {/* Services Offered */}
      <div>
        <h3 className="text-lg font-semibold text-primary mb-3 border-b pb-2">{r.servicesOffered}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {SERVICE_OPTIONS.map((s, i) => (
            <label key={i} className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" name={`svc_${i}`} value={s} className="rounded border-gray-300 text-saffron focus:ring-saffron" />
              <span className="text-sm text-gray-700">{s}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Declaration */}
      <div className="bg-saffron/5 border border-saffron/20 rounded-lg p-4">
        <label className="flex items-start gap-3 cursor-pointer">
          <input type="checkbox" name="declaration" required className="mt-1 rounded border-gray-300 text-saffron focus:ring-saffron" />
          <span className="text-sm text-gray-600">{r.declaration}</span>
        </label>
      </div>

      <p className="text-xs text-gray-400 text-center">{r.documentNote}</p>

      <button
        type="submit"
        className="w-full px-6 py-3 bg-navy text-white rounded-full font-semibold text-base hover:bg-navy-dark transition-colors shadow-lg shadow-navy/25"
      >
        {r.submit}
      </button>
    </form>
  );
}
