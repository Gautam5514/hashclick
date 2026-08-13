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
  Clock, Palette, Calendar as CalendarIcon
} from "lucide-react";
import CalendarFaq from "./CalendarFaq";
import LogoCloud from "../shared/LogoCloud";

const comparison = {
  without: [
    "Meetings live in one app, tasks live in another",
    "Constant context switching to check due dates",
    "Overbooking because work time isn't reserved",
    "Manual updates whenever project timelines change",
  ],
  with: [
    "Meetings and tasks synchronized in a single calendar view",
    "Drag and drop tasks onto your calendar to block focus time",
    "2-way real-time sync with Google Calendar & Outlook",
    "Hashboard Hash AI schedules tasks based on priority and availability",
  ],
};

const workflow = [
  {
    eyebrow: "2-Way Sync",
    title: "See and sync all your calendars",
    body: "Sync Google Calendar, Outlook, and Apple Calendar with Hashboard. Any meeting created in Hashboard reflects instantly on your external calendar and vice versa.",
    image: "/calendar/calendar-feature-1.png",
    alt: "Hashboard 2-Way Calendar Sync",
  },
  {
    eyebrow: "Automated Scheduling",
    title: "Auto-schedule tasks onto your calendar",
    body: "Turn project tasks into scheduled time blocks. Drag tasks directly onto your calendar grid to assign time slots and avoid overcommitting.",
    image: "/calendar/calendar-feature-2.png",
    alt: "Auto-schedule tasks on Hashboard Calendar",
    reverse: true,
  },
  {
    eyebrow: "Team Availability",
    title: "Compare team schedules in one click",
    body: "Overlay team member calendars to find open meeting slots instantly without emailing back and forth.",
    image: "/calendar/calendar-feature-3.png",
    alt: "Compare team member schedules in Hashboard Calendar",
  },
];

const calendarFeatures = [
  [RefreshCw, "2-Way Calendar Sync", "Sync Google, Outlook, and Apple calendars seamlessly with Hashboard."],
  [Clock, "Drag-and-Drop Time Blocking", "Drag tasks onto calendar slots to reserve focused work time."],
  [CalendarIcon, "Custom Views", "Switch between Day, 4-Day, Week, and Month calendar layouts."],
  [Users, "Team Workload Overlays", "See team availability at a glance to balance workload across projects."],
  [Palette, "Color-Coded Calendars", "Color code events by priority, project, team, or status."],
  [Repeat2, "Recurring Schedule Rules", "Set recurring meeting patterns and automated reminders."],
];

const platform = [
  [CalendarDays, "Calendar", "Schedule and manage time"], [FileText, "Docs", "Connected documentation"],
  [BarChart3, "Dashboards", "Visualize your data"], [Columns3, "Board view", "Kanban-style workflow"],
  [GanttChart, "Gantt", "Timeline and dependencies"], [MessageCircle, "Chat", "Real-time team messaging"],
  [Video, "SyncUp", "Video meetings & huddles"], [Inbox, "Inbox", "Centralize notifications"],
  [PanelsTopLeft, "Whiteboards", "Visual collaboration"], [BookOpen, "Wiki", "Knowledge base"],
  [ClipboardList, "Forms", "Collect information"], [CalendarClock, "Scheduling", "Automate calendar booking"],
  [Zap, "Automations", "Workflow automation"], [Clock3, "Time tracking", "Monitor time spent"],
  [Clapperboard, "Clips", "Screen recordings"], [Grid2X2, "All features", "Explore everything"],
];

function CTAButton({ secondary = false, children = "Get started. Now!" }) {
  return (
    <Link href="/signup" className={`task-btn${secondary ? " task-btn-secondary" : ""}`}>
      {children}
      <ArrowRight aria-hidden="true" />
    </Link>
  );
}

function CalendarHero() {
  return (
    <section className="task-hero">
      <div className="task-shell task-hero-grid">
        <div className="task-hero-copy">
          <p className="task-eyebrow">HASHBOARD CALENDAR</p>
          <h1>Schedule your meetings and your work—automatically</h1>
          <p className="task-hero-lede">
            Connect Google Calendar, Outlook, and your tasks in one unified view. Block focus time, resolve scheduling conflicts, and manage project timelines effortlessly.
          </p>
          <div className="task-hero-action">
            <CTAButton />
            <span>Start 7 days<br />Free Trial.</span>
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
            src="/calendar/calendar-hero.png"
            width={815}
            height={543}
            priority
            sizes="(max-width: 1000px) 100vw, 815px"
            alt="Hashboard Calendar view"
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
        <h2 className="task-gradient-title">A better way to manage your time</h2>
        <div className="task-compare-grid">
          {[["Without Hashboard Calendar", comparison.without, false], ["With Hashboard Calendar", comparison.with, true]].map(([title, items, good]) => (
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
          <h2>Unified scheduling for every team</h2>
          <p>
            Hashboard Calendar brings your meetings, project deadlines, and daily work<br className="task-desktop-break" /> together in one place for total clarity.
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
          <h2>Your meetings and work, synchronized seamlessly.</h2>
          <p>Join 3M+ teams who schedule and deliver projects faster with Hashboard Calendar. Start your 7-day free trial.</p>
        </div>
        <div className="task-motion-visual">
          <span className="task-motion-noise" aria-hidden="true" />
          <Image className="task-motion-product" src="/calendar/calendar-hero.png" width={815} height={543} sizes="(max-width: 760px) 100vw, 815px" alt="Hashboard Calendar workspace" />
        </div>
      </div>
    </section>
  );
}

function AiFeatures() {
  const cards = [
    ["Hashboard Brain", "Ask AI to find open time & answer calendar queries", "Hashboard Brain finds available meeting slots, summarizes schedule conflicts, and answers questions about your upcoming agenda in seconds.", "/calendar/ai-calendar-1.png"],
    ["Smart Meeting Notes", "Auto-generated meeting agendas and smart reminders", "Never start a meeting unprepared. Hashboard Brain automatically attaches relevant task docs, action items, and notes to your calendar events.", "/calendar/ai-calendar-2.png"],
  ];
  return (
    <section className="task-section task-ai">
      <div className="task-shell">
        <header className="task-heading">
          <p className="task-eyebrow">AI Powered Scheduling</p>
          <h2>Smart calendar management<br />powered by Hashboard Brain</h2>
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
            {calendarFeatures.map(([Icon, title, body]) => (
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
            <h2>Calendar is just the beginning</h2>
            <p>Calendar connects strategy to execution. Combine Calendar with Tasks, Docs, Dashboards, Chat, and Whiteboards in a single converged app. Explore everything you unlock when your work lives in one place.</p>
          </header>
          <div className="task-platform-grid">
            {platform.map(([Icon, title, body]) => (
              <Link
                href={title === "Dashboards" ? "/features/dashboards" : title === "Tasks" ? "/features/tasks" : title === "Chat" ? "/features/chat" : title === "Docs" || title === "Wiki" ? "/features/docs" : title === "Scheduling" ? "/features/scheduling" : "/product"}
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

function CalendarFinal() {
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
              Master your schedule in seconds.
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
                Start 7 Days <br className="hidden sm:inline" /> Free Trial.
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
              src="/calendar/calendar-footer.png"
              width={1240}
              height={460}
              alt="Hashboard Calendar footer workspace"
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

export default function CalendarPage() {
  return (
    <div className="tasks-page">
      <CalendarHero />
      <Comparison />
      <WorkflowGrid />
      <MotionBanner />
      <AiFeatures />
      <FeaturesAndPlatform />
      <CalendarFaq />
      <CalendarFinal />
    </div>
  );
}
