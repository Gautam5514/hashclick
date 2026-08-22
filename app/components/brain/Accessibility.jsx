const platforms = [
  { mark: "●", label: "Hashboard web" },
  { mark: "●", label: "Hash AI" },
  { mark: "⊞", label: "MCP clients" },
  { mark: "▷", label: "Configured models" },
];

export default function Accessibility() {
  return (
    <section className="bn-access" aria-label="One Hash AI, every device">
      <div className="bn-access-frame">
        <header className="bn-access-heading">
          <div className="bn-access-kicker">
            <p className="bn-eyebrow bn-eyebrow-purple">
              Available in your Hashboard workspace
            </p>
          </div>
          <h2 className="bn-access-title">One Hash AI, connected to your work</h2>
        </header>

        <div className="bn-access-hero">
          <div className="bn-access-copy">
            <h3>
              Ask naturally.<br />
              Choose your model.<br />
              Review current work.<br />
              Take permitted action.
            </h3>
            <a href="/signup" className="bn-btn bn-btn-light">
              Get started
            </a>

            <div className="bn-access-anywhere">
              <p>Supported access</p>
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
              src="/hashAI/ai_webview.png"
              alt=""
              loading="lazy"
            />
            <img
              className="bn-device-phone"
              src="/hashAI/ai_mobileview.png"
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
              <h3>Workspace assistant</h3>
              <p>Answers questions using current, permission-aware workspace information</p>
            </div>
          </article>

          <article className="bn-access-capability">
            <div className="bn-access-cap-visual bn-access-mention">
              <div className="bn-access-message">
                <img src="/brain-2/accessible-anywhere/avatar-oliver.png" alt="" />
                <p><strong>Gautam</strong><br /><b>@HashAI</b> pull the latest report</p>
              </div>
            </div>
            <div className="bn-access-cap-copy">
              <h3>Conversational actions</h3>
              <p>Create or update supported work from the Hash AI experience</p>
            </div>
          </article>

          <article className="bn-access-capability">
            <div className="bn-access-cap-visual bn-access-voice">
              {/* Heights are computed here: calc() has no modulo operator, so
                  deriving them in CSS silently invalidates the declaration. */}
              <div className="bn-access-wave">
                {Array.from({ length: 35 }).map((_, index) => (
                  <i
                    key={index}
                    style={{ "--bar": index, height: `${5 + ((index * 5) % 7) * 5}px` }}
                  />
                ))}
              </div>
              <p>Stop&nbsp;&nbsp; ⌥⌘ &nbsp; | &nbsp; Close&nbsp; Esc&nbsp;&nbsp; ⛶</p>
            </div>
            <div className="bn-access-cap-copy">
              <h3>MCP access</h3>
              <p>Connect compatible AI clients to scoped Hashboard tools</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
