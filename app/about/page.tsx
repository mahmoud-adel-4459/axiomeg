import type { Metadata } from "next";
import Image from "next/image";
import { approach, leaderQuote, siteConfig } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/layout/page-hero";
import { HomeQuote } from "@/sections/home/quote";

export const metadata: Metadata = buildMetadata({
  title: "About us",
  description:
    "Axiom-Egypt provides petroleum services including maintenance, rig inspections, consultancy and management, production testing equipment and power generation.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Axiom-Egypt for the petroleum industry."
        description="From maintenance to consultancy and management, we have the expertise and resources to support all aspects of your petroleum operations."
        image={siteConfig.teamImage}
      />
      <Section tone="white">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div className="relative min-h-[18rem] overflow-hidden rounded-axiom-xl">
            <Image src={siteConfig.teamImage} alt="Axiom Egypt team" fill sizes="50vw" className="object-cover" />
          </div>
          <div>
            <Badge>Company</Badge>
            <Heading className="mt-4">Qualitative products, professional skills and team spirit.</Heading>
            <p className="mt-4 leading-8 text-navy/70 dark:text-white/65">
              Axiom-Egypt is a comprehensive and trustworthy petroleum services company. We provide preventive,
              predictive and corrective maintenance, rig inspections, consultancy and management, production and
              testing equipment, power generation, and pump solutions.
            </p>
            <blockquote className="mt-6 rounded-axiom-xl border border-navy/8 bg-honeydew-50 p-6 dark:border-white/10 dark:bg-midnight-50">
              <p className="leading-8 text-navy/75 dark:text-white/70">“{leaderQuote.text}”</p>
              <footer className="mt-5 text-sm font-semibold text-navy dark:text-white">— {leaderQuote.author}</footer>
            </blockquote>
          </div>
        </Container>
      </Section>
      <Section>
        <Container className="grid gap-5 md:grid-cols-2">
          {approach.map((item) => (
            <Card key={item.number}>
              <p className="font-display text-2xl font-semibold text-teal-500">{item.number}.</p>
              <h2 className="mt-2 text-heading-3">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-navy/70 dark:text-white/65">{item.text}</p>
            </Card>
          ))}
        </Container>
      </Section>
      <HomeQuote />
    </>
  );
}
