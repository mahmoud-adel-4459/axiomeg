"use client";

import { siteConfig } from "@/lib/content";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { ArrowRight } from "lucide-react";

export function HomeDualCta() {
  return (
    <Section tone="white" className="pt-4">
      <Container>
        <MotionReveal direction="up">
          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-[#EAF2F8] px-5 py-8 shadow-sm transition-all duration-300 hover:shadow-lg dark:bg-[#0B1524] sm:px-8 sm:py-10 md:flex-row md:items-center md:px-10 md:py-12">
            <div className="max-w-xl">
              <Heading>Let&apos;s Build the Future of Energy Together.</Heading>
              <p className="mt-3 text-sm leading-7 text-navy/65 dark:text-white/55">
                Have a project or turnaround in mind? Our certified engineers and commercial agents are ready to assist with rapid mobilization.
              </p>
            </div>
            <ButtonLink href={siteConfig.ctaHref} className="w-full sm:w-auto">
              Request a Consultation <ArrowRight className="ml-1.5 h-4 w-4" />
            </ButtonLink>
          </div>
        </MotionReveal>
      </Container>
    </Section>
  );
}
