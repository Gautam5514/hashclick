"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const items = [
  [
    "What can be configured for a leave type?",
    "A leave type can specify whether it is paid, whether it requires a balance, its optional yearly limit, and whether it is active."
  ],
  [
    "How does Hashboard Leave work?",
    "An employee submits a request against a leave type and date range. Authorized admins or managers then approve or reject an eligible pending request."
  ],
  [
    "Does Leave connect to the rest of Hashboard?",
    "Approved leave is considered by supported attendance reporting and payroll calculations, alongside working days, holidays, and week-offs."
  ],
  [
    "How are leave balances tracked?",
    "Balances are maintained per employee, leave type, and year using opening, credited, used, and remaining values."
  ],
  [
    "Can approved leave be cancelled?",
    "Yes. Employees can request cancellation, while authorized admins or managers can approve or reject that cancellation and restore balance when applicable."
  ],
];

export default function LeaveFaq() {
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
