"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Globe, Menu, X } from "lucide-react";
import { navigation, siteConfig } from "@/lib/content";
import { ButtonLink } from "@/components/ui/button-link";
import { Logo } from "@/components/ui/logo";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { cn } from "@/utils/cn";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-navy/6 bg-white/90 backdrop-blur-md dark:border-white/8 dark:bg-midnight/75">
      <div className="mx-auto flex h-16 max-w-[88rem] items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0" aria-label="Axiom Egypt home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden min-w-0 flex-1 items-center justify-center xl:flex" aria-label="Primary">
          {navigation.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <div key={item.href} className="group relative shrink-0">
                <Link
                  href={item.href}
                  className={cn(
                    "inline-flex items-center whitespace-nowrap px-2 py-2 text-[12.5px] font-semibold xl:px-2.5",
                    active ? "text-flame" : "text-navy hover:text-flame dark:text-white/85 dark:hover:text-flame",
                  )}
                >
                  {item.label}
                  {item.children ? <ChevronDown size={14} /> : null}
                </Link>
                {item.children ? (
                  <div className="invisible absolute left-0 top-full z-20 min-w-56 rounded-xl border border-navy/8 bg-white p-2 opacity-0 shadow-axiom transition group-hover:visible group-hover:opacity-100 dark:border-white/10 dark:bg-midnight-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-lg px-3 py-2 text-sm text-navy/80 hover:bg-surface-muted hover:text-navy dark:text-white/75 dark:hover:bg-white/5 dark:hover:text-white"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 xl:flex">
          <ThemeToggle />
          <span className="inline-flex items-center gap-1 whitespace-nowrap text-sm font-semibold text-navy dark:text-white">
            <Globe size={14} /> EN
          </span>
          <ButtonLink href={siteConfig.ctaHref} size="sm" className="whitespace-nowrap">
            {siteConfig.ctaLabel}
          </ButtonLink>
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy/10 text-navy dark:border-white/15 dark:text-white"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-navy/8 bg-white xl:hidden dark:border-white/10 dark:bg-midnight"
        >
          <nav className="mx-auto flex max-w-[80rem] flex-col gap-1 px-4 py-4" aria-label="Mobile">
            {navigation.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-semibold text-navy dark:text-white"
                >
                  {item.label}
                </Link>
                {item.children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={() => setOpen(false)}
                    className="block px-6 py-2 text-sm text-navy/70 dark:text-white/60"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
            <ButtonLink href={siteConfig.ctaHref} className="mt-3 w-full" onClick={() => setOpen(false)}>
              {siteConfig.ctaLabel}
            </ButtonLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
