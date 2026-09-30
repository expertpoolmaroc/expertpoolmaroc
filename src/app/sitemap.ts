import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/config/site";
import { allPages } from "@/content/pages";

export default function sitemap(): MetadataRoute.Sitemap {
  return allPages.map((page) => ({
    url: absoluteUrl(page.slug ? `/${page.slug}` : "/"),
    lastModified: new Date(),
    changeFrequency: page.slug ? "monthly" : "weekly",
    priority: page.slug ? 0.75 : 1,
  }));
}
