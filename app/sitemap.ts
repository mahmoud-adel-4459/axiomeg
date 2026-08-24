import type { MetadataRoute } from "next";
import { articles, categories, siteConfig, solutions } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/solutions",
    "/industries",
    "/projects",
    "/technology",
    "/articles",
    "/why-choose-us",
    "/contact",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
  }));

  const dynamicRoutes = [
    ...categories.map((item) => `/services/${item.slug}`),
    ...solutions.map((item) => `/services/${item.category}/${item.slug}`),
    ...articles.map((item) => `/articles/${item.slug}`),
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...dynamicRoutes];
}
