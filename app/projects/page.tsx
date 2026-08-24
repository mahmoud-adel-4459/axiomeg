import type { Metadata } from "next";
import Image from "next/image";
import { featuredProjects } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/layout/page-hero";
import { HomeDualCta } from "@/sections/home/dual-cta";

export const metadata: Metadata = buildMetadata({
  title: "Projects",
  description: "Axiom Egypt project work across well testing packages, early production facilities and compression.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our projects"
        title="Proven Results. Real Impact."
        description="Field packages and production facilities delivered for petroleum operators."
        image="/images/solutions/trailer.png"
      />
      <Section tone="white">
        <Container className="grid gap-5 md:grid-cols-3">
          {featuredProjects.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-2xl border border-navy/8 bg-white shadow-axiom-sm dark:border-white/10 dark:bg-midnight-50">
              <div className="relative h-56">
                <Image src={item.image} alt={item.title} fill sizes="33vw" className="object-cover" />
              </div>
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-flame">{item.location}</p>
                <h2 className="mt-2 text-heading-3">{item.title}</h2>
              </div>
            </article>
          ))}
        </Container>
      </Section>
      <HomeDualCta />
    </>
  );
}
