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
    "Work is captured inside the right project",
    "Everyone knows priorities, owners, and next steps",
    "Owners, priorities, and deadlines stay visible",
    "Progress stays visible from start to finish",
  ],
};

const workflow = [
  {
    eyebrow: "Everything included",
    title: "More than a to-do list",
    body: "Add descriptions, priorities, deadlines, statuses, assignees, and subtasks so every task has the information needed to complete it.",
    image: "/tasks/feature-included.png",
    alt: "A Hashboard task with status, due date, assignees, and priority",
  },
  {
    eyebrow: "Connected work",
    title: "Keep work in the right context",
    body: "Every team task belongs to a project and workspace, helping people understand where the work fits and who can access it.",
    image: "/tasks/feature-connected.png",
    alt: "A Hashboard task shown in its project workspace",
    reverse: true,
  },
  {
    eyebrow: "Built for teams",
    title: "Clear ownership at every stage",
    body: "Assign one or more team members, move tasks through defined statuses, and keep responsibility visible throughout delivery.",
    image: "/tasks/feature-scale.png",
    alt: "Hashboard board with connected work cards",
  },
];

const taskFeatures = [
  [SlidersHorizontal, "Task details", "Add a title and description so expectations remain clear."],
  [LayoutGrid, "Statuses", "Move work through Backlog, To Do, In Progress, In Review, and Done."],
  [Workflow, "Priorities", "Mark tasks as Low, Medium, High, or Urgent."],
  [GitBranch, "Due dates", "Set deadlines and see which tasks are upcoming or overdue."],
  [ListChecks, "Subtasks", "Break big work into smaller, trackable pieces."],
  [Users, "Multiple Assignees", "Assign tasks to multiple people at once."],
  [Repeat2, "Project organization", "Keep team tasks associated with the relevant project and workspace."],
  [MessageSquareText, "Personal tasks", "Manage private action items separately from shared project work."],
  [Timer, "Hash AI support", "Summarize work, find tasks, and make permitted updates through conversation."],
];

const platform = [
  [BarChart3, "Spaces", "Organize teams and work"], [Columns3, "Projects", "Coordinate shared initiatives"],
  [GanttChart, "Task Boards", "Follow work by status"], [MessageCircle, "Chat", "Team and project conversations"],
  [Video, "Meetings", "Schedule team conversations"], [Inbox, "Notifications", "See relevant activity"],
  [FileText, "Files", "Keep project resources accessible"], [PanelsTopLeft, "Attendance", "Review working-day attendance"],
  [BookOpen, "People", "Organize employee information"], [ClipboardList, "Leave", "Manage balances and requests"],
  [CalendarDays, "Calendar", "View scheduled work"], [CalendarClock, "Scheduling", "Manage meeting bookings"],
  [Zap, "Hash AI", "Ask questions and take permitted actions"], [Clock3, "Payroll", "Manage permitted payroll workflows"],
  [Clapperboard, "Clients", "Track business relationships"], [Grid2X2, "All features", "Explore the platform"],
];

function CTAButton({ secondary = false, children = "Get started" }) {
  return <Link href="/signup" className={`task-btn${secondary ? " task-btn-secondary" : ""}`}>{children}<ArrowRight aria-hidden="true" /></Link>;
}

function TasksHero() {
  return (
    <section className="task-hero">
      <div className="task-shell task-hero-grid">
        <div className="task-hero-copy">
          <p className="task-eyebrow">Hashboard Tasks</p>
          <h1>Keep every piece of work accounted for</h1>
          <p className="task-hero-lede">Create tasks, set priorities and deadlines, assign the right people, and follow progress from backlog to completion.</p>
          <div className="task-hero-action"><CTAButton>Get started</CTAButton><span>Create your workspace<br />and organize work.</span></div>
          <div className="task-reviews">
            <Image src="/tasks/stars.png" width={97} height={20} alt="" />
            <span>Projects · Team tasks · Personal tasks</span>
            <span className="task-review-sources" aria-label="Task statuses and priorities">
              <i className="review-g2">To Do</i><i className="review-capterra">In Progress</i><i className="review-getapp">Review</i><i className="review-trustradius">Done</i><i className="review-ph">Urgent</i>
            </span>
          </div>
        </div>
        <div className="task-hero-visual">
          <Image src="/tasks/task-hero.png" width={815} height={543} priority sizes="(max-width: 1000px) 100vw, 815px" alt="Hashboard Tasks list view" />
        </div>
      </div>
      <LogoCloud className="task-hero-logo-cloud" />
    </section>
  );
}

function Comparison() {
  return <section className="task-section task-comparison"><div className="task-shell"><h2 className="task-gradient-title">A better way to work</h2><div className="task-compare-grid">
    {[["Without Hashboard Tasks", comparison.without, false], ["With Hashboard Tasks", comparison.with, true]].map(([title, items, good]) => <article className={good ? "is-with" : "is-without"} key={title}><h3>{title}</h3><ul>{items.map(item => <li key={item}>{good ? <Check /> : <X />}{item}</li>)}</ul></article>)}
  </div></div></section>;
}

