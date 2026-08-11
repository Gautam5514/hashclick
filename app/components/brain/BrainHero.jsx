import "./brain.css";
import Image from "next/image";
import { ICON_APPLE, ICON_WINDOWS, ICON_ANDROID } from "../home/brain2-svgs";

const checks = [
  "Multiplayer AI with your context",
  "Every model. One subscription.",
  "Self-updating Company Brain",
];

const CHROME =
  '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9.2" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="12" r="3.4" stroke="currentColor" stroke-width="1.6"/><path d="M12 8.6h9M8.9 13.7 4.4 6.3M15.1 13.7l-4.5 7.4" stroke="currentColor" stroke-width="1.6"/></svg>';

const downloads = [
  { name: "iOS", icon: ICON_APPLE },
  { name: "Android", icon: ICON_ANDROID },
  { name: "Windows", icon: ICON_WINDOWS },
  { name: "Mac", icon: ICON_APPLE },
  { name: "Chrome", icon: CHROME },
];

// Three lanes of workspace events streaming into the Brain.
const inputTracks = [
  [
    ["task", "ship api v3"],
    ["comment", "lgtm"],
    ["doc", "rfc-04"],
    ["mention", "@jvogel"],
    ["task", "review pr-1247"],
    ["bug", "timeout 504"],
    ["chat", "standup notes"],
    ["request", "design review?"],
    ["figma", "design handoff"],
    ["github", "PR #1247 merged"],
    ["slack", "#eng-team"],
  ],
  [
    ["chat", "ship it"],
    ["comment", "needs work"],
    ["doc", "q4 plan"],
    ["task", "deploy api"],
    ["mention", "@team-eng"],
    ["activity", "status: in-prog"],
    ["request", "feedback?"],
    ["doc", "changelog"],
    ["teams", "call notes"],
    ["drive", "Q4 deck"],
    ["gmail", "client reply"],
  ],
  [
    ["activity", "reassigned"],
    ["task", "design review"],
    ["comment", "ack"],
    ["bug", "memory leak"],
    ["mention", "@design"],
    ["task", "bug fix #423"],
    ["doc", "spec-v2"],
    ["chat", "thread reply"],
    ["outlook", "mtg invite"],
    ["salesforce", "deal won"],
    ["figma", "frame v3 ready"],
  ],
];

const outputs = [
  "[ FEEDBACK ] auth flow needs work",
  "[ DECISION ] standardize on Postgres",
  "[ APPROVAL ] budget signed off",
  "[ NEW FACT ] api v3 live in prod",
  "[ UPDATE ] sprint-23 on track",
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
    name: "Multiplayer Collaboration",
    items: [
      ["AI Chats", "Threaded dialogue with shared, persistent context windows", "REAL-TIME · MULTI-PARTY"],
      ["AI Channels", "Topic-scoped streams with retained conversational memory", "ASYNC · SUBSCRIBABLE"],
      ["AI Tasks", "Structured work units that carry state, owners, and dependencies forward", "TYPED · STATEFUL"],
      ["AI Projects", "Cross-list orchestration of work across timelines", "HIERARCHICAL"],
    ],
  },
  {
    pos: "tr",
    num: "04",
    name: "Intelligence²",
    items: [
      ["Skills", "Composable, tool-calling capabilities invoked on demand", "MODULAR"],
      ["Recall", "Hybrid vector + graph retrieval across full history", "LOW-LATENCY"],
      ["Learning", "Reinforced from outcomes, corrections & user signal", "ADAPTIVE"],
      ["Self-Improving", "Autonomous policy refinement from execution results", "RECURSIVE LOOP"],
    ],
  },
  {
    pos: "bl",
    num: "02",
    name: "Context Engine",
    items: [
      ["Self-Organizing", "Auto-clusters entities into a semantic knowledge graph", "GRAPH · EMBEDDINGS"],
      ["Self-Updating", "Continuous re-index from live workspace event streams", "EVENT-SOURCED"],
      ["Context Compression", "Distills context into token-efficient retrievable vectors", "LOSSLESS RECALL"],
      ["Cost Optimization", "High-fidelity retrieval at a fraction of the cost, even at scale", "COST-EFFICIENT"],
    ],
  },
  {
    pos: "br",
    num: "03",
    name: "Organization Knowledge",
    items: [
      ["Goals", "Cascading objectives mapped down to live execution", "OKR-LINKED"],
      ["Decisions", "Versioned rationale with a full reversible audit trail", "TRACEABLE"],
      ["Updates", "Event-driven status propagated across dependents", "PUSH · SUBSCRIBED"],
      ["Feedback", "Closed-loop signal capture, scored back into context", "REINFORCING"],
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
    <section className="bn-hero" aria-label="Brain² hero">
      <div className="bn-container bn-hero-inner">
        <div className="bn-hero-content">
          <div className="bn-pill-row">
            <span className="bn-pill">
              <span className="bn-pill-inner">
                All new
                <Image src="/brain-2/brain.svg" width={18} height={18} alt="" />
                <strong>
                  Hash AI
                </strong>
              </span>
            </span>
          </div>

          <h1 className="bn-hero-title">
            The best AI is <em>your</em> AI.
            <br />
            Your Company&apos;s{" "}
            <span className="bn-brain-mark">
              <span>Brain</span>
              <span className="bn-brain-sup">2</span>
            </span>
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
                Try Brain² FREE
              </a>
              <a href="/signup" className="bn-btn bn-btn-import">
                <span className="bn-logo-stack" aria-hidden="true">
                  <Image src="/brain-2/logos/chatgpt.svg" width={20} height={20} alt="" />
                  <Image src="/brain-2/logos/claude.svg" width={20} height={20} alt="" />
                </span>
                <span>Import Memory</span>
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
        <div className="bn-loop-stage" aria-label="Brain² system map">
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
            <Image className="bn-cv-core-mark" src="/brain-2/brain.svg" width={52} height={52} alt="" />
            <span className="bn-cv-core-v">
              Brain<sup>2</sup>
            </span>
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
            <span className="bn-loop-label bn-loop-label-top">Self-improving</span>
            <span className="bn-loop-label bn-loop-label-right">Memory</span>
            <span className="bn-loop-label bn-loop-label-bottom">Orchestration</span>
            <span className="bn-loop-label bn-loop-label-left">Self-organizing</span>
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
