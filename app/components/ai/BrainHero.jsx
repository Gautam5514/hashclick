import {
  Sparkles,
  Apple,
  Monitor,
  Smartphone,
  Globe,
  Send,
  FileText,
  CheckSquare,
  BarChart3,
} from "lucide-react";
import { Container } from "../ui/Container";
import Button from "../ui/Button";

const highlights = [
  "Workspace-aware assistance",
  "Your model. Your choice.",
  "Supported actions with role-aware context",
];

const platforms = [
  { name: "macOS", icon: Apple },
  { name: "Windows", icon: Monitor },
  { name: "iOS", icon: Smartphone },
  { name: "Android", icon: Smartphone },
  { name: "Chrome", icon: Globe },
];

const conversation = [
  {
    role: "user",
    text: "What's blocking the Q3 launch, and who do I need to unblock?",
  },
  {
    role: "brain",
    text: "Three launch tasks are overdue. Billing migration is assigned to Marcus, the agreement review is pending, and the pricing copy remains in review.",
    sources: [
      { icon: CheckSquare, label: "12 tasks" },
      { icon: FileText, label: "3 projects" },
      { icon: BarChart3, label: "Current workload" },
    ],
  },
  {
    role: "user",
    text: "Create three follow-up tasks with owners and due dates.",
  },
  {
    role: "brain",
    text: "The three requested follow-up tasks were created. Review their owners and due dates in the launch project.",
    done: true,
  },
];

export default function BrainHero() {
  return (
    <section
      data-theme="dark"
      className="relative overflow-hidden bg-bg-main pt-16 pb-24 md:pt-24 md:pb-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[700px] w-[1200px] -translate-x-1/2 opacity-40 blur-[130px]"
        style={{
          background:
            "radial-gradient(40% 50% at 25% 40%, #40ddff 0%, transparent 100%), radial-gradient(40% 50% at 55% 45%, #7612fa 0%, transparent 100%), radial-gradient(40% 50% at 80% 40%, #fa12e3 0%, transparent 100%)",
        }}
      />

      <Container size="default" className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[12px] font-bold tracking-[0.06em] text-white uppercase backdrop-blur">
              <Sparkles className="size-3.5 text-accent-blue" />
              Hash AI is here
            </span>

            <h1 className="font-display mt-6 text-[clamp(2.5rem,5.4vw,4.25rem)] leading-[0.99] font-extrabold tracking-[-0.04em] text-ink text-balance">
              AI assistance, grounded in{" "}
              <em className="text-gradient-cool not-italic">your work</em>.
              <br />
              Ask questions and take supported action inside Hashboard.
            </h1>

            <ul className="mt-8 space-y-3">
              {highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-center gap-2.5 text-[16.5px] text-ink-secondary"
                >
                  <span className="size-1.5 rounded-full bg-brand-gradient" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/signup" size="xl">
                Try Hash AI
              </Button>
              <Button href="/demo" variant="outline" size="xl">
                Watch the demo
              </Button>
            </div>

            <ul className="mt-8 flex flex-wrap items-center gap-2">
              {platforms.map((p) => (
                <li
                  key={p.name}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/12 px-3 py-1.5 text-[12.5px] font-medium text-ink-secondary"
                >
                  <p.icon className="size-3.5" />
                  {p.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Live conversation panel */}
          <div className="rounded-panel border border-white/12 bg-white/[0.04] p-4 backdrop-blur-xl sm:p-5">
            <div className="flex items-center gap-2.5 border-b border-white/10 pb-4">
              <span className="flex size-8 items-center justify-center rounded-xl bg-brand-gradient">
                <Sparkles className="size-4 text-white" />
              </span>
              <div>
                <div className="text-[13.5px] font-bold text-ink">Hash AI</div>
                <div className="text-[11px] text-ink-tertiary">
                  Demo Workspace · role-aware access
                </div>
              </div>
            </div>

            <ul className="mt-4 space-y-3">
              {conversation.map((msg, i) => (
                <li
                  key={i}
                  className={
                    msg.role === "user" ? "flex justify-end" : "flex justify-start"
                  }
                >
                  <div
                    className={
                      msg.role === "user"
                        ? "max-w-[85%] rounded-2xl rounded-br-md bg-white/10 px-4 py-3 text-[13.5px] leading-relaxed text-ink"
                        : "max-w-[92%] rounded-2xl rounded-bl-md border border-white/10 bg-black/40 px-4 py-3 text-[13.5px] leading-relaxed text-ink-secondary"
                    }
                  >
                    {msg.text}
                    {msg.sources ? (
                      <span className="mt-3 flex flex-wrap gap-1.5">
                        {msg.sources.map((s) => (
                          <span
                            key={s.label}
                            className="inline-flex items-center gap-1 rounded-md bg-white/8 px-2 py-1 text-[10.5px] font-semibold text-ink-tertiary"
                          >
                            <s.icon className="size-3" />
                            {s.label}
                          </span>
                        ))}
                      </span>
                    ) : null}
                    {msg.done ? (
                      <span className="mt-2.5 flex items-center gap-1.5 text-[11px] font-bold text-accent-green">
                        <CheckSquare className="size-3" />
                        3 requested tasks created · ready for review
                      </span>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex items-center gap-2 rounded-xl border border-white/10 bg-black/40 px-4 py-3">
              <span className="flex-1 text-[13px] text-ink-tertiary">
                Ask anything about your work…
              </span>
              <span className="flex size-7 items-center justify-center rounded-lg bg-brand-gradient">
                <Send className="size-3.5 text-white" />
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
