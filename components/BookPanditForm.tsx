"use client";

import { useState } from "react";
import { businessInfo } from "@/data/businessInfo";
import type { Dictionary } from "@/lib/i18n/dictionaries";

interface BookPanditFormProps {
  dict: Dictionary;
}

const SERVICES = [
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
  "Festival Puja",
  "Other Religious Services",
];

export default function BookPanditForm({ dict }: BookPanditFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const c = dict.common;
  const t = dict.bookPandit;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
    const service = (form.elements.namedItem("service") as HTMLSelectElement).value;
    const date = (form.elements.namedItem("date") as HTMLInputElement).value;
    const time = (form.elements.namedItem("time") as HTMLInputElement).value;
    const location = (form.elements.namedItem("location") as HTMLInputElement).value;
    const city = (form.elements.namedItem("city") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const msg = `Namaste, I want to book a pandit.
*Service:* ${service}
*Name:* ${name}
*Phone:* ${phone}
*Date:* ${date || "Not specified"}
*Time:* ${time || "Not specified"}
*Location:* ${location}, ${city}
*Message:* ${message || "N/A"}
Please share availability and details.`;

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
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{t.thankYou}</h3>
        <p className="text-gray-600">{t.thankYouText}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">{c.name} *</label>
          <input type="text" id="name" name="name" required className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none text-sm" placeholder={c.yourFullName} />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">{c.phoneNumber} *</label>
          <input type="tel" id="phone" name="phone" required className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none text-sm" placeholder="+91 99999 99999" />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">{t.serviceRequired} *</label>
        <select id="service" name="service" required className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none text-sm bg-white">
          <option value="">-- Select Service --</option>
          {SERVICES.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">{t.preferredDate}</label>
          <input type="date" id="date" name="date" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none text-sm" />
        </div>
        <div>
          <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">{t.preferredTime}</label>
          <select id="time" name="time" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none text-sm bg-white">
            <option value="">-- Select Time --</option>
            <option value="Morning (6 AM - 9 AM)">Morning (6 AM - 9 AM)</option>
            <option value="Mid-Morning (9 AM - 12 PM)">Mid-Morning (9 AM - 12 PM)</option>
            <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
            <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">{t.city} *</label>
          <input type="text" id="city" name="city" required className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none text-sm" placeholder="E.g., Noida" />
        </div>
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">{t.location} *</label>
          <input type="text" id="location" name="location" required className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none text-sm" placeholder="E.g., Sector 62" />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">{t.message}</label>
        <textarea id="message" name="message" rows={3} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none text-sm" placeholder="Any special requirements..." />
      </div>

      <button
        type="submit"
        className="w-full px-6 py-3 bg-saffron text-white rounded-full font-semibold text-base hover:bg-saffron-dark transition-colors shadow-lg shadow-saffron/25"
      >
        {t.submit}
      </button>
    </form>
  );
}
