"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const items = [
  [
    "What is a Space in Hashboard?",
    "A Space is a team-level home for members, projects, project templates, related bookings, and activity."
  ],
  [
    "How does Hashboard Spaces work?",
    "Managers and admins can create spaces with a name, description, icon, and initial members. Projects are then created within the appropriate space."
  ],
  [
    "Does Spaces connect to the rest of Hashboard?",
    "Yes. Projects, tasks, project channels, templates, and supported bookings retain their space context."
  ],
  [
    "What roles are available inside a Space?",
    "Space memberships support Manager, Member, and Viewer roles. Company-level permissions also affect who can create, update, or delete spaces."
  ],
  [
    "Can Spaces use reusable templates?",
    "Spaces can contain project templates made from predefined tasks, priorities, ordering, subtasks, and optional due-date offsets."
  ],
];

export default function SpacesFaq() {
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
