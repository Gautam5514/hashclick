"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const items = [
  [
    "Is Hashboard Scheduling free to use?",
    "Yes! Hashboard Scheduling is available on the Free Forever plan with unlimited booking pages, availability rules, and calendar sync."
  ],
  [
    "How do people book time with me?",
    "Share your personal or team booking link. Invitees pick an open slot based on your live availability and a confirmed meeting is created instantly—no back-and-forth emails."
  ],
  [
    "Can I set buffers and limits between meetings?",
    "Absolutely. Add buffer time before and after meetings, cap how many bookings you take per day, and set minimum notice so your schedule never gets overloaded."
  ],
  [
    "Does Hashboard support round-robin and team booking?",
    "Yes! Route bookings evenly across a team, or require multiple hosts to attend the same meeting with combined availability."
  ],
  [
    "Will Scheduling stay synced with my calendar?",
    "Yes! Hashboard checks your connected Google Calendar or Outlook in real time, so booking pages only ever show slots that are actually free."
  ]
];

export default function SchedulingFaq() {
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
