const features = [
  {
    title: "Presentation-ready in one prompt",
    body: "Real typography. Curated palettes. Brain² builds your next all-hands, sprint review, or client pitch, and it's actually polished, so you can present in minutes, without touching a slide.",
    image: "/brain-2/sticky-1.png",
  },
  {
    title: "Dashboards, pages, tools, prototypes",
    em: "built before you ask",
    body: "Brain² sees your work and creates finished, shareable deliverables on the spot. Not suggestions. Not outlines. Working pages, real code, ready to use or share immediately.",
    image: "/brain-2/sticky-2.png",
  },
  {
    title: "Your data, actually crunched",
    body: "Ask for a chart of sprint velocity across 6 months, get a rendered image back. Parse 200 accounts from a CSV, cross-reference two task lists, export the result as a spreadsheet. Real answers, computed and visualized in real time.",
    image: "/brain-2/sticky-3.png",
  },
];

export default function Features() {
  return (
    <section className="bn-features" aria-label="Brain² features">
      <div className="bn-container bn-features-inner">
        {features.map((f) => (
          <article className="bn-feature" key={f.title}>
            <div className="bn-feature-copy">
              <h3 className="bn-feature-title">
                {f.title}
                {f.em ? (
                  <>
                    {" "}
                    <em>{f.em}</em>
                  </>
                ) : null}
              </h3>
              <p className="bn-feature-body">{f.body}</p>
            </div>
            <div className="bn-feature-media">
              <img src={f.image} alt="" loading="lazy" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
