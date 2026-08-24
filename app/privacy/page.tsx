import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/layout/page-hero";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How Axiom Egypt handles inquiry and contact information submitted through the website.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="We use the information you send us only to respond to petroleum service inquiries."
      />
      <Section tone="white">
        <Container className="max-w-3xl space-y-5 text-sm leading-7 text-navy/70 dark:text-white/65">
          <Heading className="text-heading-3">What we collect</Heading>
          <p>
            Quote and contact forms collect your name, phone, email and the solution you selected. We do not sell this
            information.
          </p>
          <Heading className="text-heading-3">How it is used</Heading>
          <p>
            Submissions are sent to Axiom Egypt so the support team can follow up on business inquiries from Cairo and
            Suez offices.
          </p>
        </Container>
      </Section>
    </>
  );
}
