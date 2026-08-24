import type { Metadata } from "next";
import { HomeAbout } from "@/sections/home/about";
import { HomeArticles } from "@/sections/home/articles";
import { HomeDualCta } from "@/sections/home/dual-cta";
import { HomeHero } from "@/sections/home/hero";
import { HomeIndustries } from "@/sections/home/industries";
import { HomeProjects } from "@/sections/home/projects";
import { HomeSolutions } from "@/sections/home/solutions";
import { HomeStats } from "@/sections/home/stats";
import { HomeTechnology } from "@/sections/home/technology";
import { HomeWhatWeDo } from "@/sections/home/what-we-do";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = buildMetadata({
  title: siteConfig.tagline,
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeStats />
      <HomeAbout />
      <HomeWhatWeDo />
      <HomeSolutions />
      <HomeIndustries />
      <HomeProjects />
      <HomeTechnology />
      <HomeArticles />
      <HomeDualCta />
    </>
  );
}
