const words =
  "ClickUp's AI levels the playing field — three-month-old project manager or a seasoned veteran, you tap into the same intelligence. Every project we run is backed by 150 years of our team's collective expertise, not just one person's memory.".split(
    " ",
  );

export default function Quote() {
  return (
    <section className="bn-quote" aria-label="Customer quote">
      <div className="bn-container">
        <blockquote className="bn-quote-body">
          <span className="bn-quote-mark" aria-hidden="true">
            &ldquo;
          </span>
          {words.map((w, i) => (
            <span key={i} className="bn-quote-word" style={{ "--i": i }}>
              {w}{" "}
            </span>
          ))}
          <span className="bn-quote-mark" aria-hidden="true">
            &rdquo;
          </span>
        </blockquote>
        <footer className="bn-quote-cite">
          <strong>Aasim Arafath</strong>
          <span>Project Services, Siemens</span>
        </footer>
      </div>
    </section>
  );
}
