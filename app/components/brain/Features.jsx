"use client";

import { useEffect, useRef, useState } from "react";

const features = [
  {
    title: "Clear task summaries on demand",
    body: "Turn assigned tasks, priorities, deadlines, and overdue work into a focused summary of what needs attention.",
    image: "/brain-2/sticky-1.png",
    bg: "/brain-2/bg-1.png",
  },
  {
    title: "Workspace answers",
    em: "based on current data",
    body: "Ask about accessible projects, tasks, people, clients, meetings, attendance, leave, invoices, and other supported workflows.",
    image: "/brain-2/sticky-2.png",
    bg: "/brain-2/bg-2.png",
  },
  {
    title: "Actions without leaving the conversation",
    body: "Create tasks, update statuses and priorities, change deadlines, and manage assignments through supported Hash AI actions.",
    image: "/brain-2/sticky-3.png",
    bg: "/brain-2/bg-3.png",
  },
];

function Title({ title, em }) {
  return (
    <h3 className="bn-feature-title">
      {title}
      {em ? (
        <>
          {" "}
          <em>{em}</em>
        </>
      ) : null}
    </h3>
  );
}

function Media({ feature }) {
  return (
    <div className="bn-feature-media" style={{ "--feature-bg": `url(${feature.bg})` }}>
      <span className="bn-feature-noise" aria-hidden="true" />
      <img src={feature.image} alt="" loading="lazy" />
    </div>
  );
}

export default function Features() {
  const [active, setActive] = useState(0);
  const blocks = useRef([]);

  // Whichever copy block is crossing the middle of the viewport owns the visual.
  useEffect(() => {
    const nodes = blocks.current.filter(Boolean);
    if (!nodes.length) return undefined;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(Number(entry.target.dataset.index));
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return (
    <section className="bn-features" aria-label="Hash AI features">
      <div className="bn-features-inner">
        {/* Desktop: copy scrolls in column one, the visual stays pinned in column two. */}
        <div className="bn-features-grid">
          {features.map((f, i) => (
            <div
              className="bn-feature-copy"
              data-index={i}
              ref={(el) => {
                blocks.current[i] = el;
              }}
              key={f.title}
            >
              <Title title={f.title} em={f.em} />
              <p className="bn-feature-body">{f.body}</p>
            </div>
          ))}

          <div className="bn-feature-column">
            <div className="bn-feature-sticky">
              {features.map((f, i) => (
                <div
                  className={`bn-feature-layer${i === active ? " is-active" : ""}`}
                  aria-hidden={i !== active}
                  key={f.title}
                >
                  <Media feature={f} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Narrow screens get the plain stack — no pinning. */}
        <div className="bn-features-stack">
          {features.map((f) => (
            <article className="bn-feature" key={f.title}>
              <div className="bn-feature-copy">
                <Title title={f.title} em={f.em} />
                <p className="bn-feature-body">{f.body}</p>
              </div>
              <Media feature={f} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
