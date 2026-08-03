import Image from "next/image";

const sources = [
  { name: "ChatGPT", icon: "/brain-2/logos/chatgpt.svg" },
  { name: "Gemini", icon: "/brain-2/logos/gemini.svg" },
  { name: "Claude", icon: "/brain-2/logos/claude.svg" },
];

export default function MemoryImport() {
  return (
    <section className="bn-import" aria-label="Import memories into Brain²">
      <div className="bn-import-container">
        <div className="bn-import-card">
          <Image
            className="bn-import-glow"
            src="/brain-2/glow.svg"
            width={1000}
            height={798}
            alt=""
            aria-hidden="true"
            unoptimized
          />
          <Image
            className="bn-import-noise"
            src="/brain-2/title-noise-lg.png"
            width={1440}
            height={798}
            alt=""
            aria-hidden="true"
          />

          <div className="bn-import-lockup" aria-hidden="true">
            <div className="bn-import-sources">
              {sources.map((source) => (
                <span className="bn-import-source" key={source.name}>
                  <Image src={source.icon} width={30} height={30} alt="" unoptimized />
                  <span>{source.name}</span>
                </span>
              ))}
            </div>
            <span className="bn-import-connector" />
            <span className="bn-import-brain">
              <Image src="/brain-2/brain.svg" width={46} height={46} alt="" unoptimized />
            </span>
          </div>

          <div className="bn-import-copy">
            <h2 className="bn-import-title">
              Bring your memory into Brain<sup>2</sup> with one-click.
            </h2>
            <p className="bn-import-lede">
              Import your ChatGPT, Claude, or any AI memory into Brain<sup>2</sup> instantly.
            </p>
          </div>

          <a href="/signup" className="bn-import-button">
            <span className="bn-import-logo-stack" aria-hidden="true">
              {sources.map((source) => (
                <Image src={source.icon} width={20} height={20} alt="" unoptimized key={source.name} />
              ))}
            </span>
            <span>Import Memory</span>
          </a>
        </div>

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
