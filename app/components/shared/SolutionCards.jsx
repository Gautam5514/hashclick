import Link from "next/link";
import { ArrowRight, Bot } from "lucide-react";
import {
  Rocket,
  Megaphone,
  Code2,
  Server,
  Users,
  Crown,
} from "lucide-react";
import { Container, Section } from "../ui/Container";
import { SectionHeading } from "../ui/Bits";

export const solutions = [
  {
    id: "projects",
    name: "Project Management",
    icon: Rocket,
    accent: "#7612fa",
    blurb:
      "Organize projects, assigned tasks, deadlines, priorities, and project communication.",
    replaces: ["Projects", "Tasks", "Chat", "Calendar"],
    agents: ["Create structured projects", "Assign and update tasks", "Review progress and workload", "Discuss work in project channels"],
    outcomes: [
      "Project and task ownership",
      "Deadlines and current status",
      "Permission-aware workspace questions",
    ],
  },
  {
    id: "marketing",
    name: "Marketing",
    icon: Megaphone,
    accent: "#fa12e3",
    blurb: "Coordinate campaign projects, task ownership, due dates, leads, and team discussion.",
    replaces: ["Projects", "Tasks", "Leads", "Chat"],
    agents: [
      "Plan campaign projects",
      "Assign content tasks",
      "Track leads and activities",
      "Keep decisions in Chat",
    ],
    outcomes: [
      "Campaign project planning",
      "Clear owners and deadlines",
      "Lead and client context",
    ],
  },
  {
    id: "engineering",
    name: "Product & Engineering",
    icon: Code2,
    accent: "#0091ff",
    blurb: "Keep product projects, engineering tasks, priorities, owners, and discussions together.",
    replaces: ["Projects", "Tasks", "Priorities", "Chat"],
    agents: ["Organize delivery projects", "Assign engineering tasks", "Review overdue work", "Ask about project status"],
    outcomes: [
      "Product and engineering ownership",
      "Priority and deadline tracking",
      "Current project context",
    ],
  },
  {
    id: "it",
    name: "IT & Operations",
    icon: Server,
    accent: "#4a2fff",
    blurb: "Coordinate internal projects, operational tasks, people, schedules, and company communication.",
    replaces: ["Projects", "Tasks", "People", "Chat"],
    agents: ["Track operational projects", "Assign internal tasks", "Manage workspace members", "Review schedules and meetings"],
    outcomes: [
      "Operational task ownership",
      "Employee and workspace records",
      "Scheduled work and communication",
    ],
  },
  {
    id: "hr",
    name: "HR & Recruiting",
    icon: Users,
    accent: "#fc6d2d",
    blurb: "Manage employee profiles, attendance, leave, payroll inputs, and onboarding status.",
    replaces: ["People", "Attendance", "Leave", "Payroll"],
    agents: [
      "Maintain employee profiles",
      "Track attendance",
      "Manage leave requests",
      "Prepare payroll records",
    ],
    outcomes: [
      "Employee record management",
      "Attendance and leave workflows",
      "Salary and payroll context",
    ],
  },
  {
    id: "leadership",
    name: "Leadership",
    icon: Crown,
    accent: "#078d3b",
    blurb: "Review permitted context across projects, people, clients, leads, meetings, and financial workflows.",
    replaces: ["Projects", "People", "Clients", "Finance"],
    agents: ["Review project progress", "Check team workload", "Inspect client and lead context", "Review invoices and expenses"],
    outcomes: [
      "Current operational context",
      "Role-aware business questions",
      "Supported records in one workspace",
    ],
  },
];

export default function SolutionCards({
  eyebrow = "Solutions",
  title = "Built for the way each team actually works",
  subtitle = "The same supported Hashboard workflows, organized around each team's responsibilities.",
  headed = true,
}) {
  return (
    <Section className="bg-bg-box">
      <Container size="default">
        {headed ? (
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            subtitle={subtitle}
          />
        ) : null}

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s) => (
            <article
              key={s.id}
              id={s.id}
              className="group flex scroll-mt-28 flex-col rounded-card border border-line bg-bg-main p-7 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-[0_24px_56px_-32px_rgba(0,0,0,0.35)]"
            >
              <span
                className="flex size-12 items-center justify-center rounded-2xl"
                style={{ background: `${s.accent}14`, color: s.accent }}
              >
                <s.icon className="size-6" />
              </span>

              <h3 className="font-display mt-5 text-[20px] font-extrabold tracking-[-0.02em] text-ink">
                {s.name}
              </h3>
              <p className="mt-2.5 text-[14px] leading-relaxed text-ink-secondary">
                {s.blurb}
              </p>

              <div className="mt-6">
                <p className="text-[10.5px] font-bold tracking-[0.1em] text-ink-tertiary uppercase">
                  WORKFLOWS
                </p>
                <ul className="mt-2.5 flex flex-wrap gap-1.5">
                  {s.replaces.map((r) => (
                    <li
                      key={r}
                      className="rounded-md bg-bg-box px-2 py-1 text-[11.5px] font-medium text-ink-secondary"
                    >
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <p className="text-[10.5px] font-bold tracking-[0.1em] text-ink-tertiary uppercase">
                  SUPPORTED USES
                </p>
                <ul className="mt-2.5 space-y-1.5">
                  {s.agents.map((a) => (
                    <li
                      key={a}
                      className="flex items-center gap-2 text-[13px] font-medium text-ink"
                    >
                      <Bot className="size-3.5" style={{ color: s.accent }} />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/solutions"
                className="mt-7 inline-flex items-center gap-1.5 text-[13.5px] font-bold text-accent-blue"
              >
                Explore solution
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
