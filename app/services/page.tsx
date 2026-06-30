import type { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Puja Services and Pandit Booking | Pandit Hire",
  description:
    "Explore pandit services for home puja, wedding rituals, havan, Griha Pravesh, Satyanarayan Puja, Rudrabhishek, and more.",
};

const categories = Array.from(new Set(services.map((s) => s.category)));

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-cream to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-maroon-dark">
            Our Puja Services
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Browse all pandit services. Select a puja, call or WhatsApp us, and
            we will handle the rest.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {categories.map((category) => (
            <div key={category} className="mb-12">
              <h2 className="text-xl font-bold text-maroon-dark mb-6 pb-2 border-b border-gray-200">
                {category}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {services
                  .filter((s) => s.category === category)
                  .map((service) => (
                    <ServiceCard
                      key={service.slug}
                      service={service}
                    />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
