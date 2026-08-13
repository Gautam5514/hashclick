"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, Check, X, Link2, Bell, Globe,
  Shuffle, CalendarClock, Users, Clock,
  BarChart3, Columns3, GanttChart, MessageCircle, Video, Inbox,
  FileText, PanelsTopLeft, BookOpen, ClipboardList, CalendarDays,
  Zap, Clock3, Clapperboard, Grid2X2,
} from "lucide-react";
import SchedulingFaq from "./SchedulingFaq";
import LogoCloud from "../shared/LogoCloud";

const comparison = {
  without: [
    "Endless email threads just to land on a meeting time",
    "Double-bookings because availability lives in your head",
    "Manually re-typing the same slots for every invitee",
    "No easy way to split bookings across a team",
  ],
  with: [
    "Share one link, invitees pick a slot instantly",
    "Live sync with your calendar rules out double-booking",
    "Buffers, limits, and notice windows protect your day",
    "Round-robin and collective booking route work automatically",
  ],
};

const workflow = [
  {
    eyebrow: "Booking Pages",
    title: "One link, zero back-and-forth",
    body: "Share a personal or team booking page that only shows the times you're actually free. Invitees pick a slot and it's confirmed instantly on both calendars.",
    image: "/calendar/calendar-feature-1.png",
    alt: "Hashboard Scheduling booking page",
  },
  {
    eyebrow: "Smart Availability",
    title: "Rules that protect your time",
    body: "Set buffers between meetings, daily booking limits, and minimum notice periods so your calendar never gets overrun by last-minute requests.",
    image: "/calendar/calendar-feature-2.png",
    alt: "Availability rules in Hashboard Scheduling",
    reverse: true,
  },
  {
    eyebrow: "Team Booking",
    title: "Route meetings across your team",
    body: "Use round-robin to balance bookings evenly, or collective scheduling to find one slot that works for every required host at once.",
    image: "/calendar/calendar-feature-3.png",
    alt: "Team round-robin scheduling in Hashboard",
  },
];

const schedulingFeatures = [
  [Link2, "Custom Booking Links", "Create personal or team booking pages branded to match your workflow."],
  [Clock, "Buffers & Limits", "Add gaps between meetings and cap daily bookings to protect focus time."],
  [Shuffle, "Round-Robin Routing", "Distribute inbound meetings evenly across a team automatically."],
  [Users, "Collective Scheduling", "Find one slot that works across every required attendee's calendar."],
  [Bell, "Automated Reminders", "Send confirmation emails and reminders so no one misses a booking."],
  [Globe, "Time Zone Detection", "Booking pages auto-adjust to each invitee's local time zone."],
];

const platform = [
  [CalendarClock, "Scheduling", "Automate calendar booking"], [CalendarDays, "Calendar", "Schedule and manage time"],
  [FileText, "Docs", "Connected documentation"], [BarChart3, "Dashboards", "Visualize your data"],
  [Columns3, "Board view", "Kanban-style workflow"], [GanttChart, "Gantt", "Timeline and dependencies"],
  [MessageCircle, "Chat", "Real-time team messaging"], [Video, "SyncUp", "Video meetings & huddles"],
  [Inbox, "Inbox", "Centralize notifications"], [PanelsTopLeft, "Whiteboards", "Visual collaboration"],
  [BookOpen, "Wiki", "Knowledge base"], [ClipboardList, "Forms", "Collect information"],
  [Zap, "Automations", "Workflow automation"], [Clock3, "Time tracking", "Monitor time spent"],
  [Clapperboard, "Clips", "Screen recordings"], [Grid2X2, "All features", "Explore everything"],
];

function CTAButton({ secondary = false, children = "Get started. Now!" }) {
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
          <h1>Let people book time with you—automatically</h1>
          <p className="task-hero-lede">
            Share a booking link that only shows real availability. Invitees pick a slot, both calendars update instantly, and you never chase a meeting time again.
          </p>
          <div className="task-hero-action">
            <CTAButton />
            <span>Start 7 days<br />Free Trial.</span>
          </div>
          <div className="task-reviews">
            <Image src="/tasks/stars.png" width={97} height={20} alt="4.6 out of 5 stars" />
            <span>25,000+ reviews from</span>
            <span className="task-review-sources" aria-label="G2, Capterra, GetApp, TrustRadius, and Product Hunt">
              <i className="review-g2">G2</i><i className="review-capterra">◈</i><i className="review-getapp">➤</i><i className="review-trustradius">▰</i><i className="review-ph">P</i>
            </span>
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
      <LogoCloud className="task-hero-logo-cloud" />
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
          <h2>Booking that runs itself</h2>
          <p>
            Hashboard Scheduling turns your live availability into a link anyone<br className="task-desktop-break" /> can book, with rules that keep your calendar sane.
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
          <h2>Your bookings, handled automatically.</h2>
          <p>Join 3M+ teams who fill their calendar without the back-and-forth. Start your 7-day free trial.</p>
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
    ["Hashboard Brain", "Ask AI to find the best slot across every calendar", "Hashboard Brain scans host and invitee availability, suggests the fastest slot to close a meeting, and can send the booking link for you.", "/calendar/ai-calendar-1.png"],
    ["Smart Follow-ups", "Auto-generated reminders and reschedule links", "Never lose a booking to a no-show. Hashboard Brain sends timely reminders and one-click reschedule links so meetings actually happen.", "/calendar/ai-calendar-2.png"],
  ];
  return (
    <section className="task-section task-ai">
      <div className="task-shell">
        <header className="task-heading">
          <p className="task-eyebrow">AI Powered Booking</p>
          <h2>Smarter scheduling<br />powered by Hashboard Brain</h2>
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
            <h2>Plus, everything you need to fill your calendar</h2>
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
            <h2>Scheduling is just the beginning</h2>
            <p>Scheduling turns availability into action. Combine it with Calendar, Tasks, Docs, Dashboards, Chat, and Whiteboards in a single converged app. Explore everything you unlock when your work lives in one place.</p>
          </header>
          <div className="task-platform-grid">
            {platform.map(([Icon, title, body]) => (
              <Link
                href={title === "Scheduling" ? "/features/scheduling" : title === "Calendar" ? "/features/calendar" : title === "Dashboards" ? "/features/dashboards" : title === "Tasks" ? "/features/tasks" : title === "Chat" ? "/features/chat" : title === "Docs" || title === "Wiki" ? "/features/docs" : "/product"}
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
    { name: "Adobe", text: "Adobe" },
    { name: "American", text: "American" },
    { name: "NBCUniversal", text: "NBCUniversal" },
    { name: "amazon", text: "amazon" },
    { name: "NVIDIA", text: "NVIDIA" },
    { name: "wayfair", text: "wayfair" },
    { name: "verizon", text: "verizon" },
    { name: "Spotify", text: "Spotify" },
    { name: "Deloitte.", text: "Deloitte." },
    { name: "Pfizer", text: "Pfizer" },
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
              Never chase a meeting time again.
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
                Start 7 Days <br className="hidden sm:inline" /> Free Trial.
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
