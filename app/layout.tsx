import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyContactBar from "@/components/StickyContactBar";
import Script from "next/script";
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
    default: "Hire Pandit for Puja at Home | Pandit Hire",
    template: "%s | Pandit Hire",
  },
  description:
    "Book experienced pandits for Griha Pravesh, Satyanarayan Puja, Wedding Rituals, Havan, Rudrabhishek, and other Hindu ceremonies. Call now for pandit booking.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: businessInfo.name,
    title: "Hire Pandit for Puja at Home | Pandit Hire",
    description:
      "Book experienced pandits for Griha Pravesh, Satyanarayan Puja, Wedding Rituals, Havan, Rudrabhishek, and other Hindu ceremonies.",
    url: businessInfo.siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col bg-white text-gray-900 antialiased">
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyContactBar />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: businessInfo.name,
              telephone: businessInfo.phone,
              areaServed: businessInfo.serviceAreas.join(", "),
              url: businessInfo.siteUrl,
              description:
                "Pandit booking service for Hindu puja, havan, wedding rituals, and religious ceremonies.",
              address: {
                "@type": "PostalAddress",
                addressLocality: businessInfo.city,
              },
            }),
          }}
        />

        <div className="pb-16 md:pb-0" aria-hidden="true" />
      </body>
    </html>
  );
}
