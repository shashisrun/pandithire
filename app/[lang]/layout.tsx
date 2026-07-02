import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyContactBar from "@/components/StickyContactBar";
import TopBar from "@/components/TopBar";
import Script from "next/script";
import { businessInfo } from "@/data/businessInfo";
import { validateLang, defaultLang } from "@/lib/i18n/types";
import { getDictionary } from "@/lib/i18n/dictionaries";

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: langParam } = await params;
  const lang = validateLang(langParam) ? langParam : defaultLang;
  const dict = await getDictionary(lang);

  return (
    <>
      {process.env.NEXT_PUBLIC_GA_ID && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} strategy="afterInteractive" />
          <Script id="google-analytics" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GA_ID}');`}
          </Script>
        </>
      )}
      <TopBar />
      <Header lang={lang} common={dict.common} />
      <main className="flex-1">{children}</main>
      <Footer lang={lang} common={dict.common} />
      <StickyContactBar lang={lang} common={dict.common} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: businessInfo.name,
          telephone: businessInfo.phoneNumbers.join(", "),
          areaServed: businessInfo.serviceAreas.join(", "),
          url: businessInfo.siteUrl,
          description: "Pandit booking service for Hindu puja, havan, wedding rituals, vastu, jyotish, and religious ceremonies.",
        }),
      }} />
      <div className="pb-20 md:pb-0" aria-hidden="true" />
    </>
  );
}
