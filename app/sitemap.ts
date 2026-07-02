import { MetadataRoute } from "next";
import { services } from "@/data/services";
import { businessInfo } from "@/data/businessInfo";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = businessInfo.siteUrl;
  const langs = ["en", "hi"];

  const entries: MetadataRoute.Sitemap = [];

  for (const lang of langs) {
    entries.push(
      { url: `${baseUrl}/${lang}`, lastModified: new Date(), priority: 1 },
      { url: `${baseUrl}/${lang}/services`, lastModified: new Date(), priority: 0.9 },
      { url: `${baseUrl}/${lang}/book-pandit`, lastModified: new Date(), priority: 0.9 },
      { url: `${baseUrl}/${lang}/register`, lastModified: new Date(), priority: 0.8 },
      { url: `${baseUrl}/${lang}/about`, lastModified: new Date(), priority: 0.7 },
      { url: `${baseUrl}/${lang}/contact`, lastModified: new Date(), priority: 0.8 },
    );

    for (const service of services) {
      entries.push({
        url: `${baseUrl}/${lang}/services/${service.slug}`,
        lastModified: new Date(),
        priority: 0.8,
      });
    }
  }

  return entries;
}
