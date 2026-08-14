"use client";

import { useEffect, useRef } from "react";

const words =
  "Hash AI brings workspace answers and supported actions into one conversation, helping teams understand priorities and keep everyday work moving.".split(
    " ",
  );

const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));

export default function Quote() {
  const sectionRef = useRef(null);
  const wordRefs = useRef([]);
  const citeRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const paint = () => {
      frame = 0;
      if (reducedMotion.matches) {
        wordRefs.current.forEach((word) => word?.style.setProperty("--light", "1"));
        citeRef.current?.style.setProperty("--cite-light", "1");
        return;
      }

      const rect = section.getBoundingClientRect();
      const travel = Math.max(1, rect.height - window.innerHeight);
      const progress = clamp(-rect.top / travel);
      const sweep = progress * (words.length + 5);

      wordRefs.current.forEach((word, index) => {
        const light = clamp(sweep - index, 0, 1);
        word?.style.setProperty("--light", light.toFixed(3));
      });
      citeRef.current?.style.setProperty("--cite-light", clamp((progress - 0.82) / 0.14).toFixed(3));
    };

    const schedulePaint = () => {
      if (!frame) frame = requestAnimationFrame(paint);
    };

    paint();
    window.addEventListener("scroll", schedulePaint, { passive: true });
    window.addEventListener("resize", schedulePaint);
    reducedMotion.addEventListener("change", schedulePaint);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedulePaint);
      window.removeEventListener("resize", schedulePaint);
      reducedMotion.removeEventListener("change", schedulePaint);
    };
  }, []);

  return (
    <section className="bn-quote" aria-label="Hash AI product statement" ref={sectionRef}>
      <div className="bn-quote-sticky">
        <div className="bn-container bn-quote-inner">
          <blockquote className="bn-quote-body">
            <span className="bn-quote-mark" aria-hidden="true">&ldquo;</span>
            {words.map((word, index) => (
              <span
                key={`${word}-${index}`}
                className="bn-quote-word"
                ref={(node) => { wordRefs.current[index] = node; }}
              >
                {word}{" "}
              </span>
            ))}
            <span className="bn-quote-mark" aria-hidden="true">&rdquo;</span>
          </blockquote>
          <footer className="bn-quote-cite" ref={citeRef}>
            <strong className="bn-quote-logo">HASH AI</strong>
            <span className="bn-quote-divider" aria-hidden="true" />
            <span className="bn-quote-person">
              <strong>Workspace assistance</strong>
              <span>Grounded in Hashboard</span>
            </span>
          </footer>
        </div>
      </div>
    </section>
  );
}
