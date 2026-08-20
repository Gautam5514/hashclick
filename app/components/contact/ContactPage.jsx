"use client";

import { useState } from "react";
import { Mail, MessageCircle, CalendarDays, Handshake, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { Container, Section } from "../ui/Container";
import { Eyebrow, Card } from "../ui/Bits";
import Button from "../ui/Button";

const CONTACT_CARDS = [
  {
    icon: MessageCircle,
    tone: "purple",
    title: "Talk to Sales",
    body: "Rolling Hashboard out to your whole agency? Let's scope seats, spaces, and pricing.",
    cta: "Email sales",
    href: "mailto:connect@triplehash.in?subject=Sales%20inquiry",
  },
  {
    icon: Mail,
    tone: "blue",
    title: "Get Support",
    body: "Already on Hashboard and stuck on something? We usually reply within one business day.",
    cta: "Email support",
    href: "mailto:connect@triplehash.in?subject=Support%20request",
  },
  {
    icon: CalendarDays,
    tone: "pink",
    title: "Book a Demo",
    body: "See projects, people, clients, scheduling, business workflows, and Hash AI using a scenario relevant to your team.",
    cta: "Get a demo",
    href: "/demo",
  },
  {
    icon: Handshake,
    tone: "orange",
    title: "Partnerships & Press",
    body: "Building an integration, writing about Hashboard, or exploring a partnership?",
    cta: "Email us",
    href: "mailto:connect@triplehash.in?subject=Partnership%20%2F%20Press",
  },
];

const TOPICS = ["Sales", "Support", "Partnerships", "Press", "Something else"];

function Field({ label, type = "text", placeholder, textarea = false, ...props }) {
  const shared =
    "w-full rounded-lg border border-line bg-bg-main px-3.5 py-2.5 text-[14px] text-ink outline-none transition-colors focus:border-accent-purple placeholder:text-ink-disabled";
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[13.5px] font-semibold text-ink-secondary">
        {label} <span className="text-accent-red">*</span>
      </label>
      {textarea ? (
        <textarea required rows={4} placeholder={placeholder} className={shared} {...props} />
      ) : (
        <input type={type} required placeholder={placeholder} className={shared} {...props} />
      )}
    </div>
  );
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-bg-main">
      {/* Hero */}
      <header className="border-b border-line py-16 text-center">
        <Container size="narrow">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="font-display mt-5 text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.05] font-extrabold tracking-[-0.04em] text-ink text-balance">
            Let&apos;s talk.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-[17px] leading-relaxed text-ink-secondary text-pretty">
            Questions about Hashboard, a workspace already running, or just want to say hi — pick whatever&apos;s
            fastest for you below.
          </p>
        </Container>
      </header>

      {/* Contact option cards */}
      <Section className="py-16 md:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CONTACT_CARDS.map(({ icon: Icon, tone, title, body, cta, href }) => {
              const tones = {
                purple: "bg-accent-purple-badge text-accent-purple",
                blue: "bg-accent-blue-badge text-accent-blue",
                pink: "bg-accent-pink-badge text-accent-pink",
                orange: "bg-accent-orange-badge text-accent-orange",
              };
              return (
                <Card key={title} className="flex flex-col">
                  <div className={`flex size-11 shrink-0 items-center justify-center rounded-xl ${tones[tone]}`}>
                    <Icon className="size-5.5" strokeWidth={2} />
                  </div>
                  <h3 className="mt-4 text-[16px] font-bold text-ink">{title}</h3>
                  <p className="mt-1.5 flex-1 text-[13.5px] leading-relaxed text-ink-tertiary">{body}</p>
                  <a
                    href={href}
                    className="mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-accent-purple hover:underline underline-offset-2"
                  >
                    {cta} <span aria-hidden="true">→</span>
                  </a>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Form + office info */}
      <Section className="border-t border-line py-16 md:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_400px]">
            {/* Form */}
            <div>
              <h2 className="font-display text-[clamp(1.6rem,2.6vw,2.1rem)] font-extrabold tracking-[-0.02em] text-ink">
                Send us a message
              </h2>
              <p className="mt-2 text-[14.5px] text-ink-tertiary">
                Fill this out and we&apos;ll route it to the right person on the team.
              </p>

              {submitted ? (
                <div className="mt-8 flex items-start gap-3 rounded-2xl border border-line bg-bg-box p-7">
                  <CheckCircle2 className="size-6 shrink-0 text-accent-green" strokeWidth={1.75} />
                  <div>
                    <h3 className="text-[16px] font-bold text-ink">Message sent</h3>
                    <p className="mt-1 text-[14px] text-ink-tertiary">
                      Thanks for reaching out — we&apos;ll get back to you at the email you provided, usually
                      within one business day.
                    </p>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="mt-8 flex flex-col gap-5"
                >
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field label="Full Name" placeholder="Jordan Lee" />
                    <Field label="Work Email" type="email" placeholder="you@company.com" />
                  </div>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field label="Company" placeholder="Your agency" />
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[13.5px] font-semibold text-ink-secondary">
                        Topic <span className="text-accent-red">*</span>
                      </label>
                      <select
                        required
                        defaultValue=""
                        className="w-full rounded-lg border border-line bg-bg-main px-3.5 py-2.5 text-[14px] text-ink outline-none transition-colors focus:border-accent-purple"
                      >
                        <option value="" disabled>
                          Select...
                        </option>
                        {TOPICS.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <Field label="Message" textarea placeholder="Tell us a bit about what you need." />

                  <Button as="button" type="submit" variant="gradient" size="lg" className="mt-1 sm:w-fit">
                    Send message
                  </Button>
                </form>
              )}
            </div>

            {/* Office info */}
            <div className="flex flex-col gap-6">
              <Card hover={false} className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <MapPin className="size-5 shrink-0 text-accent-purple" strokeWidth={1.75} />
                  <div>
                    <h3 className="text-[14.5px] font-bold text-ink">Office</h3>
                    <p className="mt-1 text-[13.5px] leading-relaxed text-ink-tertiary">
                      Triplehash Technologies
                      <br />
                      Ranchi, Jharkhand, India
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 border-t border-line pt-4">
                  <Mail className="size-5 shrink-0 text-accent-purple" strokeWidth={1.75} />
                  <div>
                    <h3 className="text-[14.5px] font-bold text-ink">Email</h3>
                    <a
                      href="mailto:connect@triplehash.in"
                      className="mt-1 block text-[13.5px] font-semibold text-accent-purple hover:underline underline-offset-2"
                    >
                      connect@triplehash.in
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3 border-t border-line pt-4">
                  <Clock className="size-5 shrink-0 text-accent-purple" strokeWidth={1.75} />
                  <div>
                    <h3 className="text-[14.5px] font-bold text-ink">Response time</h3>
                    <p className="mt-1 text-[13.5px] leading-relaxed text-ink-tertiary">
                      Monday–Friday, 9:00 AM–6:00 PM IST. We reply within one business day.
                    </p>
                  </div>
                </div>
              </Card>

              <p className="text-[13px] leading-relaxed text-ink-disabled">
                Looking for legal details instead? See our{" "}
                <a href="/privacy" className="text-ink-tertiary underline underline-offset-2 hover:text-ink">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="/terms" className="text-ink-tertiary underline underline-offset-2 hover:text-ink">
                  Terms of Service
                </a>
                .
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
