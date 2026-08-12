"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Mail } from "lucide-react";
import { Container } from "../ui/Container";
import { Eyebrow } from "../ui/Bits";
import Button from "../ui/Button";
import { cn } from "@/lib/utils";

const RELATED_PAGES = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Contact Us", href: "/contact" },
];

export default function LegalLayout({ eyebrow, title, effectiveDate, version, sections, children }) {
  const [activeId, setActiveId] = useState(sections?.[0]?.id);
  const observerRef = useRef(null);

  useEffect(() => {
    if (!sections?.length) return;
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-96px 0px -70% 0px", threshold: 0 },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observerRef.current.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, [sections]);

  return (
    <div className="bg-bg-main">
      <header className="border-b border-line py-16">
        <Container size="narrow" className="text-center">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="font-display mt-5 text-[clamp(2.1rem,4.6vw,3.25rem)] leading-[1.08] font-extrabold tracking-[-0.035em] text-ink text-balance">
            {title}
          </h1>
          <p className="mt-3.5 font-mono text-[12.5px] font-semibold tracking-[0.04em] text-ink-tertiary uppercase">
            Effective {effectiveDate} <span aria-hidden="true">·</span> Version {version}
          </p>

          <nav aria-label="Legal pages" className="mt-6 flex flex-wrap justify-center gap-2">
            {RELATED_PAGES.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="rounded-full border border-line px-4 py-1.5 text-[13px] font-semibold text-ink-secondary transition-all hover:border-line-strong hover:bg-bg-box hover:text-ink"
              >
                {p.label}
              </Link>
            ))}
          </nav>
        </Container>
      </header>

      <Container className="py-14 md:py-20">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[220px_minmax(0,1fr)] md:gap-16">
          <aside aria-label="Table of contents" className="md:sticky md:top-[84px] md:max-h-[calc(100vh-110px)] md:overflow-y-auto">
            <p className="mb-3 text-[11px] font-bold tracking-[0.08em] text-ink-tertiary uppercase">On this page</p>
            <ol className="flex flex-row flex-wrap gap-2 md:flex-col md:gap-0.5">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className={cn(
                      "block rounded-full border border-line px-3 py-1.5 text-[13.5px] leading-[1.4] text-ink-tertiary transition-all hover:bg-bg-box hover:text-ink md:-ml-2.5 md:rounded-lg md:border-0 md:border-l-2 md:border-transparent md:px-2.5 md:py-1.5",
                      activeId === s.id &&
                        "border-accent-purple bg-accent-purple-badge font-semibold text-accent-purple md:border-l-accent-purple",
                    )}
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ol>
          </aside>

          <div className="min-w-0 max-w-[720px]">
            {children}

            <div className="mt-2 flex flex-col items-start gap-5 rounded-2xl border border-line bg-bg-box p-6 sm:flex-row sm:items-center sm:p-7">
              <Mail className="size-5.5 shrink-0 text-accent-purple" strokeWidth={1.75} />
              <div className="flex-1">
                <h3 className="mb-0.5 text-[16px] font-bold text-ink">Questions about this policy?</h3>
                <p className="text-[13.5px] text-ink-tertiary">
                  Our team is happy to walk through anything here in plain English.
                </p>
              </div>
              <Button href="mailto:connect@triplehash.in" variant="outline" size="md" className="shrink-0">
                Email connect@triplehash.in
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export function LegalSection({ id, number, label, children }) {
  return (
    <section id={id} className="scroll-mt-[84px] border-b border-line pb-10 mb-10 last-of-type:mb-0 last-of-type:border-none">
      <h2 className="mb-3.5 flex items-baseline gap-2.5 font-display text-[22px] font-[750] tracking-[-0.015em] text-ink">
        <span className="font-mono text-[13px] font-semibold text-accent-purple">{number}</span>
        {label}
      </h2>
      <div className="[&_h3]:mt-5 [&_h3]:mb-2 [&_h3]:text-[15.5px] [&_h3]:font-bold [&_h3]:text-ink [&_p]:mb-3.5 [&_p]:text-[15px] [&_p]:leading-[1.75] [&_p]:text-ink-secondary [&_strong]:font-[650] [&_strong]:text-ink [&_ul]:my-1 [&_ul]:mb-4 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2 [&_li]:relative [&_li]:pl-5 [&_li]:text-[15px] [&_li]:leading-[1.7] [&_li]:text-ink-secondary [&_li]:before:absolute [&_li]:before:left-1 [&_li]:before:top-[9px] [&_li]:before:size-[5px] [&_li]:before:rounded-full [&_li]:before:bg-accent-purple-soft">
        {children}
      </div>
    </section>
  );
}

export function LegalCallout({ children }) {
  return (
    <div className="my-1 mb-4.5 rounded-[10px] border border-line border-l-[3px] border-l-accent-purple bg-bg-box px-4.5 py-3.5 text-[14px] leading-[1.65] text-ink-secondary [&_strong]:font-[650] [&_strong]:text-ink">
      {children}
    </div>
  );
}
