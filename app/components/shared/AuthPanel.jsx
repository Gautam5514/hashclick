"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Globe, Cloud } from "lucide-react";
import { LogoMark } from "../ui/Logo";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

function GoogleIcon({ className = "size-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="#4285F4" d="M23.52 12.27c0-.85-.08-1.67-.22-2.45H12v4.63h6.47a5.53 5.53 0 0 1-2.4 3.63v3h3.88c2.27-2.09 3.57-5.17 3.57-8.81Z" />
      <path fill="#34A853" d="M12 24c3.24 0 5.96-1.07 7.95-2.92l-3.88-3c-1.08.73-2.46 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.26v3.11A12 12 0 0 0 12 24Z" />
      <path fill="#FBBC05" d="M5.27 14.28A7.2 7.2 0 0 1 4.89 12c0-.79.14-1.56.38-2.28V6.61H1.26A12 12 0 0 0 0 12c0 1.94.47 3.77 1.26 5.39l4.01-3.11Z" />
      <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.44-3.44C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.69 1.26 6.61l4.01 3.11C6.22 6.86 8.87 4.75 12 4.75Z" />
    </svg>
  );
}

/* Presentational only — wire these fields to your auth provider. */
export default function AuthPanel({ mode = "signup" }) {
  const isSignup = mode === "signup";

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const nameMissing = isSignup && submitted && fullName.trim() === "";
  const canSubmit = isSignup
    ? fullName.trim() !== "" && email.trim() !== "" && password.trim() !== ""
    : email.trim() !== "" && password.trim() !== "";

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-white">
      {/* Soft pastel aurora fading down from the top edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px]"
        style={{
          background:
            "linear-gradient(115deg, #ffd9a0 0%, #ffc2e0 24%, #d9c6fb 48%, #c3d9fb 72%, #bfe3ff 100%)",
          maskImage: "linear-gradient(to bottom, black, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
        }}
      />

      <div className="relative mx-auto flex w-full max-w-[520px] flex-1 flex-col items-center px-6 pt-20 pb-10">
        <Link href="/" aria-label={`${site.name} home`}>
          <LogoMark className="size-11" />
        </Link>

        <h1 className="font-display mt-5 text-center text-[22px] font-extrabold tracking-[-0.02em] text-ink">
          {isSignup ? "Seconds to sign up!" : "Welcome back!"}
        </h1>
        <p className="mt-1.5 text-[13px] text-ink-secondary">
          {isSignup ? (
            <>
              Already have an account?{" "}
              <Link href="/login" className="font-medium text-accent-blue hover:underline">
                Sign in
              </Link>
            </>
          ) : (
            <>
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="font-medium text-accent-blue hover:underline">
                Sign up
              </Link>
            </>
          )}
        </p>

        <div className="mt-8 w-full max-w-[420px]">
          <button
            type="button"
            className="flex w-full items-center gap-3 rounded-xl border border-line-strong px-4 py-2.5 text-left transition-colors hover:bg-btn-secondary"
          >
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-btn-secondary text-ink-tertiary">
              <Globe className="size-4" />
            </span>
            <span className="flex-1 text-[13px] font-semibold text-ink">Continue with Google</span>
            <GoogleIcon className="size-5 shrink-0" />
          </button>

          {!isSignup ? (
            <button
              type="button"
              className="mt-2.5 flex w-full items-center justify-center gap-2 rounded-xl border border-line-strong px-4 py-2.5 text-[13px] font-semibold text-ink transition-colors hover:bg-btn-secondary"
            >
              <Cloud className="size-4.5 text-ink-tertiary" />
              Continue with SSO
            </button>
          ) : null}

          <div className="my-5 flex items-center gap-3">
            <span className="h-px flex-1 bg-line" />
            <span className="text-[12px] text-ink-tertiary">or</span>
            <span className="h-px flex-1 bg-line" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-3.5" noValidate>
            {isSignup ? (
              <div>
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="Full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className={cn(
                    "h-11 w-full rounded-xl border bg-bg-main px-4 text-[13px] text-ink outline-none placeholder:text-ink-disabled focus:ring-2",
                    nameMissing
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500/15"
                      : "border-line-strong focus:border-brand-purple focus:ring-brand-purple/15"
                  )}
                />
                {nameMissing ? (
                  <p className="mt-1.5 text-[11.5px] font-medium text-red-500">Full name required</p>
                ) : null}
              </div>
            ) : null}

            <input
              type="email"
              name="email"
              autoComplete="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-11 w-full rounded-xl border border-line-strong bg-bg-main px-4 text-[13px] text-ink outline-none placeholder:text-ink-disabled focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/15"
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                autoComplete={isSignup ? "new-password" : "current-password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-11 w-full rounded-xl border border-line-strong bg-bg-main px-4 pr-11 text-[13px] text-ink outline-none placeholder:text-ink-disabled focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/15"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute top-1/2 right-3.5 -translate-y-1/2 text-ink-tertiary hover:text-ink"
              >
                {showPassword ? <EyeOff className="size-4.5" /> : <Eye className="size-4.5" />}
              </button>
            </div>

            <button
              type="submit"
              disabled={submitted && !canSubmit}
              className={cn(
                "h-11 w-full rounded-xl text-[14px] font-bold transition-colors",
                canSubmit || !submitted
                  ? "bg-ink text-white hover:bg-black"
                  : "cursor-not-allowed bg-btn-secondary text-ink-disabled"
              )}
            >
              {isSignup ? "Sign up with Email" : "Log In"}
            </button>
          </form>

          {!isSignup ? (
            <div className="mt-4 text-center">
              <Link href="#" className="text-[12.5px] font-medium text-accent-blue hover:underline">
                Forgot Password?
              </Link>
            </div>
          ) : null}
        </div>

        <p className="mt-auto pt-16 text-center text-[11.5px] text-ink-tertiary">
          {isSignup ? (
            <>
              By continuing, you agree to our{" "}
              <Link href="/legal" className="font-medium text-ink-secondary hover:text-ink">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/legal" className="font-medium text-ink-secondary hover:text-ink">
                Privacy Policy
              </Link>
              . <Link href="/learn#support" className="font-medium text-ink-secondary hover:text-ink">Need help?</Link>
            </>
          ) : (
            <Link href="/learn#support" className="font-medium text-ink-secondary hover:text-ink">
              Need help?
            </Link>
          )}
        </p>
      </div>
    </section>
  );
}
