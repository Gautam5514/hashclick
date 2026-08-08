import { cn } from "@/lib/utils";

// Reuses the site-wide `animate-marquee` keyframe (globals.css), which
// translates a track that's exactly 2x the content width by -50% —
// duplicate `children` once here so the loop is seamless.
export function Marquee({
  className,
  pauseOnHover = false,
  duration = "40s",
  children,
  ...props
}) {
  return (
    <div className={cn("group flex overflow-hidden [--gap:1rem]", className)}>
      <div
        {...props}
        className={cn(
          "flex w-max shrink-0 [gap:var(--gap)] animate-marquee",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={{ "--marquee-duration": duration }}
      >
        <div className="flex shrink-0 [gap:var(--gap)]">{children}</div>
        <div className="flex shrink-0 [gap:var(--gap)]" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
