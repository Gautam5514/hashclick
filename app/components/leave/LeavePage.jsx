"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, BarChart3, BookOpen, CalendarCheck2, CalendarClock, CalendarDays, CalendarOff, Check, Clapperboard, ClipboardCheck, ClipboardList, Clock3, Columns3, FileText, GanttChart, Grid2X2, Inbox, MessageCircle, PanelsTopLeft, Plane, SlidersHorizontal, Video, X, Zap,
} from "lucide-react";
import LeaveFaq from "./LeaveFaq";

const comparison = {
  without: [
    "Leave requests handled through scattered messages",
    "No consistent status for pending or decided requests",
    "Balances disconnected from approved leave",
    "Cancellations handled without restoring balance correctly",
  ],
  with: [
    "Structured full-day and half-day leave requests",
    "Pending, approved, rejected, and cancellation states",
    "Balance validation and updates on approval",
    "Controlled cancellation with balance restoration",
  ],
};

const workflow = [
  {
    eyebrow: "Leave Requests",
    title: "Submit the dates and leave type clearly",
    body: "Choose an active leave type, start and end dates, full- or half-day units where supported, and include the reason for the request.",
    image: "/features/leave/team_apply_leave.png",
    alt: "Apply Leave form with leave type, duration, and dates",
  },
  {
    eyebrow: "Approval Workflows",
    title: "Keep each decision in a defined workflow",
    body: "Authorized admins or managers can review pending requests, approve or reject them, and preserve approver, decision, and status context.",
    image: "/features/leave/leave_approved.png",
    alt: "Approved leave requests with approver context",
    reverse: true,
  },
  {
    eyebrow: "Balances and Cancellations",
    title: "Keep approved days and remaining balance aligned",
    body: "Balance-backed leave is deducted when approved. Supported cancellations restore that balance after the required decision flow.",
    image: "/features/leave/leave_complete.png",
    alt: "Cancelled leave requests list",
  },
];

const leaveFeatures = [
  [Plane, "Leave requests", "Submit dated requests against an active company leave type."],
  [ClipboardCheck, "Approval decisions", "Approve or reject pending requests with authorized roles."],
  [CalendarCheck2, "Leave balances", "Track opening, credited, used, and remaining days by year and type."],
  [CalendarDays, "Full or half days", "Represent supported leave as full-day or half-day units."],
  [SlidersHorizontal, "Leave types", "Configure paid status, balance requirements, yearly limits, and active state."],
  [CalendarOff, "Cancellation flow", "Cancel pending requests or request cancellation of approved leave."],
];

const platform = [
  [Plane, "Leave", "Manage time off"],
  [BarChart3, "Payroll", "Prepare payroll periods"],
  [Columns3, "Tasks", "Assign and track work"],
  [GanttChart, "Projects", "Coordinate delivery"],
  [MessageCircle, "Chat", "Real-time team messaging"],
  [Video, "Meetings", "Manage bookings"],
  [Inbox, "Notifications", "Keep up with activity"],
  [FileText, "Invoices", "Manage customer billing"],
  [PanelsTopLeft, "Spaces", "Organize teams and access"],
  [BookOpen, "People", "Manage employee records"],
  [ClipboardList, "Attendance", "Record working days"],
  [CalendarDays, "Calendar", "See scheduled work"],
  [CalendarClock, "Scheduling", "Share booking availability"],
  [Zap, "Hash AI", "Ask permission-aware questions"],
  [Clock3, "Expenses", "Record business expenses"],
  [Clapperboard, "Clients", "Keep customer context"],
  [Grid2X2, "All features", "Explore everything"],
];

function CTAButton({ secondary = false, children = "Get started" }) {
  return (
    <Link href="/signup" className={`task-btn${secondary ? " task-btn-secondary" : ""}`}>
      {children}
      <ArrowRight aria-hidden="true" />
    </Link>
  );
}

