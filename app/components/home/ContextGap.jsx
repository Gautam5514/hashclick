"use client";

import { useState } from "react";
import { Play, X } from "lucide-react";
import { Container } from "../ui/Container";

export default function ContextGap() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section className="relative w-full bg-white py-16 md:py-24 overflow-hidden">
      <Container size="wide">
        {/* Section Header - Reduced font weight & formatted into 2 clean lines */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-[clamp(2.1rem,4vw,3.4rem)] leading-[1.06] font-bold tracking-[-0.03em] text-[#202020]">
            <span>60% of work is lost in context</span>
            <br />
            <span className="whitespace-nowrap font-semibold text-[#646464]">
              - and AI is lost without it
            </span>
          </h2>
          <p className="mt-4 text-[15.5px] font-medium text-[#7b7b7b]">
            Work Sprawl is killing context and destroying productivity.
          </p>
        </div>

        {/* Borderless Graphic Image Container with Mouse-Following Custom Play Video Cursor */}
        <div
          onClick={() => setIsVideoOpen(true)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseMove={handleMouseMove}
          className="group relative mt-12 w-full overflow-hidden bg-white cursor-none select-none"
        >
          {/* Left & Right Soft Edge Gradient Overlays */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-36 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-36 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

          {/* Mouse-Following Custom "Play Video" Cursor Badge (High z-40 so it stays above all overlays) */}
          {isHovered && (
            <div
              className="pointer-events-none absolute z-40 flex items-center gap-3 rounded-2xl bg-[#111111] px-5 py-3 text-[14px] font-bold text-white shadow-2xl transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${cursorPos.x}px`,
                top: `${cursorPos.y}px`,
              }}
            >
              <span className="flex size-6 items-center justify-center rounded-xl bg-white text-[#111111]">
                <Play className="size-3 fill-[#111111] translate-x-0.5" />
              </span>
              <span className="whitespace-nowrap">Play Video</span>
            </div>
          )}

          {/* Pure Borderless Graphic Image */}
          <div className="relative w-full overflow-hidden bg-white">
            <img
              src="/context-sprawl-placeholder.webp"
              alt="60% of work is lost in context - Work Sprawl Graphic"
              className="w-full h-auto object-cover"
              loading="eager"
            />
          </div>
        </div>


      </Container>

      {/* Video Modal Lightbox Popup */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fade-in"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-black shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-50 flex size-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-colors hover:bg-white/40"
            >
              <X className="size-5" />
            </button>

            {/* Video iFrame */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="ClickUp Context Video"
                className="size-full border-none"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
