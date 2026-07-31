"use client";

import { useState } from "react";
import { Check, ChevronRight } from "lucide-react";
import Button from "../ui/Button";
import AppMockup from "../shared/AppMockup";
import { cn } from "@/lib/utils";

function ClickUpFlowerIcon({ className = "size-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Top Right Petal - Blue */}
      <circle cx="14.8" cy="9.2" r="4.2" fill="url(#petal_blue)" />
      {/* Bottom Right Petal - Pink */}
      <circle cx="14.8" cy="14.8" r="4.2" fill="url(#petal_pink)" />
      {/* Bottom Left Petal - Purple */}
      <circle cx="9.2" cy="14.8" r="4.2" fill="url(#petal_purple)" />
      {/* Top Left Petal - Orange */}
      <circle cx="9.2" cy="9.2" r="4.2" fill="url(#petal_orange)" />
      {/* Center White Diamond Spark */}
      <path d="M12 9.8L12.6 11.4L14.2 12L12.6 12.6L12 14.2L11.4 11.4L12 9.8Z" fill="white" />
      <defs>
        <linearGradient id="petal_blue" x1="11" y1="5" x2="19" y2="13" gradientUnits="userSpaceOnUse">
          <stop stopColor="#40ddff" />
          <stop offset="1" stopColor="#0091ff" />
        </linearGradient>
        <linearGradient id="petal_pink" x1="11" y1="11" x2="19" y2="19" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ff02f0" />
          <stop offset="1" stopColor="#fa12e3" />
        </linearGradient>
        <linearGradient id="petal_purple" x1="5" y1="11" x2="13" y2="19" gradientUnits="userSpaceOnUse">
          <stop stopColor="#b38cff" />
          <stop offset="1" stopColor="#7612fa" />
        </linearGradient>
        <linearGradient id="petal_orange" x1="5" y1="5" x2="13" y2="13" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ff7e40" />
          <stop offset="1" stopColor="#fc6d2d" />
        </linearGradient>
      </defs>
    </svg>
  );
}

const valueProps = [
  {
    title: "Save money.",
    body: "All Apps, AI, Projects, Chat + 20 more.",
  },
  {
    title: "Save time.",
    body: "All humans working together with perfect context.",
  },
  {
    title: "Create infinite productivity.",
    body: "AI Agents & Workflows.",
  },
];

const row1Pills = ["Projects", "Chat", "Brain MAX", "AI Agents", "Sprints"];
const row2Pills = ["Time Tracking", "Calendar", "Docs", "Whiteboards"];
const row3Pills = ["Automations", "Dashboards", "Scheduling"];

