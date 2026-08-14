"use client";

import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import "./roi-section.css";

const roiMetrics = [
  {
    tag: "ESTIMATED TIME SAVED",
    value: "5+ hrs",
    description:
      "Potential time saved per employee each month by reducing status checks, manual updates, and information searching.",
  },
  {
    tag: "ANNUAL TEAM CAPACITY",
    value: "1,200 hrs",
    description:
      "Estimated annual time recovered for a 20-person team using Hashboard consistently.",
  },
  {
    tag: "ESTIMATED VALUE",
    value: "₹6L+",
    description:
      "Potential annual productivity value based on an assumed ₹500 hourly employment cost.",
  },
  {
    tag: "ESTIMATED PAYBACK",
    value: "Calculate yours",
    description:
      "Compare your estimated productivity value with your Hashboard subscription cost.",
  },
];

const compliance = ["Role-based access", "Workspace permissions", "Tenant isolation", "MCP OAuth"];

export function RoiSection() {
  return (
    <section className="roi-wrapper" data-testid="home-impact">
      <div className="roi-container">
        <div className="roi-title-row">
          <div className="roi-title-wrap">
            <div className="roi-title">
              <h2>See what your team could save with Hashboard</h2>
            </div>
            <div className="roi-subtext">
              <p>
                Estimate the impact of bringing everyday workflows and AI assistance
                into one connected workspace.
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
            *Illustrative estimates, not guaranteed results. Example assumes 20 employees,
            five hours saved per employee per month, and an average employment cost of ₹500
            per hour. Actual results depend on adoption, workflows, pricing, and usage.
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
                One connected workspace for growing teams
              </h2>
              <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-[#4b5563]">
                Bring projects, people, clients, operations, and AI assistance
                together with access controls designed around each workspace.
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
                { v: "10+", l: "business workflows brought together" },
                { v: "4+", l: "AI providers supported" },
                { v: "1", l: "connected workspace for your operations" },
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
