export const businessInfo = {
  name: "Pandit Hire",
  phone: "+91 99999 99999",
  whatsapp: "919999999999",
  email: "contact@pandithire.com",
  city: "Delhi NCR",
  serviceAreas: ["Delhi", "Noida", "Gurgaon", "Ghaziabad", "Faridabad"],
  workingHours: "8:00 AM - 9:00 PM",
  address: "Delhi NCR",
  siteUrl: "https://pandithire.com",
};

export const phoneLink = `tel:${businessInfo.phone.replace(/\s/g, "")}`;

export const whatsappLink = (message?: string) => {
  const encoded = encodeURIComponent(
    message || "Hello, I want to book a pandit for puja. Please share details."
  );
  return `https://wa.me/${businessInfo.whatsapp}?text=${encoded}`;
};
