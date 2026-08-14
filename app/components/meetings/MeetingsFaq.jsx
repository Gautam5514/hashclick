"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const items = [
  [
    "Which meeting providers does Hashboard support?",
    "Internal meetings can use Google Meet or Zoom when the meeting owner has the required connection. A calendar event can also be created without a video provider."
  ],
  [
    "How does Hashboard Meetings work?",
    "Create an internal meeting with its title, description, timing, timezone, provider, and attendees. Hashboard creates the supported calendar and meeting-provider records."
  ],
  [
    "Does Meetings connect to the rest of Hashboard?",
    "Bookings can retain supported links to a space, client, lead, booking page, host, and internal attendees."
  ],
  [
    "Can a meeting be rescheduled or cancelled?",
    "Yes. Authorized hosts, admins, or managers can reschedule supported meetings, and permitted users can cancel or update them according to the booking rules."
  ],
  [
    "Can another teammate host the meeting?",
    "Supported meetings can be delegated to another internal host when the current user has permission and the new host has the required provider connection."
  ],
];

export default function MeetingsFaq() {
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
