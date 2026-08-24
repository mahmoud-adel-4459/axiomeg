import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { articles, blogIntro } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/layout/page-hero";
import { HomeDualCta } from "@/sections/home/dual-cta";

export const metadata: Metadata = buildMetadata({
  title: "Articles",
  description: blogIntro,
  path: "/articles",
});

export default function ArticlesPage() {
  return (
    <>
      <PageHero eyebrow="Articles" title="Insights from the field." description={blogIntro} image="/images/solutions/well-testing.jpg" />
      <Section tone="white">
        <Container className="grid gap-5 md:grid-cols-2">
          {articles.map((item) => (
            <Link
              key={item.slug}
              href={`/articles/${item.slug}`}
              className="group overflow-hidden rounded-2xl border border-navy/8 bg-white dark:border-white/10 dark:bg-midnight-50"
            >
              <div className="relative h-52">
                <Image src={item.image} alt={item.title} fill sizes="50vw" className="object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-flame">{item.category}</p>
                <h2 className="mt-2 text-heading-3">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-navy/65 dark:text-white/60">{item.excerpt}</p>
                <p className="mt-4 text-xs text-navy/45 dark:text-white/40">
                  {item.date} · {item.readTime}
                </p>
              </div>
            </Link>
          ))}
        </Container>
      </Section>
      <HomeDualCta />
    </>
  );
}
