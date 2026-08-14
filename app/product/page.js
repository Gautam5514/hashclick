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
    "Manage projects, tasks, chat, people, clients, attendance, leave, meetings, billing, and AI-assisted work in one connected platform.",
};

const modules = [
  {
    id: "projects",
    icon: FolderKanban,
    accent: "#7612fa",
    kicker: "Projects",
    title: "Organize work around teams and outcomes",
    body: "Create projects inside accessible spaces, set status, priority, deadlines, managers, and members, then keep related tasks in the right context.",
    points: [
      "Projects grouped inside team spaces",
      "Status, priority, deadline, manager, and membership",
      "Project summaries and task progress through Hash AI",
    ],
  },
  {
    id: "chat",
    icon: MessageSquare,
    accent: "#0091ff",
    kicker: "Chat",
    title: "The conversation and the work, in the same place",
    body: "Use company and project channels for conversations, files, mentions, reactions, threads, pins, bookmarks, search, and notification preferences.",
    points: [
      "Company-wide and project-specific channels",
      "Threaded replies, files, mentions, and reactions",
      "Message search, pins, bookmarks, and unread tracking",
    ],
  },
  {
    id: "tasks",
    icon: FileText,
    accent: "#4a2fff",
    kicker: "Tasks",
    title: "Clear ownership from backlog to done",
    body: "Create shared project tasks or personal tasks with descriptions, statuses, priorities, due dates, assignees, and subtasks.",
    points: [
      "Backlog, To Do, In Progress, In Review, and Done",
      "Low, Medium, High, and Urgent priorities",
      "Multiple assignees, deadlines, and subtasks",
    ],
  },
  {
    id: "calendar",
    icon: CalendarDays,
    accent: "#078d3b",
    kicker: "People Operations",
    title: "Support employees from one workspace",
    body: "Keep employee information organized and manage attendance, leave balances, requests, and permitted payroll workflows.",
    points: [
      "Employee records and team information",
      "Attendance summaries and working-day records",
      "Leave requests, balances, and approval workflows",
    ],
  },
  {
    id: "business",
    icon: LayoutDashboard,
    accent: "#fa12e3",
    kicker: "Clients & Finance",
    title: "Keep business activity connected",
    body: "Manage clients, leads, invoices, expenses, billing information, and related business workflows alongside delivery work.",
    points: [
      "Client and lead records",
      "Invoices, payments, and billing activity",
      "Expenses with tax and receipt information",
    ],
  },
  {
    id: "ai",
    icon: Workflow,
    accent: "#fc6d2d",
    kicker: "Hash AI & MCP",
    title: "Ask questions, then take supported action",
    body: "Choose an available AI model, get permission-aware workspace answers, manage supported tasks conversationally, or connect a compatible AI client through MCP.",
    points: [
      "User-selected models from configured providers",
      "Role-aware answers grounded in current workspace data",
      "Scoped task actions and MCP tools",
    ],
  },
];

const moreTools = [
  { icon: Timer, name: "Attendance", accent: "#078d3b", id: "attendance", body: "Record working days and review permitted attendance summaries." },
  { icon: GanttChartSquare, name: "Meetings", accent: "#fa12e3", id: "meetings", body: "Schedule, confirm, cancel, and reschedule supported bookings." },
  { icon: Target, name: "Leads", accent: "#fc6d2d", id: "leads", body: "Track prospects through supported sales stages." },
  { icon: PenTool, name: "People", accent: "#7612fa", id: "people", body: "Organize employee details, roles, and workspace access." },
  { icon: Table2, name: "Payroll", accent: "#0091ff", id: "payroll", body: "Manage permitted salary and payroll workflows." },
  { icon: Plug, name: "MCP Access", accent: "#4a2fff", id: "mcp", body: "Connect compatible AI clients to scoped Hashboard tools." },
];

const faqs = [
  {
    q: "How is work organized in Hashboard?",
    a: "Companies organize teams into spaces, projects, and tasks. Access depends on company membership, space role, project membership, and the permissions of each workflow.",
  },
  {
    q: "Will this work for non-technical teams?",
    a: "Yes. Hashboard supports project delivery, team communication, people operations, clients, meetings, billing, and other everyday business workflows.",
  },
  {
    q: "What can be configured on projects and tasks?",
    a: "Projects support status, priority, deadlines, managers, members, and templates. Tasks support descriptions, defined statuses, priorities, due dates, multiple assignees, and subtasks.",
  },
  {
    q: "Can external AI clients connect to Hashboard?",
    a: "Yes. Hashboard provides MCP access for compatible clients using scoped authentication and supported workspace tools.",
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
              <span className="text-brand-gradient">your everyday operations</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-ink-secondary">
              Bring projects, tasks, chat, people, clients, attendance, leave,
              meetings, billing, and AI assistance into one workspace.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/signup" size="xl">
                Get started
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
            title="Six connected areas of work"
            subtitle="Coordinate delivery, communication, people, business operations, and AI assistance through one workspace."
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
                    Explore {m.kicker}
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
            eyebrow="More workflows"
            title="More of your operations, connected"
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
