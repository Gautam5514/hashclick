"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, BarChart3, BookOpen, CalendarClock, CalendarDays, Check, Clapperboard, ClipboardList, Clock3, Columns3, FileText, GanttChart, Grid2X2, Inbox, MessageCircle, PanelsTopLeft, PieChart, Target, TrendingUp, UserPlus, Video, X, Zap,
} from "lucide-react";
import LeadsFaq from "./LeadsFaq";
import LogoCloud from "../shared/LogoCloud";

const comparison = {
  without: [
    "Prospect details scattered across separate records",
    "Pipeline stage and ownership are difficult to confirm",
    "Calls, emails, meetings, and follow-ups lack a timeline",
    "Won opportunities require duplicate client entry",
  ],
  with: [
    "Manual, CSV, webhook, referral, and other lead sources",
    "Defined stages from New through Won or Lost",
    "Assignment, priority, value, probability, and close date",
    "Activity history and supported conversion to a client",
  ],
};

const workflow = [
  {
    eyebrow: "Pipeline Stages",
    title: "Keep every opportunity in a defined stage",
    body: "Move leads through New, Contacted, Qualified, Proposal, Negotiation, Won, or Lost while retaining their current owner and priority.",
    image: "/tasks/feature-included.png",
    alt: "Lead pipeline board in Hashboard",
  },
  {
    eyebrow: "Lead Details",
    title: "Capture the prospect and opportunity context",
    body: "Store contact and company information, source, tags, notes, estimated value, currency, probability, and expected close date.",
    image: "/tasks/feature-connected.png",
    alt: "Lead capture in Hashboard",
    reverse: true,
  },
  {
    eyebrow: "Activities and Conversion",
    title: "Record progress and convert when won",
    body: "Add notes, calls, emails, meetings, follow-ups, status changes, and assignments, then convert an eligible lead into a connected client record.",
    image: "/tasks/feature-scale.png",
    alt: "Follow-up automations in Hashboard",
  },
];

const leadsFeatures = [
  [Columns3, "Defined pipeline", "Use seven supported lead stages from New to Won or Lost."],
  [TrendingUp, "Opportunity details", "Record estimated value, currency, probability, and expected close date."],
  [UserPlus, "Ownership", "Claim, release, or assign leads according to supported permissions."],
  [Zap, "Scheduled follow-ups", "Add follow-up activities with scheduled and completion timestamps."],
  [Target, "Source tracking", "Record manual, CSV, webhook, referral, website, social, call, or other sources."],
  [PieChart, "Client conversion", "Convert a qualified outcome into a linked client without losing lead history."],
];

