"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, Banknote, BarChart3, BookOpen, CalendarClock, CalendarDays, Check, Clapperboard, ClipboardList, Clock3, Columns3, FileText, GanttChart, Grid2X2, HandCoins, Inbox, Landmark, MessageCircle, PanelsTopLeft, PieChart, Video, Wallet, X, Zap,
} from "lucide-react";
import PayrollFaq from "./PayrollFaq";

const comparison = {
  without: [
    "Attendance and approved leave reviewed separately from salary",
    "Working days calculated without holiday or week-off context",
    "Manual adjustments made outside the payroll record",
    "Final numbers changed without a controlled run state",
  ],
  with: [
    "Attendance, leave, holiday, and week-off credits calculated together",
    "Configured salary components and statutory deductions applied",
    "Manual adjustments stored with their payroll entry",
    "Draft, finalized, and administrator-controlled reopen workflow",
  ],
};

const workflow = [
  {
    eyebrow: "Monthly Generation",
    title: "Calculate a payroll period from current records",
    body: "Generate monthly entries using eligible employee salary snapshots, attendance, approved leave, holidays, week-offs, and working-day rules.",
    image: "/features/payroll/payroll_filter.png",
    alt: "Generate Payroll dialog with month selection",
  },
  {
    eyebrow: "Salary and Deductions",
    title: "Apply the configured compensation inputs",
    body: "Use basic pay, allowances, configured statutory deductions, earned credits, unpaid deficits, and preserved manual adjustments to calculate net pay.",
    image: "/features/payroll/see_payroll.png",
    alt: "Employee payroll detail with manual adjustment and salary breakdown",
    reverse: true,
  },
  {
    eyebrow: "Review and Finalization",
    title: "Lock a reviewed run before employees see it",
    body: "Admins can finalize a non-empty draft. Employees see their own finalized payroll history, and admins can reopen a run when a correction is required.",
    image: "/features/payroll/team_salary.png",
    alt: "Finalized payroll entry with salary breakdown",
  },
];

const payrollFeatures = [
  [Banknote, "Monthly payroll runs", "Generate draft employee entries for a selected month."],
  [Landmark, "Working-day calendar", "Use configured holidays and week-offs in period calculations."],
  [HandCoins, "Attendance and leave credits", "Calculate payable credits from attendance and approved leave."],
  [FileText, "Employee payroll history", "Let employees view their own finalized monthly entries."],
  [Wallet, "Deductions and adjustments", "Apply configured deductions and supported manual additions or deductions."],
  [PieChart, "Finalization controls", "Finalize, protect, and administratively reopen payroll runs."],
];

