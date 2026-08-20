"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const items = [
  [
    "How does Hashboard help teams organize task status?",
    "Use structured projects and tasks to keep ownership, priority, dates, descriptions, completion, and current state connected."
  ],
  [
    "How can I identify overloaded team members?",
    "Review permitted employee and open-task context by owner, then adjust supported assignments and deadlines as needed."
  ],
  [
    "What task details can I manage?",
    "Use the task fields supported by Hashboard, including its project relationship, assignee, priority, dates, description, and current state where available."
  ],
  [
    "How does Hash AI work with tasks?",
    "Hash AI can answer supported questions about permitted task and project context and can perform available task actions by request."
  ],
  [
    "Can Hash AI update task records?",
    "Hash AI can perform available task actions when you request them and your role has permission."
  ]
];

export default function KanbanFaq() {
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
