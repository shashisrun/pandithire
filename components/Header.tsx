"use client";

import { useState } from "react";
import Link from "next/link";
import { businessInfo, phoneLink, whatsappLink } from "@/data/businessInfo";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl" role="img" aria-label="Om">
              🕉️
            </span>
            <span className="text-xl font-bold text-maroon">
              {businessInfo.name}
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-saffron font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-saffron font-medium transition-colors"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-saffron font-medium transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-saffron font-medium transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={phoneLink}
              className="px-4 py-2 bg-saffron text-white rounded-full font-medium text-sm hover:bg-saffron-dark transition-colors"
            >
              Call Now
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-green-600 text-white rounded-full font-medium text-sm hover:bg-green-700 transition-colors"
            >
              WhatsApp
            </a>
          </div>

          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-3 space-y-3">
            <Link
              href="/"
              className="block text-gray-700 font-medium py-2"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="block text-gray-700 font-medium py-2"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/about"
              className="block text-gray-700 font-medium py-2"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block text-gray-700 font-medium py-2"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex gap-3 pt-2">
              <a
                href={phoneLink}
                className="flex-1 text-center px-4 py-2 bg-saffron text-white rounded-full font-medium text-sm"
              >
                Call Now
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center px-4 py-2 bg-green-600 text-white rounded-full font-medium text-sm"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
