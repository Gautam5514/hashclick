"use client";

import { useEffect, useRef, useState } from "react";
import { Plus, Send, Sparkles } from "lucide-react";

const roles = [
  {
    title: "Manage projects",
    desc: "Track progress, priorities, and deadlines",
    project: "Phoenix",
    conversation: [
      { role: "user", text: "Summarize the Phoenix project" },
      { role: "ai", text: "Phoenix is 68% complete. 3 tasks are overdue and 2 are due this week." },
      { role: "user", text: "Who owns the overdue tasks?" },
      { role: "ai", text: "Sarah M. owns 2 overdue tasks, and Dean P. owns 1." },
    ],
  },
  {
    title: "Create task",
    desc: "Add and assign tasks without leaving chat",
    project: "Platform",
    conversation: [
      { role: "user", text: "Create a task: fix login bug, due tomorrow" },
      { role: "ai", text: "Created “Fix login bug” in Platform, due tomorrow, assigned to you." },
      { role: "user", text: "Add Marcus as a collaborator" },
      { role: "ai", text: "Added Marcus to “Fix login bug.”" },
    ],
  },
  {
    title: "Chat and ask time",
    desc: "Check attendance and check-in times",
    project: "People Ops",
    conversation: [
      { role: "user", text: "What time did Priya check in today?" },
      { role: "ai", text: "Priya checked in at 9:47 am and is currently active." },
      { role: "user", text: "Who checked in after 10am?" },
      { role: "ai", text: "2 people checked in after 10am — Dean P. (10:12 am) and Zeb E. (10:24 am)." },
    ],
  },
  {
    title: "Ask about projects",
    desc: "Get status updates and spot blockers",
    project: "Operations",
    conversation: [
      { role: "user", text: "Which projects are behind schedule?" },
      { role: "ai", text: "2 projects are behind — Operations Rollout (4 days) and Client Onboarding (2 days)." },
      { role: "user", text: "What's blocking Operations Rollout?" },
      { role: "ai", text: "Launch readiness is split across two lists, waiting on final sign-off." },
    ],
  },
  {
    title: "Know about client",
    desc: "Look up client details, invoices, and history",
    project: "Client Delivery",
    conversation: [
      { role: "user", text: "What's the status of the Northwind account?" },
      { role: "ai", text: "Northwind has 2 open invoices totaling $4,200 and 1 active project." },
      { role: "user", text: "When did we last meet with them?" },
      { role: "ai", text: "Last meeting was Tuesday. Next one is scheduled for Friday at 3 pm." },
    ],
  },
  {
    title: "Ask anything",
    desc: "Get answers about your entire workspace",
    project: "Company HQ",
    conversation: [
      { role: "user", text: "How is the team doing this month?" },
      { role: "ai", text: "Revenue is tracking ahead of plan, 2 OKRs are amber, and hiring is behind by 3 roles." },
      { role: "user", text: "What needs my attention first?" },
      { role: "ai", text: "Hiring is the biggest gap — 3 open roles with no active candidates." },
    ],
  },
];

const DURATION = 6200;

export default function IcpStories() {
  const [active, setActive] = useState(1);
  const [progress, setProgress] = useState(0);
  const elapsedRef = useRef(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
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
  }, [active]);

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
          <div className="bn-role-list" role="tablist" aria-label="Choose what to ask Hash AI">
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
            <div className="bn-workspace" key={active}>
              <div className="bn-workspace-topbar">
                <div className="bn-project-name">
                  <span>{role.project.charAt(0)}</span>
                  <strong>{role.project}</strong>
                </div>
              </div>
              <div className="bn-chat-feed">
                {role.conversation.map((turn, index) =>
                  turn.role === "user" ? (
                    <p className="bn-msg bn-msg-user" style={{ "--delay": `${index * 150}ms` }} key={index}>
                      {turn.text}
                    </p>
                  ) : (
                    <div className="bn-msg bn-msg-ai" style={{ "--delay": `${index * 150}ms` }} key={index}>
                      <span className="bn-msg-ai-icon"><Sparkles size={11} /></span>
                      <p>{turn.text}</p>
                    </div>
                  )
                )}
              </div>
              <div className="bn-composer">
                <p>Ask Hash AI about {role.project}...</p>
                <div>
                  <span className="bn-composer-plus"><Plus size={14} /></span>
                  <img src="/brain-2/logos/chatgpt.svg" width={15} height={15} alt="" className="bn-composer-model" />
                  <Send size={16} className="bn-composer-send" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
