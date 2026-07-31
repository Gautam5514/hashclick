import Link from "next/link";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

/** Gradient mark: stacked upward chevrons, matching the brand mark silhouette. */
export function LogoMark({ className }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      className={cn("size-8", className)}
    >
      <defs>
        <linearGradient id="lm-lower" x1="0" y1="40" x2="40" y2="20">
          <stop offset="0%" stopColor="#40ddff" />
          <stop offset="55%" stopColor="#7612fa" />
          <stop offset="100%" stopColor="#fa12e3" />
        </linearGradient>
        <linearGradient id="lm-upper" x1="6" y1="18" x2="34" y2="2">
          <stop offset="0%" stopColor="#fa12e3" />
          <stop offset="100%" stopColor="#ffc800" />
        </linearGradient>
      </defs>
      <path
        d="M3.4 29.6 9.1 25.4c3.03 3.96 6.25 5.78 9.84 5.78 3.57 0 6.7-1.8 9.6-5.73l5.77 4.12C30.13 35.24 25.2 38.2 18.94 38.2c-6.24 0-11.23-2.94-15.54-8.6Z"
        fill="url(#lm-lower)"
      />
      <path
        d="M18.9 11.1 8.78 19.83 4.14 14.45 18.93 1.7 33.6 14.46l-4.65 5.36L18.9 11.1Z"
        fill="url(#lm-upper)"
      />
    </svg>
  );
}

export default function Logo({ className, markClassName, showWordmark = true }) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} home`}
      className={cn(
        "inline-flex items-center gap-2 transition-opacity hover:opacity-80",
        className,
      )}
    >
      <LogoMark className={markClassName} />
      {showWordmark ? (
        <span className="font-display text-[21px] leading-none font-extrabold tracking-[-0.035em] text-ink">
          {site.name}
        </span>
      ) : null}
    </Link>
  );
}