export default function Hero() {
  const [activePill, setActivePill] = useState("Projects");

  return (
    <section className="relative w-full bg-white pt-8 pb-4 md:pt-12 md:pb-6 lg:pt-14 overflow-hidden">
      {/* Container aligned to match ClickUp reference screenshot */}
      <div className="mx-auto w-full max-w-[1650px] px-6 sm:px-10 lg:pl-16 lg:pr-6 xl:pl-20 xl:pr-10">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[480px_1fr] xl:grid-cols-[530px_1fr] xl:gap-14">
          {/* LEFT COLUMN: HERO COPY & 3 ROWS OF PILLS */}
          <div className="flex flex-col items-start text-left max-w-[530px]">
            {/* Moving Light Beam "Train" Border Eyebrow Pill */}
            <a
              href="/ai"
              className="rainbow-pill-wrap group transition-transform hover:scale-[1.02]"
            >
              <div className="rainbow-pill-inner">
                <span>The Best AI is</span>
                <ClickUpFlowerIcon className="size-4 shrink-0" />
                <span className="font-extrabold text-[#202020]">
                  Brain<sup className="text-[10px] font-bold">2</sup>
                </span>
                <ChevronRight className="size-3.5 text-[#7b7b7b] transition-transform group-hover:translate-x-0.5" />
              </div>
            </a>

            {/* Main Headline */}
            <h1 className="font-display mt-5 text-[clamp(2.1rem,3.6vw,3.5rem)] leading-[1.03] font-bold tracking-[-0.03em] text-[#202020]">
              <span>Software to</span>
              <br />
              <span className="whitespace-nowrap">replace all software</span>
            </h1>

            {/* Checkmark Points */}
            <ul className="mt-6 space-y-3">
              {valueProps.map((v) => (
                <li
                  key={v.title}
                  className="flex items-start gap-2.5 text-[15px] leading-tight text-[#646464]"
                >
                  <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center text-[#7612fa]">
                    <Check className="size-4 stroke-[3]" />
                  </span>
                  <span>
                    <strong className="font-bold text-[#202020]">{v.title}</strong>{" "}
                    {v.body}
                  </span>
                </li>
              ))}
            </ul>

            {/* Primary CTA + Subtext */}
            <div className="mt-8 flex items-center gap-3.5">
              <Button
                href="/signup"
                size="lg"
                className="rounded-2xl bg-[#202020] px-7 py-3.5 text-[16px] font-bold text-white shadow-md transition-all hover:bg-black hover:scale-[1.02]"
              >
                Get started. It&apos;s FREE!
              </Button>
              <div className="text-[12.5px] font-medium leading-snug text-[#646464]">
                Free forever. <br />
                No credit card.
              </div>
            </div>

            {/* Sub-label for Pills */}
            <div className="mt-9 text-[10px] font-mono font-bold tracking-widest text-[#7b7b7b] uppercase">
              GET 400% MORE DONE • CUSTOMIZE YOUR WORKSPACE
            </div>

            {/* ALL 3 ROWS OF PILLS */}
            <div className="mt-3.5 flex flex-col gap-2.5 w-full">
              {/* Row 1 */}
              <div className="flex flex-wrap gap-1.5">
                {row1Pills.map((pill) => {
                  const isActive = activePill === pill;
                  return (
                    <button
                      key={pill}
                      type="button"
                      onClick={() => setActivePill(pill)}
                      className={cn(
                        "group relative inline-flex items-center gap-1 rounded-full px-3.5 py-1.5 text-[12.5px] font-bold transition-all",
                        isActive
                          ? "border-2 border-[#0091ff] bg-white text-[#0091ff] shadow-xs"
                          : "border border-dashed border-[#d9d9d9] bg-white text-[#202020] hover:border-[#202020] hover:bg-[#f8f9fa]"
                      )}
                    >
                      <span>{pill}</span>
                      {isActive && (
                        <span className="flex size-3.5 items-center justify-center rounded-full bg-[#0091ff] text-white">
                          <Check className="size-2.5 stroke-[3]" />
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Row 2 */}
              <div className="flex flex-wrap gap-1.5">
                {row2Pills.map((pill) => {
                  const isActive = activePill === pill;
                  return (
                    <button
                      key={pill}
                      type="button"
                      onClick={() => setActivePill(pill)}
                      className={cn(
                        "group relative inline-flex items-center gap-1 rounded-full px-3.5 py-1.5 text-[12.5px] font-bold transition-all",
                        isActive
                          ? "border-2 border-[#0091ff] bg-white text-[#0091ff] shadow-xs"
                          : "border border-dashed border-[#d9d9d9] bg-white text-[#202020] hover:border-[#202020] hover:bg-[#f8f9fa]"
                      )}
                    >
                      <span>{pill}</span>
                      {isActive && (
                        <span className="flex size-3.5 items-center justify-center rounded-full bg-[#0091ff] text-white">
                          <Check className="size-2.5 stroke-[3]" />
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Row 3 */}
              <div className="flex flex-wrap gap-1.5">
                {row3Pills.map((pill) => {
                  const isActive = activePill === pill;
                  return (
                    <button
                      key={pill}
                      type="button"
                      onClick={() => setActivePill(pill)}
                      className={cn(
                        "group relative inline-flex items-center gap-1 rounded-full px-3.5 py-1.5 text-[12.5px] font-bold transition-all",
                        isActive
                          ? "border-2 border-[#0091ff] bg-white text-[#0091ff] shadow-xs"
                          : "border border-dashed border-[#d9d9d9] bg-white text-[#202020] hover:border-[#202020] hover:bg-[#f8f9fa]"
                      )}
                    >
                      <span>{pill}</span>
                      {isActive && (
                        <span className="flex size-3.5 items-center justify-center rounded-full bg-[#0091ff] text-white">
                          <Check className="size-2.5 stroke-[3]" />
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: HERO PRODUCT UI */}
          <div className="relative w-full overflow-hidden">
            <AppMockup activePill={activePill} className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
