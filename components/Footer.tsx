import { businessInfo, phoneLink, whatsappLink } from "@/data/businessInfo";

export default function Footer() {
  return (
    <footer className="bg-maroon-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Pandit Hire</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Book experienced pandits for Hindu puja, havan, wedding rituals,
              Griha Pravesh, Satyanarayan Puja, Rudrabhishek, and other
              religious ceremonies.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="/" className="hover:text-saffron transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-saffron transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-saffron transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-saffron transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href={phoneLink} className="hover:text-saffron transition-colors">
                  Phone: {businessInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-saffron transition-colors"
                >
                  WhatsApp: +91 {businessInfo.whatsapp}
                </a>
              </li>
              <li>Service Areas: {businessInfo.serviceAreas.join(", ")}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} {businessInfo.name}. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
