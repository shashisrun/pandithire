import type { MetadataRoute } from "next";
import { businessInfo } from "@/data/businessInfo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${businessInfo.siteUrl}/sitemap.xml`,
  };
}
