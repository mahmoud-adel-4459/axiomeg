import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { solutionHref, solutions } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/layout/page-hero";

export const metadata: Metadata = buildMetadata({
  title: "Solutions",
  description: "Axiom Egypt solutions for well testing, separation, heating, compression, EPFs and maintenance.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Engineering solutions for live petroleum assets."
        description="Explore the packages operators use for testing, production start-up, power and maintenance."
      />
      <Section tone="white">
        <Container className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {solutions.map((item) => (
            <Link
              key={item.slug}
              href={solutionHref(item)}
              className="group overflow-hidden rounded-2xl border border-navy/8 bg-white shadow-axiom-sm transition hover:-translate-y-1 hover:shadow-axiom dark:border-white/10 dark:bg-midnight-50"
            >
              <div className="relative h-44">
                <Image src={item.image} alt={item.title} fill sizes="33vw" className="object-cover" />
              </div>
              <div className="p-6">
                <h2 className="text-heading-3">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-navy/65 dark:text-white/60">{item.summary}</p>
                <span className="mt-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-flame text-white">
                  <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </Container>
      </Section>
    </>
  );
}
