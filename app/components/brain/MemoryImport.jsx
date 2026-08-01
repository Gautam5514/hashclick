const sources = [
  { name: "ChatGPT", icon: "/brain-2/logos/chatgpt.svg" },
  { name: "Gemini", icon: "/brain-2/logos/gemini.svg" },
  { name: "Claude", icon: "/brain-2/logos/claude.svg" },
];

export default function MemoryImport() {
  return (
    <section className="bn-import" aria-label="Import memories into Brain²">
      <div className="bn-container bn-import-inner">
        <img className="bn-import-glow" src="/brain-2/glow.svg" alt="" aria-hidden="true" />

        <div className="bn-import-lockup" aria-hidden="true">
          {sources.map((s) => (
            <span className="bn-import-source" key={s.name}>
              <img src={s.icon} width="22" height="22" alt="" />
            </span>
          ))}
          <span className="bn-import-connector" />
          <span className="bn-import-brain">
            <img src="/brain-2/brain.svg" width="34" height="34" alt="" />
          </span>
        </div>

        <h2 className="bn-h2 bn-import-title">
          Bring your memory into Brain<sup>2</sup> with one-click.
        </h2>
        <p className="bn-lede bn-import-lede">
          Import your ChatGPT, Claude, or any AI memory into Brain² instantly.
        </p>
        <a href="/signup" className="bn-btn bn-btn-primary">
          Import Memory
        </a>

        <div className="bn-footnotes">
          <p>
            <sup>*</sup> Best AI Guarantee: ClickUp provides a 100% satisfaction guarantee on
            Brain². If you are not satisfied that Brain² delivers superior results compared to any
            competing AI product within 30 days, you&apos;ll get your money-back.
          </p>
          <p>
            <sup>**</sup> A three-week, multi-site study was conducted across California, Florida,
            and New Mexico. Participants were randomly recruited and presented with pairwise
            comparisons of AI client outputs, then asked to select the superior result.
          </p>
        </div>
      </div>
    </section>
  );
}
