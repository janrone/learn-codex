import type { MetadataRoute } from "next";
import { guides, siteConfig } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/docs",
    "/about",
    "/hot",
    "/hot/codex-practical-flow",
    "/hot/codex-mobile-control",
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
  }));

  const guideRoutes = guides.map((guide) => ({
    url: `${siteConfig.url}/docs/${guide.slug}`,
    lastModified: new Date(guide.publishedAt),
  }));

  return [...staticRoutes, ...guideRoutes];
}
