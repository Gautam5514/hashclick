"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const items = [
  [
    "Is Hashboard Expenses free to use?",
    "Yes! Hashboard Expenses is available on the Free Forever plan with unlimited receipt captures and reports."
  ],
  [
    "How does Hashboard Expenses work?",
    "Photograph a receipt and Hashboard extracts the vendor, amount, and date automatically, then routes it for approval."
  ],
  [
    "Does Expenses connect to the rest of Hashboard?",
    "Yes! Expenses stays linked to Invoicing and Payroll, so your data never lives in a separate tool."
  ],
  [
    "Can I customize Expenses for my team?",
    "Yes, set approval chains and category rules by team, amount, or vendor."
  ],
  [
    "Does Hashboard Brain help with Expenses?",
    "Yes! Hashboard Brain can flag which teams are closest to going over budget before it happens."
  ],
];

export default function ExpensesFaq() {
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
