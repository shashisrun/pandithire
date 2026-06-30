import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import { popularServices } from "@/data/services";
import { faqs } from "@/data/faqs";
import { businessInfo } from "@/data/businessInfo";

export const metadata: Metadata = {
  title: "Hire Pandit for Puja at Home | Pandit Hire",
  description:
    "Book experienced pandits for Griha Pravesh, Satyanarayan Puja, Wedding Rituals, Havan, Rudrabhishek, and other Hindu ceremonies. Call now for pandit booking.",
  openGraph: {
    title: "Hire Pandit for Puja at Home | Pandit Hire",
    description:
      "Book experienced pandits for Griha Pravesh, Satyanarayan Puja, Wedding Rituals, Havan, Rudrabhishek, and other Hindu ceremonies.",
    type: "website",
  },
};

const whyChooseUs = [
  {
    title: "Experienced Pandits",
    desc: "All our pandits are well-versed in Vedic rituals with years of experience.",
  },
  {
    title: "Samagri Guidance",
    desc: "We guide you on required puja samagri so you are well prepared.",
  },
  {
    title: "Service at Home",
    desc: "Pandits visit your home, office, or event location for the puja.",
  },
  {
    title: "Language Support",
    desc: "Pandits who speak Hindi and local languages for clear communication.",
  },
  {
    title: "Easy Booking",
    desc: "Just call or WhatsApp us to book. No complicated online process.",
  },
  {
    title: "Transparent Process",
    desc: "All details discussed and confirmed before booking. No hidden charges.",
  },
];

const howItWorks = [
  {
    step: "1",
    title: "Select Puja Service",
    desc: "Browse our services and choose the puja you need.",
  },
  {
    step: "2",
    title: "Call or WhatsApp Us",
    desc: "Reach out to discuss your requirements with our team.",
  },
  {
    step: "3",
    title: "Discuss Details",
    desc: "Share date, time, location, and any specific requirements.",
  },
  {
    step: "4",
    title: "Confirm Booking",
    desc: "We confirm pandit availability and finalize the booking manually.",
  },
  {
    step: "5",
    title: "Pandit Visits Your Home",
    desc: "The pandit arrives on time and performs the puja as per rituals.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-maroon-dark">
              Popular Puja Services
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Browse our most requested pandit services. All bookings are
              confirmed manually over phone.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="/services"
              className="px-8 py-3 border-2 border-saffron text-saffron rounded-full font-semibold hover:bg-saffron hover:text-white transition-colors inline-block"
            >
              View All Services
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-maroon-dark">
              Why Choose {businessInfo.name}?
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We make pandit booking simple, transparent, and trustworthy.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="text-center p-6 rounded-xl bg-cream/50"
              >
                <h3 className="text-lg font-semibold text-maroon-dark">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-maroon-dark">
              How It Works
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Booking a pandit is simple. Follow these steps.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {howItWorks.map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-saffron text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-maroon-dark">
              Service Areas
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We currently serve the following cities and surrounding areas.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {businessInfo.serviceAreas.map((area) => (
              <span
                key={area}
                className="px-6 py-3 bg-cream text-maroon-dark rounded-full font-medium text-sm border border-saffron/20"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-maroon-dark">
              Frequently Asked Questions
            </h2>
          </div>
          <FAQ items={faqs} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
