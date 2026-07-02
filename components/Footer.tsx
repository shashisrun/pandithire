import { businessInfo, phoneLink, whatsappLink } from "@/data/businessInfo";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Lang } from "@/lib/i18n/types";

type CommonDict = Dictionary["common"];

export default function Footer({ lang, common }: { lang: Lang; common: CommonDict }) {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-1">{businessInfo.name}</h3>
            <p className="text-gold-light text-xs mb-3">आपकी पूजा, आपके घर</p>
            <p className="text-gray-300 text-sm leading-relaxed">{common.footerDescription}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">त्वरित लिंक</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href={`/${lang}`} className="hover:text-gold transition-colors">होम</a></li>
              <li><a href={`/${lang}/about`} className="hover:text-gold transition-colors">हमारे बारे में</a></li>
              <li><a href={`/${lang}/services`} className="hover:text-gold transition-colors">हमारी सेवाएं</a></li>
              <li><a href={`/${lang}/contact`} className="hover:text-gold transition-colors">संपर्क करें</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">सेवाएं</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-gold transition-colors">पूजा सेवा</li>
              <li className="hover:text-gold transition-colors">विवाह सेवा</li>
              <li className="hover:text-gold transition-colors">ज्योतिष सेवा</li>
              <li className="hover:text-gold transition-colors">पूजा सामग्री</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">संपर्क</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href={phoneLink} className="hover:text-gold transition-colors">📞 {businessInfo.phoneNumbers[0]}</a></li>
              <li><a href={`mailto:${businessInfo.email}`} className="hover:text-gold transition-colors">✉️ {businessInfo.email}</a></li>
              <li><a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">💬 WhatsApp</a></li>
              <li className="text-xs mt-3">दिल्ली एनसीआर</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} {businessInfo.name}. सर्वाधिकार सुरक्षित।
        </div>
      </div>
    </footer>
  );
}
