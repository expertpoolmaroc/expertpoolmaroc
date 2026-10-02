import type { MetadataRoute } from "next";
import { allPages } from "@/content/pages";

export default function sitemap(): MetadataRoute.Sitemap {
  return allPages.map((page) => ({
    url: `https://piscineexpertpool.com${page.slug ? `/${page.slug}` : ""}`,
    lastModified: new Date(),
    changeFrequency: page.slug ? "monthly" : "weekly",
    priority: page.slug ? 0.8 : 1,
  }));
}
