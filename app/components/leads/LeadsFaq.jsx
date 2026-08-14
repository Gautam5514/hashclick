"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const items = [
  [
    "Which pipeline stages are supported?",
    "Leads can be New, Contacted, Qualified, Proposal, Negotiation, Won, or Lost."
  ],
  [
    "How does Hashboard Leads work?",
    "Create or import a lead, maintain its prospect and opportunity details, assign ownership, update its stage, and record activity as the opportunity progresses."
  ],
  [
    "Does Leads connect to the rest of Hashboard?",
    "Leads can connect to bookings and booking forms, retain activity history, reference a source client where applicable, and convert into a new client record."
  ],
  [
    "What activities can be recorded?",
    "Supported activity types include notes, calls, emails, meetings, follow-ups, status changes, and assignments. Follow-ups can have scheduled and completed times."
  ],
  [
    "Can a lead become a client?",
    "Yes. The supported conversion flow creates and links a client record while preserving the original lead and its activity history."
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
