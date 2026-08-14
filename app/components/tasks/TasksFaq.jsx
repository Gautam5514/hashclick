"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const items = [
  ["Is Hashboard Tasks included with Hashboard?", "Tasks are a core part of the Hashboard workspace. Available features and usage limits may depend on your selected subscription plan."],
  ["How is this different from a simple to-do app?", "Hashboard connects work to projects, workspaces, priorities, deadlines, statuses, and team members so responsibilities remain clear."],
  ["Can I manage personal and team tasks?", "Yes. Personal tasks manage your own action items, while project tasks coordinate shared work with assignees, priorities, deadlines, statuses, and subtasks."],
  ["Can more than one person be assigned to a task?", "Yes. A project task can be assigned to one or multiple members of your organization."],
  ["Can Hash AI help manage tasks?", "Yes. Hash AI can answer questions about accessible workspace data and help create or update tasks through conversation, subject to your permissions."],
];

export default function TasksFaq() {
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
