"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const items = [
  [
    "Is Hashboard Invoicing free to use?",
    "Yes! Hashboard Invoicing is available on the Free Forever plan with unlimited invoices sent."
  ],
  [
    "How does Hashboard Invoicing work?",
    "Generate a branded invoice straight from tracked time or tasks, then send it and track payment status automatically."
  ],
  [
    "Does Invoicing connect to the rest of Hashboard?",
    "Yes! Invoicing stays linked to Clients and Expenses, so your data never lives in a separate tool."
  ],
  [
    "Can I customize Invoicing for my team?",
    "Yes, set recurring schedules, currencies, and payment reminders per client."
  ],
  [
    "Does Hashboard Brain help with Invoicing?",
    "Yes! Hashboard Brain can flag which clients are past due and draft the follow-up reminder for you."
  ],
];

export default function InvoicingFaq() {
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
