export default function Headline() {
  return (
    <section className="bn-headline" aria-label="The best AI is your AI">
      <div className="bn-headline-inner">
        <img className="bn-headline-brain" src="/hashai.svg" width="90" height="90" alt="" />
        <h2 className="bn-headline-title">
          The best AI is
          <br />
          <em>your</em> AI
        </h2>
        <a href="/signup" className="bn-btn bn-btn-light">
          Get started
        </a>
      </div>

      <img
        className="bn-headline-glow"
        src="/brain-2/glow.svg"
        alt=""
        aria-hidden="true"
        loading="lazy"
      />
      <img
        className="bn-headline-noise"
        src="/brain-2/title-noise-lg.png"
        alt=""
        aria-hidden="true"
        loading="lazy"
      />
    </section>
  );
}
