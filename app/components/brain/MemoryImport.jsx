import Image from "next/image";

const sources = [
  { name: "ChatGPT", icon: "/brain-2/logos/chatgpt.svg" },
  { name: "Gemini", icon: "/brain-2/logos/gemini.svg" },
  { name: "Claude", icon: "/brain-2/logos/claude.svg" },
];

export default function MemoryImport() {
  return (
    <section className="bn-import" aria-label="Choose an AI model in Hash AI">
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
              <Image src="/hashai.svg" width={46} height={46} alt="" unoptimized />
            </span>
          </div>

          <div className="bn-import-copy">
            <h2 className="bn-import-title">
              Choose the AI model that fits your work.
            </h2>
            <p className="bn-import-lede">
              Use the models configured for your Hashboard workspace while keeping control of the selection.
            </p>
          </div>

          <a href="/signup" className="bn-import-button">
            <span className="bn-import-logo-stack" aria-hidden="true">
              {sources.map((source) => (
                <Image src={source.icon} width={20} height={20} alt="" unoptimized key={source.name} />
              ))}
            </span>
            <span>Get started with Hash AI</span>
          </a>
        </div>

        <div className="bn-footnotes">
          <p>Available models depend on provider configuration and workspace access.</p>
          <p>Hash AI responses and actions are limited to supported workflows and user permissions.</p>
        </div>
      </div>
    </section>
  );
}
