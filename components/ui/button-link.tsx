import Link from "next/link";
import { buttonClasses, type ButtonSize, type ButtonVariant } from "@/components/ui/button";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  onClick?: () => void;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
}: ButtonLinkProps) {
  return (
    <Link href={href} onClick={onClick} className={buttonClasses(variant, size, className)}>
      {children}
    </Link>
  );
}
