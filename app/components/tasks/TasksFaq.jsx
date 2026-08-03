"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const items = [
  ["Is ClickUp Tasks really free?", "Yes. ClickUp Tasks is free forever with unlimited tasks and users. You can upgrade anytime if you need advanced features, but you can start organizing your work today with no credit card required."],
  ["How is this different from a simple to-do app?", "Most to-do apps stop at checklists. ClickUp Tasks turns your to-dos into a complete system—connecting tasks to docs, chat, dashboards, and automation so work doesn’t just get tracked, it actually gets done."],
  ["Will this work for personal tasks and team projects?", "Absolutely. Start with simple personal to-dos, then scale into shared projects, workflows, and cross-team collaboration—without changing tools or rebuilding your system."],
  ["How long does it take to get set up?", "Most people are up and running in minutes. Create tasks instantly, organize as you go, and add structure only when you need it."],
  ["What happens when my work gets more complex?", "Nothing breaks. ClickUp Tasks scales with you—from quick checklists to fully automated workflows—so you never outgrow your system."],
];

export default function TasksFaq() {
  const [open, setOpen] = useState(0);
  return <section className="task-section task-faq"><div className="task-shell"><header className="task-heading"><p className="task-eyebrow">FAQs</p><h2>Questions? We&apos;ve got answers.</h2></header><div className="task-faq-list">{items.map(([q,a],i) => <article className={open === i ? "open" : ""} key={q}><button type="button" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}><span>{q}</span><ChevronDown /></button><div className="task-faq-answer"><p>{a}</p></div></article>)}</div></div></section>;
}
