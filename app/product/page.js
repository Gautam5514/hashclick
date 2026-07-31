import Link from "next/link";
import {
  FolderKanban,
  MessageSquare,
  FileText,
  CalendarDays,
  LayoutDashboard,
  Timer,
  GanttChartSquare,
  Workflow,
  PenTool,
  Plug,
  Target,
  Table2,
  ArrowRight,
  Check,
} from "lucide-react";
import { Container, Section } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/Bits";
import Button from "../components/ui/Button";
import AppMockup from "../components/shared/AppMockup";
import LogoCloud from "../components/shared/LogoCloud";
import FeatureWall from "../components/home/FeatureWall";
import Testimonials from "../components/shared/Testimonials";
import Faq from "../components/shared/Faq";
import CtaBanner from "../components/shared/CtaBanner";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Product",
  description:
    "Projects, Chat, Docs, Calendar, Dashboards, Automations and more — every tool your team needs on one connected platform.",
};

const modules = [
  {
    id: "projects",
    icon: FolderKanban,
    accent: "#7612fa",
    kicker: "Projects",
    title: "15 views over one set of tasks",
    body: "List for the PM, Board for the team, Gantt for the client, Workload for the manager. Change a due date anywhere and it changes everywhere, because it's the same task.",
    points: [
      "List, Board, Gantt, Calendar, Table, Timeline, Workload, Map, Mind Map",
      "Dependencies, milestones and critical path",
      "Custom fields, statuses and templates per space",
    ],
  },
  {
    id: "chat",
    icon: MessageSquare,
    accent: "#0091ff",
    kicker: "Chat",
    title: "The conversation and the work, in the same place",
    body: "Channels that sit alongside the projects they're about. Turn any message into a task and the whole thread comes along as context.",
    points: [
      "Channels linked to spaces, folders and lists",
      "Message-to-task with full thread context",
      "AI catch-up summaries for anything you missed",
    ],
  },
  {
    id: "docs",
    icon: FileText,
    accent: "#4a2fff",
    kicker: "Docs & Wikis",
    title: "Documentation that can't go stale",
    body: "Embed live tasks, lists and dashboards inside docs. When the work moves, the doc moves with it — no quarterly cleanup project.",
    points: [
      "Live embeds of tasks, views and dashboards",
      "Nested pages, templates and page verification",
      "Granular sharing, including public pages",
    ],
  },
  {
    id: "calendar",
    icon: CalendarDays,
    accent: "#078d3b",
    kicker: "Calendar",
    title: "Your meetings and your tasks on one grid",
    body: "Two-way sync with Google and Outlook, drag-and-drop time blocking, and an AI notetaker that joins the call so you don't have to write it up.",
    points: [
      "Two-way Google and Outlook sync",
      "Drag tasks onto your day to time-block",
      "AI notetaker with action items pushed to tasks",
    ],
  },
  {
    id: "dashboards",
    icon: LayoutDashboard,
    accent: "#fa12e3",
    kicker: "Dashboards",
    title: "Reporting without a data team",
    body: "50+ widgets over live data. Portfolio health, sprint velocity, workload, budget burn — and AI cards that write the narrative for you.",
    points: [
      "50+ widget types including AI summary cards",
      "Portfolio roll-ups across spaces and teams",
      "Read-only share links for clients and execs",
    ],
  },
  {
    id: "automations",
    icon: Workflow,
    accent: "#fc6d2d",
    kicker: "Automations",
    title: "Describe it in a sentence. It's built.",
    body: "Type what should happen when something changes and AI assembles the rule. 100+ triggers and actions, plus webhooks and MCP for everything else.",
    points: [
      "Natural-language automation builder",
      "100+ triggers, conditions and actions",
      "Webhooks, integrations and MCP servers",
    ],
  },
];

const moreTools = [
  { icon: Timer, name: "Time Tracking", accent: "#078d3b", id: "time", body: "Native timers, billable rates, timesheets and approvals." },
  { icon: GanttChartSquare, name: "Gantt & Timelines", accent: "#fa12e3", id: "gantt", body: "Drag to reschedule; dependencies recalculate instantly." },
  { icon: Target, name: "Goals", accent: "#fc6d2d", id: "goals", body: "OKRs that roll up from the tasks actually being done." },
  { icon: PenTool, name: "Whiteboards", accent: "#7612fa", id: "whiteboards", body: "Infinite canvas where any shape becomes a real task." },
  { icon: Table2, name: "Spreadsheets", accent: "#0091ff", id: "sheets", body: "Formulas and rollups over live workspace data." },
  { icon: Plug, name: "Integrations", accent: "#4a2fff", id: "integrations", body: "500+ apps, a full REST API, webhooks and MCP." },
];

