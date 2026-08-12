"use client";

import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import "./roi-section.css";

const roiMetrics = [
  {
    tag: "ROI",
    value: "384%",
    description:
      "Hashboard delivered 384% ROI over three years, helping organizations unlock significant efficiency gains.",
  },
  {
    tag: "REVENUE INCREASE",
    value: "$3.9M",
    description:
      "Hashboard projects drove $3.9M in revenue gains by streamlining work, consolidating tools, and scaling faster.",
  },
  {
    tag: "HOURS SAVED",
    value: "92,400",
    description:
      "Organizations saved 92,400 hours with Hashboard, reducing manual work and recapturing productivity at scale.",
  },
  {
    tag: "PAYBACK",
    value: "<6 mo",
    description:
      "Customers reached payback in under six months, making Hashboard a proven investment with rapid returns.",
  },
];

const compliance = ["SOC 2 Type II", "ISO 27001", "GDPR", "HIPAA"];

export function RoiSection() {
  return (
    <section className="roi-wrapper" data-testid="home-impact">
      <div className="roi-container">
        <div className="roi-title-row">
          <div className="roi-title-wrap">
            <div className="roi-title">
              <h2>It&apos;s like adding 15 full-time employees</h2>
            </div>
            <div className="roi-subtext">
              <p>
                According to third party research Hashboard saves the average company
                over 30k hours per year, <br />
                and delivers industry-leading ROI.
              </p>
            </div>
          </div>

          <div className="roi-cta-wrap">
            <Link href="/signup" className="roi-button">
              <strong>
                <span>Get started</span>
              </strong>
            </Link>
          </div>
        </div>

        <div className="roi-stats">
          {roiMetrics.map((item) => (
            <div key={item.tag} className="roi-stat">
              <div className="roi-stat-content">
                <p className="roi-stat-title">{item.tag}</p>
                <div className="roi-stat-value">{item.value}</div>
              </div>
              <p className="roi-stat-desc">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="roi-footer">
          <p className="roi-footnote">
            *from 2025 The Total Economic Impact™ of Hashboard report from Forrester
            Group.{" "}
            <Link href="/demo" className="roi-footnote-link">
              Get the report
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export function ScaleSection() {
  return (
    <section className="relative w-full bg-white py-16 md:py-20 border-t border-[#e8e8e8]">
      <div className="mx-auto w-full max-w-[1550px] px-6 sm:px-10 lg:px-16">
        <div className="rounded-[28px] border border-[#e8e8e8] bg-[#f7f8fa] p-8 md:p-12 lg:p-14">
          <div className="grid items-center gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="font-display text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.08] font-bold tracking-[-0.03em] text-[#111827]">
                85% of the Fortune 500 already runs work here
              </h2>
              <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-[#4b5563]">
                From two-person startups to 100,000-seat rollouts — with the
                governance, residency and audit controls security teams ask for
                on day one.
              </p>
              <ul className="mt-7 flex flex-wrap gap-2.5">
                {compliance.map((c) => (
                  <li
                    key={c}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#e8e8e8] bg-white px-3.5 py-2 text-[12.5px] font-semibold text-[#374151]"
                  >
                    <ShieldCheck className="size-3.5 text-[#078d3b]" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            <dl className="grid grid-cols-2 gap-6 lg:grid-cols-1">
              {[
                { v: "5M+", l: "teams" },
                { v: "3M+", l: "tasks automated by agents monthly" },
                { v: "99.9%", l: "uptime SLA" },
              ].map((s) => (
                <div key={s.l}>
                  <dt className="font-display text-[32px] leading-none font-bold tracking-[-0.04em] text-[#7612fa]">
                    {s.v}
                  </dt>
                  <dd className="mt-1.5 text-[13px] text-[#6b7280]">
                    {s.l}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
