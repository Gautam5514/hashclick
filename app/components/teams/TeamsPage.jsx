"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, BarChart3, BookOpen, CalendarClock, CalendarDays, Check, Clapperboard, ClipboardCheck, ClipboardList, Clock3, Columns3, FileText, GanttChart, Grid2X2, Inbox, MessageCircle, PanelsTopLeft, ShieldCheck, Target, Users2, UsersRound, Video, X, Zap,
} from "lucide-react";
import TeamsFaq from "./TeamsFaq";

const comparison = {
  without: [
    "Employee identity and contact details stored separately",
    "Company roles disconnected from workspace access",
    "Space and project membership difficult to trace",
    "Documents and salary history kept outside the employee record",
  ],
  with: [
    "Company user list with role and profile context",
    "Admin, Manager, and Employee internal roles",
    "Space and project memberships tied to each user",
    "Employee profile, documents, and salary history connected",
  ],
};

const workflow = [
  {
    eyebrow: "Company Users",
    title: "Keep the internal team in one company directory",
    body: "Keep names, contact details, roles, employee profiles, and team relationships together in the company directory.",
    image: "/features/teams/team_list.png",
    alt: "All People company directory list",
  },
  {
    eyebrow: "Roles & Permissions",
    title: "Use roles and membership together",
    body: "Global Admin, Manager, and Employee roles combine with space roles, project membership, and workflow-specific permissions.",
    image: "/features/teams/team_info.png",
    alt: "Employee profile showing role and portal access",
    reverse: true,
  },
  {
    eyebrow: "Employee Records",
    title: "Keep people information connected",
    body: "Maintain personal and work contact details, onboarding status, emergency information, employee documents, and effective-dated salary records.",
    image: "/features/teams/team_salary.png",
    alt: "Employee salary breakdown with earnings and deductions",
  },
];

const teamsFeatures = [
  [Users2, "Company users", "Create, view, update, and manage the people in your company workspace."],
  [ShieldCheck, "Global roles", "Use Admin, Manager, and Employee roles for company-level access."],
  [BarChart3, "Workspace membership", "Connect people to the spaces and projects where they work."],
  [UsersRound, "Employee profiles", "Store identity, contact, address, and emergency information."],
  [ClipboardCheck, "Documents and onboarding status", "Keep employee files and Draft, Submitted, or Completed status."],
  [Target, "Salary history", "Maintain effective-dated compensation records for permitted payroll use."],
];

const platform = [
  [Users2, "Teams", "Manage your organization"],
  [BarChart3, "Payroll", "Prepare payroll periods"],
  [Columns3, "Tasks", "Assign and track work"],
  [GanttChart, "Projects", "Coordinate delivery"],
  [MessageCircle, "Chat", "Real-time team messaging"],
  [Video, "Meetings", "Manage bookings"],
  [Inbox, "Notifications", "Keep up with activity"],
  [FileText, "Documents", "Manage employee files"],
  [PanelsTopLeft, "Spaces", "Organize teams and access"],
  [BookOpen, "People", "Manage employee records"],
  [ClipboardList, "Leave", "Manage approved time off"],
  [CalendarDays, "Calendar", "See scheduled work"],
  [CalendarClock, "Attendance", "Record working days"],
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

function TeamsHero() {
  return (
    <section className="task-hero">
      <div className="task-shell task-hero-grid">
        <div className="task-hero-copy">
          <p className="task-eyebrow">HASHBOARD TEAMS</p>
          <h1>Bring your people and their work together</h1>
          <p className="task-hero-lede">
            Keep your company directory, employee details, roles, documents, and team responsibilities connected in one place.
          </p>
          <div className="task-hero-action">
            <CTAButton />
            <span>Set up your<br />workspace.</span>
          </div>
          <div className="task-reviews">
            <span>People, roles, spaces, projects, attendance, leave, and payroll connected</span>
          </div>
        </div>
        <div className="task-hero-visual">
          <Image
            src="/features/teams/teams.png"
            width={815}
            height={372}
            priority
            sizes="(max-width: 1000px) 100vw, 815px"
            alt="Hashboard Teams attendance overview"
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
        <h2 className="task-gradient-title">A better way to manage your org</h2>
        <div className="task-compare-grid">
          {[["Without Hashboard Teams", comparison.without, false], ["With Hashboard Teams", comparison.with, true]].map(([title, items, good]) => (
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
          <h2>A connected operational record for your team</h2>
          <p>
            Manage the user account and its employee, membership, people-operations, and payroll context together.
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
          <h2>Team records with clear access boundaries.</h2>
          <p>Use company roles and workspace membership to give each person the access their responsibilities require.</p>
        </div>
        <div className="task-motion-visual">
          <span className="task-motion-noise" aria-hidden="true" />
          <Image className="task-motion-product" src="/features/teams/payroll_list.png" width={595} height={300} sizes="(max-width: 760px) 100vw, 815px" alt="Payroll runs list" />
        </div>
      </div>
    </section>
  );
}

function AiFeatures() {
  const cards = [
    ["Hash AI", "Understand team workload", "Managers can ask about employee and open-task information available to their role.", "/features/teams/teams_attendance.png"],
    ["People Operations", "Connect the employee record to daily workflows", "Use the same company user across employee details, attendance, leave, salary, payroll, spaces, projects, tasks, chat, and meetings.", "/features/teams/team_payroll.png"],
  ];
  return (
    <section className="task-section task-ai">
      <div className="task-shell">
        <header className="task-heading">
          <p className="task-eyebrow">Connected team context</p>
          <h2>Know the person.<br />Respect the permission.</h2>
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
            <h2>Plus, everything you need for teams</h2>
          </header>
          <div className="task-feature-grid">
            {teamsFeatures.map(([Icon, title, body]) => (
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
            <h2>Teams connect every internal workflow</h2>
            <p>Keep people records alongside spaces, projects, tasks, chat, attendance, leave, payroll, meetings, and company operations.</p>
          </header>
          <div className="task-platform-grid">
            {platform.map(([Icon, title, body]) => (
              <Link
                href={title === "Teams" ? "/features/teams" : title === "Dashboards" ? "/features/dashboards" : title === "Chat" ? "/features/chat" : title === "Docs" ? "/features/docs" : title === "Wiki" ? "/features/docs" : title === "Calendar" ? "/features/calendar" : title === "Scheduling" ? "/features/scheduling" : "/product"}
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

function TeamsFinal() {
  const logoItems = [
    { name: "People", text: "People" },
    { name: "Roles", text: "Roles" },
    { name: "Spaces", text: "Spaces" },
    { name: "Projects", text: "Projects" },
    { name: "Tasks", text: "Tasks" },
    { name: "Chat", text: "Chat" },
    { name: "Attendance", text: "Attendance" },
    { name: "Leave", text: "Leave" },
    { name: "Payroll", text: "Payroll" },
    { name: "Meetings", text: "Meetings" },
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
              Teams, made simple.
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
              src="/features/teams/teams.png"
              width={1240}
              height={566}
              alt="Hashboard Teams attendance overview"
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

export default function TeamsPage() {
  return (
    <div className="tasks-page">
      <TeamsHero />
      <Comparison />
      <WorkflowGrid />
      <MotionBanner />
      <AiFeatures />
      <FeaturesAndPlatform />
      <TeamsFaq />
      <TeamsFinal />
    </div>
  );
}
