"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

function ClickUpLogoMark({ className = "size-6" }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 22L20 14L30 22"
        stroke="url(#ft_logo_grad_2)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 29C17 32 23 32 27 29"
        stroke="url(#ft_logo_grad_2)"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="ft_logo_grad_2" x1="10" y1="14" x2="30" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7612fa" />
          <stop offset="0.5" stopColor="#fa12e3" />
          <stop offset="1" stopColor="#fc6d2d" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z" />
    </svg>
  );
}

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" {...props}>
      <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const aiLinks = [
  "Brain",
  "Super Agents",
  "Ambient Agents",
  "Notetaker",
  "Enterprise Search",
  "Talk to Text",
];

const downloadLinks = ["iOS & Android", "Mac & Windows", "Brain MAX"];

const productLinks = [
  "Chat",
  "Projects",
  "Docs & Wikis",
  "Calendar",
  "Dashboards",
  "Time Tracking",
  "Gantt Charts",
  "Automations",
  "Whiteboards",
  "API",
  "Integrations",
];

const compareLinks = [
  "vs Atlassian",
  "vs Microsoft Teams",
  "vs Asana",
  "vs ServiceNow",
  "vs Monday",
  "vs Slack",
  "vs Smartsheet",
  "vs Wrike",
  "vs Salesforce",
  "vs Notion",
  "vs Airtable",
];

const companyLinks = [
  "About Us",
  "Careers",
  "Customers",
  "Affiliates",
  "Events",
  "Partners",
  "Consultants",
  "Reviews",
  "Press",
  "Brand",
  "Roadmap",
];

const helpLinks = [
  "24/7 Support",
  "Contact Us",
  "Get a Demo",
  "Import",
  "Templates",
  "Community",
  "ClickUp University",
  "Webinars",
  "Blog",
  "Research",
];

const legalLinks = [
  "Status",
  "Security",
  "Privacy",
  "Terms",
  "Cookie Preferences",
];

export default function Footer() {
  const pathname = usePathname();
  const isResearchPage = pathname?.startsWith("/research");
  const isAboutPage = pathname?.startsWith("/about");
  const isAuthPage = pathname === "/login" || pathname === "/signup";

  if (isAuthPage) return null;

  return (
    <footer className={cn("w-full bg-white text-[#52525b] pt-10 pb-12", !isResearchPage && !isAboutPage && "border-t border-[#e5e7eb]")}>
      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-12">
        {/* Top Disclaimer Line (hidden on Research and About pages) */}
        {!isResearchPage && !isAboutPage && (
          <div className="text-left text-[12.5px] text-[#71717a] font-normal pb-6 border-b border-[#e5e7eb] mb-8">
            1. Our agreements ensure zero data training & retention on all third-party model providers
          </div>
        )}

        {/* 5 Navigation Columns with Logo on Top of Column 1 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10 text-left mb-14">
          {/* Column 1: Logo + AI + Download */}
          <div>
            {/* ClickUp Logo */}
            <div className="flex items-center gap-2 mb-6">
              <ClickUpLogoMark className="size-6" />
              <span className="font-display text-[20px] font-extrabold tracking-tight text-[#111827]">
                ClickUp
              </span>
            </div>

            <h3 className="text-[13.5px] font-bold text-[#111827] mb-3">AI</h3>
            <ul className="space-y-2 text-[13px]">
              {aiLinks.map((item) => (
                <li key={item}>
                  <Link href="/ai" className="hover:text-[#111827] transition-colors leading-[1.7] block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-[13.5px] font-bold text-[#111827] mt-6 mb-3">Download</h3>
            <ul className="space-y-2 text-[13px]">
              {downloadLinks.map((item) => (
                <li key={item}>
                  <Link href="/download" className="hover:text-[#111827] transition-colors leading-[1.7] block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Product */}
          <div className="pt-[44px]">
            <h3 className="text-[13.5px] font-bold text-[#111827] mb-3">Product</h3>
            <ul className="space-y-2 text-[13px]">
              {productLinks.map((item) => (
                <li key={item}>
                  <Link
                    href={
                      item === "Chat"
                        ? "/features/chat"
                        : item === "Dashboards"
                        ? "/features/dashboards"
                        : item === "Tasks"
                        ? "/features/tasks"
                        : item === "Docs & Wikis" || item === "Docs"
                        ? "/features/docs"
                        : item === "Calendar"
                        ? "/features/calendar"
                        : item === "Board view" || item === "Board"
                        ? "/features/kanban-board"
                        : "/product"
                    }
                    className="hover:text-[#111827] transition-colors leading-[1.7] block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Compare */}
          <div className="pt-[44px]">
            <h3 className="text-[13.5px] font-bold text-[#111827] mb-3">Compare</h3>
            <ul className="space-y-2 text-[13px]">
              {compareLinks.map((item) => (
                <li key={item}>
                  <Link href="/compare" className="hover:text-[#111827] transition-colors leading-[1.7] block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company */}
          <div className="pt-[44px]">
            <h3 className="text-[13.5px] font-bold text-[#111827] mb-3">Company</h3>
            <ul className="space-y-2 text-[13px]">
              {companyLinks.map((item) => (
                <li key={item}>
                  <Link href="/company" className="hover:text-[#111827] transition-colors leading-[1.7] block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Help */}
          <div className="pt-[44px]">
            <h3 className="text-[13.5px] font-bold text-[#111827] mb-3">Help</h3>
            <ul className="space-y-2 text-[13px]">
              {helpLinks.map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Blog" ? "/blog" : item === "Research" ? "/research" : "/learn"}
                    className="hover:text-[#111827] transition-colors leading-[1.7] block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Icons & Security Badges Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6">
          {/* Social Icons */}
          <div className="flex items-center gap-5 text-[#71717a]">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#111827] transition-colors" aria-label="LinkedIn">
              <LinkedinIcon />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#111827] transition-colors" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#111827] transition-colors" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-[#111827] transition-colors" aria-label="X">
              <XIcon />
            </a>
          </div>

          {/* Security Compliance Badges */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <div className="flex items-center gap-1">
              <Image src="/footer/cert-soc2.svg" alt="SOC 2" width={14} height={14} className="shrink-0" />
              <span className="text-[9px] leading-[1.2] text-[#52525b]">
                SOC 2
                <br />
                CERTIFIED
              </span>
            </div>
            <Image src="/footer/cert-iso.png" alt="ISO 27001 Certified by Schellman" width={95} height={32} className="h-[20px] w-auto shrink-0" />
            <div className="flex items-center gap-1">
              <Image src="/footer/cert-gdpr.svg" alt="GDPR" width={14} height={13} className="shrink-0" />
              <span className="text-[9px] leading-[1.2] text-[#52525b]">
                GDPR
                <br />
                COMPLIANT
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Image src="/footer/cert-hipaa.svg" alt="HIPAA" width={13} height={12} className="shrink-0" />
              <span className="text-[9px] leading-[1.2] text-[#52525b]">
                HIPAA
                <br />
                COMPLIANT
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#e5e7eb] text-[12.5px] text-[#71717a]">
          <div>© 2026 ClickUp</div>

          <div className="flex flex-wrap items-center gap-6">
            {legalLinks.map((item) => (
              <Link key={item} href="/legal" className="hover:text-[#111827] transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
