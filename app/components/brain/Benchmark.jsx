const stats = [
  { k: "Quality", v: "#1", d: "vs OpenAI & Claude" },
  { k: "Cost", v: "85%", d: "↓ cheaper" },
  { k: "Context Engine", v: "92%", d: "+34/min" },
  { k: "Win-rate", v: "100%", d: "+22/min" },
];

export default function Benchmark() {
  return (
    <section className="bn-benchmark" aria-label="Brain² benchmark">
      <div className="bn-container">
        <p className="bn-eyebrow">Brain² beats every benchmark*</p>
        <h2 className="bn-h2">
          LLMs are literally <em>average</em> without context.
          <br />
          Brain<sup>2</sup> wins, 100% guaranteed.
        </h2>
        <p className="bn-lede">
          Brain² is your company AI that self-improves, routes to the best models, and coworks to
          complete your work. Multiplayer contextual AI where human intelligence becomes your
          collective Brain.
        </p>

        <dl className="bn-stats">
          {stats.map((s) => (
            <div className="bn-stat" key={s.k}>
              <dt className="bn-stat-k">{s.k}</dt>
              <dd className="bn-stat-v">{s.v}</dd>
              <dd className="bn-stat-d">{s.d}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
