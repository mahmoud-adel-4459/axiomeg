import { cn } from "@/utils/cn";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  padded?: boolean;
};

export function Card({ children, className, padded = true }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-axiom-lg border border-navy/8 bg-white shadow-axiom-sm transition duration-300 ease-axiom hover:border-cyan/50 hover:shadow-axiom dark:border-white/10 dark:bg-midnight-50 dark:hover:border-cyan/40",
        padded && "p-6 md:p-8",
        className,
      )}
    >
      {children}
    </div>
  );
}
