"use client";

import { useState } from "react";
import {
  FolderKanban,
  MessageSquare,
  Sparkles,
  Bot,
  Gauge,
  Timer,
  CalendarDays,
  FileText,
  PenTool,
  Workflow,
  LayoutDashboard,
  ArrowRight,
  Check,
} from "lucide-react";
import Link from "next/link";
import { Container, Section } from "../ui/Container";
import { IconTile } from "../ui/Bits";
import { cn } from "@/lib/utils";

const tabs = [
  {
    name: "Projects",
    icon: FolderKanban,
    tone: "purple",
    accent: "#7612fa",
    title: "Every project, every view, one source of truth",
    body: "List, Board, Gantt, Calendar, Table, Timeline and Workload — the same tasks rendered the way each team thinks.",
    points: [
      "15+ views with no data duplication",
      "Dependencies and critical path built in",
      "Custom fields, statuses and automations per space",
    ],
  },
  {
    name: "Chat",
    icon: MessageSquare,
    tone: "blue",
    accent: "#0091ff",
    title: "Conversations that turn into work",
    body: "Chat lives next to the tasks it's about. Turn any message into a task with full context attached — no copy-paste.",
    points: [
      "Channels linked to projects and docs",
      "Message-to-task in one click",
      "AI catch-up on any thread you missed",
    ],
  },
  {
    name: "Brain²",
    icon: Sparkles,
    tone: "pink",
    accent: "#fa12e3",
    title: "The AI that already knows your company",
    body: "Ask anything about your work and get an answer grounded in your tasks, docs, chats and connected apps.",
    points: [
      "GPT, Claude and Gemini in one subscription",
      "Answers cite the task or doc they came from",
      "Memory that improves with every use",
    ],
  },
  {
    name: "AI Agents",
    icon: Bot,
    tone: "orange",
    accent: "#fc6d2d",
    title: "Teammates that work while you sleep",
    body: "Describe the job in plain English. Agents triage intake, assign owners, chase updates and post summaries 24/7.",
    points: [
      "Prebuilt agents for intake, triage and reporting",
      "500+ tools and MCP servers available to them",
      "Full audit trail on every action taken",
    ],
  },
  {
    name: "Sprints",
    icon: Gauge,
    tone: "deepblue",
    accent: "#4a2fff",
    title: "Agile without the ceremony overhead",
    body: "Automate sprint rollover, points and velocity. Unfinished work moves itself, burndown updates itself.",
    points: [
      "Automatic sprint creation and rollover",
      "Velocity, burndown and burnup out of the box",
      "Git commits and PRs linked to tasks",
    ],
  },
  {
    name: "Time Tracking",
    icon: Timer,
    tone: "green",
    accent: "#078d3b",
    title: "Track time where the work happens",
    body: "Native timers on every task, on every device. Billable rates, timesheets and approvals — no add-on required.",
    points: [
      "Global timer across desktop, mobile and web",
      "Billable vs. non-billable with rate cards",
      "Timesheet approvals and exports",
    ],
  },
  {
    name: "Calendar",
    icon: CalendarDays,
    tone: "purple",
    accent: "#6647f0",
    title: "Meetings, tasks and focus time in one grid",
    body: "Sync Google and Outlook, drag tasks onto your day, and let AI protect the blocks you need to actually finish things.",
    points: [
      "Two-way Google and Outlook sync",
      "Drag-and-drop time blocking",
      "AI notetaker joins and writes it up",
    ],
  },
  {
    name: "Docs",
    icon: FileText,
    tone: "blue",
    accent: "#0091ff",
    title: "Wikis that stay true",
    body: "Docs, wikis and knowledge bases connected to live tasks — so the spec updates when the work does.",
    points: [
      "Live task embeds inside any doc",
      "Nested pages, templates and verification",
      "Public sharing with granular permissions",
    ],
  },
  {
    name: "Whiteboards",
    icon: PenTool,
    tone: "pink",
    accent: "#fa12e3",
    title: "From sticky note to shipped",
    body: "Brainstorm on an infinite canvas, then convert any shape into a real task without leaving the board.",
    points: [
      "Shape-to-task conversion",
      "Live multiplayer cursors and comments",
      "AI-generated diagrams and mind maps",
    ],
  },
  {
    name: "Automations",
    icon: Workflow,
    tone: "orange",
    accent: "#fc6d2d",
    title: "Describe it. It's automated.",
    body: "Type what should happen and AI builds the rule. 100+ triggers and actions, plus webhooks and external integrations.",
    points: [
      "Natural-language automation builder",
      "100+ prebuilt triggers and actions",
      "Cross-app actions via webhooks and MCP",
    ],
  },
  {
    name: "Dashboards",
    icon: LayoutDashboard,
    tone: "deepblue",
    accent: "#4a2fff",
    title: "Answers without a BI project",
    body: "50+ card types over live data. Portfolio health, workload, velocity and spend — refreshed the second something changes.",
    points: [
      "50+ widgets including AI summary cards",
      "Portfolio and workload roll-ups",
      "Share read-only links with clients",
    ],
  },
];

