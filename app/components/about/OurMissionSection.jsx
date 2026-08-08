"use client";

import Image from "next/image";

export default function OurMissionSection() {
  return (
    <section id="mission" className="bg-white py-16 sm:py-24 border-t border-[#f0eee9] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Mountain Banner Graphic: real "Our mission." text layered over a
            plain mountain + flag photo (kept as separate elements so the
            headline is selectable/readable text, not pixels baked into an image) */}
        <div
          className="relative mx-auto mb-10 w-full [container-type:inline-size] transition-transform duration-500 hover:scale-[1.01]"
          style={{ aspectRatio: "1024 / 344" }}
        >
          <h2
            className="our-mission-gradient-text absolute left-1/2 top-[19%] z-0 w-[96%] -translate-x-1/2 text-center font-display font-extrabold leading-none"
            style={{ fontSize: "clamp(2.5rem, 15cqw, 8.5rem)" }}
          >
            Our mission.
          </h2>
          <Image
            src="/about/mountain-transparent.png"
            alt="ClickUp flag planted on a mountain peak"
            fill
            className="object-contain select-none z-10 relative pointer-events-none"
            priority
          />
        </div>

        {/* Mission Headline + Copy — copy block matches the heading's width, text justified for straight edges */}
        <div className="max-w-xl mx-auto">
          <h2 className="text-center text-3xl sm:text-4xl font-extrabold font-display text-[#202020]">
            Maximize human productivity.
          </h2>

          <div className="mt-6 space-y-[30px] text-justify text-lg text-[#646464] leading-relaxed font-normal">
            <p>
              We started ClickUp because the way the world works is broken. Teams juggle dozens of disconnected tools - tasks in one place, conversations in another, documents somewhere else - and critical context gets lost in between. We always knew there had to be a better way. So we built one platform to replace them all. While others scramble to bundle fragmented tools or bolt on AI as an afterthought, we&apos;ve been building toward convergence from the start.
            </p>
            <p>
              Today, we&apos;re at the most exciting inflection point in the history of software: the convergence of software, AI, and humans. For the first time, technology doesn&apos;t just organize your work - it understands it, anticipates it, and acts on it. ClickUp is where this convergence lives. Where humans and AI work side by side, in one place, with full context - and where every team can finally focus on the work that actually matters.
            </p>
            <p>
              Millions of teams around the world already rely on ClickUp to power all of their work. We&apos;re laser-focused on removing the busywork from work - the constant toggling, the misalignment, the lost context that drains productivity every single day. We envision a world where work feels effortlessly organized, contagiously creative, and endlessly efficient.
            </p>
            <p>
              Our mission is clear: maximize human productivity. Not by making people work harder, but by fundamentally reinventing how work gets done - through the convergence of everything.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
