"use client";

import Image from "next/image";
import Link from "next/link";
import { articles } from "@/lib/content";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

export function HomeArticles() {
  const items = articles.slice(0, 3);

  return (
    <Section>
      <Container>
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="eyebrow">Articles</p>
            <Heading className="mt-4">Insights from the field.</Heading>
            <p className="mt-3 text-sm leading-7 text-navy/60 dark:text-white/55">
              Practical notes on well testing, production facilities, maintenance and compression.
            </p>
          </div>
          <ButtonLink href="/articles" variant="outline" className="w-full sm:w-auto">
            All Articles
          </ButtonLink>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.slug}
              href={`/articles/${item.slug}`}
              className="group overflow-hidden rounded-2xl border border-navy/8 bg-white dark:border-white/10 dark:bg-midnight-50"
            >
              <div className="relative h-48">
                <Image src={item.image} alt={item.title} fill sizes="33vw" className="object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-flame">{item.category}</p>
                <h3 className="mt-2 font-display text-lg font-bold text-navy dark:text-white">{item.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm leading-6 text-navy/60 dark:text-white/55">{item.excerpt}</p>
                <p className="mt-4 text-xs text-navy/45 dark:text-white/40">
                  {item.date} · {item.readTime}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
