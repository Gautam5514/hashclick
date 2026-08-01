// The six-card grid is identical to the one on the home page — reuse it rather
// than maintaining a second copy of the visuals.
import { BrainWhatsNewGrid } from "../home/Brain2Section";

export default function WhatsNew() {
  return (
    <section className="bn-whatsnew" aria-label="What's new in Brain²">
      <div className="bn-container">
        <header className="bn-whatsnew-header">
          <p className="bn-eyebrow bn-eyebrow-purple">what&apos;s new</p>
          <h2 className="bn-h2">
            Nothing comes close to Brain<sup>2</sup>
          </h2>
          <p className="bn-lede">
            We rebuilt Brain² from the ground up to leapfrog the rest.
          </p>
          <a href="/signup" className="bn-btn bn-btn-primary bn-btn-inline">
            Get started
          </a>
        </header>
      </div>
      <BrainWhatsNewGrid />
    </section>
  );
}
