import Link from "next/link";
import { Facebook, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { footerColumns, siteConfig, socialLinks } from "@/lib/content";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-navy/8 bg-[#F6F8FB] dark:border-white/8 dark:bg-[#050C18]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-flame to-transparent opacity-80" />
      <Container className="grid gap-10 py-12 sm:py-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <Logo footer />
          <p className="mt-5 max-w-sm text-sm leading-7 text-navy/60 dark:text-white/55">
            Integrated petroleum services for testing, production, power and maintenance — engineered for reliability in
            the field.
          </p>
          <div className="mt-6 flex gap-3">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy/10 text-navy transition hover:border-flame hover:bg-flame hover:text-white dark:border-white/15 dark:text-white"
                aria-label={item.label}
              >
                {item.label === "Facebook" ? <Facebook size={16} /> : <Youtube size={16} />}
              </a>
            ))}
          </div>
        </div>

        <FooterList title="Services" items={footerColumns.services} />
        <FooterList title="Solutions" items={footerColumns.solutions} />
        <FooterList title="Industries" items={footerColumns.industries} />

        <div className="lg:col-span-2">
          <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-navy dark:text-white">Contact</h2>
          <span className="mt-2 block h-0.5 w-7 rounded-full bg-flame" />
          <ul className="mt-5 space-y-4 text-sm leading-6 text-navy/70 dark:text-white/65">
            <li className="flex gap-3">
              <Phone size={16} className="mt-0.5 shrink-0 text-flame" />
              <span>
                <a href="tel:0227542566" className="hover:text-flame">
                  {siteConfig.phones[0]}
                </a>
                <br />
                <a href="tel:0227548295" className="hover:text-flame">
                  {siteConfig.phones[1]}
                </a>
              </span>
            </li>
            <li className="flex gap-3">
              <Mail size={16} className="mt-0.5 shrink-0 text-flame" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-flame">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-flame" />
              <span>
                {siteConfig.address}
                <br />
                {siteConfig.addressSecondary}
                <a
                  href={siteConfig.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 block font-semibold text-flame"
                >
                  View on map
                </a>
              </span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-navy/8 dark:border-white/8">
        <Container className="flex flex-col gap-3 py-5 text-xs text-navy/45 dark:text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Axiom Egypt. All Rights Reserved.</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {legalLinks.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-navy dark:hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}

function FooterList({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div className="lg:col-span-2">
      <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-navy dark:text-white">{title}</h2>
      <span className="mt-2 block h-0.5 w-7 rounded-full bg-flame" />
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="text-sm text-navy/65 transition hover:text-flame dark:text-white/60 dark:hover:text-white"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
