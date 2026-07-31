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
      "Run complex, multi-team programs without a spreadsheet on the side.",
    replaces: ["Asana", "Monday", "Smartsheet", "MS Project"],
    agents: ["Intake Agent", "Assign Agent", "PM Agent", "Live Answers Agent"],
    outcomes: [
      "Complex project management",
      "Strategic initiative tracking",
      "Risk mitigation and escalation",
    ],
  },
  {
    id: "marketing",
    name: "Marketing",
    icon: Megaphone,
    accent: "#fa12e3",
    blurb: "Campaigns from brief to launch, with creative review built in.",
    replaces: ["Asana", "Airtable", "Miro", "Wrike"],
    agents: [
      "Brief Agent",
      "Creative Review Agent",
      "Campaign Agent",
      "Recap Agent",
    ],
    outcomes: [
      "Campaign planning and calendars",
      "Proofing and approvals",
      "Performance roll-ups by channel",
    ],
  },
  {
    id: "engineering",
    name: "Product & Engineering",
    icon: Code2,
    accent: "#0091ff",
    blurb: "Sprints, bugs, releases and specs on one connected backlog.",
    replaces: ["Jira", "Confluence", "Linear", "Shortcut"],
    agents: ["Triage Agent", "Sprint Agent", "Release Agent", "Standup Agent"],
    outcomes: [
      "Sprint planning and velocity",
      "Bug triage with auto-routing",
      "Release notes written for you",
    ],
  },
  {
    id: "it",
    name: "IT & Operations",
    icon: Server,
    accent: "#4a2fff",
    blurb: "Service requests, assets and change management in one queue.",
    replaces: ["ServiceNow", "Jira SM", "Zendesk", "Freshservice"],
    agents: ["Helpdesk Agent", "Asset Agent", "Change Agent", "SLA Agent"],
    outcomes: [
      "Ticket intake and SLA tracking",
      "Asset and vendor registers",
      "Audit-ready change logs",
    ],
  },
  {
    id: "hr",
    name: "HR & Recruiting",
    icon: Users,
    accent: "#fc6d2d",
    blurb: "Hiring pipelines and onboarding that don't live in someone's inbox.",
    replaces: ["Greenhouse", "BambooHR", "Notion", "Google Sheets"],
    agents: [
      "Candidate Agent",
      "Onboarding Agent",
      "Policy Agent",
      "Survey Agent",
    ],
    outcomes: [
      "Applicant pipelines and scorecards",
      "Day-one onboarding checklists",
      "Policy answers with citations",
    ],
  },
  {
    id: "leadership",
    name: "Leadership",
    icon: Crown,
    accent: "#078d3b",
    blurb: "One live view of the business, without asking anyone for a status.",
    replaces: ["Tableau", "PowerPoint", "Sheets", "Status meetings"],
    agents: ["Exec Brief Agent", "OKR Agent", "Risk Agent", "Forecast Agent"],
    outcomes: [
      "Portfolio health at a glance",
      "OKR progress tied to real work",
      "Automated weekly exec briefs",
    ],
  },
];

export default function SolutionCards({
  eyebrow = "Solutions",
  title = "Built for the way each team actually works",
  subtitle = "Same platform, different starting point. Every solution ships with agents tuned to that team's workflow.",
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
                  Replaces
                </p>
                <ul className="mt-2.5 flex flex-wrap gap-1.5">
                  {s.replaces.map((r) => (
                    <li
                      key={r}
                      className="rounded-md bg-bg-box px-2 py-1 text-[11.5px] font-medium text-ink-secondary line-through decoration-ink-disabled"
                    >
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <p className="text-[10.5px] font-bold tracking-[0.1em] text-ink-tertiary uppercase">
                  Agents included
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
