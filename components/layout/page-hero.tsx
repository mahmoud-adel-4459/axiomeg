import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  image = "/images/slides/slide01.jpg",
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-midnight">
      <div className="pointer-events-none absolute inset-y-0 right-0 w-full md:w-[48%]">
        <Image src={image} alt="" fill sizes="50vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-midnight dark:via-midnight/80 dark:to-transparent" />
      </div>
      <Container className="relative py-16 sm:py-20 md:py-28">
        <p className="eyebrow">{eyebrow}</p>
        <Heading as="h1" className="mt-4 max-w-xl text-heading-1 md:text-display">
          {title}
        </Heading>
        <p className="mt-4 max-w-xl text-base leading-7 text-navy/65 dark:text-white/65 sm:mt-5 sm:text-lg sm:leading-8">{description}</p>
      </Container>
    </section>
  );
}
