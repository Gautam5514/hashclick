import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  /* The signature gradient CTA */
  gradient:
    "bg-brand-gradient text-white shadow-[0_1px_2px_rgba(0,0,0,0.12)] hover:brightness-110 hover:shadow-[0_8px_24px_-6px_rgba(118,18,250,0.45)]",
  /* Solid ink button — inverts in dark sections */
  primary:
    "bg-btn-primary text-bg-main hover:opacity-85",
  /* Muted fill */
  secondary:
    "bg-btn-secondary text-ink hover:bg-btn-secondary-hover",
  /* Hairline outline */
  outline:
    "border border-line-strong text-ink hover:bg-btn-secondary hover:border-ink-tertiary",
  ghost: "text-ink hover:bg-btn-secondary",
  link: "text-accent-blue hover:underline underline-offset-4 px-0",
};

const sizes = {
  sm: "h-9 px-4 text-[13px]",
  md: "h-11 px-5 text-[14px]",
  lg: "h-13 px-7 text-[15px]",
  xl: "h-14 px-8 text-base",
};

export default function Button({
  as,
  href,
  variant = "gradient",
  size = "md",
  className,
  children,
  ...props
}) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold whitespace-nowrap",
    "transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple",
    "disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  const Tag = as || "button";
  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  );
}
