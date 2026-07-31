import { Star, Award } from "lucide-react";
import { Container, Section } from "../ui/Container";
import { SectionHeading } from "../ui/Bits";

const quotes = [
  {
    quote:
      "We replaced four tools with one platform. Our team ships 35% more projects a quarter and nobody asks 'where does this live?' anymore.",
    name: "Alicia Moreno",
    role: "VP Operations",
    company: "Diggs",
    color: "#7612fa",
    metric: "35%",
    metricLabel: "more projects shipped",
  },
  {
    quote:
      "Rolling this out to 6,000 people took a week. The governance controls were the reason security signed off on day one.",
    name: "Daniel Okafor",
    role: "Head of IT",
    company: "Finastra",
    color: "#0091ff",
    metric: "6,000",
    metricLabel: "employees onboarded",
  },
  {
    quote:
      "The agents handle intake, assignment and status updates. That is roughly two full-time roles we redeployed to client work.",
    name: "Priya Raghavan",
    role: "Managing Director",
    company: "Hawke Media",
    color: "#fa12e3",
    metric: "2x",
    metricLabel: "client capacity",
  },
];

const awards = [
  "Best Software 2026",
  "Momentum Leader",
  "Best Est. ROI",
  "Easiest Setup",
  "Users Love Us",
  "High Performer",
];

export default function Testimonials() {
  return (
    <Section className="bg-bg-box">
      <Container size="default">
        <SectionHeading
          eyebrow="Social proof"
          title="Loved by 5+ million teams"
          subtitle="Rated 4.7 out of 5 on G2 by more than 10,000 reviewers — and winner of 100+ software awards."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {quotes.map((q) => (
            <figure
              key={q.name}
              className="flex flex-col rounded-card border border-line bg-bg-main p-7 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_20px_50px_-30px_rgba(0,0,0,0.35)]"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 fill-brand-gold text-brand-gold"
                  />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-ink">
                &ldquo;{q.quote}&rdquo;
              </blockquote>

              <div className="mt-6 border-t border-line pt-5">
                <div
                  className="font-display text-[28px] leading-none font-extrabold tracking-[-0.03em]"
                  style={{ color: q.color }}
                >
                  {q.metric}
                </div>
                <div className="mt-1 text-[12.5px] text-ink-tertiary">
                  {q.metricLabel}
                </div>
              </div>

              <figcaption className="mt-5 flex items-center gap-3">
                <span
                  className="flex size-10 shrink-0 items-center justify-center rounded-full text-[12px] font-bold text-white"
                  style={{ background: q.color }}
                >
                  {q.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
                <span>
                  <span className="block text-[14px] font-semibold text-ink">
                    {q.name}
                  </span>
                  <span className="block text-[12.5px] text-ink-tertiary">
                    {q.role}, {q.company}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Award badges */}
        <ul className="mt-12 flex flex-wrap items-center justify-center gap-2.5">
          {awards.map((a) => (
            <li
              key={a}
              className="inline-flex items-center gap-1.5 rounded-full border border-line bg-bg-main px-3.5 py-2 text-[12.5px] font-semibold text-ink-secondary"
            >
              <Award className="size-3.5 text-brand-gold" />
              {a}
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
