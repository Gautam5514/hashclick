"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, Check, X, SlidersHorizontal, LayoutGrid, Workflow,
  GitBranch, ListChecks, Users, Repeat2, MessageSquareText, Timer,
  BarChart3, Columns3, GanttChart, MessageCircle, Video, Inbox,
  FileText, PanelsTopLeft, BookOpen, ClipboardList, CalendarDays,
  CalendarClock, Zap, Clock3, Clapperboard, Grid2X2, PieChart,
  TrendingUp, Activity, ShieldCheck, Share2
} from "lucide-react";
import DashboardsFaq from "./DashboardsFaq";
import LogoCloud from "../shared/LogoCloud";

const comparison = {
  without: [
    "Project and workload questions answered from stale updates",
    "Status information spread across separate conversations",
    "Operational records reviewed one workflow at a time",
    "Teams need a clearer path from information to action",
  ],
  with: [
    "Review supported project, task, and workload information",
    "Use purpose-built views for attendance, leave, and finance",
    "Ask Hash AI permitted questions about current workspace data",
    "Open the underlying workflow to review or update its records",
  ],
};

const workflow = [
  {
    eyebrow: "Project visibility",
    title: "Review progress from current work records",
    body: "Use projects and tasks to check status, ownership, priorities, due dates, and overdue work across the workspace.",
    image: "/dashboards/dashboard-feature-1.png",
    alt: "Hashboard project and task visibility",
  },
  {
    eyebrow: "Operational views",
    title: "Use focused views for each workflow",
    body: "Review the supported screens for attendance, leave, payroll, invoices, expenses, leads, clients, and meetings.",
    image: "/dashboards/dashboard-feature-2.png",
    alt: "Hashboard operational workflow views",
    reverse: true,
  },
  {
    eyebrow: "Workspace assistance",
    title: "Ask about the records you can access",
    body: "Use Hash AI for supported questions about progress, workload, deadlines, and operational records within your role permissions.",
    image: "/dashboards/dashboard-feature-3.png",
    alt: "Hashboard Dashboard interactive drill-down view",
  },
];

const dashboardFeatures = [
  [PieChart, "Project status", "Review current project state, ownership, dates, and related tasks."],
  [Activity, "Task progress", "Check open, completed, assigned, and overdue work from supported task data."],
  [Timer, "Attendance records", "Review permitted check-in, check-out, status, and worked-time information."],
  [TrendingUp, "Lead pipeline", "Inspect supported lead stages, ownership, probability, value, and activity."],
  [Users, "Team workload", "Review permitted employee and open-task context by owner."],
  [SlidersHorizontal, "Financial workflows", "Use dedicated invoice, payment, expense, and payroll records."],
  [Share2, "Client context", "Keep clients connected to supported projects, meetings, agreements, and invoices."],
  [ShieldCheck, "Permission controls", "Limit data and actions using company and role boundaries."],
  [FileText, "Hash AI questions", "Ask about permitted project, people, client, meeting, and operational records."],
];

const platform = [
  [BarChart3, "Payroll", "Prepare payroll periods"], [Columns3, "Tasks", "Assign and track work"],
  [GanttChart, "Projects", "Coordinate delivery"], [MessageCircle, "Chat", "Real-time team messaging"],
  [Video, "Meetings", "Manage bookings"], [Inbox, "Leads", "Track sales opportunities"],
  [FileText, "Invoices", "Manage customer billing"], [PanelsTopLeft, "Spaces", "Organize teams and access"],
  [BookOpen, "People", "Manage employee records"], [ClipboardList, "Leave", "Manage time off"],
  [CalendarDays, "Calendar", "See scheduled work"], [CalendarClock, "Scheduling", "Share booking availability"],
  [Zap, "Hash AI", "Ask permission-aware questions"], [Clock3, "Expenses", "Record business expenses"],
  [Clapperboard, "Clients", "Keep customer records"], [Grid2X2, "All features", "Explore everything"],
];

function CTAButton({ secondary = false, children = "Get started. Now!" }) {
  return (
    <Link href="/signup" className={`task-btn${secondary ? " task-btn-secondary" : ""}`}>
      {children}
      <ArrowRight aria-hidden="true" />
    </Link>
  );
}

