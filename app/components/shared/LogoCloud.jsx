"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const workflowSets = [
  ["Projects", "Tasks", "Chat", "Calendar", "Meetings", "Clients"],
  ["People", "Attendance", "Leave", "Payroll", "Invoices", "Expenses"],
];

export default function LogoCloud({ className, headline = "BUILT TO CONNECT EVERY TEAM" }) {
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsFading(true);
      const swapTimer = setTimeout(() => {
        setCurrentSetIndex((current) => (current + 1) % workflowSets.length);
        setIsFading(false);
      }, 500);
      return () => clearTimeout(swapTimer);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className={cn("w-full overflow-hidden border-none bg-white py-4 md:py-6", className)}>
      <div className="mx-auto flex w-full max-w-[1650px] flex-col gap-4 px-6 sm:px-10 lg:flex-row lg:items-center lg:gap-12 lg:px-16">
        <div className="shrink-0 text-center font-mono text-[11px] font-bold tracking-[0.2em] text-[#8e8e8e] uppercase lg:text-left">
          {headline}
        </div>
        <ul
          className={cn(
            "flex flex-1 flex-wrap items-center justify-center gap-3 transition-all duration-500 lg:justify-between",
            isFading ? "scale-[0.98] opacity-0" : "scale-100 opacity-100"
          )}
        >
          {workflowSets[currentSetIndex].map((workflow) => (
            <li
              key={workflow}
              className="rounded-full border border-[#e5e7eb] bg-[#fafafa] px-4 py-2 text-[13px] font-bold text-[#333]"
            >
              {workflow}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
