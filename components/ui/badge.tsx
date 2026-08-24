import { cn } from "@/utils/cn";

type BadgeTone = "teal" | "flame" | "navy";

const tones: Record<BadgeTone, string> = {
  teal: "bg-teal-100 text-navy dark:bg-cyan/15 dark:text-cyan",
  flame: "bg-flame-50 text-flame-600 dark:bg-flame/15 dark:text-flame",
  navy: "bg-navy-50 text-navy dark:bg-white/10 dark:text-white",
};

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
  tone?: BadgeTone;
};

export function Badge({ children, className, tone = "teal" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em]",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
