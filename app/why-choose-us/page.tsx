import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/layout/page-hero";
import { HomeWhyChoose } from "@/sections/home/why-choose";
import { HomeQuote } from "@/sections/home/quote";

export const metadata: Metadata = buildMetadata({
  title: "Why choose us",
  description:
    "Axiom Egypt is chosen for punctual delivery, smart technology, a professional team, and an easy affordable petroleum services journey.",
  path: "/why-choose-us",
});

export default function WhyChooseUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Why choose us"
        title="We provide the right team at the right time."
        description="We strive to develop according to the demands of the market and market trends."
      />
      <HomeWhyChoose />
      <HomeQuote />
    </>
  );
}
