import Link from "next/link";
import { phoneLink, whatsappLink } from "@/data/businessInfo";
import type { Dictionary } from "@/lib/i18n/dictionaries";

interface HeroProps {
  dict: Dictionary;
}

export default function Hero({ dict }: HeroProps) {
  const t = dict.hero;
  const c = dict.common;

  return (
    <section className="relative bg-gradient-to-br from-cream to-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-maroon-dark leading-tight">
            {t.heading}
          </h1>
          <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed">
            {t.subheading}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={phoneLink}
              className="w-full sm:w-auto px-8 py-3.5 bg-saffron text-white rounded-full font-semibold text-base hover:bg-saffron-dark transition-colors shadow-lg shadow-saffron/25"
            >
              {c.callNow}
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 bg-green-600 text-white rounded-full font-semibold text-base hover:bg-green-700 transition-colors shadow-lg shadow-green-600/25"
            >
              {c.whatsappInquiry || "WhatsApp Inquiry"}
            </a>
            <Link
              href="/services"
              className="w-full sm:w-auto px-8 py-3.5 border-2 border-saffron text-saffron rounded-full font-semibold text-base hover:bg-saffron hover:text-white transition-colors"
            >
              {c.viewServices}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
