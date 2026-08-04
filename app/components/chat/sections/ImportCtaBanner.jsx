import Image from "next/image";
import CtaButton from "../shared/CtaButton";
import { importBanner } from "../chat-content";

export default function ImportCtaBanner({ content = importBanner }) {
  const { title, body, cta, image } = content;

  return (
    <section className="chat-section chat-section-flush" aria-labelledby="chat-import-title">
      <div className="chat-shell">
        <div className="chat-import-banner">
          <span className="chat-import-glow chat-import-glow-blue" aria-hidden="true" />
          <span className="chat-import-glow chat-import-glow-pink" aria-hidden="true" />

          <div className="chat-import-art">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
            />
          </div>

          <div className="chat-import-copy">
            <h2 id="chat-import-title">{title}</h2>
            <p>{body}</p>
          </div>

          <CtaButton href={cta.href} variant="pill" showArrow={false}>
            {cta.label}
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
