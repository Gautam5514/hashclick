"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const items = [
  [
    "What information can a client profile hold?",
    "A client can include contact, address, website, industry, referral, notes, status, and optional tax and banking details."
  ],
  [
    "How does Hashboard Clients work?",
    "Admins create or import client records, then connect relevant projects, bookings, leads, billing agreements, invoices, and portal users to the client."
  ],
  [
    "Does Clients connect to the rest of Hashboard?",
    "Yes. Client relationships are used by projects, bookings, leads, agreements, invoices, and client-portal access."
  ],
  [
    "Can clients access Hashboard?",
    "Admins can create or invite a client owner. Additional client users can be assigned to supported projects, with access limited by their client and project relationships."
  ],
  [
    "Can client records be imported in bulk?",
    "Yes. Admins can create multiple client records from supported CSV data, including optional billing details."
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
