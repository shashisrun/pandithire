export const businessInfo = {
  name: "PanditHire.in",
  tagline: "Right Guidance, Right Solutions",
  phoneNumbers: ["9076203111", "9076203222"],
  phone: "+91 9076203111",
  phone2: "+91 9076203222",
  whatsapp: "919076203111",
  email: "vinodmishra@pandithire.in",
  website: "https://pandithire.in",
  defaultLanguage: "hi",
  supportedLanguages: ["en", "hi", "mr"],
  workingHours: "7:00 AM to 10:00 PM",
  city: "Delhi NCR",
  serviceAreas: ["Delhi", "Noida", "Gurgaon", "Ghaziabad", "Faridabad"],
  address: "Delhi NCR",
  siteUrl: "https://pandithire.in",
};

export const phoneLink = `tel:+91${businessInfo.phoneNumbers[0]}`;

export const whatsappLink = (message?: string) => {
  const encoded = encodeURIComponent(
    message || "Namaste, I want to enquire about pandit services. Please share details."
  );
  return `https://wa.me/${businessInfo.whatsapp}?text=${encoded}`;
};
