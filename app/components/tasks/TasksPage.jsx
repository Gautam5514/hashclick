import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, Check, X, SlidersHorizontal, LayoutGrid, Workflow,
  GitBranch, ListChecks, Users, Repeat2, MessageSquareText, Timer,
  BarChart3, Columns3, GanttChart, MessageCircle, Video, Inbox,
  FileText, PanelsTopLeft, BookOpen, ClipboardList, CalendarDays,
  CalendarClock, Zap, Clock3, Clapperboard, Grid2X2,
} from "lucide-react";
import TasksFaq from "./TasksFaq";
import LogoCloud from "../shared/LogoCloud";

const comparison = {
  without: [
    "Work lives in DMs, docs, meetings… and gets missed",
    "Deadlines slip because nobody knows what’s next",
    "Your brain becomes the project manager",
    "Projects stall quietly until it’s too late",
  ],
  with: [
    "Every request captured and assigned instantly",
    "Everyone knows priorities, owners, and next steps",
    "Progress stays visible without chasing updates",
    "Work moves forward automatically",
  ],
};

const workflow = [
  {
    eyebrow: "Everything included",
    title: "More than a to-do list",
    body: "ClickUp Tasks come fully loaded with everything teams need to plan, assign, track, and finish work in one place.",
    image: "/tasks/feature-included.png",
    alt: "A ClickUp task with status, dates, assignee, priority, and custom fields",
  },
  {
    eyebrow: "Connected work",
    title: "Connected to your entire workspace",
    body: "Tasks don’t live in isolation. They stay linked to docs, chat, goals, dashboards, and more so work stays clear and actionable.",
    image: "/tasks/feature-connected.png",
    alt: "Relationships connecting ClickUp tasks and documents",
    reverse: true,
  },
  {
    eyebrow: "Execution at scale",
    title: "Built to run all your work",
    body: "From daily action items to cross-team initiatives, ClickUp Tasks scale across every use case without stitching together multiple tools.",
    image: "/tasks/feature-scale.png",
    alt: "ClickUp board with connected work cards",
  },
];

const taskFeatures = [
  [SlidersHorizontal, "Custom fields", "Add dropdowns, priorities, dates, budgets, regions, deal sizes—anything your workflow needs."],
  [LayoutGrid, "Multiple views", "See your work as Lists, Boards, Calendars, Timelines, or Gantt charts."],
  [Workflow, "Automations", "Trigger status changes, assignments, and notifications automatically."],
  [GitBranch, "Dependencies", "Map blockers and get alerts when work stalls."],
  [ListChecks, "Subtasks & Checklists", "Break big work into trackable, manageable pieces."],
  [Users, "Multiple Assignees", "Assign tasks to multiple people at once."],
  [Repeat2, "Recurring Tasks", "Set once, recreates automatically on your schedule."],
  [MessageSquareText, "Comments & Clips", "Discuss work in context with mentions and clips."],
  [Timer, "Time Tracking", "Track time spent with timers and estimates."],
];

const platform = [
  [BarChart3, "Dashboards", "Visualize your data"], [Columns3, "Board view", "Kanban-style workflow"],
  [GanttChart, "Gantt", "Timeline and dependencies"], [MessageCircle, "Chat", "Real-time team messaging"],
  [Video, "SyncUp", "Video meetings & huddles"], [Inbox, "Inbox", "Centralize notifications"],
  [FileText, "Docs", "Collaborative documentation"], [PanelsTopLeft, "Whiteboards", "Visual collaboration"],
  [BookOpen, "Wiki", "Knowledge base"], [ClipboardList, "Forms", "Collect information"],
  [CalendarDays, "Calendar", "Schedule and manage time"], [CalendarClock, "Scheduling", "Automate calendar booking"],
  [Zap, "Automations", "Workflow automation"], [Clock3, "Time tracking", "Monitor time spent"],
  [Clapperboard, "Clips", "Screen recordings"], [Grid2X2, "All features", "Explore everything"],
];

