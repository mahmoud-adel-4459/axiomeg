import Image from "next/image";
import { cn } from "@/utils/cn";

type LogoProps = {
  className?: string;
  compact?: boolean;
  footer?: boolean;
  light?: boolean;
};

export function Logo({
  className,
  compact = false,
  footer = false,
  light = false,
}: LogoProps) {
  // If compact is requested, render the official flame symbol
  if (compact) {
    return (
      <span className={cn("inline-flex shrink-0 items-center", className)}>
        <Image
          src="/images/home/axiom-flame-mark.png"
          alt="Axiom Egypt Symbol"
          width={36}
          height={48}
          priority
          className="h-9 w-auto object-contain"
        />
        <span className="sr-only">Axiom Egypt</span>
      </span>
    );
  }

  // Full official logo with flame emblem, AXIOM EGYPT title, and Petroleum Services subtitle
  return (
    <span className={cn("inline-flex shrink-0 items-center", className)}>
      {/* Light mode logo (Orange flame + Dark navy AXIOM EGYPT + Orange subtitle) */}
      <Image
        src="/images/home/axiom-logo-light.png"
        alt="Axiom Egypt — Petroleum Services & Commercial Agencies"
        width={210}
        height={61}
        priority
        className={cn(
          "w-auto object-contain transition-opacity duration-200",
          footer ? "h-12 sm:h-14" : "h-10 sm:h-11",
          light ? "block" : "block dark:hidden"
        )}
      />

      {/* Dark mode logo (Orange flame + High-contrast white AXIOM EGYPT + Orange subtitle) */}
      {!light && (
        <Image
          src="/images/home/axiom-logo-dark.png"
          alt="Axiom Egypt — Petroleum Services & Commercial Agencies"
          width={210}
          height={61}
          priority
          className={cn(
            "hidden w-auto object-contain transition-opacity duration-200 dark:block",
            footer ? "dark:h-12 sm:dark:h-14" : "dark:h-10 sm:dark:h-11"
          )}
        />
      )}
    </span>
  );
}
