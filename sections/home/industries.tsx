"use client";

import Image from "next/image";
import Link from "next/link";
import { industries } from "@/lib/content";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

export function HomeIndustries() {
  return (
    <Section tone="white">
      <Container>
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="eyebrow">Industries</p>
            <Heading className="mt-4">Where petroleum operators trust Axiom.</Heading>
          </div>
          <ButtonLink href="/industries" variant="outline" className="w-full sm:w-auto">
            All Industries
          </ButtonLink>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((item) => (
            <Link
              key={item.title}
              href="/industries"
              className="group relative block h-52 overflow-hidden rounded-2xl"
            >
              <Image src={item.image} alt={item.title} fill sizes="25vw" className="object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <h3 className="font-display text-lg font-bold">{item.title}</h3>
                <p className="mt-1 line-clamp-2 text-xs leading-5 text-white/70">{item.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
