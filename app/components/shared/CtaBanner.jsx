import { Check } from "lucide-react";
import { Container } from "../ui/Container";
import Button from "../ui/Button";
import AppMockup from "./AppMockup";

const proof = [
  "Free forever",
  "No credit card required",
  "Set up in minutes",
];

export default function CtaBanner({
  title = "All your work, all your people, all powered by AI",
  subtitle = "Bring every task, doc, conversation and dashboard into one platform — and put an AI teammate on top of it.",
  primary = { label: "Get started. It's FREE", href: "/signup" },
  secondary = { label: "Talk to sales", href: "/enterprise#contact" },
  showMockup = true,
}) {
  return (
    <section data-theme="dark" className="relative overflow-hidden bg-bg-main">
      {/* Brand glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full opacity-45 blur-[120px]"
        style={{
          background:
            "radial-gradient(closest-side, #7612fa 0%, #fa12e3 45%, transparent 100%)",
        }}
      />
      <Container size="default" className="relative pt-24 pb-0 md:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.03] font-extrabold tracking-[-0.035em] text-ink text-balance">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-ink-secondary text-pretty">
            {subtitle}
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={primary.href} size="xl">
              {primary.label}
            </Button>
            {secondary ? (
              <Button href={secondary.href} variant="outline" size="xl">
                {secondary.label}
              </Button>
            ) : null}
          </div>

          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {proof.map((p) => (
              <li
                key={p}
                className="inline-flex items-center gap-1.5 text-[13px] font-medium text-ink-tertiary"
              >
                <Check className="size-3.5 text-accent-green" />
                {p}
              </li>
            ))}
          </ul>
        </div>

        {showMockup ? (
          <div className="fade-mask-b mt-16 -mb-4">
            <AppMockup className="mx-auto max-w-5xl" showAi={false} />
          </div>
        ) : (
          <div className="h-20" />
        )}
      </Container>
    </section>
  );
}
