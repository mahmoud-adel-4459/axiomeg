import type { Metadata } from "next";
import Image from "next/image";
import { industries } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/layout/page-hero";
import { HomeDualCta } from "@/sections/home/dual-cta";

export const metadata: Metadata = buildMetadata({
  title: "Industries",
  description: "Axiom Egypt serves oil and gas, petrochemicals, power and industrial petroleum operations.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Where petroleum operators trust Axiom."
        description="We work where high-hazard operations, technical specifications and B2B decision cycles meet."
        image="/images/slides/slide03.jpg"
      />
      <Section tone="white">
        <Container className="grid gap-5 md:grid-cols-2">
          {industries.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-2xl border border-navy/8 bg-white dark:border-white/10 dark:bg-midnight-50">
              <div className="relative h-48">
                <Image src={item.image} alt={item.title} fill sizes="50vw" className="object-cover" />
              </div>
              <div className="p-6">
                <h2 className="text-heading-3">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-navy/65 dark:text-white/60">{item.text}</p>
              </div>
            </article>
          ))}
        </Container>
      </Section>
      <HomeDualCta />
    </>
  );
}
