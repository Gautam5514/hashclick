"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const items = [
  [
    "Are Hashboard Dashboards free?",
    "Yes! Hashboard Dashboards are available on the Free Forever plan with standard widgets. Advanced reporting and unlimited widgets are available on Unlimited and Business plans."
  ],
  [
    "What kinds of charts and widgets can I build?",
    "You can build line charts, bar graphs, pie charts, sprint burn-down/burn-up charts, time tracking summaries, calculation cards, custom field rollups, and even embed live docs or web pages."
  ],
  [
    "Can I share Dashboards with external clients or guests?",
    "Absolutely. You can share dashboards privately with team members, grant view-only access to external clients, or publish public read-only dashboards via secure links."
  ],
  [
    "How often do Dashboards update?",
    "Dashboards update in real time! As soon as a team member completes a task, logs time, or updates a status, your dashboard widgets immediately reflect the change."
  ],
  [
    "Can I edit tasks directly from a Dashboard widget?",
    "Yes! Hashboard Dashboards are fully interactive. Clicking on any chart segment or widget list item opens the task card directly so you can edit assignees, due dates, and statuses without leaving the dashboard."
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
