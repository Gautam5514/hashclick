"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RESEARCH_STUDIES, FORRESTER_STUDY } from "./research-data";
import "./research.css";

function ClickUpButtonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <circle cx="10" cy="10" r="9" stroke="#e0e0e0" strokeWidth="1" fill="#ffffff" />
      <path d="M6.5 10L10 6.5L13.5 10" stroke="url(#cu_btn_grad_1)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.5 12.5C9 13.7 11 13.7 12.5 12.5" stroke="url(#cu_btn_grad_1)" strokeWidth="1.6" strokeLinecap="round" />
      <defs>
        <linearGradient id="cu_btn_grad_1" x1="6.5" y1="6.5" x2="13.5" y2="13.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7612fa" />
          <stop offset="0.5" stopColor="#fa12e3" />
          <stop offset="1" stopColor="#fc6d2d" />
        </linearGradient>
      </defs>
    </svg>
  );
}

const LOGO_ITEMS = [
  {
    name: "American",
    node: (
      <div className="flex items-center gap-1 font-sans text-[14px] font-bold text-white select-none shrink-0 opacity-85">
        <span>American</span>
        <svg viewBox="0 0 24 24" fill="currentColor" className="size-4 text-white">
          <path d="M2.5 19h19l-9.5-14z" />
        </svg>
      </div>
    ),
  },
  {
    name: "NBCUniversal",
    node: (
      <div className="flex items-center font-sans text-[14px] font-black text-white select-none shrink-0 opacity-85">
        <span>NBC</span>
        <span className="font-normal text-[12px] text-white/80 ml-0.5">Universal</span>
      </div>
    ),
  },
  {
    name: "amazon",
    node: (
      <div className="flex flex-col items-center font-sans text-[16px] font-black text-white leading-none select-none shrink-0 opacity-85">
        <span>amazon</span>
        <svg viewBox="0 0 40 8" fill="none" className="w-8 h-1.5 text-white">
          <path d="M2 2C10 7 30 7 38 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </div>
    ),
  },
  {
    name: "NVIDIA",
    node: (
      <div className="flex items-center gap-1 font-sans text-[13px] font-black tracking-wider text-white select-none shrink-0 opacity-85">
        <svg viewBox="0 0 24 24" fill="currentColor" className="size-4.5 text-white">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-5h2v5zm0-7h-2V7.5h2V9.5z" />
        </svg>
        <span>NVIDIA</span>
      </div>
    ),
  },
  {
    name: "wayfair",
    node: (
      <div className="flex items-center gap-1 font-sans text-[14px] font-black text-white select-none shrink-0 opacity-85">
        <span className="text-[13px]">❖</span>
        <span>wayfair</span>
      </div>
    ),
  },
  {
    name: "verizon",
    node: (
      <div className="font-sans text-[15px] font-black tracking-tighter text-white select-none shrink-0 opacity-85">
        verizon
      </div>
    ),
  },
  {
    name: "Spotify",
    node: (
      <div className="flex items-center gap-1.5 font-sans text-[14px] font-bold text-white select-none shrink-0 opacity-85">
        <svg viewBox="0 0 24 24" fill="currentColor" className="size-4 text-white">
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.563.387-.857.207-2.35-1.434-5.308-1.758-8.793-.963-.335.077-.67-.133-.746-.468-.077-.334.132-.67.467-.745 3.816-.871 7.095-.494 9.722 1.113.294.18.386.563.207.856zm1.223-2.72c-.226.367-.706.482-1.072.257-2.687-1.652-6.785-2.131-9.965-1.166-.413.125-.848-.106-.973-.519-.125-.413.106-.848.519-.973 3.632-1.102 8.147-.568 11.234 1.328.366.226.48.707.257 1.073z" />
        </svg>
        <span>Spotify</span>
      </div>
    ),
  },
  {
    name: "Stanford",
    node: (
      <div className="font-serif text-[16px] font-extrabold tracking-tight text-white select-none shrink-0 opacity-85">
        Stanford
      </div>
    ),
  },
  {
    name: "KraftHeinz",
    node: (
      <div className="flex items-center font-serif text-[15px] font-black tracking-tighter text-white select-none shrink-0 opacity-85">
        <span>Kraft</span>
        <span className="font-sans text-[12px] italic font-normal text-white/80">Heinz</span>
      </div>
    ),
  },
  {
    name: "Deloitte",
    node: (
      <div className="flex items-baseline font-sans text-[16px] font-extrabold tracking-tight text-white select-none shrink-0 opacity-85">
        <span>Deloitte</span>
        <span className="text-white font-black text-[18px] leading-none ml-0.5">.</span>
      </div>
    ),
  },
  {
    name: "Pfizer",
    node: (
      <div className="flex items-center gap-1 font-sans text-[15px] font-black italic tracking-tight text-white select-none shrink-0 opacity-85">
        <svg viewBox="0 0 32 32" fill="currentColor" className="size-4.5 text-white">
          <path d="M16 2L2 9v14l14 7 14-7V9L16 2zm0 4.2l10 5v9.6l-10 5-10-5V11.2l10-5z" />
        </svg>
        <span>Pfizer</span>
      </div>
    ),
  },
  {
    name: "Adobe",
    node: (
      <div className="flex items-center gap-1.5 font-sans text-[14px] font-extrabold text-white select-none shrink-0 opacity-85">
        <svg viewBox="0 0 24 24" fill="currentColor" className="size-4 shrink-0 text-white">
          <path d="M13.966 22h6.034l-8-20h-6.034l8 20zm-7.932 0h-6.034l8-20h6.034l-8 20zm3.966-10.034l-3.034 7.6h6.068l-3.034-7.6z" />
        </svg>
        <span>Adobe</span>
      </div>
    ),
  },
];

