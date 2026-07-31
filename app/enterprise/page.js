import {
  ShieldCheck,
  KeyRound,
  ScrollText,
  Globe2,
  Users2,
  Headphones,
  GitBranch,
  Building2,
  Lock,
  FileCheck2,
  TrendingUp,
  Banknote,
  Clock4,
  CalendarCheck,
  ArrowRight,
} from "lucide-react";
import { Container, Section } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/Bits";
import Button from "../components/ui/Button";
import LogoCloud from "../components/shared/LogoCloud";
import Testimonials from "../components/shared/Testimonials";
import Faq from "../components/shared/Faq";
import CtaBanner from "../components/shared/CtaBanner";

export const metadata = {
  title: "Enterprise",
  description:
    "Enterprise-grade security, governance and support for organizations consolidating onto one work platform.",
};

const heroStats = [
  { v: "85%", l: "of the Fortune 500" },
  { v: "99.9%", l: "uptime SLA" },
  { v: "100k+", l: "seat deployments" },
  { v: "<6 mo", l: "average payback" },
];

const governance = [
  {
    icon: KeyRound,
    accent: "#7612fa",
    title: "Identity & access",
    body: "SAML SSO, SCIM provisioning, unlimited custom roles and granular space-level permissions.",
    items: ["SAML 2.0 SSO", "SCIM 2.0 provisioning", "Unlimited custom roles", "Just-in-time access"],
  },
  {
    icon: ScrollText,
    accent: "#0091ff",
    title: "Audit & compliance",
    body: "Full audit logging, legal holds and exportable evidence for your next certification cycle.",
    items: ["Immutable audit log", "Legal hold & eDiscovery", "SOC 2 Type II report", "HIPAA BAA available"],
  },
  {
    icon: Globe2,
    accent: "#fa12e3",
    title: "Data residency",
    body: "Choose where your data lives, with regional hosting in the US, EU, UK, Australia and India.",
    items: ["Regional data residency", "Customer-managed keys", "Zero-retention AI routing", "Encryption in transit and at rest"],
  },
  {
    icon: Users2,
    accent: "#fc6d2d",
    title: "Administration at scale",
    body: "Manage thousands of spaces, guests and workflows without a full-time admin team.",
    items: ["Multi-workspace management", "Bulk policy enforcement", "Usage and adoption analytics", "Sandbox environments"],
  },
];

const rollout = [
  {
    step: "01",
    title: "Discovery & design",
    body: "A solutions architect maps your current tool sprawl and designs the target hierarchy before anyone logs in.",
  },
  {
    step: "02",
    title: "Migration",
    body: "Automated importers for Jira, Asana, Monday, Smartsheet, Wrike, Trello and Notion — with history and attachments intact.",
  },
  {
    step: "03",
    title: "Enablement",
    body: "Live training for admins and end users, plus a certification track so your power users can run it themselves.",
  },
  {
    step: "04",
    title: "Ongoing success",
    body: "A named customer success manager, quarterly business reviews and priority support with contractual response times.",
  },
];

const roi = [
  { icon: TrendingUp, v: "384%", l: "ROI over three years", accent: "#7612fa" },
  { icon: Banknote, v: "$3.9M", l: "in revenue gains", accent: "#fa12e3" },
  { icon: Clock4, v: "92,400", l: "hours saved annually", accent: "#0091ff" },
  { icon: CalendarCheck, v: "<6 mo", l: "payback period", accent: "#078d3b" },
];

const certifications = [
  { icon: ShieldCheck, name: "SOC 2 Type II" },
  { icon: FileCheck2, name: "ISO 27001" },
  { icon: Lock, name: "GDPR" },
  { icon: Building2, name: "HIPAA" },
  { icon: GitBranch, name: "ISO 27701" },
  { icon: Headphones, name: "24/7 priority support" },
];

const faqs = [
  {
    q: "How long does an enterprise rollout take?",
    a: "Most organizations are live in one department within two weeks and fully migrated within a quarter. The gating factor is usually change management, not the platform — which is why a solutions architect works the plan with you from day one.",
  },
  {
    q: "Can we keep our data in a specific region?",
    a: "Yes. Enterprise customers choose regional hosting in the US, EU, UK, Australia or India, and data stays in that region including AI processing.",
  },
  {
    q: "Do you support customer-managed encryption keys?",
    a: "Yes, on the Enterprise plan. You control key rotation and revocation, and revoking a key renders the data unreadable to us.",
  },
  {
    q: "What does support look like at this tier?",
    a: "A named customer success manager, a dedicated support queue with contractual response times, quarterly business reviews and a direct escalation path to engineering for Sev-1 issues.",
  },
  {
    q: "How is AI handled under our security policy?",
    a: "AI runs under the same permission model as the rest of the workspace — it can only see what the requesting user can see. We hold zero-retention agreements with every model provider and your data never trains anyone's model.",
  },
  {
    q: "Can we run a proof of concept first?",
    a: "Yes. We'll scope a 30-day pilot with a defined success metric, a migrated dataset and hands-on enablement, at no cost.",
  },
];

