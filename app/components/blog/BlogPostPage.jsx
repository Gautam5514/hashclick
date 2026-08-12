"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft, Clock, Share2, Check, Sparkles, ArrowRight,
  ChevronDown, BookOpen, Layers, CheckCircle2, Bookmark, Play, Quote
} from "lucide-react";

const recentArticlesData = [
  {
    id: 1,
    title: "Claude Code for Marketers: A No-Code Guide to Building Your Own Marketing Tools",
    author: "Manasi Nair",
    authorAvatar: "/blog/author-1.jpg",
    readTime: "Max 22min read",
    slug: "automation-examples",
  },
  {
    id: 2,
    title: "10 Best Claude AI Alternatives in 2026 (Tested & Compared)",
    author: "Sean Hardy",
    authorAvatar: "/blog/author-2.jpeg",
    readTime: "Max 26min read",
    slug: "context-switching-cost",
  },
  {
    id: 3,
    title: "Best Claude MCP Connectors for Marketing: The Stack That Actually Runs Your Campaigns",
    author: "Manasi Nair",
    authorAvatar: "/blog/author-1.jpg",
    readTime: "Max 26min read",
    slug: "process-and-procedures-template",
  },
];

export default function BlogPostPage() {
  const [copied, setCopied] = useState(false);
  const [showToc, setShowToc] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [bannerEmailInput, setBannerEmailInput] = useState("");
  const [bannerSubscribed, setBannerSubscribed] = useState(false);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleBannerSubscribe = (e) => {
    e.preventDefault();
    if (bannerEmailInput.trim()) {
      setBannerSubscribed(true);
      setBannerEmailInput("");
    }
  };

  return (
    <div className="blog-page min-h-screen py-8 sm:py-12 bg-[#ffffff] text-[#1c1c1e]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HERO SECTION: 2 COLUMNS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 pt-4 sm:pt-6">
          
          {/* Left Column: Category, Title, Author Meta, CTA Button */}
          <div className="lg:col-span-6 space-y-6 max-w-xl">
            
            {/* Monospace Category Tag */}
            <span className="text-xs font-mono font-bold text-[#7026e3] uppercase tracking-widest block">
              USING Hashboard
            </span>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-neutral-900 tracking-tight leading-[1.12]">
              20 Automation Examples in <br className="hidden sm:inline" />
              Hashboard Worth Stealing
            </h1>

            {/* Author Metadata Row */}
            <div className="flex items-center gap-3 pt-1">
              <div className="w-10 h-10 rounded-full overflow-hidden relative border border-neutral-200 shrink-0">
                <Image
                  src="/blog/author-2.jpeg"
                  fill
                  alt="Praburam Srinivasan"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-wrap items-center gap-1.5 text-sm">
                <span className="font-extrabold text-neutral-900">Praburam Srinivasan</span>
                <span className="text-neutral-500 font-normal">Growth Marketing Manager</span>
                <span className="text-neutral-300 mx-2">|</span>
                <span className="text-neutral-500 font-medium">Jun 03, 2026</span>
              </div>
            </div>

            {/* Create Custom Automations CTA Button */}
            <div className="pt-6">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center bg-[#1c1c1e] hover:bg-neutral-800 text-white font-bold px-8 py-3.5 rounded-2xl text-sm transition-all shadow-sm"
              >
                Create custom automations with Hashboard
              </Link>
            </div>

          </div>

          {/* Right Column: macOS Window Frame Image */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[16/10] w-full rounded-[22px] overflow-hidden shadow-none border-0 bg-neutral-900">
              <Image
                src="/blog/automation-dashboards.png"
                alt="Hashboard Automations Example"
                fill
                priority
                className="object-cover object-top"
              />
            </div>
          </div>

        </div>

        {/* DIVIDER LINE ABOVE CONTENT */}
        <div className="border-t border-neutral-200/90 mb-10" />

        {/* MAIN LAYOUT: LEFT ARTICLE CONTENT + RIGHT STICKY SIDEBAR */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* LEFT COLUMN: ARTICLE BODY CONTENT */}
          <div className="lg:col-span-8 space-y-8 text-neutral-800 leading-relaxed text-base sm:text-lg">
            
            {/* Introductory Paragraphs */}
            <p>
              <Link href="#" className="text-[#0081fb] font-semibold hover:underline">
                Pontica Solutions
              </Link>{" "}
              was struggling. As a fast-growing outsourcing agency with a team of 800+, every new hire meant another handoff that broke when someone missed a message.
            </p>

            <p>
              They didn&apos;t hire more people to fix it. Instead, they automated more than 25 processes. Today, they run 60,000 automations a year, saving over 2,000 hours. Shift changes, progress updates, and client reports now run automatically in{" "}
              <Link href="#" className="text-[#0081fb] font-semibold hover:underline">
                Hashboard
              </Link>
              . That saved time goes back into creative, strategic work.
            </p>

            <p>
              You can do the same at any scale. Every time you reassign a task or alert a coworker by hand, you do work that a machine could handle. This article shares 20 automation examples in Hashboard. Each one shows you what to build and how to set it up without writing code.
            </p>

            {/* TL;DR BOX */}
            <div className="bg-[#f8f8fa] p-6 sm:p-8 rounded-[20px] border border-neutral-200/60 space-y-4 my-8">
              <span className="text-[#7026e3] font-mono text-xs font-bold uppercase tracking-wider block">
                TL;DR
              </span>

              <p className="text-neutral-800 font-medium text-base">
                Every automation follows one formula: Trigger + Condition + Action. If you can name the manual step it replaces, the rule is worth building.
              </p>

              <ul className="space-y-3 text-sm text-neutral-700 font-normal">
                <li className="flex items-start gap-2">
                  <span className="text-[#7026e3] font-bold">•</span>
                  <span>
                    <strong>Everyday task automations</strong> handle reassignments, templates, comments, archiving, and due dates, so no one plays traffic cop. Status triggers route reviews, creation triggers stamp deadlines, and field conditions catch incomplete briefs before work starts
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7026e3] font-bold">•</span>
                  <span>
                    <strong>Approval and handoff automations</strong> keep work moving between people without manual pings. Field values route budget approvals, dependency triggers unblock the next task in line, and subtask triggers alert the PM when a full deliverable is ready
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7026e3] font-bold">•</span>
                  <span>
                    <strong>Team and integration automations</strong> connect Hashboard to external tools and AI. HubSpot deals become assigned tasks, GitHub commits update task statuses, and Hashboard Brain builds complex rules from plain-language descriptions
                  </span>
                </li>
              </ul>

              <p className="text-sm text-neutral-800 pt-2">
                <strong>The framework:</strong> Name the manual step you&apos;re replacing, write a specific trigger-condition-action rule, set it at the List level first, then promote it once you trust it.
              </p>
            </div>

            <p className="text-sm sm:text-base text-neutral-700">
              Automate the coordination work that silently eats hours, so your team spends time on judgment calls instead of status updates.
            </p>

            {/* SECTION 1: WHAT ARE AUTOMATIONS */}
            <div className="pt-6 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
                What Are Automations in Hashboard?
              </h2>

              <p className="text-base sm:text-lg">
                A{" "}
                <Link href="#" className="text-[#0081fb] font-semibold hover:underline">
                  Hashboard Automation
                </Link>{" "}
                is a rule-based workflow that handles routine tasks for you. Instead of reassigning tasks and sending notifications manually, you define a rule once. Hashboard then executes that rule every time the event occurs.
              </p>

              <p className="text-base font-semibold text-neutral-900 pt-2">
                Every automation follows a strict formula:
              </p>

              <p className="text-base font-extrabold text-neutral-900 bg-[#f4f4f7] px-4 py-2.5 rounded-xl inline-block">
                Automation = Trigger + Condition + Action
              </p>

              <ul className="space-y-3 text-base text-neutral-700 pl-4 list-disc">
                <li>
                  The <strong>Trigger</strong> is the event that starts the rule (e.g., a status change or a new task)
                </li>
                <li>
                  The <strong>Condition</strong> is an optional filter that must be true for the rule to run (e.g., the priority must be &apos;Urgent&apos;)
                </li>
                <li>
                  The <strong>Action</strong> is the automatic change Hashboard makes (e.g., reassigning the task)
                </li>
              </ul>

              <p className="text-base sm:text-lg pt-2">
                For example, say a task moves to &apos;Review,&apos; and its priority is &apos;Urgent.&apos; Hashboard automatically assigns it to the relevant team member. Here, the trigger is the move to Review, while the condition is the Urgent priority. And the action is the reassignment. A single automation supports up to 1 trigger, 15 conditions, and 6 actions. This allows one rule to manage a complex workflow.
              </p>

              {/* Hierarchy Note Box */}
              <div className="bg-[#f8f8fa] p-6 rounded-2xl border border-neutral-200/60 my-6">
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                  Automations in Hashboard are hierarchy-aware. It controls how widely they reach. An automation set on a List affects only the tasks in that List. Set on a Folder, it affects every List inside that Folder. Set on a Space, it governs every task beneath it. You build the rule at the level that matches its scope, rather than copying the same logic into projects.
                </p>
              </div>

              <p className="text-base sm:text-lg">
                You can create an automation in three ways:
              </p>

              <ul className="space-y-2.5 text-base text-neutral-700 pl-4 list-disc">
                <li>Pick from 100+ prebuilt templates organized by use case, like marketing or project management</li>
                <li>
                  Describe what you want in plain language and let{" "}
                  <Link href="#" className="text-[#0081fb] font-semibold hover:underline">
                    Hashboard Brain
                  </Link>{" "}
                  generate the trigger-and-action logic
                </li>
                <li>Build a fully custom rule from scratch in the Automation Builder</li>
              </ul>
            </div>

            {/* SECTION 2: HOW DOES AUTOMATION DIFFER */}
            <div className="pt-6 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
                How does automation differ from AI Agents?
              </h2>

              <p className="text-base sm:text-lg">
                An automation and an AI Agent both work on your behalf. But they process tasks differently:
              </p>
            </div>

            {/* EMBEDDED YOUTUBE VIDEO SECTION */}
            <div className="my-10">
              <div className="relative aspect-[16/9] w-full rounded-[22px] overflow-hidden bg-neutral-900 shadow-lg border border-neutral-200/60">
                {isVideoPlaying ? (
                  <iframe
                    src="https://www.youtube.com/embed/k1TDw14vsME?autoplay=1"
                    title="Check out how Hashboard Automations can help your team"
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div
                    onClick={() => setIsVideoPlaying(true)}
                    className="relative w-full h-full cursor-pointer flex items-center justify-center bg-neutral-950 group"
                  >
                    <Image
                      src="/blog/vids/vid-1.png"
                      alt="Check out how Hashboard Automations can help your team"
                      fill
                      priority
                      className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                    />

                    {/* YouTube Red Play Button */}
                    <div className="relative z-10 w-16 h-12 rounded-2xl bg-[#ff0000] hover:bg-[#cc0000] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-6 h-6 fill-current ml-0.5" />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* AUTOMATIONS COMPARISON TABLE (Exact matching user screenshot 1) */}
            <div className="my-10 overflow-x-auto border border-neutral-200/80 rounded-2xl">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#f8f8fc] border-b border-neutral-200/80 text-neutral-900 font-extrabold">
                    <th className="p-4">Category</th>
                    <th className="p-4">Use Case</th>
                    <th className="p-4">Trigger</th>
                    <th className="p-4">Action</th>
                    <th className="p-4">Target Team</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200/60 text-neutral-700">
                  <tr>
                    <td className="p-4 font-semibold text-neutral-900">Team & integration</td>
                    <td className="p-4">Turn HubSpot deals into assigned sales tasks</td>
                    <td className="p-4">Integration</td>
                    <td className="p-4">Create task + assign rep</td>
                    <td className="p-4">Sales teams</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-neutral-900">Team & integration</td>
                    <td className="p-4">Kick off onboarding when a candidate accepts an offer</td>
                    <td className="p-4">Status</td>
                    <td className="p-4">Create task + apply template</td>
                    <td className="p-4">HR & recruiting</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-neutral-900">Team & integration</td>
                    <td className="p-4">Hand a draft to the editor when the writer finishes</td>
                    <td className="p-4">Status</td>
                    <td className="p-4">Change assignee + status</td>
                    <td className="p-4">Content teams</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-neutral-900">Team & integration</td>
                    <td className="p-4">Push customer-reported bugs to the eng backlog</td>
                    <td className="p-4">Field + condition</td>
                    <td className="p-4">Create linked task</td>
                    <td className="p-4">Support ↔ engineering</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-neutral-900">Team & integration</td>
                    <td className="p-4">Update tasks automatically from GitHub commits</td>
                    <td className="p-4">Integration</td>
                    <td className="p-4">Change status + comment</td>
                    <td className="p-4">Engineering teams</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* BILL GATES QUOTE BLOCK (Exact matching user screenshot 2) */}
            <div className="my-10 p-6 sm:p-8 space-y-4">
              <div className="text-4xl text-neutral-400 font-serif font-bold leading-none">
                “
              </div>
              <blockquote className="text-lg sm:text-xl text-neutral-800 font-medium italic leading-relaxed">
                The first rule of any technology used in a business is that automation applied to an efficient operation will magnify the efficiency. The second is that automation applied to an inefficient operation will magnify the inefficiency.
              </blockquote>
              <p className="text-base font-extrabold text-neutral-900 pt-2">
                Bill Gates
              </p>
            </div>

            {/* PROCESS AND PROCEDURES TEMPLATE BANNER (Exact matching user screenshot 3) */}
            <div className="bg-[#f8f8fc] p-6 sm:p-8 rounded-[24px] border border-neutral-200/60 space-y-6 my-10">
              <p className="text-base sm:text-lg text-neutral-800 font-medium">
                Documenting your processes before building automation ensures every trigger, condition, and action matches a real step your team takes.
              </p>

              <p className="text-sm sm:text-base text-neutral-700">
                The{" "}
                <Link href="#" className="text-[#0081fb] font-semibold hover:underline">
                  Hashboard Process and Procedures Template
                </Link>{" "}
                helps you break each workflow into clear, ordered stages with assigned owners. You can pinpoint where an automation should run and who should receive the handoff.
              </p>

              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-neutral-200/80 shadow-md">
                <Image
                  src="/blog/process-procedures.png"
                  alt="Hashboard Process and Procedures Template"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* FAQ SECTION: ARE HASHBOARD AUTOMATIONS FREE? (Exact matching user screenshot 4) */}
            <div className="pt-8 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
                Are Hashboard automations free, and how many do I get?
              </h2>

              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
                Yes, automations are available on every plan, including Free Forever, which includes 5 active automations and 100 actions per month. The Unlimited plan raises that to 500 active automations and 1,000 monthly actions, and Business offers unlimited active automations with 10,000 actions per month. Each time a rule runs counts as one action, and your limit resets on the 1st of every month (Pacific Time). You can buy more actions on higher plans if you run out.
              </p>

              {/* EVERYTHING YOU NEED CTA BANNER CARD (Exact matching user screenshot) */}
              <div className="bg-[#f8f8fa] rounded-xl p-6 sm:p-7 border border-neutral-200/60 flex flex-col sm:flex-row items-center justify-between gap-6 my-6 min-h-[220px]">
                <div className="space-y-4 max-w-xs">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-900 tracking-tight leading-tight">
                    Everything you need to stay organized and get work done.
                  </h3>

                  <div className="flex items-center gap-2.5 pt-1">
                    <Link
                      href="/signup"
                      className="bg-[#1c1c1e] hover:bg-neutral-800 text-white font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm transition-all inline-flex items-center gap-1.5 shadow-sm"
                    >
                      <span>Sign Up</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      href="/demo"
                      className="bg-neutral-200/80 hover:bg-neutral-300 text-neutral-800 font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm transition-all"
                    >
                      Contact Sales
                    </Link>
                  </div>
                </div>

                <div className="relative aspect-[16/10] w-full sm:w-56 rounded-xl overflow-hidden border border-neutral-200/60 shadow-sm shrink-0">
                  <Image
                    src="/blog/newsletter-banner.png"
                    alt="Hashboard Workspace App"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: STICKY SIDEBAR */}
          <div className="lg:col-span-4 sticky top-24 space-y-6">
            
            {/* Table of Contents Button & Dropdown */}
            <div className="space-y-3">
              <button
                type="button"
                onClick={() => setShowToc(!showToc)}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#7026e3] uppercase tracking-wider hover:text-purple-800 transition-colors"
              >
                <span>TABLE OF CONTENTS</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${showToc ? "rotate-180" : ""}`} />
              </button>

              {showToc && (
                <div className="p-4 rounded-xl bg-[#f8f8fc] border border-purple-100 text-xs space-y-2 font-medium text-neutral-800">
                  <p className="hover:text-purple-600 cursor-pointer">1. What Are Automations in ClickUp?</p>
                  <p className="hover:text-purple-600 cursor-pointer">2. How does automation differ from AI Agents?</p>
                  <p className="hover:text-purple-600 cursor-pointer">3. Everyday Task Automations</p>
                  <p className="hover:text-purple-600 cursor-pointer">4. Approval & Handoff Automations</p>
                </div>
              )}
            </div>

            {/* STICKY "Start using ClickUp today" DARK PROMO CARD */}
            <div className="bg-[#1c1c1e] text-white rounded-xl p-6 sm:p-7 shadow-xl space-y-5 min-h-[220px]">
              <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
                Start using Hashboard today
              </h3>

              <ul className="space-y-3.5 text-xs sm:text-sm font-medium text-neutral-300">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/15 text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>Manage all your work in one place</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/15 text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>Collaborate with your team</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/15 text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>Use Hashboard for FREE—forever</span>
                </li>
              </ul>

              <Link
                href="/signup"
                className="mt-6 block w-full text-center bg-gradient-to-r from-[#4480ff] via-[#8d3dff] to-[#ff5982] hover:opacity-95 text-white font-extrabold py-3.5 px-6 rounded-xl text-sm transition-all shadow-md"
              >
                Get Started
              </Link>
            </div>

          </div>

        </div>

        {/* RECENT ARTICLES SECTION (With divider line under header matching user screenshot) */}
        <section className="mt-16 pt-4">
          <div className="mb-8">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-neutral-500 block mb-3">
              RECENT ARTICLES
            </span>
            <div className="h-[1px] bg-neutral-200/90 w-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentArticlesData.map((art) => (
              <Link
                key={art.id}
                href={`/blog/${art.slug}`}
                className="group flex flex-col justify-between space-y-4 p-5 rounded-2xl bg-[#f8f8fa]/60 hover:bg-[#f8f8fa] border border-neutral-200/50 transition-all hover:shadow-sm"
              >
                <h3 className="text-base font-extrabold text-neutral-900 leading-snug group-hover:text-purple-600 transition-colors">
                  {art.title}
                </h3>

                <div className="flex items-center justify-between text-xs text-neutral-500 font-medium pt-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full overflow-hidden relative border border-neutral-200">
                      <Image src={art.authorAvatar} fill alt={art.author} className="object-cover" />
                    </div>
                    <span className="font-bold text-neutral-900">{art.author}</span>
                  </div>
                  <span>{art.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* WRITECLICK NEWSLETTER BANNER CARD */}
        <section className="my-16 sm:my-20">
          <div className="relative overflow-hidden bg-[#f6f6f9] rounded-[24px] md:rounded-[30px] px-6 py-6 sm:px-10 sm:py-8 md:px-12 md:py-9 flex items-center">
            
            {/* Left Content */}
            <div className="relative z-10 max-w-lg space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-[32px] font-extrabold text-neutral-900 tracking-tight leading-[1.15]">
                Receive the latest WriteClick <br className="hidden sm:inline" />
                Newsletter updates.
              </h2>

              {bannerSubscribed ? (
                <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 px-5 py-3.5 rounded-2xl text-sm font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>You&apos;re subscribed to WriteClick updates!</span>
                </div>
              ) : (
                <form onSubmit={handleBannerSubscribe} className="flex flex-col sm:flex-row items-center gap-3 max-w-md">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={bannerEmailInput}
                    onChange={(e) => setBannerEmailInput(e.target.value)}
                    className="w-full sm:flex-1 px-5 py-3.5 rounded-2xl bg-white border border-transparent text-neutral-900 placeholder:text-neutral-400 font-medium text-sm focus:outline-none shadow-sm"
                  />
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-[#1e1e24] hover:bg-neutral-800 text-white font-bold px-7 py-3.5 rounded-2xl text-sm transition-all shadow-sm whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>

            {/* Right Side Graphic Image */}
            <div className="absolute right-0 top-0 bottom-0 w-[55%] h-full hidden md:block overflow-hidden pointer-events-none">
              <div className="relative w-full h-full [mask-image:linear-gradient(to_right,transparent_0%,black_30%)]">
                <Image
                  src="/blog/newsletter-banner.png"
                  alt="WriteClick Newsletter Hashboard Graphic"
                  fill
                  className="object-cover object-left-top"
                  priority
                />
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}
