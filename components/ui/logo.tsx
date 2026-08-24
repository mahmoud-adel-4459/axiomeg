import { cn } from "@/utils/cn";

type LogoProps = {
  className?: string;
  compact?: boolean;
  footer?: boolean;
  light?: boolean;
};

function Mark({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 44" fill="none" aria-hidden="true">
      <path
        d="M18 1.2c-2.2 6.4-8.6 9.4-9.2 16.4-.1 3.6 2.5 6.2 5.8 6.8-3.2-4.8.2-8.4 2.4-11.6 2.2 3.2 5.6 6.8 2.4 11.6 3.3-.6 5.9-3.2 5.8-6.8C27.6 10.6 21.2 7.6 18 1.2Z"
        fill="#EF4423"
      />
      <path d="M5.2 42.4 18 14.6 30.8 42.4h-7.2L18 28.2 12.4 42.4H5.2Z" fill="#EF4423" />
    </svg>
  );
}

export function Logo({ className, compact = false, footer = false }: LogoProps) {
  const word = "AXIOM";

  return (
    <span className={cn("inline-flex shrink-0 items-center gap-2", className)}>
      <Mark size={footer ? 40 : 32} />
      {compact ? (
        <span className="sr-only">Axiom Egypt</span>
      ) : (
        <span className="leading-none">
          <span className="relative block font-display text-[1.2rem] font-extrabold tracking-[0.14em] text-navy dark:text-white">
            {word}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-0 top-0 overflow-hidden text-flame"
              style={{ width: "0.42em" }}
            >
              {word}
            </span>
          </span>
          <span className="mt-0.5 block text-right text-[9px] font-semibold tracking-[0.42em] text-navy/70 dark:text-white/70">
            EGYPT
          </span>
        </span>
      )}
    </span>
  );
}
