import Link from "next/link";
import {
  ArrowRight,
  FolderKanban,
  MessageCircle,
  Users,
  CalendarDays,
  ReceiptText,
  Sparkles,
} from "lucide-react";

const references = [
  {
    icon: FolderKanban,
    title: "Projects and tasks",
    body: "Review how Hashboard organizes project ownership, assigned work, priorities, dates, and current status.",
    href: "/features/tasks",
  },
  {
    icon: MessageCircle,
    title: "Team communication",
    body: "Explore company and project channels, threaded replies, mentions, files, pins, bookmarks, and message search.",
    href: "/features/chat",
  },
  {
    icon: Users,
    title: "People operations",
    body: "See supported employee records, attendance, leave, salary context, and payroll workflows.",
    href: "/features/teams",
  },
  {
    icon: CalendarDays,
    title: "Meetings and calendars",
    body: "Understand booking, availability, Google Calendar connectivity, rescheduling, and cancellation workflows.",
    href: "/features/meetings",
  },
  {
    icon: ReceiptText,
    title: "Business records",
    body: "Review supported clients, leads, agreements, invoices, payments, expenses, and related context.",
    href: "/features/clients",
  },
  {
    icon: Sparkles,
    title: "Hash AI capabilities",
    body: "Learn how model choice, permitted workspace context, and supported actions work without autonomous-agent claims.",
    href: "/brain",
  },
];

export default function ResearchPage() {
  return (
    <main className="bg-white text-[#111827]">
      <section className="mx-auto max-w-6xl px-6 py-20 text-center md:py-28">
        <p className="text-xs font-bold tracking-[0.18em] text-[#7612fa] uppercase">
          Product reference
        </p>
        <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-extrabold tracking-[-0.04em] md:text-6xl">
          Explore how connected work comes together
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#6b7280]">
          Practical product references for teams exploring projects, communication,
          people operations, scheduling, business records, and Hash AI.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {references.map(({ icon: Icon, title, body, href }) => (
            <article key={title} className="rounded-3xl border border-[#e5e7eb] bg-[#fafafa] p-7">
              <span className="flex size-11 items-center justify-center rounded-2xl bg-[#efedfd] text-[#7612fa]">
                <Icon className="size-5" />
              </span>
              <h2 className="mt-5 text-xl font-bold">{title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#6b7280]">{body}</p>
              <Link href={href} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#7612fa]">
                Explore capability <ArrowRight className="size-4" />
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-[#111827] px-7 py-9 text-white md:flex md:items-center md:justify-between md:px-10">
          <div>
            <h2 className="text-2xl font-bold">Want to explore Hashboard with your team?</h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/70">
              Talk with us about your workflows and see how Hashboard can bring them into one connected workspace.
            </p>
          </div>
          <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#111827] md:mt-0">
            Contact Hashboard <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