function CTAButton({ secondary = false, children = "Get started. It's FREE" }) {
  return <Link href="/signup" className={`task-btn${secondary ? " task-btn-secondary" : ""}`}>{children}<ArrowRight aria-hidden="true" /></Link>;
}

function TasksHero() {
  return (
    <section className="task-hero">
      <div className="task-shell task-hero-grid">
        <div className="task-hero-copy">
          <p className="task-eyebrow">ClickUp Tasks</p>
          <h1>Never lose track of work again</h1>
          <p className="task-hero-lede">Capture every request, assign it in seconds, and always know who owns what so projects don’t stall, deadlines don’t slip, and work doesn’t disappear.</p>
          <div className="task-hero-action"><CTAButton /><span>No credit card.<br />Setup in 2 min.</span></div>
          <div className="task-reviews">
            <Image src="/tasks/stars.png" width={97} height={20} alt="4.6 out of 5 stars" />
            <span>25,000+ reviews from</span>
            <span className="task-review-sources" aria-label="G2, Capterra, GetApp, TrustRadius, and Product Hunt">
              <i className="review-g2">G2</i><i className="review-capterra">◈</i><i className="review-getapp">➤</i><i className="review-trustradius">▰</i><i className="review-ph">P</i>
            </span>
          </div>
        </div>
        <div className="task-hero-visual">
          <Image src="/tasks/task-hero.png" width={815} height={543} priority sizes="(max-width: 1000px) 100vw, 815px" alt="ClickUp Tasks list view" />
        </div>
      </div>
      <LogoCloud className="task-hero-logo-cloud" />
    </section>
  );
}

function Comparison() {
  return <section className="task-section task-comparison"><div className="task-shell"><h2 className="task-gradient-title">A better way to work</h2><div className="task-compare-grid">
    {[["Without ClickUp Tasks", comparison.without, false], ["With ClickUp Tasks", comparison.with, true]].map(([title, items, good]) => <article className={good ? "is-with" : "is-without"} key={title}><h3>{title}</h3><ul>{items.map(item => <li key={item}>{good ? <Check /> : <X />}{item}</li>)}</ul></article>)}
  </div></div></section>;
}

function WorkflowGrid() {
  return <section className="task-section task-foundation"><div className="task-shell"><header className="task-heading task-foundation-heading"><h2>The foundation for every workflow</h2><p>Tasks power everything in ClickUp, so your work stays organized, connected,<br className="task-desktop-break" /> and moving no matter how complex it gets.</p></header><div className="task-workflow-grid">
    {workflow.map((item, index) => <article className={`task-workflow-row${item.reverse ? " reverse" : ""}`} key={item.title}>
      <span className="task-grid-arc task-grid-arc-top" aria-hidden="true" />
      <span className="task-grid-arc task-grid-arc-bottom" aria-hidden="true" />
      <div className="task-workflow-copy"><div><p className="task-eyebrow">{item.eyebrow}</p><h3>{item.title}</h3><p>{item.body}</p></div><i className="task-corner-dot top-start" /><i className="task-corner-dot top-end" /><i className="task-corner-dot bottom-start" /><i className="task-corner-dot bottom-end" /></div>
      <div className="task-workflow-image"><Image src={item.image} fill sizes="(max-width: 760px) 100vw, 50vw" alt={item.alt} /><i className="task-corner-dot top-start" /><i className="task-corner-dot top-end" /><i className="task-corner-dot bottom-start" /><i className="task-corner-dot bottom-end" /></div>
    </article>)}
  </div></div></section>;
}

function MotionBanner() {
  return <section className="task-section task-motion-section"><div className="task-motion-banner"><div className="task-motion-copy"><Image src="/tasks/clickup-logo-dark.svg" width={161} height={40} alt="ClickUp" /><h2>Your team&apos;s work is already in motion. Make sure nothing falls through.</h2><p>Join 3M+ teams who report and act from the same place. No credit card. Free forever.</p></div><div className="task-motion-visual"><span className="task-motion-noise" aria-hidden="true" /><Image className="task-motion-product" src="/tasks/task-hero.png" width={815} height={543} sizes="(max-width: 760px) 100vw, 815px" alt="ClickUp Tasks workspace" /></div></div></section>;
}

