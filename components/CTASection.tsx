import { phoneLink, whatsappLink } from "@/data/businessInfo";
import type { Dictionary } from "@/lib/i18n/dictionaries";

interface CTASectionProps {
  dict: Dictionary;
  title?: string;
  subtitle?: string;
}

export default function CTASection({ dict, title, subtitle }: CTASectionProps) {
  const t = dict.home;
  const c = dict.common;

  return (
    <section className="bg-gradient-to-br from-saffron to-maroon py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          {title || t.ctaHeading}
        </h2>
        <p className="mt-4 text-white/80 text-base sm:text-lg max-w-2xl mx-auto">
          {subtitle || t.ctaSubheading}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={phoneLink}
            className="w-full sm:w-auto px-8 py-3.5 bg-white text-saffron rounded-full font-semibold text-base hover:bg-gray-100 transition-colors"
          >
            {c.callNow}
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 bg-green-500 text-white rounded-full font-semibold text-base hover:bg-green-600 transition-colors"
          >
            {c.whatsapp}
          </a>
        </div>
      </div>
    </section>
  );
}
