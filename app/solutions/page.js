import { Building2, Rocket, Palette, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container, Section } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/Bits";
import Button from "../components/ui/Button";
import SolutionCards from "../components/shared/SolutionCards";
// import Testimonials from "../components/shared/Testimonials";
import Faq from "../components/shared/Faq";
import CtaBanner from "../components/shared/CtaBanner";

export const metadata = {
  title: "Solutions",
  description:
    "Purpose-built setups for project management, marketing, engineering, IT, HR and leadership — plus agencies, startups and enterprises.",
};

const bySize = [
  {
    id: "startups",
    icon: Rocket,
    accent: "#7612fa",
    name: "Startups",
    body: "Start with projects, tasks, team communication, clients, meetings, and the operational workflows your company needs.",
    stats: [
      ["One", "company workspace"],
      ["Clear", "project ownership"],
    ],
  },
  {
    id: "agencies",
    icon: Palette,
    accent: "#fa12e3",
    name: "Agencies",
    body: "Keep clients connected to supported projects, meetings, agreements, invoices, leads, and internal delivery work.",
    stats: [
      ["Linked", "client records"],
      ["Current", "delivery context"],
    ],
  },
  {
    id: "enterprise-size",
    icon: Building2,
    accent: "#0091ff",
    name: "Enterprise",
    body: "Use company-scoped records, role-based permissions, employee management, and connected operational workflows.",
    stats: [
      ["Role", "aware access"],
      ["Company", "scoped data"],
    ],
  },
];

const faqs = [
  {
    q: "Do different teams have to work the same way?",
    a: "Teams can use the supported projects, tasks, Chat, people, clients, meetings, and operational workflows relevant to their responsibilities.",
  },
  {
    q: "Can we start with one team and expand later?",
    a: "Yes. A company can begin with a focused set of supported workflows and add more teams and records as its use grows.",
  },
  {
    q: "How does Hash AI support these solutions?",
    a: "Hash AI answers questions from available workspace context and helps people take supported actions across their everyday workflows.",
  },
  {
    q: "What can teams bring together in Hashboard?",
    a: "Hashboard connects project, communication, people, client, scheduling, and business workflows in one shared workspace.",
  },
];

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-14 pb-4 md:pt-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-56 left-1/2 h-[540px] w-[1000px] -translate-x-1/2 opacity-[0.13] blur-[110px]"
          style={{
            background:
              "radial-gradient(45% 50% at 35% 45%, #fc6d2d 0%, transparent 100%), radial-gradient(45% 50% at 65% 45%, #7612fa 0%, transparent 100%)",
          }}
        />
        <Container size="default" className="relative text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent-orange-badge px-3.5 py-1.5 text-[12px] font-bold tracking-[0.06em] text-accent-orange uppercase">
            Solutions
          </span>
          <h1 className="font-display mt-6 text-[clamp(2.5rem,5.6vw,4.25rem)] leading-[1.0] font-extrabold tracking-[-0.04em] text-ink text-balance">
            Built for your team,{" "}
            <span className="text-brand-gradient">not for &ldquo;users&rdquo;</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-ink-secondary">
            Use the same Hashboard workspace across teams, with supported
            workflows matched to each function&apos;s responsibilities.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/signup" size="xl">
              Get started. It&apos;s FREE
            </Button>
            <Button href="/demo" variant="outline" size="xl">
              Get a demo
            </Button>
          </div>
        </Container>
      </section>

      <SolutionCards
        eyebrow="By team"
        title="Pick the starting point closest to your work"
        subtitle="Each solution highlights the Hashboard workflows that are genuinely relevant to that team."
      />

      {/* By size */}
      <Section>
        <Container size="default">
          <SectionHeading
            eyebrow="By company size"
            title="A shared workspace for growing organizations"
          />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {bySize.map((s) => (
              <div
                key={s.id}
                id={s.id}
                className="flex scroll-mt-28 flex-col rounded-panel border border-line bg-bg-main p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_56px_-32px_rgba(0,0,0,0.32)]"
              >
                <span
                  className="flex size-12 items-center justify-center rounded-2xl"
                  style={{ background: `${s.accent}14`, color: s.accent }}
                >
                  <s.icon className="size-6" />
                </span>
                <h3 className="font-display mt-6 text-[21px] font-extrabold tracking-[-0.02em] text-ink">
                  {s.name}
                </h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-secondary">
                  {s.body}
                </p>
                <dl className="mt-7 grid grid-cols-2 gap-4 border-t border-line pt-6">
                  {s.stats.map(([v, l]) => (
                    <div key={l}>
                      <dt
                        className="font-display text-[24px] leading-none font-extrabold tracking-[-0.03em]"
                        style={{ color: s.accent }}
                      >
                        {v}
                      </dt>
                      <dd className="mt-1.5 text-[12.5px] text-ink-tertiary">
                        {l}
                      </dd>
                    </div>
                  ))}
                </dl>
                <Link
                  href={s.id === "enterprise-size" ? "/enterprise" : "/pricing"}
                  className="mt-6 inline-flex items-center gap-1.5 text-[13.5px] font-bold text-accent-blue hover:underline"
                >
                  Learn more
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* <Testimonials /> */}
      <Faq title="Solutions questions" items={faqs} />
      <CtaBanner />
    </>
  );
}
