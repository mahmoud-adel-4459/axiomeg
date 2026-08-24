import { cn } from "@/utils/cn";

type IconBoxProps = {
  children: React.ReactNode;
  className?: string;
};

export function IconBox({ children, className }: IconBoxProps) {
  return (
    <div
      className={cn(
        "flex h-12 w-12 items-center justify-center rounded-axiom bg-teal-100 text-navy dark:bg-cyan/15 dark:text-cyan",
        className,
      )}
    >
      {children}
    </div>
  );
}
