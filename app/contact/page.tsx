import type { Metadata } from "next";
import { siteConfig } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { QuoteForm } from "@/components/contact/quote-form";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/layout/page-hero";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Request a free quote from Axiom Egypt. New Maadi, Cairo and Free Zone Suez. Call 0227542566 or email info@Axiomeg.com.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Request Consultation"
        description={`For business inquiry fill the form below or call us ${siteConfig.phones[0]}. Support team will contact you shortly.`}
      />
      <Section tone="white">
        <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Card>
            <Heading className="text-heading-3">Quick Contact</Heading>
            <ul className="mt-6 space-y-5 text-sm leading-7 text-navy/75 dark:text-white/70">
              <li>
                <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-navy/45 dark:text-white/40">Address</span>
                {siteConfig.address}
                <br />
                {siteConfig.addressSecondary}
              </li>
              <li>
                <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-navy/45 dark:text-white/40">Phone</span>
                <a href="tel:0227542566">{siteConfig.phones[0]}</a>
                {" — "}
                <a href="tel:0227548295">{siteConfig.phones[1]}</a>
              </li>
              <li>
                <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-navy/45 dark:text-white/40">Email</span>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </li>
            </ul>
            <div className="mt-8 overflow-hidden rounded-axiom border border-navy/10">
              <iframe
                title="Axiom Egypt New Maadi office"
                className="h-56 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={siteConfig.mapEmbed}
              />
            </div>
            <a href={siteConfig.mapUrl} target="_blank" rel="noreferrer" className="mt-3 inline-block text-sm font-semibold text-flame">
              View In Map
            </a>
          </Card>
          <div>
            <QuoteForm />
          </div>
        </Container>
      </Section>
    </>
  );
}
