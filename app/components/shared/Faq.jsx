"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container, Section } from "../ui/Container";
import { SectionHeading } from "../ui/Bits";
import { cn } from "@/lib/utils";

export default function Faq({ title = "Frequently asked questions", description, contactHref, items }) {
  const [open, setOpen] = useState(0);

  return (
    <Section className="py-20 md:py-24">
      <Container size="narrow">
        <SectionHeading title={title} />
        {description && <p className="mx-auto mt-4 max-w-2xl text-center text-[16px] leading-relaxed text-ink-secondary">{description}</p>}
        {contactHref && <div className="mt-7 flex justify-center"><Link href={contactHref} className="inline-flex items-center gap-3 rounded-xl bg-[#202020] px-6 py-3.5 text-[14px] font-bold text-white">Contact us <ArrowRight className="size-4"/></Link></div>}
        <ul className="mt-12 divide-y divide-line border-y border-line">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-6 py-6 text-left"
                >
                  <span className="text-[17px] leading-snug font-semibold text-ink">
                    {item.q}
                  </span>
                  <Plus
                    className={cn(
                      "mt-0.5 size-5 shrink-0 text-ink-tertiary transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
                      isOpen && "rotate-45 text-brand-purple",
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="pr-12 pb-6 text-[15px] leading-relaxed text-ink-secondary">
                      {item.a}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
