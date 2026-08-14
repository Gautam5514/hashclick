"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const items = [
  [
    "Who can configure booking pages?",
    "Company admins can create, update, activate, deactivate, and delete tenant-scoped booking page configurations."
  ],
  [
    "How does Hashboard Scheduling work?",
    "A public page loads its configured content and fields. Availability is checked for the selected range, and a valid submission creates a booking and supported calendar or provider event."
  ],
  [
    "Does Scheduling connect to the rest of Hashboard?",
    "Yes. Booking pages create bookings that retain host, provider, calendar, lead, client, space, and form context where applicable."
  ],
  [
    "What can be customized on a booking page?",
    "The configuration supports tenant branding, sidebar content, discussion points, form fields, an internal host, meeting provider, active state, and optional webhook settings."
  ],
  [
    "Which meeting providers are available?",
    "A booking page can use Google Meet, Zoom, or no video provider. The chosen host must have the connections required by that configuration."
  ],
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
