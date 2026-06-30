import Link from "next/link";
import { phoneLink, whatsappLink } from "@/data/businessInfo";
import type { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
  showWhatsApp?: boolean;
}

export default function ServiceCard({
  service,
  showWhatsApp = true,
}: ServiceCardProps) {
  const whatsappMsg = `Hello, I want to book a pandit for ${service.title}. Please share details.`;

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 p-6 flex flex-col">
      <h3 className="text-lg font-semibold text-maroon-dark mb-2">
        {service.title}
      </h3>
      <p className="text-sm text-gray-600 mb-4 flex-1">
        {service.shortDescription}
      </p>
      <div className="text-xs text-gray-500 mb-4 space-y-1">
        <p>
          <span className="font-medium">Duration:</span> {service.duration}
        </p>
        <p>
          <span className="font-medium">Starting:</span> {service.startingPrice}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <Link
          href={`/services/${service.slug}`}
          className="text-center px-4 py-2 border border-saffron text-saffron rounded-full font-medium text-sm hover:bg-saffron hover:text-white transition-colors"
        >
          View Details
        </Link>
        <div className="flex gap-2">
          <a
            href={phoneLink}
            className="flex-1 text-center px-3 py-2 bg-saffron text-white rounded-full font-medium text-sm hover:bg-saffron-dark transition-colors"
          >
            Call
          </a>
          {showWhatsApp && (
            <a
              href={whatsappLink(whatsappMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-3 py-2 bg-green-600 text-white rounded-full font-medium text-sm hover:bg-green-700 transition-colors"
            >
              WhatsApp
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
