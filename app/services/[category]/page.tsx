import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, getCategory, getSolutionsByCategory, solutionHref } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/layout/page-hero";

type PageProps = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return categories.map((item) => ({ category: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  const item = getCategory(category);
  if (!item) return {};
  return buildMetadata({
    title: item.title,
    description: item.summary,
    path: `/services/${item.slug}`,
  });
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  const item = getCategory(category);
  if (!item) notFound();
  const items = getSolutionsByCategory(category);

  return (
    <>
      <PageHero eyebrow="Take a look" title={item.title} description={item.summary} image={item.image} />
      <Section tone="white">
        <Container className="grid gap-5 md:grid-cols-2">
          {items.map((solution) => (
            <Link key={solution.slug} href={solutionHref(solution)} className="block h-full">
              <Card padded={false} className="h-full overflow-hidden">
                <div className="relative h-52">
                  <Image src={solution.image} alt={solution.title} fill sizes="50vw" className="object-cover" />
                </div>
                <div className="p-6">
                  <h2 className="text-heading-3">{solution.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-navy/70 dark:text-white/65">{solution.summary}</p>
                  <p className="mt-5 text-sm font-semibold text-flame">Know more</p>
                </div>
              </Card>
            </Link>
          ))}
        </Container>
      </Section>
    </>
  );
}
