import { cn } from "@/lib/utils";

export function Container({ className, children, size = "default" }) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-6 lg:px-8",
        size === "narrow" && "max-w-4xl",
        size === "default" && "max-w-[1240px]",
        size === "wide" && "max-w-[1440px]",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Section({ className, children, theme, id, ...props }) {
  return (
    <section
      id={id}
      data-theme={theme}
      className={cn(
        "relative py-20 md:py-28",
        theme === "dark" && "bg-bg-main text-ink",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}
