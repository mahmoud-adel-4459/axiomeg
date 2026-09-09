"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { solutionHref, solutions } from "@/lib/content";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { MotionReveal } from "@/components/ui/motion-reveal";

export function HomeSolutions() {
  const items = solutions.slice(0, 4);

  return (
    <Section>
      <Container>
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <MotionReveal direction="up" className="max-w-xl">
            <p className="eyebrow">Solutions</p>
            <Heading className="mt-4">Engineering packages operators use in the field.</Heading>
          </MotionReveal>
          <ButtonLink href="/solutions" variant="outline" className="w-full sm:w-auto">
            All Solutions
          </ButtonLink>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, idx) => (
            <MotionReveal key={item.slug} direction="up" delay={idx * 0.08}>
              <Link
                href={solutionHref(item)}
                className="group block overflow-hidden rounded-2xl border border-navy/8 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl dark:border-white/10 dark:bg-midnight-50"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover transition duration-500 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-40 transition group-hover:opacity-70" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-base font-bold text-navy dark:text-white group-hover:text-flame transition">
                    {item.title}
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-flame transition group-hover:translate-x-1">
                    <span>Know more</span>
                    <ArrowRight size={13} />
                  </span>
                </div>
              </Link>
            </MotionReveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
