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
            alt="Hashboard flag planted on a mountain peak"
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
              We started Hashboard to bring the work of running a company closer together. Projects, conversations, people, clients, meetings, attendance, leave, billing, and everyday operations should share useful context instead of becoming separate islands.
            </p>
            <p>
              Hashboard connects structured workflows with Hash AI assistance. Teams can choose an available model, ask about permitted workspace information, and request supported actions while keeping people in control of the work.
            </p>
            <p>
              We&apos;re focused on making daily work clearer: who owns the task, what is due, which client it supports, when the meeting happens, and what needs attention next. That clarity helps teams spend less time chasing updates and more time moving work forward.
            </p>
            <p>
              Our mission is simple: help teams operate with clearer context, stronger ownership, and fewer disconnected handoffs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
