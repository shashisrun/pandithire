import { businessInfo, phoneLink, whatsappLink } from "@/data/businessInfo";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Lang } from "@/lib/i18n/types";

type CommonDict = Dictionary["common"];

interface FooterProps {
  lang: Lang;
  common: CommonDict;
}

export default function Footer({ lang, common }: FooterProps) {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">{businessInfo.name}</h3>
            <p className="text-gray-300 text-xs mb-2 italic">{businessInfo.tagline}</p>
            <p className="text-gray-300 text-sm leading-relaxed">{common.footerDescription}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{common.quickLinks}</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href={`/${lang}`} className="hover:text-gold transition-colors">{common.home}</a></li>
              <li><a href={`/${lang}/services`} className="hover:text-gold transition-colors">{common.services}</a></li>
              <li><a href={`/${lang}/book-pandit`} className="hover:text-gold transition-colors">{common.bookPandit || "Book Pandit"}</a></li>
              <li><a href={`/${lang}/register`} className="hover:text-gold transition-colors">{common.registerAsPandit}</a></li>
              <li><a href={`/${lang}/about`} className="hover:text-gold transition-colors">{common.about}</a></li>
              <li><a href={`/${lang}/contact`} className="hover:text-gold transition-colors">{common.contact}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{common.topServices || "Top Services"}</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-gold transition-colors">{common.serviceVivahMuhurat || "Vivah Muhurat"}</li>
              <li className="hover:text-gold transition-colors">{common.serviceGrihShanti || "Grih Shanti"}</li>
              <li className="hover:text-gold transition-colors">{common.serviceKundli || "Kundli Matching"}</li>
              <li className="hover:text-gold transition-colors">{common.serviceVastu || "Vastu Solution"}</li>
              <li className="hover:text-gold transition-colors">{common.serviceJyotish || "Jyotish Paramarsh"}</li>
              <li className="hover:text-gold transition-colors">{common.serviceHavan || "Havan & Yagya"}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{common.contactUs}</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href={phoneLink} className="hover:text-gold transition-colors">{common.phone}: {businessInfo.phoneNumbers[0]}</a></li>
              <li><a href={phoneLink} className="hover:text-gold transition-colors">{common.phone}: {businessInfo.phoneNumbers[1]}</a></li>
              <li><a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">{common.whatsapp}: +91 {businessInfo.whatsapp}</a></li>
              <li><a href={`mailto:${businessInfo.email}`} className="hover:text-gold transition-colors">{common.email}: {businessInfo.email}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} {businessInfo.name}. {common.copyright}
        </div>
      </div>
    </footer>
  );
}
