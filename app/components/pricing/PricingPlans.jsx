"use client";

import { useState } from "react";
import { Check, Sparkles, ShieldCheck, Info } from "lucide-react";
import { Container } from "../ui/Container";
import Button from "../ui/Button";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Free Forever",
    tagline: "Best for personal use",
    monthly: 0,
    yearly: 0,
    cta: "Get started",
    ctaVariant: "outline",
    href: "/signup",
    intro: "Free forever, for unlimited members",
    features: [
      "Unlimited tasks",
      "Unlimited Free plan members",
      "60MB storage",
      "Two-factor authentication",
      "Kanban boards",
      "Sprint management",
      "Calendar view",
      "Custom field manager basic",
      "In-app video recording",
      "24/7 support",
    ],
  },
  {
    name: "Unlimited",
    tagline: "Best for small teams",
    monthly: 10,
    yearly: 7,
    cta: "Get started",
    ctaVariant: "outline",
    href: "/signup",
    intro: "Everything in Free Forever, plus:",
    features: [
      "Unlimited storage",
      "Unlimited integrations",
      "Unlimited dashboards",
      "Guests with permissions",
      "Unlimited Gantt charts",
      "Unlimited custom fields",
      "Native time tracking",
      "Goals & portfolios",
      "Form view",
      "Resource management",
      "Agile reporting",
      "Email in ClickUp",
    ],
  },
  {
    name: "Business",
    tagline: "Best for mid-sized teams",
    monthly: 19,
    yearly: 12,
    popular: true,
    cta: "Get started",
    ctaVariant: "gradient",
    href: "/signup",
    intro: "Everything in Unlimited, plus:",
    features: [
      "Google SSO",
      "Unlimited teams",
      "Custom exporting",
      "Advanced public sharing",
      "Advanced automations",
      "Advanced dashboard features",
      "Advanced time tracking",
      "Granular time estimates",
      "Workload management",
      "Timelines & mind maps",
      "Goal folders",
      "5,000 automations / month",
    ],
  },
  {
    name: "Enterprise",
    tagline: "Best for many large teams",
    custom: true,
    cta: "Contact sales",
    ctaVariant: "primary",
    href: "/enterprise#contact",
    intro: "Everything in Business, plus:",
    features: [
      "White labeling",
      "Advanced permissions",
      "Conditional logic in forms",
      "Enterprise API",
      "Unlimited custom roles",
      "Team sharing for spaces",
      "Universal search",
      "Default personal views",
      "MSA & HIPAA available",
      "SAML SSO & SCIM",
      "Live onboarding training",
      "Dedicated success manager",
    ],
  },
];

const aiPlans = [
  {
    name: "Free Forever AI",
    price: "$0",
    unit: "",
    blurb: "Try the assistant with a monthly allowance of AI actions.",
    accent: "#7b7b7b",
    features: [
      "100 AI actions / month",
      "AI writing and summaries",
      "Task and doc Q&A",
      "Standard models",
    ],
    cta: "Start free",
  },
  {
    name: "Brain",
    price: "$9",
    unit: "per user/month",
    blurb: "Unlimited assistant, agents and chat on every plan.",
    accent: "#7612fa",
    popular: true,
    features: [
      "Unlimited AI assistant",
      "Unlimited Super Agents",
      "Every model: GPT, Claude, Gemini",
      "1,500 AI Super Credits / month",
      "Connected apps & MCP",
      "Ambient intelligence",
    ],
    cta: "Add Brain",
  },
  {
    name: "Everything AI",
    price: "$28",
    unit: "per user/month",
    blurb: "The full stack — image generation, deep research and AI automations.",
    accent: "#fa12e3",
    features: [
      "Everything in Brain",
      "Image and video generation",
      "AI-powered automations",
      "Deep research and analysis",
      "Enterprise search across apps",
      "10,000 AI Super Credits / month",
    ],
    cta: "Go all in",
  },
];

