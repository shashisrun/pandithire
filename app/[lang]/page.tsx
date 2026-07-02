import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import { popularServices } from "@/data/services";
import { businessInfo } from "@/data/businessInfo";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { validateLang, defaultLang } from "@/lib/i18n/types";
import Link from "next/link";

interface Props {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = validateLang(langParam) ? langParam : defaultLang;
  const dict = await getDictionary(lang);
  return {
    title: `${businessInfo.name} - ${businessInfo.tagline}`,
    description: dict.hero.subheading,
    openGraph: { title: `${businessInfo.name} - ${businessInfo.tagline}`, description: dict.hero.subheading, type: "website" },
  };
}

export default async function HomePage({ params }: Props) {
  const { lang: langParam } = await params;
  const lang = validateLang(langParam) ? langParam : defaultLang;
  const dict = await getDictionary(lang);
  const t = dict.home;
  const c = dict.common;

  return (
    <>
      <Hero dict={dict} />

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-dark">{t.popularServices}</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">{t.popularServicesDesc}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularServices.map((service) => (
              <ServiceCard key={service.slug} service={service} dict={dict} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href={`/${lang}/services`} className="px-8 py-3 border-2 border-saffron text-saffron rounded-full font-semibold hover:bg-saffron hover:text-white transition-colors inline-block">
              {c.viewAllServices}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-dark">{t.whyChooseUs}</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">{t.whyChooseUsDesc}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.whyPoints.map((item) => (
              <div key={item.title} className="text-center p-6 rounded-xl bg-cream/50">
                <h3 className="text-lg font-semibold text-primary-dark">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-dark">{t.howItWorks}</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">{t.howItWorksDesc}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {t.steps.map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-12 h-12 bg-saffron text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">{idx + 1}</div>
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">{t.joinPanditTitle}</h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">{t.joinPanditDesc}</p>
          <Link href={`/${lang}/register`} className="mt-8 inline-block px-8 py-3.5 bg-gold text-white rounded-full font-semibold hover:bg-gold-light hover:text-navy transition-colors shadow-lg shadow-gold/25">
            {t.joinPanditButton}
          </Link>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-dark">{t.serviceAreasTitle}</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">{t.serviceAreasDesc}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {businessInfo.serviceAreas.map((area) => (
              <span key={area} className="px-6 py-3 bg-cream text-primary-dark rounded-full font-medium text-sm border border-saffron/20">{area}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-dark">{t.faqTitle}</h2>
          </div>
          <FAQ dict={dict} />
        </div>
      </section>

      <CTASection dict={dict} />
    </>
  );
}
