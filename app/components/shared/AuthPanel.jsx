import Link from "next/link";
import { Check, Star } from "lucide-react";
import { Container } from "../ui/Container";
import Button from "../ui/Button";
import { LogoMark } from "../ui/Logo";
import { site } from "@/lib/site";

const proof = [
  "Free forever for unlimited members",
  "No credit card required",
  "Set up your first project in 10 minutes",
  "24/7 support on every plan",
];

/* Presentational only — wire these fields to your auth provider. */
export default function AuthPanel({ mode = "signup" }) {
  const isSignup = mode === "signup";

  return (
    <section className="relative overflow-hidden">
      <Container size="wide" className="py-14 md:py-20">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Form */}
          <div className="mx-auto w-full max-w-md">
            <LogoMark className="size-10" />
            <h1 className="font-display mt-6 text-[clamp(1.9rem,3.6vw,2.5rem)] leading-[1.06] font-extrabold tracking-[-0.035em] text-ink">
              {isSignup ? "Create your Workspace" : "Welcome back"}
            </h1>
            <p className="mt-3 text-[15px] text-ink-secondary">
              {isSignup
                ? "Free forever. No credit card required."
                : `Log in to your ${site.name} Workspace.`}
            </p>

            <div className="mt-8 grid gap-2.5 sm:grid-cols-2">
              {["Continue with Google", "Continue with Microsoft"].map((p) => (
                <button
                  key={p}
                  type="button"
                  className="flex h-11 items-center justify-center gap-2 rounded-xl border border-line-strong px-4 text-[13.5px] font-semibold text-ink transition-colors hover:bg-btn-secondary"
                >
                  {p.replace("Continue with ", "")}
                </button>
              ))}
            </div>

            <div className="my-6 flex items-center gap-3">
              <span className="h-px flex-1 bg-line" />
              <span className="text-[12px] font-medium text-ink-tertiary">
                or with email
              </span>
              <span className="h-px flex-1 bg-line" />
            </div>

            <form className="space-y-3.5">
              {isSignup ? (
                <label className="block">
                  <span className="mb-1.5 block text-[13px] font-semibold text-ink">
                    Full name
                  </span>
                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    placeholder="Alex Kim"
                    className="h-11 w-full rounded-xl border border-line-strong bg-bg-main px-4 text-[14px] text-ink outline-none placeholder:text-ink-disabled focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20"
                  />
                </label>
              ) : null}

              <label className="block">
                <span className="mb-1.5 block text-[13px] font-semibold text-ink">
                  Work email
                </span>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  className="h-11 w-full rounded-xl border border-line-strong bg-bg-main px-4 text-[14px] text-ink outline-none placeholder:text-ink-disabled focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20"
                />
              </label>

              <label className="block">
                <span className="mb-1.5 block text-[13px] font-semibold text-ink">
                  Password
                </span>
                <input
                  type="password"
                  name="password"
                  autoComplete={isSignup ? "new-password" : "current-password"}
                  placeholder="••••••••"
                  className="h-11 w-full rounded-xl border border-line-strong bg-bg-main px-4 text-[14px] text-ink outline-none placeholder:text-ink-disabled focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20"
                />
              </label>

              <Button as="button" type="submit" size="lg" className="w-full">
                {isSignup ? `Play with ${site.name}` : "Log in"}
              </Button>
            </form>

            <p className="mt-5 text-center text-[13px] text-ink-secondary">
              {isSignup ? (
                <>
                  Already have an account?{" "}
                  <Link href="/login" className="font-semibold text-accent-blue">
                    Log in
                  </Link>
                </>
              ) : (
                <>
                  New here?{" "}
                  <Link href="/signup" className="font-semibold text-accent-blue">
                    Sign up free
                  </Link>
                </>
              )}
            </p>
          </div>

          {/* Proof panel */}
          <div className="relative hidden overflow-hidden rounded-panel bg-brand-gradient p-10 text-white lg:block">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-white/20 blur-3xl"
            />
            <h2 className="font-display relative text-[30px] leading-[1.1] font-extrabold tracking-[-0.03em] text-balance">
              Join 5+ million teams who replaced their stack with one platform
            </h2>
            <ul className="relative mt-8 space-y-3.5">
              {proof.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-[15px]">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-white/25">
                    <Check className="size-3" strokeWidth={3} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
            <div className="relative mt-10 border-t border-white/25 pt-7">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-white text-white" />
                ))}
              </div>
              <p className="mt-4 text-[15px] leading-relaxed text-white/90">
                &ldquo;We cancelled four subscriptions in the first month and
                nobody missed them.&rdquo;
              </p>
              <p className="mt-3 text-[13px] font-semibold text-white/80">
                Alicia Moreno · VP Operations, Diggs
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