function DashboardsHero() {
  return (
    <section className="task-hero">
      <div className="task-shell task-hero-grid">
        <div className="task-hero-copy">
          <p className="task-eyebrow">HASHBOARD DASHBOARD</p>
          <h1>See what’s moving—and what needs attention</h1>
          <p className="task-hero-lede">
            Bring important work, people, clients, meetings, and business activity into a clearer view of what matters now.
          </p>
          <div className="task-hero-action">
            <CTAButton />
            <span>Explore the<br />workspace.</span>
          </div>
          <div className="task-reviews">
            <span>Projects · People · Clients · Operations · Hash AI</span>
          </div>
        </div>
        <div className="task-hero-visual">
          <Image
            src="/dashboards/dashboard-hero.png"
            width={815}
            height={543}
            priority
            sizes="(max-width: 1000px) 100vw, 815px"
            alt="Hashboard Dashboards analytics view"
          />
        </div>
      </div>
      <LogoCloud className="task-hero-logo-cloud" />
    </section>
  );
}

function Comparison() {
  return (
    <section className="task-section task-comparison">
      <div className="task-shell">
        <h2 className="task-gradient-title">A more honest way to understand work</h2>
        <div className="task-compare-grid">
          {[["Without Hashboard Dashboards", comparison.without, false], ["With Hashboard Dashboards", comparison.with, true]].map(([title, items, good]) => (
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
          <h2>Current records for informed decisions</h2>
          <p>
            Hashboard keeps supported work and operational records in purpose-built views,<br className="task-desktop-break" /> with role-aware access for each team.
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
          <h2>Use current workspace records instead of invented analytics.</h2>
          <p>Review the workflow you need or ask Hash AI a supported, permission-aware question.</p>
        </div>
        <div className="task-motion-visual">
          <span className="task-motion-noise" aria-hidden="true" />
          <Image className="task-motion-product" src="/dashboards/dashboard-hero.png" width={815} height={543} sizes="(max-width: 760px) 100vw, 815px" alt="Hashboard Dashboards workspace" />
        </div>
      </div>
    </section>
  );
}

function AiFeatures() {
  const cards = [
    ["Hash AI", "Ask about current project and task status", "Request permitted information about owners, deadlines, priorities, progress, workload, and overdue tasks.", "/tasks/super-agents.png"],
    ["Supported Workflows", "Review the underlying operational records", "Open the relevant Hashboard workflow for attendance, leave, leads, clients, invoices, expenses, payroll, or meetings.", "/tasks/clickup-brain.png"],
  ];
  return (
    <section className="task-section task-ai">
      <div className="task-shell">
        <header className="task-heading">
          <p className="task-eyebrow">WORKSPACE-AWARE ASSISTANCE</p>
          <h2>Supported questions and clear source records<br />inside Hashboard</h2>
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
            <h2>Plus, everything you need to visualize work</h2>
          </header>
          <div className="task-feature-grid">
            {dashboardFeatures.map(([Icon, title, body]) => (
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
            <h2>Visibility starts with reliable records</h2>
            <p>Use Tasks, Projects, Chat, Attendance, Leave, Clients, Leads, Meetings, Invoices, Expenses, and Payroll in one workspace.</p>
          </header>
          <div className="task-platform-grid">
            {platform.map(([Icon, title, body]) => (
              <Link
                href={title === "Dashboards" ? "/features/dashboards" : title === "Tasks" ? "/features/tasks" : title === "Scheduling" ? "/features/scheduling" : "/product"}
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

function DashboardsFinal() {
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
          className="relative overflow-hidden rounded-[24px] sm:rounded-[28px] md:rounded-[36px] bg-gradient-to-r from-[#7026e3] via-[#e02fa8] to-[#ff5d39] px-5 sm:px-12 lg:px-14 pt-8 sm:pt-12 lg:pt-14 shadow-2xl shadow-purple-950/20"
          style={{ paddingBottom: 0 }}
        >
          {/* Upper Header & CTA */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8">
            <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold tracking-tight text-white max-w-xl leading-[1.1]">
              Bring your team&apos;s operational work into one workspace.
            </h2>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center gap-2 bg-white text-neutral-950 hover:bg-neutral-100 px-7 py-3 rounded-2xl font-bold text-base whitespace-nowrap shadow-md hover:shadow-lg transition-all w-full sm:w-auto text-center"
              >
                <span>Get started. Now!</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <div className="text-xs md:text-sm font-medium text-white/90 leading-tight whitespace-nowrap">
                Create your <br className="hidden sm:inline" /> workspace.
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
              src="/dashboards/dashboard-footer.png"
              width={1240}
              height={460}
              alt="Hashboard workspace visibility preview"
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

export default function DashboardsPage() {
  return (
    <div className="tasks-page">
      <DashboardsHero />
      <Comparison />
      <WorkflowGrid />
      <MotionBanner />
      <AiFeatures />
      <FeaturesAndPlatform />
      <DashboardsFaq />
      <DashboardsFinal />
    </div>
  );
}
