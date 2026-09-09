"use client";

import Image from "next/image";
import Link from "next/link";
import { industries } from "@/lib/content";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { ArrowRight } from "lucide-react";

export function HomeIndustries() {
  return (
    <Section tone="white">
      <Container>
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <MotionReveal direction="up" className="max-w-xl">
            <p className="eyebrow">Industries</p>
            <Heading className="mt-4">Where petroleum operators trust Axiom.</Heading>
          </MotionReveal>
          <ButtonLink href="/industries" variant="outline" className="w-full sm:w-auto">
            All Industries Overview
          </ButtonLink>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {industries.map((item, idx) => (
            <MotionReveal key={item.slug} direction="up" delay={idx * 0.08}>
              <Link
                href={`/industries/${item.slug}`}
                className="group relative block h-64 overflow-hidden rounded-2xl border border-navy/10 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl dark:border-white/10"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 33vw, 50vw"
                  className="object-cover transition duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <span className="rounded-full bg-flame/90 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                    Sector
                  </span>
                  <h3 className="mt-2 font-display text-lg font-bold">{item.title}</h3>
                  <p className="mt-1 line-clamp-2 text-xs leading-5 text-white/70">{item.text}</p>
                  <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-flame transition group-hover:translate-x-1">
                    <span>Explore Single Page</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </Link>
            </MotionReveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
