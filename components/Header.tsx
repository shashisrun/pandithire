"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { phoneLink, whatsappLink } from "@/data/businessInfo";
import type { Lang } from "@/lib/i18n/types";
import { langs } from "@/lib/i18n/types";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type CommonDict = Dictionary["common"];

interface HeaderProps {
  lang: Lang;
  common: CommonDict;
}

export default function Header({ lang, common }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const switchLang = (newLang: Lang) => {
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length > 0 && (segments[0] === "en" || segments[0] === "hi" || segments[0] === "mr")) {
      segments[0] = newLang;
    }
    document.cookie = `lang=${newLang};path=/;max-age=31536000;samesite=lax`;
    window.location.href = "/" + segments.join("/");
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href={`/${lang}`} className="flex items-center gap-2">
            <span className="text-2xl" role="img" aria-label="Om">🕉️</span>
            <span className="text-xl font-bold text-primary">PanditHire.in</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href={`/${lang}`} className="text-gray-700 hover:text-primary font-medium transition-colors text-sm">{common.home}</Link>
            <Link href={`/${lang}/services`} className="text-gray-700 hover:text-primary font-medium transition-colors text-sm">{common.services}</Link>
            <Link href={`/${lang}/book-pandit`} className="text-gray-700 hover:text-primary font-medium transition-colors text-sm">{common.bookPandit || "Book Pandit"}</Link>
            <Link href={`/${lang}/register`} className="text-gray-700 hover:text-primary font-medium transition-colors text-sm">{common.registerAsPandit}</Link>
            <Link href={`/${lang}/about`} className="text-gray-700 hover:text-primary font-medium transition-colors text-sm">{common.about}</Link>
            <Link href={`/${lang}/contact`} className="text-gray-700 hover:text-primary font-medium transition-colors text-sm">{common.contact}</Link>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <select
              value={lang}
              onChange={(e) => switchLang(e.target.value as Lang)}
              className="bg-transparent text-sm font-medium text-gray-600 border border-gray-300 rounded-lg px-2 py-1 cursor-pointer focus:outline-none focus:ring-1 focus:ring-primary/30"
              aria-label="Select language"
            >
              {langs.map((l) => (
                <option key={l.code} value={l.code}>{l.nativeLabel}</option>
              ))}
            </select>
            <a href={phoneLink} className="px-4 py-2 bg-saffron text-white rounded-full font-medium text-sm hover:bg-saffron-dark transition-colors">{common.callNow}</a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-green-600 text-white rounded-full font-medium text-sm hover:bg-green-700 transition-colors">{common.whatsapp}</a>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <select
              value={lang}
              onChange={(e) => switchLang(e.target.value as Lang)}
              className="bg-transparent text-xs font-medium text-gray-600 border border-gray-300 rounded px-1 py-0.5 cursor-pointer"
              aria-label="Select language"
            >
              {langs.map((l) => (
                <option key={l.code} value={l.code}>{l.nativeLabel}</option>
              ))}
            </select>
            <button className="p-2 text-gray-700" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-3 space-y-3">
            <Link href={`/${lang}`} className="block text-gray-700 font-medium py-2" onClick={() => setMenuOpen(false)}>{common.home}</Link>
            <Link href={`/${lang}/services`} className="block text-gray-700 font-medium py-2" onClick={() => setMenuOpen(false)}>{common.services}</Link>
            <Link href={`/${lang}/book-pandit`} className="block text-gray-700 font-medium py-2" onClick={() => setMenuOpen(false)}>{common.bookPandit || "Book Pandit"}</Link>
            <Link href={`/${lang}/register`} className="block text-gray-700 font-medium py-2" onClick={() => setMenuOpen(false)}>{common.registerAsPandit}</Link>
            <Link href={`/${lang}/about`} className="block text-gray-700 font-medium py-2" onClick={() => setMenuOpen(false)}>{common.about}</Link>
            <Link href={`/${lang}/contact`} className="block text-gray-700 font-medium py-2" onClick={() => setMenuOpen(false)}>{common.contact}</Link>
            <div className="flex gap-3 pt-2">
              <a href={phoneLink} className="flex-1 text-center px-4 py-2 bg-saffron text-white rounded-full font-medium text-sm">{common.callNow}</a>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex-1 text-center px-4 py-2 bg-green-600 text-white rounded-full font-medium text-sm">{common.whatsapp}</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
