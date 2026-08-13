"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const items = [
  [
    "Is Hashboard Meetings free to use?",
    "Yes! Hashboard Meetings is available on the Free Forever plan with unlimited video calls and AI notes."
  ],
  [
    "How does Hashboard Meetings work?",
    "Start a call from any task or doc, and Hashboard Brain writes the notes, summary, and action items automatically."
  ],
  [
    "Does Meetings connect to the rest of Hashboard?",
    "Yes! Meetings stays linked to Chat and Tasks, so your data never lives in a separate tool."
  ],
  [
    "Can I customize Meetings for my team?",
    "Yes, build agendas from linked tasks and assign action items straight from the call."
  ],
  [
    "Does Hashboard Brain help with Meetings?",
    "Yes! Hashboard Brain can write the meeting summary and turn decisions into assigned tasks automatically."
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
