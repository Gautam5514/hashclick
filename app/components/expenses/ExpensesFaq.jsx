"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const items = [
  [
    "What information is required for an expense?",
    "Each expense requires a date, category, positive amount, goods or services type, and invoice number. Additional fields depend on its type and GST treatment."
  ],
  [
    "How does Hashboard Expenses work?",
    "A user enters the structured expense details and may include notes and a receipt URL. The record remains associated with its creator and company."
  ],
  [
    "Does Expenses connect to the rest of Hashboard?",
    "Expenses are managed alongside Hashboard’s other business and people workflows, but they remain distinct records from customer invoices and payroll entries."
  ],
  [
    "How are goods and service expenses different?",
    "Goods expenses require an HSN code, while service expenses require a SAC code. Hashboard validates the applicable field when the record is saved."
  ],
  [
    "Can I filter and search expenses?",
    "Yes. Filter by type, GST use, category, or date range, and search across category names, invoice numbers, and notes."
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
