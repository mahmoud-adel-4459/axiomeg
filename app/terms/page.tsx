import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/layout/page-hero";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Use",
  description: "Terms for using the Axiom Egypt website and requesting petroleum services.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Use"
        description="This website presents Axiom Egypt services, solutions and project capabilities."
      />
      <Section tone="white">
        <Container className="max-w-3xl space-y-5 text-sm leading-7 text-navy/70 dark:text-white/65">
          <Heading className="text-heading-3">Website content</Heading>
          <p>
            Information on this site is provided to describe petroleum services. Equipment specifications and project
            details should be confirmed with Axiom Egypt before operational use.
          </p>
          <Heading className="text-heading-3">Inquiries</Heading>
          <p>
            Sending a quote request does not create a contract. Our team will contact you to confirm scope, availability
            and commercial terms.
          </p>
        </Container>
      </Section>
    </>
  );
}
