"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, BarChart3, BookOpen, CalendarClock, CalendarDays, Check, Clapperboard, ClipboardList, Clock3, Columns3, FileText, GanttChart, Grid2X2, Inbox, ListChecks, MessageCircle, MessageSquareText, PanelsTopLeft, Video, X, Zap,
} from "lucide-react";
import MeetingsFaq from "./MeetingsFaq";
import LogoCloud from "../shared/LogoCloud";

const comparison = {
  without: [
    "Meeting details spread across calendars and messages",
    "Hosts and attendees updated through separate tools",
    "Rescheduling creates avoidable coordination work",
    "Customer and project context is easy to lose",
  ],
  with: [
    "Create internal meetings from the Hashboard workspace",
    "Use Google Meet, Zoom, or a calendar event without video",
    "Add attendees, delegate hosts, reschedule, or cancel",
    "Keep supported space, client, lead, and booking-page context",
  ],
};

const workflow = [
  {
    eyebrow: "Internal Meetings",
    title: "Create meetings from your workspace",
    body: "Set the title, description, start and end time, timezone, attendees, and optional workspace context for an internal meeting.",
    image: "/chat/bento-1.png",
    alt: "Internal meeting details in Hashboard",
  },
  {
    eyebrow: "Meeting Providers",
    title: "Use the meeting provider your team has connected",
    body: "Create supported meetings with Google Meet or Zoom, or schedule the calendar event without a video provider when appropriate.",
    image: "/chat/bento-2.png",
    alt: "AI meeting notes in Hashboard",
    reverse: true,
  },
  {
    eyebrow: "Meeting Management",
    title: "Keep changes under control",
    body: "Authorized users can update details, add or remove internal attendees, delegate the host, reschedule the meeting, or cancel it.",
    image: "/chat/bento-3.png",
    alt: "Meeting action items in Hashboard",
  },
];

const meetingsFeatures = [
  [Video, "Google Meet and Zoom", "Use a supported provider connected by the meeting owner."],
  [ClipboardList, "Meeting details", "Store a title, description, time window, and timezone."],
  [MessageSquareText, "Internal attendees", "Add permitted teammates as meeting attendees."],
  [ListChecks, "Host delegation", "Transfer meeting responsibility when the user’s role allows it."],
  [Clapperboard, "Reschedule and cancel", "Manage booking status and calendar updates from Hashboard."],
  [BarChart3, "Connected context", "Associate supported meetings with spaces, clients, leads, or booking pages."],
];

