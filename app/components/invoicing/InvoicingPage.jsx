"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, BarChart3, Bell, BookOpen, CalendarClock, CalendarDays, Check, Clapperboard, ClipboardList, Clock3, Columns3, CreditCard, FileSpreadsheet, FileText, GanttChart, Globe, Grid2X2, Inbox, LineChart, MessageCircle, PanelsTopLeft, Repeat2, Video, X, Zap,
} from "lucide-react";
import InvoicingFaq from "./InvoicingFaq";
import LogoCloud from "../shared/LogoCloud";

const comparison = {
  without: [
    "Billing terms disconnected from clients and projects",
    "Line items and tax calculations managed separately",
    "Invoice numbers assigned without a consistent sequence",
    "Recorded payments separated from invoice status",
  ],
  with: [
    "Invoices created from client billing agreements",
    "Editable line items, dates, notes, and tax details",
    "Controlled finalization with company invoice numbering",
    "Payments recorded against the correct invoice",
  ],
};

const workflow = [
  {
    eyebrow: "Draft Invoices",
    title: "Build invoices from agreed billing terms",
    body: "Create a draft from a client billing agreement, then add ordered line items with quantities, unit prices, descriptions, and optional project links.",
    image: "/docs/docs-feature-1.png",
    alt: "Branded invoice generation in Hashboard",
  },
  {
    eyebrow: "Invoice Finalization",
    title: "Review first, number when ready",
    body: "Edit eligible drafts, validate totals and agreement limits, then finalize the invoice with the applicable company sequence and fiscal-year rules.",
    image: "/docs/docs-feature-2.png",
    alt: "Recurring billing schedule in Hashboard",
    reverse: true,
  },
  {
    eyebrow: "Recorded Payments",
    title: "Keep payment progress tied to the invoice",
    body: "Record payment amount, method, reference, note, and date. Hashboard updates the invoice to partially paid or paid based on the recorded total.",
    image: "/docs/docs-feature-3.png",
    alt: "Payment tracking dashboard in Hashboard",
  },
];

const invoicingFeatures = [
  [FileSpreadsheet, "Invoice line items", "Set quantities, prices, descriptions, order, and optional project context."],
  [Repeat2, "Billing agreements", "Use one-time or recurring agreements as the basis for invoices."],
  [CreditCard, "Payment records", "Record cash, bank transfer, UPI, cheque, or other payment methods."],
  [Bell, "Payment status", "Track finalized, partially paid, paid, cancelled, and void states."],
  [Globe, "Currency and tax mode", "Carry the agreement currency and GST or non-GST treatment into billing."],
  [LineChart, "Amounts and balances", "Review subtotal, tax, total, paid amount, and remaining payment context."],
];

const platform = [
  [FileSpreadsheet, "Invoicing", "Bill clients and get paid"],
  [BarChart3, "Clients", "Keep customer context"],
  [Columns3, "Tasks", "Assign and track work"],
  [GanttChart, "Projects", "Connect delivery context"],
  [MessageCircle, "Chat", "Real-time team messaging"],
  [Video, "Meetings", "Manage customer bookings"],
  [Inbox, "Notifications", "Keep up with activity"],
  [FileText, "Agreements", "Define billing terms"],
  [PanelsTopLeft, "Spaces", "Organize teams and access"],
  [BookOpen, "People", "Manage employee records"],
  [ClipboardList, "Leads", "Track prospects"],
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

function InvoicingHero() {
  return (
    <section className="task-hero">
      <div className="task-shell task-hero-grid">
        <div className="task-hero-copy">
          <p className="task-eyebrow">HASHBOARD INVOICING</p>
          <h1>Create invoices faster. Track every payment.</h1>
          <p className="task-hero-lede">
            Turn agreed billing terms into clear invoices, send work forward, and keep payment progress connected to every client.
          </p>
          <div className="task-hero-action">
            <CTAButton />
            <span>Set up your<br />workspace.</span>
          </div>
          <div className="task-reviews">
            <span>Clients, agreements, invoices, projects, and payments connected</span>
          </div>
        </div>
        <div className="task-hero-visual">
          <Image
            src="/docs/docs-hero.png"
            width={815}
            height={543}
            priority
            sizes="(max-width: 1000px) 100vw, 815px"
            alt="Hashboard Invoicing view"
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
        <h2 className="task-gradient-title">A better way to bill clients</h2>
        <div className="task-compare-grid">
          {[["Without Hashboard Invoicing", comparison.without, false], ["With Hashboard Invoicing", comparison.with, true]].map(([title, items, good]) => (
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
          <h2>A controlled path from agreement to payment</h2>
          <p>
            Keep invoice terms, line items, tax treatment, numbering, payment records, and client context together.
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
          <h2>Invoicing with a clear audit trail.</h2>
          <p>Prepare drafts, finalize official invoice numbers, and record payments against the right client agreement.</p>
        </div>
        <div className="task-motion-visual">
          <span className="task-motion-noise" aria-hidden="true" />
          <Image className="task-motion-product" src="/docs/docs-hero.png" width={815} height={543} sizes="(max-width: 760px) 100vw, 815px" alt="Hashboard Invoicing workspace" />
        </div>
      </div>
    </section>
  );
}

function AiFeatures() {
  const cards = [
    ["Invoice Context", "Review billing records with the right relationships", "Keep each invoice connected to its company, client, billing agreement, optional project, line items, and payment history.", "/docs/ai-feature-1.png"],
    ["Controlled Updates", "Protect finalized financial records", "Drafts and finalized invoices support defined edits, while paid, cancelled, and void invoices remain protected from unsupported changes.", "/docs/ai-feature-2.png"],
  ];
  return (
    <section className="task-section task-ai">
      <div className="task-shell">
        <header className="task-heading">
          <p className="task-eyebrow">Connected billing records</p>
          <h2>Know the source.<br />Track every change.</h2>
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
            <h2>Plus, everything you need for invoicing</h2>
          </header>
          <div className="task-feature-grid">
            {invoicingFeatures.map(([Icon, title, body]) => (
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
            <h2>Invoicing connects to business operations</h2>
            <p>Keep invoices alongside clients, agreements, projects, expenses, leads, meetings, tasks, and related company workflows.</p>
          </header>
          <div className="task-platform-grid">
            {platform.map(([Icon, title, body]) => (
              <Link
                href={title === "Invoicing" ? "/features/invoicing" : title === "Dashboards" ? "/features/dashboards" : title === "Chat" ? "/features/chat" : title === "Docs" ? "/features/docs" : title === "Wiki" ? "/features/docs" : title === "Calendar" ? "/features/calendar" : title === "Scheduling" ? "/features/scheduling" : "/product"}
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

function InvoicingFinal() {
  const logoItems = [
    { name: "Clients", text: "Clients" },
    { name: "Agreements", text: "Agreements" },
    { name: "Invoices", text: "Invoices" },
    { name: "Payments", text: "Payments" },
    { name: "Projects", text: "Projects" },
    { name: "Expenses", text: "Expenses" },
    { name: "Leads", text: "Leads" },
    { name: "Meetings", text: "Meetings" },
    { name: "Tasks", text: "Tasks" },
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
              Invoicing, made simple.
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
              src="/docs/docs-footer.png"
              width={1240}
              height={460}
              alt="Hashboard Invoicing footer workspace"
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

export default function InvoicingPage() {
  return (
    <div className="tasks-page">
      <InvoicingHero />
      <Comparison />
      <WorkflowGrid />
      <MotionBanner />
      <AiFeatures />
      <FeaturesAndPlatform />
      <InvoicingFaq />
      <InvoicingFinal />
    </div>
  );
}