const faqs = [
  {
    q: "Do we have to migrate everything at once?",
    a: "No. Most teams start with one space — usually the noisiest one — and import from Jira, Asana, Monday, Trello, Notion or CSV in a few clicks. You can run side by side for as long as you need.",
  },
  {
    q: "Will this work for non-technical teams?",
    a: "That's most of the user base. Marketing, HR, ops and client services teams use the same platform with templates tuned to their workflow, so nobody has to learn a ticketing system.",
  },
  {
    q: "How customizable are statuses and fields?",
    a: "Fully. Every space can define its own statuses, custom fields, views, permissions and automations, and templates let you stamp that setup onto new projects.",
  },
  {
    q: "Is there an API?",
    a: "Yes — a documented REST API, webhooks, and MCP server support so AI agents can act on your workspace directly. The Enterprise plan adds higher rate limits.",
  },
];

export default function ProductPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-14 pb-0 md:pt-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-56 left-1/2 h-[560px] w-[1000px] -translate-x-1/2 opacity-[0.13] blur-[110px]"
          style={{
            background:
              "radial-gradient(45% 50% at 30% 45%, #7612fa 0%, transparent 100%), radial-gradient(45% 50% at 70% 45%, #0091ff 0%, transparent 100%)",
          }}
        />
        <Container size="default" className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent-purple-badge px-3.5 py-1.5 text-[12px] font-bold tracking-[0.06em] text-accent-purple uppercase">
              The platform
            </span>
            <h1 className="font-display mt-6 text-[clamp(2.5rem,5.6vw,4.25rem)] leading-[1.0] font-extrabold tracking-[-0.04em] text-ink text-balance">
              One platform for{" "}
              <span className="text-brand-gradient">every kind of work</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-ink-secondary">
              Tasks, docs, chat, goals, dashboards and automations that share the
              same data model — so your context never has to be re-entered.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/signup" size="xl">
                Get started. It&apos;s FREE
              </Button>
              <Button href="/demo" variant="outline" size="xl">
                Get a demo
              </Button>
            </div>
          </div>

          <div className="mt-16 md:mt-20">
            <AppMockup className="mx-auto max-w-[1080px]" />
          </div>
        </Container>
      </section>

      <LogoCloud className="mt-20 md:mt-28" />

      {/* Alternating module sections */}
      <Section className="pb-0">
        <Container size="default">
          <SectionHeading
            eyebrow="What's inside"
            title="Six products most teams buy separately"
            subtitle="Each one would be a decent standalone tool. Together they're a platform, because they share permissions, search and AI."
          />
        </Container>

        <div className="mt-16 space-y-24 md:space-y-32">
          {modules.map((m, i) => (
            <Container key={m.id} size="default">
              <div
                id={m.id}
                className={cn(
                  "grid scroll-mt-28 items-center gap-10 lg:grid-cols-2 lg:gap-16",
                  i % 2 === 1 && "lg:[&>*:first-child]:order-2",
                )}
              >
                <div>
                  <span
                    className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11.5px] font-bold tracking-[0.08em] uppercase"
                    style={{ background: `${m.accent}14`, color: m.accent }}
                  >
                    <m.icon className="size-3.5" />
                    {m.kicker}
                  </span>
                  <h3 className="font-display mt-5 text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.08] font-extrabold tracking-[-0.03em] text-ink text-balance">
                    {m.title}
                  </h3>
                  <p className="mt-4 text-[16.5px] leading-relaxed text-ink-secondary">
                    {m.body}
                  </p>
                  <ul className="mt-7 space-y-3">
                    {m.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-2.5 text-[15px] text-ink"
                      >
                        <span
                          className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full"
                          style={{
                            background: `${m.accent}1a`,
                            color: m.accent,
                          }}
                        >
                          <Check className="size-3" strokeWidth={3} />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/signup"
                    className="mt-8 inline-flex items-center gap-1.5 text-[14px] font-bold text-accent-blue hover:underline"
                  >
                    Try {m.kicker} free
                    <ArrowRight className="size-4" />
                  </Link>
                </div>

                <div
                  className="rounded-panel border border-line p-6 sm:p-8"
                  style={{
                    background: `linear-gradient(150deg, ${m.accent}12, ${m.accent}03 60%, transparent)`,
                  }}
                >
                  <AppMockup showAi={false} />
                </div>
              </div>
            </Container>
          ))}
        </div>
      </Section>

      {/* More tools */}
      <Section className="bg-bg-box">
        <Container size="default">
          <SectionHeading
            eyebrow="And the rest"
            title="Six more, included at no extra cost"
          />
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {moreTools.map((t) => (
              <div
                key={t.name}
                id={t.id}
                className="scroll-mt-28 rounded-card border border-line bg-bg-main p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_-30px_rgba(0,0,0,0.3)]"
              >
                <span
                  className="flex size-11 items-center justify-center rounded-xl"
                  style={{ background: `${t.accent}14`, color: t.accent }}
                >
                  <t.icon className="size-5.5" />
                </span>
                <h3 className="font-display mt-5 text-[18px] font-extrabold tracking-[-0.02em] text-ink">
                  {t.name}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-secondary">
                  {t.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <FeatureWall />
      <Testimonials />
      <Faq title="Product questions" items={faqs} />
      <CtaBanner />
    </>
  );
}
