"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const items = [
  [
    "What does Hashboard Attendance record?",
    "Attendance stores the attendance date, check-in and check-out times, worked time, status, and any permitted manual adjustment details."
  ],
  [
    "How does Hashboard Attendance work?",
    "Employees enroll a face profile and use face verification to submit their daily check-in and check-out. Their status and worked time are then available in the permitted attendance views."
  ],
  [
    "Does Attendance connect to the rest of Hashboard?",
    "Attendance and approved leave can be used as inputs to supported payroll calculations, alongside configured holidays, week-offs, and payroll rules."
  ],
  [
    "Who can view team attendance?",
    "Employees can review their own attendance. Team-wide summaries, individual employee history, and manual corrections are limited to authorized roles."
  ],
  [
    "Can attendance records be corrected?",
    "Authorized admins can add or deduct minutes for a specific employee and date, with a note that preserves the reason for the correction."
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
