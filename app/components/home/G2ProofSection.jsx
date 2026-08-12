"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

function G2BadgeCard({ title, category, type = "red", year = "2026" }) {
  const colors = {
    red: "border-red-200 bg-gradient-to-b from-red-50 to-white text-red-700",
    blue: "border-sky-200 bg-gradient-to-b from-sky-50 to-white text-sky-700",
    purple: "border-purple-200 bg-gradient-to-b from-purple-50 to-white text-purple-700",
    orange: "border-orange-200 bg-gradient-to-b from-orange-50 to-white text-orange-700",
    gold: "border-amber-200 bg-gradient-to-b from-amber-50 to-white text-amber-800",
  };

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-between rounded-xl border p-2.5 text-center shadow-2xs w-[105px] h-[98px] shrink-0 select-none transition-transform hover:scale-105",
        colors[type] || colors.red
      )}
    >
      <div className="flex size-4.5 items-center justify-center rounded-full bg-red-500 text-white font-black text-[9px]">
        G
      </div>
      <div className="text-[8.5px] font-bold uppercase tracking-tight leading-tight line-clamp-2">
        {title}
      </div>
      <div className="w-full border-t border-gray-200/60 my-0.5" />
      <div className="text-[7.5px] font-semibold text-gray-500 uppercase">
        {category}
      </div>
      <div className="text-[8px] font-bold text-gray-800 uppercase tracking-wider">
        WINTER {year}
      </div>
    </div>
  );
}

function DotMatrix() {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const totalDots = 300;
  const activeCount = Math.floor(totalDots * 0.85); // 85%

  const centerIdx = 157; // Center dot for wave focus

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div className="grid grid-cols-20 gap-1.5 p-2">
        {Array.from({ length: totalDots }).map((_, i) => {
          const isActive = i < activeCount;
          const isHovered = hoveredIdx === i;
          const isCenter = i === centerIdx;

          return (
            <span
              key={i}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              className={cn(
                "size-2 rounded-full transition-all duration-300",
                isActive
                  ? "bg-[#7612fa]"
                  : "bg-[#e5e7eb]",
                isCenter && "size-3 bg-[#7612fa] shadow-sm shadow-purple-400 animate-pulse",
                isHovered && "scale-150 bg-[#fa12e3]"
              )}
            />
          );
        })}
      </div>

      <div className="mt-6 text-center text-[11px] font-mono font-bold tracking-[0.14em] text-[#9ca3af] uppercase">
        FORTUNE 500 COMPANIES THAT USE HASHBOARD
      </div>
    </div>
  );
}

export default function G2ProofSection() {
  return (
    <section className="relative w-full bg-white py-16 md:py-24 border-t border-[#e8e8e8] overflow-hidden">
      <div className="mx-auto w-full max-w-[1550px] px-6 sm:px-10 lg:px-16">
        {/* 2x2 Grid Container */}
        <div className="overflow-hidden rounded-[28px] border border-[#e8e8e8] bg-white shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#e8e8e8]">
            {/* QUADRANT 1: Top Left - G2 Headline & Button */}
            <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-12 text-left border-b md:border-b border-[#e8e8e8]">
              <div>
                <span className="text-[11px] font-mono font-bold tracking-[0.14em] text-[#7612fa] uppercase">
                  RATED 4.7/5 BY 10,000+ USERS ON G2
                </span>
                <h2 className="font-display mt-4 text-[clamp(2.1rem,3.6vw,3rem)] leading-[1.08] font-bold tracking-[-0.03em] text-[#111827]">
                  #1 most referenced company on G2 reports
                </h2>
              </div>

              <div className="mt-10">
                <Link
                  href="/solutions"
                  className="group inline-flex items-center gap-2 rounded-xl bg-[#1e232a] px-5 py-2.5 text-[14.5px] font-bold text-white shadow-md transition-all hover:bg-black hover:scale-[1.02] active:scale-95 cursor-pointer"
                >
                  <span>Read customer stories</span>
                  <ArrowRight className="size-4 stroke-[2.5] transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>

            {/* QUADRANT 2: Top Right - G2 Badges Pattern */}
            <div className="relative flex items-center justify-center p-6 md:p-8 bg-[#fafafa]/50 border-b md:border-b border-[#e8e8e8] overflow-hidden min-h-[300px]">
              {/* Fade overlays top & bottom */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-white via-white/80 to-transparent z-10" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white via-white/80 to-transparent z-10" />

              {/* Badges Grid Pattern */}
              <div className="grid grid-cols-3 gap-3 scale-95 opacity-95">
                <G2BadgeCard title="Best Software" category="AI Products" type="red" />
                <G2BadgeCard title="Project Management" category="Products" type="blue" />
                <G2BadgeCard title="Agentic AI" category="Products" type="purple" />
                <G2BadgeCard title="HR Software" category="Products" type="orange" />
                <G2BadgeCard title="Global Software" category="Companies" type="blue" />
                <G2BadgeCard title="Development" category="Products" type="gold" />
                <G2BadgeCard title="Leader" category="Winter 2026" type="red" />
                <G2BadgeCard title="High Performer" category="Enterprise" type="blue" />
                <G2BadgeCard title="Momentum Leader" category="Winter 2026" type="purple" />
              </div>
            </div>

            {/* QUADRANT 3: Bottom Left - Dot Matrix 85% Fortune 500 */}
            <div className="flex items-center justify-center p-8 sm:p-10 bg-white">
              <DotMatrix />
            </div>

            {/* QUADRANT 4: Bottom Right - Powering Businesses Stats */}
            <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-12 text-left bg-white">
              <div>
                <span className="text-[11px] font-mono font-bold tracking-[0.14em] text-[#7612fa] uppercase">
                  CONVERGENCE POWERHOUSE
                </span>
                <h2 className="font-display mt-4 text-[clamp(2.1rem,3.6vw,3rem)] leading-[1.08] font-bold tracking-[-0.03em] text-[#111827]">
                  Powering businesses of all sizes
                </h2>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-6">
                <div>
                  <div className="font-display text-[38px] md:text-[44px] font-bold tracking-tight text-[#111827] leading-none">
                    85%
                  </div>
                  <div className="mt-2 text-[13px] font-medium text-[#6b7280]">
                    of Fortune 500 companies
                  </div>
                </div>

                <div>
                  <div className="font-display text-[38px] md:text-[44px] font-bold tracking-tight text-[#111827] leading-none">
                    3M+
                  </div>
                  <div className="mt-2 text-[13px] font-medium text-[#6b7280]">
                    tasks automated by Agents
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
