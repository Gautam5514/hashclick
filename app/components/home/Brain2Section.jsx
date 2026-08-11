import "./brain2.css";
import {
  AMBIENT_SPINNER,
  BRAIN_LOGO,
  CA_CONNECTOR,
  CA_ICON1,
  CA_ICON2,
  CA_ICON3,
  CA_ICON4,
  CHECK,
  DEEP_SEARCH_PILL,
  ICON_ANDROID,
  ICON_APPLE,
  ICON_WINDOWS,
  MCP_LOGO,
} from "./brain2-svgs";

// The Brain² artwork is imported verbatim as SVG markup so the gradients,
// masks and animation hooks survive untouched.
function Svg({ markup, className }) {
  return (
    <span
      className={className ? `b2-svg ${className}` : "b2-svg"}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  );
}

const models = [
  { name: "Brain", icon: "/brain-2/brain.svg" },
  { name: "GPT", icon: "/brain-2/logos/chatgpt.svg" },
  { name: "Claude Opus", icon: "/brain-2/logos/claude.svg" },
  { name: "Gemini", icon: "/brain-2/logos/gemini.svg" },
];

const personality = [
  ["tone", '"direct, no fluff, like a sharp coworker"'],
  ["sprint_methods", '"story points, fibonacci"'],
  ["reports_to", '"VP Engineering, weekly on Mondays"'],
  ["prefers", '"tables over bullet points"'],
  ["projects", '"Brain 2.0, Platform Migration, Q2"'],
  ["timezone", '"PST, don\'t schedule before 10am"'],
  ["tools", '"GitHub, Figma, Linear, Notion"'],
];

const memoryValues = ["Values clarity", "Ships on Fridays", "Writes in tables"];

/* The closing band's texture: three tapering rows of ASCII, densest where the
   glow is brightest. Every cell holds a few neighbouring glyphs off the ramp
   and swaps between them on its own offset clock, so characters flip in place
   (= to ! to -) rather than the whole row dissolving. */
const ASCII_RAMP = [" ", ".", ",", "'", ":", ";", "-", "=", "!", "+", "*", "#"];
const ASCII_DELAY_BUCKETS = 8;

// Rows run top to bottom: the widest sits closest to the light.
const ASCII_ROW_DEFS = [
  { width: 25, cells: 72, lift: 0.02 },
  { width: 50, cells: 136, lift: 0.18 },
  { width: 75, cells: 200, lift: 0.34 },
];

// Deterministic hash so the server and client agree on every glyph.
function hash(col, row) {
  const n = Math.sin(col * 12.9898 + row * 78.233) * 43758.5453;
  return n - Math.floor(n);
}

function rampGlyph(index) {
  return ASCII_RAMP[Math.min(ASCII_RAMP.length - 1, Math.max(0, index))];
}

function buildAsciiRows() {
  return ASCII_ROW_DEFS.map((row, r) => {
    const cells = [];

    for (let c = 0; c < row.cells; c++) {
      const t = c / (row.cells - 1);
      // Light ramps left to right, and each lower row sits deeper in the glow.
      const light = 0.16 + 0.66 * Math.pow(t, 1.05) + row.lift;
      const h = hash(c, r);
      const index = Math.round((light + (h - 0.5) * 0.07) * (ASCII_RAMP.length - 1));

      if (index <= 0) {
        cells.push(null);
        continue;
      }

      // Three neighbours on the ramp keeps the swap subtle but visible.
      const drift = h > 0.5 ? 1 : -1;
      cells.push({
        glyphs: [rampGlyph(index), rampGlyph(index + drift), rampGlyph(index - drift)],
        bucket: Math.floor(h * ASCII_DELAY_BUCKETS) % ASCII_DELAY_BUCKETS,
      });
    }

    return { width: row.width, cells };
  });
}

const ASCII_ROWS = buildAsciiRows();

const agents = [
  { name: "Strategist", avatar: "/brain-2/super-agents/blue-agent-card.png" },
  { name: "Developer", avatar: "/brain-2/super-agents/orange-agent-card.png" },
  { name: "Visual Designer", avatar: "/brain-2/super-agents/purple-agent-card.png" },
];

/* ---------------- Card visuals ---------------- */

