import type { Metadata } from "next";
import { businessInfo } from "@/data/businessInfo";

export const metadata: Metadata = {
  title: "About Pandit Hire | Trusted Pandit Booking Service",
  description:
    "We help families book experienced pandits for Hindu puja, havan, rituals, and religious ceremonies at home or event venues. Simple phone-based booking.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-cream to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-maroon-dark">
            About {businessInfo.name}
          </h1>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Your trusted partner for pandit booking and Hindu religious
            ceremonies.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-gray max-w-none space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-maroon-dark mb-4">
                Who We Are
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {businessInfo.name} helps families book experienced pandits for
                Hindu puja, havan, rituals, and religious ceremonies at home or
                event venues. Our aim is to make the booking process simple
                through direct phone and WhatsApp communication.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-maroon-dark mb-4">
                Our Pandits
              </h2>
              <p className="text-gray-700 leading-relaxed">
                All our pandits are well-versed in Vedic rituals, shlokas, and
                traditional Hindu ceremonies. They bring years of experience in
                performing pujas for families across {businessInfo.city}. We
                ensure that each pandit is knowledgeable, punctual, and
                respectful.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-maroon-dark mb-4">
                Ceremonies We Handle
              </h2>
              <ul className="text-gray-700 leading-relaxed space-y-2">
                <li>Griha Pravesh Puja for new homes</li>
                <li>Satyanarayan Puja for special occasions</li>
                <li>Wedding rituals and marriage ceremonies</li>
                <li>Havan and Yagna for peace and prosperity</li>
                <li>Rudrabhishek and Maha Mrityunjaya Jaap</li>
                <li>Naamkaran, Mundan, and Annaprashan samskaras</li>
                <li>Navgraha Shanti, Vastu Shanti, and Dosha Nivaran Pujas</li>
                <li>Janam Kundali and marriage matching services</li>
                <li>Festival pujas throughout the year</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-maroon-dark mb-4">
                Service Areas
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We currently serve {businessInfo.city} including{" "}
                {businessInfo.serviceAreas.join(", ")}. If you are located near
                these areas, please call us to check pandit availability for
                your location.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-maroon-dark mb-4">
                Booking Process
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Booking a pandit is straightforward. Browse our services, call
                or WhatsApp us with your requirements, and we will discuss date,
                time, location, puja type, and pandit availability. Once
                confirmed, the pandit will visit your home or venue as scheduled.
                All bookings are handled manually to ensure personalized service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-maroon-dark mb-4">
                Our Promise
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We are committed to providing trustworthy, reliable, and
                respectful pandit services. We believe in transparent
                communication, fair pricing, and ensuring that every ceremony is
                performed with sincerity and devotion. Your satisfaction and
                peace of mind are our priorities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
