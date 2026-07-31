import {
  Bot,
  Clock,
  BrainCircuit,
  Wrench,
  ArrowRight,
  CircleCheck,
} from "lucide-react";
import Link from "next/link";
import { Container } from "../ui/Container";
import Button from "../ui/Button";

const pillars = [
  {
    icon: Bot,
    title: "Delegate anything",
    body: "Hand off a task the way you would to a person — in a sentence.",
  },
  {
    icon: Clock,
    title: "Works 24/7",
    body: "No standups, no context switching, no waiting for Monday.",
  },
  {
    icon: BrainCircuit,
    title: "Infinite memory",
    body: "Remembers every decision, doc and preference across your org.",
  },
  {
    icon: Wrench,
    title: "500+ superpowers",
    body: "Reaches into your tools through native apps and MCP servers.",
  },
];

const agentFeed = [
  {
    agent: "Intake Agent",
    action: "Triaged 34 new requests and routed them to owners",
    time: "2m ago",
    color: "#7612fa",
  },
  {
    agent: "PM Agent",
    action: "Rebalanced the Q3 sprint after two people went out",
    time: "18m ago",
    color: "#fa12e3",
  },
  {
    agent: "Live Answers Agent",
    action: "Answered 12 status questions in #launch with citations",
    time: "1h ago",
    color: "#0091ff",
  },
  {
    agent: "Reporting Agent",
    action: "Posted the weekly exec summary to Leadership",
    time: "3h ago",
    color: "#fc6d2d",
  },
];

export default function SuperAgents() {
  return (
    <section
      id="agents"
      data-theme="dark"
      className="relative overflow-hidden bg-bg-main py-24 md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 h-[600px] w-[700px] translate-x-1/3 -translate-y-1/4 rounded-full opacity-30 blur-[130px]"
        style={{
          background:
            "radial-gradient(closest-side, #7612fa, #fa12e3 60%, transparent)",
        }}
      />

      <Container size="default" className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[12px] font-bold tracking-[0.06em] text-white uppercase backdrop-blur">
              <Bot className="size-3.5 text-accent-pink" />
              Super Agents
            </span>

            <h2 className="font-display mt-6 text-[clamp(2.25rem,4.6vw,3.5rem)] leading-[1.02] font-extrabold tracking-[-0.035em] text-ink text-balance">
              AI that actually{" "}
              <span className="text-brand-gradient">showed up to work</span>
            </h2>

            <p className="mt-5 max-w-lg text-[17px] leading-relaxed text-ink-secondary">
              Not a chatbot waiting to be asked. Agents that watch your
              workspace, take on the busywork across every team and every app,
              and report back when it&apos;s done.
            </p>

            <dl className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2">
              {pillars.map((p) => (
                <div key={p.title}>
                  <dt className="flex items-center gap-2.5 text-[15px] font-bold text-ink">
                    <span className="flex size-8 items-center justify-center rounded-lg bg-white/8 text-accent-purple ring-1 ring-white/10">
                      <p.icon className="size-4" />
                    </span>
                    {p.title}
                  </dt>
                  <dd className="mt-2 text-[14px] leading-relaxed text-ink-secondary">
                    {p.body}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button href="/ai#agents" size="lg">
                Meet the agents
              </Button>
              <Link
                href="/product#automations"
                className="inline-flex items-center gap-1.5 px-2 py-3 text-[14px] font-bold text-accent-blue hover:underline"
              >
                See what they automate
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>

          {/* Agent activity feed */}
          <div className="rounded-panel border border-white/12 bg-white/[0.04] p-4 backdrop-blur-xl sm:p-6">
            <div className="flex items-center justify-between px-1 pb-4">
              <span className="text-[13px] font-bold text-ink">
                Agent activity
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11.5px] font-semibold text-accent-green">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent-green opacity-60" />
                  <span className="relative inline-flex size-2 rounded-full bg-accent-green" />
                </span>
                Live
              </span>
            </div>

            <ul className="space-y-2.5">
              {agentFeed.map((item) => (
                <li
                  key={item.agent}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/30 p-4 transition-colors hover:border-white/20"
                >
                  <span
                    className="flex size-9 shrink-0 items-center justify-center rounded-xl text-white"
                    style={{ background: item.color }}
                  >
                    <Bot className="size-4.5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[13.5px] font-bold text-ink">
                        {item.agent}
                      </span>
                      <span className="text-[11px] text-ink-tertiary">
                        {item.time}
                      </span>
                    </div>
                    <p className="mt-1 text-[13px] leading-snug text-ink-secondary">
                      {item.action}
                    </p>
                  </div>
                  <CircleCheck className="mt-1 size-4 shrink-0 text-accent-green" />
                </li>
              ))}
            </ul>

            <div className="mt-4 flex items-center justify-between rounded-2xl bg-brand-gradient p-4">
              <div>
                <div className="font-display text-[26px] leading-none font-extrabold text-white">
                  3M+
                </div>
                <div className="mt-1 text-[12px] font-medium text-white/85">
                  tasks automated by agents this month
                </div>
              </div>
              <ArrowRight className="size-5 text-white" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
