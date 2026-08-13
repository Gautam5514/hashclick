"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, BarChart3, BookOpen, CalendarClock, CalendarDays, Check, Clapperboard, ClipboardCheck, ClipboardList, Clock3, Columns3, FileText, GanttChart, Grid2X2, HandCoins, Inbox, MessageCircle, PanelsTopLeft, PieChart, Receipt, Tag, Video, Wallet, X, Zap,
} from "lucide-react";
import ExpensesFaq from "./ExpensesFaq";
import LogoCloud from "../shared/LogoCloud";

const comparison = {
  without: [
    "Receipts scattered across email, Slack, and shoeboxes",
    "Approvals stuck waiting on someone to check a spreadsheet",
    "No real-time view of budget versus actual spend",
    "Reimbursements delayed for weeks at a time",
  ],
  with: [
    "Snap a receipt and it’s logged, categorized, and searchable",
    "Approvals route automatically to the right manager",
    "Live budgets show spend the moment it happens",
    "Reimbursements clear in days, not weeks",
  ],
};

const workflow = [
  {
    eyebrow: "Receipt Capture",
    title: "Snap a photo, done",
    body: "Photograph a receipt and Hashboard extracts the vendor, amount, and date automatically—no manual entry required.",
    image: "/dashboards/dashboard-feature-1.png",
    alt: "Receipt capture in Hashboard Expenses",
  },
  {
    eyebrow: "Approval Workflows",
    title: "Route spend to the right approver",
    body: "Expenses route automatically based on amount, category, or team, so nothing sits waiting in an inbox.",
    image: "/dashboards/dashboard-feature-2.png",
    alt: "Expense approval workflow in Hashboard",
    reverse: true,
  },
  {
    eyebrow: "Budget Tracking",
    title: "See spend against budget live",
    body: "Every approved expense updates the relevant budget instantly, so finance always knows where the company stands.",
    image: "/dashboards/dashboard-feature-3.png",
    alt: "Budget tracking dashboard in Hashboard",
  },
];

const expensesFeatures = [
  [Receipt, "Receipt Capture", "Photograph or forward receipts and Hashboard logs the details."],
  [ClipboardCheck, "Approval Workflows", "Route expenses to the right approver automatically by rule."],
  [Wallet, "Budget Tracking", "Watch spend against budget update in real time."],
  [Tag, "Category Rules", "Auto-categorize expenses by vendor, team, or project."],
  [HandCoins, "Fast Reimbursements", "Push approved reimbursements out in days, not weeks."],
  [PieChart, "Expense Reports", "Break down spend by team, category, or time period instantly."],
];

const platform = [
  [Receipt, "Expenses", "Track spend and receipts"],
  [BarChart3, "Dashboards", "Visualize your data"],
  [Columns3, "Board view", "Kanban-style workflow"],
  [GanttChart, "Gantt", "Timeline and dependencies"],
  [MessageCircle, "Chat", "Real-time team messaging"],
  [Video, "SyncUp", "Video meetings & huddles"],
  [Inbox, "Inbox", "Centralize notifications"],
  [FileText, "Docs", "Collaborative documentation"],
  [PanelsTopLeft, "Whiteboards", "Visual collaboration"],
  [BookOpen, "Wiki", "Knowledge base"],
  [ClipboardList, "Forms", "Collect information"],
  [CalendarDays, "Calendar", "Schedule and manage time"],
  [CalendarClock, "Scheduling", "Automate calendar booking"],
  [Zap, "Automations", "Workflow automation"],
  [Clock3, "Time tracking", "Monitor time spent"],
  [Clapperboard, "Clips", "Screen recordings"],
  [Grid2X2, "All features", "Explore everything"],
];

function CTAButton({ secondary = false, children = "Get started. Now!" }) {
  return (
    <Link href="/signup" className={`task-btn${secondary ? " task-btn-secondary" : ""}`}>
      {children}
      <ArrowRight aria-hidden="true" />
    </Link>
  );
}

function ExpensesHero() {
  return (
    <section className="task-hero">
      <div className="task-shell task-hero-grid">
        <div className="task-hero-copy">
          <p className="task-eyebrow">HASHBOARD EXPENSES</p>
          <h1>Track spend without chasing receipts</h1>
          <p className="task-hero-lede">
            Capture receipts, route approvals, and see budgets in real time. Hashboard Expenses keeps company spend visible without a single spreadsheet.
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
            src="/dashboards/dashboard-hero.png"
            width={815}
            height={543}
            priority
            sizes="(max-width: 1000px) 100vw, 815px"
            alt="Hashboard Expenses tracking view"
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
        <h2 className="task-gradient-title">A better way to manage spend</h2>
        <div className="task-compare-grid">
          {[["Without Hashboard Expenses", comparison.without, false], ["With Hashboard Expenses", comparison.with, true]].map(([title, items, good]) => (
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
          <h2>Everything Expenses needs, in one place</h2>
          <p>
            Hashboard Expenses keeps everything connected, so nothing falls through the cracks.
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
          <h2>Expenses, handled automatically.</h2>
          <p>Join 3M+ teams who run expenses without the busywork. Start your 7-day free trial.</p>
        </div>
        <div className="task-motion-visual">
          <span className="task-motion-noise" aria-hidden="true" />
          <Image className="task-motion-product" src="/dashboards/dashboard-hero.png" width={815} height={543} sizes="(max-width: 760px) 100vw, 815px" alt="Hashboard Expenses workspace" />
        </div>
      </div>
    </section>
  );
}

function AiFeatures() {
  const cards = [
    ["Hashboard Brain", "Ask AI about spend and budgets", "Ask Brain which team is closest to going over budget this quarter, and get a direct answer pulled straight from your live data.", "/tasks/super-agents.png"],
    ["Smart Categorization", "Receipts sorted automatically", "Hashboard Brain reads each receipt and assigns the right category and budget line, cutting manual coding to zero.", "/tasks/clickup-brain.png"],
  ];
  return (
    <section className="task-section task-ai">
      <div className="task-shell">
        <header className="task-heading">
          <p className="task-eyebrow">AI Powered Expense Tracking</p>
          <h2>Work smarter,<br />powered by Hashboard Brain</h2>
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
            <h2>Plus, everything you need for expenses</h2>
          </header>
          <div className="task-feature-grid">
            {expensesFeatures.map(([Icon, title, body]) => (
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
            <h2>Expenses is just the beginning</h2>
            <p>Expenses connects to the rest of your workspace. Combine it with Tasks, Docs, and Dashboards in a single converged app. Explore everything you unlock when your work lives in one place.</p>
          </header>
          <div className="task-platform-grid">
            {platform.map(([Icon, title, body]) => (
              <Link
                href={title === "Expenses" ? "/features/expenses" : title === "Dashboards" ? "/features/dashboards" : title === "Chat" ? "/features/chat" : title === "Docs" ? "/features/docs" : title === "Wiki" ? "/features/docs" : title === "Calendar" ? "/features/calendar" : title === "Scheduling" ? "/features/scheduling" : "/product"}
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

function ExpensesFinal() {
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
              Expenses, made simple.
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
              src="/dashboards/dashboard-footer.png"
              width={1240}
              height={460}
              alt="Hashboard Expenses footer workspace"
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

export default function ExpensesPage() {
  return (
    <div className="tasks-page">
      <ExpensesHero />
      <Comparison />
      <WorkflowGrid />
      <MotionBanner />
      <AiFeatures />
      <FeaturesAndPlatform />
      <ExpensesFaq />
      <ExpensesFinal />
    </div>
  );
}