export default function EnterprisePage() {
  return (
    <>
      {/* Hero */}
      <section
        data-theme="dark"
        className="relative overflow-hidden bg-bg-main pt-16 pb-20 md:pt-24 md:pb-28"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-48 left-1/2 h-[620px] w-[1100px] -translate-x-1/2 opacity-35 blur-[130px]"
          style={{
            background:
              "radial-gradient(45% 50% at 30% 45%, #101f52 0%, transparent 100%), radial-gradient(45% 50% at 60% 40%, #7612fa 0%, transparent 100%), radial-gradient(40% 45% at 80% 55%, #0091ff 0%, transparent 100%)",
          }}
        />
        <Container size="default" className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[12px] font-bold tracking-[0.06em] text-white uppercase backdrop-blur">
              <Building2 className="size-3.5 text-accent-blue" />
              Enterprise
            </span>
            <h1 className="font-display mt-6 text-[clamp(2.5rem,5.6vw,4.25rem)] leading-[1.0] font-extrabold tracking-[-0.04em] text-ink text-balance">
              Consolidate the stack.{" "}
              <span className="text-brand-gradient">Keep the controls.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-ink-secondary">
              Replace six vendors with one platform — and give security,
              compliance and finance the governance they were never going to
              approve without.
            </p>
            <div
              id="contact"
              className="mt-9 flex scroll-mt-28 flex-col items-center justify-center gap-3 sm:flex-row"
            >
              <Button href="/demo" size="xl">
                Talk to sales
              </Button>
              <Button href="/signup" variant="outline" size="xl">
                Start a free pilot
              </Button>
            </div>
          </div>

          <dl className="mt-16 grid grid-cols-2 gap-8 border-t border-white/10 pt-10 lg:grid-cols-4">
            {heroStats.map((s) => (
              <div key={s.l} className="text-center">
                <dt className="font-display text-[clamp(2rem,3.6vw,2.75rem)] leading-none font-extrabold tracking-[-0.04em] text-brand-gradient">
                  {s.v}
                </dt>
                <dd className="mt-2 text-[13px] text-ink-tertiary">{s.l}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <LogoCloud headline="Trusted where the security review is the hard part" />

      {/* Governance */}
      <Section id="security">
        <Container size="default">
          <SectionHeading
            eyebrow="Security & governance"
            title="Everything your security team asks for, already answered"
            subtitle="We publish the controls, the reports and the sub-processor list up front — so the questionnaire takes days, not quarters."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {governance.map((g) => (
              <div
                key={g.title}
                className="rounded-panel border border-line bg-bg-main p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_54px_-34px_rgba(0,0,0,0.32)]"
              >
                <span
                  className="flex size-12 items-center justify-center rounded-2xl"
                  style={{ background: `${g.accent}14`, color: g.accent }}
                >
                  <g.icon className="size-6" />
                </span>
                <h3 className="font-display mt-6 text-[21px] font-extrabold tracking-[-0.02em] text-ink">
                  {g.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-secondary">
                  {g.body}
                </p>
                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {g.items.map((i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-[13.5px] leading-snug text-ink-secondary"
                    >
                      <span
                        className="mt-1.5 size-1.5 shrink-0 rounded-full"
                        style={{ background: g.accent }}
                      />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <ul className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
            {certifications.map((c) => (
              <li
                key={c.name}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-bg-box px-4 py-2.5 text-[13px] font-semibold text-ink-secondary"
              >
                <c.icon className="size-4 text-accent-green" />
                {c.name}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* ROI */}
      <section
        id="roi"
        data-theme="dark"
        className="scroll-mt-28 bg-bg-main py-20 md:py-28"
      >
        <Container size="default">
          <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <h2 className="font-display text-[clamp(1.9rem,3.8vw,2.75rem)] leading-[1.06] font-extrabold tracking-[-0.03em] text-ink text-balance">
                The consolidation case, in numbers
              </h2>
              <p className="mt-5 text-[16.5px] leading-relaxed text-ink-secondary">
                A composite organization built from interviews with enterprise
                customers saw payback in under two quarters — mostly from
                retiring redundant licenses and cutting status meetings.
              </p>
              <p className="mt-4 text-[13px] text-ink-tertiary">
                Source: Total Economic Impact™ study, 2026.
              </p>
              <a
                href="/demo"
                className="mt-8 inline-flex items-center gap-1.5 text-[14px] font-bold text-accent-blue hover:underline"
              >
                Request the full report
                <ArrowRight className="size-4" />
              </a>
            </div>

            <dl className="grid gap-4 sm:grid-cols-2">
              {roi.map((r) => (
                <div
                  key={r.l}
                  className="rounded-panel border border-white/12 bg-white/[0.035] p-7"
                >
                  <span
                    className="flex size-10 items-center justify-center rounded-xl"
                    style={{ background: `${r.accent}22`, color: r.accent }}
                  >
                    <r.icon className="size-5" />
                  </span>
                  <dt className="font-display mt-5 text-[clamp(2rem,3.4vw,2.75rem)] leading-none font-extrabold tracking-[-0.04em] text-ink">
                    {r.v}
                  </dt>
                  <dd className="mt-2 text-[14px] font-medium text-ink-secondary">
                    {r.l}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      {/* Rollout */}
      <Section className="bg-bg-box">
        <Container size="default">
          <SectionHeading
            eyebrow="Rollout"
            title="You don't do the migration alone"
            subtitle="A named team runs the plan with you, from the first discovery call through your first quarterly review."
          />
          <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {rollout.map((r) => (
              <li
                key={r.step}
                className="relative rounded-panel border border-line bg-bg-main p-7"
              >
                <span className="font-display text-[40px] leading-none font-extrabold tracking-[-0.05em] text-brand-gradient">
                  {r.step}
                </span>
                <h3 className="font-display mt-4 text-[18px] font-extrabold tracking-[-0.02em] text-ink">
                  {r.title}
                </h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-ink-secondary">
                  {r.body}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Testimonials />
      <Faq title="Enterprise questions" items={faqs} />
      <CtaBanner
        title="Bring the whole organization onto one platform"
        subtitle="Tell us what you're running today and we'll map the consolidation — including what it costs and what it replaces."
        primary={{ label: "Talk to sales", href: "/demo" }}
        secondary={{ label: "Start a free pilot", href: "/signup" }}
        showMockup={false}
      />
    </>
  );
}
