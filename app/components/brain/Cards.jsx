import {
  ContextVisual,
  IntelligenceVisual,
  PersonalityVisual,
} from "../home/Brain2Section";

const skillRows = [
  ["Create tasks", "Update status", "Set priority", "Change deadlines", "Assign teammates", "Find overdue work"],
  ["Summarize tasks", "Review projects", "Check workload", "List spaces", "Find clients", "Review meetings"],
  ["Check attendance", "Review leave", "View invoices", "Check expenses", "Review payroll", "List employees"],
  ["Suggest deadlines", "Compare workloads", "Explain tasks", "Find priorities", "Review progress", "Check activity"],
  ["Choose a model", "Use MCP", "Ask naturally", "Get current facts", "Respect roles", "Take permitted action"],
];

const callers = [
  { src: "/brain-2/host.png", tag: "Host", wide: true },
  { src: "/brain-2/guest1.png", tag: null },
  { src: "/brain-2/guest2.png", tag: null },
];

const completed = [
  ["Created the launch checklist task", "Hash AI action", "9:02 AM"],
  ["Updated the task priority", "Hash AI action", "9:14 AM"],
  ["Changed the project task deadline", "Hash AI action", "9:21 AM"],
  ["Assigned the task to a teammate", "Hash AI action", "9:36 AM"],
  ["Summarized today’s open work", "Hash AI answer", "9:48 AM"],
  ["Listed overdue project tasks", "Hash AI answer", "10:05 AM"],
  ["Reviewed current team workload", "Hash AI answer", "10:19 AM"],
  ["Explained the task requirements", "Hash AI answer", "10:33 AM"],
  ["Suggested a working-day deadline", "Hash AI suggestion", "10:51 AM"],
];

export default function Cards() {
  return (
    <section className="bn-cards" aria-label="System of intelligence">
      <div className="bn-container">
        <header className="bn-cards-header">
          <p className="bn-eyebrow bn-eyebrow-purple">Workspace assistance</p>
          <div className="bn-cards-rule" aria-hidden="true" />
          <div className="bn-cards-heading-row">
            <h2 className="bn-h2">
              Ask, understand, and act from one conversation
            </h2>
            <a href="/signup" className="bn-btn bn-btn-light">Get started</a>
          </div>
        </header>

        <ul className="bn-card-grid">
          <li className="bn-card bn-card-feature">
            <div className="bn-card-copy">
              <p className="bn-card-label">Built for action</p>
              <p className="bn-card-desc">
                Create and update supported work through clear, user-requested actions.
              </p>
            </div>
            <div className="bn-card-visual">
              <PersonalityVisual />
            </div>
          </li>

          <li className="bn-card bn-card-feature">
            <div className="bn-card-copy">
              <p className="bn-card-label">Model choice</p>
              <p className="bn-card-desc">
                Choose from the AI models configured and available in your workspace.
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
                Get answers from current Hashboard information you are permitted to access.
              </p>
            </div>
            <div className="bn-card-visual">
              <ContextVisual />
            </div>
          </li>

          <li className="bn-card bn-card-half">
            <div className="bn-card-copy">
              <p className="bn-card-label">Supported workflows</p>
              <p className="bn-card-desc">
                Ask questions and take supported actions across tasks, projects, people, and operations.
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
              <p className="bn-card-label">Workspace access</p>
              <p className="bn-card-desc">
                Use Hash AI within Hashboard or connect compatible AI clients through MCP.
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
                    Checking workspace data
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
                  Recent Hash AI activity
                </span>
                <span className="bn-done-count">9 examples</span>
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
