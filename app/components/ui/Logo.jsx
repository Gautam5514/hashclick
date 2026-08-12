import Link from "next/link";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

/** The Hashboard icon mark — black, for light backgrounds. */
export function LogoMark({ className }) {
  return (
    <img
      src="/hashboard-2.svg"
      alt=""
      aria-hidden="true"
      className={cn("size-8 object-contain", className)}
    />
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
