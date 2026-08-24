import Link from "next/link";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center pt-24">
      <Container className="max-w-xl text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 text-heading-1">This route is not on the drawing.</h1>
        <p className="mt-4 text-navy/70 dark:text-white/65">The page you requested does not exist. Return to the platform home or start a consultation.</p>
        <div className="mt-8 flex justify-center gap-3">
          <ButtonLink href="/">Back home</ButtonLink>
          <Link href="/contact" className="inline-flex h-12 items-center px-5 text-sm font-semibold text-navy dark:text-white">
            Contact
          </Link>
        </div>
      </Container>
    </section>
  );
}
