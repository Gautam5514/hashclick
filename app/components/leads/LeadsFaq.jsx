"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const items = [
  [
    "Is Hashboard Leads free to use?",
    "Yes! Hashboard Leads is available on the Free Forever plan with unlimited pipeline stages and contacts."
  ],
  [
    "How does Hashboard Leads work?",
    "Every inbound lead lands in a visual pipeline automatically, and you drag it through stages until it’s won."
  ],
  [
    "Does Leads connect to the rest of Hashboard?",
    "Yes! Leads stays linked to Clients and Invoicing, so your data never lives in a separate tool."
  ],
  [
    "Can I customize Leads for my team?",
    "Yes, build a pipeline with exactly the stages your sales process needs."
  ],
  [
    "Does Hashboard Brain help with Leads?",
    "Yes! Hashboard Brain can score leads by engagement and flag which deals need attention this week."
  ],
];

export default function LeadsFaq() {
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