function LeaveHero() {
  return (
    <section className="task-hero">
      <div className="task-shell task-hero-grid">
        <div className="task-hero-copy">
          <p className="task-eyebrow">HASHBOARD LEAVE</p>
          <h1>Make time-off planning effortless</h1>
          <p className="task-hero-lede">
            Give employees a simple way to request leave while managers keep approvals, balances, and team availability clear.
          </p>
          <div className="task-hero-action">
            <CTAButton />
            <span>Set up your<br />workspace.</span>
          </div>
          <div className="task-reviews">
            <span>Leave types, balances, requests, and decisions connected</span>
          </div>
        </div>
        <div className="task-hero-visual">
          <Image
            src="/features/leave/leave.png"
            width={815}
            height={371}
            priority
            sizes="(max-width: 1000px) 100vw, 815px"
            alt="Hashboard Leave Management overview"
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
        <h2 className="task-gradient-title">A better way to manage time off</h2>
        <div className="task-compare-grid">
          {[["Without Hashboard Leave", comparison.without, false], ["With Hashboard Leave", comparison.with, true]].map(([title, items, good]) => (
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
          <h2>A clear lifecycle for every leave request</h2>
          <p>
            Keep employee requests, balance rules, approval decisions, and cancellations consistent and permission-aware.
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
          <h2>Leave records that stay accountable.</h2>
          <p>Track request status, balance use, approver decisions, and supported cancellations without relying on inbox history.</p>
        </div>
        <div className="task-motion-visual">
          <span className="task-motion-noise" aria-hidden="true" />
          <Image className="task-motion-product" src="/features/leave/remianing_leave.png" width={595} height={223} sizes="(max-width: 760px) 100vw, 815px" alt="Configured leave types with yearly limits" />
        </div>
      </div>
    </section>
  );
}

function AiFeatures() {
  const cards = [
    ["Hash AI", "Ask for your remaining leave balance", "Employees can request their own balance context, while supported team-level leave information remains limited to authorized roles.", "/features/leave/leavs.png"],
    ["Supported Decisions", "Approve leave within permissions", "Authorized admins or managers can use supported tools to approve eligible pending requests while preserving the normal balance rules.", "/features/leave/team_message.png"],
  ];
  return (
    <section className="task-section task-ai">
      <div className="task-shell">
        <header className="task-heading">
          <p className="task-eyebrow">AI-assisted leave context</p>
          <h2>Ask within access.<br />Decide within policy.</h2>
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
            <h2>Plus, everything you need for leave</h2>
          </header>
          <div className="task-feature-grid">
            {leaveFeatures.map(([Icon, title, body]) => (
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
            <h2>Leave connects to people operations</h2>
            <p>Keep leave alongside employee records, attendance, payroll, holidays, week-offs, projects, tasks, and team workflows.</p>
          </header>
          <div className="task-platform-grid">
            {platform.map(([Icon, title, body]) => (
              <Link
                href={title === "Leave" ? "/features/leave" : title === "Dashboards" ? "/features/dashboards" : title === "Chat" ? "/features/chat" : title === "Docs" ? "/features/docs" : title === "Wiki" ? "/features/docs" : title === "Calendar" ? "/features/calendar" : title === "Scheduling" ? "/features/scheduling" : "/product"}
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

function LeaveFinal() {
  const logoItems = [
    { name: "Leave", text: "Leave" },
    { name: "Balances", text: "Balances" },
    { name: "Attendance", text: "Attendance" },
    { name: "Payroll", text: "Payroll" },
    { name: "People", text: "People" },
    { name: "Holidays", text: "Holidays" },
    { name: "Projects", text: "Projects" },
    { name: "Tasks", text: "Tasks" },
    { name: "Chat", text: "Chat" },
    { name: "Hash AI", text: "Hash AI" },
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
              Leave, made simple.
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

          {/* Mockup Image Container */}
          <div
            className="relative w-full max-w-[1140px] mx-auto mt-6 md:mt-10 overflow-hidden flex justify-center leading-none"
            style={{ marginBottom: 0, paddingBottom: 0 }}
          >
            <div
              className="absolute -top-10 left-1/2 -translate-x-1/2 w-[80%] h-[80%] bg-white/40 blur-3xl pointer-events-none rounded-full"
              aria-hidden="true"
            />
            <div
              className="absolute bottom-0 left-[10%] w-[50%] h-[60%] bg-white/25 blur-2xl pointer-events-none rounded-full"
              aria-hidden="true"
            />

            <Image
              src="/features/leave/leave.png"
              width={1240}
              height={564}
              alt="Hashboard Leave Management overview"
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

export default function LeavePage() {
  return (
    <div className="tasks-page">
      <LeaveHero />
      <Comparison />
      <WorkflowGrid />
      <MotionBanner />
      <AiFeatures />
      <FeaturesAndPlatform />
      <LeaveFaq />
      <LeaveFinal />
    </div>
  );
}