function WorkflowGrid() {
  return <section className="task-section task-foundation"><div className="task-shell"><header className="task-heading task-foundation-heading"><h2>The foundation for every workflow</h2><p>Tasks power everything in Hashboard, so your work stays organized, connected,<br className="task-desktop-break" /> and moving no matter how complex it gets.</p></header><div className="task-workflow-grid">
    {workflow.map((item, index) => <article className={`task-workflow-row${item.reverse ? " reverse" : ""}`} key={item.title}>
      <span className="task-grid-arc task-grid-arc-top" aria-hidden="true" />
      <span className="task-grid-arc task-grid-arc-bottom" aria-hidden="true" />
      <div className="task-workflow-copy"><div><p className="task-eyebrow">{item.eyebrow}</p><h3>{item.title}</h3><p>{item.body}</p></div><i className="task-corner-dot top-start" /><i className="task-corner-dot top-end" /><i className="task-corner-dot bottom-start" /><i className="task-corner-dot bottom-end" /></div>
      <div className="task-workflow-image"><Image src={item.image} fill sizes="(max-width: 760px) 100vw, 50vw" alt={item.alt} /><i className="task-corner-dot top-start" /><i className="task-corner-dot top-end" /><i className="task-corner-dot bottom-start" /><i className="task-corner-dot bottom-end" /></div>
    </article>)}
  </div></div></section>;
}

function MotionBanner() {
  return <section className="task-section task-motion-section"><div className="task-motion-banner"><div className="task-motion-copy"><Image src="/hashboard.svg" width={161} height={40} alt="Hashboard" /><h2>Your team&apos;s work is already moving. Keep every task visible.</h2><p>Bring responsibilities, deadlines, and project progress together in Hashboard.</p></div><div className="task-motion-visual"><span className="task-motion-noise" aria-hidden="true" /><Image className="task-motion-product" src="/tasks/task-hero.png" width={815} height={543} sizes="(max-width: 760px) 100vw, 815px" alt="Hashboard Tasks workspace" /></div></div></section>;
}

function AiFeatures() {
  const cards = [
    ["Hash AI Actions", "Create and update tasks through conversation", "Ask Hash AI to create a task, change its status or priority, update its deadline, or assign it to a team member.", "/tasks/super-agents.png"],
    ["Workspace Answers", "Understand what needs attention", "Ask about assigned tasks, overdue work, project status, upcoming deadlines, or team workload using permitted workspace data.", "/tasks/hashboard-brain.png"],
  ];
  return <section className="task-section task-ai"><div className="task-shell"><header className="task-heading"><p className="task-eyebrow">AI-assisted work</p><h2>Find answers faster,<br />then take action</h2></header><div className="task-ai-grid">{cards.map(([eye, title, body, image]) => <article key={title}><div className="task-ai-copy"><p className="task-eyebrow">{eye}</p><h3>{title}</h3><p>{body}</p><div className="task-inline-actions"><CTAButton secondary>Get started</CTAButton><Link href="/brain" className="task-dark-link">Explore {eye}<ArrowRight /></Link></div></div><div className="task-ai-image"><Image src={image} fill sizes="(max-width: 760px) 100vw, 50vw" alt={title} /></div></article>)}</div></div></section>;
}

function FeaturesAndPlatform() {
  return <><section className="task-section task-feature-section"><div className="task-shell task-feature-shell"><header className="task-heading task-feature-heading"><h2>Plus, everything you need to get it done</h2></header><div className="task-feature-grid">{taskFeatures.map(([Icon, title, body]) => <article key={title}><span><Icon /></span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
    <section className="task-section task-platform"><div className="task-shell task-platform-shell"><header className="task-heading task-platform-heading"><p className="task-eyebrow">The Hashboard platform</p><h2>Tasks are just the beginning</h2><p>Manage tasks alongside projects, people, conversations, clients, attendance, leave, meetings, billing, and other everyday operations.</p></header><div className="task-platform-grid">            {platform.map(([Icon, title, body]) => (
              <Link
                href={title === "Dashboards" ? "/features/dashboards" : title === "Tasks" ? "/features/tasks" : title === "Scheduling" ? "/features/scheduling" : "/product"}
                key={title}
              >
                <i><Icon /></i>
                <span><b>{title}</b><small>{body}</small></span>
              </Link>
            ))}</div></div></section></>;
}

function TasksFinal() {
  const logoItems = [
    { name: "Statuses", text: "Clear statuses" },
    { name: "Priorities", text: "Visible priorities" },
    { name: "Owners", text: "Assigned owners" },
    { name: "Deadlines", text: "Due dates" },
    { name: "Subtasks", text: "Trackable subtasks" },
    { name: "Projects", text: "Project context" },
    { name: "Personal", text: "Personal tasks" },
    { name: "Team", text: "Team tasks" },
    { name: "AI", text: "Hash AI support" },
    { name: "Progress", text: "Visible progress" },
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
            <h2 className="text-3xl ml-0 md:ml-20 sm:text-4xl md:text-3xl font-bold tracking-tight text-white max-w-xl leading-[1.1]">
              Never lose track of work again.
            </h2>
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 shrink-0">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center gap-2 bg-white text-neutral-950 px-7 py-3 rounded-2xl font-bold text-base whitespace-nowrap transition-all hover:bg-neutral-100"
              >
                <span>Get started</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <div className="text-xs md:text-sm font-medium text-white/90 leading-tight whitespace-nowrap">
                Create your workspace <br /> and organize work.
              </div>
            </div>
          </div>

          {/* Infinite Marquee Slider */}
          <div className="relative w-full ml-0 md:ml-20 overflow-hidden my-8 md:my-10 [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]">
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
              alt="Hashboard Tasks footer workspace"
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
