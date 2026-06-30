"use client";

import { useState } from "react";
import type { FAQ as FAQType } from "@/data/faqs";

export default function FAQ({ items }: { items: FAQType[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto divide-y divide-gray-200">
      {items.map((faq, index) => (
        <div key={index} className="py-4">
          <button
            className="w-full text-left flex items-center justify-between gap-4"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span className="text-base sm:text-lg font-medium text-gray-900">
              {faq.question}
            </span>
            <svg
              className={`w-5 h-5 text-saffron flex-shrink-0 transition-transform ${
                openIndex === index ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openIndex === index && (
            <div className="mt-3 text-sm text-gray-600 leading-relaxed">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
