"use client";

import { businessInfo } from "@/data/businessInfo";

export default function ContactForm() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-maroon-dark mb-6">
        Send a Quick Inquiry
      </h2>
      <p className="text-gray-600 text-sm mb-6">
        Fill this form and we will contact you. Or simply call or WhatsApp us
        for faster response.
      </p>
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.currentTarget;
          const name = (form.elements.namedItem("name") as HTMLInputElement)
            .value;
          const service = (
            form.elements.namedItem("service") as HTMLInputElement
          ).value;
          const location = (
            form.elements.namedItem("location") as HTMLInputElement
          ).value;
          const msg = `Hello, my name is ${name}. I want to book a pandit for ${service} in ${location}. Please share details.`;
          window.open(
            `https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent(msg)}`,
            "_blank",
            "noopener,noreferrer"
          );
        }}
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron/30 focus:border-saffron outline-none text-sm"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron/30 focus:border-saffron outline-none text-sm"
            placeholder="Your phone number"
          />
        </div>
        <div>
          <label
            htmlFor="service"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Puja Type
          </label>
          <input
            type="text"
            id="service"
            name="service"
            required
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron/30 focus:border-saffron outline-none text-sm"
            placeholder="E.g., Griha Pravesh Puja"
          />
        </div>
        <div>
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            required
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron/30 focus:border-saffron outline-none text-sm"
            placeholder="E.g., Noida Sector 62"
          />
        </div>
        <button
          type="submit"
          className="w-full px-6 py-3 bg-green-600 text-white rounded-full font-semibold text-sm hover:bg-green-700 transition-colors"
        >
          Send via WhatsApp
        </button>
      </form>
      <p className="text-xs text-gray-400 mt-3 text-center">
        Your inquiry will be sent as a WhatsApp message. You can also call us
        directly.
      </p>
    </div>
  );
}
