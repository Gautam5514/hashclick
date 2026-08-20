"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const items = [
  [
    "How can teams review progress in Hashboard?",
    "Use project and task views for delivery progress, dedicated operational views for business records, and Hash AI for supported workspace questions."
  ],
  [
    "What information can I review?",
    "Supported views cover projects, tasks, people, attendance, leave, clients, leads, meetings, invoices, expenses, payroll, and related workflows."
  ],
  [
    "How can I share current information with my team?",
    "Use company and project Chat, supported records, and the relevant workspace views so authorized team members can review the same current context."
  ],
  [
    "How current is the information?",
    "Supported workflows read their current stored records. Availability and refresh behavior depend on the specific Hashboard workflow."
  ],
  [
    "How do I update the underlying work?",
    "Open the relevant project, task, or operational workflow, or request a supported Hash AI action if your role has permission."
  ]
];

export default function DashboardsFaq() {
  const [open, setOpen] = useState(-1);
  return (
    <section className="task-section task-faq">
      <div className="task-shell">
        <header className="task-faq-header">
          <h2>FAQs</h2>
        </header>
        <div className="task-faq-list">
          {items.map(([q, a], i) => (
            <article className={open === i ? "open" : ""} key={q}>
              <button
                type="button"
                aria-expanded={open === i}
                onClick={() => setOpen(open === i ? -1 : i)}
              >
                <span>{q}</span>
                <ChevronDown />
              </button>
              <div className="task-faq-answer">
                <p>{a}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
