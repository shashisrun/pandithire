import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { validateLang, defaultLang } from "@/lib/i18n/types";
import { businessInfo, phoneLink, whatsappLink } from "@/data/businessInfo";
import { popularServices, services } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";
import FAQ from "@/components/FAQ";
import RishtaForm from "@/components/RishtaForm";
import {
  IconGrihaPravesh, IconNaamkaran, IconHavan, IconBhoomiPuja,
  IconShraddh, IconSamagri, IconJyotish, IconOtherServices,
} from "@/components/Icons";

interface Props { params: Promise<{ lang: string }> }

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

const serviceIcons = [
  { icon: IconGrihaPravesh, title: "गृह प्रवेश पूजा", slug: "griha-pravesh-puja" },
  { icon: IconNaamkaran, title: "नामकरण संस्कार", slug: "naamkaran-puja" },
  { icon: IconHavan, title: "हवन एवं शांति पूजा", slug: "havan-and-yagya" },
  { icon: IconBhoomiPuja, title: "भूमि पूजा", slug: "bhoomi-pujan" },
  { icon: IconShraddh, title: "श्राद्ध पूजा", slug: "pitru-dosh-puja" },
  { icon: IconSamagri, title: "पूजा सामग्री", slug: "puja-and-abhishek" },
  { icon: IconJyotish, title: "ज्योतिष परामर्श", slug: "jyotish-paramarsh" },
  { icon: IconOtherServices, title: "अन्य सभी सेवाएं", slug: "festival-puja" },
];

const bhajanKirtanCards = [
  {
    title: "भजन",
    desc: "भक्ति भजन से मन को शांति मिले और घर में सुख-समृद्धि का वास हो।",
    cta: "भजन बुक करें",
    color: "from-amber-50 to-orange-50",
    img: "/images/bhajan-card.png",
  },
  {
    title: "कीर्तन",
    desc: "हरि नाम संकीर्तन से सभी दुख दूर हों और जीवन में खुशहाली आए।",
    cta: "कीर्तन बुक करें",
    color: "from-yellow-50 to-amber-50",
    img: "/images/kirtan-card.png",
  },
  {
    title: "सुंदरकांड पाठ",
    desc: "सुंदरकांड पाठ से संकटों का नाश होता है और हनुमान जी की कृपा प्राप्त होती है।",
    cta: "पाठ बुक करें",
    color: "from-orange-50 to-red-50",
    img: "/images/sundarkand-path.png",
  },
];

const pandits = [
  { name: "पं. रामकृष्ण शास्त्री", exp: "10+ वर्ष", spec: "पूजा, हवन, संस्कार", rating: "4.9", city: "दिल्ली", bookings: 1250 },
  { name: "पं. शिवनाथ मिश्रा", exp: "15+ वर्ष", spec: "विवाह, ज्योतिष, वास्तु", rating: "4.8", city: "नोएडा", bookings: 2100 },
  { name: "पं. दीपक तिवारी", exp: "8+ वर्ष", spec: "गृह प्रवेश, हवन, पूजा", rating: "4.9", city: "गुरुग्राम", bookings: 980 },
  { name: "पं. सूर्यकांत दुबे", exp: "20+ वर्ष", spec: "कर्मकांड, संस्कार, ज्योतिष", rating: "4.7", city: "गाज़ियाबाद", bookings: 3100 },
];

const whyPoints = [
  { title: "विश्वसनीय पंडित", desc: "अनुभवी और प्रमाणित पंडित" },
  { title: "घर बैठे सेवा", desc: "पंडित आपके घर आएंगे" },
  { title: "समय पर सेवा", desc: "निर्धारित समय पर पूजा" },
  { title: "उचित शुल्क", desc: "पारदर्शी और उचित मूल्य" },
  { title: "100% संतुष्टि", desc: "ग्राहक संतुष्टि की गारंटी" },
  { title: "24/7 सहायता", desc: "कभी भी संपर्क करें" },
];

