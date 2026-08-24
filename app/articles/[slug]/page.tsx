import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticle } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { HomeDualCta } from "@/sections/home/dual-cta";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getArticle(slug);
  if (!item) return {};
  return buildMetadata({
    title: item.title,
    description: item.excerpt,
    path: `/articles/${item.slug}`,
  });
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const item = getArticle(slug);
  if (!item) notFound();
  const related = articles.filter((article) => article.slug !== item.slug).slice(0, 2);

  return (
    <>
      <section className="relative overflow-hidden bg-white dark:bg-midnight">
        <div className="pointer-events-none absolute inset-y-0 right-0 w-full md:w-[46%]">
          <Image src={item.image} alt="" fill sizes="50vw" className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent dark:from-midnight dark:via-midnight/80 dark:to-transparent" />
        </div>
        <Container className="relative py-16 sm:py-20 md:py-28">
          <p className="eyebrow">{item.category}</p>
          <Heading as="h1" className="mt-4 max-w-xl text-heading-1 md:text-display">
            {item.title}
          </Heading>
          <p className="mt-4 text-sm text-navy/50 dark:text-white/45">
            {item.date} · {item.readTime} read
          </p>
        </Container>
      </section>
      <Section tone="white">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.7fr]">
          <article className="max-w-2xl space-y-5 text-base leading-8 text-navy/75 dark:text-white/70">
            {item.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>
          <aside>
            <p className="eyebrow">More articles</p>
            <ul className="mt-5 space-y-4">
              {related.map((article) => (
                <li key={article.slug}>
                  <Link href={`/articles/${article.slug}`} className="block rounded-2xl border border-navy/8 p-4 hover:border-flame/40 dark:border-white/10">
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-flame">{article.category}</p>
                    <p className="mt-2 font-semibold text-navy dark:text-white">{article.title}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </Container>
      </Section>
      <HomeDualCta />
    </>
  );
}
