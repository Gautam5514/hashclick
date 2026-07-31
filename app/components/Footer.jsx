import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { footerColumns, footerHelpLinks } from "./nav-data";
import { LogoMark } from "./ui/Logo";
import { Container } from "./ui/Container";
import { site } from "@/lib/site";

/* Brand marks are not part of the icon set, so they live here as inline SVG. */
function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14Zm1.78 13.02H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.02 4.39 11.01 10.13 11.93v-8.44H7.08v-3.49h3.05V9.41c0-3.03 1.79-4.7 4.53-4.7 1.31 0 2.69.24 2.69.24v2.97h-1.52c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.08 24 18.09 24 12.07Z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16ZM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.12 1.39A5.86 5.86 0 0 0 .63 4.14c-.3.76-.5 1.64-.56 2.91C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.39 2.12a5.86 5.86 0 0 0 2.12 1.39c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.86 5.86 0 0 0 2.12-1.39 5.86 5.86 0 0 0 1.39-2.12c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.86 5.86 0 0 0-1.39-2.12A5.86 5.86 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0Zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm7.85-10.41a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z" />
    </svg>
  );
}

const socials = [
  { name: "LinkedIn", icon: LinkedinIcon, href: "https://linkedin.com" },
  { name: "Facebook", icon: FacebookIcon, href: "https://facebook.com" },
  { name: "Instagram", icon: InstagramIcon, href: "https://instagram.com" },
];

const compliance = ["SOC 2 Type II", "ISO 27001", "GDPR", "HIPAA"];

const legal = [
  { name: "Status", href: "/legal" },
  { name: "Security", href: "/legal" },
  { name: "Privacy", href: "/legal" },
  { name: "Terms", href: "/legal" },
  { name: "Cookie Preferences", href: "/legal" },
];

function XIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.9 2.25h3.34l-7.3 8.34 8.58 11.34h-6.72l-5.26-6.88-6.02 6.88H2.17l7.8-8.92L1.74 2.25h6.89l4.76 6.29 5.51-6.29Zm-1.17 17.68h1.85L7.36 4.13H5.38l12.35 15.8Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer data-theme="dark" className="bg-bg-main">
      <Container size="wide" className="pt-20 pb-10">
        {/* Link columns */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="text-[13px] font-bold tracking-[0.06em] text-ink uppercase">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[13.5px] text-ink-secondary transition-colors hover:text-ink"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Help row */}
        <div className="mt-14 border-t border-line pt-8">
          <h3 className="text-[13px] font-bold tracking-[0.06em] text-ink uppercase">
            Help
          </h3>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2.5">
            {footerHelpLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-[13.5px] text-ink-secondary transition-colors hover:text-ink"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Compliance + social */}
        <div className="mt-10 flex flex-col gap-6 border-t border-line pt-8 md:flex-row md:items-center md:justify-between">
          <ul className="flex flex-wrap items-center gap-2.5">
            {compliance.map((badge) => (
              <li
                key={badge}
                className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-[12px] font-semibold text-ink-secondary"
              >
                <ShieldCheck className="size-3.5 text-accent-green" />
                {badge}
              </li>
            ))}
          </ul>

          <ul className="flex items-center gap-2">
            {socials.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  aria-label={s.name}
                  rel="noreferrer noopener"
                  target="_blank"
                  className="flex size-9 items-center justify-center rounded-full border border-line text-ink-secondary transition-colors hover:border-ink-tertiary hover:text-ink"
                >
                  <s.icon className="size-4" />
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://x.com"
                aria-label="X"
                rel="noreferrer noopener"
                target="_blank"
                className="flex size-9 items-center justify-center rounded-full border border-line text-ink-secondary transition-colors hover:border-ink-tertiary hover:text-ink"
              >
                <XIcon className="size-3.5" />
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div className="mt-8 flex flex-col-reverse gap-5 border-t border-line pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2.5">
            <LogoMark className="size-6" />
            <p className="text-[12.5px] text-ink-tertiary">
              © {new Date().getFullYear()} {site.name}. All rights reserved.
            </p>
          </div>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {legal.map((l) => (
              <li key={l.name}>
                <Link
                  href={l.href}
                  className="text-[12.5px] text-ink-tertiary transition-colors hover:text-ink"
                >
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
