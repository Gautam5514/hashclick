"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, BarChart3, BookOpen, CalendarClock, CalendarDays, Check, Clapperboard, ClipboardCheck, ClipboardList, Clock, Clock3, Columns3, FileText, Fingerprint, GanttChart, Grid2X2, Inbox, MapPin, MessageCircle, PanelsTopLeft, Video, X, Zap,
} from "lucide-react";
import AttendanceFaq from "./AttendanceFaq";
import LogoCloud from "../shared/LogoCloud";

const comparison = {
  without: [
    "Attendance records scattered across messages and spreadsheets",
    "No consistent view of today’s check-in status",
    "Manual calculations for time worked",
    "Corrections without a clear note or audit context",
  ],
  with: [
    "Face-verified check-in and check-out records",
    "Today and monthly views for permitted team members",
    "Worked time calculated from recorded attendance",
    "Admin corrections with adjustment notes",
  ],
};

const workflow = [
  {
    eyebrow: "Daily Attendance",
    title: "Record the beginning and end of the workday",
    body: "Employees use their enrolled face profile to submit a check-in and check-out. Each record is tied to the employee and the company’s attendance date.",
    image: "/calendar/calendar-feature-1.png",
    alt: "Clock in and out view in Hashboard Attendance",
  },
  {
    eyebrow: "Attendance Status",
    title: "See today’s status without chasing updates",
    body: "Employees can review their own status, while authorized admins can see today’s team summary and inspect individual attendance history.",
    image: "/calendar/calendar-feature-2.png",
    alt: "Team attendance status in Hashboard",
    reverse: true,
  },
  {
    eyebrow: "Monthly Records",
    title: "Review attendance across the month",
    body: "See present, incomplete, and absent days alongside recorded check-in, check-out, and worked time. Working days respect configured holidays and week-offs where applicable.",
    image: "/calendar/calendar-feature-3.png",
    alt: "Timesheet report in Hashboard Attendance",
  },
];

const attendanceFeatures = [
  [Fingerprint, "Face-verified attendance", "Use an enrolled face profile for daily attendance submissions."],
  [MapPin, "Today’s status", "Review whether attendance is not started, checked in, or completed."],
  [CalendarClock, "Company-aware dates", "Keep attendance aligned with the company’s configured timezone."],
  [ClipboardCheck, "Manual corrections", "Let admins add or deduct time with a supporting note."],
  [Clock, "Worked time", "Calculate worked minutes from recorded check-in and check-out times."],
  [BarChart3, "Team summaries", "Review permitted daily and monthly attendance breakdowns."],
];

