import { Container } from "../ui/Container";
import Button from "../ui/Button";

/**
 * Placeholder for routes the marketing site links to but that aren't built
 * out yet. Keeps every nav and footer link landing somewhere on-brand.
 */
export default function ComingSoon({ eyebrow, title, body, links = [] }) {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-56 left-1/2 h-[520px] w-[900px] -translate-x-1/2 opacity-[0.12] blur-[110px]"
        style={{
          background:
            "radial-gradient(45% 50% at 35% 45%, #7612fa 0%, transparent 100%), radial-gradient(45% 50% at 65% 45%, #fa12e3 0%, transparent 100%)",
        }}
      />
      <Container size="narrow" className="relative py-24 text-center md:py-32">
        {eyebrow ? (
          <span className="inline-flex items-center rounded-full bg-accent-purple-badge px-3.5 py-1.5 text-[12px] font-bold tracking-[0.06em] text-accent-purple uppercase">
            {eyebrow}
          </span>
        ) : null}
        <h1 className="font-display mt-6 text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.03] font-extrabold tracking-[-0.04em] text-ink text-balance">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-[17px] leading-relaxed text-ink-secondary text-pretty">
          {body}
        </p>

        {links.length ? (
          <ul className="mx-auto mt-10 grid max-w-lg gap-2.5 sm:grid-cols-2">
            {links.map((l) => (
              <li key={l}>
                <span className="block rounded-xl border border-line bg-bg-box px-4 py-3 text-[13.5px] font-semibold text-ink-secondary">
                  {l}
                </span>
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/signup" size="lg">
            Get started. It&apos;s FREE
          </Button>
          <Button href="/" variant="outline" size="lg">
            Back to home
          </Button>
        </div>
      </Container>
    </section>
  );
}
