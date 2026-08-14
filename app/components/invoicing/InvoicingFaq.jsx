"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const items = [
  [
    "How is an invoice created in Hashboard?",
    "An invoice starts as a draft under a client billing agreement. Eligible users can then update its dates, notes, tax details, and line items before finalization."
  ],
  [
    "How does Hashboard Invoicing work?",
    "Draft invoices are reviewed and finalized to receive a controlled invoice number. Payments are recorded manually against the invoice with their method and reference details."
  ],
  [
    "Does Invoicing connect to the rest of Hashboard?",
    "Each invoice belongs to a client and billing agreement and can optionally retain project context. Payments and line items remain attached to that invoice."
  ],
  [
    "Which invoice statuses are supported?",
    "Invoices support Draft, Finalized, Partially Paid, Paid, Cancelled, and Void states. Available actions depend on the current state."
  ],
  [
    "What payment information can be recorded?",
    "A payment record can include amount, method, reference, note, payment date, and the user who recorded it."
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
