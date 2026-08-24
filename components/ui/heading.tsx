import { cn } from "@/utils/cn";

type HeadingLevel = "h1" | "h2" | "h3";

const sizes: Record<HeadingLevel, string> = {
  h1: "text-heading-1",
  h2: "text-heading-2",
  h3: "text-heading-3",
};

type HeadingProps = {
  as?: HeadingLevel;
  children: React.ReactNode;
  className?: string;
};

export function Heading({ as = "h2", children, className }: HeadingProps) {
  const Tag = as;
  return <Tag className={cn("font-display text-navy dark:text-white", sizes[as], className)}>{children}</Tag>;
}
