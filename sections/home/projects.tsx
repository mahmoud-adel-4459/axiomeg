"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { featuredProjects } from "@/lib/content";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

export function HomeProjects() {
  const [start, setStart] = useState(0);
  const [perPage, setPerPage] = useState(1);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)");
    const wide = window.matchMedia("(min-width: 1024px)");
    const update = () => setPerPage(wide.matches ? 3 : desktop.matches ? 2 : 1);
    update();
    desktop.addEventListener("change", update);
    wide.addEventListener("change", update);
    return () => {
      desktop.removeEventListener("change", update);
      wide.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    setStart(0);
  }, [perPage]);

  const visible = featuredProjects.slice(start, start + perPage);
  const canPrev = start > 0;
  const canNext = start + perPage < featuredProjects.length;

  return (
    <Section>
      <Container>
        <div className="mb-8 flex flex-col gap-5 sm:gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-lg">
            <p className="eyebrow">Our projects</p>
            <Heading className="mt-4">Proven Results. Real Impact.</Heading>
            <p className="mt-3 text-sm leading-7 text-navy/60 dark:text-white/55">
              Field packages and production facilities delivered for petroleum operators.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <ButtonLink href="/projects" variant="outline" className="w-full sm:w-auto">
              View All Projects
            </ButtonLink>
            <button
              type="button"
              aria-label="Previous projects"
              disabled={!canPrev}
              onClick={() => setStart((value) => Math.max(0, value - 1))}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy/15 text-navy disabled:opacity-30 dark:border-white/20 dark:text-white"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              type="button"
              aria-label="Next projects"
              disabled={!canNext}
              onClick={() => setStart((value) => value + 1)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-flame bg-flame text-white disabled:border-navy/15 disabled:bg-transparent disabled:text-navy disabled:opacity-30 dark:disabled:border-white/20 dark:disabled:text-white"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((item) => (
            <Link key={item.title} href={item.href} className="group relative block h-64 overflow-hidden rounded-2xl sm:h-72">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-white">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-flame-200">{item.location}</p>
                  <h3 className="mt-1 font-display text-xl font-bold">{item.title}</h3>
                </div>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
                  <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
