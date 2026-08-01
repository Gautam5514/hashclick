"use client";

import { useEffect, useState } from "react";

const roles = [
  {
    title: "Project Manager",
    desc: "Plans and rebalances the week",
    prompt: "What's at risk this week, and how should I rebalance?",
    reply:
      "Three tasks slipped in Sprint 24. I moved the billing migration to Marcus, pushed the pricing copy to Thursday, and flagged the DPA with legal.",
    chips: ["12 tasks", "Sprint 24", "3 owners"],
  },
  {
    title: "Engineering Lead",
    desc: "Triages and runs engineering",
    prompt: "Triage today's bugs and tell me what's blocking the release.",
    reply:
      "9 new bugs. 2 are release blockers — auth refresh and the CSV export timeout. I assigned both and drafted the release note.",
    chips: ["9 bugs", "2 blockers", "PR #4182"],
  },
  {
    title: "Agency Owner",
    desc: "Manages every client account",
    prompt: "Which accounts need me this week?",
    reply:
      "Northwind is 2 days from deadline with 4 open approvals. Vertex hasn't been touched in 9 days. I drafted check-ins for both.",
    chips: ["6 accounts", "4 approvals", "2 at risk"],
  },
  {
    title: "Head of Ops",
    desc: "Keeps every team in sync",
    prompt: "Where are teams duplicating work?",
    reply:
      "Marketing and Product both track launch readiness in separate lists. I merged them into one view and notified both leads.",
    chips: ["2 teams", "1 merged view", "14 tasks"],
  },
  {
    title: "Marketing Manager",
    desc: "Ships campaigns end to end",
    prompt: "Build the Q3 launch campaign plan.",
    reply:
      "Created 18 tasks across brief, creative, and paid. Copy drafts are in the doc, and the calendar is blocked through launch week.",
    chips: ["18 tasks", "1 doc", "Calendar"],
  },
  {
    title: "Founder / CEO",
    desc: "Your always-on chief of staff",
    prompt: "Give me the state of the business.",
    reply:
      "Revenue is tracking 4% ahead of plan. Two OKRs are amber. Hiring is behind by 3 roles. Full brief is in your inbox.",
    chips: ["4 OKRs", "Weekly brief", "Hiring"],
  },
];

const DURATION = 6000;

export default function IcpStories() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  // The timer restarts whenever `active` changes, whether that came from the
  // auto-advance below or from a click, so no timestamp is touched in render.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    let startedAt = null;
    let frame = 0;

    const tick = (now) => {
      if (startedAt === null) startedAt = now;
      const t = (now - startedAt) / DURATION;
      if (t >= 1) {
        setActive((a) => (a + 1) % roles.length);
        return;
      }
      setProgress(t);
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active]);

  const pick = (i) => {
    setActive(i);
    setProgress(0);
  };

  const role = roles[active];

  return (
    <section className="bn-icp" aria-label="One Brain. Any job.">
      <div className="bn-container bn-icp-container">
        <header className="bn-icp-header">
          <p className="bn-eyebrow bn-eyebrow-purple">One Brain. Any job.</p>
          <h2 className="bn-h2">
            Brain<sup>2</sup> already knows what to do,
            <br />
            <em>watch it work.</em>
          </h2>
          <p className="bn-lede">
            Your team&apos;s entire way of working is already inside Brain². Just ask. It produces
            what you need, the right way, every time.
          </p>
          <a href="/signup" className="bn-btn bn-btn-primary bn-btn-inline">
            Get started
          </a>
        </header>

        <div className="bn-tab-strip" role="tablist">
          {roles.map((r, i) => (
            <button
              key={r.title}
              type="button"
              role="tab"
              aria-selected={i === active}
              className={`bn-tab${i === active ? " bn-tab-active" : ""}`}
              onClick={() => pick(i)}
            >
              <span className="bn-tab-title">{r.title}</span>
              <span className="bn-tab-desc">{r.desc}</span>
              <span className="bn-tab-underline">
                <span
                  className="bn-tab-progress"
                  style={{ "--progress": i === active ? progress : 0 }}
                />
              </span>
            </button>
          ))}
        </div>

        <div className="bn-stage">
          <span className="bn-stage-glow" aria-hidden="true" />
          <div className="bn-stage-chat" key={active}>
            <div className="bn-msg bn-msg-user">{role.prompt}</div>
            <div className="bn-msg bn-msg-brain">
              {role.reply}
              <span className="bn-msg-chips">
                {role.chips.map((c) => (
                  <span key={c}>{c}</span>
                ))}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
