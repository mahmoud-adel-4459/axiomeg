import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { industries, getIndustryBySlug, getAllIndustrySlugs } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { ButtonLink } from "@/components/ui/button-link";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { HomeDualCta } from "@/sections/home/dual-cta";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  AlertTriangle,
  Wrench,
  Cpu,
  Layers,
  TrendingUp,
  FileCheck,
} from "lucide-react";

interface IndustryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllIndustrySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    return buildMetadata({
      title: "Industry Not Found",
      description: "The requested industry capability page could not be found.",
      path: "/industries",
    });
  }

  return buildMetadata({
    title: `${industry.title} Petroleum Services & Solutions | Axiom Egypt`,
    description: industry.text,
    path: `/industries/${industry.slug}`,
  });
}

export default async function IndustryDetailPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  const otherIndustries = industries.filter((item) => item.slug !== industry.slug);

  return (
    <>
      {/* 1. Sector Hero */}
      <section className="relative isolate min-h-[500px] overflow-hidden bg-navy text-white sm:min-h-[560px] lg:min-h-[600px]">
        <div className="absolute inset-0 z-0">
          <Image
            src={industry.heroImage || industry.image}
            alt={industry.title}
            fill
            priority
            sizes="100vw"
            className="object-cover brightness-[0.45] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/70 to-transparent lg:w-3/4" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[500px] max-w-7xl flex-col justify-end px-6 pb-16 pt-32 sm:min-h-[560px] sm:pb-20 lg:min-h-[600px] lg:justify-center">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-white/70">
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/industries" className="transition hover:text-white">
              Industries
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="font-semibold text-flame">{industry.title}</span>
          </nav>

          <MotionReveal direction="up" className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-flame/40 bg-flame/15 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-flame backdrop-blur-md">
              <Layers className="h-3.5 w-3.5" />
              <span>Target Industry Sector</span>
            </div>

            <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {industry.title}
            </h1>

            <p className="mt-4 text-base font-medium leading-relaxed text-flame-200 sm:text-xl">
              {industry.tagline}
            </p>

            <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base sm:leading-7">
              {industry.overview}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <ButtonLink href="/contact" variant="primary">
                Request Sector Consultation <ArrowRight className="ml-1.5 h-4 w-4" />
              </ButtonLink>
              <a
                href="#equipment-fleet"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
              >
                View Deployed Equipment
              </a>
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* 2. Key Performance Indicators Bar */}
      <section className="border-y border-navy/10 bg-honeydew-50/70 py-8 dark:border-white/10 dark:bg-midnight-50/80">
        <Container>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {industry.kpis.map((kpi, idx) => (
              <MotionReveal key={kpi.label} direction="up" delay={idx * 0.08} className="text-center sm:text-left">
                <div className="font-display text-2xl font-extrabold text-navy dark:text-white sm:text-3xl lg:text-4xl">
                  {kpi.value}
                </div>
                <div className="mt-1 text-xs font-bold text-flame sm:text-sm">{kpi.label}</div>
                {kpi.helper && (
                  <div className="mt-0.5 text-[11px] text-navy/60 dark:text-white/55">{kpi.helper}</div>
                )}
              </MotionReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Core Operational Challenges Faced by Operators */}
      <Section tone="white">
        <Container>
          <MotionReveal direction="up" className="max-w-2xl">
            <p className="eyebrow">Operating Realities</p>
            <Heading className="mt-2">Sector Challenges & Operational Friction</Heading>
            <p className="mt-3 text-sm leading-relaxed text-navy/70 dark:text-white/65 sm:text-base">
              Petroleum and industrial installations in the {industry.title} sector operate under severe mechanical, thermal, and regulatory constraints. Axiom engineered workflows directly solve these operational bottlenecks.
            </p>
          </MotionReveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {industry.challenges.map((challenge, idx) => (
              <MotionReveal
                key={challenge.title}
                direction="up"
                delay={idx * 0.1}
                className="flex flex-col justify-between rounded-2xl border border-navy/10 bg-honeydew-50/40 p-6 transition hover:shadow-lg dark:border-white/10 dark:bg-midnight-50/60"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-flame/15 text-flame">
                      <AlertTriangle className="h-5 w-5" />
                    </div>
                    {challenge.stat && (
                      <span className="rounded-full bg-flame/10 px-2.5 py-1 text-[11px] font-bold text-flame">
                        {challenge.stat}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-navy dark:text-white">
                    {challenge.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-navy/70 dark:text-white/65 sm:text-sm">
                    {challenge.text}
                  </p>
                </div>
              </MotionReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* 4. Axiom Engineered Solutions */}
      <Section tone="muted">
        <Container>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <MotionReveal direction="up" className="max-w-2xl">
              <p className="eyebrow">Axiom Capabilities</p>
              <Heading className="mt-2">Tailored Solutions for {industry.title}</Heading>
              <p className="mt-3 text-sm leading-relaxed text-navy/70 dark:text-white/65 sm:text-base">
                Our multidisciplinary teams deploy certified methodologies aligned with API specifications, minimizing downtime and maximizing throughput.
              </p>
            </MotionReveal>
            <ButtonLink href="/services" variant="outline" className="self-start md:self-auto">
              View All Services
            </ButtonLink>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {industry.solutions.map((sol, idx) => (
              <MotionReveal
                key={sol.title}
                direction="up"
                delay={idx * 0.1}
                className="group relative flex flex-col justify-between rounded-2xl border border-navy/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-midnight-50"
              >
                <div>
                  {sol.badge && (
                    <span className="inline-block rounded-md bg-teal-500/10 px-2.5 py-1 text-xs font-bold text-teal-600 dark:text-teal-400">
                      {sol.badge}
                    </span>
                  )}
                  <h3 className="mt-3 font-display text-xl font-bold text-navy dark:text-white">
                    {sol.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy/70 dark:text-white/65">
                    {sol.text}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-flame transition group-hover:translate-x-1">
                  <span>Inquire for deployment</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </MotionReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* 5. Deployed Equipment Fleet */}
      <Section id="equipment-fleet" tone="white">
        <Container>
          <MotionReveal direction="up" className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
              <Cpu className="h-3.5 w-3.5" />
              <span>Technical Inventory</span>
            </div>
            <Heading className="mt-3">Certified Equipment & Specialized Packages</Heading>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-navy/70 dark:text-white/65 sm:text-base">
              Standardized, inspected, and pre-commissioned hardware packages ready for fast-track mobilization to {industry.title} job sites.
            </p>
          </MotionReveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industry.equipment.map((eq, idx) => (
              <MotionReveal
                key={eq.name}
                direction="up"
                delay={idx * 0.08}
                className="flex flex-col justify-between rounded-2xl border border-navy/10 bg-honeydew-50/40 p-5 dark:border-white/10 dark:bg-midnight-50/70"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-navy/80 px-2.5 py-0.5 text-[11px] font-semibold text-white dark:bg-white/20">
                      {eq.tag}
                    </span>
                    <Wrench className="h-4 w-4 text-flame" />
                  </div>
                  <h4 className="mt-4 font-display text-base font-bold text-navy dark:text-white">
                    {eq.name}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-navy/65 dark:text-white/60">
                    {eq.specs}
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1 text-[11px] font-semibold text-teal-600 dark:text-teal-400">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>Available for Lease / Turnkey</span>
                </div>
              </MotionReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* 6. Featured Case Study */}
      {industry.caseStudy && (
        <Section tone="muted">
          <Container>
            <MotionReveal direction="up">
              <div className="relative overflow-hidden rounded-3xl border border-navy/10 bg-gradient-to-br from-navy to-midnight p-8 text-white shadow-xl dark:border-white/15 sm:p-12">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                  <div className="max-w-2xl">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-flame backdrop-blur-md">
                      <FileCheck className="h-3.5 w-3.5" />
                      <span>Field Case Study</span>
                    </div>
                    <h3 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">
                      {industry.caseStudy.title}
                    </h3>
                    <p className="mt-2 text-xs font-semibold text-flame-200">
                      Operator: {industry.caseStudy.operator}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">
                      {industry.caseStudy.description}
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-md lg:min-w-[280px]">
                    <div className="flex items-center gap-2 text-flame">
                      <TrendingUp className="h-5 w-5" />
                      <span className="text-xs font-bold uppercase tracking-wider">Measured Impact</span>
                    </div>
                    <p className="text-base font-bold text-white sm:text-lg">
                      {industry.caseStudy.impact}
                    </p>
                    <ButtonLink href="/contact" variant="primary" className="mt-2 text-xs">
                      Consult Our Engineers
                    </ButtonLink>
                  </div>
                </div>
              </div>
            </MotionReveal>
          </Container>
        </Section>
      )}

      {/* 7. Explore Other Industries */}
      <Section tone="white">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <MotionReveal direction="up">
              <p className="eyebrow">Industry Sectors</p>
              <Heading className="mt-2">Explore Other Industry Capabilities</Heading>
            </MotionReveal>
            <ButtonLink href="/industries" variant="outline">
              All Industries Overview
            </ButtonLink>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {otherIndustries.map((item, idx) => (
              <MotionReveal key={item.slug} direction="up" delay={idx * 0.08}>
                <Link
                  href={`/industries/${item.slug}`}
                  className="group relative flex h-60 flex-col justify-end overflow-hidden rounded-2xl border border-navy/10 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/10"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/50 to-transparent" />
                  <div className="relative z-10 text-white">
                    <h4 className="font-display text-lg font-bold">{item.title}</h4>
                    <p className="mt-1 line-clamp-2 text-xs text-white/70">{item.text}</p>
                    <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-flame">
                      <span>View Sector Profile</span>
                      <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </MotionReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* 8. Dual CTA */}
      <HomeDualCta />
    </>
  );
}
