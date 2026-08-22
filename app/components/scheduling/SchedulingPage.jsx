"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, BarChart3, Bell, BookOpen, CalendarClock, CalendarDays, Check, Clapperboard, ClipboardList, Clock, Clock3, Columns3, FileText, GanttChart, Globe, Grid2X2, Inbox, Link2, MessageCircle, PanelsTopLeft, Shuffle, Users, Video, X, Zap,
} from "lucide-react";
import SchedulingFaq from "./SchedulingFaq";

const comparison = {
  without: [
    "Meeting requests collected without a consistent form",
    "Availability offered without checking existing busy time",
    "Provider and host details configured separately",
    "Downstream systems lack a supported booking event",
  ],
  with: [
    "Active public page identified by company and page slug",
    "Slots checked against bookings and Google Calendar busy time",
    "Configured host and Google Meet, Zoom, or no-video option",
    "Optional signed webhook for supported booking events",
  ],
};

const workflow = [
  {
    eyebrow: "Booking Pages",
    title: "Create a booking experience that feels like your business",
    body: "Create a branded booking page with a custom link, helpful content, and the form fields your business needs.",
    image: "/calendar/calendar-feature-1.png",
    alt: "Hashboard Scheduling booking page",
  },
  {
    eyebrow: "Availability",
    title: "Offer slots around current commitments",
    body: "Hashboard builds candidate slots for the requested time range and duration, excluding active bookings and the host’s Google Calendar busy periods.",
    image: "/calendar/calendar-feature-2.png",
    alt: "Availability rules in Hashboard Scheduling",
    reverse: true,
  },
  {
    eyebrow: "Host and Provider",
    title: "Connect every booking with the right host",
    body: "Choose an eligible company user as host and use Google Meet, Zoom, or no video provider. Provider connections are validated where required.",
    image: "/calendar/calendar-feature-3.png",
    alt: "Configured booking host and provider in Hashboard",
  },
];

const schedulingFeatures = [
  [Link2, "Public page slugs", "Publish active booking pages under the correct company context."],
  [Clock, "Slot generation", "Build available slots from a range, duration, step, and current busy time."],
  [Shuffle, "Provider choice", "Configure Google Meet, Zoom, or a calendar event without video."],
  [Users, "Internal host", "Assign an eligible employee, manager, or admin with Google Calendar connected."],
  [Bell, "Optional webhooks", "Send supported booking lifecycle events to a configured endpoint."],
  [Globe, "Booking timezone", "Store the selected timezone with each confirmed booking."],
];

const platform = [
  [CalendarClock, "Scheduling", "Automate calendar booking"],
  [BarChart3, "Clients", "Keep customer context"],
  [Columns3, "Tasks", "Assign and track work"],
  [GanttChart, "Projects", "Coordinate delivery"],
  [MessageCircle, "Chat", "Real-time team messaging"],
  [Video, "Meetings", "Manage provider-backed meetings"],
  [Inbox, "Notifications", "Keep up with activity"],
  [FileText, "Invoices", "Manage customer billing"],
  [PanelsTopLeft, "Spaces", "Organize teams and access"],
  [BookOpen, "People", "Manage employee records"],
  [ClipboardList, "Forms", "Collect booking information"],
  [CalendarDays, "Calendar", "View connected events"],
  [CalendarClock, "Booking Pages", "Publish booking availability"],
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

function SchedulingHero() {
  return (
    <section className="task-hero">
      <div className="task-shell task-hero-grid">
        <div className="task-hero-copy">
          <p className="task-eyebrow">HASHBOARD SCHEDULING</p>
          <h1>Let people book time without the back-and-forth</h1>
          <p className="task-hero-lede">
            Share a polished booking page, collect the details you need, and offer times that work for your team.
          </p>
          <div className="task-hero-action">
            <CTAButton />
            <span>Set up your<br />workspace.</span>
          </div>
          <div className="task-reviews">
            <span>Booking pages, hosts, providers, calendars, and webhooks connected</span>
          </div>
        </div>
        <div className="task-hero-visual">
          <Image
            src="/calendar/calendar-hero.png"
            width={815}
            height={543}
            priority
            sizes="(max-width: 1000px) 100vw, 815px"
            alt="Hashboard Scheduling booking view"
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
        <h2 className="task-gradient-title">A better way to book meetings</h2>
        <div className="task-compare-grid">
          {[["Without Hashboard Scheduling", comparison.without, false], ["With Hashboard Scheduling", comparison.with, true]].map(([title, items, good]) => (
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
          <h2>A configurable path from page to booking</h2>
          <p>
            Keep page content, branding, hosts, availability, and new bookings together in one simple workflow.
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
          <h2>Scheduling built on current availability.</h2>
          <p>Offer supported slots, validate the host and provider, and create the corresponding Google Calendar event.</p>
        </div>
        <div className="task-motion-visual">
          <span className="task-motion-noise" aria-hidden="true" />
          <Image className="task-motion-product" src="/calendar/calendar-hero.png" width={815} height={543} sizes="(max-width: 760px) 100vw, 815px" alt="Hashboard Scheduling workspace" />
        </div>
      </div>
    </section>
  );
}

function AiFeatures() {
  const cards = [
    ["Availability Engine", "Generate candidate slots from current busy time", "Availability uses the configured company and host context, active Hashboard bookings, and the host’s connected Google Calendar.", "/calendar/ai-calendar-1.png"],
    ["Booking Events", "Send supported updates downstream", "An optional webhook can receive supported booking lifecycle events using the page’s configured endpoint and secret.", "/calendar/ai-calendar-2.png"],
  ];
  return (
    <section className="task-section task-ai">
      <div className="task-shell">
        <header className="task-heading">
          <p className="task-eyebrow">Connected scheduling</p>
          <h2>Publish the page.<br />Create the booking.</h2>
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
            <h2>Plus, everything you need for scheduling</h2>
          </header>
          <div className="task-feature-grid">
            {schedulingFeatures.map(([Icon, title, body]) => (
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
            <h2>Scheduling connects to customer operations</h2>
            <p>Keep booking pages alongside calendar events, meetings, leads, clients, spaces, projects, tasks, and chat.</p>
          </header>
          <div className="task-platform-grid">
            {platform.map(([Icon, title, body]) => (
              <Link
                href={title === "Scheduling" ? "/features/scheduling" : title === "Dashboards" ? "/features/dashboards" : title === "Chat" ? "/features/chat" : title === "Docs" ? "/features/docs" : title === "Wiki" ? "/features/docs" : title === "Calendar" ? "/features/calendar" : title === "Scheduling" ? "/features/scheduling" : "/product"}
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

function SchedulingFinal() {
  const logoItems = [
    { name: "Scheduling", text: "Scheduling" },
    { name: "Booking Pages", text: "Booking Pages" },
    { name: "Calendar", text: "Calendar" },
    { name: "Meetings", text: "Meetings" },
    { name: "Google Meet", text: "Google Meet" },
    { name: "Zoom", text: "Zoom" },
    { name: "Leads", text: "Leads" },
    { name: "Clients", text: "Clients" },
    { name: "Spaces", text: "Spaces" },
    { name: "Webhooks", text: "Webhooks" },
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
              Scheduling, made simple.
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
              alt="Hashboard Scheduling footer workspace"
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

export default function SchedulingPage() {
  return (
    <div className="tasks-page">
      <SchedulingHero />
      <Comparison />
      <WorkflowGrid />
      <MotionBanner />
      <AiFeatures />
      <FeaturesAndPlatform />
      <SchedulingFaq />
      <SchedulingFinal />
    </div>
  );
}
