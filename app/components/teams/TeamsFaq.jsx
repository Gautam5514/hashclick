"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const items = [
  [
    "Is Hashboard Teams free to use?",
    "Yes! Hashboard Teams is available on the Free Forever plan with unlimited team members and directory entries."
  ],
  [
    "How does Hashboard Teams work?",
    "Every team, member, and role lives in one searchable directory with permissions applied consistently."
  ],
  [
    "Does Teams connect to the rest of Hashboard?",
    "Yes! Teams stays linked to Attendance and Payroll, so your data never lives in a separate tool."
  ],
  [
    "Can I customize Teams for my team?",
    "Yes, assign roles and onboarding checklists per team."
  ],
  [
    "Does Hashboard Brain help with Teams?",
    "Yes! Hashboard Brain can flag who’s overloaded this week so managers can rebalance work before burnout."
  ],
];

export default function TeamsFaq() {
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