function TabPanel({ tab }) {
  return (
    <div className="grid animate-rise items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div>
        <IconTile icon={tab.icon} tone={tab.tone} size="lg" />
        <h3 className="font-display mt-6 text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.08] font-extrabold tracking-[-0.03em] text-ink text-balance">
          {tab.title}
        </h3>
        <p className="mt-4 text-[16.5px] leading-relaxed text-ink-secondary">
          {tab.body}
        </p>
        <ul className="mt-7 space-y-3">
          {tab.points.map((p) => (
            <li key={p} className="flex items-start gap-2.5 text-[15px] text-ink">
              <span
                className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full"
                style={{ background: `${tab.accent}1a`, color: tab.accent }}
              >
                <Check className="size-3" strokeWidth={3} />
              </span>
              {p}
            </li>
          ))}
        </ul>
        <Link
          href="/product"
          className="mt-8 inline-flex items-center gap-1.5 text-[14px] font-bold text-accent-blue hover:underline"
        >
          Explore {tab.name}
          <ArrowRight className="size-4" />
        </Link>
      </div>

      {/* Abstract product panel keyed to the tab's accent */}
      <div
        className="relative overflow-hidden rounded-panel border border-line p-8"
        style={{
          background: `linear-gradient(150deg, ${tab.accent}12, ${tab.accent}04 60%, transparent)`,
        }}
      >
        <div className="rounded-2xl border border-line bg-bg-main p-5 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.4)]">
          <div className="flex items-center gap-2 border-b border-line pb-3">
            <span
              className="size-6 rounded-lg"
              style={{ background: tab.accent }}
            />
            <span className="text-[13px] font-bold text-ink">{tab.name}</span>
            <span className="ml-auto flex gap-1">
              {["#f0382d", "#ffc800", "#078d3b"].map((c) => (
                <span
                  key={c}
                  className="size-2 rounded-full"
                  style={{ background: c }}
                />
              ))}
            </span>
          </div>
          <ul className="mt-4 space-y-2.5">
            {[92, 74, 58, 40].map((w, i) => (
              <li key={w} className="flex items-center gap-3">
                <span
                  className="size-3.5 shrink-0 rounded-full border-2"
                  style={{
                    borderColor: i === 0 ? tab.accent : "#e8e8e8",
                    background: i === 0 ? tab.accent : "transparent",
                  }}
                />
                <span className="h-2.5 flex-1 rounded-full bg-bg-box">
                  <span
                    className="block h-full rounded-full"
                    style={{
                      width: `${w}%`,
                      background:
                        i % 2 === 0 ? `${tab.accent}55` : "var(--color-line)",
                    }}
                  />
                </span>
                <span className="flex -space-x-1.5">
                  {Array.from({ length: (i % 3) + 1 }).map((_, j) => (
                    <span
                      key={j}
                      className="size-5 rounded-full ring-2 ring-white"
                      style={{
                        background: ["#7612fa", "#fa12e3", "#0091ff"][j],
                      }}
                    />
                  ))}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-5 grid grid-cols-3 gap-2">
            {["On track", "At risk", "Done"].map((s, i) => (
              <div
                key={s}
                className="rounded-xl border border-line p-3 text-center"
              >
                <div
                  className="font-display text-[20px] leading-none font-extrabold"
                  style={{ color: [tab.accent, "#ffc800", "#078d3b"][i] }}
                >
                  {[24, 3, 118][i]}
                </div>
                <div className="mt-1 text-[10px] font-medium text-ink-tertiary">
                  {s}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FeatureTabs() {
  const [active, setActive] = useState(0);

  return (
    <Section id="platform" className="border-b border-line">
      <Container size="default">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-display text-[clamp(1.9rem,3.6vw,2.75rem)] leading-[1.08] font-extrabold tracking-[-0.03em] text-ink text-balance">
            One platform. Everything your team already pays for.
          </h2>
        </div>

        {/* Tab rail */}
        <div className="fade-mask-x -mx-5 mb-12 px-5 lg:mx-0 lg:px-0">
          <div
            role="tablist"
            aria-label="Platform features"
            className="no-scrollbar flex gap-2 overflow-x-auto pb-1 lg:flex-wrap lg:justify-center"
          >
            {tabs.map((tab, i) => (
              <button
                key={tab.name}
                role="tab"
                aria-selected={active === i}
                onClick={() => setActive(i)}
                className={cn(
                  "inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-[13.5px] font-semibold transition-all duration-200",
                  active === i
                    ? "border-transparent bg-ink text-bg-main"
                    : "border-line bg-bg-main text-ink-secondary hover:border-line-strong hover:text-ink",
                )}
              >
                <tab.icon className="size-4" />
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        <TabPanel key={active} tab={tabs[active]} />
      </Container>
    </Section>
  );
}
