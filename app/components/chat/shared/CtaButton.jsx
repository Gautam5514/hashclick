import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * Gradient CTA. `glow` adds the blurred halo used in the hero and closing CTA.
 */
export default function CtaButton({
  href = "/signup",
  children,
  variant = "primary",
  glow = false,
  showArrow = true,
}) {
  const styles = {
    secondary: "chat-btn-secondary",
    pill: "chat-btn-primary chat-btn-pill",
    primary: "chat-btn-primary",
  };

  const button = (
    <Link href={href} className={styles[variant] || styles.primary}>
      <span>{children}</span>
      {showArrow && <ArrowRight className="w-5 h-5" aria-hidden="true" />}
    </Link>
  );

  if (!glow) return button;

  return (
    <div className="relative inline-block">
      <div className="chat-btn-glow" aria-hidden="true" />
      {button}
    </div>
  );
}
