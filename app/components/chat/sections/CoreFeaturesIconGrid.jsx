import { Layers } from "lucide-react";
import { MOCKUPS } from "../chat-core-mockups";
import { coreFeatures } from "../chat-content";

export default function CoreFeaturesIconGrid({ content = coreFeatures }) {
  return (
    <section className="chat-section" aria-labelledby="chat-core-title">
      <div className="chat-shell text-center">
        <span className="chat-core-chip">
          <Layers className="w-4 h-4" aria-hidden="true" />
          {content.eyebrow}
        </span>

        <h2 id="chat-core-title" className="chat-h2 mb-14">
          {content.title}
        </h2>

        <ul className="chat-core-grid">
          {content.items.map((item) => {
            const Mockup = MOCKUPS[item.mockup];
            return (
              <li key={item.label} className="chat-core-tile">
                {/* Inner panel is inset top-left and bleeds off the right edge */}
                <span className="cf-panel">
                  {Mockup ? <Mockup label={item.label} /> : <span className="cf-label">{item.label}</span>}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
