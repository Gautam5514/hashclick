"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, Check, X, SlidersHorizontal, LayoutGrid, Workflow,
  GitBranch, ListChecks, Users, Repeat2, MessageSquareText, Timer,
  BarChart3, Columns3, GanttChart, MessageCircle, Video, Inbox,
  FileText, PanelsTopLeft, BookOpen, ClipboardList, CalendarDays,
  CalendarClock, Zap, Clock3, Clapperboard, Grid2X2, Sparkles,
  Share2, ShieldCheck, History, Eye, Edit3, Layers, RefreshCw,
  Clock, Palette, Calendar as CalendarIcon, Move, AlertCircle,
  Filter, CheckSquare
} from "lucide-react";
import KanbanFaq from "./KanbanFaq";

const comparison = {
  without: [
    "Task status tracked through scattered messages",
    "Ownership and due dates separated from project context",
    "No consistent record of priorities and completion",
    "Teams expect board features that are not supported",
  ],
  with: [
    "Structured tasks connected to projects and assignees",
    "Track supported status, priority, dates, and completion",
    "Review work by project, owner, or current task state",
    "Ask Hash AI about permitted task and workload context",
  ],
};

const workflow = [
  {
    eyebrow: "Structured Tasks",
    title: "Keep each piece of work clearly defined",
    body: "Create tasks with supported details such as project, assignee, priority, dates, description, and current status.",
    image: "/kanban/kanban-feature-1.png",
    alt: "Hashboard project task details",
  },
  {
    eyebrow: "Ownership & Deadlines",
    title: "See who owns work and when it is due",
    body: "Review assigned and overdue tasks using the project and workload information available to your role.",
    image: "/kanban/kanban-feature-2.png",
    alt: "Hashboard task ownership and deadlines",
    reverse: true,
  },
  {
    eyebrow: "Explicit Updates",
    title: "Update work through supported actions",
    body: "Change supported task details directly or ask Hash AI to perform an available action when you have permission.",
    image: "/kanban/kanban-feature-3.png",
    alt: "Supported Hashboard task updates",
  },
];

const kanbanFeatures = [
  [Move, "Task status", "Keep the current supported state of each task visible."],
  [AlertCircle, "Priority", "Mark task importance so teams can review urgent work first."],
  [Filter, "Ownership", "Connect tasks to their project and assigned team member."],
  [CheckSquare, "Completion", "Record completed work and review what remains open."],
  [Zap, "Hash AI actions", "Request supported task creation or updates through conversation."],
  [LayoutGrid, "Project context", "Keep related tasks organized within the project they support."],
];

const platform = [
  [Columns3, "Tasks", "Assign and track work"], [FileText, "Invoices", "Manage customer billing"],
  [BarChart3, "Payroll", "Prepare payroll periods"], [GanttChart, "Projects", "Coordinate delivery"],
  [MessageCircle, "Chat", "Real-time team messaging"], [Video, "Meetings", "Manage bookings"],
  [Inbox, "Leads", "Track sales opportunities"], [PanelsTopLeft, "Spaces", "Organize teams and access"],
  [BookOpen, "People", "Manage employee records"], [ClipboardList, "Leave", "Manage time off"],
  [CalendarDays, "Calendar", "See scheduled work"], [CalendarClock, "Scheduling", "Share booking availability"],
  [Zap, "Hash AI", "Ask permission-aware questions"], [Clock3, "Expenses", "Record business expenses"],
  [Clapperboard, "Clients", "Keep customer records"], [Grid2X2, "All features", "Explore everything"],
];

function CTAButton({ secondary = false, children = "Get started. It's FREE" }) {
  return (
    <Link href="/signup" className={`task-btn${secondary ? " task-btn-secondary" : ""}`}>
      {children}
      <ArrowRight aria-hidden="true" />
    </Link>
  );
}

function KanbanHero() {
  return (
    <section className="task-hero">
      <div className="task-shell task-hero-grid">
        <div className="task-hero-copy">
          <p className="task-eyebrow">TASK STATUS IN HASHBOARD</p>
          <h1>Organize work and keep projects moving</h1>
          <p className="task-hero-lede">
            Create structured tasks, assign ownership, set priorities and dates, and review current project work in one workspace.
          </p>
          <div className="task-hero-action">
            <CTAButton />
            <span>Start with a<br />real project.</span>
          </div>
          <div className="task-reviews">
            <span>Project tasks · Ownership · Priorities · Deadlines · Status</span>
          </div>
        </div>
        <div className="task-hero-visual">
          <Image
            src="/kanban/kanban-hero.png"
            width={815}
            height={543}
            priority
            sizes="(max-width: 1000px) 100vw, 815px"
            alt="Hashboard project task workspace"
          />
        </div>
      </div>
    </section>
  );
}

