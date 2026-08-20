import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Columns3,
  Flag,
  ListChecks,
  MessageCircle,
  Sparkles,
  Users,
} from "lucide-react";
import LogoCloud from "../shared/LogoCloud";

const highlights = [
  [Flag, "Clear direction", "Set the project status, priority, manager, members, and deadline from the start."],
  [ListChecks, "Connected tasks", "Keep every deliverable, owner, priority, and due date inside the project it supports."],
  [Users, "Shared ownership", "Give the right teammates access and make responsibility visible across the project."],
  [Columns3, "Progress at a glance", "Follow work by status and quickly see what is moving, blocked, or overdue."],
  [MessageCircle, "Project conversations", "Keep discussions and decisions connected to the project instead of scattered across tools."],
  [Sparkles, "Hash AI assistance", "Ask about project progress, priorities, workload, deadlines, and overdue tasks."],
];

const steps = [
  ["01", "Set the direction", "Create a project with a clear name, description, manager, priority, status, and target dates."],
  ["02", "Turn plans into tasks", "Break the outcome into assigned work with priorities, deadlines, statuses, and subtasks."],
  ["03", "Keep progress visible", "Review current work, discuss decisions, and use Hash AI to find what needs attention."],
];

function CTA({ secondary = false, children = "Get started" }) {
  return (
    <Link href="/signup" className={`task-btn${secondary ? " task-btn-secondary" : ""}`}>
      {children}<ArrowRight aria-hidden="true" />
    </Link>
  );
}

export default function ProjectsPage() {
  return (
    <main>
      <section className="task-hero">
        <div className="task-shell task-hero-grid">
          <div className="task-hero-copy">
            <p className="task-eyebrow">Hashboard Projects</p>
            <h1>Plan the work. Keep everyone moving.</h1>
            <p className="task-hero-lede">
              Bring goals, tasks, owners, deadlines, conversations, and progress together so every project has a clear path forward.
            </p>
            <div className="task-hero-action">
              <CTA />
              <span>Start a project<br />and move work forward.</span>
            </div>
            <div className="task-reviews">
              <span>Plans · Tasks · Owners · Deadlines · Progress</span>
            </div>
          </div>
          <div className="task-hero-visual">
            <Image
              src="/tasks/task-hero.png"
              width={815}
              height={543}
              priority
              sizes="(max-width: 1000px) 100vw, 815px"
              alt="A Hashboard project with tasks, owners, and progress"
            />
          </div>
        </div>
        <LogoCloud className="task-hero-logo-cloud" />
      </section>

      <section className="task-section task-foundation">
        <div className="task-shell">
          <header className="task-heading task-foundation-heading">
            <p className="task-eyebrow">One place for every initiative</p>
            <h2>From the first plan to the final task</h2>
            <p>Give teams the structure they need to move quickly without losing context along the way.</p>
          </header>
          <div className="task-feature-grid">
            {highlights.map(([Icon, title, body]) => (
              <article key={title}>
                <span><Icon /></span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="task-section task-ai">
        <div className="task-shell">
          <header className="task-heading">
            <p className="task-eyebrow">A simpler project rhythm</p>
            <h2>Start clearly.<br />Stay aligned.</h2>
          </header>
          <div className="task-ai-grid">
            {steps.map(([number, title, body]) => (
              <article key={number}>
                <div className="task-ai-copy">
                  <p className="task-eyebrow">Step {number}</p>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="task-section task-motion-section">
        <div className="task-motion-banner">
          <div className="task-motion-copy">
            <Image src="/hashboard.svg" width={161} height={40} alt="Hashboard" />
            <h2>Know what is moving—and what needs attention.</h2>
            <p>Keep project priorities, owners, deadlines, tasks, and conversations connected from kickoff to completion.</p>
            <div className="task-inline-actions"><CTA secondary>Start a project</CTA></div>
          </div>
          <div className="task-motion-visual">
            <Image className="task-motion-product" src="/tasks/task-hero.png" width={815} height={543} alt="Hashboard project workspace" />
          </div>
        </div>
      </section>

      <section className="task-section task-feature-section">
        <div className="task-shell task-feature-shell">
          <header className="task-heading task-feature-heading">
            <CalendarDays aria-hidden="true" />
            <h2>Ready to move your next project forward?</h2>
            <p>Create the project, invite the team, and turn the plan into visible progress.</p>
            <CTA>Get started</CTA>
          </header>
        </div>
      </section>
    </main>
  );
}
