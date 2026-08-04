import Image from "next/image";
import { BrainWordmark, CircuitBackdrop } from "../chat-ai-art";
import { aiSection } from "../chat-content";

export default function AiFeatureSection({ content = aiSection }) {
  return (
    <section className="chat-section chat-ai" aria-labelledby="chat-ai-title">
      <CircuitBackdrop />

      <div className="chat-shell text-center chat-ai-inner">
        <BrainWordmark text={content.eyebrow} />

        <h2 id="chat-ai-title" className="chat-h2 chat-ai-title">
          {content.title}
        </h2>

        <div className="chat-ai-grid">
          {content.features.map((feature) => (
            <article key={feature.title} className="chat-ai-card">
              <div className="chat-ai-art">
                <Image
                  src={feature.image.src}
                  alt={feature.image.alt}
                  width={feature.image.width}
                  height={feature.image.height}
                />
              </div>

              <div className="chat-ai-copy">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
