import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getSolution, solutions } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { HomeQuote } from "@/sections/home/quote";

type PageProps = {
  params: Promise<{ category: string; slug: string }>;
};

export function generateStaticParams() {
  return solutions.map((item) => ({ category: item.category, slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const item = getSolution(category, slug);
  if (!item) return {};
  return buildMetadata({
    title: item.title,
    description: item.summary,
    path: `/services/${item.category}/${item.slug}`,
  });
}

export default async function SolutionDetailPage({ params }: PageProps) {
  const { category, slug } = await params;
  const item = getSolution(category, slug);
  if (!item) notFound();

  return (
    <>
      <section className="relative overflow-hidden border-b border-navy/8 pt-32 pb-16 dark:border-white/8">
        <Image src={item.image} alt="" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-white/84 dark:bg-midnight/88" />
        <Container className="relative grid items-center gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <Badge>Solution</Badge>
            <Heading as="h1" className="mt-4 text-display">
              {item.title}
            </Heading>
            <p className="mt-5 text-lg leading-8 text-navy/70 dark:text-white/65">{item.description}</p>
          </div>
          <div className="relative hidden min-h-[18rem] overflow-hidden rounded-axiom-xl shadow-axiom lg:block">
            <Image src={item.image} alt={item.title} fill sizes="40vw" className="object-cover" />
          </div>
        </Container>
      </section>

      <Section tone="white">
        <Container>
          <h2 className="text-heading-2">Key features</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {item.features.map((feature) => (
              <Card key={feature.title}>
                <h3 className="text-heading-3">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-navy/70 dark:text-white/65">{feature.text}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {item.specs ? (
        <Section>
          <Container>
            <h2 className="text-heading-2">Technical specifications</h2>
            <dl className="mt-8 grid gap-3 md:grid-cols-2">
              {item.specs.map((spec) => (
                <div key={spec.label} className="rounded-axiom border border-navy/8 bg-white px-5 py-4 dark:border-white/10 dark:bg-midnight-50">
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-navy/45 dark:text-white/40">{spec.label}</dt>
                  <dd className="mt-2 text-sm text-navy dark:text-white">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </Container>
        </Section>
      ) : null}

      {item.extraTitle ? (
        <Section tone="white">
          <Container className="max-w-3xl">
            <h2 className="text-heading-2">{item.extraTitle}</h2>
            <p className="mt-4 leading-8 text-navy/70 dark:text-white/65">{item.extraText}</p>
            <div className="mt-6 grid gap-4">
              {item.extraFeatures?.map((feature) => (
                <Card key={feature.title}>
                  <h3 className="text-heading-3">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-navy/70 dark:text-white/65">{feature.text}</p>
                </Card>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      <HomeQuote />
    </>
  );
}
