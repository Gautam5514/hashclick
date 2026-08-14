"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const items = [
  [
    "What information is used to generate payroll?",
    "A run uses eligible employee salary data, attendance, approved leave, company holidays, week-offs, and the payroll period’s working-day calculations."
  ],
  [
    "How does Hashboard Payroll work?",
    "An authorized user generates a monthly draft, reviews employee entries, applies supported adjustments, and an admin finalizes the run when it is ready."
  ],
  [
    "Does Payroll connect to the rest of Hashboard?",
    "Yes. Attendance, approved leave, holidays, week-offs, and employee salary snapshots are used as payroll calculation inputs."
  ],
  [
    "Can a payroll entry be adjusted?",
    "Authorized users can apply a supported manual addition or deduction with context while the run is in Draft. Finalized runs must be reopened before changes."
  ],
  [
    "What can employees see?",
    "Employees can view their own finalized payroll history and entries. Draft runs and administrative controls remain restricted."
  ],
];

export default function PayrollFaq() {
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
