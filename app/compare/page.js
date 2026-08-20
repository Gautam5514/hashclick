import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Compare Hashboard",
  description: "Evaluate Hashboard by the connected workflows, role-aware context, and Hash AI capabilities your team needs.",
};

const dimensions = [
  ["Connected work", "Projects, tasks, Chat, people, clients, meetings, and business records in one company workspace."],
  ["People operations", "Employee profiles, attendance, leave, salary context, onboarding status, and payroll workflows."],
  ["Client operations", "Leads, clients, meetings, agreements, invoices, payments, and delivery relationships."],
  ["Hash AI", "User-selected models, permitted workspace context, supported questions, and requested actions."],
  ["Access model", "Company, membership, and role boundaries applied across supported records and actions."],
  ["MCP", "Compatible AI clients can connect to supported Hashboard tools through MCP."],
];

export default function ComparePage() {
  return (
    <main className="bg-white px-6 py-20 text-[#111827] md:py-28">
      <div className="mx-auto max-w-6xl">
        <header className="text-center">
          <p className="text-xs font-bold tracking-[0.18em] text-[#7612fa] uppercase">Compare Hashboard</p>
          <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-extrabold tracking-[-0.045em] md:text-7xl">Compare the workflows that matter to your team</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#6b7280]">Start with your actual requirements and see where Hashboard can connect work that would otherwise live in separate systems.</p>
        </header>
        <section className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {dimensions.map(([title, body]) => <article key={title} className="rounded-3xl border border-[#e5e7eb] bg-[#fafafa] p-7"><CheckCircle2 className="size-6 text-[#078d3b]"/><h2 className="mt-5 text-xl font-bold">{title}</h2><p className="mt-3 text-sm leading-relaxed text-[#6b7280]">{body}</p></article>)}
        </section>
        <div className="mt-12 rounded-3xl bg-[#111827] p-8 text-white md:flex md:items-center md:justify-between md:p-10"><div><h2 className="text-2xl font-bold">Bring your current workflow</h2><p className="mt-2 text-sm text-white/70">We&apos;ll help you compare Hashboard against the way your organization works today.</p></div><Link href="/demo" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#111827] md:mt-0">Request a demo <ArrowRight className="size-4"/></Link></div>
      </div>
    </main>
  );
}
