import { siteConfig } from "@/lib/content";
import { QuoteForm } from "@/components/contact/quote-form";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

export function HomeQuote() {
  return (
    <Section id="contact" tone="white">
      <Container className="grid gap-8">
        <div className="overflow-hidden rounded-axiom-xl border border-navy/10">
          <iframe
            title="Axiom Egypt office map"
            src={siteConfig.mapEmbed}
            className="h-72 w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <Card>
          <p className="eyebrow">Quick Contact</p>
          <Heading className="mt-4">Cairo and Suez offices</Heading>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-navy/75 dark:text-white/70">
            <li>
              <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-navy/45 dark:text-white/40">Address</span>
              {siteConfig.address}
              <br />
              {siteConfig.addressSecondary}
            </li>
            <li>
              <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-navy/45 dark:text-white/40">Phone</span>
              <a href="tel:0227542566">{siteConfig.phones[0]}</a>
              {" - "}
              <a href="tel:0227548295">{siteConfig.phones[1]}</a>
            </li>
            <li>
              <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-navy/45 dark:text-white/40">Email</span>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </li>
          </ul>
        </Card>
        <div className="rounded-axiom-xl border border-navy/8 bg-honeydew-50 p-6 md:p-8 dark:border-white/10 dark:bg-midnight-50">
          <p className="eyebrow">Get a Free Quote</p>
          <Heading className="mt-3">For business inquiry fill the form or call us {siteConfig.phones[0]}</Heading>
          <p className="mt-3 mb-6 text-sm text-navy/65 dark:text-white/60">Support team will contact you shortly.</p>
          <QuoteForm compact />
        </div>
        </div>
      </Container>
    </Section>
  );
}
