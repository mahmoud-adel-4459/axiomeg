import { cn } from "@/utils/cn";

type SectionTone = "muted" | "white" | "honeydew";

const tones: Record<SectionTone, string> = {
  muted: "bg-surface-muted dark:bg-midnight-100",
  white: "bg-white dark:bg-midnight",
  honeydew: "bg-honeydew-200 dark:bg-midnight-50",
};

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  tone?: SectionTone;
  id?: string;
};

export function Section({ children, className, tone = "muted", id }: SectionProps) {
  return (
    <section id={id} className={cn("section-space scroll-mt-24", tones[tone], className)}>
      {children}
    </section>
  );
}
