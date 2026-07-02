import type { Metadata } from "next";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { validateLang, defaultLang } from "@/lib/i18n/types";
import BookPanditForm from "@/components/BookPanditForm";

interface Props {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = validateLang(langParam) ? langParam : defaultLang;
  const dict = await getDictionary(lang);

  return {
    title: `${dict.common.bookPandit} | PanditHire.in`,
    description:
      "Book a pandit for puja, havan, kundli, vastu, jyotish, and religious ceremonies. Fill the inquiry form and our team will contact you.",
  };
}

export default async function BookPanditPage({ params }: Props) {
  const { lang: langParam } = await params;
  const lang = validateLang(langParam) ? langParam : defaultLang;
  const dict = await getDictionary(lang);
  const t = dict.bookPandit;

  return (
    <>
      <section className="bg-gradient-to-br from-navy via-navy to-primary-dark py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            {t.heading}
          </h1>
          <p className="mt-4 text-white/80 text-lg max-w-2xl mx-auto">
            {t.subheading}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-xl p-6 sm:p-8 border border-gray-200">
            <h2 className="text-xl font-semibold text-primary mb-6">
              {t.formHeading}
            </h2>
            <BookPanditForm dict={dict} />
          </div>
        </div>
      </section>
    </>
  );
}
