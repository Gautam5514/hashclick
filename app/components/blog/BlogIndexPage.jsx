import Link from "next/link";
import { ArrowRight, FolderKanban, MessageCircle, Users, CalendarDays, ReceiptText, Sparkles } from "lucide-react";

const guides = [
  { icon: FolderKanban, title: "Organizing projects and tasks", body: "A product guide to supported project ownership, task assignment, priorities, dates, and status.", href: "/features/tasks" },
  { icon: MessageCircle, title: "Using company and project Chat", body: "Learn about channels, membership, threaded replies, mentions, files, pins, bookmarks, and search.", href: "/features/chat" },
  { icon: Users, title: "Managing employee operations", body: "Review supported profiles, attendance, leave, salary context, onboarding status, and payroll records.", href: "/features/teams" },
  { icon: CalendarDays, title: "Scheduling meetings", body: "Understand availability, bookings, attendees, Google Calendar connectivity, rescheduling, and cancellation.", href: "/features/meetings" },
  { icon: ReceiptText, title: "Connecting business records", body: "Explore clients, leads, agreements, invoices, payments, expenses, and their supported relationships.", href: "/features/clients" },
  { icon: Sparkles, title: "Using Hash AI responsibly", body: "See how model choice, permitted workspace context, and supported actions work without autonomous-agent claims.", href: "/brain" },
];

export default function BlogIndexPage() {
  return (
    <main className="bg-white text-[#111827]">
      <section className="mx-auto max-w-6xl px-6 py-20 text-center md:py-28">
        <p className="text-xs font-bold tracking-[0.18em] text-[#7612fa] uppercase">Hashboard guides</p>
        <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-extrabold tracking-[-0.045em] md:text-7xl">Practical guides grounded in the current product</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#6b7280]">Explore clear guides to the projects, communication, people, scheduling, business, and Hash AI workflows available in Hashboard.</p>
      </section>
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {guides.map(({ icon: Icon, title, body, href }) => (
            <article key={title} className="rounded-3xl border border-[#e5e7eb] bg-[#fafafa] p-7">
              <span className="flex size-11 items-center justify-center rounded-2xl bg-[#efedfd] text-[#7612fa]"><Icon className="size-5" /></span>
              <h2 className="mt-5 text-xl font-bold">{title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#6b7280]">{body}</p>
              <Link href={href} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#7612fa]">Read product guide <ArrowRight className="size-4" /></Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
