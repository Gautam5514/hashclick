const platforms = ["macOS", "iOS", "Windows", "Android"];

const capabilities = [
  {
    icon: "/brain-2/accessible-anywhere/copilot.svg",
    title: "Coworker",
    desc: "Anticipates and executes work alongside your team",
  },
  {
    icon: "/brain-2/accessible-anywhere/mention-anywhere.svg",
    title: "Mention Anywhere",
    desc: "Instant context and answers wherever you @Brain",
  },
  {
    icon: "/brain-2/accessible-anywhere/talk-to-text.svg",
    title: "Talk to Text",
    desc: "Never use your keyboard again",
  },
];

export default function Accessibility() {
  return (
    <section className="bn-access" aria-label="One Brain, every device">
      <div className="bn-container">
        <header className="bn-access-header">
          <p className="bn-eyebrow bn-eyebrow-purple">Fully native desktop &amp; mobile</p>
          <h2 className="bn-h2">One Brain, every device</h2>
          <p className="bn-lede">
            Voice-first. Context-aware. <em>Full agent management on the go.</em>
          </p>
          <div className="bn-access-actions">
            <a href="/signup" className="bn-btn bn-btn-primary">
              Get started
            </a>
            <span className="bn-access-use">Use anywhere</span>
            <ul className="bn-access-platforms">
              {platforms.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </header>

        <div className="bn-access-stage">
          <div className="bn-access-devices">
            <img
              className="bn-device-desktop"
              src="/brain-2/accessible-anywhere/brain-device-desktop.png"
              alt="Brain² on desktop"
              loading="lazy"
            />
            <img
              className="bn-device-phone"
              src="/brain-2/accessible-anywhere/brain-device-phone.png"
              alt="Brain² on mobile"
              loading="lazy"
            />
          </div>

          <ul className="bn-access-caps">
            {capabilities.map((c) => (
              <li key={c.title}>
                <img src={c.icon} width="40" height="40" alt="" loading="lazy" />
                <div>
                  <p className="bn-cap-title">{c.title}</p>
                  <p className="bn-cap-desc">{c.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