function Price({ plan, yearly }) {
  if (plan.custom) {
    return (
      <div className="flex min-h-[76px] flex-col justify-center">
        <div className="font-display text-[34px] leading-none font-extrabold tracking-[-0.04em] text-ink">
          Custom
        </div>
        <p className="mt-2 text-[12.5px] text-ink-tertiary">
          Volume pricing and annual contracts
        </p>
      </div>
    );
  }

  const amount = yearly ? plan.yearly : plan.monthly;

  return (
    <div className="flex min-h-[76px] flex-col justify-center">
      <div className="flex items-baseline gap-1.5">
        <span className="font-display text-[44px] leading-none font-extrabold tracking-[-0.045em] text-ink">
          ${amount}
        </span>
        {amount > 0 ? (
          <span className="text-[13px] leading-tight font-medium text-ink-tertiary">
            per user
            <br />
            /month
          </span>
        ) : null}
      </div>
      <p className="mt-2 text-[12.5px] text-ink-tertiary">
        {amount === 0
          ? "Free forever"
          : yearly
            ? "billed yearly"
            : "billed monthly"}
      </p>
    </div>
  );
}

export default function PricingPlans() {
  const [yearly, setYearly] = useState(true);

  return (
    <>
      {/* Hero + toggle */}
      <section className="relative overflow-hidden pt-14 pb-14 md:pt-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-56 left-1/2 h-[520px] w-[900px] -translate-x-1/2 opacity-[0.13] blur-[110px]"
          style={{
            background:
              "radial-gradient(45% 50% at 35% 45%, #7612fa 0%, transparent 100%), radial-gradient(45% 50% at 65% 45%, #fa12e3 0%, transparent 100%)",
          }}
        />
        <Container size="default" className="relative text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-bg-main px-3.5 py-1.5 text-[12.5px] font-bold text-ink">
            <ShieldCheck className="size-3.5 text-accent-green" />
            100% money-back guarantee
          </span>
          <h1 className="font-display mt-6 text-[clamp(2.5rem,5.6vw,4.25rem)] leading-[1.02] font-extrabold tracking-[-0.04em] text-ink text-balance">
            The best work solution,{" "}
            <span className="text-brand-gradient">for the best price</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-ink-secondary">
            Free forever for unlimited members. Upgrade when you need more — and
            save up to 30% paying yearly.
          </p>

          {/* Billing toggle */}
          <div className="mt-9 inline-flex items-center gap-3">
            <div
              role="group"
              aria-label="Billing period"
              className="inline-flex items-center rounded-full border border-line bg-bg-box p-1"
            >
              {[
                { key: false, label: "Monthly" },
                { key: true, label: "Yearly" },
              ].map((opt) => (
                <button
                  key={opt.label}
                  type="button"
                  onClick={() => setYearly(opt.key)}
                  aria-pressed={yearly === opt.key}
                  className={cn(
                    "rounded-full px-5 py-2 text-[14px] font-semibold transition-all duration-200",
                    yearly === opt.key
                      ? "bg-bg-main text-ink shadow-[0_1px_3px_rgba(0,0,0,0.12)]"
                      : "text-ink-tertiary hover:text-ink",
                  )}
                >
                  {opt.label}
                </button>
              ))}
            </div>
            <span
              className={cn(
                "rounded-full bg-accent-green-badge px-3 py-1.5 text-[12px] font-bold text-accent-green transition-opacity",
                yearly ? "opacity-100" : "opacity-40",
              )}
            >
              Save 30%
            </span>
          </div>
        </Container>
      </section>

      {/* Plan grid */}
      <section className="pb-20">
        <Container size="wide">
          <div className="grid gap-5 lg:grid-cols-4">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={cn(
                  "relative flex flex-col rounded-panel border bg-bg-main p-7",
                  plan.popular
                    ? "border-transparent shadow-[0_24px_60px_-32px_rgba(118,18,250,0.55)] ring-2 ring-brand-purple"
                    : "border-line",
                )}
              >
                {plan.popular ? (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-gradient px-3.5 py-1.5 text-[11px] font-bold tracking-[0.06em] text-white uppercase">
                    Most popular
                  </span>
                ) : null}

                <h3 className="font-display text-[20px] font-extrabold tracking-[-0.02em] text-ink">
                  {plan.name}
                </h3>
                <p className="mt-1.5 text-[13px] text-ink-tertiary">
                  {plan.tagline}
                </p>

                <div className="mt-6">
                  <Price plan={plan} yearly={yearly} />
                </div>

                <Button
                  href={plan.href}
                  variant={plan.ctaVariant}
                  size="lg"
                  className="mt-6 w-full"
                >
                  {plan.cta}
                </Button>

                <p className="mt-7 text-[12.5px] font-bold text-ink">
                  {plan.intro}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-[13.5px] leading-snug text-ink-secondary"
                    >
                      <Check
                        className="mt-0.5 size-3.5 shrink-0 text-accent-green"
                        strokeWidth={3}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-8 flex items-center justify-center gap-2 text-[13px] text-ink-tertiary">
            <Info className="size-4" />
            Prices in USD. Guests are free on every paid plan, at 5 guests per
            paid seat.
          </p>
        </Container>
      </section>

      {/* AI add-on pricing */}
      <section className="border-y border-line bg-bg-box py-20 md:py-24">
        <Container size="default">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent-purple-badge px-3 py-1 text-[12px] font-bold tracking-[0.04em] text-accent-purple uppercase">
              <Sparkles className="size-3.5" />
              AI pricing
            </span>
            <h2 className="font-display mt-5 text-[clamp(1.9rem,3.8vw,2.75rem)] leading-[1.06] font-extrabold tracking-[-0.03em] text-ink text-balance">
              Add AI to any plan — including Free
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-ink-secondary">
              One price covers every model. No separate ChatGPT, Claude and
              Gemini bills, and no per-token surprises.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {aiPlans.map((p) => (
              <div
                key={p.name}
                className={cn(
                  "relative flex flex-col rounded-panel border bg-bg-main p-7",
                  p.popular
                    ? "border-transparent ring-2 ring-brand-pink"
                    : "border-line",
                )}
              >
                {p.popular ? (
                  <span className="absolute -top-3 left-7 rounded-full bg-brand-gradient px-3 py-1.5 text-[11px] font-bold tracking-[0.06em] text-white uppercase">
                    Recommended
                  </span>
                ) : null}
                <h3
                  className="font-display text-[20px] font-extrabold tracking-[-0.02em]"
                  style={{ color: p.accent }}
                >
                  {p.name}
                </h3>
                <div className="mt-4 flex items-baseline gap-1.5">
                  <span className="font-display text-[38px] leading-none font-extrabold tracking-[-0.045em] text-ink">
                    {p.price}
                  </span>
                  {p.unit ? (
                    <span className="text-[13px] font-medium text-ink-tertiary">
                      {p.unit}
                    </span>
                  ) : null}
                </div>
                <p className="mt-3 text-[14px] leading-relaxed text-ink-secondary">
                  {p.blurb}
                </p>
                <ul className="mt-6 flex-1 space-y-2.5">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-[13.5px] leading-snug text-ink-secondary"
                    >
                      <Check
                        className="mt-0.5 size-3.5 shrink-0"
                        strokeWidth={3}
                        style={{ color: p.accent }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  href="/signup"
                  variant={p.popular ? "gradient" : "outline"}
                  size="lg"
                  className="mt-7 w-full"
                >
                  {p.cta}
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-card border border-line bg-bg-main px-7 py-6 sm:flex-row">
            <div>
              <p className="text-[15px] font-bold text-ink">
                Need more? Buy AI Super Credits.
              </p>
              <p className="mt-1 text-[13.5px] text-ink-secondary">
                $0.001 per credit, in blocks of 10,000. Covered by our Super Fair
                Billing policy — if our model costs drop, so does yours.
              </p>
            </div>
            <Button href="/signup" variant="outline" size="md">
              Buy credits
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
