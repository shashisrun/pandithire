import { businessInfo } from "@/data/businessInfo";

export default function TopBar() {
  return (
    <div className="bg-primary-dark text-white/80 text-xs py-1.5 px-4 hidden md:block">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a href={`mailto:${businessInfo.email}`} className="hover:text-gold transition-colors">
            {businessInfo.email}
          </a>
          <span className="text-white/30">|</span>
          <span className="text-gold-light">श्री गणेशाय नमः</span>
        </div>
        <div>
          <span className="hover:text-gold transition-colors">
            Customer Support: +91 {businessInfo.phoneNumbers[0]}
          </span>
        </div>
      </div>
    </div>
  );
}
