const stats = [
  { k: "Workspace", v: "1", d: "connected source of work" },
  { k: "AI providers", v: "4+", d: "supported when configured" },
  { k: "Business workflows", v: "10+", d: "available in Hashboard" },
  { k: "Model selection", v: "Your choice", d: "from available models" },
];

export default function Benchmark() {
  return (
    <section className="bn-benchmark" aria-label="Hash AI product capabilities">
      <div className="bn-container">
        <p className="bn-eyebrow">Grounded in your Hashboard workspace</p>
        <h2 className="bn-h2">
          Better answers start with <em>current work.</em>
          <br />
          Hash AI connects assistance with action.
        </h2>
        <p className="bn-lede">
          Ask about the workspace information you are permitted to access, choose an available model,
          and create or update supported work through conversation.
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
