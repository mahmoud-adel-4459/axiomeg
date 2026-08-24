"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { solutionHref, solutions } from "@/lib/content";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

export function HomeSolutions() {
  const items = solutions.slice(0, 4);

  return (
    <Section>
      <Container>
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="eyebrow">Solutions</p>
            <Heading className="mt-4">Engineering packages operators use in the field.</Heading>
          </div>
          <ButtonLink href="/solutions" variant="outline" className="w-full sm:w-auto">
            All Solutions
          </ButtonLink>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <Link
              key={item.slug}
              href={solutionHref(item)}
              className="group overflow-hidden rounded-2xl border border-navy/8 bg-white dark:border-white/10 dark:bg-midnight-50"
            >
              <div className="relative h-40">
                <Image src={item.image} alt={item.title} fill sizes="25vw" className="object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-base font-bold text-navy dark:text-white">{item.title}</h3>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-flame">
                  Know more <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
