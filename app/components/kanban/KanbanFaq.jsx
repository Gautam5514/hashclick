"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const items = [
  [
    "Is Hashboard Kanban Board free to use?",
    "Yes! Hashboard's Board view is available on the Free Forever plan with unlimited drag-and-drop cards, custom statuses, and group-by options."
  ],
  [
    "Can I set Work-In-Progress (WIP) limits on Kanban columns?",
    "Yes! You can easily set WIP limits for any column to prevent team overload and identify workflow bottlenecks before they delay projects."
  ],
  [
    "Can I group my Kanban board by Assignee or Priority?",
    "Abolutely. With one click, you can regroup your entire board by Assignee, Priority, Due Date, Tags, or any Custom Field."
  ],
  [
    "How does Hashboard Hash AI work with Kanban Boards?",
    "Hashboard Hash AI can summarize column status across your entire workspace, draft subtasks for board cards, and alert team leads about stuck or overdue tasks."
  ],
  [
    "Can I automate card movements between columns?",
    "Yes! Hashboard Automations can automatically reassign cards, add tags, update due dates, or post chat notifications whenever a card enters a specific column."
  ]
];

export default function KanbanFaq() {
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
