"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LogoCloud from "../shared/LogoCloud";
import OurMissionSection from "./OurMissionSection";
import OurMottoSection from "./OurMottoSection";
import TeamMarqueeSection from "./TeamMarqueeSection";
import CoreValuesGridSection from "./CoreValuesGridSection";
import LifeAtClickUpSection from "./LifeAtClickUpSection";
import { ABOUT_STATS, CORE_VALUES, LEADERSHIP_TEAM, LOCATIONS } from "./about-data";
import "./about.css";

export default function AboutPage() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="w-full bg-white text-[#111827] min-h-screen pb-24 selection:bg-[#7612fa]/20 selection:text-[#7612fa]">
      {/* 1. Hero Section — WE ARE CLICKUP */}
      <section className="about-hero-section">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          {/* Eyebrow badge */}
          <span className="about-hero-tag">MAXIMIZE HUMAN PRODUCTIVITY</span>
          
          {/* Main Title - Smaller Text with Gradient ONLY on ClickUp. */}
          <h1 className="about-hero-title">
            We are <span className="about-clickup-gradient">Hashboard.</span>
          </h1>

          {/* Subtitle */}
          <p className="about-hero-subtitle">
            The Convergence of software, AI, humans.
          </p>
        </div>

        {/* Visual Showcase: Full Uncut Team Cards Graphic (Subtle Bottom & Side Fade) */}
        <div className="max-w-[1280px] mx-auto px-2 sm:px-6 relative mt-1">
          <div
            className="relative w-full cursor-pointer transition-transform duration-300 hover:scale-[1.003]"
            onClick={() => setIsVideoOpen(true)}
            title="Click to watch our story video"
          >
            <Image
              src="/about/cards_subtle_bottom_fade.png"
              alt="We are Hashboard - Software, AI, Humans"
              width={2240}
              height={710}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>

        {/* Shared LogoCloud Component from Home Page (Trusted by the best) */}
        <div className="mt-1 sm:mt-2">
          <LogoCloud className="mt-0 py-2 border-none" />
        </div>
      </section>

      {/* 2. Our Mission Section — Modular Layered Component (Flag + Mountain + Text) */}
      <OurMissionSection />

      {/* 2b. Our Motto Section — "Save one day, Every week." calendar widget */}
      <OurMottoSection />

      {/* 2c. Team Marquee — scrolling team photo strip */}
      <TeamMarqueeSection />

      {/* 2d. Core Values Grid — matches clickup.com/about's AboutCoreValues layout */}
      <CoreValuesGridSection />

      {/* 2e. Life at ClickUp — scattered polaroid gallery */}
      <LifeAtClickUpSection />

      {/* 4. Industry Recognition & G2 Badges Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">

        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto md:flex-row">
          <div className="flex flex-col items-center justify-center p-8">
            <Image
              src="/about/leader-g2.svg"
              alt="Leader on G2"
              width={260}
              height={140}
              className="h-28 w-auto object-contain mb-4"
            />
            <h3 className="font-bold text-[#111827] text-lg">Leader on G2</h3>
            <p className="text-xs text-gray-500 mt-1">Rated #1 in Project Management, Collaboration, and Docs.</p>
          </div>

          <div className="w-12 h-px bg-[#e5e7eb] md:w-px md:h-12" />

          <div className="flex flex-col items-center justify-center p-8">
            <Image
              src="/about/recognized-industry.svg"
              alt="Recognized in Industry"
              width={260}
              height={140}
              className="h-28 w-auto object-contain mb-4"
            />
            <h3 className="font-bold text-[#111827] text-lg">Recognized Industry-Wide</h3>
            <p className="text-xs text-gray-500 mt-1">Forbes Cloud 100, Deloitte Technology Fast 500.</p>
          </div>
        </div>
      </section>

      {/* Video Modal Dialog */}
      {isVideoOpen && (
        <div
          className="video-modal-backdrop"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="video-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 bg-[#18181b] text-white border-b border-white/10">
              <span className="font-bold text-sm">We are Hashboard — The Story</span>
              <button
                onClick={() => setIsVideoOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold text-sm transition-all cursor-pointer"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>
            <div className="relative pt-[56.25%] w-full">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube-nocookie.com/embed/0a5_2o79_R0?autoplay=1"
                title="We Are Hashboard Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
