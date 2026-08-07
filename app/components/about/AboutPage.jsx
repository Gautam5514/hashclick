"use client";

import Image from "next/image";
import Link from "next/link";
import { ABOUT_STATS, CORE_VALUES, LEADERSHIP_TEAM, LOCATIONS } from "./about-data";
import "./about.css";

export default function AboutPage() {
  return (
    <div className="w-full bg-white text-[#111827] min-h-screen pb-24">
      {/* 1. Hero Section — WE ARE CLICKUP */}
      <section className="about-hero-section">
        <div className="max-w-5xl mx-auto">
          <span className="about-hero-tag">WE ARE CLICKUP</span>
          
          <h1 className="about-hero-title">
            The Convergence of <br />
            <span className="about-title-gradient">software, AI, humans.</span>
          </h1>

          <p className="about-hero-desc">
            We built ClickUp because the way the world works is broken. Teams juggle dozens of disconnected tools—tasks in one place, chat in another, docs somewhere else. ClickUp converges them all into one powerful, intelligent platform.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/signup"
              className="px-8 py-4 rounded-full bg-[#7612fa] text-white font-extrabold text-base hover:bg-[#6647f0] transition-all shadow-lg hover:shadow-xl cursor-pointer"
            >
              Get Started for Free
            </Link>
            <a
              href="#mission"
              className="px-8 py-4 rounded-full bg-[#f3f4f6] text-[#111827] font-bold text-base hover:bg-[#e5e7eb] transition-all cursor-pointer"
            >
              Our Mission ↓
            </a>
          </div>
        </div>

        {/* Hero Visual Mockup Image */}
        <div className="max-w-6xl mx-auto mt-14 rounded-[28px] overflow-hidden border border-[#e5e7eb] shadow-2xl bg-[#faf8f5] p-3 sm:p-5">
          <Image
            src="/about/we-are-clickup.png"
            alt="We Are ClickUp"
            width={1280}
            height={720}
            className="w-full h-auto object-cover rounded-2xl"
            priority
          />
        </div>
      </section>

      {/* 2. Customer Trust Bar & Stats Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <span className="text-xs font-mono font-bold tracking-widest text-[#6647f0] uppercase">
            TRUSTED BY THE BEST
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] mt-2">
            Powering millions of teams worldwide
          </h2>
        </div>

        <div className="about-stats-container">
          {ABOUT_STATS.map((stat, idx) => (
            <div key={idx} className="about-stat-card">
              <div className="text-4xl sm:text-5xl font-extrabold font-display mb-1" style={{ color: stat.color }}>
                {stat.value}
              </div>
              <div className="text-sm font-bold text-[#111827] uppercase tracking-wider mb-2">
                {stat.unit} — {stat.label}
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Our Mission Section */}
      <section id="mission" className="about-mission-section">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-xs font-mono font-bold tracking-widest text-[#6647f0] uppercase">
            OUR MISSION
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-[#111827] mt-2 mb-6">
            Maximize human productivity. <br />
            <span className="text-gray-400">Save one day, every week.</span>
          </h2>

          <div className="text-base sm:text-lg text-gray-600 space-y-6 leading-relaxed max-w-3xl mx-auto text-left sm:text-center font-normal">
            <p>
              We started ClickUp because the way the world works is broken. Teams juggle dozens of disconnected tools—tasks in one place, conversations in another, documents somewhere else—and critical context gets lost in between.
            </p>
            <p>
              Today, we’re at the most exciting inflection point in software history: the convergence of software, AI, and humans. For the first time, technology doesn’t just organize your work—it understands it, anticipates it, and acts on it.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Industry Recognition & G2 Badges Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <span className="text-xs font-mono font-bold tracking-widest text-[#6647f0] uppercase">
          INDUSTRY RECOGNITION
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] mt-2 mb-10">
          Ranked #1 Leader across all major categories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center max-w-4xl mx-auto">
          <div className="bg-[#faf8f5] p-8 rounded-[24px] border border-[#e5e7eb] flex flex-col items-center justify-center">
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

          <div className="bg-[#faf8f5] p-8 rounded-[24px] border border-[#e5e7eb] flex flex-col items-center justify-center">
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

      {/* 5. Core Values Section — 9 Cards */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-14">
          <span className="text-xs font-mono font-bold tracking-widest text-[#6647f0] uppercase">
            OUR CORE VALUES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] mt-2">
            The principles that guide our product and culture
          </h2>
        </div>

        <div className="about-values-grid">
          {CORE_VALUES.map((val) => (
            <div key={val.id} className="about-value-card">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-bold tracking-widest text-gray-400 uppercase">
                    {val.tag}
                  </span>
                  <div
                    className="size-3.5 rounded-full"
                    style={{ backgroundColor: val.iconColor }}
                  />
                </div>

                <h3 className="text-xl font-extrabold text-[#111827] mb-1">
                  {val.title}
                </h3>
                <div className="text-xs font-bold mb-3" style={{ color: val.iconColor }}>
                  {val.subtitle}
                </div>

                <p className="text-xs text-gray-600 leading-relaxed font-normal">
                  {val.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Leadership & Team Section */}
      <section className="bg-[#faf8f5] py-20 border-t border-[#f0eee9]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-mono font-bold tracking-widest text-[#6647f0] uppercase">
              OUR LEADERSHIP
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] mt-2">
              The faces behind ClickUp
            </h2>
            <p className="text-sm text-gray-600 max-w-xl mx-auto mt-3">
              Passionate builders, dreamers, and operators united by the mission to save people time.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEADERSHIP_TEAM.map((leader, idx) => (
              <div key={idx} className="bg-white rounded-[24px] p-6 border border-[#e5e7eb] text-center shadow-sm hover:shadow-md transition-shadow">
                <div className={`size-20 rounded-full mx-auto mb-4 bg-gradient-to-tr ${leader.gradient} flex items-center justify-center text-white font-extrabold text-2xl shadow-inner`}>
                  {leader.initials}
                </div>
                <h3 className="font-extrabold text-[#111827] text-lg">{leader.name}</h3>
                <div className="text-xs font-bold text-[#7612fa] mb-2">{leader.role}</div>
                <p className="text-xs text-gray-500 leading-relaxed">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Global Offices & Remote Work Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <span className="text-xs font-mono font-bold tracking-widest text-[#6647f0] uppercase">
            GLOBAL FOOTPRINT
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] mt-2">
            ClickUppers across the globe
          </h2>
          <p className="text-sm text-gray-600 max-w-xl mx-auto mt-3">
            San Diego HQ, United States, Canada, Ireland, United Kingdom, Australia, and distributed worldwide.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {LOCATIONS.map((loc, idx) => (
            <div key={idx} className="bg-[#faf8f5] p-5 rounded-2xl border border-[#e5e7eb] text-center">
              <div className="text-base font-extrabold text-[#111827]">{loc.city}</div>
              <div className="text-xs text-gray-500 font-medium">{loc.country}</div>
              <span className="inline-block mt-2 px-2 py-0.5 rounded-full bg-[#7612fa]/10 text-[#7612fa] text-[10px] font-bold">
                {loc.type}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Global Team Photo Banner */}
      <section className="max-w-6xl mx-auto px-6 pb-12">
        <div className="rounded-[28px] overflow-hidden border border-[#e5e7eb] shadow-xl relative bg-[#faf8f5]">
          <Image
            src="/about/team-photo.png"
            alt="ClickUp Team Photo"
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* 9. Final CTA Banner */}
      <section className="max-w-6xl mx-auto px-6 pt-6">
        <div className="rounded-[28px] bg-gradient-to-r from-[#7612fa] via-[#fa12e3] to-[#fc6d2d] text-white p-10 sm:p-16 text-center shadow-2xl relative overflow-hidden">
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display mb-4 text-white">
            Join the productivity revolution
          </h2>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto mb-8 font-medium">
            Save one day every week for your team. Start using ClickUp for free today.
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 px-9 py-4 rounded-full bg-white text-[#111827] font-extrabold text-base hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl cursor-pointer"
          >
            Get Started Free →
          </Link>
        </div>
      </section>
    </div>
  );
}
