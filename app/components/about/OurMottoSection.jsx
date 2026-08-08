"use client";

import { useEffect, useState } from "react";

const WEEK = [
  { date: 10, day: "Mon" },
  { date: 11, day: "Tue" },
  { date: 12, day: "Wed" },
  { date: 13, day: "Thurs" },
  { date: 14, day: "Fri" },
  { date: 15, day: "Sat" },
  { date: 16, day: "Sun" },
];

export default function OurMottoSection() {
  const [highlighted, setHighlighted] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setHighlighted((prev) => (prev + 1) % WEEK.length);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-mono font-bold tracking-widest text-[#7612fa] uppercase">
            Our motto
          </span>
          <h3 className="mt-3 text-3xl sm:text-4xl font-extrabold font-display text-[#202020]">
            Save one day, Every week.
          </h3>
        </div>

        <div
          className="mx-auto mt-10 flex w-fit max-w-full overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0, black 64px, black calc(100% - 64px), transparent 100%)",
            maskImage:
              "linear-gradient(to right, transparent 0, black 64px, black calc(100% - 64px), transparent 100%)",
          }}
        >
          <div className="flex py-5">
            {WEEK.map((item, idx) => {
              const isHighlighted = idx === highlighted;
              return (
                <div
                  key={item.day}
                  className={`relative -mr-px flex h-[100px] w-[86px] shrink-0 flex-col items-center justify-between border p-3 transition-[transform,color,background-color,border-color,border-radius,box-shadow] duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] before:absolute before:-inset-2 before:-z-10 before:rounded-xl before:bg-[conic-gradient(from_-39deg_at_50%_50%,#0091ff_0deg,#ff02f0_134.7deg,#ed5f00_187.2deg,#b38cff_269deg)] before:opacity-0 before:blur-[11px] before:transition-opacity before:duration-700 before:mix-blend-overlay before:content-[''] sm:h-[118px] sm:w-[100px] sm:p-4 md:h-[134px] md:w-[114px] ${
                    isHighlighted
                      ? "z-[2] scale-[1.16] rounded-xl border-transparent bg-[#f5f5f5] text-[#8c8c8c] before:opacity-40"
                      : "rounded-none border-[rgba(96,96,163,0.3)] bg-white text-[rgb(160,160,185)]"
                  }`}
                  style={{
                    boxShadow: isHighlighted
                      ? "rgb(140,140,140) 0px -2px 0px 0px inset, rgba(255,255,255,0.84) 0px 1.5px 0px 0px inset"
                      : "rgba(140,140,140,0) 0px -2px 0px 0px inset, rgba(255,255,255,0) 0px 1.5px 0px 0px inset",
                  }}
                >
                  <span
                    className={`font-display text-2xl font-bold leading-none tracking-tight transition-colors duration-700 sm:text-3xl md:text-[35px] ${
                      isHighlighted ? "text-[#e843e1]" : ""
                    }`}
                  >
                    {item.date}
                  </span>
                  <span
                    className={`font-display text-sm font-semibold transition-colors duration-700 sm:text-base ${
                      isHighlighted ? "text-[#f26788]" : ""
                    }`}
                  >
                    {item.day}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
