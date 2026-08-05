import Link from "next/link";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

/**
 * Gradient mark: a chevron over a smile arc. Drawn as strokes so the geometry
 * stays clean from favicon size up to the 112px badge on the integrations belt.
 */
export function LogoMark({ className }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={cn("size-8", className)}
    >
      <defs>
        <linearGradient id="lm-upper" x1="8" y1="17" x2="40" y2="4" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ff17c8" />
          <stop offset="100%" stopColor="#ff8a1e" />
        </linearGradient>
        <linearGradient id="lm-lower" x1="9" y1="42" x2="39" y2="27" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#8b1cf5" />
          <stop offset="100%" stopColor="#3fd2ff" />
        </linearGradient>
      </defs>
      {/* Chunky chevron with a rounded apex over a deep, thick smile */}
      <path d="M8 17 24 4l16 13" stroke="url(#lm-upper)" strokeWidth="10" strokeLinejoin="round" />
      <path d="M9 27a15 15 0 0 0 30 0" stroke="url(#lm-lower)" strokeWidth="10" />
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
