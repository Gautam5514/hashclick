"use client";

import { useRef, useState } from "react";

// The poster's progressive blur is ten stacked backdrop layers, each masked
// slightly further down the card — see .tm-blur-1 … .tm-blur-10.
const BLUR_LAYERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function TestimonialCard({ story }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const start = () => {
    const video = videoRef.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // play() rejects if the browser blocks it or the pointer leaves mid-load.
    video.play().then(
      () => setPlaying(true),
      () => setPlaying(false),
    );
  };

  const stop = () => {
    const video = videoRef.current;
    setPlaying(false);
    if (!video) return;
    video.pause();
    video.currentTime = 0;
  };

  return (
    <button
      type="button"
      className={`tm-card${playing ? " tm-card-playing" : ""}`}
      aria-label={`Play the ${story.company} story`}
      onMouseEnter={start}
      onMouseLeave={stop}
      onFocus={start}
      onBlur={stop}
    >
      <span className="tm-cover">
        <img src={story.cover} width="1080" height="1920" alt="" loading="lazy" />
      </span>

      {story.video ? (
        <video
          ref={videoRef}
          className="tm-video"
          src={story.video}
          poster={story.cover}
          muted
          loop
          playsInline
          preload="none"
          tabIndex={-1}
          aria-hidden="true"
        />
      ) : null}

      {BLUR_LAYERS.map((n) => (
        <span key={n} className={`tm-blur tm-blur-${n}`} aria-hidden="true" />
      ))}

      <span className="tm-meta">
        <span className="tm-logo">
          <img
            src={story.logo}
            width={story.logoWidth}
            height={story.logoHeight}
            alt={story.company}
            loading="lazy"
          />
        </span>
        <p className="tm-quote">{story.quote}</p>
        <span className="tm-name">
          <p>
            {story.name}
            <br />
            {story.role}
          </p>
        </span>
      </span>

      <span className="tm-play" aria-hidden="true" />
    </button>
  );
}
