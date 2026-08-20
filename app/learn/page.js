import Link from "next/link";
import { ArrowRight, BookOpen, FolderKanban, MessageCircle, Users, CalendarDays, Sparkles } from "lucide-react";

export const metadata = { title: "Learn Hashboard", description: "Explore practical guides to the workflows available in Hashboard." };

const guides = [
  [FolderKanban, "Projects and tasks", "Organize ownership, priorities, dates, status, and project execution.", "/features/tasks"],
  [MessageCircle, "Chat", "Use company and project channels, threads, mentions, files, pins, and search.", "/features/chat"],
  [Users, "People operations", "Manage employee records, attendance, leave, onboarding, and payroll context.", "/features/teams"],
  [CalendarDays, "Meetings and scheduling", "Coordinate availability, bookings, attendees, calendar events, and changes.", "/features/meetings"],
  [BookOpen, "Business workflows", "Connect clients, leads, agreements, invoices, payments, and expenses.", "/product"],
  [Sparkles, "Hash AI", "Choose a model, ask about permitted context, and request supported actions.", "/brain"],
];

export default function LearnPage() {
  return <main className="bg-white px-6 py-20 text-[#111827] md:py-28"><div className="mx-auto max-w-6xl"><header className="text-center"><p className="text-xs font-bold tracking-[0.18em] text-[#7612fa] uppercase">Learn Hashboard</p><h1 className="mx-auto mt-5 max-w-4xl text-4xl font-extrabold tracking-[-0.045em] md:text-7xl">Get productive with the workflows you use</h1><p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#6b7280]">Explore practical product guides for planning work, coordinating teams, managing operations, and using Hash AI.</p></header><section className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{guides.map(([Icon,title,body,href])=><article key={title} className="rounded-3xl border border-[#e5e7eb] bg-[#fafafa] p-7"><span className="flex size-11 items-center justify-center rounded-2xl bg-[#efedfd] text-[#7612fa]"><Icon className="size-5"/></span><h2 className="mt-5 text-xl font-bold">{title}</h2><p className="mt-3 text-sm leading-relaxed text-[#6b7280]">{body}</p><Link href={href} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#7612fa]">Explore guide <ArrowRight className="size-4"/></Link></article>)}</section></div></main>;
}
