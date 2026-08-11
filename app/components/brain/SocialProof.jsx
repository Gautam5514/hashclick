const logos = ["Cartoon Network", "Siemens", "Finastra", "Diggs", "Hawke Media", "IBM", "Netflix"];

export default function SocialProof() {
  return (
    <section className="bn-social" aria-label="Brain² customers">
      <div className="bn-container bn-social-inner">
        {logos.map((l) => (
          <span key={l}>{l}</span>
        ))}
      </div>

      {/* Mobile-only: same list, duplicated once for a seamless auto-scroll loop. */}
      <div className="bn-social-track" aria-hidden="true">
        <div className="bn-social-track-group">
          {logos.map((l) => (
            <span key={`a-${l}`}>{l}</span>
          ))}
        </div>
        <div className="bn-social-track-group">
          {logos.map((l) => (
            <span key={`b-${l}`}>{l}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
