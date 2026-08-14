"use client";

import { useState } from "react";
import Link from "next/link";
import "./feature-tabs.css";

const teams = [
  {
    tab: "Projects",
    lead: "Turn plans into",
    highlight: "completed work",
    description:
      "Organize projects, assign responsibilities, and keep delivery moving from one shared workspace.",
    points: [
      "Organize work across spaces and projects",
      "Keep owners, priorities, and deadlines clear",
      "Track progress without chasing updates",
    ],
    agents: [
      { img: "agent-001", text: "Create and assign project tasks" },
      { img: "agent-002", text: "Summarize project progress" },
      { img: "agent-003", text: "Find overdue and high-priority work" },
      { img: "agent-004", text: "Update tasks through Hash AI" },
    ],
    href: "/solutions",
  },
  {
    tab: "Marketing",
    lead: "Keep every campaign",
    highlight: "moving",
    description:
      "Plan campaigns, coordinate responsibilities, and track delivery from one shared workspace.",
    points: [
      "Plan campaigns with projects and tasks",
      "Keep owners, priorities, and deadlines clear",
      "Track progress and identify overdue work",
    ],
    agents: [
      { img: "agent-001", text: "Create and assign campaign tasks" },
      { img: "agent-005", text: "Summarize campaign progress" },
      { img: "agent-006", text: "Review deadlines and team workload" },
      { img: "agent-002", text: "Update tasks through Hash AI" },
    ],
    href: "/solutions",
  },
  {
    tab: "Product & Eng",
    lead: "Build with clarity",
    highlight: "from idea to release",
    description:
      "Coordinate product and engineering work, manage priorities, and keep everyone aligned on delivery.",
    points: [
      "Plan features, fixes, and release work",
      "Assign clear owners and priorities",
      "Track progress across active projects",
    ],
    agents: [
      { img: "agent-007", text: "Create and update development tasks" },
      { img: "agent-004", text: "Check priorities and upcoming deadlines" },
      { img: "agent-008", text: "Summarize project and release progress" },
      { img: "agent-002", text: "Review workload before assigning work" },
    ],
    href: "/solutions",
  },
  {
    tab: "Operations",
    lead: "Keep internal operations",
    highlight: "on track",
    description:
      "Manage requests and recurring work with clear ownership, priorities, and deadlines.",
    points: [
      "Organize operational requests as tasks",
      "Assign work to the right team members",
      "Monitor urgent and overdue items",
    ],
    agents: [
      { img: "agent-007", text: "Create and assign support tasks" },
      { img: "agent-004", text: "Update task status and priority" },
      { img: "agent-005", text: "Find overdue operational work" },
      { img: "agent-002", text: "Summarize active requests with Hash AI" },
    ],
    href: "/solutions",
  },
  {
    tab: "HR",
    lead: "Support your people",
    highlight: "from one workspace",
    description:
      "Coordinate employee records, attendance, leave, payroll workflows, and important team activities.",
    points: [
      "Manage attendance and leave workflows",
      "Keep employee information organized",
      "Coordinate HR tasks and follow-ups",
    ],
    agents: [
      { img: "agent-001", text: "Review attendance information" },
      { img: "agent-002", text: "Check leave balances and requests" },
      { img: "agent-003", text: "Access permitted payroll information" },
      { img: "agent-004", text: "Organize employee-related tasks" },
    ],
    href: "/solutions",
  },
  {
    tab: "Leadership",
    lead: "See what needs",
    highlight: "your attention",
    description:
      "Get a clearer view of projects, workload, deadlines, clients, and business activity across your organization.",
    points: [
      "Monitor progress across teams and projects",
      "Identify overdue and high-priority work",
      "Make decisions using current workspace data",
    ],
    agents: [
      { img: "agent-001", text: "Get a workspace summary" },
      { img: "agent-002", text: "Review project and team workload" },
      { img: "agent-003", text: "Check client and invoice information" },
      { img: "agent-004", text: "Ask Hash AI for role-based insights" },
    ],
    href: "/solutions",
  },
];

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.7071 7.29289C19.0976 7.68342 19.0976 8.31658 18.7071 8.70711L10.7112 16.703L10.7076 16.7066C10.317 17.0972 9.68342 17.0976 9.29289 16.7071L5.29289 12.7071C4.90237 12.3166 4.90237 11.6834 5.29289 11.2929C5.68342 10.9024 6.31658 10.9024 6.70711 11.2929L10 14.5858L17.2929 7.29289C17.6834 6.90237 18.3166 6.90237 18.7071 7.29289Z"
        fill="#838383"
      />
    </svg>
  );
}

export default function FeatureTabs() {
  const [active, setActive] = useState(0);
  const team = teams[active];

  return (
    <section className="ft-wrapper" data-testid="home-teams-tab">
      <div className="ft-headline">
        <h2>One workspace for every team</h2>
      </div>
      <div className="ft-subtext">
        <p>Plan work, stay aligned, and get answers with Hashboard and Hash AI.</p>
      </div>

      <div className="ft-container">
        <div className="ft-tab-nav" role="tablist" aria-label="Teams">
          {teams.map((t, i) => (
            <button
              key={t.tab}
              type="button"
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={`ft-tab-btn${i === active ? " ft-tab-btn-active" : ""}`}
            >
              <div className="ft-tab-btn-content">{t.tab}</div>
            </button>
          ))}
          <Link href="/teams" className="ft-tab-btn">
            <div className="ft-tab-btn-content">See all teams</div>
          </Link>
        </div>

        <div className="ft-tab-content-wrapper">
          <div className="ft-tab-content" key={team.tab}>
            <div className="ft-overview">
              <div>
                <div className="ft-content-title">
                  <h3>
                    {team.lead} <span>{team.highlight}</span>
                  </h3>
                </div>
                <p className="ft-description">{team.description}</p>
              </div>

              <div>
                <div className="ft-replaces">
                  <h4 className="ft-replaces-title">BUILT FOR</h4>
                </div>

                <ul className="ft-points">
                  {team.points.map((point) => (
                    <li key={point} className="ft-point">
                      <CheckIcon />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="ft-card-wrapper">
              <div className="ft-card">
                <ul className="ft-card-list">
                  {team.agents.map((agent) => (
                    <li key={agent.text} className="ft-card-item">
                      <div className="ft-card-icon">
                        <picture>
                          <source srcSet={`/teams/${agent.img}.avif`} type="image/avif" />
                          <source srcSet={`/teams/${agent.img}.webp`} type="image/webp" />
                          <img
                            src={`/teams/${agent.img}.webp`}
                            alt=""
                            width="64"
                            height="64"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <div>{agent.text}</div>
                    </li>
                  ))}
                </ul>
                <Link href={team.href} className="ft-explore">
                  Explore solution →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
