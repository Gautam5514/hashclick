"use client";

import Image from "next/image";

const events = [
  ["Changed status on task", "8:06:41 PM", "Bug Fixes", "warn"],
  ["Update database entry", "8:05:28 PM", "Data Sync", "ok"],
  ["Generate analytics report", "8:04:15 PM", "Weekly Stats", "ok"],
  ["Post comment to channel", "8:12:45 PM", "New task", "fail"],
  ["Summarize weekly report", "8:11:32 PM", "Marketing Backlog", "ok"],
  ["Create task", "8:10:18 PM", "Sprint Planning", "ok"],
  ["Comment on task", "8:09:05 PM", "Project In Progress", "warn"],
  ["Assign task to teammate", "8:07:52 PM", "Team Updates", "ok"],
];

// Filler that reads as an encrypted payload behind the shield.
const CIPHER =
  "x7#Kd9!vQ2$mLp0@wZ4^tR8&yB1*nH6%cJ3(gF5)aS+dE-uI=oP{lM}kN[jV]hC|bX~qW`zT<rY>eU?iO/pA\\sD";

const cipherRows = Array.from({ length: 18 }, (_, i) =>
  CIPHER.slice(i * 3) + CIPHER.slice(0, i * 3),
);

function AuditVisual() {
  return (
    <div className="bn-sec-audit" aria-hidden="true">
      <div className="bn-sec-audit-track">
        {[0, 1].map((g) => (
          <div className="bn-sec-audit-group" key={g}>
            {events.map(([what, when, where, state]) => (
              <div className="bn-sec-audit-row" key={`${g}-${what}`}>
                <span className={`bn-sec-dot bn-sec-dot-${state}`}>
                  {state === "ok" ? "✓" : state === "fail" ? "×" : "!"}
                </span>
                <span className="bn-sec-audit-copy">
                  <span className="bn-sec-audit-what">{what}</span>
                  <span className="bn-sec-audit-meta">
                    {when} <i>•</i> in {where}
                  </span>
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function CipherVisual() {
  const followPointer = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    event.currentTarget.style.setProperty("--x", `${x}px`);
    event.currentTarget.style.setProperty("--y", `${y}px`);
    event.currentTarget.style.setProperty("--shield-x", `${((x / bounds.width) - .5) * 7}px`);
    event.currentTarget.style.setProperty("--shield-y", `${((y / bounds.height) - .5) * 5}px`);
  };

  const resetPointer = (event) => {
    event.currentTarget.style.setProperty("--x", "50%");
    event.currentTarget.style.setProperty("--y", "50%");
    event.currentTarget.style.setProperty("--shield-x", "0px");
    event.currentTarget.style.setProperty("--shield-y", "0px");
  };

  return (
    <div
      className="bn-sec-cipher"
      aria-hidden="true"
      onPointerMove={followPointer}
      onPointerLeave={resetPointer}
    >
      <div className="bn-sec-cipher-rows">
        {cipherRows.map((row, i) => (
          <span key={i}>{row}</span>
        ))}
      </div>
      <span className="bn-sec-shield">
        <Image
          src="/brain-2/zero-retention-shield.svg"
          alt=""
          width={158}
          height={175}
          unoptimized
        />
      </span>
    </div>
  );
}

function LoopVisual() {
  return (
    <div className="bn-sec-loop" aria-hidden="true">
      <span className="bn-sec-loop-dots" />
      <Image
        className="bn-sec-loop-original"
        src="/brain-2/reflection-wheel.svg"
        alt=""
        width={214}
        height={213}
        unoptimized
      />
    </div>
  );
}

const pillars = [
  {
    title: "No third-party data training",
    desc: "We forbid third-party AI providers from training on your data.",
    visual: <AuditVisual />,
  },
  {
    title: "Zero third-party data retention",
    desc: "We don't allow third-party AI providers to store any of your data.",
    visual: <CipherVisual />,
  },
  {
    title: "Multi-model unified security",
    desc: "All models operate under the same permissions, privacy, and security controls.",
    visual: <LoopVisual />,
  },
];

export default function Security() {
  return (
    <section className="bn-security" aria-label="Hash AI security">
      <div className="bn-security-inner">
        <header className="bn-security-header">
          <p className="bn-eyebrow bn-eyebrow-purple">Secure</p>
          <div className="bn-cards-rule" aria-hidden="true" />
          <h2 className="bn-h2 bn-security-h2">
            Your data <em>never</em> trains
            <br />
            <span> third-party models</span>
          </h2>
        </header>
      </div>

      {/* Full-bleed rule, as in the reference. */}
      <div className="bn-full-divider" aria-hidden="true" />

      <div className="bn-security-inner">
        <ul className="bn-sec-grid">
          {pillars.map((p) => (
            <li className="bn-sec-card" key={p.title}>
              <h3 className="bn-sec-title">{p.title}</h3>
              <p className="bn-sec-desc">{p.desc}</p>
              <div className="bn-sec-visual">{p.visual}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
