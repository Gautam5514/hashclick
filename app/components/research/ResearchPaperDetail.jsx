"use client";

import Image from "next/image";
import Link from "next/link";
import { RESEARCH_STUDIES } from "./research-data";
import "./research.css";

export default function ResearchPaperDetail({ slug }) {
  const study = RESEARCH_STUDIES.find((s) => s.slug === slug) || RESEARCH_STUDIES[0];

  return (
    <div className="w-full bg-white text-[#202020] min-h-screen pb-24">
      {/* Breadcrumb Navigation */}
      <div className="border-b border-[#e5e7eb] bg-[#f8f9fa]">
        <div className="research-container py-4">
          <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
            <Link href="/research" className="hover:text-[#7612fa] transition-colors">
              Research Library
            </Link>
            <span>/</span>
            <span className="text-[#111827] font-semibold">{study.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="research-container pt-10 pb-12">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-[#f5f0ff] text-[#7612fa] text-xs font-bold uppercase tracking-wider">
              {study.label}
            </span>
            <span className="text-xs text-gray-400">•</span>
            <span className="text-xs font-semibold text-gray-500">{study.readTime}</span>
            <span className="text-xs text-gray-400">•</span>
            <span className="text-xs font-semibold text-gray-500">{study.publishDate}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-[#111827] tracking-tight leading-tight mb-6">
            {study.title}
          </h1>
          <p className="text-lg sm:text-xl text-[#52525b] leading-relaxed mb-8">
            {study.subtitle || study.description}
          </p>
        </div>

        {/* Featured Image */}
        <div className="relative rounded-2xl overflow-hidden border border-[#e5e7eb] shadow-lg mb-14 max-w-5xl">
          <Image
            src={study.image}
            alt={study.title}
            width={1200}
            height={700}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl">
          {/* Main Article Body */}
          <div className="lg:col-span-8 space-y-10">
            {/* Executive Summary Box */}
            <div className="bg-[#f8f9fa] border border-[#e5e7eb] rounded-2xl p-6 sm:p-8">
              <h3 className="text-xs font-bold text-[#7612fa] uppercase tracking-wider mb-2">
                Executive Summary
              </h3>
              <p className="text-base sm:text-lg text-[#374151] leading-relaxed font-medium">
                {study.executiveSummary}
              </p>
            </div>

            {/* Key Findings List */}
            <div>
              <h2 className="text-2xl font-bold font-display text-[#111827] mb-6">Key Research Findings</h2>
              <div className="space-y-4">
                {study.keyTakeaways.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-5 rounded-xl border border-[#e5e7eb] bg-white hover:border-[#7612fa]/40 transition-colors shadow-sm">
                    <span className="flex items-center justify-center size-7 rounded-full bg-[#7612fa] text-white font-bold text-xs shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-base text-[#374151] leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Detailed Body Sections */}
            {study.sections && study.sections.map((sec, i) => (
              <div key={i} className="space-y-3 pt-4">
                <h3 className="text-xl font-bold text-[#111827]">{sec.heading}</h3>
                <p className="text-base text-[#4b5563] leading-relaxed">{sec.content}</p>
              </div>
            ))}

            {/* Research Methodology */}
            <div className="pt-8 border-t border-[#e5e7eb]">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                Methodology & Sample Size
              </h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                {study.methodology}
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Quick Metrics Card */}
            {study.stats && study.stats.length > 0 && (
              <div className="bg-[#111827] text-white rounded-2xl p-6 shadow-xl">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#40ddff] mb-4">
                  Study Benchmarks
                </h3>
                <div className="space-y-5">
                  {study.stats.map((st, idx) => (
                    <div key={idx} className="border-b border-gray-800 pb-4 last:border-0 last:pb-0">
                      <div className="text-3xl font-extrabold text-white">{st.value}</div>
                      <div className="text-xs text-gray-400 mt-1 leading-snug">{st.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Download CTA Card */}
            <div className="bg-[#f5f0ff] border border-[#d0c4f9] rounded-2xl p-6 text-center">
              <h4 className="text-lg font-bold text-[#111827] mb-2">Download Full Paper</h4>
              <p className="text-xs text-gray-600 mb-5">Get the complete high-resolution PDF report including charts & datasets.</p>
              <button
                onClick={() => alert(`Downloading full report for ${study.title}`)}
                className="w-full py-3 rounded-full bg-[#7612fa] text-white font-bold text-sm hover:bg-[#6647f0] transition-colors shadow-md"
              >
                Download PDF Report
              </button>
            </div>

            {/* Back to Research */}
            <div className="pt-4 text-center">
              <Link href="/research" className="text-xs font-bold text-gray-500 hover:text-[#7612fa] transition-colors">
                ← Return to Research Library
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
