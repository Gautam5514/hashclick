import Link from "next/link";
import {
  ArrowRight,
  Building2,
  ShieldCheck,
  Users,
  Workflow,
  Sparkles,
  ClipboardCheck,
} from "lucide-react";
import { Container } from "../components/ui/Container";
import CtaBanner from "../components/shared/CtaBanner";
import "./enterprise.css";

export const metadata = {
  title: "Hashboard for larger organizations",
  description: "Company-scoped workflows, role-aware access, employee records, and Hash AI assistance with clearly stated boundaries.",
};

const capabilities = [
  {
    icon: Building2,
    title: "Company-scoped workspace",
    body: "Keep supported projects, people, clients, scheduling, communication, and business records associated with the active company.",
  },
  {
    icon: ShieldCheck,
    title: "Role-aware access",
    body: "Limit available records and actions according to the signed-in user, company membership, and supported role permissions.",
  },
  {
    icon: Users,
    title: "Employee operations",
    body: "Maintain employee profiles, onboarding status, salary history, attendance, leave, and payroll-related records.",
  },
  {
    icon: Workflow,
    title: "Connected workflows",
    body: "Coordinate projects, tasks, Chat, clients, leads, meetings, agreements, invoices, payments, and expenses.",
  },
  {
    icon: Sparkles,
    title: "Hash AI with boundaries",
    body: "Choose an available model and request supported questions or actions using workspace context permitted to your role.",
  },
  {
    icon: ClipboardCheck,
    title: "Enterprise planning",
    body: "Work with our team on security, privacy, deployment, support, and organizational requirements.",
  },
];

const verification = [
  "Required authentication and identity-provider support",
  "Audit, logging, retention, and export requirements",
  "Data location, backup, recovery, and availability commitments",
  "Regulatory or industry-specific compliance requirements",
  "Support hours, response targets, onboarding, and migration scope",
  "Final pricing, limits, model availability, and contract terms",
];

export default function EnterprisePage() {
  return (
    <main className="bg-white text-[#111827]">
      <section className="relative overflow-hidden py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <span className="text-xs font-bold tracking-[0.18em] text-[#7612fa] uppercase">Hashboard for organizations</span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-[-0.045em] md:text-7xl">
              Connected operations with clearly defined boundaries
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#6b7280]">
              Evaluate Hashboard for company-scoped work, employee operations,
              business records, communication, and permission-aware AI assistance
              in one connected workspace.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link href="/demo" className="inline-flex items-center gap-2 rounded-xl bg-[#111827] px-6 py-3 font-bold text-white">
                Discuss requirements <ArrowRight className="size-4" />
              </Link>
              <Link href="/product" className="rounded-xl border border-[#d1d5db] px-6 py-3 font-bold">Explore workflows</Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#f8f8fa] py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map(({ icon: Icon, title, body }) => (
              <article key={title} className="rounded-3xl border border-[#e5e7eb] bg-white p-7">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-[#efedfd] text-[#7612fa]"><Icon className="size-5" /></span>
                <h2 className="mt-5 text-xl font-bold">{title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-[#6b7280]">{body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <span className="text-xs font-bold tracking-[0.16em] text-[#7612fa] uppercase">Plan your rollout</span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.03em] md:text-5xl">Shape Hashboard around your organization</h2>
              <p className="mt-5 leading-relaxed text-[#6b7280]">Bring your requirements to our team and build a clear rollout plan for access, operations, support, and growth.</p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {verification.map((item) => (
                <li key={item} className="flex gap-3 rounded-2xl border border-[#e5e7eb] p-5 text-sm leading-relaxed">
                  <ShieldCheck className="mt-0.5 size-5 shrink-0 text-[#078d3b]" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <CtaBanner title="Bring your organization together in Hashboard" subtitle="Discuss supported workflows, permissions, deployment needs, and rollout planning with our team." primaryLabel="Contact sales" primaryHref="/demo" secondaryLabel="Explore product" secondaryHref="/product" />
    </main>
  );
}
