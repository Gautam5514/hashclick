import {
  Users,
  Network,
  Library,
  Blocks,
  Trophy,
  Coins,
  Gauge,
  Target,
  Brain,
  Plug,
  Radio,
  Search,
  Presentation,
  LayoutDashboard,
  BarChart3,
  Lock,
  EyeOff,
  ShieldCheck,
  ServerCog,
  CheckCircle2,
} from "lucide-react";
import { Container, Section } from "../ui/Container";
import { SectionHeading } from "../ui/Bits";
import Button from "../ui/Button";

/* ---------------------------------------------------------------- pillars */

const pillars = [
  {
    icon: Users,
    accent: "#7612fa",
    title: "Multiplayer collaboration",
    body: "AI chats, channels, tasks and projects that share one context. When a teammate teaches Brain² something, everyone gets smarter.",
  },
  {
    icon: Network,
    accent: "#0091ff",
    title: "Context engine",
    body: "A self-organizing knowledge graph over your workspace, updated continuously and retrieved token-efficiently.",
  },
  {
    icon: Library,
    accent: "#fc6d2d",
    title: "Organization knowledge",
    body: "Goals, decisions, updates and feedback captured as they happen — not written up weeks later by someone who was there.",
  },
  {
    icon: Blocks,
    accent: "#fa12e3",
    title: "Intelligence²",
    body: "Composable skills, hybrid recall and adaptive learning that keeps improving without a prompt-engineering project.",
  },
];

