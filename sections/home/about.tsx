"use client";

import Image from "next/image";
import { leaderQuote, siteConfig } from "@/lib/content";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

export function HomeAbout() {
  return (
    <Section tone="white">
      <Container className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="relative min-h-[16rem] overflow-hidden rounded-3xl sm:min-h-[20rem]">
          <Image src={siteConfig.teamImage} alt="Axiom Egypt team" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        </div>
        <div>
          <p className="eyebrow">About us</p>
          <Heading className="mt-4">Axiom-Egypt for the petroleum industry.</Heading>
          <p className="mt-4 text-sm leading-7 text-navy/65 dark:text-white/60">
            A comprehensive petroleum services company for maintenance, rig inspections, consultancy, production testing,
            power generation and pump solutions.
          </p>
          <blockquote className="mt-6 border-l-2 border-flame pl-4 text-sm leading-7 text-navy/70 dark:text-white/65">
            “{leaderQuote.text}”
            <cite className="mt-2 block not-italic font-semibold text-navy dark:text-white">— {leaderQuote.author}</cite>
          </blockquote>
          <div className="mt-7">
            <ButtonLink href="/about">Learn More About Us</ButtonLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}
