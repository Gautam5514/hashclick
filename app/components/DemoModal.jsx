"use client";

import { useEffect } from "react";
import { X, Check } from "lucide-react";
const demoWorkflows = ["Projects", "Tasks", "Chat", "People", "Clients", "Hash AI"];

const benefits = [
  "See the Hashboard workflows most relevant to your team.",
  "Explore projects, people, clients, operations, and Hash AI.",
  "Discuss your goals and uncover how Hashboard can help.",
];

const employeeOptions = ["1 - 10", "11 - 50", "51 - 200", "201 - 1,000", "1,000+"];

function Field({ label, type = "text" }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[13.5px] font-semibold text-[#374151]">
        {label} <span className="text-[#ef4444]">*</span>
      </label>
      <input
        type={type}
        required
        className="w-full rounded-lg border border-[#e2e5ea] bg-white px-3.5 py-2.5 text-[14px] text-[#202020] outline-none transition-colors focus:border-[#0091ff]"
      />
    </div>
  );
}

export default function DemoModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[10050] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-3xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Faded rainbow stripe bleeding in from behind the top edge */}
        <div className="pointer-events-none absolute -top-16 left-1/2 h-28 w-[120%] -translate-x-1/2 bg-[linear-gradient(90deg,#f9a8d4,#c4b5fd,#fdba74,#7dd3fc)] blur-2xl opacity-90" />

        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-20 flex size-9 items-center justify-center rounded-full bg-black/5 text-[#4b5563] backdrop-blur-md transition-colors hover:bg-black/10 hover:text-[#111827]"
        >
          <X className="size-5" />
        </button>

        <div className="relative grid grid-cols-1 md:grid-cols-2 max-h-[90vh] overflow-y-auto">
          {/* LEFT: Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-5 bg-[#f7f8fa] px-6 py-8 sm:px-10 sm:py-10"
          >
            <Field label="Work Email" type="email" />
            <Field label="First Name" />
            <Field label="Last Name" />
            <Field label="Phone" type="tel" />
            <Field label="Company" />

            <div className="flex flex-col gap-1.5">
              <label className="text-[13.5px] font-semibold text-[#374151]">
                Number of Employees <span className="text-[#ef4444]">*</span>
              </label>
              <select
                required
                defaultValue=""
                className="w-full rounded-lg border border-[#e2e5ea] bg-white px-3.5 py-2.5 text-[14px] text-[#202020] outline-none transition-colors focus:border-[#0091ff]"
              >
                <option value="" disabled>
                  Select...
                </option>
                {employeeOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="mt-2 w-full rounded-xl bg-[#202020] py-3.5 text-[15px] font-bold text-white transition-colors hover:bg-black"
            >
              Submit
            </button>
          </form>

          {/* RIGHT: Marketing copy */}
          <div className="flex flex-col justify-center px-6 py-8 sm:px-10 sm:py-10">
            <h2 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] font-bold leading-[1.05] tracking-[-0.02em] text-[#202020]">
              Get a tailored demo
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[#4b5563]">
              See how Hashboard can connect your team&apos;s work and everyday business operations.
            </p>

            <ul className="mt-6 space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-[14.5px] leading-snug text-[#374151]">
                  <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center text-[#202020]">
                    <Check className="size-4 stroke-[3]" />
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9 text-[11px] font-mono font-bold tracking-[0.2em] text-[#8e8e8e] uppercase">
              Explore connected workflows
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-x-7 gap-y-4">
              {demoWorkflows.map((workflow) => (
                <div key={workflow} className="rounded-full border border-[#e5e7eb] bg-[#fafafa] px-3 py-1.5 text-[12px] font-bold text-[#4b5563]">
                  {workflow}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
