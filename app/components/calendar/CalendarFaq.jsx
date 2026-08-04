"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const items = [
  [
    "Is ClickUp Calendar free to use?",
    "Yes! ClickUp Calendar is available on the Free Forever plan with unlimited calendar views, Google Calendar sync, and drag-and-drop scheduling."
  ],
  [
    "Does ClickUp Calendar sync with Google Calendar and Outlook?",
    "Yes! ClickUp offers 2-way real-time synchronization with Google Calendar and Outlook. Changes made in ClickUp update your external calendar instantly."
  ],
  [
    "Can I block time for tasks directly on the calendar?",
    "Abolutely. You can drag and drop any task from your workspace directly onto your calendar grid to block focus time and set estimated durations."
  ],
  [
    "How does ClickUp Brain AI help with calendar management?",
    "ClickUp Brain AI can find open meeting slots across team schedules, summarize daily agendas, draft meeting notes, and auto-schedule tasks based on priority."
  ],
  [
    "Can I view my team's availability in a single calendar?",
    "Yes! You can overlay multiple team members' calendars side-by-side to compare schedules, check workload, and find available meeting times effortlessly."
  ]
];

export default function CalendarFaq() {
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
