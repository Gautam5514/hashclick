import Image from "next/image";
import { Play } from "lucide-react";
import CtaButton from "../shared/CtaButton";
import { hero } from "../chat-content";

export default function HeroSection({ content = hero }) {
  const { eyebrow, title, subtitle, cta, note, media } = content;

  return (
    <section className="chat-hero" aria-labelledby="chat-hero-title">
      {/* Soft purple wash behind the copy — the canvas itself stays pure black */}
      <div className="chat-hero-aura" aria-hidden="true" />

      <div className="chat-shell chat-hero-content">
        <div className="chat-hero-pill">
          <span className="chat-hero-pill-symbol">{eyebrow.symbol}</span>
          <span>{eyebrow.label}</span>
          <span className="chat-hero-pill-tag">{eyebrow.tag}</span>
        </div>

        <h1 id="chat-hero-title" className="chat-h1">
          {title}
        </h1>

        <p className="chat-hero-subtitle">{subtitle}</p>

        <CtaButton href={cta.href} glow showArrow={false}>
          {cta.label}
        </CtaButton>

        <p className="chat-hero-note">
          {note}
          <span className="text-white/60">*</span>
        </p>

        {/* Product frame — rounded top only, bleeds off the section's bottom edge */}
        <div className="chat-hero-frame">
          <div className="chat-hero-frame-inner">
            <Image
              src={media.src}
              alt={media.alt}
              width={media.width}
              height={media.height}
              priority
            />
            <div className="chat-hero-play" aria-hidden="true">
              <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-white text-white ml-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
