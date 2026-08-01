import Link from "next/link";
import "./achievements.css";
import DotGrid from "./DotGrid";

const B = {
  agenticAi: ["/g2/best-agentic-ai-products.webp", "G2 Best Software 2026 Agentic AI Products"],
  ai: ["/g2/best-ai-products.webp", "G2 Best Software 2026 AI Products"],
  software: ["/g2/best-software.webp", "G2 Best Software 2026 Software"],
  project: ["/g2/best-project-management-products.webp", "G2 Best Software 2026 Project Management Products"],
  global: ["/g2/best-global-software-companies.webp", "G2 Best Software 2026 Global Software Companies"],
  cms: ["/g2/best-content-management-systems.webp", "G2 Best Software 2026 Content Management Systems"],
  dev: ["/g2/best-development-products.webp", "G2 Best Software 2026 Development Products"],
  hr: ["/g2/best-hr-software-products.webp", "G2 Best Software 2026 HR Software Products"],
  it: ["/g2/best-it-management-products.webp", "G2 Best Software 2026 IT Management Products"],
  leader: ["/g2/winter-leader.webp", "G2 Winter 2026 Leader"],
  momentum: ["/g2/winter-momentum-leader.webp", "G2 Winter 2026 Momentum Leader"],
  performer: ["/g2/winter-high-performer-enterprise.webp", "G2 Winter 2026 High Performer Enterprise"],
};

// Five rows, each a repeating run of four badges. Alternating direction and
// slightly different durations keep the wall from marching in lockstep.
const rows = [
  { badges: [B.software, B.project, B.global, B.cms], duration: "52s" },
  { badges: [B.agenticAi, B.ai, B.software, B.project], duration: "46s" },
  { badges: [B.global, B.cms, B.dev, B.hr], duration: "58s", reverse: true },
  { badges: [B.it, B.momentum, B.leader, B.performer], duration: "50s" },
  { badges: [B.momentum, B.leader, B.performer, B.it], duration: "62s", reverse: true },
];

function Corners() {
  return (
    <>
      <div className="ach-corner ach-corner-tl" />
      <div className="ach-corner ach-corner-tr" />
      <div className="ach-corner ach-corner-bl" />
      <div className="ach-corner ach-corner-br" />
    </>
  );
}

function Arcs() {
  const path =
    "M0 0V1C2.76142 1 5 3.23858 5 6H6C6 3.23858 8.23858 1 11 1V0C8.23858 0 6 -2.23858 6 -5H5C5 -2.23858 2.76142 0 0 0Z";
  return (
    <>
      <svg className="ach-arc ach-arc-top" width="11" height="6" viewBox="0 0 11 6" fill="none" aria-hidden="true">
        <path fillRule="evenodd" clipRule="evenodd" d={path} fill="#E8E8E8" />
      </svg>
      <svg className="ach-arc ach-arc-bottom" width="11" height="6" viewBox="0 0 11 6" fill="none" aria-hidden="true">
        <path fillRule="evenodd" clipRule="evenodd" d={path} fill="#E8E8E8" />
      </svg>
    </>
  );
}

function BadgeRow({ badges, duration, reverse }) {
  // Two identical groups so the -50% translate loops seamlessly.
  const group = Array.from({ length: 8 }, (_, i) => badges[i % badges.length]);
  return (
    <div className={`ach-marquee-row${reverse ? " ach-marquee-row-reverse" : ""}`}>
      <div className="ach-marquee-track" style={{ "--row-duration": duration }}>
        {[0, 1].map((g) => (
          <div className="ach-marquee-group" key={g}>
            {group.map(([src, alt], i) => (
              <div className="ach-badge" key={`${g}-${i}`} aria-hidden="true">
                <img src={src} width="82" height="94" alt={alt} loading="lazy" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Achievements() {
  return (
    <section className="ach-wrapper" data-testid="achievements">
      {/* G2 reports */}
      <div className="ach-box">
        <div className="ach-center-line" />
        <Arcs />

        <div className="ach-content">
          <div className="ach-title">
            <div className="ach-label">Rated 4.7/5 by 10,000+ users on G2</div>
            <h2>#1 most referenced company on G2 reports</h2>
          </div>
          <div className="ach-secondary">
            <div>
              <Link href="/customers" className="ach-button">
                Read customer stories
              </Link>
            </div>
          </div>
          <Corners />
        </div>

        <div className="ach-media-wrap">
          <div className="ach-media">
            <div className="ach-vignette">
              <div className="ach-marquee" role="img" aria-label="Collection of G2 award badges">
                {rows.map((row, i) => (
                  <BadgeRow key={i} {...row} />
                ))}
              </div>
            </div>
          </div>
          <Corners />
        </div>
      </div>

      {/* Fortune 500 */}
      <div className="ach-box ach-box-media-first ach-box-flush">
        <div className="ach-center-line" />
        <Arcs />

        <div className="ach-content">
          <div className="ach-title">
            <div className="ach-label">Convergence powerhouse</div>
            <h2>Powering businesses of all sizes</h2>
          </div>
          <dl className="ach-stats">
            <div className="ach-stat">
              <dt>85%</dt>
              <dd>of Fortune 500 companies</dd>
            </div>
            <div className="ach-stat">
              <dt>3M+</dt>
              <dd>tasks automated by Agents</dd>
            </div>
          </dl>
          <Corners />
        </div>

        <div className="ach-media-wrap">
          <div className="ach-media">
            <div className="ach-dotgrid-media">
              <DotGrid />
            </div>
          </div>
          <Corners />
        </div>
      </div>
    </section>
  );
}
