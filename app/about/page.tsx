import type { Metadata } from "next";
import Image from "next/image";
import { approach, leaderQuote } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { AboutHeroSlider } from "@/components/about/about-hero-slider";
import { AboutHqGallery } from "@/components/about/about-hq-gallery";
import { HomeQuote } from "@/sections/home/quote";
import { ShieldCheck, Award } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "About Us | Axiom Egypt Petroleum Services",
  description:
    "Axiom-Egypt provides petroleum services including maintenance, rig inspections, consultancy and management, production testing equipment, commercial agencies, and power generation.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      {/* Section 1: Hero Slider with Photos & Synchronized Storytelling */}
      <AboutHeroSlider />

      {/* Section 2: Company Leadership & Vision */}
      <Section tone="white">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <MotionReveal direction="left" className="relative min-h-[22rem] overflow-hidden rounded-2xl shadow-lg sm:min-h-[26rem]">
            <Image
              src="/images/about/hq-building-day.jpg"
              alt="Axiom Egypt Headquarters - New Maadi, Cairo"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="rounded-full bg-flame px-3 py-1 text-xs font-bold uppercase tracking-wider">
                Corporate Headquarters
              </span>
              <p className="mt-2 text-sm text-white/90">
                New Maadi Corporate Energy Hub, Cairo, Egypt
              </p>
            </div>
          </MotionReveal>

          <MotionReveal direction="right">
            <Badge>Company Profile</Badge>
            <Heading className="mt-4">
              Qualitative products, professional skills and engineering spirit.
            </Heading>
            <p className="mt-4 leading-8 text-navy/70 dark:text-white/65">
              Axiom-Egypt is a comprehensive and trustworthy petroleum services company and commercial agency.
              We provide preventive, predictive and corrective maintenance, certified rig inspections,
              consultancy and management, production and testing equipment, power generation, and pump solutions.
            </p>

            {/* Quick value metrics */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-navy/10 bg-honeydew-50/50 p-4 dark:border-white/10 dark:bg-midnight-50">
                <ShieldCheck className="h-6 w-6 text-flame" />
                <h4 className="mt-2 font-display text-base font-bold text-navy dark:text-white">API Q1 Standard</h4>
                <p className="mt-1 text-xs text-navy/60 dark:text-white/60">Certified operational processes</p>
              </div>
              <div className="rounded-xl border border-navy/10 bg-honeydew-50/50 p-4 dark:border-white/10 dark:bg-midnight-50">
                <Award className="h-6 w-6 text-teal-500" />
                <h4 className="mt-2 font-display text-base font-bold text-navy dark:text-white">Global Agencies</h4>
                <p className="mt-1 text-xs text-navy/60 dark:text-white/60">Official partner representation</p>
              </div>
            </div>

            <blockquote className="mt-6 rounded-axiom-xl border border-navy/8 bg-honeydew-50 p-6 dark:border-white/10 dark:bg-midnight-50">
              <p className="mb-3 font-bold text-navy dark:text-white underline">{leaderQuote.title}</p>
              <p className="leading-8 text-navy/75 dark:text-white/70">"{leaderQuote.text}"</p>
              <footer className="mt-5 text-sm text-navy dark:text-white">
                <span className="font-semibold">{leaderQuote.author}</span>
                <br />
                <span className="text-xs text-navy/60 dark:text-white/55">{leaderQuote.role}</span>
              </footer>
            </blockquote>
          </MotionReveal>
        </Container>
      </Section>

      {/* Section 3: Headquarters & Facilities Showcase Gallery */}
      <Section tone="muted">
        <Container>
          <AboutHqGallery />
        </Container>
      </Section>

      {/* Section 4: Operational Approach Steps */}
      <Section tone="white">
        <Container>
          <MotionReveal direction="up" className="mb-10 text-center">
            <p className="eyebrow">Our Methodology</p>
            <Heading className="mt-2">Engineered for Excellence at Every Stage</Heading>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-navy/65 dark:text-white/60">
              Our systematic approach ensures safety, compliance, and optimum output for petroleum assets nationwide.
            </p>
          </MotionReveal>

          <div className="grid gap-5 md:grid-cols-2">
            {approach.map((item, index) => (
              <MotionReveal key={item.number} direction="up" delay={index * 0.1}>
                <Card className="h-full transition-transform duration-300 hover:-translate-y-1">
                  <p className="font-display text-2xl font-semibold text-teal-500">{item.number}.</p>
                  <h3 className="mt-2 text-heading-3">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-navy/70 dark:text-white/65">{item.text}</p>
                </Card>
              </MotionReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Section 5: Quote & Final Callout */}
      <HomeQuote />
    </>
  );
}
