"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { phoneLink, whatsappLink } from "@/data/businessInfo";
import type { Lang } from "@/lib/i18n/types";
import { langs } from "@/lib/i18n/types";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type CommonDict = Dictionary["common"];

export default function Header({ lang, common }: { lang: Lang; common: CommonDict }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const switchLang = (newLang: Lang) => {
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length > 0 && ["en", "hi", "mr"].includes(segments[0])) segments[0] = newLang;
    document.cookie = `lang=${newLang};path=/;max-age=31536000;samesite=lax`;
    window.location.href = "/" + segments.join("/");
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href={`/${lang}`} className="flex items-center gap-2">
            <span className="text-2xl">🕉️</span>
            <div>
              <span className="text-xl font-bold text-primary">PanditHire.in</span>
              <p className="text-[10px] text-gray-400 -mt-1 hidden sm:block">आपकी पूजा, आपके घर</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-5 text-sm">
            <Link href={`/${lang}`} className="text-gray-700 hover:text-primary font-medium">{common.home}</Link>
            <Link href={`/${lang}/services`} className="text-gray-700 hover:text-primary font-medium">{common.services}</Link>
            <Link href={`/${lang}/book-pandit`} className="text-gray-700 hover:text-primary font-medium">पंडित बुक करें</Link>
            <Link href={`/${lang}/register`} className="text-gray-700 hover:text-primary font-medium">पंडित जुड़ें</Link>
            <Link href={`/${lang}/about`} className="text-gray-700 hover:text-primary font-medium">{common.about}</Link>
            <Link href={`/${lang}/contact`} className="text-gray-700 hover:text-primary font-medium">{common.contact}</Link>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <select value={lang} onChange={(e) => switchLang(e.target.value as Lang)} className="bg-transparent text-sm font-medium text-gray-600 border border-gray-300 rounded-lg px-2 py-1 cursor-pointer focus:outline-none">
              {langs.map((l) => <option key={l.code} value={l.code}>{l.nativeLabel}</option>)}
            </select>
            <Link href={`/${lang}/book-pandit`} className="px-4 py-2 bg-saffron text-white rounded-full font-medium text-sm hover:bg-saffron-dark transition-colors">{common.bookPandit}</Link>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <select value={lang} onChange={(e) => switchLang(e.target.value as Lang)} className="bg-transparent text-xs text-gray-600 border border-gray-300 rounded px-1 py-0.5">
              {langs.map((l) => <option key={l.code} value={l.code}>{l.nativeLabel}</option>)}
            </select>
            <button className="p-2 text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white border-t pb-3">
          <nav className="px-4 py-2 space-y-2">
            {[
              { href: `/${lang}`, label: common.home },
              { href: `/${lang}/services`, label: common.services },
              { href: `/${lang}/book-pandit`, label: "पंडित बुक करें" },
              { href: `/${lang}/register`, label: "पंडित जुड़ें" },
              { href: `/${lang}/about`, label: common.about },
              { href: `/${lang}/contact`, label: common.contact },
            ].map(({ href, label }) => (
              <Link key={href} href={href} className="block text-gray-700 font-medium py-2" onClick={() => setMenuOpen(false)}>{label}</Link>
            ))}
            <div className="flex gap-3 pt-2">
              <a href={phoneLink} className="flex-1 text-center px-4 py-2 bg-saffron text-white rounded-full font-medium text-sm">{common.callNow}</a>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex-1 text-center px-4 py-2 bg-green-600 text-white rounded-full font-medium text-sm">{common.whatsapp}</a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
