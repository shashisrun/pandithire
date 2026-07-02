import type { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { validateLang, defaultLang } from "@/lib/i18n/types";

interface Props { params: Promise<{ lang: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = validateLang(langParam) ? langParam : defaultLang;
  const dict = await getDictionary(lang);
  return { title: `${dict.common.services} | PanditHire.in`, description: dict.services.subheading };
}

const categories = Array.from(new Set(services.map((s) => s.category)));

export default async function ServicesPage({ params }: Props) {
  const { lang: langParam } = await params;
  const lang = validateLang(langParam) ? langParam : defaultLang;
  const dict = await getDictionary(lang);
  const t = dict.services;

  return (
    <>
      <section className="bg-gradient-to-br from-cream to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary-dark">{t.heading}</h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">{t.subheading}</p>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {categories.map((category) => (
            <div key={category} className="mb-12">
              <h2 className="text-xl font-bold text-primary-dark mb-6 pb-2 border-b border-gray-200">{category}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {services.filter((s) => s.category === category).map((service) => (
                  <ServiceCard key={service.slug} service={service} dict={dict} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
