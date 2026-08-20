"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const items = [
  [
    "Does Hashboard currently include a full Docs or Wiki editor?",
    "No. Hashboard does not currently claim a dedicated rich-text Docs or Wiki product. Use supported project details, task descriptions, files, Chat, and structured workflows for workspace context."
  ],
  [
    "Can I import Google Docs, Notion, or Confluence pages?",
    "A one-click document migration tool is not currently advertised as a supported Hashboard capability."
  ],
  [
    "How can I share information with teammates?",
    "Use permitted company or project Chat channels, supported file attachments, project details, and task descriptions."
  ],
  [
    "What context can Hash AI use?",
    "Hash AI can use supported, permitted workspace records exposed to it. It does not claim to search a nonexistent company-wide Docs repository."
  ],
  [
    "Can I embed live tasks and views inside a Doc?",
    "Yes! You can embed live tasks, lists, boards, and widgets directly inside any document. When a task status changes, the doc embed updates in real time."
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
