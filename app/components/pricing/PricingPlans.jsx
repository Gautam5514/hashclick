import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageSquareText, ShieldCheck } from "lucide-react";

const included = [
  "A company-scoped Hashboard workspace",
  "Access to the workflows enabled for your organization",
  "Role-aware permissions for supported records and actions",
  "Hash AI model options configured for your workspace",
  "Current usage limits and support terms confirmed before purchase",
];

export default function PricingPlans() {
  return (
    <main className="bg-white text-[#111827]">
      <section className="mx-auto max-w-6xl px-6 py-20 text-center md:py-28">
        <p className="text-xs font-bold tracking-[0.18em] text-[#7612fa] uppercase">Pricing</p>
        <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-extrabold tracking-[-0.045em] md:text-7xl">
          Get current pricing for the workflows your team needs
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#6b7280]">
          Choose the workflows your team needs and get a plan shaped around your
          workspace, people, and use of Hash AI. Contact us for current options and pricing.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link href="/demo" className="inline-flex items-center gap-2 rounded-xl bg-[#111827] px-6 py-3 font-bold text-white">
            Request pricing <ArrowRight className="size-4" />
          </Link>
          <Link href="/product" className="rounded-xl border border-[#d1d5db] px-6 py-3 font-bold">Explore product</Link>
        </div>
      </section>

      <section className="bg-[#f8f8fa] py-20">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-[#e5e7eb] bg-white p-8">
            <span className="flex size-11 items-center justify-center rounded-2xl bg-[#efedfd] text-[#7612fa]"><CheckCircle2 className="size-5" /></span>
            <h2 className="mt-5 text-2xl font-bold">Confirm what is included</h2>
            <ul className="mt-6 space-y-3">
              {included.map((item) => <li key={item} className="flex gap-3 text-sm leading-relaxed text-[#4b5563]"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#078d3b]" />{item}</li>)}
            </ul>
          </article>
          <article className="rounded-3xl bg-[#111827] p-8 text-white">
            <span className="flex size-11 items-center justify-center rounded-2xl bg-white/10"><ShieldCheck className="size-5" /></span>
            <h2 className="mt-5 text-2xl font-bold">Build the right plan with our team</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              We&apos;ll help you understand billing, included workflows, Hash AI usage,
              model availability, support, and the options that fit your organization.
            </p>
            <Link href="/contact" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#111827]">
              <MessageSquareText className="size-4" /> Contact the team
            </Link>
          </article>
        </div>
      </section>
    </main>
  );
}