const testimonials = [
  { name: "श्रीमती गुप्ता", city: "नोएडा", text: "गृह प्रवेश पूजा बहुत अच्छे से कराई। पंडित जी समय पर आए और सभी विधि-विधान से पूजा संपन्न हुई।", rating: 5 },
  { name: "राहुल शर्मा", city: "गुरुग्राम", text: "विवाह के लिए पंडित जी बुक किए। सभी रस्में बहुत अच्छे से कराई। बहुत संतुष्ट हूं।", rating: 5 },
  { name: "श्रीमती वर्मा", city: "दिल्ली", text: "सत्यनारायण पूजा कराई। पंडित जी बहुत ज्ञानी और विनम्र थे। सब कुछ बहुत सहज रहा।", rating: 5 },
];

export default async function HomePage({ params }: Props) {
  const { lang: langParam } = await params;
  const lang = validateLang(langParam) ? langParam : defaultLang;
  const dict = await getDictionary(lang);
  const t = dict.home;

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-maroon via-saffron-dark to-primary-dark py-20 sm:py-28 overflow-hidden">
        <Image
          src="/images/home_banner.png"
          alt="Pandit performing havan with puja thali"
          fill
          className="object-cover opacity-30 mix-blend-overlay"
          priority
        />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-gold blur-3xl" />
          <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-gold-light blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
              धर्म की सेवा, आसान और विश्वास के साथ
            </h1>
            <p className="mt-4 text-xl text-white/90">
              पंडित जी से कराएं सभी पूजा, संस्कार और समाधान
            </p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
              {["अनुभवी और प्रमाणित पंडित जी", "घर बैठे पूजा सेवा", "सभी पूजा सामग्री उपलब्ध", "सेवा की 100% गारंटी"].map((t) => (
                <div key={t} className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 text-white text-xs text-center">{t}</div>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href={`/${lang}/book-pandit`} className="w-full sm:w-auto px-8 py-3.5 bg-gold text-white rounded-full font-bold text-lg hover:bg-gold-light transition-colors shadow-xl shadow-gold/30">
                अभी बुक करें
              </Link>
              <Link href={`/${lang}/services`} className="w-full sm:w-auto px-8 py-3.5 border-2 border-white/50 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-colors">
                हमारी सेवाएं देखें
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Icons Grid */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-dark text-center mb-12">हमारी सेवाएं</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {serviceIcons.map(({ icon: Icon, title, slug }) => (
              <Link key={slug} href={`/${lang}/services/${slug}`} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100 group">
                <div className="text-saffron mb-3 flex justify-center group-hover:scale-110 transition-transform">{<Icon />}</div>
                <h3 className="text-sm font-semibold text-primary-dark">{title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-dark text-center mb-4">लोकप्रिय सेवाएं</h2>
          <p className="text-gray-500 text-center mb-12">सबसे अधिक बुक की जाने वाली पूजा सेवाएं</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularServices.map((s) => <ServiceCard key={s.slug} service={s} dict={dict} />)}
          </div>
          <div className="text-center mt-10">
            <Link href={`/${lang}/services`} className="px-8 py-3 bg-saffron text-white rounded-full font-semibold hover:bg-saffron-dark transition-colors inline-block">सभी सेवाएं देखें</Link>
          </div>
        </div>
      </section>

      {/* Bhajan, Kirtan & Sundarkand Path */}
      <section className="py-16 bg-gradient-to-b from-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-dark text-center mb-4">भजन, कीर्तन एवं सुंदरकांड पाठ</h2>
          <p className="text-gray-500 text-center mb-12">अपने घर में भक्ति और शांति का वातावरण बनाएं</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bhajanKirtanCards.map((card) => (
              <div key={card.title} className={`rounded-2xl overflow-hidden bg-gradient-to-br ${card.color} border border-gray-200 hover:shadow-xl transition-all duration-300`}>
                <div className="relative h-48">
                  <Image src={card.img} alt={card.title} fill className="object-cover" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-primary-dark mb-3">{card.title}</h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">{card.desc}</p>
                  <Link href={`/${lang}/book-pandit`} className="inline-block px-6 py-2.5 bg-saffron text-white rounded-full font-semibold text-sm hover:bg-saffron-dark transition-colors">{card.cta}</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experienced Pandits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-dark text-center mb-4">हमारे अनुभवी पंडित</h2>
          <p className="text-gray-500 text-center mb-12">वर्षों के अनुभव वाले प्रमाणित पंडित</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pandits.map((p) => (
              <div key={p.name} className="bg-cream/50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 text-center">
                <div className="relative h-48 bg-saffron/5 flex items-center justify-center">
                  <Image src="/images/pandit-profile-card.png" alt={p.name} fill className="object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-primary-dark">{p.name}</h3>
                  <p className="text-xs text-saffron font-medium mt-1">{p.exp} अनुभव</p>
                  <p className="text-xs text-gray-500 mt-2">{p.spec}</p>
                  <div className="flex items-center justify-center gap-1 mt-3">
                    <span className="text-yellow-500 text-sm">★★★★★</span>
                    <span className="text-xs text-gray-500 ml-1">{p.rating}</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">{p.city} · {p.bookings}+ बुकिंग</p>
                  <button className="mt-4 text-sm text-saffron font-medium hover:text-saffron-dark">जानकारी देखें</button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href={`/${lang}/register`} className="px-8 py-3 border-2 border-saffron text-saffron rounded-full font-semibold hover:bg-saffron hover:text-white transition-colors inline-block">पंडित के रूप में जुड़ें</Link>
          </div>
        </div>
      </section>

      {/* Vivah Seva Section */}
      <section className="py-16 bg-gradient-to-br from-maroon-dark to-maroon">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="relative h-64 sm:h-80 mb-6 rounded-2xl overflow-hidden shadow-lg">
                <Image src="/images/vivah-sewa.png" alt="Vivah Seva - Hindu Wedding" fill className="object-cover" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">विवाह सेवा</h2>
              <p className="text-gold-light text-lg font-semibold mb-4">हम करते हैं आपका शुभ विवाह</p>
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                यदि आप अपने परिवार के लिए विवाह संस्कार और अनुभवी आचार्य की तलाश में हैं, तो PanditHire.in आपकी मदद के लिए है।
              </p>
              <ul className="space-y-3 text-sm mb-8">
                {["वेरिफाइड वर और वधु की जानकारी", "कुंडली मिलान सुविधा", "रिश्ता चयन सहायता", "विवाह पूजा और संस्कार", "ऑनलाइन सहायता और मार्गदर्शन"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-white/90">
                    <span className="text-gold">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-bold text-primary-dark mb-6 text-center">रिश्ता पंजीकरण</h3>
              <RishtaForm />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-dark text-center mb-4">हमें क्यों चुनें?</h2>
          <p className="text-gray-500 text-center mb-12">PanditHire.in को भारत का सबसे भरोसेमंद पंडित सेवा प्लेटफॉर्म बनाने वाली बातें</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyPoints.map((p) => (
              <div key={p.title} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-saffron/10 text-saffron rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">✓</div>
                <h3 className="font-bold text-primary-dark">{p.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-dark text-center mb-4">हमारे ग्राहकों का अनुभव</h2>
          <p className="text-gray-500 text-center mb-12">हज़ारों संतुष्ट परिवारों ने हम पर भरोसा किया है</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-cream/50 rounded-2xl p-8 border border-gray-100">
                <div className="flex gap-1 mb-4 text-yellow-500">
                  {[...Array(t.rating)].map((_, i) => <span key={i}>★</span>)}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-saffron/20 rounded-full flex items-center justify-center text-lg">👤</div>
                  <div>
                    <p className="font-semibold text-primary-dark text-sm">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-dark text-center mb-12">{t.faqTitle}</h2>
          <FAQ dict={dict} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-saffron to-maroon">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">पंडित जी से पूजा बुक करें</h2>
          <p className="text-white/80 mb-8">अपनी पसंद की पूजा चुनें और अनुभवी पंडितों से घर बैठे सेवा प्राप्त करें</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={phoneLink} className="px-8 py-3.5 bg-white text-saffron rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">अभी कॉल करें</a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 bg-green-500 text-white rounded-full font-bold text-lg hover:bg-green-600 transition-colors shadow-lg">WhatsApp करें</a>
          </div>
        </div>
      </section>
    </>
  );
}
