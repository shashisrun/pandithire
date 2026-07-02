"use client";

import { businessInfo } from "@/data/businessInfo";
import { useState } from "react";

export default function RishtaForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
          <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-1">पंजीकरण सफल!</h3>
        <p className="text-sm text-gray-500">हम जल्द ही आपसे संपर्क करेंगे।</p>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = e.currentTarget;
    const d = (id: string) => (f.elements.namedItem(id) as HTMLInputElement)?.value || "";
    const msg = `*Rishta Registration - PanditHire.in*\nFor: ${d("forSelf")}\nName: ${d("name")}\nPhone: ${d("phone")}\nEmail: ${d("email")}\nDOB: ${d("dob")}\nEducation: ${d("education")}\nLocation: ${d("location")}`;
    window.open(`https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
    setSubmitted(true);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="flex gap-4">
        <label className="flex items-center gap-2 cursor-pointer flex-1">
          <input type="radio" name="forSelf" value="लड़का" defaultChecked className="text-saffron" />
          <span className="text-sm">मैं लड़का हूं</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer flex-1">
          <input type="radio" name="forSelf" value="लड़की" className="text-saffron" />
          <span className="text-sm">मैं लड़की हूं</span>
        </label>
      </div>
      <input type="text" name="name" placeholder="नाम" required className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-saffron/30 outline-none" />
      <input type="tel" name="phone" placeholder="मोबाइल नंबर" required className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-saffron/30 outline-none" />
      <input type="email" name="email" placeholder="ईमेल" className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-saffron/30 outline-none" />
      <input type="date" name="dob" className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-saffron/30 outline-none text-gray-400" />
      <input type="text" name="education" placeholder="शिक्षा" className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-saffron/30 outline-none" />
      <input type="text" name="location" placeholder="स्थान" required className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-saffron/30 outline-none" />
      <button type="submit" className="w-full px-6 py-3 bg-saffron text-white rounded-full font-bold hover:bg-saffron-dark transition-colors">पंजीकरण करें</button>
    </form>
  );
}
