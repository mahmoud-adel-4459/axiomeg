import type { Metadata } from "next";
import { technologyItems } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/layout/page-hero";
import { HomeDualCta } from "@/sections/home/dual-cta";

export const metadata: Metadata = buildMetadata({
  title: "Technology",
  description: "Axiom Egypt technology covers well testing control, modular EPFs, compression and certified maintenance processes.",
  path: "/technology",
});

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Technology"
        title="Cutting-edge technology that stays accountable to the field."
        description="We employ technology and in-depth expertise to help partners become more efficient."
        image="/images/solutions/well-testing.jpg"
      />
      <Section tone="white">
        <Container className="grid gap-5 md:grid-cols-2">
          {technologyItems.map((item) => (
            <Card key={item.title}>
              <h2 className="text-heading-3">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-navy/65 dark:text-white/60">{item.text}</p>
            </Card>
          ))}
        </Container>
      </Section>
      <HomeDualCta />
    </>
  );
}
