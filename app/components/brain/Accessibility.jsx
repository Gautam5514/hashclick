const platforms = [
  { mark: "●", label: "macOS" },
  { mark: "●", label: "iOS" },
  { mark: "⊞", label: "Windows" },
  { mark: "▷", label: "Android" },
];

export default function Accessibility() {
  return (
    <section className="bn-access" aria-label="One Brain, every device">
      <div className="bn-access-frame">
        <header className="bn-access-heading">
          <div className="bn-access-kicker">
            <p className="bn-eyebrow bn-eyebrow-purple">
              Fully native desktop &amp; mobile
            </p>
          </div>
          <h2 className="bn-access-title">One Brain, every device</h2>
        </header>

        <div className="bn-access-hero">
          <div className="bn-access-copy">
            <h3>
              Voice-first.<br />
              Context-aware.<br />
              Full agent management<br />
              on the go.
            </h3>
            <a href="/signup" className="bn-btn bn-btn-primary">
              Get started
            </a>

            <div className="bn-access-anywhere">
              <p>Use anywhere</p>
              <ul>
                {platforms.map((platform) => (
                  <li key={platform.label}>
                    <span aria-hidden="true">{platform.mark}</span>
                    {platform.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bn-access-device-art" aria-hidden="true">
            <div className="bn-access-glow" />
            <img
              className="bn-device-desktop"
              src="/brain-2/accessible-anywhere/brain-device-desktop.png"
              alt=""
              loading="lazy"
            />
            <img
              className="bn-device-phone"
              src="/brain-2/accessible-anywhere/brain-device-phone.png"
              alt=""
              loading="lazy"
            />
          </div>
        </div>

        <div className="bn-access-capabilities">
          <article className="bn-access-capability">
            <div className="bn-access-cap-visual bn-access-search">
              <div className="bn-access-searchbox">
                <span>Ask or Search...</span>
                <div><b>＋</b><i /> Search&nbsp; ◆ ◆ ◆ ◆ <small>+5</small></div>
              </div>
            </div>
            <div className="bn-access-cap-copy">
              <h3>Coworker</h3>
              <p>Anticipates and executes work alongside your team</p>
            </div>
          </article>

          <article className="bn-access-capability">
            <div className="bn-access-cap-visual bn-access-mention">
              <div className="bn-access-message">
                <img src="/brain-2/accessible-anywhere/avatar-oliver.png" alt="" />
                <p><strong>Oliver</strong><br /><b>@Brain</b> pull the latest report</p>
              </div>
            </div>
            <div className="bn-access-cap-copy">
              <h3>Mention Anywhere</h3>
              <p>Instant context and answers wherever you @Brain</p>
            </div>
          </article>

          <article className="bn-access-capability">
            <div className="bn-access-cap-visual bn-access-voice">
              <div className="bn-access-wave">
                {Array.from({ length: 35 }).map((_, index) => (
                  <i key={index} style={{ "--bar": index }} />
                ))}
              </div>
              <p>Stop&nbsp;&nbsp; ⌥⌘ &nbsp; | &nbsp; Close&nbsp; Esc&nbsp;&nbsp; ⛶</p>
            </div>
            <div className="bn-access-cap-copy">
              <h3>Talk to Text</h3>
              <p>Never use your keyboard again</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
