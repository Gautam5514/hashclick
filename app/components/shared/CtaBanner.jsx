"use client";

import Link from "next/link";
import AppMockup from "./AppMockup";
import { cn } from "@/lib/utils";

function ClickUpLogoMark({ className = "size-8" }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 22L20 14L30 22"
        stroke="url(#cta_logo_grad)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 29C17 32 23 32 27 29"
        stroke="url(#cta_logo_grad)"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="cta_logo_grad" x1="10" y1="14" x2="30" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7612fa" />
          <stop offset="0.5" stopColor="#fa12e3" />
          <stop offset="1" stopColor="#fc6d2d" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function CtaBanner({
  title = "All your work, all your people, all powered by AI",
  subtitle,
  primary = { label: "Get started FREE", href: "/signup" },
  showMockup = true,
}) {
  return (
    <section className="relative w-full bg-white py-16 md:py-24 overflow-hidden">
      <div className="mx-auto w-full max-w-[1550px] px-6 sm:px-10 lg:px-16">
        {/* Rounded Gradient Card Banner */}
        <div
          className="relative overflow-hidden rounded-[36px] md:rounded-[44px] pt-14 pb-0 px-6 sm:px-10 md:px-16 text-center text-white shadow-2xl"
          style={{
            background:
              "linear-gradient(115deg, #5b21b6 0%, #7c3aed 25%, #d946ef 55%, #f97316 95%)",
          }}
        >
          {/* Subtle noise/radial glow over layer */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent opacity-60" />

          {/* Header Content */}
          <div className="relative z-10 mx-auto max-w-3xl">
            {/* Top White Logo Tile */}
            <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-2xl bg-white shadow-xl p-3 hover:scale-105 transition-transform">
              <ClickUpLogoMark className="size-9" />
            </div>

            {/* Headline */}
            <h2 className="font-display text-[clamp(2.2rem,4.8vw,3.75rem)] leading-[1.05] font-bold tracking-[-0.035em] text-white text-balance">
              {title}
            </h2>

            {subtitle && (
              <p className="mx-auto mt-4 max-w-xl text-[17px] font-medium leading-relaxed text-white/90">
                {subtitle}
              </p>
            )}

            {/* CTA Button */}
            <div className="mt-7 mb-10 flex justify-center">
              <Link
                href={primary.href}
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-[15px] font-extrabold text-[#111827] shadow-xl transition-all hover:bg-gray-100 hover:scale-105 active:scale-95 cursor-pointer"
              >
                {primary.label}
              </Link>
            </div>
          </div>

          {/* Embedded Desktop & Overlapping Mobile Phone Mockup */}
          {showMockup && (
            <div className="relative z-10 mx-auto max-w-5xl mt-6 -mb-6 sm:-mb-10">
              {/* Main Desktop App Mockup */}
              <div className="rounded-2xl border-4 border-white/20 bg-white shadow-2xl overflow-hidden">
                <AppMockup activePill="Projects" className="w-full" />
              </div>

              {/* Overlapping Mobile Dark Mode Phone Mockup */}
              <div className="absolute bottom-2 right-4 sm:right-10 md:right-16 hidden sm:block w-[240px] md:w-[260px] rounded-[32px] border-4 border-gray-900 bg-[#121316] p-3.5 text-white shadow-2xl text-left transition-transform hover:-translate-y-1">
                {/* Status Bar */}
                <div className="mb-2 flex items-center justify-between text-[10px] font-bold text-gray-400 px-1">
                  <span>9:41</span>
                  <div className="flex items-center gap-1">
                    <span className="text-[9px]">📶</span>
                    <span className="text-[9px]">🔋</span>
                  </div>
                </div>

                {/* Mobile Header */}
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-[12px] font-bold text-white flex items-center gap-1">
                    <span className="size-3.5 rounded-full bg-orange-500 inline-block" />
                    Mango Tech
                  </span>
                  <span className="size-5 rounded-full bg-blue-500 text-[9px] font-bold flex items-center justify-center">
                    ZE
                  </span>
                </div>

                {/* Quick Action Tiles */}
                <div className="grid grid-cols-3 gap-1.5 mb-3 text-[9px] font-bold">
                  <div className="rounded-lg bg-[#271d2b] p-2 text-[#ff7ecb]">
                    <div>Replies</div>
                    <div className="text-[11px] font-extrabold text-white mt-0.5">12 new</div>
                  </div>
                  <div className="rounded-lg bg-[#1a2035] p-2 text-[#7abfff]">
                    <div>Today</div>
                    <div className="text-[11px] font-extrabold text-white mt-0.5">3 items</div>
                  </div>
                  <div className="rounded-lg bg-[#232429] p-2 text-gray-300">
                    <div>Assigned</div>
                    <div className="text-[11px] font-extrabold text-white mt-0.5">3 comments</div>
                  </div>
                </div>

                {/* Recents list */}
                <div className="space-y-1.5 text-[10px] text-gray-300">
                  <div className="text-[9px] font-bold text-gray-500 uppercase">Recents</div>
                  <div className="rounded-md bg-white/5 p-1.5 font-medium flex items-center gap-1.5">
                    <span className="size-2 rounded-full bg-purple-400" />
                    <span>Social Media Content Calendar</span>
                  </div>
                  <div className="rounded-md bg-white/5 p-1.5 font-medium flex items-center gap-1.5">
                    <span className="size-2 rounded-full bg-blue-400" />
                    <span>Instructional Resources</span>
                  </div>
                  <div className="rounded-md bg-white/5 p-1.5 font-medium flex items-center gap-1.5">
                    <span className="size-2 rounded-full bg-emerald-400" />
                    <span>Travel Tips & Tricks</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
