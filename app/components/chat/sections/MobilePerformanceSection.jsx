import Image from "next/image";
import { Smartphone } from "lucide-react";
import { MOBILE_ICONS } from "../chat-mobile-icons";
import { mobile } from "../chat-content";

export default function MobilePerformanceSection({ content = mobile }) {
  return (
    <section className="chat-section chat-mobile" aria-labelledby="chat-mobile-title">
      <div className="chat-shell text-center">
        <span className="chat-core-chip">
          <Smartphone className="w-4 h-4" aria-hidden="true" />
          {content.eyebrow}
        </span>

        <h2 id="chat-mobile-title" className="chat-h2 chat-mobile-title">
          {content.title}
        </h2>
      </div>

      <div className="chat-shell chat-mobile-layout">
        <div className="chat-mobile-stage">
          <span className="chat-mobile-glow chat-mobile-glow-blue" aria-hidden="true" />
          <span className="chat-mobile-glow chat-mobile-glow-pink" aria-hidden="true" />
          <Image
            src={content.image.src}
            alt={content.image.alt}
            width={content.image.width}
            height={content.image.height}
            className="chat-mobile-phone"
          />
        </div>

        <ul className="chat-stats">
          {content.stats.map((stat) => {
            const Icon = MOBILE_ICONS[stat.icon];
            return (
              <li key={stat.label} className="chat-stat">
                {Icon && <Icon className="chat-stat-icon" aria-hidden="true" />}
                <p>{stat.label}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
