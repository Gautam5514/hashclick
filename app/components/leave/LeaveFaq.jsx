"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const items = [
  [
    "Is Hashboard Leave free to use?",
    "Yes! Hashboard Leave is available on the Free Forever plan with unlimited leave requests."
  ],
  [
    "How does Hashboard Leave work?",
    "Submit a request that routes straight to the right approver, with balance and policy checked automatically."
  ],
  [
    "Does Leave connect to the rest of Hashboard?",
    "Yes! Leave stays linked to Attendance and Payroll, so your data never lives in a separate tool."
  ],
  [
    "Can I customize Leave for my team?",
    "Yes, set accrual, carryover, and holiday rules per team or location."
  ],
  [
    "Does Hashboard Brain help with Leave?",
    "Yes! Hashboard Brain can tell you who’s out this week and how many days someone has left."
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
