import { MetadataRoute } from "next";
import { services } from "@/data/services";
import { businessInfo } from "@/data/businessInfo";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = businessInfo.siteUrl;

  const staticPages = [
    { url: baseUrl, lastModified: new Date(), priority: 1 },
    { url: `${baseUrl}/services`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), priority: 0.8 },
  ];

  const servicePages = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    priority: 0.8,
  }));

  return [...staticPages, ...servicePages];
}
