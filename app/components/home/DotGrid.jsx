"use client";

import { useEffect, useRef } from "react";

const COLS = 25;
const ROWS = 20;
const FILLED_ROWS = 17; // 17 × 25 = 425 of 500 dots — the 85% figure.

// How far the cursor's influence reaches, and how hard it pulls.
const RADIUS = 118;
const MAX_SCALE = 1.45;
const MAX_PUSH = 5;

const dots = Array.from({ length: COLS * ROWS }, (_, i) => {
  const row = Math.floor(i / COLS);
  const col = i % COLS;
  return { row, col, accent: row >= FILLED_ROWS, wave: row + col };
});

export default function DotGrid() {
  const figureRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const figure = figureRef.current;
    const grid = gridRef.current;
    if (!figure || !grid) return;

    // Reveal the purple fills once the grid scrolls into view.
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          figure.classList.add("ach-figure-revealed");
          io.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(figure);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return () => io.disconnect();
    }

    const nodes = Array.from(grid.children);
    let centres = [];
    let frame = 0;
    let pointer = null;

    // Dot centres only change on resize, so measure once and cache.
    const measure = () => {
      const box = grid.getBoundingClientRect();
      centres = nodes.map((node) => {
        const r = node.getBoundingClientRect();
        return { x: r.left - box.left + r.width / 2, y: r.top - box.top + r.height / 2 };
      });
    };

    const paint = () => {
      frame = 0;
      nodes.forEach((node, i) => {
        if (!pointer) {
          node.style.removeProperty("--proximity-scale");
          node.style.removeProperty("--proximity-tx");
          node.style.removeProperty("--proximity-ty");
          node.style.removeProperty("--proximity-opacity");
          node.style.removeProperty("--proximity-z");
          return;
        }

        const c = centres[i];
        const dx = c.x - pointer.x;
        const dy = c.y - pointer.y;
        const dist = Math.hypot(dx, dy);

        if (dist > RADIUS) {
          node.style.removeProperty("--proximity-scale");
          node.style.removeProperty("--proximity-tx");
          node.style.removeProperty("--proximity-ty");
          node.style.removeProperty("--proximity-opacity");
          node.style.removeProperty("--proximity-z");
          return;
        }

        // Ease the falloff so the pull is concentrated near the cursor.
        const t = Math.pow(1 - dist / RADIUS, 1.6);
        const push = dist === 0 ? { x: 0, y: 0 } : { x: dx / dist, y: dy / dist };

        node.style.setProperty("--proximity-scale", (1 + (MAX_SCALE - 1) * t).toFixed(3));
        node.style.setProperty("--proximity-tx", `${(push.x * MAX_PUSH * t).toFixed(2)}px`);
        node.style.setProperty("--proximity-ty", `${(push.y * MAX_PUSH * t).toFixed(2)}px`);
        node.style.setProperty("--proximity-opacity", (0.75 + 0.25 * t).toFixed(3));
        node.style.setProperty("--proximity-z", String(1 + Math.round(t * 10)));
      });
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(paint);
    };

    const onMove = (event) => {
      const box = grid.getBoundingClientRect();
      pointer = { x: event.clientX - box.left, y: event.clientY - box.top };
      schedule();
    };

    const onEnter = () => {
      measure();
      grid.classList.add("ach-grid-hovering");
    };

    const onLeave = () => {
      pointer = null;
      grid.classList.remove("ach-grid-hovering");
      schedule();
    };

    measure();
    grid.addEventListener("pointermove", onMove);
    grid.addEventListener("pointerenter", onEnter);
    grid.addEventListener("pointerleave", onLeave);
    window.addEventListener("resize", measure);

    return () => {
      io.disconnect();
      if (frame) cancelAnimationFrame(frame);
      grid.removeEventListener("pointermove", onMove);
      grid.removeEventListener("pointerenter", onEnter);
      grid.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <figure ref={figureRef} className="ach-figure" role="img" aria-labelledby="ach-dotgrid-caption">
      <div ref={gridRef} className="ach-grid" aria-hidden="true">
        {dots.map((dot) => (
          <span
            key={`${dot.col}-${dot.row}`}
            className={dot.accent ? "ach-dot ach-dot-accent" : "ach-dot"}
            data-col={dot.col}
            data-row={dot.row}
            aria-hidden="true"
          >
            {dot.accent ? null : (
              <span className="ach-dot-fill" style={{ "--w": dot.wave }} />
            )}
          </span>
        ))}
      </div>
      <figcaption id="ach-dotgrid-caption" className="ach-caption">
        <span>
          Fortune 500 companies
          <br />
          that use Hashboard
        </span>
      </figcaption>
    </figure>
  );
}
