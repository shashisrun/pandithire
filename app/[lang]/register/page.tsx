import type { Metadata } from "next";
import PanditRegisterForm from "@/components/PanditRegisterForm";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { validateLang, defaultLang } from "@/lib/i18n/types";

interface Props { params: Promise<{ lang: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = validateLang(langParam) ? langParam : defaultLang;
  const dict = await getDictionary(lang);
  return { title: `${dict.register.heading} | PanditHire.in`, description: dict.register.subheading };
}

export default async function RegisterPage({ params }: Props) {
  const { lang: langParam } = await params;
  const lang = validateLang(langParam) ? langParam : defaultLang;
  const dict = await getDictionary(lang);
  const r = dict.register;

  return (
    <>
      <section className="bg-gradient-to-br from-navy via-navy to-primary-dark py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">{r.heading}</h1>
          <p className="mt-4 text-white/80 text-lg max-w-2xl mx-auto">{r.subheading}</p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-primary-dark text-center mb-8">{r.benefitsTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[r.benefit1, r.benefit2, r.benefit3, r.benefit4, r.benefit5, r.benefit6].map((b, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
                <div className="w-10 h-10 bg-saffron/10 text-saffron rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">{i + 1}</div>
                <p className="text-gray-700 text-sm">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-xl p-6 sm:p-8 border border-gray-200">
            <h2 className="text-xl font-semibold text-primary mb-6">{r.formHeading}</h2>
            <PanditRegisterForm dict={dict} />
          </div>
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>{r.reviewNote}</p>
          </div>
        </div>
      </section>
    </>
  );
}
