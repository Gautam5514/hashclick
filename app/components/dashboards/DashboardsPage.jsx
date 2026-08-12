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
    "Data scattered across spreadsheets, slides, and separate tools",
    "Manual weekly status reports take hours to compile",
    "Metrics are outdated the minute you present them",
    "Static charts that don't let you drill down into real work",
  ],
  with: [
    "Live, real-time metrics connected directly to active work",
    "Automated executive reporting compiled in a single click",
    "50+ customizable widgets for time, velocity, and sprints",
    "Click any chart item to view and update the underlying task",
  ],
};

const workflow = [
  {
    eyebrow: "Real-time analytics",
    title: "Track progress and performance in real time",
    body: "Monitor sprint velocity, team workload, project status, and KPIs dynamically as work gets completed across your Workspace.",
    image: "/dashboards/dashboard-feature-1.png",
    alt: "Hashboard Dashboard progress and performance widgets",
  },
  {
    eyebrow: "50+ Customizable Widgets",
    title: "Custom reporting tailored to every team",
    body: "Mix and match charts, time tracking summaries, custom fields, calculations, and embedded docs to build your dream dashboard.",
    image: "/dashboards/dashboard-feature-2.png",
    alt: "Hashboard Dashboard 50+ widget gallery",
    reverse: true,
  },
  {
    eyebrow: "Actionable visibility",
    title: "From high-level metrics to granular tasks",
    body: "Don't just look at numbers. Click into any bar, pie, or line chart segment to view task details, assign owners, and update status instantly.",
    image: "/dashboards/dashboard-feature-3.png",
    alt: "Hashboard Dashboard interactive drill-down view",
  },
];

const dashboardFeatures = [
  [PieChart, "50+ Widget types", "Line graphs, pie charts, calculation cards, sprint charts, and custom field summaries."],
  [Activity, "Real-time sync", "Widgets update instantly as soon as team members log time or update task status."],
  [Timer, "Time & Cost Tracking", "Track billable hours, team estimates, and budget vs actual spent across projects."],
  [TrendingUp, "Sprint & Velocity", "Burn-down, burn-up, cumulative flow, and velocity charts for Agile teams."],
  [Users, "Workload & Capacity", "Visualize team capacity and prevent burnout with workload allocation charts."],
  [SlidersHorizontal, "Custom Field Rollups", "Aggregate custom numbers, currencies, ratings, and dropdown fields across workspaces."],
  [Share2, "Share & Export", "Share dashboards privately with clients, export PDFs, or publish public read-only links."],
  [ShieldCheck, "Permission Controls", "Control exactly who can view, edit, or manage dashboard widgets."],
  [FileText, "Embedded Docs & Apps", "Embed Google Sheets, Figma designs, YouTube videos, and Hashboard Docs directly into dashboards."],
];

const platform = [
  [BarChart3, "Dashboards", "Visualize your data"], [Columns3, "Board view", "Kanban-style workflow"],
  [GanttChart, "Gantt", "Timeline and dependencies"], [MessageCircle, "Chat", "Real-time team messaging"],
  [Video, "SyncUp", "Video meetings & huddles"], [Inbox, "Inbox", "Centralize notifications"],
  [FileText, "Docs", "Collaborative documentation"], [PanelsTopLeft, "Whiteboards", "Visual collaboration"],
  [BookOpen, "Wiki", "Knowledge base"], [ClipboardList, "Forms", "Collect information"],
  [CalendarDays, "Calendar", "Schedule and manage time"], [CalendarClock, "Scheduling", "Automate calendar booking"],
  [Zap, "Automations", "Workflow automation"], [Clock3, "Time tracking", "Monitor time spent"],
  [Clapperboard, "Clips", "Screen recordings"], [Grid2X2, "All features", "Explore everything"],
];

function CTAButton({ secondary = false, children = "Get started. It's FREE" }) {
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
          <p className="task-eyebrow">DASHBOARDS IN HASHBOARD</p>
          <h1>Build custom reports you can actually work from</h1>
          <p className="task-hero-lede">
            See everything at a glance: campaign performance, team productivity, billable hours. Then update work directly from the dashboard without switching tools.
          </p>
          <div className="task-hero-action">
            <CTAButton />
            <span>No credit card.<br />Setup in 2 min.</span>
          </div>
          <div className="task-reviews">
            <Image src="/tasks/stars.png" width={97} height={20} alt="4.6 out of 5 stars" />
            <span>25,000+ reviews from</span>
            <span className="task-review-sources" aria-label="G2, Capterra, GetApp, TrustRadius, and Product Hunt">
              <i className="review-g2">G2</i><i className="review-capterra">◈</i><i className="review-getapp">➤</i><i className="review-trustradius">▰</i><i className="review-ph">P</i>
            </span>
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
        <h2 className="task-gradient-title">A better way to report</h2>
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
          <h2>The foundation for data-driven decisions</h2>
          <p>
            Dashboards power complete visibility across your workspace, so leadership,<br className="task-desktop-break" /> managers, and teams stay aligned.
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
          <h2>Your team&apos;s performance is always in view. Make smarter decisions.</h2>
          <p>Join 3M+ teams who report and act from the same place. No credit card. Free forever.</p>
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
    ["Super Agents", "Automated executive summaries & reports", "Super Agents aggregate task progress, analyze workload bottlenecks, and write weekly status summaries straight to your Dashboard.", "/tasks/super-agents.png"],
    ["Hashboard Brain", "Ask questions about any metric or chart", "Ask Brain why sprint velocity dropped or which team has open blockers. Brain instantly pulls answers from your Workspace data.", "/tasks/clickup-brain.png"],
  ];
  return (
    <section className="task-section task-ai">
      <div className="task-shell">
        <header className="task-heading">
          <p className="task-eyebrow">AI powered reporting</p>
          <h2>Instant insights and updates<br />powered by Hashboard Brain</h2>
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
            <h2>Dashboards are just the beginning</h2>
            <p>Dashboards connect live metrics to the rest of Hashboard. Tasks, Docs, Chat, Whiteboards, and Automations in a single converged app. Explore everything you unlock in one place.</p>
          </header>
          <div className="task-platform-grid">
            {platform.map(([Icon, title, body]) => (
              <Link
                href={title === "Dashboards" ? "/features/dashboards" : title === "Tasks" ? "/features/tasks" : "/product"}
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
    { name: "Adobe", text: "Adobe" },
    { name: "American", text: "American" },
    { name: "NBCUniversal", text: "NBCUniversal" },
    { name: "amazon", text: "amazon" },
    { name: "NVIDIA", text: "NVIDIA" },
    { name: "wayfair", text: "wayfair" },
    { name: "verizon", text: "verizon" },
    { name: "Spotify", text: "Spotify" },
    { name: "Deloitte.", text: "Deloitte." },
    { name: "Pfizer", text: "Pfizer" },
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
              Build your first custom dashboard in minutes.
            </h2>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center gap-2 bg-white text-neutral-950 hover:bg-neutral-100 px-7 py-3 rounded-2xl font-bold text-base whitespace-nowrap shadow-md hover:shadow-lg transition-all w-full sm:w-auto text-center"
              >
                <span>Get started. It&apos;s FREE</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <div className="text-xs md:text-sm font-medium text-white/90 leading-tight whitespace-nowrap">
                Free forever. <br className="hidden sm:inline" /> No credit card.
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
              alt="Hashboard Dashboards footer workspace"
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
