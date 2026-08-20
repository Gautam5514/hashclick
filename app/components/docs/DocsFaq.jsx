"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const items = [
  [
    "How can teams keep project context in Hashboard?",
    "Use project details, task descriptions, supported file attachments, Chat, and structured workflows to keep essential information close to execution."
  ],
  [
    "Can we connect existing information to the work?",
    "Teams can bring relevant details into project and task descriptions, share supported files, and use Chat for ongoing decisions and updates."
  ],
  [
    "How can I share information with teammates?",
    "Use permitted company or project Chat channels, supported file attachments, project details, and task descriptions."
  ],
  [
    "What context can Hash AI use?",
    "Hash AI can use supported, permitted workspace records such as projects, tasks, people, clients, meetings, and operational data."
  ],
  [
    "Where should teams review live work?",
    "Open the relevant project, task, people, scheduling, or business workflow to review its current records directly."
  ]
];

export default function DocsFaq() {
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
