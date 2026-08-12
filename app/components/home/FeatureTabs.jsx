"use client";

import { useState } from "react";
import Link from "next/link";
import "./feature-tabs.css";
import { REPLACES_LOGOS } from "./replaces-logos";

const teams = [
  {
    tab: "Projects",
    lead: "Deliver projects on time,",
    highlight: "every time",
    description:
      "Get your team, department, and company running smoothly with the industry's best project management solution.",
    replaces: ["Monday", "Asana", "Smartsheet", "Wrike"],
    points: [
      "Manage complex projects at scale",
      "Bring strategic initiatives to life",
      "Detect and mitigate project risks",
    ],
    agents: [
      { img: "agent-001", text: "Intake Agent standardizes project kickoff" },
      { img: "agent-002", text: "Assign Agent determines task owners" },
      { img: "agent-003", text: "PM Agent tracks deliverables + timelines" },
      { img: "agent-004", text: "Live Answers Agent keeps everyone informed" },
    ],
    href: "/solutions",
  },
  {
    tab: "Marketing",
    lead: "Maximize marketing's",
    highlight: "impact and results",
    description:
      "Coordinate content, creative, and campaigns in a single workspace purpose-built for marketers.",
    replaces: ["Monday", "Asana", "Notion", "Slack"],
    points: [
      "Execute campaigns with velocity",
      "Coordinate + run seamless events",
      "Eliminate content + creative bottlenecks",
    ],
    agents: [
      { img: "agent-001", text: "Brief Agent creates campaign briefs" },
      { img: "agent-005", text: "Content Agent drafts promo copy" },
      { img: "agent-006", text: "Brand Agent applies guidelines" },
      { img: "agent-002", text: "Live Intel Agent updates core docs" },
    ],
    href: "/solutions",
  },
  {
    tab: "Product & Eng",
    lead: "Ship faster,",
    highlight: "more reliable software",
    description:
      "Streamline the entire strategy + dev process in a single, connected workspace.",
    replaces: ["Jira", "Slack", "Notion", "Trello"],
    points: [
      "Plan + execute the roadmap",
      "Identify + resolve bugs",
      "Integrate with AI coders",
    ],
    agents: [
      { img: "agent-007", text: "PRD Agent creates docs from voice notes" },
      { img: "agent-004", text: "Triage Agent prioritizes bugs" },
      { img: "agent-008", text: "Live Answers Agent keeps everyone informed" },
      { img: "agent-002", text: "Codegen Agent produces quality code" },
    ],
    href: "/solutions",
  },
  {
    tab: "IT",
    lead: "Create the systems,",
    highlight: "for scale",
    description:
      "Give IT and operations one connected system for assets, requests, contracts, and vendors.",
    replaces: ["Jira", "Slack", "Notion", "Trello"],
    points: [
      "Manage vendors + budgeting",
      "Run tight asset management",
      "Streamline contracts + procurement",
    ],
    agents: [
      { img: "agent-007", text: "Assets Agent tracks inventory" },
      { img: "agent-004", text: "RFP Agent manages reqs docs" },
      { img: "agent-005", text: "Contracts Agent standardizes terms" },
      { img: "agent-002", text: "Live Intel Agent identifies redundancies" },
    ],
    href: "/solutions",
  },
  {
    tab: "HR",
    lead: "Build the process",
    highlight: "that power your people",
    description:
      "Run onboarding, training, and employee feedback from one workspace your whole company already uses.",
    replaces: ["Monday", "Asana", "Slack", "Notion"],
    points: [
      "Streamline employee onboarding",
      "Roll out effective training programs",
      "Keep a pulse on employee NPS",
    ],
    agents: [
      { img: "agent-001", text: "Onboarding Agent monitors progress + feedback" },
      { img: "agent-002", text: "Pulse Check Agent collects employee sentiment" },
      { img: "agent-003", text: "Trainer Agent analyzes course performance" },
      { img: "agent-004", text: "Live Answers Agent provides real-time info" },
    ],
    href: "/solutions",
  },
  {
    tab: "Leadership",
    lead: "Close the strategy-",
    highlight: "execution gap",
    description:
      "Get your company rowing in the same direction with one AI workspace to define, execute, and track your top-line goals.",
    replaces: ["Monday", "Asana", "Slack", "Notion"],
    points: [
      "Set the strategy and actually execute it",
      "Drive organizational focus with tighter alignment",
      "Enforce accountability and ownership with ultimate visibility",
    ],
    agents: [
      { img: "agent-001", text: "Goal Reminder Agent removes tedious check-ins" },
      { img: "agent-002", text: "Alignment Agent ensures cross-functional cohesion" },
      { img: "agent-003", text: "Key Results Agent suggest relevant KPIs" },
      { img: "agent-004", text: "Status Update Agent gives always-on visibility" },
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
        <h2>AI solutions for every team</h2>
      </div>
      <div className="ft-subtext">
        <p>Your key workflows, powered by Hashboard Agents.</p>
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
                  <h4 className="ft-replaces-title">REPLACES</h4>
                  <div className="ft-replaces-list">
                    {team.replaces.map((name) => (
                      <div
                        key={name}
                        className="ft-replaces-item"
                        aria-label={name}
                        dangerouslySetInnerHTML={{ __html: REPLACES_LOGOS[name] }}
                      />
                    ))}
                  </div>
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
