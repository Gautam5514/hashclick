"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const items = [
  [
    "Is ClickUp Chat included in the free plan?",
    "Yes! ClickUp Chat is built directly into every ClickUp workspace, including the Free Forever plan."
  ],
  [
    "How is ClickUp Chat different from Slack or Microsoft Teams?",
    "Traditional chat apps isolate communication from where work actually happens. ClickUp Chat unifies messaging, tasks, docs, and AI in a single app—so every message can instantly become a task and context is never lost."
  ],
  [
    "Can I import my existing Slack channels and message history?",
    "Yes! ClickUp provides a 1-click Slack migration tool that transfers channels, message history, users, and attachments in minutes with zero downtime."
  ],
  [
    "Does ClickUp Chat support video and voice huddles?",
    "Yes, ClickUp SyncUp allows you to start instant 1-click voice and video calls directly inside any chat thread."
  ],
  [
    "How do AI Chat Agents work in ClickUp Chat?",
    "ClickUp Brain AI agents can answer questions based on your workspace data, draft replies, summarize long threads, and automatically create tasks from action items."
  ]
];

export default function ChatFaq() {
  const [open, setOpen] = useState(-1);
  return (
    <section className="chat-section">
      <div className="chat-shell">
        <header className="chat-faq-header">
          <h2>FAQs</h2>
        </header>
        <div className="chat-faq-list">
          {items.map(([q, a], i) => (
            <div className="chat-faq-item" key={q}>
              <button
                type="button"
                className="chat-faq-button"
                aria-expanded={open === i}
                onClick={() => setOpen(open === i ? -1 : i)}
              >
                <span>{q}</span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${open === i ? "rotate-180 text-[#e02fa8]" : ""}`} />
              </button>
              {open === i && (
                <div className="chat-faq-answer">
                  <p>{a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
