import SectionHeading from "../shared/SectionHeading";
import FeatureCard from "../shared/FeatureCard";
import CtaButton from "../shared/CtaButton";
import { bento } from "../chat-content";

export default function BentoFeatureGrid({ content = bento }) {
  return (
    <section className="chat-section" aria-labelledby="chat-bento-title">
      <div className="chat-shell">
        <SectionHeading
          title={content.title}
          subtitle={content.subtitle}
          className="max-w-3xl mx-auto mb-16"
        />

        <div className="chat-bento-grid">
          {content.tiles.map((tile) => (
            <FeatureCard
              key={tile.title}
              title={tile.title}
              description={tile.description}
              media={tile.media}
              layout={tile.layout}
              glow={tile.glow}
            />
          ))}
        </div>

        {content.cta && (
          <div className="chat-bento-cta">
            <CtaButton href={content.cta.href} glow showArrow={false}>
              {content.cta.label}
            </CtaButton>
          </div>
        )}
      </div>
    </section>
  );
}