const platform = [
  [Video, "Meetings", "Video calls that create tasks"],
  [BarChart3, "Clients", "Keep customer context"],
  [Columns3, "Tasks", "Assign and track work"],
  [GanttChart, "Projects", "Coordinate delivery"],
  [MessageCircle, "Chat", "Real-time team messaging"],
  [Video, "Zoom", "Use a connected provider"],
  [Inbox, "Notifications", "Keep up with activity"],
  [FileText, "Invoices", "Manage customer billing"],
  [PanelsTopLeft, "Spaces", "Organize teams and access"],
  [BookOpen, "People", "Manage employee records"],
  [ClipboardList, "Leads", "Keep prospect context"],
  [CalendarDays, "Calendar", "See scheduled meetings"],
  [CalendarClock, "Scheduling", "Share booking availability"],
  [Zap, "Hash AI", "Ask permission-aware questions"],
  [Clock3, "Attendance", "Record working days"],
  [Clapperboard, "Expenses", "Record business expenses"],
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

function MeetingsHero() {
  return (
    <section className="task-hero">
      <div className="task-shell task-hero-grid">
        <div className="task-hero-copy">
          <p className="task-eyebrow">HASHBOARD MEETINGS</p>
          <h1>Schedule and manage meetings with the right context</h1>
          <p className="task-hero-lede">
            Create internal meetings, use a connected provider, manage attendees and hosts, and keep scheduling changes in one workspace.
          </p>
          <div className="task-hero-action">
            <CTAButton />
            <span>Set up your<br />workspace.</span>
          </div>
          <div className="task-reviews">
            <span>Meetings, attendees, calendars, and workspace context connected</span>
          </div>
        </div>
        <div className="task-hero-visual">
          <Image
            src="/chat/chat-poster.png"
            width={815}
            height={543}
            priority
            sizes="(max-width: 1000px) 100vw, 815px"
            alt="Hashboard Meetings video call view"
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
        <h2 className="task-gradient-title">A better way to run meetings</h2>
        <div className="task-compare-grid">
          {[["Without Hashboard Meetings", comparison.without, false], ["With Hashboard Meetings", comparison.with, true]].map(([title, items, good]) => (
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
          <h2>Plan and manage meetings in one place</h2>
          <p>
            Coordinate provider-backed meetings and calendar events while respecting company roles and attendee access.
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
          <h2>Meeting logistics, connected.</h2>
          <p>Create, update, reschedule, cancel, and delegate supported meetings without losing their workspace context.</p>
        </div>
        <div className="task-motion-visual">
          <span className="task-motion-noise" aria-hidden="true" />
          <Image className="task-motion-product" src="/chat/chat-poster.png" width={815} height={543} sizes="(max-width: 760px) 100vw, 815px" alt="Hashboard Meetings workspace" />
        </div>
      </div>
    </section>
  );
}

function AiFeatures() {
  const cards = [
    ["Calendar Context", "Keep the scheduled details accessible", "Review supported booking details such as the host, attendees, timing, status, provider, and connected business context.", "/chat/meeting-summary.png"],
    ["Permission-aware Management", "Make changes within your role", "Hosts, admins, and managers can perform supported updates while employee visibility remains limited to meetings they host or attend.", "/chat/ai-poster.png"],
  ];
  return (
    <section className="task-section task-ai">
      <div className="task-shell">
        <header className="task-heading">
          <p className="task-eyebrow">Connected meeting context</p>
          <h2>See the details.<br />Manage the next step.</h2>
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
            <h2>Plus, everything you need for meetings</h2>
          </header>
          <div className="task-feature-grid">
            {meetingsFeatures.map(([Icon, title, body]) => (
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
            <h2>Meetings connect to everyday operations</h2>
            <p>Keep meetings alongside scheduling, spaces, clients, leads, projects, tasks, chat, people, and business workflows.</p>
          </header>
          <div className="task-platform-grid">
            {platform.map(([Icon, title, body]) => (
              <Link
                href={title === "Meetings" ? "/features/meetings" : title === "Dashboards" ? "/features/dashboards" : title === "Chat" ? "/features/chat" : title === "Docs" ? "/features/docs" : title === "Wiki" ? "/features/docs" : title === "Calendar" ? "/features/calendar" : title === "Scheduling" ? "/features/scheduling" : "/product"}
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

function MeetingsFinal() {
  const logoItems = [
    { name: "Meetings", text: "Meetings" },
    { name: "Scheduling", text: "Scheduling" },
    { name: "Calendar", text: "Calendar" },
    { name: "Spaces", text: "Spaces" },
    { name: "Projects", text: "Projects" },
    { name: "Tasks", text: "Tasks" },
    { name: "Chat", text: "Chat" },
    { name: "Clients", text: "Clients" },
    { name: "Leads", text: "Leads" },
    { name: "People", text: "People" },
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
              Meetings, made simple.
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
              src="/chat/chat-footer.png"
              width={1240}
              height={460}
              alt="Hashboard Meetings footer workspace"
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

export default function MeetingsPage() {
  return (
    <div className="tasks-page">
      <MeetingsHero />
      <Comparison />
      <WorkflowGrid />
      <MotionBanner />
      <AiFeatures />
      <FeaturesAndPlatform />
      <MeetingsFaq />
      <MeetingsFinal />
    </div>
  );
}
