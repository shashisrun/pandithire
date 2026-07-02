import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceBySlug, getRelatedServices } from "@/data/services";
import { phoneLink, whatsappLink } from "@/data/businessInfo";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { validateLang, defaultLang } from "@/lib/i18n/types";

interface Props { params: Promise<{ lang: string; slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found" };
  return { title: `${service.title} | PanditHire.in`, description: service.shortDescription };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { lang: langParam, slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const lang = validateLang(langParam) ? langParam : defaultLang;
  const dict = await getDictionary(lang);
  const t = dict.services;
  const c = dict.common;
  const relatedServices = getRelatedServices(service.relatedServices);
  const whatsappMsg = `Namaste, I want to book a pandit for ${service.title}. Name: . Date: . Location: . Preferred Language: ${lang}. Please share availability and details.`;

  return (
    <>
      <section className="bg-gradient-to-br from-cream to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href={`/${lang}/services`} className="text-saffron hover:text-saffron-dark font-medium text-sm inline-flex items-center gap-1 mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            {c.allServices}
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-primary-dark">{service.title}</h1>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">{service.shortDescription}</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary-dark mb-4">{t.aboutThisPuja}</h2>
          <p className="text-gray-700 leading-relaxed">{service.description}</p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-cream/50 rounded-xl p-6"><h3 className="font-semibold text-primary-dark mb-1">{c.duration}</h3><p className="text-gray-600">{service.duration}</p></div>
            <div className="bg-cream/50 rounded-xl p-6"><h3 className="font-semibold text-primary-dark mb-1">{c.startingPrice}</h3><p className="text-gray-600">{service.startingPrice}</p></div>
            <div className="bg-cream/50 rounded-xl p-6"><h3 className="font-semibold text-primary-dark mb-1">{c.samagri}</h3><p className="text-gray-600">{service.samagriIncluded ? t.samagriIncluded : t.samagriGuidance}</p></div>
            <div className="bg-cream/50 rounded-xl p-6"><h3 className="font-semibold text-primary-dark mb-1">{c.category}</h3><p className="text-gray-600">{service.category}</p></div>
          </div>

          <div className="mt-8 bg-saffron/10 border border-saffron/20 rounded-xl p-6">
            <p className="text-gray-700 text-sm leading-relaxed"><span className="font-semibold">{c.importantNote}:</span> {t.bookingNote}</p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a href={phoneLink} className="flex-1 text-center px-8 py-3.5 bg-saffron text-white rounded-full font-semibold text-base hover:bg-saffron-dark transition-colors shadow-lg shadow-saffron/25">{c.callNowToBook}</a>
            <a href={whatsappLink(whatsappMsg)} target="_blank" rel="noopener noreferrer" className="flex-1 text-center px-8 py-3.5 bg-green-600 text-white rounded-full font-semibold text-base hover:bg-green-700 transition-colors shadow-lg shadow-green-600/25">{c.whatsappInquiry}</a>
          </div>
        </div>
      </section>

      {relatedServices.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-primary-dark text-center mb-8">{c.relatedServices}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {relatedServices.map((s) => (
                <div key={s.slug} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
                  <h3 className="font-semibold text-primary-dark">{s.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{s.shortDescription}</p>
                  <Link href={`/${lang}/services/${s.slug}`} className="inline-block mt-4 text-saffron font-medium text-sm hover:text-saffron-dark">{c.viewDetails} &rarr;</Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
