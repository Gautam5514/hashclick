"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const items = [
  [
    "Are Hashboard Docs free?",
    "Yes! Hashboard Docs are available on the Free Forever plan with unlimited creation, rich text formatting, and real-time collaboration."
  ],
  [
    "Can I import Google Docs, Notion, or Confluence pages?",
    "Yes! Hashboard provides 1-click importers to migrate your existing Google Docs, Notion pages, and Confluence spaces seamlessly with zero data loss."
  ],
  [
    "Can I share Hashboard Docs with external clients or guests?",
    "Absolutely. You can share docs privately with specific team members, grant view-only access to guests, or publish public read-only pages with custom web links."
  ],
  [
    "How does Hashboard Hash AI work with Docs?",
    "Hashboard Brain acts as your company assistant. You can ask Brain to write content, translate text, summarize meeting notes, or answer questions based on all documents in your workspace."
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
