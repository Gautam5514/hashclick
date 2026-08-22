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

const comparison = {
  without: [
    "External events and Hashboard bookings viewed separately",
    "Availability checked without existing busy-time context",
    "Meeting changes updated in only one system",
    "Booking ownership and attendee access are unclear",
  ],
  with: [
    "Google Calendar events and Hashboard bookings in one event feed",
    "Busy-time checks include bookings and connected Google Calendar",
    "Supported booking updates reflected in the calendar event",
    "Role-aware visibility for hosted and attended meetings",
  ],
};

const workflow = [
  {
    eyebrow: "Google Calendar Connection",
    title: "Bring Google events into the Hashboard calendar",
    body: "Connect a Google Calendar account to view primary-calendar events alongside Hashboard bookings and support provider-backed meeting creation.",
    image: "/features/calendar/all_work.png",
    alt: "Monthly calendar grid with combined events from every project",
  },
  {
    eyebrow: "Busy-time Checks",
    title: "Check availability against current commitments",
    body: "Availability combines active Hashboard bookings with busy intervals from the connected Google Calendar before a supported slot is booked.",
    image: "/features/calendar/calendar_edit.png",
    alt: "Searching the calendar before booking a new slot",
    reverse: true,
  },
  {
    eyebrow: "Synchronized Changes",
    title: "Keep supported meeting changes aligned",
    body: "Update, reschedule, cancel, change attendees, or delegate supported bookings while keeping their Google Calendar event in step.",
    image: "/features/calendar/assign_work_.png",
    alt: "Scheduled task card with an editable due date",
  },
];

const calendarFeatures = [
  [RefreshCw, "Google Calendar events", "Read the connected primary calendar alongside Hashboard events."],
  [Clock, "Availability checks", "Use Google busy time and active bookings when checking a time range."],
  [CalendarIcon, "Combined event feed", "Return supported external events and internal bookings together."],
  [Users, "Attendee management", "Add or remove internal attendees when the user can manage the booking."],
  [Palette, "Meeting context", "Retain title, description, timezone, status, provider, host, and relationships."],
  [Repeat2, "Reschedule and cancel", "Update supported bookings and their connected calendar events."],
];

const platform = [
  [CalendarDays, "Calendar", "View connected events"], [FileText, "Invoices", "Manage customer billing"],
  [BarChart3, "Clients", "Keep customer context"], [Columns3, "Tasks", "Assign and track work"],
  [GanttChart, "Projects", "Coordinate delivery"], [MessageCircle, "Chat", "Real-time team messaging"],
  [Video, "Meetings", "Manage provider-backed meetings"], [Inbox, "Notifications", "Keep up with activity"],
  [PanelsTopLeft, "Spaces", "Organize teams and access"], [BookOpen, "People", "Manage employee records"],
  [ClipboardList, "Leads", "Track prospects"], [CalendarClock, "Scheduling", "Share booking availability"],
  [Zap, "Hash AI", "Ask permission-aware questions"], [Clock3, "Attendance", "Record working days"],
  [Clapperboard, "Expenses", "Record business expenses"], [Grid2X2, "All features", "Explore everything"],
];

function CTAButton({ secondary = false, children = "Get started" }) {
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
          <h1>One clear view of every important commitment</h1>
          <p className="task-hero-lede">
            See meetings, bookings, and connected calendar events together so your team always knows what’s next.
          </p>
          <div className="task-hero-action">
            <CTAButton />
            <span>Set up your<br />workspace.</span>
          </div>
          <div className="task-reviews">
            <span>Google events, Hashboard bookings, hosts, and attendees connected</span>
          </div>
        </div>
        <div className="task-hero-visual">
          <Image
            src="/features/calendar/calendar.png"
            width={815}
            height={371}
            priority
            sizes="(max-width: 1000px) 100vw, 815px"
            alt="Hashboard Global Calendar month view"
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
          <h2>Connected calendar context for supported meetings</h2>
          <p>
            Review external Google events and Hashboard bookings together, then manage<br className="task-desktop-break" /> booking changes within the permissions of your role.
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
          <Image src="/hashboard.svg" width={161} height={40} alt="Hashboard" />
          <h2>Your supported meetings and Google events, connected.</h2>
          <p>Use existing busy time when booking, and keep managed meeting changes aligned with their calendar event.</p>
        </div>
        <div className="task-motion-visual">
          <span className="task-motion-noise" aria-hidden="true" />
          <Image className="task-motion-product" src="/features/calendar/calen.png" width={595} height={188} sizes="(max-width: 760px) 100vw, 815px" alt="Wide calendar strip across a full month" />
        </div>
      </div>
    </section>
  );
}

function AiFeatures() {
  const cards = [
    ["Availability Context", "Use current busy time when choosing a slot", "Hashboard checks supported bookings and the host’s connected Google Calendar before returning or accepting availability.", "/features/calendar/found_spaces.png"],
    ["Permission-aware Events", "Show meetings the user can access", "Employees see meetings they host or attend, while broader booking visibility and management remain limited by role.", "/features/calendar/all_work.png"],
  ];
  return (
    <section className="task-section task-ai">
      <div className="task-shell">
        <header className="task-heading">
          <p className="task-eyebrow">Connected calendar context</p>
          <h2>Check availability.<br />Manage permitted events.</h2>
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
            <h2>Calendar connects to scheduling and meetings</h2>
            <p>Keep calendar events alongside booking pages, meetings, attendees, spaces, clients, leads, projects, tasks, and chat.</p>
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
    { name: "Calendar", text: "Calendar" },
    { name: "Google Calendar", text: "Google Calendar" },
    { name: "Meetings", text: "Meetings" },
    { name: "Scheduling", text: "Scheduling" },
    { name: "Attendees", text: "Attendees" },
    { name: "Spaces", text: "Spaces" },
    { name: "Clients", text: "Clients" },
    { name: "Leads", text: "Leads" },
    { name: "Projects", text: "Projects" },
    { name: "Tasks", text: "Tasks" },
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
                <span>Get started</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <div className="text-xs md:text-sm font-medium text-white/90 leading-tight whitespace-nowrap">
                Set up your <br className="hidden sm:inline" /> workspace.
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
              src="/features/calendar/calender_screensho.png"
              width={1240}
              height={570}
              alt="Hashboard Calendar month view with connected events"
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
