"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const items = [
  [
    "Is Hashboard Spaces free to use?",
    "Yes! Hashboard Spaces is available on the Free Forever plan with unlimited Spaces, Folders, and Lists."
  ],
  [
    "How does Hashboard Spaces work?",
    "Organize work into a Space → Folder → List hierarchy, with permissions and templates for every team."
  ],
  [
    "Does Spaces connect to the rest of Hashboard?",
    "Yes! Spaces stays linked to Tasks, Docs, and Dashboards, so your data never lives in a separate tool."
  ],
  [
    "Can I customize Spaces for my team?",
    "Yes, set permissions and templates per Space, down to individual Lists."
  ],
  [
    "Does Hashboard Brain help with Spaces?",
    "Yes! Hashboard Brain can search across every Space you have access to and point you to the right project instantly."
  ],
];

export default function SpacesFaq() {
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
