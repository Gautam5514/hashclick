"use client";

import { useState } from "react";
import { Check, ChevronRight, ArrowRight } from "lucide-react";
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
  const [activePills, setActivePills] = useState([
    "Projects",
    "Chat",
    "Brain MAX",
    "AI Agents",
  ]);
  const [lastSelectedPill, setLastSelectedPill] = useState("Projects");

  const [waveKey, setWaveKey] = useState(0);

  const togglePill = (pill) => {
    setLastSelectedPill(pill);
    setWaveKey((prev) => prev + 1);
    setActivePills((prev) =>
      prev.includes(pill) ? prev.filter((p) => p !== pill) : [...prev, pill]
    );
  };

  const renderPill = (pill) => {
    const isActive = activePills.includes(pill);
    return (
      <button
        key={pill}
        type="button"
        onClick={() => togglePill(pill)}
        className={cn(
          "group relative inline-flex items-center rounded-full px-4 py-1.5 text-[13.5px] transition-all cursor-pointer select-none",
          isActive
            ? "border-2 border-[#0091ff] bg-white text-[#0091ff] font-bold shadow-2xs"
            : "border-[1.5px] border-dashed border-[#d1d5db] bg-white text-[#4b5563] font-semibold hover:border-gray-400 hover:text-[#111827]"
        )}
      >
        <span>{pill}</span>
        {isActive && (
          <span className="absolute -top-1.5 -right-1.5 flex size-4.5 items-center justify-center rounded-full bg-[#0091ff] text-white shadow-xs z-10">
            <Check className="size-3 stroke-[3.5]" />
          </span>
        )}
      </button>
    );
  };

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
              <span className="normal sm:whitespace-nowrap">replace all software</span>
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
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3.5 w-full sm:w-auto">
              <Button
                href="/signup"
                size="lg"
                className="w-full sm:w-auto text-center rounded-2xl bg-[#202020] px-7 py-3.5 text-[16px] font-bold text-white shadow-md transition-all hover:bg-black hover:scale-[1.02]"
              >
                Get started. It&apos;s FREE!
              </Button>
              <div className="text-[12.5px] font-medium leading-snug text-[#646464]">
                Free forever. <br className="hidden sm:inline" />
                No credit card.
              </div>
            </div>

            {/* Sub-label for Pills */}
            <div className="mt-9 text-[11px] font-mono font-bold tracking-normal sm:tracking-[0.14em] text-[#374151] uppercase">
              GET 400% MORE DONE • CUSTOMIZE YOUR WORKSPACE
            </div>

            {/* ALL 3 ROWS OF PILLS */}
            <div className="mt-4 flex flex-col gap-3 w-full">
              {/* Row 1 */}
              <div className="flex flex-wrap gap-2">
                {row1Pills.map(renderPill)}
              </div>

              {/* Row 2 */}
              <div className="flex flex-wrap gap-2">
                {row2Pills.map(renderPill)}
              </div>

              {/* Row 3 */}
              <div className="flex flex-wrap gap-2">
                {row3Pills.map(renderPill)}
              </div>

              {/* Activate Button Container with ClickUp Emitting Wave Burst */}
              <div className="mt-3.5 flex items-center">
                <div className="group relative inline-flex items-center justify-center">
                  {/* Wave Ring emitting outwards from behind the button */}
                  <span
                    key={waveKey}
                    className="absolute inset-0 rounded-full bg-[#e2e8f0] animate-clickup-wave pointer-events-none"
                  />

                  {/* Inner Compact Dark Pill Button */}
                  <button
                    type="button"
                    onClick={() => setWaveKey((prev) => prev + 1)}
                    className="relative z-10 inline-flex items-center gap-2 rounded-xl bg-gradient-to-b from-[#282c35] to-[#181b22] px-4.5 py-1.5 text-[13.5px] font-bold text-white shadow-md transition-all hover:from-[#323844] hover:to-[#1e232d] hover:scale-[1.03] active:scale-95 cursor-pointer"
                  >
                    <span>Activate</span>
                    <ArrowRight className="size-3.5 stroke-[2.8] transition-transform group-hover:translate-x-0.4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: HERO PRODUCT UI */}
          <div className="relative w-full overflow-hidden">
            <AppMockup activePill={lastSelectedPill} className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
