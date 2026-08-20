import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

export default function SupportedTeamPage({ eyebrow, title, description, workflows, aiExamples }) {
  return (
    <main className="bg-white text-[#111827]">
      <section className="mx-auto max-w-6xl px-6 py-20 text-center md:py-28">
        <p className="text-xs font-bold tracking-[0.18em] text-[#7612fa] uppercase">{eyebrow}</p>
        <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-extrabold tracking-[-0.045em] md:text-7xl">{title}</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#6b7280]">{description}</p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link href="/signup" className="inline-flex items-center gap-2 rounded-xl bg-[#111827] px-6 py-3 font-bold text-white">Get started <ArrowRight className="size-4" /></Link>
          <Link href="/demo" className="rounded-xl border border-[#d1d5db] px-6 py-3 font-bold">Request a demo</Link>
        </div>
      </section>

      <section className="bg-[#f8f8fa] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="text-xs font-bold tracking-[0.16em] text-[#7612fa] uppercase">Supported workflows</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.03em] md:text-5xl">Build the team around real Hashboard capabilities</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {workflows.map(({ icon: Icon, title: itemTitle, body, href }) => (
              <article key={itemTitle} className="rounded-3xl border border-[#e5e7eb] bg-white p-7">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-[#efedfd] text-[#7612fa]"><Icon className="size-5" /></span>
                <h3 className="mt-5 text-xl font-bold">{itemTitle}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#6b7280]">{body}</p>
                <Link href={href} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#7612fa]">Explore <ArrowRight className="size-4" /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="flex size-12 items-center justify-center rounded-2xl bg-[#efedfd] text-[#7612fa]"><Sparkles className="size-6" /></span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-[-0.03em] md:text-5xl">Hash AI assists when you ask</h2>
          <p className="mt-5 leading-relaxed text-[#6b7280]">Choose an available model, ask about permitted workspace context, and request supported actions through conversation.</p>
        </div>
        <ul className="space-y-3">
          {aiExamples.map((example) => <li key={example} className="flex gap-3 rounded-2xl border border-[#e5e7eb] p-5 text-sm"><CheckCircle2 className="size-5 shrink-0 text-[#078d3b]" />{example}</li>)}
        </ul>
      </section>
    </main>
  );
}
