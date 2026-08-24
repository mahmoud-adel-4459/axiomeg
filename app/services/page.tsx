import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { categories } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/layout/page-hero";

export const metadata: Metadata = buildMetadata({
  title: "Market We Serve",
  description:
    "Axiom Egypt provides production and testing equipment, power generation equipment, and pump solutions and maintenance services to petroleum companies.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Market We Serve"
        title="Solutions"
        description="As a comprehensive and trustworthy company, we are committed to providing a wide range of support in services to all petroleum companies."
        image="/images/slides/slide01.jpg"
      />
      <Section tone="white">
        <Container className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.slug} href={`/services/${category.slug}`} className="block h-full">
              <Card padded={false} className="h-full overflow-hidden">
                <div className="relative h-44">
                  <Image src={category.image} alt={category.title} fill sizes="33vw" className="object-cover" />
                </div>
                <div className="p-6">
                  <h2 className="text-heading-3">{category.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-navy/70 dark:text-white/65">{category.summary}</p>
                  <p className="mt-5 text-sm font-semibold text-flame">Take a look</p>
                </div>
              </Card>
            </Link>
          ))}
        </Container>
      </Section>
    </>
  );
}
