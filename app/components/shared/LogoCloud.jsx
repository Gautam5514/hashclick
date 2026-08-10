"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

function KraftHeinzLogo() {
  return (
    <div className="flex items-center font-serif text-[19px] font-black tracking-tighter text-[#333333] select-none shrink-0">
      <span>Kraft</span>
      <span className="font-sans text-[15px] italic font-normal text-[#555555]">Heinz</span>
    </div>
  );
}

function DeloitteLogo() {
  return (
    <div className="flex items-baseline font-sans text-[20px] font-extrabold tracking-tight text-[#202020] select-none shrink-0">
      <span>Deloitte</span>
      <span className="text-[#86bc25] font-black text-[23px] leading-none ml-0.5">.</span>
    </div>
  );
}

function PfizerLogo() {
  return (
    <div className="flex items-center gap-1 font-sans text-[19px] font-black italic tracking-tight text-[#0000b5] select-none shrink-0">
      <svg viewBox="0 0 32 32" fill="currentColor" className="size-5.5 text-[#0000b5]">
        <path d="M16 2L2 9v14l14 7 14-7V9L16 2zm0 4.2l10 5v9.6l-10 5-10-5V11.2l10-5z" />
      </svg>
      <span>Pfizer</span>
    </div>
  );
}

function AdobeLogo() {
  return (
    <div className="flex items-center gap-1.5 font-sans text-[18px] font-extrabold tracking-tight text-[#202020] select-none shrink-0">
      <svg viewBox="0 0 24 24" fill="#fa0f00" className="size-5 shrink-0">
        <path d="M13.966 22h6.034l-8-20h-6.034l8 20zm-7.932 0h-6.034l8-20h6.034l-8 20zm3.966-10.034l-3.034 7.6h6.068l-3.034-7.6z" />
      </svg>
      <span>Adobe</span>
    </div>
  );
}

export function AmericanAirlinesLogo() {
  return (
    <div className="flex items-center gap-1 font-sans text-[17px] font-bold tracking-tight text-[#333333] select-none shrink-0">
      <span className="text-[#0078d4]">American</span>
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-4.5 text-[#0078d4]">
        <path d="M2.5 19h19l-9.5-14z" />
      </svg>
    </div>
  );
}

export function NBCUniversalLogo() {
  return (
    <div className="flex items-center font-sans text-[17px] font-black tracking-tighter text-[#202020] select-none shrink-0">
      <span>NBC</span>
      <span className="font-normal text-[14px] tracking-normal text-[#555555] ml-0.5">Universal</span>
    </div>
  );
}

function IBMLogo() {
  return (
    <div className="font-mono text-[20px] font-black tracking-[0.15em] text-[#0530ad] select-none shrink-0">
      IBM
    </div>
  );
}

export function SpotifyLogo() {
  return (
    <div className="flex items-center gap-1.5 font-sans text-[18px] font-bold text-[#1ed760] select-none shrink-0">
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.563.387-.857.207-2.35-1.434-5.308-1.758-8.793-.963-.335.077-.67-.133-.746-.468-.077-.334.132-.67.467-.745 3.816-.871 7.095-.494 9.722 1.113.294.18.386.563.207.856zm1.223-2.72c-.226.367-.706.482-1.072.257-2.687-1.652-6.785-2.131-9.965-1.166-.413.125-.848-.106-.973-.519-.125-.413.106-.848.519-.973 3.632-1.102 8.147-.568 11.234 1.328.366.226.48.707.257 1.073zm.13-2.827c-3.225-1.915-8.54-2.092-11.604-1.162-.495.15-.1.025-.645-.345-.15-.495.025-1.01.52-1.16 3.522-1.068 9.387-.866 13.093 1.334.444.264.587.842.323 1.286-.264.443-.842.587-1.287.327z" />
      </svg>
      <span className="text-[#202020]">Spotify</span>
    </div>
  );
}

function NetflixLogo() {
  return (
    <div className="font-sans text-[20px] font-black tracking-tighter text-[#e50914] select-none shrink-0">
      NETFLIX
    </div>
  );
}

function ShopifyLogo() {
  return (
    <div className="flex items-center gap-1 font-sans text-[18px] font-extrabold text-[#96bf48] select-none shrink-0">
      <span>shopify</span>
    </div>
  );
}

function LogitechLogo() {
  return (
    <div className="font-sans text-[18px] font-black tracking-tighter text-[#00b8fc] select-none shrink-0">
      logitech
    </div>
  );
}

function BookingLogo() {
  return (
    <div className="font-sans text-[18px] font-bold text-[#003580] select-none shrink-0">
      Booking.com
    </div>
  );
}

const logoSets = [
  // SET 1 (First 6 Logos)
  [KraftHeinzLogo, DeloitteLogo, PfizerLogo, AdobeLogo, AmericanAirlinesLogo, NBCUniversalLogo],
  // SET 2 (Next 6 Logos)
  [IBMLogo, SpotifyLogo, NetflixLogo, ShopifyLogo, LogitechLogo, BookingLogo],
];

export default function LogoCloud({ className }) {
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentSetIndex((prev) => (prev + 1) % logoSets.length);
        setIsFading(false);
      }, 500); // 500ms fade duration
    }, 4500); // Rotate every 4.5s

    return () => clearInterval(timer);
  }, []);

  const activeLogos = logoSets[currentSetIndex];

  return (
    <section className={cn("w-full bg-white mt-10 md:mt-16 lg:mt-10 py-4 md:py-6 overflow-hidden border-none", className)}>
      <div className="mx-auto w-full max-w-[1650px] px-6 sm:px-10 lg:pl-16 lg:pr-6 xl:pl-20 xl:pr-10">
        <div className="group/logos flex flex-col lg:flex-row lg:items-center gap-4 sm:gap-6 lg:gap-12 cursor-pointer max-lg:text-center">
          {/* Label on Far Left */}
          <div className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#8e8e8e] uppercase shrink-0 transition-colors group-hover/logos:text-[#202020]">
            TRUSTED BY THE BEST
          </div>

          {/* 6 Logos at a time, hover over ANY logo turns ALL logos colorful */}
          <div className="flex-1 overflow-hidden">
            <div
              className={cn(
                "flex flex-wrap items-center justify-center lg:justify-between gap-6 sm:gap-8 md:gap-10 transition-all duration-500 ease-in-out",
                isFading ? "opacity-0 scale-[0.98] blur-[1px]" : "opacity-100 scale-100 blur-0"
              )}
            >
              {activeLogos.map((LogoComp, i) => (
                <div
                  key={`${currentSetIndex}-${i}`}
                  className="opacity-75 grayscale transition-all duration-300 group-hover/logos:opacity-100 group-hover/logos:grayscale-0 hover:scale-105 shrink-0"
                >
                  <LogoComp />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
