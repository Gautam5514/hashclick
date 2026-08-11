import { cn } from "@/lib/utils";

/** Small pill label used above section headings */
export function Eyebrow({ children, className, tone = "purple" }) {
  const tones = {
    purple: "bg-accent-purple-badge text-accent-purple",
    pink: "bg-accent-pink-badge text-accent-pink",
    blue: "bg-accent-blue-badge text-accent-blue",
    orange: "bg-accent-orange-badge text-accent-orange",
    green: "bg-accent-green-badge text-accent-green",
    neutral: "bg-btn-secondary text-ink-secondary",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[12px] font-semibold tracking-[0.02em] uppercase",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

/** Section heading block: eyebrow + title + subtitle */
export function SectionHeading({
  eyebrow,
  eyebrowTone,
  title,
  subtitle,
  align = "center",
  className,
  titleClassName,
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center mx-auto max-w-3xl",
        align === "left" && "items-start text-left",
        className,
      )}
    >
      {eyebrow ? <Eyebrow tone={eyebrowTone}>{eyebrow}</Eyebrow> : null}
      <h2
        className={cn(
          "font-display text-[clamp(32px,3.6vw,48px)] leading-[1.15] font-[650] tracking-[-1.68px] text-balance",
          "bg-[linear-gradient(97deg,#202020_43.17%,#8f8f8f_110.86%)] bg-clip-text text-transparent",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-2xl text-[17px] leading-relaxed text-ink-secondary text-pretty">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

/** Standard surface card */
export function Card({ className, children, hover = true, ...props }) {
  return (
    <div
      className={cn(
        "rounded-card border border-line bg-bg-main p-6",
        hover &&
          "transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-line-strong hover:shadow-[0_18px_40px_-24px_rgba(0,0,0,0.25)]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

/** Colored square icon tile */
export function IconTile({ icon: Icon, tone = "purple", className, size = "md" }) {
  const tones = {
    purple: "bg-accent-purple-badge text-accent-purple",
    pink: "bg-accent-pink-badge text-accent-pink",
    blue: "bg-accent-blue-badge text-accent-blue",
    orange: "bg-accent-orange-badge text-accent-orange",
    green: "bg-accent-green-badge text-accent-green",
    red: "bg-accent-red-badge text-accent-red",
    deepblue: "bg-accent-deep-blue-badge text-accent-deep-blue",
  };
  const sizes = {
    sm: "size-9 rounded-[10px] [&>svg]:size-4.5",
    md: "size-11 rounded-xl [&>svg]:size-5.5",
    lg: "size-14 rounded-2xl [&>svg]:size-7",
  };
  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center",
        tones[tone],
        sizes[size],
        className,
      )}
    >
      <Icon strokeWidth={2} />
    </div>
  );
}

/** Big number + label used in stat rows */
export function Stat({ value, label, sub, className }) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <div className="font-display text-[clamp(2.25rem,4vw,3.5rem)] leading-none font-extrabold tracking-[-0.04em] text-brand-gradient">
        {value}
      </div>
      <div className="text-[15px] font-semibold text-ink">{label}</div>
      {sub ? <div className="text-[13px] text-ink-tertiary">{sub}</div> : null}
    </div>
  );
}
