"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ArrowRight, Clock, CheckCircle2, ChevronDown, Play } from "lucide-react";

const initialArticles = [
  {
    id: 1,
    type: "article",
    slug: "automation-examples",
    title: "How Hashboard's Marketing Team Uses Hashboard",
    category: "USING HASHBOARD",
    readTime: "Max 18min read",
    author: "Garima Behal",
    authorAvatar: "/blog/author-1.jpg",
    image: "/blog/process-procedures.png",
  },
  {
    id: 2,
    type: "article",
    slug: "automation-examples",
    title: "Why Most Companies Get AI Maturity Wrong",
    category: "AI & AUTOMATION",
    readTime: "Max 7min read",
    author: "Sean Hardy",
    authorAvatar: "/blog/author-2.jpeg",
    image: "/blog/featured-hero.png",
  },
  {
    id: 3,
    type: "subscribe_card",
  },
  {
    id: 4,
    type: "article",
    slug: "context-switching-cost",
    title: "Why Smart Teams Make Worse decisions As They Scale",
    category: "AI & AUTOMATION",
    readTime: "Max 10min read",
    author: "Dan Zhang",
    authorAvatar: "/blog/author-3.png",
    image: "/blog/context-switching.png",
  },
  {
    id: 5,
    type: "article",
    slug: "automation-examples",
    title: "Hashboard's G2 Winter 2026 Performance Signals The Rise of a Converged, AI-Native System of Work",
    category: "NEWS",
    readTime: "Max 7min read",
    author: "Kyle Coleman",
    authorAvatar: "/blog/author-2.jpeg",
    image: "/blog/automation-dashboards.png",
  },
  {
    id: 6,
    type: "article",
    slug: "process-and-procedures-template",
    title: "From Chaos to Clarity: A Project Manager's Guide to AI-Powered Execution",
    category: "PROJECT MANAGEMENT",
    readTime: "Max 7min read",
    author: "Jacqui Tripoli",
    authorAvatar: "/blog/author-1.jpg",
    image: "/blog/process-procedures.png",
  },
  {
    id: 7,
    type: "article",
    slug: "automation-examples",
    title: "How AI Agents Automate Time Logging and Resource Tracking",
    category: "AI & AUTOMATION",
    readTime: "Max 6min read",
    author: "Sam Peterson",
    authorAvatar: "/blog/author-3.png",
    image: "/blog/featured-hero.png",
  },
  {
    id: 8,
    type: "article",
    slug: "context-switching-cost",
    title: "Setting Quarterly OKRs That Actually Align With Company Strategy",
    category: "OPERATIONS",
    readTime: "Max 9min read",
    author: "Rachel Green",
    authorAvatar: "/blog/author-1.jpg",
    image: "/blog/context-switching.png",
  },
  {
    id: 9,
    type: "article",
    slug: "automation-examples",
    title: "20 Automation Examples in Hashboard Worth Stealing",
    category: "USING HASHBOARD",
    readTime: "Max 31min read",
    author: "Praburam Srinivasan",
    authorAvatar: "/blog/author-2.jpeg",
    image: "/blog/automation-dashboards.png",
  },
];

const extraArticles = [
  {
    id: 10,
    type: "article",
    slug: "automation-examples",
    title: "Mastering Agile Sprints with Hashboard Brain & Automations",
    category: "PROJECT MANAGEMENT",
    readTime: "Max 11min read",
    author: "Alex Rivera",
    authorAvatar: "/blog/author-3.png",
    image: "/blog/automation-dashboards.png",
  },
  {
    id: 11,
    type: "article",
    slug: "context-switching-cost",
    title: "The Ultimate Guide to Asynchronous Team Communication",
    category: "REMOTE WORK",
    readTime: "Max 8min read",
    author: "Megan N.",
    authorAvatar: "/blog/author-1.jpg",
    image: "/blog/context-switching.png",
  },
];

