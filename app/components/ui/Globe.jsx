import { cn } from "@/lib/utils";

const MARKERS = [
  { top: "22%", left: "58%", size: "size-1.5" },
  { top: "62%", left: "68%", size: "size-1" },
  { top: "48%", left: "36%", size: "size-1.5" },
  { top: "34%", left: "46%", size: "size-1" },
];

export function Globe({ className }) {
  return (
    <div
      className={cn(
        "relative aspect-square w-full max-w-md overflow-hidden rounded-full",
        "bg-[radial-gradient(circle_at_32%_28%,#ffffff_0%,#eef1f4_35%,#dbe0e6_65%,#c7cdd4_100%)]",
        "shadow-[inset_-10px_-10px_22px_rgba(0,0,0,0.14),inset_6px_6px_12px_rgba(255,255,255,0.7)]",
        className,
      )}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full animate-globe-spin"
      >
        <g fill="none" stroke="rgba(32,32,32,0.16)" strokeWidth="0.6">
          <ellipse cx="50" cy="50" rx="48" ry="14" />
          <ellipse cx="50" cy="50" rx="48" ry="28" />
          <ellipse cx="50" cy="50" rx="48" ry="42" />
          <ellipse cx="50" cy="50" rx="14" ry="48" />
          <ellipse cx="50" cy="50" rx="28" ry="48" />
          <ellipse cx="50" cy="50" rx="42" ry="48" />
        </g>
        <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(32,32,32,0.22)" strokeWidth="0.8" />
      </svg>

      {MARKERS.map((m) => (
        <span
          key={`${m.top}-${m.left}`}
          className={cn(
            "absolute rounded-full bg-accent-orange shadow-[0_0_4px_rgba(252,109,45,0.6)]",
            m.size,
          )}
          style={{ top: m.top, left: m.left }}
        />
      ))}
    </div>
  );
}
