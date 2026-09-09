"use client";

import Image from "next/image";
import Link from "next/link";
import { articles } from "@/lib/content";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { ArrowRight } from "lucide-react";

export function HomeArticles() {
  const items = articles.slice(0, 3);

  return (
    <Section>
      <Container>
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <MotionReveal direction="up" className="max-w-xl">
            <p className="eyebrow">Articles & Field Insights</p>
            <Heading className="mt-4">Insights from the field.</Heading>
            <p className="mt-3 text-sm leading-7 text-navy/60 dark:text-white/55">
              Practical notes on well testing, production facilities, maintenance, and asset integrity.
            </p>
          </MotionReveal>
          <ButtonLink href="/articles" variant="outline" className="w-full sm:w-auto">
            All Articles
          </ButtonLink>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item, idx) => (
            <MotionReveal key={item.slug} direction="up" delay={idx * 0.1}>
              <Link
                href={`/articles/${item.slug}`}
                className="group flex flex-col h-full overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl dark:border-white/10 dark:bg-midnight-50"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-30 transition group-hover:opacity-60" />
                </div>
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-flame">
                      {item.category}
                    </p>
                    <h3 className="mt-2 font-display text-lg font-bold text-navy transition group-hover:text-flame dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-navy/60 dark:text-white/55">
                      {item.excerpt}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-between border-t border-navy/8 pt-3 text-xs text-navy/45 dark:border-white/8 dark:text-white/40">
                    <span>{item.date} · {item.readTime}</span>
                    <span className="flex items-center gap-1 font-semibold text-flame transition group-hover:translate-x-1">
                      Read <ArrowRight size={12} />
                    </span>
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
