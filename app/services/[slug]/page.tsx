import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceBySlug, getRelatedServices } from "@/data/services";
import { phoneLink, whatsappLink } from "@/data/businessInfo";

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: `${service.title} | Pandit Hire`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = getRelatedServices(service.relatedServices);
  const whatsappMsg = `Hello, I want to book a pandit for ${service.title}. Please share details.`;

  return (
    <>
      <section className="bg-gradient-to-br from-cream to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="text-saffron hover:text-saffron-dark font-medium text-sm inline-flex items-center gap-1 mb-6"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            All Services
          </Link>

          <h1 className="text-3xl sm:text-4xl font-bold text-maroon-dark">
            {service.title}
          </h1>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            {service.shortDescription}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-gray max-w-none">
            <h2 className="text-2xl font-bold text-maroon-dark mb-4">
              About This Puja
            </h2>
            <p className="text-gray-700 leading-relaxed">{service.description}</p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-cream/50 rounded-xl p-6">
                <h3 className="font-semibold text-maroon-dark mb-1">
                  Duration
                </h3>
                <p className="text-gray-600">{service.duration}</p>
              </div>
              <div className="bg-cream/50 rounded-xl p-6">
                <h3 className="font-semibold text-maroon-dark mb-1">
                  Starting Price
                </h3>
                <p className="text-gray-600">{service.startingPrice}</p>
              </div>
              <div className="bg-cream/50 rounded-xl p-6">
                <h3 className="font-semibold text-maroon-dark mb-1">
                  Samagri
                </h3>
                <p className="text-gray-600">
                  {service.samagriIncluded
                    ? "Samagri included in the package"
                    : "Samagri guidance provided. Call to confirm."}
                </p>
              </div>
              <div className="bg-cream/50 rounded-xl p-6">
                <h3 className="font-semibold text-maroon-dark mb-1">
                  Category
                </h3>
                <p className="text-gray-600">{service.category}</p>
              </div>
            </div>

            <div className="mt-8 bg-saffron/10 border border-saffron/20 rounded-xl p-6">
              <p className="text-gray-700 text-sm leading-relaxed">
                <span className="font-semibold">Important Note:</span> Final
                price and pandit availability will be confirmed manually over
                phone based on date, location, puja type, and samagri
                requirements.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={phoneLink}
              className="flex-1 text-center px-8 py-3.5 bg-saffron text-white rounded-full font-semibold text-base hover:bg-saffron-dark transition-colors shadow-lg shadow-saffron/25"
            >
              Call Now to Book
            </a>
            <a
              href={whatsappLink(whatsappMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-8 py-3.5 bg-green-600 text-white rounded-full font-semibold text-base hover:bg-green-700 transition-colors shadow-lg shadow-green-600/25"
            >
              WhatsApp Inquiry
            </a>
          </div>
        </div>
      </section>

      {relatedServices.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-maroon-dark text-center mb-8">
              Related Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {relatedServices.map((s) => (
                <div
                  key={s.slug}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center"
                >
                  <h3 className="font-semibold text-maroon-dark">{s.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">
                    {s.shortDescription}
                  </p>
                  <Link
                    href={`/services/${s.slug}`}
                    className="inline-block mt-4 text-saffron font-medium text-sm hover:text-saffron-dark"
                  >
                    View Details &rarr;
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