function Comparison() {
  return (
    <section className="task-section task-comparison">
      <div className="task-shell">
        <h2 className="task-gradient-title">A clearer way to manage task status</h2>
        <div className="task-compare-grid">
          {[["Without Hashboard Kanban", comparison.without, false], ["With Hashboard Kanban", comparison.with, true]].map(([title, items, good]) => (
            <article className={good ? "is-with" : "is-without"} key={title}>
              <h3>{title}</h3>
              <ul>
                {items.map(item => (
                  <li key={item}>
                    {good ? <Check /> : <X />}
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkflowGrid() {
  return (
    <section className="task-section task-foundation">
      <div className="task-shell">
        <header className="task-heading task-foundation-heading">
          <h2>Structured task management for every team</h2>
          <p>
            Projects and tasks keep ownership, priorities, dates, status,<br className="task-desktop-break" /> and daily execution connected in one place.
          </p>
        </header>
        <div className="task-workflow-grid">
          {workflow.map((item) => (
            <article className={`task-workflow-row${item.reverse ? " reverse" : ""}`} key={item.title}>
              <span className="task-grid-arc task-grid-arc-top" aria-hidden="true" />
              <span className="task-grid-arc task-grid-arc-bottom" aria-hidden="true" />
              <div className="task-workflow-copy">
                <div>
                  <p className="task-eyebrow">{item.eyebrow}</p>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
                <i className="task-corner-dot top-start" /><i className="task-corner-dot top-end" />
                <i className="task-corner-dot bottom-start" /><i className="task-corner-dot bottom-end" />
              </div>
              <div className="task-workflow-image">
                <Image src={item.image} fill sizes="(max-width: 760px) 100vw, 50vw" alt={item.alt} />
                <i className="task-corner-dot top-start" /><i className="task-corner-dot top-end" />
                <i className="task-corner-dot bottom-start" /><i className="task-corner-dot bottom-end" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MotionBanner() {
  return (
    <section className="task-section task-motion-section">
      <div className="task-motion-banner">
        <div className="task-motion-copy">
          <Image src="/tasks/clickup-logo-dark.svg" width={161} height={40} alt="Hashboard" />
          <h2>Your team&apos;s project work, clearly organized.</h2>
          <p>Create tasks, assign owners, review current status, and keep project communication close to execution.</p>
        </div>
        <div className="task-motion-visual">
          <span className="task-motion-noise" aria-hidden="true" />
          <Image className="task-motion-product" src="/kanban/kanban-hero.png" width={815} height={543} sizes="(max-width: 760px) 100vw, 815px" alt="Hashboard project task workspace" />
        </div>
      </div>
    </section>
  );
}

function AiFeatures() {
  const cards = [
    ["Hash AI", "Ask about permitted project and task status", "Request current information about owners, priorities, deadlines, open work, and overdue tasks.", "/kanban/ai-kanban-1.png"],
    ["Supported Actions", "Create and update tasks by request", "Use Hash AI to perform available task actions when the signed-in user has the required permission.", "/kanban/ai-kanban-2.png"],
  ];
  return (
    <section className="task-section task-ai">
      <div className="task-shell">
        <header className="task-heading">
          <p className="task-eyebrow">WORKSPACE-AWARE ASSISTANCE</p>
          <h2>Task questions and supported actions<br />with Hash AI</h2>
        </header>
        <div className="task-ai-grid">
          {cards.map(([eye, title, body, image]) => (
            <article key={title}>
              <div className="task-ai-copy">
                <p className="task-eyebrow">{eye}</p>
                <h3>{title}</h3>
                <p>{body}</p>
                <div className="task-inline-actions">
                  <CTAButton secondary>Get started</CTAButton>
                  <Link href="/brain" className="task-dark-link">Explore {eye}<ArrowRight /></Link>
                </div>
              </div>
              <div className="task-ai-image">
                <Image src={image} fill sizes="(max-width: 760px) 100vw, 50vw" alt={title} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesAndPlatform() {
  return (
    <>
      <section className="task-section task-feature-section">
        <div className="task-shell task-feature-shell">
          <header className="task-heading task-feature-heading">
            <h2>Plus, everything you need to lead with confidence</h2>
          </header>
          <div className="task-feature-grid">
            {kanbanFeatures.map(([Icon, title, body]) => (
              <article key={title}>
                <span><Icon /></span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="task-section task-platform">
        <div className="task-shell task-platform-shell">
          <header className="task-heading task-platform-heading">
            <p className="task-eyebrow">The Hashboard platform</p>
            <h2>Tasks connect planning to execution</h2>
            <p>Combine Projects, Tasks, Chat, Calendar, Meetings, Clients, and other supported workflows in one workspace.</p>
          </header>
          <div className="task-platform-grid">
            {platform.map(([Icon, title, body]) => (
              <Link
                href={title === "Dashboards" ? "/features/dashboards" : title === "Tasks" ? "/features/tasks" : title === "Chat" ? "/features/chat" : title === "Docs" || title === "Wiki" ? "/features/docs" : title === "Calendar" ? "/features/calendar" : title === "Scheduling" ? "/features/scheduling" : "/product"}
                key={title}
              >
                <i><Icon /></i>
                <span><b>{title}</b><small>{body}</small></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function KanbanFinal() {
  const logoItems = [
    { name: "Projects", text: "Projects" },
    { name: "Tasks", text: "Tasks" },
    { name: "Chat", text: "Chat" },
    { name: "People", text: "People" },
    { name: "Clients", text: "Clients" },
    { name: "Meetings", text: "Meetings" },
    { name: "Invoices", text: "Invoices" },
    { name: "Expenses", text: "Expenses" },
    { name: "Leave", text: "Leave" },
    { name: "Payroll", text: "Payroll" },
  ];

  const marqueeList = [...logoItems, ...logoItems, ...logoItems];

  return (
    <section className="w-full py-12 md:py-20">
      <div className="mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-8">
        <div
          className="relative overflow-hidden rounded-[28px] md:rounded-[36px] bg-gradient-to-r from-[#7026e3] via-[#e02fa8] to-[#ff5d39] px-6 sm:px-12 lg:px-14 pt-8 sm:pt-12 lg:pt-14 shadow-2xl shadow-purple-950/20"
          style={{ paddingBottom: 0 }}
        >
          {/* Upper Header & CTA */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8">
            <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold tracking-tight text-white max-w-xl leading-[1.1]">
              Create your first project and organize its tasks.
            </h2>
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 shrink-0">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center gap-2 bg-white text-neutral-950 hover:bg-neutral-100 px-7 py-3 rounded-2xl font-bold text-base whitespace-nowrap shadow-md hover:shadow-lg transition-all"
              >
                <span>Get started</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <div className="text-xs md:text-sm font-medium text-white/90 leading-tight whitespace-nowrap">
                Create your <br /> workspace.
              </div>
            </div>
          </div>

          {/* Infinite Marquee Slider */}
          <div className="relative w-full overflow-hidden my-8 md:my-10 [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]">
            <div className="flex items-center gap-12 md:gap-16 w-max animate-task-marquee hover:[animation-play-state:paused]">
              {marqueeList.map((item, idx) => (
                <div
                  key={`${item.name}-${idx}`}
                  className="text-white/80 font-extrabold text-base md:text-lg tracking-tight hover:text-white transition-opacity select-none"
                >
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ClickUp Exact Mockup Image Container (_mockupContainer & _mockupImageContainer) */}
          <div
            className="relative w-full max-w-[1140px] mx-auto mt-6 md:mt-10 overflow-hidden flex justify-center leading-none"
            style={{ marginBottom: 0, paddingBottom: 0 }}
          >
            {/* White Glow Center & Left Layers (_whiteGlowCenter & _whiteGlowLeft) */}
            <div
              className="absolute -top-10 left-1/2 -translate-x-1/2 w-[80%] h-[80%] bg-white/40 blur-3xl pointer-events-none rounded-full"
              aria-hidden="true"
            />
            <div
              className="absolute bottom-0 left-[10%] w-[50%] h-[60%] bg-white/25 blur-2xl pointer-events-none rounded-full"
              aria-hidden="true"
            />

            <Image
              src="/kanban/kanban-footer.png"
              width={1240}
              height={460}
              alt="Hashboard project task workspace"
              className="relative rounded-xl z-10 w-full h-auto object-contain object-bottom block align-bottom"
              style={{ display: "block", marginBottom: 0 }}
              sizes="(max-width: 1140px) 100vw, 1140px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function KanbanPage() {
  return (
    <div className="tasks-page">
      <KanbanHero />
      <Comparison />
      <WorkflowGrid />
      <MotionBanner />
      <AiFeatures />
      <FeaturesAndPlatform />
      <KanbanFaq />
      <KanbanFinal />
    </div>
  );
}
