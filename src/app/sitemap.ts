import type { MetadataRoute } from "next";
import { serviceCategories } from "@/content/services";

export const dynamic = "force-static";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "",
    "why-us",
    "dental-emergency",
    "our-team",
    "for-patients",
    "contact",
    "services",
  ];

  const entries: MetadataRoute.Sitemap = staticRoutes.map((slug) => ({
    url: `${BASE_URL}/${slug}${slug ? "/" : ""}`,
    lastModified: now,
    changeFrequency: slug === "" ? "weekly" : "monthly",
    priority: slug === "" ? 1 : 0.7,
  }));

  for (const cat of serviceCategories) {
    entries.push({
      url: `${BASE_URL}/services/${cat.slug}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    });
    for (const sub of cat.subservices) {
      entries.push({
        url: `${BASE_URL}/services/${cat.slug}/${sub.slug}/`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.5,
      });
    }
  }

  return entries;
}
