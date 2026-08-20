"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const items = [
  [
    "Which internal user roles are available?",
    "Hashboard supports Admin, Manager, and Employee global roles for internal company users. Space and project access add more specific membership rules."
  ],
  [
    "How does Hashboard Teams work?",
    "Each person belongs to your company workspace. Their role, employee profile, and team memberships shape what they can see and do."
  ],
  [
    "Does Teams connect to the rest of Hashboard?",
    "The same internal user can be associated with spaces, projects, tasks, chat, meetings, attendance, leave, salary history, payroll, and employee documents."
  ],
  [
    "What does an employee profile contain?",
    "Profiles can store employee ID, names, personal and work contact details, birth date, gender, blood group, marital status, address, emergency contact, and onboarding status."
  ],
  [
    "Can employee salary and documents be stored?",
    "Yes. Hashboard keeps employee documents and salary history connected for the people and payroll workflows that need them."
  ],
];

export default function TeamsFaq() {
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
