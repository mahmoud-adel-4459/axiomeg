import type { MetadataRoute } from "next";
import { articles, categories, industries, siteConfig, solutions } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/services/training",
    "/solutions",
    "/industries",
    "/projects",
    "/pipelines",
    "/technology",
    "/agents",
    "/careers",
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
    ...industries.map((item) => `/industries/${item.slug}`),
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...dynamicRoutes];
}
