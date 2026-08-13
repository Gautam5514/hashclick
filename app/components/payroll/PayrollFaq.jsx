"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const items = [
  [
    "Is Hashboard Payroll free to use?",
    "Yes! Hashboard Payroll is available on the Free Forever plan with unlimited pay runs."
  ],
  [
    "How does Hashboard Payroll work?",
    "Approved attendance hours flow straight into each pay run, with tax withholding and payslips generated automatically."
  ],
  [
    "Does Payroll connect to the rest of Hashboard?",
    "Yes! Payroll stays linked to Attendance and Leave, so your data never lives in a separate tool."
  ],
  [
    "Can I customize Payroll for my team?",
    "Yes, set deductions, benefits, and pay schedules per team or location."
  ],
  [
    "Does Hashboard Brain help with Payroll?",
    "Yes! Hashboard Brain can flag unusual hours or missing timesheets before you approve a pay run."
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
