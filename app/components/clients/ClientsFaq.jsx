"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const items = [
  [
    "Is Hashboard Clients free to use?",
    "Yes! Hashboard Clients is available on the Free Forever plan with unlimited client profiles."
  ],
  [
    "How does Hashboard Clients work?",
    "Every contact, project, invoice, and file for a client rolls up onto one profile automatically."
  ],
  [
    "Does Clients connect to the rest of Hashboard?",
    "Yes! Clients stays linked to Leads and Invoicing, so your data never lives in a separate tool."
  ],
  [
    "Can I customize Clients for my team?",
    "Yes, give each client a branded portal and control exactly what they can see."
  ],
  [
    "Does Hashboard Brain help with Clients?",
    "Yes! Hashboard Brain can summarize a client’s full history—open projects, invoices, and recent conversations—in seconds."
  ],
];

export default function ClientsFaq() {
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