const platform = [
  [Banknote, "Payroll", "Run accurate pay runs"],
  [BarChart3, "Attendance", "Record working days"],
  [Columns3, "Tasks", "Assign and track work"],
  [GanttChart, "Projects", "Coordinate delivery"],
  [MessageCircle, "Chat", "Real-time team messaging"],
  [Video, "Meetings", "Manage bookings"],
  [Inbox, "Notifications", "Keep up with activity"],
  [FileText, "Invoices", "Manage customer billing"],
  [PanelsTopLeft, "Spaces", "Organize teams and access"],
  [BookOpen, "People", "Manage employee records"],
  [ClipboardList, "Leave", "Manage approved time off"],
  [CalendarDays, "Calendar", "See scheduled work"],
  [CalendarClock, "Holidays", "Configure working-day exceptions"],
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

function PayrollHero() {
  return (
    <section className="task-hero">
      <div className="task-shell task-hero-grid">
        <div className="task-hero-copy">
          <p className="task-eyebrow">HASHBOARD PAYROLL</p>
          <h1>Run payroll with every input connected</h1>
          <p className="task-hero-lede">
            Bring salary, attendance, leave, holidays, and deductions together for a clearer monthly payroll process.
          </p>
          <div className="task-hero-action">
            <CTAButton />
            <span>Set up your<br />workspace.</span>
          </div>
          <div className="task-reviews">
            <span>Salary, attendance, leave, calendar, and adjustments connected</span>
          </div>
        </div>
        <div className="task-hero-visual">
          <Image
            src="/features/payroll/payroll.png"
            width={815}
            height={369}
            priority
            sizes="(max-width: 1000px) 100vw, 815px"
            alt="Hashboard Payroll runs overview"
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
        <h2 className="task-gradient-title">A better way to run payroll</h2>
        <div className="task-compare-grid">
          {[["Without Hashboard Payroll", comparison.without, false], ["With Hashboard Payroll", comparison.with, true]].map(([title, items, good]) => (
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
          <h2>A reviewable calculation for every payroll period</h2>
          <p>
            Generate a draft, inspect employee entries, apply supported corrections, and finalize only when the period is ready.
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
          <h2>Payroll calculations with human review.</h2>
          <p>Hashboard calculates from configured records while keeping finalization and corrections under explicit administrator control.</p>
        </div>
        <div className="task-motion-visual">
          <span className="task-motion-noise" aria-hidden="true" />
          <Image className="task-motion-product" src="/features/payroll/payroll_months.png" width={595} height={310} sizes="(max-width: 760px) 100vw, 815px" alt="Monthly payroll run with per-employee breakdown" />
        </div>
      </div>
    </section>
  );
}

function AiFeatures() {
  const cards = [
    ["Payroll Context", "Review the inputs behind each entry", "Inspect required workdays, attendance credits, leave credits, holiday credits, deficits, salary components, deductions, and net pay.", "/features/payroll/team_payroll.png"],
    ["Permission-aware Access", "Keep sensitive payroll appropriately scoped", "Employees can access their finalized history, while generation, adjustment, finalization, and reopening remain limited by role.", "/features/payroll/team_side_view.png"],
  ];
  return (
    <section className="task-section task-ai">
      <div className="task-shell">
        <header className="task-heading">
          <p className="task-eyebrow">Connected payroll context</p>
          <h2>Understand the inputs.<br />Control the outcome.</h2>
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
            <h2>Plus, everything you need for payroll</h2>
          </header>
          <div className="task-feature-grid">
            {payrollFeatures.map(([Icon, title, body]) => (
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
            <h2>Payroll connects to people operations</h2>
            <p>Keep payroll alongside employee salary records, attendance, leave, holidays, week-offs, people information, and company workflows.</p>
          </header>
          <div className="task-platform-grid">
            {platform.map(([Icon, title, body]) => (
              <Link
                href={title === "Payroll" ? "/features/payroll" : title === "Dashboards" ? "/features/dashboards" : title === "Chat" ? "/features/chat" : title === "Docs" ? "/features/docs" : title === "Wiki" ? "/features/docs" : title === "Calendar" ? "/features/calendar" : title === "Scheduling" ? "/features/scheduling" : "/product"}
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

function PayrollFinal() {
  const logoItems = [
    { name: "Payroll", text: "Payroll" },
    { name: "Salary", text: "Salary" },
    { name: "Attendance", text: "Attendance" },
    { name: "Leave", text: "Leave" },
    { name: "Holidays", text: "Holidays" },
    { name: "Week-offs", text: "Week-offs" },
    { name: "People", text: "People" },
    { name: "Adjustments", text: "Adjustments" },
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
              Payroll, made simple.
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
              src="/features/payroll/payroll.png"
              width={1240}
              height={561}
              alt="Hashboard Payroll runs overview"
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

export default function PayrollPage() {
  return (
    <div className="tasks-page">
      <PayrollHero />
      <Comparison />
      <WorkflowGrid />
      <MotionBanner />
      <AiFeatures />
      <FeaturesAndPlatform />
      <PayrollFaq />
      <PayrollFinal />
    </div>
  );
}
