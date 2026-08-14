"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, BarChart3, BookOpen, Boxes, CalendarClock, CalendarDays, Check, Clapperboard, ClipboardList, Clock3, Columns3, FileText, GanttChart, Grid2X2, Inbox, LayoutGrid, MessageCircle, PanelsTopLeft, Search, ShieldCheck, UserPlus, Video, X, Zap,
} from "lucide-react";
import SpacesFaq from "./SpacesFaq";
import LogoCloud from "../shared/LogoCloud";

const comparison = {
  without: [
    "Projects are difficult to group by team or function",
    "Membership is managed separately from the work",
    "People see work that is not relevant to their role",
    "Project conversations lose their team context",
  ],
  with: [
    "A dedicated space for each team or area of work",
    "Projects grouped under the space where they belong",
    "Manager, Member, and Viewer space roles",
    "Space membership reflected in related project channels",
  ],
};

const workflow = [
  {
    eyebrow: "Team Structure",
    title: "Give related projects a shared home",
    body: "Create a space with a name, description, icon, and members, then organize the team’s projects inside it.",
    image: "/kanban/kanban-feature-1.png",
    alt: "Nested Space hierarchy in Hashboard",
  },
  {
    eyebrow: "Space Roles",
    title: "Match access to each person’s responsibility",
    body: "Assign Manager, Member, or Viewer roles. Non-admin users see the spaces they belong to, while company admins can manage spaces across the organization.",
    image: "/kanban/kanban-feature-2.png",
    alt: "Space permissions in Hashboard",
    reverse: true,
  },
  {
    eyebrow: "Project Templates",
    title: "Reuse project structure within a space",
    body: "Create project templates with predefined tasks, priorities, order, subtasks, and due-date offsets, then use them for repeatable work.",
    image: "/kanban/kanban-feature-3.png",
    alt: "Space templates in Hashboard",
  },
];

const spacesFeatures = [
  [Boxes, "Space organization", "Group related projects around a team or business function."],
  [ShieldCheck, "Role-aware access", "Use Manager, Member, and Viewer roles inside each space."],
  [LayoutGrid, "Project templates", "Reuse task structures for recurring project types."],
  [Search, "Accessible space list", "Let members find the spaces their role allows them to access."],
  [UserPlus, "Member management", "Add company users to a space and update their space role."],
  [BarChart3, "Connected projects", "Keep project membership, tasks, and progress under the right space."],
];

const platform = [
  [Boxes, "Spaces", "Organize every team"],
  [BarChart3, "Payroll", "Prepare payroll periods"],
  [Columns3, "Tasks", "Assign and track work"],
  [GanttChart, "Projects", "Coordinate team delivery"],
  [MessageCircle, "Chat", "Real-time team messaging"],
  [Video, "Meetings", "Manage bookings"],
  [Inbox, "Notifications", "Keep up with activity"],
  [FileText, "Invoices", "Manage customer billing"],
  [PanelsTopLeft, "Attendance", "Record working days"],
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

function SpacesHero() {
  return (
    <section className="task-hero">
      <div className="task-shell task-hero-grid">
        <div className="task-hero-copy">
          <p className="task-eyebrow">HASHBOARD SPACES</p>
          <h1>Organize teams, access, and projects in Spaces</h1>
          <p className="task-hero-lede">
            Give each team or function a dedicated space, add the right members, assign clear roles, and keep related projects together.
          </p>
          <div className="task-hero-action">
            <CTAButton />
            <span>Set up your<br />workspace.</span>
          </div>
          <div className="task-reviews">
            <span>Spaces, roles, projects, and project channels kept together</span>
          </div>
        </div>
        <div className="task-hero-visual">
          <Image
            src="/kanban/kanban-hero.png"
            width={815}
            height={543}
            priority
            sizes="(max-width: 1000px) 100vw, 815px"
            alt="Hashboard Spaces workspace hierarchy"
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
        <h2 className="task-gradient-title">A better way to organize work</h2>
        <div className="task-compare-grid">
          {[["Without Hashboard Spaces", comparison.without, false], ["With Hashboard Spaces", comparison.with, true]].map(([title, items, good]) => (
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
          <h2>A clear structure for every team</h2>
          <p>
            Spaces connect membership and permissions to the projects and conversations that belong to each team.
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
          <h2>Structure that stays connected to the work.</h2>
          <p>Keep team membership, project access, templates, and related channels aligned from one space.</p>
        </div>
        <div className="task-motion-visual">
          <span className="task-motion-noise" aria-hidden="true" />
          <Image className="task-motion-product" src="/kanban/kanban-hero.png" width={815} height={543} sizes="(max-width: 760px) 100vw, 815px" alt="Hashboard Spaces workspace" />
        </div>
      </div>
    </section>
  );
}

function AiFeatures() {
  const cards = [
    ["Hash AI", "List the spaces you can access", "Ask for available spaces and use that context to understand where projects and team work are organized.", "/kanban/ai-kanban-1.png"],
    ["Project Context", "Find projects within their space", "Use permission-aware project and space information when asking about current work, ownership, status, or priorities.", "/kanban/ai-kanban-2.png"],
  ];
  return (
    <section className="task-section task-ai">
      <div className="task-shell">
        <header className="task-heading">
          <p className="task-eyebrow">AI-assisted organization</p>
          <h2>Ask with the right<br />workspace context.</h2>
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
            <h2>Plus, everything you need for spaces</h2>
          </header>
          <div className="task-feature-grid">
            {spacesFeatures.map(([Icon, title, body]) => (
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
            <h2>Spaces connect the rest of your work</h2>
            <p>Bring projects, tasks, chat, people, attendance, leave, meetings, clients, invoices, expenses, and AI assistance into one organized workspace.</p>
          </header>
          <div className="task-platform-grid">
            {platform.map(([Icon, title, body]) => (
              <Link
                href={title === "Spaces" ? "/features/spaces" : title === "Dashboards" ? "/features/dashboards" : title === "Chat" ? "/features/chat" : title === "Docs" ? "/features/docs" : title === "Wiki" ? "/features/docs" : title === "Calendar" ? "/features/calendar" : title === "Scheduling" ? "/features/scheduling" : "/product"}
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

function SpacesFinal() {
  const logoItems = [
    { name: "Spaces", text: "Spaces" },
    { name: "Projects", text: "Projects" },
    { name: "Tasks", text: "Tasks" },
    { name: "Chat", text: "Chat" },
    { name: "People", text: "People" },
    { name: "Attendance", text: "Attendance" },
    { name: "Leave", text: "Leave" },
    { name: "Meetings", text: "Meetings" },
    { name: "Clients", text: "Clients" },
    { name: "Invoices", text: "Invoices" },
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
              Spaces, made simple.
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
              src="/kanban/kanban-footer.png"
              width={1240}
              height={460}
              alt="Hashboard Spaces footer workspace"
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

export default function SpacesPage() {
  return (
    <div className="tasks-page">
      <SpacesHero />
      <Comparison />
      <WorkflowGrid />
      <MotionBanner />
      <AiFeatures />
      <FeaturesAndPlatform />
      <SpacesFaq />
      <SpacesFinal />
    </div>
  );
}
