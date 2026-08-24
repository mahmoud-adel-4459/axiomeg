"use client";

import { Cpu } from "lucide-react";
import { technologyItems } from "@/lib/content";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

export function HomeTechnology() {
  return (
    <Section tone="white">
      <Container>
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="eyebrow">Technology</p>
            <Heading className="mt-4">Field technology that stays accountable.</Heading>
          </div>
          <ButtonLink href="/technology" variant="outline" className="w-full sm:w-auto">
            View Technology
          </ButtonLink>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {technologyItems.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-navy/8 bg-white p-5 dark:border-white/10 dark:bg-midnight-50 sm:p-6"
            >
              <Cpu size={18} className="text-flame" />
              <h3 className="mt-3 font-display text-lg font-bold text-navy dark:text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-navy/60 dark:text-white/55">{item.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
