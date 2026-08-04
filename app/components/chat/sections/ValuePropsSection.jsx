"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { valueProps } from "../chat-content";

/**
 * Auto-advancing carousel. The active card's bar fills over its slide, then
 * hands off to the next card and loops. Clicking a card jumps to it and
 * restarts that slide.
 */
export default function ValuePropsSection({ items = valueProps }) {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);

  const current = items[active];
  const isVideo = current.media.type === "video";

  const advance = useCallback(() => {
    setProgress(0);
    setActive((i) => (i + 1) % items.length);
  }, [items.length]);

  const select = (index) => {
    setProgress(0);
    setActive(index);
  };

  // Image slides run on a clock — the bar itself is a CSS animation, so the
  // fill costs no re-renders and we only wake up to hand off. Video slides are
  // driven by the clip's own progress instead.
  useEffect(() => {
    if (isVideo) return undefined;
    const timer = setTimeout(advance, current.duration || 6000);
    return () => clearTimeout(timer);
  }, [active, isVideo, current.duration, advance]);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video?.duration) return;
    setProgress(Math.min(video.currentTime / video.duration, 1));
  };

  return (
    <section className="chat-section chat-section-flush" aria-label="How chat and work come together">
      <div className="chat-shell">
        <div className="chat-prop-cards">
          {items.map((item, i) => {
            const isActive = i === active;
            return (
              <button
                key={item.title}
                type="button"
                onClick={() => select(i)}
                aria-pressed={isActive}
                className={`chat-prop-card ${isActive ? "active" : ""}`}
              >
                <span className="chat-prop-head">
                  <span className="chat-prop-check" aria-hidden="true">
                    <Check className="w-3 h-3" strokeWidth={4} />
                  </span>
                  <h3>{item.title}</h3>
                </span>

                <p>{item.description}</p>

                <span className="chat-prop-bar" aria-hidden="true">
                  <span
                    // Keyed on `active` so the CSS fill restarts on every hand-off
                    key={active}
                    className={`chat-prop-bar-fill ${isActive && !isVideo ? "running" : ""}`}
                    style={
                      isActive && isVideo
                        ? { width: `${progress * 100}%` }
                        : { animationDuration: `${item.duration || 6000}ms` }
                    }
                  />
                </span>
              </button>
            );
          })}
        </div>

        <div className="chat-prop-preview">
          {isVideo ? (
            <video
              key={current.media.src}
              ref={videoRef}
              autoPlay
              muted
              playsInline
              onTimeUpdate={handleTimeUpdate}
              onEnded={advance}
              aria-label={current.media.alt}
            >
              <source src={current.media.src} type="video/mp4" />
            </video>
          ) : (
            <Image
              key={current.media.src}
              src={current.media.src}
              alt={current.media.alt}
              width={1040}
              height={580}
              className="w-full h-auto object-cover rounded-2xl"
            />
          )}
        </div>
      </div>
    </section>
  );
}
