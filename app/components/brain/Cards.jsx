import {
  ContextVisual,
  IntelligenceVisual,
  PersonalityVisual,
} from "../home/Brain2Section";

const skillRows = [
  ["Write copy", "Analyze data", "Draft emails", "Track expenses", "Manage invoices", "Track keywords"],
  ["Create briefs", "Monitor trends", "Triage bugs", "Book meetings", "Set reminders", "Track conversions"],
  ["Proofread content", "Scope projects", "Send messages", "Create dashboards", "Design mockups", "Debug code"],
  ["Update styleguides", "Survey users", "Track backlinks", "Fix errors", "Send updates", "Log feedback"],
  ["Competitive analysis", "Automate tasks", "Design logos", "Optimize content", "Troubleshoot issues", "Manage calendars"],
];

const callers = [
  { src: "/brain-2/host.png", tag: "Host", wide: true },
  { src: "/brain-2/guest1.png", tag: null },
  { src: "/brain-2/guest2.png", tag: null },
];

const completed = [
  ["Built the sales kickoff deck", "Slides agent", "9:02 AM"],
  ["Shipped the Q3 pricing page redesign", "Web agent", "9:14 AM"],
  ["Drafted the Brain² launch PRD", "Product agent", "9:21 AM"],
  ["Forecasted FY26 revenue scenarios", "Finance agent", "9:36 AM"],
  ["Designed the new onboarding flow", "Design agent", "9:48 AM"],
  ["Wrote the SOC 2 readiness checklist", "Ops agent", "10:05 AM"],
  ["Summarized 47 customer interviews", "Research agent", "10:19 AM"],
  ["Mapped the GA launch project plan", "Project agent", "10:33 AM"],
  ["Planned the 2026 hiring roadmap", "People agent", "10:51 AM"],
];

export default function Cards() {
  return (
    <section className="bn-cards" aria-label="System of intelligence">
      <div className="bn-container">
        <header className="bn-cards-header">
          <p className="bn-eyebrow bn-eyebrow-purple">Multiplayer Cowork</p>
          <div className="bn-cards-rule" aria-hidden="true" />
          <div className="bn-cards-heading-row">
            <h2 className="bn-h2">
              Cowork with Brain<sup>2</sup> feels like you aren&apos;t actually working
            </h2>
            <a href="/signup" className="bn-btn bn-btn-light">Get started</a>
          </div>
        </header>

        <ul className="bn-card-grid">
          <li className="bn-card bn-card-feature">
            <div className="bn-card-copy">
              <p className="bn-card-label">Personality</p>
              <p className="bn-card-desc">
                Brain² learns how you and your team talks: your tone, your shorthand, your
                preferences.
              </p>
            </div>
            <div className="bn-card-visual">
              <PersonalityVisual />
            </div>
          </li>

          <li className="bn-card bn-card-feature">
            <div className="bn-card-copy">
              <p className="bn-card-label">Intelligence</p>
              <p className="bn-card-desc">
                Brain² picks the best AI model for each job. One subscription. Every frontier model
                running with full context.
              </p>
            </div>
            <div className="bn-card-visual">
              <IntelligenceVisual />
            </div>
          </li>

          <li className="bn-card bn-card-feature">
            <div className="bn-card-copy">
              <p className="bn-card-label">Context</p>
              <p className="bn-card-desc">
                Brain² sees your tasks, docs, and conversations. It doesn&apos;t need a brief
                because it knows what&apos;s happening in real-time.
              </p>
            </div>
            <div className="bn-card-visual">
              <ContextVisual />
            </div>
          </li>

          <li className="bn-card bn-card-half">
            <div className="bn-card-copy">
              <p className="bn-card-label">Skills</p>
              <p className="bn-card-desc">
                Teach Brain² your exact workflows. It runs them on command, every time, no
                re-prompting.
              </p>
            </div>
            <div className="bn-card-visual">
              <div className="bn-skills">
                {skillRows.map((skills, row) => (
                  <div className="bn-skill-track" style={{ "--skill-row": row }} key={skills[0]}>
                    {[0, 1].map((g) => (
                      <div className="bn-skill-group" key={g}>
                        {skills.map((s) => (
                          <span className="bn-skill" key={s}>
                            {s}
                          </span>
                        ))}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </li>

          <li className="bn-card bn-card-half">
            <div className="bn-card-copy">
              <p className="bn-card-label">Presence</p>
              <p className="bn-card-desc">
                Brain² joins your calls, takes notes, knows your schedule, and builds context from
                every interaction automatically.
              </p>
            </div>
            <div className="bn-card-visual">
              <div className="bn-pres">
                <div className="bn-pres-call">
                  {callers.map((c) => (
                    <span className={`bn-pres-tile${c.wide ? " bn-pres-tile-wide" : ""}`} key={c.src}>
                      <img src={c.src} alt="" />
                      {c.tag ? <em className="bn-pres-tag">{c.tag}</em> : null}
                    </span>
                  ))}
                  <span className="bn-pres-note">
                    <i className="bn-pres-spinner" aria-hidden="true" />
                    Brain is taking notes
                  </span>
                </div>
                <p className="bn-pres-line">
                  The onboarding flow UX could be improved,{" "}
                  <mark>let&apos;s prioritize it</mark>
                </p>
              </div>
            </div>
          </li>

          {/* Full-width ledger of what the agents shipped this morning. */}
          <li className="bn-card bn-card-wide">
            <div className="bn-done">
              <div className="bn-done-head">
                <span className="bn-done-title">
                  <i className="bn-done-live" aria-hidden="true" />
                  Brain² tasks completed
                </span>
                <span className="bn-done-count">9 working</span>
              </div>
              <ul className="bn-done-list">
                {completed.map(([task, agent, at], index) => (
                  <li className="bn-done-row" style={{ "--row": index }} key={task}>
                    <span className="bn-done-check" aria-hidden="true">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M20 6L9 17l-5-5"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="bn-done-task">{task}</span>
                    <span className="bn-done-meta">
                      {agent} · {at}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
