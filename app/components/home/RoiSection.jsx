import { TrendingUp, Banknote, Clock4, CalendarCheck, ShieldCheck } from "lucide-react";
import { Container, Section } from "../ui/Container";
import Button from "../ui/Button";

const stats = [
  {
    icon: TrendingUp,
    value: "384%",
    label: "ROI over three years",
    accent: "#7612fa",
  },
  {
    icon: Banknote,
    value: "$3.9M",
    label: "in revenue gains",
    accent: "#fa12e3",
  },
  {
    icon: Clock4,
    value: "92,400",
    label: "hours saved annually",
    accent: "#0091ff",
  },
  {
    icon: CalendarCheck,
    value: "<6 mo",
    label: "payback period",
    accent: "#078d3b",
  },
];

const compliance = ["SOC 2 Type II", "ISO 27001", "GDPR", "HIPAA"];

export function RoiSection() {
  return (
    <Section className="border-y border-line">
      <Container size="default">
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <h2 className="font-display text-[clamp(1.9rem,3.8vw,3rem)] leading-[1.05] font-extrabold tracking-[-0.035em] text-ink text-balance">
              The business case writes itself
            </h2>
            <p className="mt-5 text-[16.5px] leading-relaxed text-ink-secondary">
              An independent study of composite organizations found consolidating
              onto one work platform pays for itself in under two quarters.
            </p>
            <p className="mt-4 text-[13px] text-ink-tertiary">
              Source: Total Economic Impact™ study, 2026.
            </p>
            <Button href="/enterprise#roi" variant="outline" size="lg" className="mt-8">
              Read the full report
            </Button>
          </div>

          <dl className="grid gap-4 sm:grid-cols-2">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-card border border-line p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_-30px_rgba(0,0,0,0.3)]"
              >
                <span
                  className="flex size-10 items-center justify-center rounded-xl"
                  style={{ background: `${s.accent}14`, color: s.accent }}
                >
                  <s.icon className="size-5" />
                </span>
                <dt className="font-display mt-5 text-[clamp(2rem,3.4vw,2.75rem)] leading-none font-extrabold tracking-[-0.04em] text-ink">
                  {s.value}
                </dt>
                <dd className="mt-2 text-[14px] font-medium text-ink-secondary">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </Section>
  );
}

export function ScaleSection() {
  return (
    <Section className="py-20 md:py-24">
      <Container size="default">
        <div className="rounded-panel border border-line bg-bg-box px-7 py-12 md:px-14">
          <div className="grid items-center gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="font-display text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.08] font-extrabold tracking-[-0.03em] text-ink text-balance">
                85% of the Fortune 500 already runs work here
              </h2>
              <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-ink-secondary">
                From two-person startups to 100,000-seat rollouts — with the
                governance, residency and audit controls security teams ask for
                on day one.
              </p>
              <ul className="mt-7 flex flex-wrap gap-2.5">
                {compliance.map((c) => (
                  <li
                    key={c}
                    className="inline-flex items-center gap-1.5 rounded-full border border-line bg-bg-main px-3.5 py-2 text-[12.5px] font-semibold text-ink-secondary"
                  >
                    <ShieldCheck className="size-3.5 text-accent-green" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            <dl className="grid grid-cols-2 gap-6 lg:grid-cols-1">
              {[
                { v: "5M+", l: "teams" },
                { v: "3M+", l: "tasks automated by agents monthly" },
                { v: "99.9%", l: "uptime SLA" },
              ].map((s) => (
                <div key={s.l}>
                  <dt className="font-display text-[32px] leading-none font-extrabold tracking-[-0.04em] text-brand-gradient">
                    {s.v}
                  </dt>
                  <dd className="mt-1.5 text-[13px] text-ink-tertiary">
                    {s.l}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </Section>
  );
}
