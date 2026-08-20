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
    title: "Workspace context",
    body: "Ask about current tasks, projects, people, and other supported records that your role is permitted to access.",
  },
  {
    icon: Network,
    accent: "#0091ff",
    title: "Permission-aware access",
    body: "Company and role boundaries remain part of each request, keeping assistance scoped to the signed-in user.",
  },
  {
    icon: Library,
    accent: "#fc6d2d",
    title: "Supported actions",
    body: "Create or update supported Hashboard records through conversation when the request and permissions allow it.",
  },
  {
    icon: Blocks,
    accent: "#fa12e3",
    title: "Model choice",
    body: "Select from the AI models configured for your workspace instead of relying on hidden automatic routing.",
  },
];

export function BrainPillars() {
  return (
    <Section id="ambient">
      <Container size="default">
        <SectionHeading
          eyebrow="How it works"
          title="AI connected to the work already in Hashboard"
          subtitle="Useful assistance comes from current workspace context, clear permissions, supported tools, and your chosen model."
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
  { icon: Trophy, value: "1", label: "Workspace", sub: "for assistance and action" },
  { icon: Coins, value: "You", label: "Choose", sub: "the available AI model" },
  { icon: Gauge, value: "Live", label: "Context", sub: "from current workspace data" },
  { icon: Target, value: "Role", label: "Aware", sub: "within permitted access" },
];

export function Benchmarks() {
  return (
    <section data-theme="dark" className="bg-bg-main py-20 md:py-24">
      <Container size="default">
        <h2 className="font-display text-center text-[clamp(1.9rem,3.8vw,2.75rem)] leading-[1.06] font-extrabold tracking-[-0.03em] text-ink text-balance">
          Clear controls instead of invented AI benchmarks
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
    line: "Reviews projects, open tasks, ownership, deadlines, and current progress.",
    accent: "#7612fa",
  },
  {
    title: "Engineering Lead",
    line: "Checks assigned work, priorities, project status, and overdue tasks.",
    accent: "#0091ff",
  },
  {
    title: "Agency Owner",
    line: "Reviews permitted clients, projects, meetings, invoices, and agreements.",
    accent: "#fa12e3",
  },
  {
    title: "Head of Ops",
    line: "Checks team workload, attendance, leave, scheduling, and operational records.",
    accent: "#fc6d2d",
  },
  {
    title: "Marketing Manager",
    line: "Organizes campaign projects, tasks, owners, deadlines, and team discussion.",
    accent: "#4a2fff",
  },
  {
    title: "Founder / CEO",
    line: "Requests permitted summaries across projects, people, clients, and financial records.",
    accent: "#078d3b",
  },
];

export function RolesGrid() {
  return (
    <Section className="bg-bg-box">
      <Container size="default">
        <SectionHeading
          eyebrow="For every role"
          title="Useful context for different responsibilities"
          subtitle="Hash AI uses the supported workspace information available to each role."
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
    title: "Current workspace context",
    body: "Use permitted tasks, projects, people, deadlines, and business records as context for a request.",
  },
  {
    icon: Blocks,
    accent: "#fa12e3",
    title: "User-selected models",
    body: "Choose from the models configured for your workspace and stay in control of the selection.",
  },
  {
    icon: Users,
    accent: "#0091ff",
    title: "Team and workload insights",
    body: "Ask supported questions about ownership, progress, workload, and overdue work within your permissions.",
  },
  {
    icon: Plug,
    accent: "#fc6d2d",
    title: "MCP connectivity",
    body: "Connect compatible AI clients to supported Hashboard tools through the available MCP interface.",
  },
  {
    icon: Radio,
    accent: "#4a2fff",
    title: "Requested recommendations",
    body: "Ask for practical next steps based on current project, task, deadline, and workload information.",
  },
  {
    icon: Search,
    accent: "#078d3b",
    title: "Workspace questions",
    body: "Ask naturally about supported records such as projects, tasks, people, clients, meetings, invoices, and leave.",
  },
];

export function WhatsNew() {
  return (
    <Section id="search">
      <Container size="default">
        <SectionHeading
          eyebrow="Capabilities"
          title="Assistance built around real Hashboard workflows"
          subtitle="Choose a model, bring in permitted workspace context, and take supported actions from one conversation."
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
    title: "Task and project actions",
    body: "Create, update, assign, and review supported work records through explicit requests.",
  },
  {
    icon: LayoutDashboard,
    accent: "#fa12e3",
    title: "Operational lookups",
    body: "Request permitted information across attendance, leave, people, clients, leads, meetings, and financial workflows.",
  },
  {
    icon: BarChart3,
    accent: "#0091ff",
    title: "Clear workspace summaries",
    body: "Turn current supported records into concise answers about status, ownership, priorities, and deadlines.",
  },
];

const completed = [
  "Reviewed overdue project tasks",
  "Created requested follow-up tasks",
  "Checked today's attendance status",
  "Listed pending leave requests",
  "Summarized current lead activity",
  "Found upcoming client meetings",
  "Reviewed outstanding invoices",
  "Checked recent expense records",
  "Summarized team workload",
];

export function Outputs() {
  return (
    <Section id="meeting-actions" className="bg-bg-box">
      <Container size="default">
        <SectionHeading
          eyebrow="Deliverables"
          title="Ask a question or request a supported action"
          subtitle="Hash AI works within the tools, data, and permissions available in your workspace."
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
            Example supported requests
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
                  {i < 3 ? "Projects" : i < 6 ? "People" : "Business"}
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
    title: "Tenant boundaries",
    body: "Workspace requests remain associated with the active company context.",
  },
  {
    icon: ServerCog,
    title: "Role-aware access",
    body: "Available context and actions follow the permissions of the signed-in user.",
  },
  {
    icon: EyeOff,
    title: "Explicit requests",
    body: "Hash AI acts in response to a user request instead of claiming autonomous background operation.",
  },
  {
    icon: ShieldCheck,
    title: "Supported-tool limits",
    body: "Actions are constrained to the Hashboard tools and operations exposed to the assistant.",
  },
];

export function BrainSecurity() {
  return (
    <section data-theme="dark" id="talk" className="bg-bg-main py-20 md:py-28">
      <Container size="default">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <h2 className="font-display text-[clamp(1.9rem,3.8vw,2.75rem)] leading-[1.06] font-extrabold tracking-[-0.03em] text-ink text-balance">
              AI assistance with visible boundaries
            </h2>
            <p className="mt-5 text-[16.5px] leading-relaxed text-ink-secondary">
              Hash AI is designed around workspace scope, user permissions,
              explicit requests, and supported actions.
            </p>
            <Button href="/enterprise#security" variant="outline" size="lg" className="mt-8">
              Explore enterprise controls
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
