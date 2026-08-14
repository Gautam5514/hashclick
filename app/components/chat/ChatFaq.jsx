"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const items = [
  [
    "What types of channels can I create?",
    "Hashboard supports company channels for organization-wide communication and project channels for discussions tied to individual projects."
  ],
  [
    "Who can access a project channel?",
    "Access is based on company, project, channel membership, and user permissions. People only see conversations they are authorized to access."
  ],
  [
    "Does Hashboard Chat support threaded replies?",
    "Yes. Team members can reply to individual messages in threads, keeping focused discussions separate from the main channel."
  ],
  [
    "Can files be shared in Chat?",
    "Yes. Supported files can be attached to messages and accessed by authorized channel members."
  ],
  [
    "Can I search and save previous messages?",
    "Yes. Search helps you find accessible messages, while pins and bookmarks keep important information easy to revisit."
  ]
];

export default function ChatFaq() {
  const [open, setOpen] = useState(-1);
  return (
    <section className="chat-section">
      <div className="chat-shell">
        <header className="chat-faq-header">
          <h2>FAQs</h2>
        </header>
        <div className="chat-faq-list">
          {items.map(([q, a], i) => (
            <div className="chat-faq-item" key={q}>
              <button
                type="button"
                className="chat-faq-button"
                aria-expanded={open === i}
                onClick={() => setOpen(open === i ? -1 : i)}
              >
                <span>{q}</span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${open === i ? "rotate-180 text-[#e02fa8]" : ""}`} />
              </button>
              {open === i && (
                <div className="chat-faq-answer">
                  <p>{a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
