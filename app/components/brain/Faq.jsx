"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What makes Hashboard's Hash AI different from ChatGPT, Claude, or Gemini?",
    a: "Hash AI works inside Hashboard with workspace information and actions the signed-in user is permitted to access. It also lets users choose from configured models rather than requiring separate product experiences.",
  },
  {
    q: "What workspace information can Hash AI access?",
    a: "Hash AI uses supported Hashboard information within the authenticated company and the user's role scope. Available answers depend on permissions and the workflow being requested.",
  },
  {
    q: "Which AI models can I use?",
    a: "Available models depend on which providers are configured for the workspace. Hashboard supports models from OpenAI, Anthropic, Google, and xAI in its current model catalog.",
  },
  {
    q: "Can Hash AI make changes in my workspace?",
    a: "Yes, for supported actions such as creating tasks or updating status, priority, deadlines, and assignments. Actions remain subject to membership, role, and workspace validation.",
  },
  {
    q: "Can I choose which AI model Hash AI uses?",
    a: "Yes. You can choose from the models available in your workspace. If a requested model is unavailable, Hashboard uses the configured default model.",
  },
  {
    q: "Does Hash AI respect workspace permissions?",
    a: "Yes. Workspace facts and actions are scoped by company, role, project membership, and the permissions enforced by each supported workflow.",
  },
  {
    q: "Can I connect another AI client to Hashboard?",
    a: "Yes. Hashboard provides MCP access for compatible clients such as ChatGPT and Claude, using scoped authentication and supported Hashboard tools.",
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
            Hash AI has answers.
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
