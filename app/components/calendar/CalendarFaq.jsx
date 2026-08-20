"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const items = [
  [
    "Which external calendar does Hashboard support?",
    "The implemented calendar connection uses Google Calendar. Hashboard reads supported primary-calendar events and creates or updates Google events for managed bookings."
  ],
  [
    "What appears in the Hashboard calendar feed?",
    "The event feed combines accessible Hashboard bookings with supported events from the connected Google Calendar for the requested time range."
  ],
  [
    "How does Hashboard check availability?",
    "Availability considers active Hashboard bookings and busy intervals from the relevant connected Google Calendar before a slot is returned or accepted."
  ],
  [
    "Which booking changes update Google Calendar?",
    "Supported updates, rescheduling, cancellation, attendee changes, and host delegation patch or remove the connected event when the user has permission."
  ],
  [
    "Who can see a meeting?",
    "Employees see meetings they host or attend, while admins and managers can review the wider company schedule when their role allows it."
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
