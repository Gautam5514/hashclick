import "./brain.css";
import Image from "next/image";
import { ICON_APPLE, ICON_WINDOWS, ICON_ANDROID } from "../home/brain2-svgs";

const checks = [
  "Answers grounded in permitted workspace data",
  "Choose from configured AI models",
  "Create and update work conversationally",
];

const CHROME =
  '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9.2" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="12" r="3.4" stroke="currentColor" stroke-width="1.6"/><path d="M12 8.6h9M8.9 13.7 4.4 6.3M15.1 13.7l-4.5 7.4" stroke="currentColor" stroke-width="1.6"/></svg>';

const downloads = [
  { name: "Hashboard", icon: ICON_APPLE },
  { name: "MCP", icon: ICON_ANDROID },
  { name: "OpenAI", icon: ICON_WINDOWS },
  { name: "Anthropic", icon: ICON_APPLE },
  { name: "Google", icon: CHROME },
];

// Three lanes of workspace events streaming into the Brain.
const inputTracks = [
  [
    ["task", "ship api v3"],
    ["comment", "lgtm"],
    ["project", "api migration"],
    ["mention", "@jvogel"],
    ["task", "review pr-1247"],
    ["bug", "timeout 504"],
    ["chat", "standup notes"],
    ["request", "design review?"],
    ["priority", "high"],
    ["status", "review complete"],
    ["space", "engineering"],
  ],
  [
    ["chat", "ship it"],
    ["comment", "needs work"],
    ["project", "q4 plan"],
    ["task", "deploy api"],
    ["mention", "@team-eng"],
    ["activity", "status: in-prog"],
    ["request", "feedback?"],
    ["task", "publish changelog"],
    ["meeting", "weekly sync"],
    ["client", "Northwind"],
    ["invoice", "payment received"],
  ],
  [
    ["activity", "reassigned"],
    ["task", "design review"],
    ["comment", "ack"],
    ["bug", "memory leak"],
    ["mention", "@design"],
    ["task", "bug fix #423"],
    ["project", "platform v2"],
    ["chat", "thread reply"],
    ["meeting", "planning invite"],
    ["lead", "proposal won"],
    ["task", "design ready"],
  ],
];

const outputs = [
  "[ FEEDBACK ] auth flow needs work",
  "[ DECISION ] standardize on Postgres",
  "[ APPROVAL ] budget signed off",
  "[ NEW FACT ] api v3 live in prod",
  "[ UPDATE ] launch project on track",
];

const models = [
  { name: "chatgpt", src: "/brain-2/logos/chatgpt.svg", rot: -28 },
  { name: "claude", src: "/brain-2/logos/claude.svg", rot: 0 },
  { name: "gemini", src: "/brain-2/logos/gemini.svg", rot: 28 },
];

const pillars = [
  {
    pos: "tl",
    num: "01",
    name: "Workspace Assistance",
    items: [
      ["Ask Questions", "Ask naturally about accessible workspace information", "PERMISSION-AWARE"],
      ["Task Summaries", "Review assigned, overdue, and high-priority work", "CURRENT DATA"],
      ["Task Actions", "Create and update supported task fields conversationally", "USER-REQUESTED"],
      ["Project Insights", "Review status, priorities, deadlines, and workload", "ROLE-BASED"],
    ],
  },
  {
    pos: "tr",
    num: "04",
    name: "Model Choice",
    items: [
      ["Available Models", "Use models whose providers are configured for the workspace", "CONFIGURED"],
      ["User Selection", "Choose the model you want to use", "USER-CONTROLLED"],
      ["Provider Support", "Work with supported OpenAI, Anthropic, Google, and xAI models", "MULTI-PROVIDER"],
      ["Safe Fallback", "Use the configured default if a requested model is unavailable", "RESILIENT"],
    ],
  },
  {
    pos: "bl",
    num: "02",
    name: "Permission-Aware Context",
    items: [
      ["Role Scope", "Answers reflect the user's role and accessible records", "ROLE-BASED"],
      ["Company Context", "Answers stay connected to the active company workspace", "WORKSPACE-AWARE"],
      ["Current Facts", "Responses use information computed from current Hashboard data", "GROUNDED"],
      ["Readable Results", "Present useful names and fields without exposing internal IDs", "HUMAN-FRIENDLY"],
    ],
  },
  {
    pos: "br",
    num: "03",
    name: "Supported Workflows",
    items: [
      ["Projects", "Review accessible projects and their current status", "PROJECT DATA"],
      ["People", "Review permitted team and workload information", "ROLE-BASED"],
      ["Operations", "Ask about attendance, leave, meetings, clients, and billing", "WORKSPACE DATA"],
      ["MCP", "Use compatible AI clients with scoped Hashboard tools", "OAUTH-READY"],
    ],
  },
];

