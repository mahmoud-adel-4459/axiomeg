import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { industries } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/layout/page-hero";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { HomeDualCta } from "@/sections/home/dual-cta";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Industries We Serve | Axiom Egypt Petroleum Services",
  description:
    "Explore Axiom Egypt's dedicated petroleum services across Oil & Gas, Petrochemicals, Power Generation, Marine & Offshore, and Pipeline Infrastructure.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Where petroleum operators trust Axiom."
        description="We work where high-hazard operations, technical specifications and rigorous energy decision cycles meet."
        image="/images/slides/slide03.jpg"
      />
      <Section tone="white">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((item, idx) => (
              <MotionReveal
                key={item.slug}
                direction="up"
                delay={idx * 0.08}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl dark:border-white/10 dark:bg-midnight-50"
              >
                <div>
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, 50vw"
                      className="object-cover transition duration-500 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-60 transition group-hover:opacity-80" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="rounded-full bg-flame px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white">
                        Sector
                      </span>
                      <h2 className="mt-1 font-display text-xl font-bold">{item.title}</h2>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-sm font-semibold text-flame dark:text-flame-300">
                      {item.tagline}
                    </p>
                    <p className="mt-3 text-xs leading-relaxed text-navy/70 dark:text-white/65 sm:text-sm">
                      {item.text}
                    </p>

                    {/* Quick highlights */}
                    <div className="mt-4 space-y-1.5 border-t border-navy/8 pt-4 dark:border-white/8">
                      {item.solutions.slice(0, 2).map((sol) => (
                        <div key={sol.title} className="flex items-center gap-2 text-xs text-navy/80 dark:text-white/75">
                          <CheckCircle2 className="h-3.5 w-3.5 flex-shrink-0 text-teal-500" />
                          <span className="line-clamp-1">{sol.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="border-t border-navy/8 bg-honeydew-50/40 p-4 dark:border-white/8 dark:bg-midnight-50/60">
                  <Link
                    href={`/industries/${item.slug}`}
                    className="inline-flex w-full items-center justify-between rounded-xl bg-navy px-4 py-2.5 text-xs font-bold text-white transition hover:bg-flame dark:bg-white/10 dark:hover:bg-flame"
                  >
                    <span>Explore {item.title} Single Page</span>
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </Link>
                </div>
              </MotionReveal>
            ))}
          </div>
        </Container>
      </Section>
      <HomeDualCta />
    </>
  );
}
