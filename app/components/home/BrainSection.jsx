import {
  Brain,
  Layers,
  Fingerprint,
  Apple,
  Monitor,
  Smartphone,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Container } from "../ui/Container";
import Button from "../ui/Button";

const pillars = [
  {
    icon: Layers,
    title: "Context",
    accent: "#0091ff",
    body: "Real-time awareness of every task, doc and conversation in your workspace — plus the apps you connected.",
    proof: "92%+ retrieval accuracy",
  },
  {
    icon: Brain,
    title: "Intelligence",
    accent: "#7612fa",
    body: "GPT, Claude Opus and Gemini under one subscription. Brain² picks the right model for each job automatically.",
    proof: "85% cheaper than buying seats separately",
  },
  {
    icon: Fingerprint,
    title: "Personality",
    accent: "#fa12e3",
    body: "Learns your team's tone, methods and reporting structure, then writes the way your company writes.",
    proof: "Memory you can read and edit",
  },
];

const models = [
  "GPT-5.2",
  "Claude Opus 5",
  "Gemini 3 Pro",
  "Llama 4",
  "Mistral Large",
  "o4",
];

const platforms = [
  { name: "macOS", icon: Apple },
  { name: "Windows", icon: Monitor },
  { name: "iOS", icon: Smartphone },
  { name: "Android", icon: Smartphone },
];

export default function BrainSection() {
  return (
    <section
      id="brain"
      data-theme="dark"
      className="relative overflow-hidden bg-bg-main py-24 md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 h-[500px] w-[1000px] -translate-x-1/2 translate-y-1/3 rounded-full opacity-25 blur-[120px]"
        style={{
          background:
            "radial-gradient(closest-side, #40ddff, #7612fa 50%, transparent)",
        }}
      />

      <Container size="default" className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[12px] font-bold tracking-[0.06em] text-white uppercase backdrop-blur">
            <Sparkles className="size-3.5 text-accent-blue" />
            Brain²
          </span>
          <h2 className="font-display mt-6 text-[clamp(2.25rem,4.8vw,3.75rem)] leading-[1.02] font-extrabold tracking-[-0.035em] text-ink text-balance">
            The best AI is{" "}
            <em className="text-gradient-cool not-italic">your</em> AI
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-ink-secondary text-pretty">
            Generic assistants guess. Brain² knows — because it&apos;s wired
            into your team, your tools and your tasks.
          </p>
        </div>

        {/* Three pillars */}
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="group relative overflow-hidden rounded-panel border border-white/12 bg-white/[0.035] p-7 transition-colors hover:border-white/25"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-20 -right-16 size-52 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
                style={{ background: p.accent }}
              />
              <span
                className="relative flex size-12 items-center justify-center rounded-2xl"
                style={{ background: `${p.accent}22`, color: p.accent }}
              >
                <p.icon className="size-6" />
              </span>
              <h3 className="font-display relative mt-5 text-[21px] font-extrabold tracking-[-0.02em] text-ink">
                {p.title}
              </h3>
              <p className="relative mt-3 text-[14.5px] leading-relaxed text-ink-secondary">
                {p.body}
              </p>
              <p
                className="relative mt-5 text-[12.5px] font-bold"
                style={{ color: p.accent }}
              >
                {p.proof}
              </p>
            </div>
          ))}
        </div>

        {/* Model rail */}
        <div className="mt-6 overflow-hidden rounded-panel border border-white/12 bg-white/[0.035] py-7">
          <p className="px-7 text-[12px] font-bold tracking-[0.08em] text-ink-tertiary uppercase">
            Every model. One subscription.
          </p>
          <div className="fade-mask-x mt-5 overflow-hidden">
            <ul
              className="flex w-max animate-marquee items-center gap-3 pr-3"
              style={{ "--marquee-duration": "32s" }}
            >
              {[...models, ...models, ...models].map((m, i) => (
                <li
                  key={`${m}-${i}`}
                  aria-hidden={i >= models.length}
                  className="shrink-0 rounded-xl border border-white/12 bg-black/40 px-5 py-3 text-[14px] font-semibold whitespace-nowrap text-ink"
                >
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Platforms + CTA */}
        <div className="mt-12 flex flex-col items-center gap-7">
          <ul className="flex flex-wrap items-center justify-center gap-3">
            {platforms.map((p) => (
              <li
                key={p.name}
                className="inline-flex items-center gap-2 rounded-full border border-white/12 px-4 py-2 text-[13px] font-semibold text-ink-secondary"
              >
                <p.icon className="size-4" />
                {p.name}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button href="/ai" size="lg">
              Try Brain² FREE
            </Button>
            <a
              href="/pricing"
              className="inline-flex items-center gap-1.5 px-2 py-3 text-[14px] font-bold text-accent-blue hover:underline"
            >
              See AI pricing
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
