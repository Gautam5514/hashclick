import Link from "next/link";
import { ArrowLeft, ShieldAlert } from "lucide-react";

export default function ResearchPaperDetail() {
  return (
    <main className="min-h-[70vh] bg-white px-6 py-24 text-[#111827]">
      <div className="mx-auto max-w-3xl rounded-3xl border border-[#e5e7eb] bg-[#fafafa] p-8 text-center md:p-12">
        <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-[#fff1f2] text-[#e11d48]">
          <ShieldAlert className="size-7" />
        </span>
        <p className="mt-6 text-xs font-bold tracking-[0.16em] text-[#7612fa] uppercase">
          Hashboard product reference
        </p>
        <h1 className="mt-4 text-3xl font-extrabold tracking-[-0.03em] md:text-5xl">
          Explore the latest Hashboard guides
        </h1>
        <p className="mx-auto mt-5 max-w-xl leading-relaxed text-[#6b7280]">
          This older article is no longer part of the current guide library.
          Visit our product references for up-to-date information about supported workflows.
        </p>
        <Link
          href="/research"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#111827] px-5 py-3 text-sm font-bold text-white"
        >
          <ArrowLeft className="size-4" /> Return to product references
        </Link>
      </div>
    </main>
  );
}
