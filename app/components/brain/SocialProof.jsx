const logos = ["Cartoon Network", "Siemens", "Finastra", "Diggs", "Hawke Media", "IBM", "Netflix"];

export default function SocialProof() {
  return (
    <section className="bn-social" aria-label="Brain² customers">
      <div className="bn-container bn-social-inner">
        {logos.map((l) => (
          <span key={l}>{l}</span>
        ))}
      </div>
    </section>
  );
}
