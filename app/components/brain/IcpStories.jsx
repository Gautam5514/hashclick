"use client";

import { useEffect, useRef, useState } from "react";

const roles = [
  {
    title: "Project Manager",
    desc: "Reviews projects and priorities",
    project: "Phoenix",
    accent: "#7b68ee",
    messages: [
      ["Lena", "Can we still ship the onboarding flow Friday?", "2:14 pm", "L"],
      ["Sam", "Design is done, but legal still owes us copy", "2:14 pm", "S"],
      ["Priya", "I can pick it up after the mobile handoff", "2:15 pm", "P"],
    ],
    action: "Hash AI summarized the project and highlighted the blocked task",
  },
  {
    title: "Engineering Lead",
    desc: "Reviews development workload",
    project: "Platform",
    accent: "#7357ff",
    messages: [
      ["Lena", "my PR’s still waiting for review 💀", "2:14 pm", "L"],
      ["Sam", "we’re going to miss the deadline", "2:14 pm", "S"],
      ["Priya", "Marcus had to hop on the incident", "2:15 pm", "P"],
    ],
    action: "Hash AI showed the overdue review and current assignee workload",
  },
  {
    title: "Agency Owner",
    desc: "Reviews client delivery work",
    project: "Client Delivery",
    accent: "#ff5b8d",
    messages: [
      ["Maya", "Northwind needs the new concept today", "9:41 am", "M"],
      ["Alex", "Vertex hasn’t approved the last round", "9:42 am", "A"],
      ["Jon", "I’ve got capacity after lunch", "9:43 am", "J"],
    ],
    action: "Hash AI summarized the client projects and upcoming deadlines",
  },
  {
    title: "Head of Ops",
    desc: "Monitors operational work",
    project: "Operations",
    accent: "#00b884",
    messages: [
      ["Noah", "Launch readiness is split across two lists", "11:06 am", "N"],
      ["Ava", "Product is tracking a different deadline", "11:07 am", "A"],
      ["Mia", "Can we get one source of truth?", "11:08 am", "M"],
    ],
    action: "Hash AI listed active work, owners, and overdue items",
  },
  {
    title: "Marketing Manager",
    desc: "Tracks campaign delivery",
    project: "Q3 Launch",
    accent: "#ff9f1a",
    messages: [
      ["Zoë", "Paid creative is ready for review", "3:21 pm", "Z"],
      ["Eli", "The landing page copy needs one more pass", "3:22 pm", "E"],
      ["Nina", "Launch calendar still has two gaps", "3:23 pm", "N"],
    ],
    action: "Hash AI summarized campaign tasks and identified missing owners",
  },
  {
    title: "Founder / CEO",
    desc: "Reviews business activity",
    project: "Company HQ",
    accent: "#ef4c5b",
    messages: [
      ["Rina", "Revenue is tracking ahead of the month", "8:31 am", "R"],
      ["Owen", "Two company OKRs moved to amber", "8:32 am", "O"],
      ["Kai", "Hiring is behind by three roles", "8:33 am", "K"],
    ],
    action: "Hash AI prepared a role-based workspace summary",
  },
];

const DURATION = 6200;

function Sparkle() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2c.7 5.7 4.3 9.3 10 10-5.7.7-9.3 4.3-10 10-.7-5.7-4.3-9.3-10-10 5.7-.7 9.3-4.3 10-10Z" fill="currentColor" />
    </svg>
  );
}

export default function IcpStories() {
  const [active, setActive] = useState(1);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const elapsedRef = useRef(0);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    let startedAt;
    let frame;
    const tick = (now) => {
      if (startedAt === undefined) startedAt = now - elapsedRef.current;
      const elapsed = now - startedAt;
      elapsedRef.current = elapsed;
      const next = elapsed / DURATION;
      if (next >= 1) {
        elapsedRef.current = 0;
        setProgress(0);
        setActive((value) => (value + 1) % roles.length);
        return;
      }
      setProgress(next);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, paused]);

  const selectRole = (index) => {
    elapsedRef.current = 0;
    setProgress(0);
    setActive(index);
  };

  const role = roles[active];

  return (
    <section className="bn-icp" aria-labelledby="bn-icp-title">
      <div className="bn-container bn-icp-container">
        <header className="bn-icp-header">
          <p className="bn-eyebrow bn-eyebrow-purple">One assistant. Many workflows.</p>
          <div className="bn-icp-rule" />
          <h2 className="bn-h2" id="bn-icp-title">
            Ask about the work that matters,<br />
            <em>then take action.</em>
          </h2>
          <p className="bn-lede">
            Hash AI works with supported workspace data and actions while respecting each user&apos;s role and access.
          </p>
          <a href="/signup" className="bn-btn bn-btn-light bn-btn-inline">Get started</a>
        </header>

        <div className="bn-icp-demo">
          <div className="bn-role-list" role="tablist" aria-label="Choose a role">
            {roles.map((item, index) => (
              <button
                key={item.title}
                type="button"
                role="tab"
                aria-selected={index === active}
                className={`bn-role${index === active ? " bn-role-active" : ""}`}
                onClick={() => selectRole(index)}
              >
                <span className="bn-role-progress"><i style={{ "--progress": index === active ? progress : 0 }} /></span>
                <strong>{item.title}</strong>
                <small>{item.desc}</small>
              </button>
            ))}
          </div>

          <div className="bn-workspace-wrap">
            <span className="bn-workspace-aurora" aria-hidden="true" />
            <div className="bn-workspace" key={active}>
              <div className="bn-workspace-topbar">
                <div className="bn-project-name">
                  <span style={{ background: role.accent }}>C</span>
                  <strong>{role.project}</strong>
                  <i>⌄</i>
                </div>
                <div className="bn-project-actions"><span>♧</span><span>♙</span><strong>Share</strong></div>
              </div>
              <div className="bn-workspace-tabs">
                <span className="bn-chat-icon">#</span><strong>Chat</strong><i />
                <span className="bn-view-plus">＋</span><span>View</span>
              </div>
              <div className="bn-chat-feed">
                {role.messages.map(([name, text, time, initial], index) => (
                  <div className="bn-chat-row" style={{ "--delay": `${index * 120}ms` }} key={name}>
                    <span className={`bn-avatar bn-avatar-${index}`}>{initial}</span>
                    <div><p><strong>{name}</strong><time>{time}</time></p><span>{text}</span></div>
                  </div>
                ))}
                <div className="bn-brain-action">
                  <span><Sparkle /></span>
                  <div><strong>Hash AI response</strong><p>{role.action}</p></div>
                </div>
              </div>
              <button className="bn-demo-pause" type="button" onClick={() => setPaused((value) => !value)} aria-label={paused ? "Play demo" : "Pause demo"}>
                <span style={{ "--progress": progress }} />{paused ? "▶" : "Ⅱ"}
              </button>
              <div className="bn-composer">
                <p>Write to {role.project} project</p>
                <div><span>＋</span><span>♧</span><span>@</span><span>◉</span><span>☺</span><span>▣</span><span>♩</span><b>➤</b></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