function Raw({ markup, className }) {
  return <span className={className} dangerouslySetInnerHTML={{ __html: markup }} />;
}

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Track({ pills, index }) {
  return (
    <div className="bn-cv-track" style={{ "--lane": index }}>
      <div className="bn-cv-track-content">
        {[0, 1].map((g) =>
          pills.map(([type, label]) => (
            <span className="bn-cv-pill" key={`${g}-${type}-${label}`}>
              <i className={`bn-cv-orb bn-cv-orb-${type}`} aria-hidden="true" />
              <span className="bn-cv-pill-type">{type}:</span>
              <span className="bn-cv-pill-label">{label}</span>
            </span>
          )),
        )}
      </div>
    </div>
  );
}

function Pillar({ pillar }) {
  return (
    <div className={`bn-pl-pillar bn-pl-${pillar.pos}`}>
      <div className="bn-pl-head">
        <span className="bn-pl-num">{pillar.num}</span>
        <span className="bn-pl-name">{pillar.name}</span>
      </div>
      <ul className="bn-pl-items">
        {pillar.items.map(([label, desc, tag]) => (
          <li className="bn-pl-item" key={label}>
            <button className="bn-pl-node" type="button">
              <span className="bn-pl-dot" aria-hidden="true" />
              <span className="bn-pl-label">{label}</span>
            </button>
            <span className="bn-pl-tip" role="tooltip">
              <span className="bn-pl-tip-desc">{desc}</span>
              <span className="bn-pl-tip-tag">{tag}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function BrainHero() {
  return (
    <section className="bn-hero" aria-label="Hash AI hero">
      <div className="bn-container bn-hero-inner">
        <div className="bn-hero-content">
          <div className="bn-pill-row">
            <span className="bn-pill">
              <span className="bn-pill-inner">
                All new
                <Image src="/full_hashai.svg" width={55} height={18} alt="" />
                {/* <strong>
                  Hash AI
                </strong> */}
              </span>
            </span>
          </div>

          <h1 className="bn-hero-title">
            Ask about your work. Act on it instantly.
            <br />
            Built into Hashboard
          </h1>

          <ul className="bn-checks">
            {checks.map((c) => (
              <li key={c}>
                <Check />
                {c}
              </li>
            ))}
          </ul>

          <div className="bn-actions">
            <div className="bn-buttons">
              <a href="/signup" className="bn-btn bn-btn-primary">
                Get started with Hash AI
              </a>
              <a href="/signup" className="bn-btn bn-btn-import">
                <span className="bn-logo-stack" aria-hidden="true">
                  <Image src="/brain-2/logos/chatgpt.svg" width={20} height={20} alt="" />
                  <Image src="/brain-2/logos/claude.svg" width={20} height={20} alt="" />
                </span>
                <span>Choose an AI model</span>
              </a>
            </div>

            <div className="bn-downloads">
              {downloads.map((d) => (
                <a key={d.name} href="/download" className="bn-app-link">
                  <Raw markup={d.icon} className="bn-app-icon" />
                  {d.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* System map: events stream in, the Brain orchestrates, knowledge flows out. */}
      <div className="bn-loop-section">
        <div className="bn-loop-stage" aria-label="Hash AI system map">
          <div className="bn-cv-zone bn-cv-zone-input" aria-hidden="true">
            {inputTracks.map((pills, i) => (
              <Track key={i} pills={pills} index={i} />
            ))}
          </div>

          <div className="bn-cv-radar" aria-hidden="true">
            <span className="bn-cv-radar-ring" />
            <span className="bn-cv-radar-ring" />
            <span className="bn-cv-radar-ring" />
            <span className="bn-cv-radar-ring" />
            <span className="bn-cv-radar-ring" />
            <span className="bn-cv-radar-sweep" />
            <span className="bn-cv-radar-ping" />
            <span className="bn-cv-radar-ping" />
            <span className="bn-cv-radar-ping" />
          </div>

          {/* viewBox is unscaled (1:1) at the 1400px stage and centred with a +100 x-offset,
              so the core sits at (560, 310) with a rim radius of 93. The viewBox matches the
              1120px stage exactly, so it renders 1:1 and every coordinate is a real pixel.
              Distances are multiples of the rim, measured off the reference. */}
          <svg className="bn-cv-wires" viewBox="0 0 1120 620" fill="none" aria-hidden="true">
            {/* The four pillar cards converge on the two horizontal-axis nodes,
                so the strands read as one bowtie passing through the core. */}
            <path className="bn-wire" d="M274 162 C 372 186, 414 262, 465 310" />
            <path className="bn-wire" d="M274 458 C 372 434, 414 358, 465 310" />
            <path className="bn-wire" d="M846 162 C 748 186, 706 262, 655 310" />
            <path className="bn-wire" d="M846 458 C 748 434, 706 358, 655 310" />

            {/* Self-improving axis: verdicts travel up out of the core. */}
            <path className="bn-wire bn-wire-dash bn-wire-axis" d="M560 215 L560 112" />

            {/* Orchestration axis: the core fans work out to each model. */}
            <path className="bn-wire bn-wire-dash" d="M560 405 L469 477" />
            <path className="bn-wire bn-wire-dash" d="M560 405 L560 481" />
            <path className="bn-wire bn-wire-dash" d="M560 405 L651 477" />

            {/* Self-organizing axis: a short lead-in from the label to the node. */}
            <path className="bn-wire bn-wire-dash bn-wire-memory" d="M430 310 L456 310" />

            {/* Cardinal nodes sit on the rim itself, not outside it. */}
            <circle className="bn-node bn-node-lg" cx="465" cy="310" r="5" />
            <circle className="bn-node bn-node-lg" cx="655" cy="310" r="5" />
            <circle className="bn-node bn-node-lg" cx="560" cy="215" r="4.5" />
            <circle className="bn-node bn-node-lg" cx="560" cy="405" r="4.5" />

            {/* Memory axis: distilled knowledge streams out toward the ticker. */}
            <path className="bn-wire bn-wire-dash bn-wire-memory" d="M666 310 L682 310" />
            {[0, 1, 2].map((i) => (
              <circle key={i} className="bn-node-flow" cx="692" cy="310" r="2.6" style={{ "--i": i }} />
            ))}
          </svg>

          <div className="bn-cv-verdicts" aria-hidden="true">
            <span className="bn-cv-x">✕</span>
            <span className="bn-cv-tick">✓</span>
          </div>

          <div className="bn-cv-core">
            <span className="bn-cv-core-glow" aria-hidden="true" />
            <span className="bn-cv-core-ring" aria-hidden="true" />
            <span className="bn-cv-core-k">COMPANY</span>
            <Image className="bn-cv-core-mark" src="/hashai.svg" width={52} height={52} alt="" />
            <span className="bn-cv-core-v">Hash AI</span>
          </div>

          <div className="bn-cv-models" aria-hidden="true">
            {models.map((m) => (
              <span key={m.name} className="bn-cv-model" style={{ "--rot": `${m.rot}deg` }}>
                <Image src={m.src} width={26} height={26} alt="" />
              </span>
            ))}
          </div>

          <div className="bn-cv-zone bn-cv-zone-output" aria-hidden="true">
            <div className="bn-cv-output">
              <div className="bn-cv-output-content">
                {[0, 1].map((g) =>
                  outputs.map((o) => (
                    <span className="bn-cv-output-item" key={`${g}-${o}`}>
                      <span className="bn-cv-output-arrow">▸</span>
                      <span className="bn-cv-output-text">{o}</span>
                    </span>
                  )),
                )}
              </div>
            </div>
          </div>

          <div className="bn-loop-labels" aria-hidden="true">
            <span className="bn-loop-label bn-loop-label-top">Workspace answers</span>
            <span className="bn-loop-label bn-loop-label-right">Current facts</span>
            <span className="bn-loop-label bn-loop-label-bottom">Model choice</span>
            <span className="bn-loop-label bn-loop-label-left">Task actions</span>
          </div>

          <div className="bn-pl">
            {pillars.map((p) => (
              <Pillar key={p.num} pillar={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
