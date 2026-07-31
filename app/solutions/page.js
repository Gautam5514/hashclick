import { Building2, Rocket, Palette, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container, Section } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/Bits";
import Button from "../components/ui/Button";
import SolutionCards from "../components/shared/SolutionCards";
import LogoCloud from "../components/shared/LogoCloud";
import Testimonials from "../components/shared/Testimonials";
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
    body: "One platform from day one, so you're not migrating off four tools at Series B. Free forever for unlimited members.",
    stats: [
      ["$0", "to start"],
      ["10 min", "to first project"],
    ],
  },
  {
    id: "agencies",
    icon: Palette,
    accent: "#fa12e3",
    name: "Agencies",
    body: "Client-facing views, guest access, billable time and profitability reporting — without buying a separate PSA tool.",
    stats: [
      ["Free", "client guests"],
      ["2x", "client capacity"],
    ],
  },
  {
    id: "enterprise-size",
    icon: Building2,
    accent: "#0091ff",
    name: "Enterprise",
    body: "SAML SSO, SCIM, audit logs, data residency and a named success team for 100,000-seat deployments.",
    stats: [
      ["85%", "of the Fortune 500"],
      ["99.9%", "uptime SLA"],
    ],
  },
];

const faqs = [
  {
    q: "Do different teams have to work the same way?",
    a: "No — that's the point. Each space defines its own statuses, fields, views and automations, while leadership still gets one roll-up across all of them.",
  },
  {
    q: "Can we start with one team and expand later?",
    a: "Yes, and most customers do. Start with the team that hurts most, prove it, then add spaces. Nothing needs to be rebuilt when you expand.",
  },
  {
    q: "Are the agents specific to each solution?",
    a: "Each solution ships with agents tuned to that workflow — intake and triage for IT, brief and creative review for marketing, sprint and release for engineering. You can edit them or write your own in plain English.",
  },
  {
    q: "What does it replace?",
    a: "Typically a project tool, a docs tool, a whiteboard tool, a chat tool and a reporting tool — plus whichever spreadsheet has become load-bearing.",
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
            The same platform, pre-configured for the way each function actually
            works — with the agents, views and templates already in place.
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
        subtitle="Every solution is a full workspace setup — hierarchy, views, custom fields, automations and agents — not a marketing page."
      />

      {/* By size */}
      <Section>
        <Container size="default">
          <SectionHeading
            eyebrow="By company size"
            title="From two people to two hundred thousand"
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

      <LogoCloud headline="Every function, in one workspace" />
      <Testimonials />
      <Faq title="Solutions questions" items={faqs} />
      <CtaBanner />
    </>
  );
}
