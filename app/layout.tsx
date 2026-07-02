import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { businessInfo } from "@/data/businessInfo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(businessInfo.siteUrl),
  title: {
    default: `${businessInfo.name} - ${businessInfo.tagline}`,
    template: `%s | ${businessInfo.name}`,
  },
  description:
    "Book experienced pandits for puja, havan, kundli, vastu, jyotish, and religious ceremonies. Call or WhatsApp for pandit booking.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: businessInfo.name,
    title: `${businessInfo.name} - ${businessInfo.tagline}`,
    description:
      "Book experienced pandits for puja, havan, kundli, vastu, jyotish, and religious ceremonies.",
    url: businessInfo.siteUrl,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="hi" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