function AiFeatures() {
  const cards = [
    ["Super Agents", "Your tasks, created and assigned automatically", "Super Agents capture work from chat, threads, or anywhere you work, turning conversations into structured tasks with the right owner, due date, and priority.", "/tasks/super-agents.png"],
    ["ClickUp Brain", "AI that works where you work", "Ask questions, generate updates, and create subtasks without leaving your workflow. Brain pulls context from your entire Workspace to deliver answers and take action on the spot.", "/tasks/clickup-brain.png"],
  ];
  return <section className="task-section task-ai"><div className="task-shell"><header className="task-heading"><p className="task-eyebrow">AI powered efficiency</p><h2>You focus on real work,<br />AI handles the busywork</h2></header><div className="task-ai-grid">{cards.map(([eye, title, body, image]) => <article key={title}><div className="task-ai-copy"><p className="task-eyebrow">{eye}</p><h3>{title}</h3><p>{body}</p><div className="task-inline-actions"><CTAButton secondary>Get started</CTAButton><Link href="/brain" className="task-dark-link">Explore {eye}<ArrowRight /></Link></div></div><div className="task-ai-image"><Image src={image} fill sizes="(max-width: 760px) 100vw, 50vw" alt={title} /></div></article>)}</div></div></section>;
}

function FeaturesAndPlatform() {
  return <><section className="task-section task-feature-section"><div className="task-shell task-feature-shell"><header className="task-heading task-feature-heading"><h2>Plus, everything you need to get it done</h2></header><div className="task-feature-grid">{taskFeatures.map(([Icon, title, body]) => <article key={title}><span><Icon /></span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
    <section className="task-section task-platform"><div className="task-shell task-platform-shell"><header className="task-heading task-platform-heading"><p className="task-eyebrow">The ClickUp platform</p><h2>Tasks are just the beginning</h2><p>Tasks are the connective tissue of the ClickUp platform. Docs, Dashboards, Chat, Whiteboards, and more in a single, converged app. Explore everything you unlock when your work lives in one place.</p></header><div className="task-platform-grid">            {platform.map(([Icon, title, body]) => (
              <Link
                href={title === "Dashboards" ? "/features/dashboards" : title === "Tasks" ? "/features/tasks" : "/product"}
                key={title}
              >
                <i><Icon /></i>
                <span><b>{title}</b><small>{body}</small></span>
              </Link>
            ))}</div></div></section></>;
}

function TasksFinal() {
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
          className="relative overflow-hidden rounded-[28px] md:rounded-[36px] bg-gradient-to-r from-[#7026e3] via-[#e02fa8] to-[#ff5d39] px-6 sm:px-12 lg:px-14 pt-8 sm:pt-12 lg:pt-14 shadow-2xl shadow-purple-950/20"
          style={{ paddingBottom: 0 }}
        >

          {/* Upper Header & CTA */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8">
            <h2 className="text-3xl ml-20 sm:text-4xl md:text-3xl font-bold tracking-tight text-white max-w-xl leading-[1.1]">
              Never lose track of work again.
            </h2>
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 shrink-0">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center gap-2 bg-white text-neutral-950 px-7 py-3 rounded-2xl font-bold text-base whitespace-nowrap  transition-all"
              >
                <span>Get started. It&apos;s FREE</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <div className="text-xs md:text-sm font-medium text-white/90 leading-tight whitespace-nowrap">
                Free forever. <br /> No credit card.
              </div>
            </div>
          </div>

          {/* Infinite Marquee Slider */}
          <div className="relative  w-full ml-20 overflow-hidden my-8 md:my-10 [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]">
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
              src="/tasks/task-footer.png"
              width={1240}
              height={460}
              alt="ClickUp Tasks footer workspace"
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

export default function TasksPage() {
  return (
    <div className="tasks-page">
      <TasksHero />
      <Comparison />
      <WorkflowGrid />
      <MotionBanner />
      <AiFeatures />
      <FeaturesAndPlatform />
      <TasksFaq />
      <TasksFinal />
    </div>
  );
}