const platform = [
  [TrendingUp, "Leads", "Track and convert leads"],
  [BarChart3, "Clients", "Manage converted accounts"],
  [Columns3, "Tasks", "Assign and track work"],
  [GanttChart, "Projects", "Coordinate delivery"],
  [MessageCircle, "Chat", "Real-time team messaging"],
  [Video, "Meetings", "Manage prospect bookings"],
  [Inbox, "Notifications", "Keep up with activity"],
  [FileText, "Invoices", "Manage customer billing"],
  [PanelsTopLeft, "Spaces", "Organize teams and access"],
  [BookOpen, "People", "Manage employee records"],
  [ClipboardList, "Forms", "Capture structured inquiries"],
  [CalendarDays, "Calendar", "See scheduled work"],
  [CalendarClock, "Scheduling", "Share booking availability"],
  [Zap, "Hash AI", "Ask permission-aware questions"],
  [Clock3, "Expenses", "Record business expenses"],
  [Clapperboard, "Payroll", "Prepare payroll periods"],
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

function LeadsHero() {
  return (
    <section className="task-hero">
      <div className="task-shell task-hero-grid">
        <div className="task-hero-copy">
          <p className="task-eyebrow">HASHBOARD LEADS</p>
          <h1>Track prospects from first record to client conversion</h1>
          <p className="task-hero-lede">
            Keep lead identity, opportunity value, stage, owner, source, activities, bookings, and conversion history in one workflow.
          </p>
          <div className="task-hero-action">
            <CTAButton />
            <span>Set up your<br />workspace.</span>
          </div>
          <div className="task-reviews">
            <span>Prospect, pipeline, activity, booking, and client context connected</span>
          </div>
        </div>
        <div className="task-hero-visual">
          <Image
            src="/tasks/task-hero.png"
            width={815}
            height={543}
            priority
            sizes="(max-width: 1000px) 100vw, 815px"
            alt="Hashboard Leads pipeline view"
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
        <h2 className="task-gradient-title">A better way to manage a pipeline</h2>
        <div className="task-compare-grid">
          {[["Without Hashboard Leads", comparison.without, false], ["With Hashboard Leads", comparison.with, true]].map(([title, items, good]) => (
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
          <h2>A complete operational record for every lead</h2>
          <p>
            Manage the opportunity from capture and assignment through activities, scheduling, outcome, and client conversion.
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
          <h2>A pipeline your team can keep current.</h2>
          <p>Use structured stages, ownership, values, activities, sources, and conversion instead of unsupported scoring promises.</p>
        </div>
        <div className="task-motion-visual">
          <span className="task-motion-noise" aria-hidden="true" />
          <Image className="task-motion-product" src="/tasks/task-hero.png" width={815} height={543} sizes="(max-width: 760px) 100vw, 815px" alt="Hashboard Leads workspace" />
        </div>
      </div>
    </section>
  );
}

function AiFeatures() {
  const cards = [
    ["Lead Context", "Use current pipeline information", "Keep stage, priority, owner, estimated value, probability, close date, source, tags, and activity history available as structured context.", "/tasks/super-agents.png"],
    ["Supported Actions", "Move the opportunity forward deliberately", "Update details, assign ownership, record an activity, complete a follow-up, or convert the lead when the user has permission.", "/tasks/clickup-brain.png"],
  ];
  return (
    <section className="task-section task-ai">
      <div className="task-shell">
        <header className="task-heading">
          <p className="task-eyebrow">Connected pipeline context</p>
          <h2>See the record.<br />Choose the next action.</h2>
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
            <h2>Plus, everything you need for leads</h2>
          </header>
          <div className="task-feature-grid">
            {leadsFeatures.map(([Icon, title, body]) => (
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
            <h2>Leads connect to customer operations</h2>
            <p>Keep prospects alongside booking forms, meetings, clients, projects, tasks, chat, agreements, and invoices.</p>
          </header>
          <div className="task-platform-grid">
            {platform.map(([Icon, title, body]) => (
              <Link
                href={title === "Leads" ? "/features/leads" : title === "Dashboards" ? "/features/dashboards" : title === "Chat" ? "/features/chat" : title === "Docs" ? "/features/docs" : title === "Wiki" ? "/features/docs" : title === "Calendar" ? "/features/calendar" : title === "Scheduling" ? "/features/scheduling" : "/product"}
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

function LeadsFinal() {
  const logoItems = [
    { name: "Leads", text: "Leads" },
    { name: "Activities", text: "Activities" },
    { name: "Meetings", text: "Meetings" },
    { name: "Forms", text: "Forms" },
    { name: "Clients", text: "Clients" },
    { name: "Projects", text: "Projects" },
    { name: "Tasks", text: "Tasks" },
    { name: "Chat", text: "Chat" },
    { name: "Agreements", text: "Agreements" },
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
              Leads, made simple.
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
              src="/tasks/task-footer.png"
              width={1240}
              height={460}
              alt="Hashboard Leads footer workspace"
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

export default function LeadsPage() {
  return (
    <div className="tasks-page">
      <LeadsHero />
      <Comparison />
      <WorkflowGrid />
      <MotionBanner />
      <AiFeatures />
      <FeaturesAndPlatform />
      <LeadsFaq />
      <LeadsFinal />
    </div>
  );
}
