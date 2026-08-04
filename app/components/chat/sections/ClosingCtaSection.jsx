import Image from "next/image";
import CtaButton from "../shared/CtaButton";
import { closingCta } from "../chat-content";

export default function ClosingCtaSection({ content = closingCta }) {
  const { title, cta, image } = content;

  return (
    <section className="chat-section chat-closing-section" aria-labelledby="chat-closing-title">
      <div className="chat-shell">
        <div className="chat-closing-card">
          {/* Star field is CSS; the moon and astronaut come from the asset */}
          <span className="chat-stars" aria-hidden="true" />

          <div className="chat-closing-art">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              priority={false}
            />
          </div>

          <div className="chat-closing-copy">
            <span className="chat-closing-glow" aria-hidden="true" />
            <h2 id="chat-closing-title" className="chat-closing-title">
              {title.lead} <s>{title.strike}</s> {title.tail}
            </h2>
            <CtaButton href={cta.href} glow showArrow={false}>
              {cta.label}
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}