const platform = [
  [Fingerprint, "Attendance", "Track time and presence"],
  [BarChart3, "Payroll", "Prepare payroll periods"],
  [Columns3, "Tasks", "Assign and track work"],
  [GanttChart, "Projects", "Coordinate team delivery"],
  [MessageCircle, "Chat", "Real-time team messaging"],
  [Video, "Meetings", "Manage bookings"],
  [Inbox, "Notifications", "Keep up with activity"],
  [FileText, "Invoices", "Manage customer billing"],
  [PanelsTopLeft, "Spaces", "Organize teams and access"],
  [BookOpen, "People", "Manage employee records"],
  [ClipboardList, "Leave", "Request and approve time off"],
  [CalendarDays, "Calendar", "See scheduled work"],
  [CalendarClock, "Scheduling", "Share booking availability"],
  [Zap, "Hash AI", "Ask permission-aware questions"],
  [Clock3, "Expenses", "Record business expenses"],
  [Clapperboard, "Clients", "Keep customer records"],
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

function AttendanceHero() {
  return (
    <section className="task-hero">
      <div className="task-shell task-hero-grid">
        <div className="task-hero-copy">
          <p className="task-eyebrow">HASHBOARD ATTENDANCE</p>
          <h1>See who’s working without chasing updates</h1>
          <p className="task-hero-lede">
            Make daily check-ins simple and give teams a clear, reliable view of attendance and working-day history.
          </p>
          <div className="task-hero-action">
            <CTAButton />
            <span>Set up your<br />workspace.</span>
          </div>
          <div className="task-reviews">
            <span>Attendance, leave, people, and payroll context in one platform</span>
          </div>
        </div>
        <div className="task-hero-visual">
          <Image
            src="/calendar/calendar-hero.png"
            width={815}
            height={543}
            priority
            sizes="(max-width: 1000px) 100vw, 815px"
            alt="Hashboard Attendance tracking view"
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
        <h2 className="task-gradient-title">A better way to track time</h2>
        <div className="task-compare-grid">
          {[["Without Hashboard Attendance", comparison.without, false], ["With Hashboard Attendance", comparison.with, true]].map(([title, items, good]) => (
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
          <h2>A dependable attendance record, in one place</h2>
          <p>
            Employees see their own records. Authorized admins get the team visibility and correction tools their role allows.
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
          <h2>Attendance records your team can rely on.</h2>
          <p>Keep daily status, monthly history, and permitted corrections connected to the rest of your workspace.</p>
        </div>
        <div className="task-motion-visual">
          <span className="task-motion-noise" aria-hidden="true" />
          <Image className="task-motion-product" src="/calendar/calendar-hero.png" width={815} height={543} sizes="(max-width: 760px) 100vw, 815px" alt="Hashboard Attendance workspace" />
        </div>
      </div>
    </section>
  );
}

function AiFeatures() {
  const cards = [
    ["Hash AI", "Ask about permitted attendance records", "Employees can ask for their own attendance. Admins can request a team member’s daily record, including status, check-in, check-out, and worked time.", "/calendar/ai-calendar-1.png"],
    ["Admin Actions", "Correct attendance with clear context", "Authorized admins can apply supported attendance adjustments and include a note explaining why time was added or deducted.", "/calendar/ai-calendar-2.png"],
  ];
  return (
    <section className="task-section task-ai">
      <div className="task-shell">
        <header className="task-heading">
          <p className="task-eyebrow">AI-assisted attendance</p>
          <h2>Ask clearly.<br />Act within permissions.</h2>
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
            <h2>Plus, everything you need for attendance</h2>
          </header>
          <div className="task-feature-grid">
            {attendanceFeatures.map(([Icon, title, body]) => (
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
            <h2>Attendance connects to everyday operations</h2>
            <p>Keep attendance alongside people, leave, payroll, projects, tasks, chat, clients, meetings, invoices, and expenses in one platform.</p>
          </header>
          <div className="task-platform-grid">
            {platform.map(([Icon, title, body]) => (
              <Link
                href={title === "Attendance" ? "/features/attendance" : title === "Dashboards" ? "/features/dashboards" : title === "Chat" ? "/features/chat" : title === "Docs" ? "/features/docs" : title === "Wiki" ? "/features/docs" : title === "Calendar" ? "/features/calendar" : title === "Scheduling" ? "/features/scheduling" : "/product"}
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

function AttendanceFinal() {
  const logoItems = [
    { name: "Attendance", text: "Attendance" },
    { name: "People", text: "People" },
    { name: "Leave", text: "Leave" },
    { name: "Payroll", text: "Payroll" },
    { name: "Projects", text: "Projects" },
    { name: "Tasks", text: "Tasks" },
    { name: "Chat", text: "Chat" },
    { name: "Clients", text: "Clients" },
    { name: "Invoices", text: "Invoices" },
    { name: "Expenses", text: "Expenses" },
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
              Attendance, made simple.
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
              src="/calendar/calendar-footer.png"
              width={1240}
              height={460}
              alt="Hashboard Attendance footer workspace"
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

export default function AttendancePage() {
  return (
    <div className="tasks-page">
      <AttendanceHero />
      <Comparison />
      <WorkflowGrid />
      <MotionBanner />
      <AiFeatures />
      <FeaturesAndPlatform />
      <AttendanceFaq />
      <AttendanceFinal />
    </div>
  );
}
