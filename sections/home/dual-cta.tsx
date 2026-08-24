"use client";

import { siteConfig } from "@/lib/content";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

export function HomeDualCta() {
  return (
    <Section tone="white" className="pt-4">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-[#EAF2F8] px-5 py-8 dark:bg-[#0B1524] sm:px-8 sm:py-10 md:flex-row md:items-center md:px-10 md:py-12">
          <div className="max-w-xl">
            <Heading>Let&apos;s Build the Future of Energy Together.</Heading>
            <p className="mt-3 text-sm leading-7 text-navy/65 dark:text-white/55">
              Have a project in mind? Our experts are ready to help.
            </p>
          </div>
          <ButtonLink href={siteConfig.ctaHref} className="w-full sm:w-auto">
            Request a Consultation
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
