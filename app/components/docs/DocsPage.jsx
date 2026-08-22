"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, Check, X, SlidersHorizontal, LayoutGrid, Workflow,
  GitBranch, ListChecks, Users, Repeat2, MessageSquareText, Timer,
  BarChart3, Columns3, GanttChart, MessageCircle, Video, Inbox,
  FileText, PanelsTopLeft, BookOpen, ClipboardList, CalendarDays,
  CalendarClock, Zap, Clock3, Clapperboard, Grid2X2, Sparkles,
  Share2, ShieldCheck, History, Eye, Edit3, Layers
} from "lucide-react";
import DocsFaq from "./DocsFaq";

const comparison = {
  without: [
    "Important details scattered across messages and files",
    "Project context separated from assigned work",
    "No consistent place for structured business records",
    "Essential context gets separated from daily work",
  ],
  with: [
    "Keep task descriptions and project details close to execution",
    "Attach supported files where the workflow allows it",
    "Use Chat for decisions and ongoing project discussion",
    "Ask Hash AI about permitted structured workspace data",
  ],
};

const workflow = [
  {
    eyebrow: "Project context",
    title: "Keep essential details close to the work",
    body: "Use project and task descriptions, attachments, and connected conversations to preserve the context required for execution.",
    image: "/features/docs/docs_added.png",
    alt: "Adding a document with description and file attachment in Hashboard Docs",
  },
  {
    eyebrow: "Team discussion",
    title: "Discuss decisions where projects happen",
    body: "Use company and project channels, threaded replies, mentions, files, pins, and search to keep important communication accessible.",
    image: "/features/docs/add_docs_side.png",
    alt: "Adding a new document to Hashboard Docs",
    reverse: true,
  },
  {
    eyebrow: "Structured records",
    title: "Store operational details consistently",
    body: "Keep supported records for people, clients, leads, meetings, invoices, expenses, and projects in their purpose-built workflows.",
    image: "/features/docs/docs_grid.png",
    alt: "Company Docs card view showing an organized document record",
  },
];

const docsFeatures = [
  [BookOpen, "Task descriptions", "Keep requirements and instructions attached to assigned work."],
  [History, "Activity context", "Review supported task and workflow activity where available."],
  [Layers, "Project organization", "Group related tasks, ownership, dates, and project information."],
  [FileText, "File attachments", "Share supported files in the workflows that accept them."],
  [ShieldCheck, "Role permissions", "Limit workspace records and actions by company and role."],
  [LayoutGrid, "Structured workflows", "Use purpose-built records instead of disconnected documents."],
];

const platform = [
  [FileText, "Invoices", "Manage customer billing"], [BarChart3, "Payroll", "Prepare payroll periods"],
  [Columns3, "Tasks", "Assign and track work"], [GanttChart, "Projects", "Coordinate delivery"],
  [MessageCircle, "Chat", "Real-time team messaging"], [Video, "Meetings", "Manage bookings"],
  [Inbox, "Leads", "Track sales opportunities"], [PanelsTopLeft, "Spaces", "Organize teams and access"],
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

function DocsHero() {
  return (
    <section className="task-hero">
      <div className="task-shell task-hero-grid">
        <div className="task-hero-copy">
          <p className="task-eyebrow">HASHBOARD COMPANY DOCS</p>
          <h1>Keep company knowledge clear and accessible</h1>
          <p className="task-hero-lede">
            Keep policies, guides, project context, files, and important company information organized alongside the work.
          </p>
          <div className="task-hero-action">
            <CTAButton />
            <span>Explore the<br />workspace.</span>
          </div>
          <div className="task-reviews">
            <span>Projects · Tasks · Chat · Files · Structured records</span>
          </div>
        </div>
        <div className="task-hero-visual">
          <Image
            src="/features/docs/docs_page.png"
            width={815}
            height={375}
            priority
            sizes="(max-width: 1000px) 100vw, 815px"
            alt="Hashboard Company Docs workspace preview"
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
        <h2 className="task-gradient-title">A clearer way to preserve work context</h2>
        <div className="task-compare-grid">
          {[["Without Hashboard Docs", comparison.without, false], ["With Hashboard Docs", comparison.with, true]].map(([title, items, good]) => (
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
          <h2>Connected workspace context for every team</h2>
          <p>
            Keep project details, tasks, files, conversations, and structured records<br className="task-desktop-break" /> closer to the people doing the work.
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
          <h2>Keep the context needed for execution inside the workspace.</h2>
          <p>Start with projects, tasks, Chat, files, and the operational records Hashboard supports today.</p>
        </div>
        <div className="task-motion-visual">
          <span className="task-motion-noise" aria-hidden="true" />
          <Image className="task-motion-product" src="/features/docs/docs_view.png" width={815} height={451} sizes="(max-width: 760px) 100vw, 815px" alt="Company Docs list view with organized document records" />
        </div>
      </div>
    </section>
  );
}

function AiFeatures() {
  const cards = [
    ["Hash AI", "Ask about permitted workspace records", "Use current tasks, projects, people, clients, meetings, and other supported data as context for workspace questions.", "/features/docs/docs_grid.png"],
    ["Supported Actions", "Turn a request into structured work", "Ask Hash AI to create or update supported tasks and records when your role has permission to perform the action.", "/features/docs/docs_added.png"],
  ];
  return (
    <section className="task-section task-ai">
      <div className="task-shell">
        <header className="task-heading">
          <p className="task-eyebrow">WORKSPACE-AWARE ASSISTANCE</p>
          <h2>Questions and supported actions<br />with Hash AI</h2>
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
            {docsFeatures.map(([Icon, title, body]) => (
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
            <h2>Context is useful when it stays with the work</h2>
            <p>Combine projects, tasks, Chat, meetings, clients, invoices, and other supported workflows in one company workspace.</p>
          </header>
          <div className="task-platform-grid">
            {platform.map(([Icon, title, body]) => (
              <Link
                href={title === "Dashboards" ? "/features/dashboards" : title === "Tasks" ? "/features/tasks" : title === "Chat" ? "/features/chat" : title === "Scheduling" ? "/features/scheduling" : "/product"}
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

function DocsFinal() {
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
              Create your first connected doc in seconds.
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
              src="/features/docs/docs_filter.png"
              width={1240}
              height={643}
              alt="Company Docs category filter and search"
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

export default function DocsPage() {
  return (
    <div className="tasks-page">
      <DocsHero />
      <Comparison />
      <WorkflowGrid />
      <MotionBanner />
      <AiFeatures />
      <FeaturesAndPlatform />
      <DocsFaq />
      <DocsFinal />
    </div>
  );
}