function ForresterSlider() {
  return (
    <div className="forrester-slider-container">
      <div className="forrester-slider-track">
        {LOGO_ITEMS.concat(LOGO_ITEMS).map((item, idx) => (
          <div key={idx} className="shrink-0">
            {item.node}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ResearchPage() {
  const [activeModalReport, setActiveModalReport] = useState(null);
  const [showForresterModal, setShowForresterModal] = useState(false);

  // 7 studies above Forrester Banner, 1 study below
  const mainStudies = RESEARCH_STUDIES.slice(0, 7);
  const lastStudy = RESEARCH_STUDIES.slice(7);

  const renderCard = (study, globalIdx) => {
    const isEven = globalIdx % 2 === 0;
    
    // Background style for image side: ONLY first card is pure white bg-white
    let imageBgStyle = "bg-[#faf8f5]";
    if (globalIdx === 0 || study.id === "cost-of-sprawl") {
      imageBgStyle = "bg-white";
    } else if (study.id === "voice-first-workflows") {
      imageBgStyle = "bg-gradient-to-br from-[#4f64f4] to-[#9143ef]";
    } else if (study.id === "state-of-productivity") {
      imageBgStyle = "bg-[#030637]";
    }

    return (
      <div key={study.id} className="research-card-container">
        {/* Center dividing line for desktop */}
        <div className="research-center-line"></div>

        {/* Top Notch Arc SVG at Center Divider Line */}
        <div className="research-top-arc">
          <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 0V1C2.76142 1 5 3.23858 5 6H6C6 3.23858 8.23858 1 11 1V0C8.23858 0 6 -2.23858 6 -5H5C5 -2.23858 2.76142 0 0 0Z" fill="#E8E8E8" />
          </svg>
        </div>

        {/* Bottom Notch Arc SVG at Center Divider Line */}
        <div className="research-bottom-arc">
          <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: "rotate(180deg)" }}>
            <path fillRule="evenodd" clipRule="evenodd" d="M0 0V1C2.76142 1 5 3.23858 5 6H6C6 3.23858 8.23858 1 11 1V0C8.23858 0 6 -2.23858 6 -5H5C5 -2.23858 2.76142 0 0 0Z" fill="#E8E8E8" />
          </svg>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch min-h-[300px]">
          {/* Text Side */}
          <div className={`p-6 sm:p-10 flex flex-col justify-center ${isEven ? "lg:order-1 lg:pr-10" : "lg:order-2 lg:pl-10"}`}>
            <div>
              <span className="research-card-label">{study.label}</span>
              
              <h2 className="research-card-heading">
                {study.title}
              </h2>
              
              <p className="research-card-desc">
                {study.description}
              </p>

              {/* 2x2 Text Quadrant Grid if present */}
              {study.quadrants && study.quadrants.length > 0 && (
                <div className="research-quadrant-grid">
                  {study.quadrants.map((text, qIdx) => (
                    <div key={qIdx} className="research-quadrant-text">
                      {text}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Read the Report Button */}
            <div className="pt-2">
              <button
                onClick={() => setActiveModalReport(study)}
                className="research-btn-pill cursor-pointer"
              >
                <ClickUpButtonIcon />
                <span>{study.buttonText || "Read the Report"}</span>
              </button>
            </div>
          </div>

          {/* Image Side */}
          <div className={`w-full h-full min-h-[300px] flex items-center justify-center p-6 sm:p-8 ${imageBgStyle} ${isEven ? "lg:order-2" : "lg:order-1"}`}>
            <div className="relative w-full max-w-[450px]">
              <Image
                src={study.image}
                alt={study.title}
                width={1024}
                height={768}
                className="w-full h-auto object-contain rounded-lg"
                priority={globalIdx === 0}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full bg-white text-[#202020] min-h-screen pb-20">
      {/* Hero Section — Exact like Image 1 */}
      <section className="research-hero-section">
        <div className="research-container">
          <span className="research-hero-tag">INSIGHTS FROM CLICKUP</span>
          
          <h1 className="research-hero-title">
            Workplace <br className="hidden sm:inline" />
            <span className="research-title-fade">Productivity Research</span>
          </h1>
          
          <p className="research-hero-subtext">
            A centralized library of original workplace research on how modern teams use AI, run meetings, manage communication, juggle apps, and stay productive.
          </p>
        </div>
      </section>

      {/* Main Studies List */}
      <section className="research-container">
        {/* 7 Studies Above Banner */}
        <div className="research-cards-stack">
          {mainStudies.map((study, idx) => renderCard(study, idx))}
        </div>

        {/* Forrester Study CTA Section — Placed directly above the 1 last card with spacious gap */}
        <div className="forrester-banner-exact my-16 sm:my-20">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <h2 className="forrester-heading">
              According to a study by Forrester, ClickUp saves the average company over 30k hours per year.
            </h2>
            <div className="shrink-0">
              <button
                onClick={() => setShowForresterModal(true)}
                className="forrester-btn-exact"
              >
                <span className="flex items-center justify-center size-4.5 rounded-full border border-gray-300 text-[#1c1c1c] text-[11px] font-bold">
                  ↓
                </span>
                <span>Get the study</span>
              </button>
            </div>
          </div>

          {/* Animated Logo Slider */}
          <ForresterSlider />
        </div>

        {/* 1 Final Study Below Banner */}
        <div className="research-cards-stack">
          {lastStudy.map((study, idx) => renderCard(study, idx + 7))}
        </div>
      </section>

      {/* Interactive Report Reader Modal */}
      {activeModalReport && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setActiveModalReport(null)}>
          <div className="bg-white rounded-[24px] max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 shadow-2xl relative" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between pb-6 border-b border-[#e5e7eb] mb-6">
              <div>
                <span className="text-xs font-bold text-[#6647f0] uppercase tracking-widest font-mono">
                  {activeModalReport.label}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-[#111827] mt-1">
                  {activeModalReport.title}
                </h2>
              </div>
              <button
                onClick={() => setActiveModalReport(null)}
                className="p-2 rounded-full text-[#111827] hover:bg-gray-100 transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-6 text-[#374151]">
              <div className="bg-[#f8f9fa] rounded-2xl p-6 border border-[#e5e7eb]">
                <h3 className="text-xs font-bold text-[#6647f0] uppercase tracking-wider mb-2 font-mono">
                  Executive Summary
                </h3>
                <p className="text-base text-[#374151] leading-relaxed font-medium">
                  {activeModalReport.executiveSummary}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#111827] mb-3">Key Takeaways</h3>
                <ul className="space-y-3">
                  {activeModalReport.keyTakeaways.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm sm:text-base">
                      <span className="flex items-center justify-center size-6 rounded-full bg-[#f5f0ff] text-[#7612fa] font-bold text-xs shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {activeModalReport.sections && activeModalReport.sections.map((sec, i) => (
                <div key={i} className="pt-2">
                  <h4 className="text-md font-bold text-[#111827] mb-1">{sec.heading}</h4>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{sec.content}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-[#e5e7eb] mt-8">
              <Link
                href={`/research/${activeModalReport.slug}`}
                className="text-sm font-bold text-[#7612fa] hover:underline inline-flex items-center gap-1"
              >
                Open Full Paper Page →
              </Link>
              <button
                onClick={() => alert(`Downloading summary PDF for ${activeModalReport.title}`)}
                className="px-5 py-2.5 rounded-full bg-[#111827] text-white font-semibold text-sm hover:bg-[#7612fa] transition-colors cursor-pointer"
              >
                Download PDF Summary
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Forrester Modal */}
      {showForresterModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setShowForresterModal(false)}>
          <div className="bg-white rounded-[24px] max-w-2xl w-full p-6 sm:p-8 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between pb-4 border-b border-gray-200 mb-4">
              <h3 className="text-xl font-bold text-[#111827]">Forrester TEI Study Details</h3>
              <button onClick={() => setShowForresterModal(false)} className="text-gray-400 hover:text-black">✕</button>
            </div>
            <p className="text-sm text-gray-600 mb-6">{FORRESTER_STUDY.description}</p>
            <button
              onClick={() => {
                alert("Forrester TEI Study PDF downloaded!");
                setShowForresterModal(false);
              }}
              className="w-full py-3 rounded-full bg-[#7612fa] text-white font-bold text-sm hover:bg-[#6647f0]"
            >
              Download Complete Report PDF
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
