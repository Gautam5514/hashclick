"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const items = [
  [
    "Is Hashboard Attendance free to use?",
    "Yes! Hashboard Attendance is available on the Free Forever plan with unlimited clock-ins and timesheet exports."
  ],
  [
    "How does Hashboard Attendance work?",
    "Team members clock in and out from any device, and every entry is timestamped and rolled into a timesheet automatically."
  ],
  [
    "Does Attendance connect to the rest of Hashboard?",
    "Yes! Attendance stays linked to Payroll and Leave, so your data never lives in a separate tool."
  ],
  [
    "Can I customize Attendance for my team?",
    "Yes, set shift schedules, geofenced locations, and break rules per team."
  ],
  [
    "Does Hashboard Brain help with Attendance?",
    "Yes! Hashboard Brain can flag late arrivals, missed shifts, and unusual overtime before payroll runs."
  ],
];

export default function AttendanceFaq() {
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
