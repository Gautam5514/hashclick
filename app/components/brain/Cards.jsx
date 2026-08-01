const personality = [
  ["tone", '"direct, no fluff, like a sharp coworker"'],
  ["sprint_methods", '"story points, fibonacci"'],
  ["reports_to", '"VP Engineering, weekly on Mondays"'],
  ["prefers", '"tables over bullet points"'],
  ["projects", '"Brain 2.0, Platform Migration, Q2"'],
  ["timezone", '"PST, don\'t schedule before 10am"'],
  ["tools", '"GitHub, Figma, Linear, Notion"'],
];

const models = [
  { name: "Brain", icon: "/brain-2/brain.svg" },
  { name: "GPT", icon: "/brain-2/logos/chatgpt.svg" },
  { name: "Claude Opus", icon: "/brain-2/logos/claude.svg" },
  { name: "Gemini", icon: "/brain-2/logos/gemini.svg" },
];

const skills = [
  "Write copy",
  "Analyze data",
  "Draft emails",
  "Track expenses",
  "Manage invoices",
  "Track keywords",
  "Create agendas",
  "Manage projects",
];

export default function Cards() {
  return (
    <section className="bn-cards" aria-label="System of intelligence">
      <div className="bn-container">
        <header className="bn-cards-header">
          <p className="bn-eyebrow bn-eyebrow-purple">Multiplayer Cowork</p>
          <h2 className="bn-h2">
            Cowork with Brain<sup>2</sup> feels like you aren&apos;t actually working
          </h2>
          <a href="/signup" className="bn-btn bn-btn-primary bn-btn-inline">
            Get started
          </a>
        </header>

        <ul className="bn-card-grid">
          <li className="bn-card">
            <div className="bn-card-copy">
              <p className="bn-card-label">Personality</p>
              <p className="bn-card-desc">
                Brain² learns how you and your team talks: your tone, your shorthand, your
                preferences.
              </p>
            </div>
            <div className="bn-card-visual">
              <div className="bn-per-panel">
                <span className="bn-per-glow" aria-hidden="true" />
                <div className="bn-per-rows">
                  {personality.map(([k, v]) => (
                    <div className="bn-per-row" key={k}>
                      <span className="bn-per-key">{k}</span>
                      <span className="bn-per-val">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </li>

          <li className="bn-card">
            <div className="bn-card-copy">
              <p className="bn-card-label">Intelligence</p>
              <p className="bn-card-desc">
                Brain² picks the best AI model for each job. One subscription. Every frontier model
                running with full context.
              </p>
            </div>
            <div className="bn-card-visual">
              <div className="bn-int-menu">
                <p className="bn-int-heading">Best models</p>
                <div className="bn-int-list">
                  <span className="bn-int-selection" />
                  {models.map((m) => (
                    <div className="bn-int-row" key={m.name}>
                      <img src={m.icon} width="16" height="16" alt="" />
                      <span>{m.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </li>

          <li className="bn-card">
            <div className="bn-card-copy">
              <p className="bn-card-label">Context</p>
              <p className="bn-card-desc">
                Brain² sees your tasks, docs, and conversations. It doesn&apos;t need a brief
                because it knows what&apos;s happening in real-time.
              </p>
            </div>
            <div className="bn-card-visual">
              <div className="bn-ctx-scene">
                {[0, 1, 2, 3].map((i) => (
                  <div className="bn-ctx-window" key={i}>
                    <span className="bn-ctx-dots">
                      <i />
                      <i />
                      <i />
                    </span>
                  </div>
                ))}
                <div className="bn-ctx-brain">
                  <img src="/brain-2/brain.svg" width="28" height="28" alt="" />
                </div>
              </div>
            </div>
          </li>

          <li className="bn-card">
            <div className="bn-card-copy">
              <p className="bn-card-label">Skills</p>
              <p className="bn-card-desc">
                Teach Brain² your exact workflows. It runs them on command, every time, no
                re-prompting.
              </p>
            </div>
            <div className="bn-card-visual">
              <div className="bn-skills">
                {[0, 1].map((row) => (
                  <div className={`bn-skill-track${row ? " bn-skill-track-rev" : ""}`} key={row}>
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
        </ul>
      </div>
    </section>
  );
}