const topVideos = [
  {
    id: 1,
    title: "Introducing Hashboard AI Super Agents",
    image: "/blog/vids/vid-1.png",
    embedUrl: "https://www.youtube.com/embed/k1TDw14vsME?autoplay=1",
  },
  {
    id: 2,
    title: "Introducing Hashboard 4.0",
    image: "/blog/vids/vid-2.png",
    embedUrl: "https://www.youtube.com/embed/feAJjhF4_-M?autoplay=1",
  },
  {
    id: 3,
    title: "Live Workshop: Building Super Agents",
    image: "/blog/vids/vid-3.png",
    embedUrl: "https://www.youtube.com/embed/0o7qYaRTg3w?autoplay=1",
  },
  {
    id: 4,
    title: "Introducing Hashboard Chat",
    image: "/blog/vids/vid-4.png",
    embedUrl: "https://www.youtube.com/embed/-QZ7TDSJgLg?autoplay=1",
  },
];

export default function BlogIndexPage() {
  const [activeFilter, setActiveFilter] = useState("Recent");
  const [allArticles, setAllArticles] = useState(initialArticles);
  const [hasLoadedMore, setHasLoadedMore] = useState(false);
  const [activeVideo, setActiveVideo] = useState(topVideos[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const [emailInput, setEmailInput] = useState("");
  const [cardEmailInput, setCardEmailInput] = useState("");
  const [bannerEmailInput, setBannerEmailInput] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [cardSubscribed, setCardSubscribed] = useState(false);
  const [bannerSubscribed, setBannerSubscribed] = useState(false);

  const handleLoadMore = () => {
    setAllArticles((prev) => [...prev, ...extraArticles]);
    setHasLoadedMore(true);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput("");
    }
  };

  const handleCardSubscribe = (e) => {
    e.preventDefault();
    if (cardEmailInput.trim()) {
      setCardSubscribed(true);
      setCardEmailInput("");
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
    <div className="blog-page min-h-screen bg-[#ffffff] py-10 sm:py-16 text-[#1c1c1e]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HERO SECTION: 2 COLUMNS (Exact matching screenshot 1) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16">
          
          {/* Left Column: Title, Subtitle, Subscribe Form, Social Links */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-neutral-900 tracking-tight leading-[1.08]">
              Project management <br />
              <span className="text-neutral-400 font-normal">tips & trends,</span> <br />
              delivered.
            </h1>

            <p className="text-neutral-500 text-base sm:text-lg font-normal max-w-lg leading-relaxed">
              Join productivity hackers from around the world that receive WriteClick—the Hashboard Blog Newsletter.
            </p>

            {/* Email Form */}
            {subscribed ? (
              <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 px-5 py-3 rounded-2xl text-sm font-semibold">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>You&apos;re subscribed to WriteClick!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-3 max-w-md">
                <input
                  type="email"
                  required
                  placeholder="Enter email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="w-full sm:flex-1 px-5 py-3.5 rounded-2xl bg-[#f5f5f7] border border-transparent text-neutral-900 placeholder:text-neutral-400 font-medium focus:bg-white focus:border-neutral-300 focus:outline-none transition-all text-sm"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#1e1e24] hover:bg-neutral-800 text-white font-bold px-7 py-3.5 rounded-2xl transition-all shadow-sm text-sm whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            )}

            {/* Social Follow Bar */}
            <div className="flex items-center gap-4 text-xs font-semibold text-neutral-500 pt-2">
              <span>Follow us on:</span>
              <div className="flex items-center gap-3 text-neutral-600">
                <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-neutral-900 transition-colors" aria-label="X">
                  <span className="font-extrabold text-sm tracking-tight">𝕏</span>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-neutral-900 transition-colors" aria-label="LinkedIn">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"/></svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-neutral-900 transition-colors" aria-label="Instagram">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-neutral-900 transition-colors" aria-label="Facebook">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/></svg>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Featured Blog Card */}
          <div className="lg:col-span-6">
            <Link href="/blog/automation-examples" className="group block">
              <div className="space-y-4">
                {/* Hero Image */}
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-neutral-100 shadow-sm">
                  <Image
                    src="/blog/featured-hero.png"
                    alt="Brain²: The Coming Wave"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>

                {/* Article Title */}
                <h2 className="text-xl sm:text-2xl font-extrabold text-neutral-900 tracking-tight group-hover:text-[#7c3aed] transition-colors">
                  Brain²: The Coming Wave
                </h2>

                {/* Author Info Row */}
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden relative border border-neutral-200">
                      <Image src="/blog/author-3.png" fill alt="Jay Hack" className="object-cover" />
                    </div>
                    <span className="text-sm font-bold text-neutral-900">Jay Hack</span>
                  </div>

                  <span className="text-xs font-semibold text-[#7c3aed]">
                    Max 4min read
                  </span>
                </div>
              </div>
            </Link>
          </div>

        </div>

        {/* ARTICLES HEADER & FILTER BAR */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-8 mb-10">
          <div className="flex-1 space-y-3 w-full">
            <span className="text-xs font-extrabold tracking-widest uppercase text-neutral-500 block">
              ARTICLES
            </span>
            <div className="h-[1px] bg-neutral-200/80 w-full" />
          </div>

          {/* Recent / Popular Toggle Pill */}
          <div className="inline-flex items-center bg-[#f2f2f5] p-1 rounded-full text-xs font-bold shrink-0 self-start sm:self-auto">
            <button
              type="button"
              onClick={() => setActiveFilter("Recent")}
              className={`px-4 py-1.5 rounded-full transition-all ${
                activeFilter === "Recent"
                  ? "bg-[#292930] text-white shadow-sm"
                  : "text-neutral-500 hover:text-neutral-900"
              }`}
            >
              Recent
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("Popular")}
              className={`px-4 py-1.5 rounded-full transition-all ${
                activeFilter === "Popular"
                  ? "bg-[#292930] text-white shadow-sm"
                  : "text-neutral-500 hover:text-neutral-900"
              }`}
            >
              Popular
            </button>
          </div>
        </div>

        {/* ARTICLES GRID: 3 COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {allArticles.map((item, idx) => {
            if (item.type === "subscribe_card") {
              return (
                <div
                  key="subscribe-card"
                  className="bg-[#1c1c1e] text-white rounded-[24px] p-7 flex flex-col justify-between shadow-md"
                >
                  <div className="space-y-3">
                    <h3 className="text-2xl font-extrabold tracking-tight">
                      Subscribe to our blog
                    </h3>
                    <p className="text-neutral-400 text-sm font-normal">
                      Get the latest posts in your email
                    </p>
                  </div>

                  {cardSubscribed ? (
                    <div className="my-auto py-4 text-emerald-400 font-bold text-sm flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      <span>Thanks for subscribing!</span>
                    </div>
                  ) : (
                    <form onSubmit={handleCardSubscribe} className="space-y-3 mt-6">
                      <input
                        type="email"
                        required
                        placeholder="Enter your email address"
                        value={cardEmailInput}
                        onChange={(e) => setCardEmailInput(e.target.value)}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#29292e] text-white placeholder:text-neutral-500 text-sm border border-transparent focus:outline-none focus:border-neutral-500 transition-all"
                      />
                      <button
                        type="submit"
                        className="w-full bg-[#e4e4e7] hover:bg-white text-neutral-950 font-bold py-3.5 rounded-xl text-sm transition-all shadow-sm"
                      >
                        Subscribe
                      </button>
                    </form>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={`${item.slug}-${idx}`}
                href={`/blog/${item.slug}`}
                className="group bg-[#f9f9fb] hover:bg-[#ededf2] rounded-[24px] p-6 flex flex-col justify-between transition-colors duration-200 cursor-pointer"
              >
                <div>
                  {/* Article Card Image */}
                  <div className="relative aspect-[16/10] w-full rounded-[16px] overflow-hidden bg-white mb-5 border border-neutral-200/50">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Category Tag */}
                  <span className="text-[11px] font-mono font-bold text-[#7c3aed] uppercase tracking-wider block mb-2">
                    {item.category}
                  </span>

                  {/* Article Title */}
                  <h3 className="text-xl font-extrabold text-neutral-900 tracking-tight leading-snug mb-6 transition-colors">
                    {item.title}
                  </h3>
                </div>

                {/* Author & Read Time Footer Row */}
                <div className="pt-4 border-t border-neutral-200/60 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full overflow-hidden relative border border-neutral-200">
                      <Image src={item.authorAvatar} fill alt={item.author} className="object-cover" />
                    </div>
                    <span className="text-xs font-bold text-neutral-900">{item.author}</span>
                  </div>

                  <span className="text-xs font-semibold text-[#7c3aed]">
                    {item.readTime}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* LOAD MORE BUTTON */}
        {!hasLoadedMore && (
          <div className="flex items-center justify-center my-12">
            <button
              type="button"
              onClick={handleLoadMore}
              className="inline-flex items-center gap-1.5 bg-[#f4f4f6] hover:bg-[#eaeaee] text-neutral-800 font-bold px-6 py-2.5 rounded-xl transition-all text-xs"
            >
              <span>Load More</span>
              <ChevronDown className="w-4 h-4 text-neutral-700" />
            </button>
          </div>
        )}

        {/* TOP VIDEOS SECTION */}
        <section className="mt-16 pt-4">
          
          {/* Header title */}
          <div className="mb-8 space-y-3">
            <span className="text-xs font-extrabold tracking-widest uppercase text-neutral-500 block">
              TOP VIDEOS
            </span>
            <div className="h-[1px] bg-neutral-200/80 w-full" />
          </div>

          {/* 2-Column Video Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start mb-12">
            
            {/* Left Main Video Player */}
            <div className="lg:col-span-8">
              <div className="relative aspect-[16/9] w-full rounded-[24px] overflow-hidden bg-white group">
                {isPlaying ? (
                  <iframe
                    src={activeVideo.embedUrl}
                    title={activeVideo.title}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div
                    onClick={() => setIsPlaying(true)}
                    className="relative w-full h-full cursor-pointer flex items-center justify-center bg-white overflow-hidden"
                  >
                    {/* Faded Background Image */}
                    <div className="absolute inset-0 w-full h-full [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_92%)]">
                      <Image
                        src={activeVideo.image}
                        alt={activeVideo.title}
                        fill
                        priority
                        className="object-cover"
                      />
                    </div>

                    {/* Centered White Play Button Overlay */}
                    <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white text-neutral-950 flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform duration-300">
                      <Play className="w-9 h-9 sm:w-10 sm:h-10 fill-current ml-1 text-neutral-950" />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Side: OTHER VIDEOS List */}
            <div className="lg:col-span-4 space-y-4">
              <span className="text-xs font-mono font-bold text-[#7026e3] uppercase tracking-wider block mb-4">
                OTHER VIDEOS
              </span>

              <div className="space-y-5">
                {topVideos.map((vid) => (
                  <button
                    key={vid.id}
                    type="button"
                    onClick={() => {
                      setActiveVideo(vid);
                      setIsPlaying(true);
                    }}
                    className={`w-full text-left flex items-start gap-4 p-2 rounded-2xl transition-all ${
                      activeVideo.id === vid.id
                        ? "bg-[#f2f2f7]"
                        : "hover:bg-[#f8f8fc]"
                    }`}
                  >
                    {/* Video Thumbnail with Soft Rounded Shadow */}
                    <div className="relative aspect-[16/10] w-32 shrink-0 rounded-[16px] overflow-hidden bg-neutral-100 shadow-md shadow-neutral-300/40 border-0">
                      <Image src={vid.image} fill alt={vid.title} className="object-cover" />
                      <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-white/90 text-neutral-900 flex items-center justify-center shadow">
                          <Play className="w-3 h-3 fill-current ml-0.5" />
                        </div>
                      </div>
                    </div>

                    {/* Video Title */}
                    <span className="text-base font-extrabold text-neutral-900 leading-snug pt-1">
                      {vid.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom "watch more" CTA Button */}
          <div className="flex items-center justify-center gap-4 mt-12 mb-6">
            <div className="flex-1 h-[1px] bg-neutral-200/80" />
            <a
              href="https://www.youtube.com/@ClickUpProductivity"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center bg-[#1e1e24] hover:bg-neutral-800 text-white font-bold px-8 py-3 rounded-[14px] transition-all text-sm shrink-0"
            >
              watch more
            </a>
            <div className="flex-1 h-[1px] bg-neutral-200/80" />
          </div>

        </section>

        {/* WRITECLICK NEWSLETTER BANNER CARD */}
        <section className="my-12 sm:my-16">
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

            {/* Right Side Graphic Image (Exact matching user screenshot) */}
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