export function ContextVisual() {
  return (
    <div className="b2-ctx-visual" role="presentation" aria-hidden="true">
      <div className="b2-ctx-scene">
        <div className="b2-ctx-stack">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="b2-ctx-window">
              <span className="b2-ctx-window-glow" />
              <span className="b2-ctx-dots">
                <span className="b2-ctx-dot" />
                <span className="b2-ctx-dot" />
                <span className="b2-ctx-dot" />
              </span>
              <span className="b2-ctx-div-h" />
              <span className="b2-ctx-div-v" />
            </div>
          ))}
        </div>
        <div className="b2-ctx-input" />
        <div className="b2-ctx-brain">
          <span className="b2-ctx-brain-circle">
            <span className="b2-ctx-brain-icon">
              <img src="/brain-2/brain.svg" width="28" height="28" alt="" />
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export function IntelligenceVisual() {
  return (
    <div className="b2-int-visual" role="presentation" aria-hidden="true">
      <div className="b2-int-menu">
        <p className="b2-int-heading">Best models</p>
        <div className="b2-int-list">
          <span className="b2-int-selection">
            <Svg markup={CHECK} />
          </span>
          {models.map((m) => (
            <div key={m.name} className="b2-int-row">
              <span className="b2-int-icon">
                <img src={m.icon} width="16" height="16" alt="" />
              </span>
              <span className="b2-int-label">{m.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function PersonalityVisual() {
  return (
    <div className="b2-per-visual" role="presentation" aria-hidden="true">
      <div className="b2-per-panel">
        <span className="b2-per-glow" />
        <span className="b2-per-topline">
          <span className="b2-per-beam" />
        </span>
        <div className="b2-per-rows">
          {personality.map(([key, value]) => (
            <div key={key} className="b2-per-row">
              <span className="b2-per-key">{key}</span>
              <span className="b2-per-val">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MemoryVisual() {
  return (
    <div className="b2-mem-visual" role="presentation" aria-hidden="true">
      <div className="b2-mem-glow" />
      <div className="b2-mem-cardwrap">
        <div className="b2-mem-card">
          <div className="b2-mem-row">
            <span className="b2-mem-badge">Memory Updated</span>
            <img
              className="b2-mem-brain"
              src="/brain-2/brain.svg"
              width="18"
              height="18"
              alt=""
            />
          </div>
          <div className="b2-mem-values">
            {memoryValues.map((v) => (
              <div key={v} className="b2-mem-value">
                <span className="b2-mem-vlabel">User Preference:</span>
                <span className="b2-mem-vtext">{v}</span>
              </div>
            ))}
          </div>
        </div>
        <span className="b2-mem-line" />
      </div>
    </div>
  );
}

function EveryModelVisual() {
  return (
    <div className="b2-em-wrap" aria-hidden="true">
      <div className="b2-em-modelwrap">
        <span className="b2-em-arrow b2-em-arrow-left">
          <img src="/brain-2/arrow-left.svg" width="12" height="14" alt="" />
        </span>
        {/* Carousel order is fixed; the CSS phase-shifts each pill by one slot. */}
        <div className="b2-em-list">
          <div className="b2-em-item" data-model-id="gemini">
            <div className="b2-em-content">
              <span className="b2-em-icon">
                <img src="/brain-2/logos/gemini.svg" width="18" height="18" alt="" />
              </span>
              <span className="b2-em-name">Gemini</span>
            </div>
          </div>
          <div className="b2-em-item" data-model-id="brain">
            <div className="b2-em-content">
              <Svg markup={BRAIN_LOGO} className="b2-em-lockup" />
            </div>
          </div>
          <div className="b2-em-item" data-model-id="claude">
            <div className="b2-em-content">
              <span className="b2-em-icon">
                <img src="/brain-2/logos/claude.svg" width="18" height="18" alt="" />
              </span>
              <span className="b2-em-name">Claude</span>
            </div>
          </div>
          <div className="b2-em-item" data-model-id="chatgpt">
            <div className="b2-em-content">
              <span className="b2-em-icon">
                <img src="/brain-2/logos/chatgpt.svg" width="18" height="18" alt="" />
              </span>
              <span className="b2-em-name">ChatGPT</span>
            </div>
          </div>
          <div className="b2-em-glow" />
        </div>
        <span className="b2-em-arrow b2-em-arrow-right">
          <img src="/brain-2/arrow-right.svg" width="12" height="14" alt="" />
        </span>
      </div>
    </div>
  );
}

function SuperAgentsVisual() {
  return (
    <div className="b2-sa-wrap" aria-hidden="true">
      {agents.map((a) => (
        <div key={a.name} className="b2-sa-card">
          <div className="b2-sa-glow" />
          <div className="b2-sa-row">
            <div className="b2-sa-left">
              <div className="b2-sa-avatar">
                <img src={a.avatar} width="60" height="60" alt="" />
              </div>
              <span className="b2-sa-name">{a.name}</span>
            </div>
            <div className="b2-sa-dot" />
          </div>
        </div>
      ))}
    </div>
  );
}

function ConnectedAppsVisual() {
  return (
    <div className="b2-ca-visual" role="presentation" aria-hidden="true">
      <div className="b2-ca-grid-backdrop" />
      <div className="b2-ca-shift">
        <div className="b2-ca-glow" />
        <Svg markup={CA_CONNECTOR} />
        <div className="b2-ca-pill b2-ca-pill-tl">
          <Svg markup={CA_ICON1} />
        </div>
        <div className="b2-ca-pill b2-ca-pill-bl">
          <Svg markup={CA_ICON2} />
        </div>
        <div className="b2-ca-center">
          <span className="b2-ca-brain">
            <img src="/brain-2/brain.svg" width="72" height="72" alt="" />
          </span>
        </div>
        <div className="b2-ca-pill b2-ca-pill-tr">
          <Svg markup={CA_ICON3} />
        </div>
        <div className="b2-ca-pill b2-ca-pill-br">
          <Svg markup={CA_ICON4} />
        </div>
      </div>
      <div className="b2-ca-badge">
        <Svg markup={MCP_LOGO} className="b2-ca-badge-logo" />
        <span className="b2-ca-badge-label">MCP Online</span>
      </div>
    </div>
  );
}

function AmbientVisual() {
  return (
    <div className="b2-am-visual" aria-hidden="true">
      <div className="b2-am-pill">
        <div className="b2-am-pill-glow" />
        <Svg markup={AMBIENT_SPINNER} className="b2-am-pill-icon" />
        <span className="b2-am-pill-label">Gathering Data</span>
        <span className="b2-am-brain">
          <img src="/brain-2/brain.svg" width="30" height="30" alt="" />
        </span>
      </div>
      <div className="b2-am-chip b2-am-chip-top">
        <span className="b2-am-dot b2-am-dot-purple" />
        <span className="b2-am-chip-text">Improve Billing Error Handling</span>
      </div>
      <div className="b2-am-chip b2-am-chip-bottom">
        <span className="b2-am-dot b2-am-dot-mint" />
        <span className="b2-am-chip-text">Optimize Dashboard Load Time</span>
      </div>
      <div className="b2-am-chip b2-am-chip-ghost-far">
        <span className="b2-am-dot b2-am-dot-purple" />
        <span className="b2-am-chip-text">Improve Billing Error Handling</span>
      </div>
      <div className="b2-am-chip b2-am-chip-ghost-mid">
        <span className="b2-am-dot b2-am-dot-purple" />
        <span className="b2-am-chip-text">Improve Billing Error Handling</span>
      </div>
    </div>
  );
}

function DeepSearchVisual() {
  return (
    <div className="b2-ds-visual" role="presentation" aria-hidden="true">
      <div className="b2-ds-backdrop">
        <p>
          <strong>Growth &amp; Acquisition, Week of Apr 21</strong>
          <br />
          Paid ROAS holding at 4.2x across search, up from 3.8x last week. Activation rate
          hit 38%, up 4pts month-over-month — best since December.
        </p>
        <p className="b2-ds-backdrop-bottom">
          <strong>Growth &amp; Acquisition Update for the Week of April 21</strong>
          <br />
          This week, we are excited to report that our Paid Return on Ad Spend (ROAS) has
          shown remarkable strength, now standing at an impressive 4.2x in search. This
          marks a significant increase from last week&apos;s figure of 3.8x, indicating
          that our advertising strategies are effectively resonating with our target
          audience.
        </p>
      </div>
      <div className="b2-ds-fade-wrap">
        <img
          className="b2-ds-fade1"
          src="/brain-2/deep-search-fade-1.svg"
          width="174"
          height="99"
          alt=""
        />
        <img
          className="b2-ds-fade2"
          src="/brain-2/deep-search-fade-2.svg"
          width="127"
          height="138"
          alt=""
        />
        <img
          className="b2-ds-fade3"
          src="/brain-2/deep-search-fade-3.svg"
          width="127"
          height="109"
          alt=""
        />
      </div>
      <div className="b2-ds-fade-right" />
      <Svg markup={DEEP_SEARCH_PILL} className="b2-ds-pillwrap" />
    </div>
  );
}

const whatsNew = [
  {
    id: "memory-preferences",
    label: "Memory & Preferences",
    description:
      "Brain² keeps track of how you like to work, and gets smarter every time you use the workspace.",
    Visual: MemoryVisual,
  },
  {
    id: "every-model",
    label: "Every AI, Unlimited",
    description:
      "GPT, Claude Opus, Gemini, and more. Every model runs with full knowledge of your work.",
    Visual: EveryModelVisual,
  },
  {
    id: "super-agents",
    label: "Multiplayer AI",
    description:
      "The more your team uses Brain², the more it knows, the more useful it gets for everyone.",
    Visual: SuperAgentsVisual,
  },
  {
    id: "connected-apps",
    label: "Connected Apps & Any MCP",
    description:
      "Brain² taps Google Drive, GitHub, Salesforce, and more to get you answers and insights.",
    Visual: ConnectedAppsVisual,
  },
  {
    id: "ambient-intelligence",
    label: "Ambient Intelligence",
    description:
      "Brain² surfaces relevant context, related tasks, and smart suggestions before you even ask.",
    Visual: AmbientVisual,
  },
  {
    id: "deep-search",
    label: "Deep Search",
    description:
      "Ask something complex. Brain² checks your workspace, apps, and the web for answers.",
    Visual: DeepSearchVisual,
  },
];

const cards = [
  {
    id: "context",
    label: "Context",
    description:
      "Brain² sees your tasks, docs, and conversations. It doesn't need a brief because it knows what's happening in real-time.",
    Visual: ContextVisual,
  },
  {
    id: "intelligence",
    label: "Intelligence",
    description:
      "Brain² picks the best AI model for each job. One subscription. Every frontier model running with full context.",
    Visual: IntelligenceVisual,
  },
  {
    id: "personality",
    label: "Personality",
    description:
      "Brain² learns how you and your team talk: your tone, your shorthand, your preferences.",
    Visual: PersonalityVisual,
  },
];

export function BrainWhatsNewGrid() {
  return (
    <div className="b2-wn" aria-label="What's new in Brain²">
      <div className="b2-wn-container">
        <div className="b2-wn-grid">
          {whatsNew.map(({ id, label, description, Visual }) => (
            <div key={id} className="b2-wn-card" data-card-id={id}>
              <div className="b2-wn-copy">
                <p className="b2-wn-label">{label}</p>
                <p className="b2-wn-desc">{description}</p>
              </div>
              <div className="b2-wn-visual">
                <Visual />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function BrainWhatsNewSection() {
  return (
    <div className="b2-pillars-band">
      <header className="b2-pillars-header">
        <h3 className="b2-pillars-title">
          Nothing comes close to Brain<sup>2</sup>
        </h3>
        <p className="b2-pillars-sub">We rebuilt Brain from the ground up.</p>
      </header>
      <BrainWhatsNewGrid />
    </div>
  );
}

export default function Brain2Section() {
  return (
    <section className="b2-wrapper" aria-labelledby="brain2-title">
      <div className="b2-panel">
        {/* Hero band */}
        <div className="b2-hero">
          <header className="b2-hero-inner">
            <div className="b2-logo-wrap">
              <Svg markup={BRAIN_LOGO} className="b2-brain-logo" />
            </div>
            <h2 className="b2-title" id="brain2-title">
              The best AI is <i>your</i> AI
            </h2>
            <p className="b2-subtitle">
              Already plugged into your team, your tools, and your tasks.
            </p>
            
          </header>
          <img
            className="b2-hero-glow"
            src="/brain-2/glow.svg"
            alt=""
            aria-hidden="true"
            loading="lazy"
          />
          <img
            className="b2-hero-noise"
            src="/brain-2/title-noise-lg.png"
            alt=""
            aria-hidden="true"
            loading="lazy"
          />
        </div>

        {/* Three-up cards */}
        <div className="b2-cards-band">
          <ul className="b2-cards">
            {cards.map(({ id, label, description, Visual }) => (
              <li key={id} className="b2-card" data-card-id={id}>
                <div className="b2-card-copy">
                  <p className="b2-card-label">{label}</p>
                  <p className="b2-card-desc">{description}</p>
                </div>
                <div className="b2-card-visual">
                  <Visual />
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Pillars + what's new */}
        <BrainWhatsNewSection />

        {/* Closing band */}
        <div className="b2-closing">
          <div className="b2-closing-backdrop" aria-hidden="true">
            <div className="b2-closing-wash b2-closing-wash-a" />
            <div className="b2-closing-wash b2-closing-wash-b" />
            <div className="b2-closing-wash b2-closing-wash-c" />
            <div className="b2-closing-shade" />
            <div className="b2-closing-ascii">
              {ASCII_ROWS.map((row, r) => (
                <div key={r} className="b2-ascii-row" style={{ width: `${row.width}%` }}>
                  {row.cells.map((cell, c) =>
                    cell ? (
                      <span key={c} className={`b2-ascii-cell b2-ascii-d${cell.bucket}`}>
                        {cell.glyphs.map((glyph, g) => (
                          <span key={g} className="b2-ascii-glyph">
                            {glyph}
                          </span>
                        ))}
                      </span>
                    ) : (
                      <span key={c} className="b2-ascii-cell" />
                    ),
                  )}
                </div>
              ))}
            </div>
            <img
              className="b2-closing-noise"
              src="/brain-2/title-noise-lg.png"
              alt=""
              loading="lazy"
            />
          </div>
          <div className="b2-closing-topfade" aria-hidden="true" />
          <div className="b2-closing-inner">
            <h3 className="b2-closing-title">The only AI that actually knows your work</h3>
            <div className="b2-closing-ctas">
              <a className="b2-closing-primary" href="/signup">
                Get Started with Brain
              </a>
              <a className="b2-closing-learn" href="/ai">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