export function BrainPillars() {
  return (
    <Section id="ambient">
      <Container size="default">
        <SectionHeading
          eyebrow="How it works"
          title="Four things generic AI can't do"
          subtitle="A chatbot with no memory of your company is a very expensive search box. Brain² is built the other way around."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="group rounded-panel border border-line bg-bg-main p-8 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_24px_56px_-34px_rgba(0,0,0,0.35)]"
            >
              <span
                className="flex size-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${p.accent}14`, color: p.accent }}
              >
                <p.icon className="size-6" />
              </span>
              <h3 className="font-display mt-6 text-[21px] font-extrabold tracking-[-0.02em] text-ink">
                {p.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-secondary">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* --------------------------------------------------------------- benchmarks */

const benchmarks = [
  { icon: Trophy, value: "#1", label: "Quality", sub: "vs. leading assistants" },
  { icon: Coins, value: "85%", label: "Cheaper", sub: "than separate AI seats" },
  { icon: Gauge, value: "92%+", label: "Context engine", sub: "retrieval effectiveness" },
  { icon: Target, value: "100%+", label: "Win rate", sub: "on workplace tasks" },
];

export function Benchmarks() {
  return (
    <section data-theme="dark" className="bg-bg-main py-20 md:py-24">
      <Container size="default">
        <h2 className="font-display text-center text-[clamp(1.9rem,3.8vw,2.75rem)] leading-[1.06] font-extrabold tracking-[-0.03em] text-ink text-balance">
          Brain² beats every benchmark that matters at work
        </h2>
        <dl className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benchmarks.map((b) => (
            <div
              key={b.label}
              className="rounded-panel border border-white/12 bg-white/[0.035] p-7 text-center"
            >
              <b.icon className="mx-auto size-6 text-accent-purple" />
              <dt className="font-display mt-4 text-[42px] leading-none font-extrabold tracking-[-0.045em] text-brand-gradient">
                {b.value}
              </dt>
              <dd className="mt-3">
                <span className="block text-[15px] font-bold text-ink">
                  {b.label}
                </span>
                <span className="mt-1 block text-[12.5px] text-ink-tertiary">
                  {b.sub}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------- roles */

const roles = [
  {
    title: "Project Manager",
    line: "Plans the quarter, then rebalances it when reality happens.",
    accent: "#7612fa",
  },
  {
    title: "Engineering Lead",
    line: "Triages the backlog, writes release notes, chases stale PRs.",
    accent: "#0091ff",
  },
  {
    title: "Agency Owner",
    line: "Keeps ten client accounts straight and flags scope creep early.",
    accent: "#fa12e3",
  },
  {
    title: "Head of Ops",
    line: "Syncs teams, kills duplicate work, answers the status questions.",
    accent: "#fc6d2d",
  },
  {
    title: "Marketing Manager",
    line: "Ships campaigns end to end, from brief to post-mortem.",
    accent: "#4a2fff",
  },
  {
    title: "Founder / CEO",
    line: "Acts as chief of staff — briefs, risks and the one number that moved.",
    accent: "#078d3b",
  },
];

export function RolesGrid() {
  return (
    <Section className="bg-bg-box">
      <Container size="default">
        <SectionHeading
          eyebrow="For every role"
          title="Six jobs it already does well"
          subtitle="Brain² adapts to the shape of your work, not the other way around."
        />
        <ul className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {roles.map((r) => (
            <li
              key={r.title}
              className="rounded-card border border-line bg-bg-main p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_-30px_rgba(0,0,0,0.3)]"
            >
              <span
                className="inline-block h-1 w-10 rounded-full"
                style={{ background: r.accent }}
              />
              <h3 className="font-display mt-4 text-[18px] font-extrabold tracking-[-0.02em] text-ink">
                {r.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-secondary">
                {r.line}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

/* -------------------------------------------------------------- what's new */

const whatsNew = [
  {
    icon: Brain,
    accent: "#7612fa",
    title: "Memory & preferences",
    body: "Remembers your tone, your tools, your timezone and how your team likes reports formatted — and shows you exactly what it stored.",
  },
  {
    icon: Blocks,
    accent: "#fa12e3",
    title: "Every AI, unlimited",
    body: "GPT, Claude, Gemini and more under one subscription, with automatic model routing per task.",
  },
  {
    icon: Users,
    accent: "#0091ff",
    title: "Multiplayer AI",
    body: "Strategist, developer and designer perspectives in the same thread, all reading the same workspace.",
  },
  {
    icon: Plug,
    accent: "#fc6d2d",
    title: "Connected apps & MCP",
    body: "Google Drive, GitHub, Salesforce and any MCP server — read and write, not just read.",
  },
  {
    icon: Radio,
    accent: "#4a2fff",
    title: "Ambient intelligence",
    body: "Surfaces the context, task or decision you're about to need before you go looking for it.",
  },
  {
    icon: Search,
    accent: "#078d3b",
    title: "Deep search",
    body: "Queries your workspace, your connected apps and the web, then reconciles the answer with citations.",
  },
];

export function WhatsNew() {
  return (
    <Section id="search">
      <Container size="default">
        <SectionHeading
          eyebrow="Capabilities"
          title="Nothing else comes close"
          subtitle="Six things that only work when the AI lives where the work lives."
        />
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {whatsNew.map((f) => (
            <div
              key={f.title}
              className="group relative overflow-hidden rounded-panel border border-line bg-bg-main p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_-32px_rgba(0,0,0,0.32)]"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-16 -right-12 size-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20"
                style={{ background: f.accent }}
              />
              <span
                className="relative flex size-11 items-center justify-center rounded-xl"
                style={{ background: `${f.accent}14`, color: f.accent }}
              >
                <f.icon className="size-5.5" />
              </span>
              <h3 className="font-display relative mt-5 text-[18px] font-extrabold tracking-[-0.02em] text-ink">
                {f.title}
              </h3>
              <p className="relative mt-2.5 text-[14px] leading-relaxed text-ink-secondary">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ----------------------------------------------------------------- outputs */

const outputs = [
  {
    icon: Presentation,
    accent: "#7612fa",
    title: "Presentation-ready slides",
    body: "Real typography and a curated palette, sourced from your actual numbers — for all-hands, reviews or pitches.",
  },
  {
    icon: LayoutDashboard,
    accent: "#fa12e3",
    title: "Dashboards & prototypes",
    body: "Finished, shareable deliverables — working pages and code, not a description of what you could build.",
  },
  {
    icon: BarChart3,
    accent: "#0091ff",
    title: "Data analysis",
    body: "Parses CSVs, cross-references your workspace, renders the chart and hands back the spreadsheet.",
  },
];

const completed = [
  "Sales kickoff deck",
  "Q3 pricing page redesign",
  "Launch PRD draft",
  "Revenue forecast model",
  "Onboarding flow designs",
  "SOC 2 evidence checklist",
  "Customer interview summaries",
  "GA launch project plan",
  "Hiring roadmap",
];

export function Outputs() {
  return (
    <Section id="notetaker" className="bg-bg-box">
      <Container size="default">
        <SectionHeading
          eyebrow="Deliverables"
          title="It doesn't just answer. It finishes the work."
          subtitle="Everything below started as one sentence in a chat."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {outputs.map((o) => (
            <div
              key={o.title}
              className="rounded-panel border border-line bg-bg-main p-8"
            >
              <span
                className="flex size-12 items-center justify-center rounded-2xl"
                style={{ background: `${o.accent}14`, color: o.accent }}
              >
                <o.icon className="size-6" />
              </span>
              <h3 className="font-display mt-6 text-[19px] font-extrabold tracking-[-0.02em] text-ink">
                {o.title}
              </h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-ink-secondary">
                {o.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-panel border border-line bg-bg-main p-7">
          <p className="text-[12px] font-bold tracking-[0.08em] text-ink-tertiary uppercase">
            Completed by Brain² this week
          </p>
          <ul className="mt-5 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {completed.map((c, i) => (
              <li
                key={c}
                className="flex items-center gap-2.5 rounded-xl border border-line px-4 py-3 text-[13.5px] font-medium text-ink"
              >
                <CheckCircle2 className="size-4 shrink-0 text-accent-green" />
                <span className="flex-1">{c}</span>
                <span className="text-[11px] text-ink-tertiary">
                  {["2m", "14m", "1h", "3h", "5h", "8h", "1d", "1d", "2d"][i]}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}

/* ---------------------------------------------------------------- security */

const security = [
  {
    icon: Lock,
    title: "No third-party training",
    body: "Your data is never used to train anyone's foundation model. Ever.",
  },
  {
    icon: ServerCog,
    title: "Zero retention",
    body: "Zero-retention agreements with every model provider we route to.",
  },
  {
    icon: EyeOff,
    title: "Private by default",
    body: "Admins can't read your private Brain² conversations. Memory is yours to view, edit and delete.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise controls",
    body: "SOC 2 Type II, ISO 27001, GDPR and HIPAA, with unified controls across every model.",
  },
];

export function BrainSecurity() {
  return (
    <section data-theme="dark" id="talk" className="bg-bg-main py-20 md:py-28">
      <Container size="default">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <h2 className="font-display text-[clamp(1.9rem,3.8vw,2.75rem)] leading-[1.06] font-extrabold tracking-[-0.03em] text-ink text-balance">
              Powerful AI, without handing over your company
            </h2>
            <p className="mt-5 text-[16.5px] leading-relaxed text-ink-secondary">
              The reason AI stalls in most organizations isn&apos;t capability —
              it&apos;s the security review. We wrote the answers down first.
            </p>
            <Button href="/enterprise#security" variant="outline" size="lg" className="mt-8">
              Read the security brief
            </Button>
          </div>

          <dl className="grid gap-4 sm:grid-cols-2">
            {security.map((s) => (
              <div
                key={s.title}
                className="rounded-panel border border-white/12 bg-white/[0.035] p-6"
              >
                <dt className="flex items-center gap-2.5 text-[15px] font-bold text-ink">
                  <span className="flex size-8 items-center justify-center rounded-lg bg-white/8 text-accent-green ring-1 ring-white/10">
                    <s.icon className="size-4" />
                  </span>
                  {s.title}
                </dt>
                <dd className="mt-3 text-[13.5px] leading-relaxed text-ink-secondary">
                  {s.body}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
