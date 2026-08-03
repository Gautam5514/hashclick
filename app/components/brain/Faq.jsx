"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What makes ClickUp Brain² different from ChatGPT, Claude, or Gemini?",
    a: "Those tools don't know your work. Brain² lives inside your tasks, docs, chat, calendar, email, and connected apps. You never have to explain what you're working on, who's involved, or what's blocking you.",
  },
  {
    q: "Does ClickUp allow AI providers to train on my data?",
    a: "Never. Your data is never used to train third-party AI models. ClickUp maintains SOC 2, ISO 27001, GDPR, and HIPAA compliance, enforces strict zero-retention policies with all AI subprocessors, and Brain² only surfaces information you already have permission to access.",
  },
  {
    q: "How much does ClickUp Brain² cost?",
    a: "Brain² AI starts at $9/user/month and includes unlimited access to Brain², premium models (ChatGPT, Claude, Gemini), and 1,500 AI Super Credits. Free plans can try Brain² before committing. For teams that want the full AI stack (Notetaker, AI Fields, Automations, Super Agents), the Everything AI plan is $28/user/month.",
  },
  {
    q: "Are there usage limits or caps?",
    a: "Brain² conversations are unlimited on any paid plan and do not use AI Super Credits. Day-to-day conversations with Brain² won't run out on you. AI Super Credits (1,500/month included) are used for advanced capabilities like Super Agents, AI Automations, and AI-powered fields.",
  },
  {
    q: "Can I choose which AI model Brain² uses?",
    a: "Yes. Brain² lets you switch between leading models (Claude, GPT, Gemini, and more) with a single click. Every model gets full access to your Workspace context and tools. One subscription, every premium LLM, no separate accounts needed.",
  },
  {
    q: "Can my manager/admin see my Brain² conversations?",
    a: "No. Your conversations with Brain² are private to you. Admins cannot view them.",
  },
  {
    q: "Does ClickUp Brain² remember my preferences and past conversations?",
    a: 'Yes. Brain² has something called "persistent memory". This means Brain² memorizes your role, workflows, and communication style. You can view, edit, or delete personal preferences anytime. Switching from ChatGPT or Claude? You can import your existing memories directly.',
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bn-faq" aria-label="Frequently asked questions">
      <div className="bn-container">
        <header className="bn-faq-header">
          <div className="bn-faq-eyebrow-row">
            <p className="bn-eyebrow bn-eyebrow-purple">FAQs</p>
            <span className="bn-faq-rule" aria-hidden="true" />
          </div>
          <h2 className="bn-h2">
            You have questions
            <br />
            Brain has answers.
          </h2>
        </header>

        <ul className="bn-faq-list">
          {faqs.map((item, i) => (
            <li className="bn-faq-item" key={item.q}>
              <button
                type="button"
                className="bn-faq-q"
                aria-expanded={open === i}
                onClick={() => setOpen(open === i ? -1 : i)}
              >
                <span>{item.q}</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className={`bn-faq-a${open === i ? " bn-faq-a-open" : ""}`}>
                <p>{item.a}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
