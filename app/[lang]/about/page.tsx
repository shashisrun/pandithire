import type { Metadata } from "next";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { validateLang, defaultLang } from "@/lib/i18n/types";

interface Props { params: Promise<{ lang: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = validateLang(langParam) ? langParam : defaultLang;
  const dict = await getDictionary(lang);
  return { title: `${dict.about.heading} | PanditHire.in`, description: dict.about.subheading };
}

export default async function AboutPage({ params }: Props) {
  const { lang: langParam } = await params;
  const lang = validateLang(langParam) ? langParam : defaultLang;
  const dict = await getDictionary(lang);
  const t = dict.about;
  const c = dict.ceremonies;

  return (
    <>
      <section className="bg-gradient-to-br from-navy via-navy to-primary-dark py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">{t.heading}</h1>
          <p className="mt-4 text-white/80 text-lg max-w-2xl mx-auto">{t.subheading}</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-primary-dark mb-4">{t.whoWeAre}</h2>
              <p className="text-gray-700 leading-relaxed">{t.whoWeAreText}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary-dark mb-4">{t.missionTitle || "Our Mission"}</h2>
              <p className="text-gray-700 leading-relaxed">{t.missionText}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary-dark mb-4">{t.ourPandits}</h2>
              <p className="text-gray-700 leading-relaxed">{t.ourPanditsText}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary-dark mb-4">{t.ceremoniesWeHandle}</h2>
              <ul className="text-gray-700 leading-relaxed space-y-2 list-disc list-inside">
                {c.map((item, idx) => <li key={idx}>{item}</li>)}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary-dark mb-4">{t.serviceAreasAbout}</h2>
              <p className="text-gray-700 leading-relaxed">{t.serviceAreasAboutText}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary-dark mb-4">{t.bookingProcess}</h2>
              <p className="text-gray-700 leading-relaxed">{t.bookingProcessText}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary-dark mb-4">{t.ourPromise}</h2>
              <p className="text-gray-700 leading-relaxed">{t.ourPromiseText}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
