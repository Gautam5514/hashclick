"use client";

// Grid order matches clickup.com/about's AboutCoreValues layout exactly:
// 4 cards, then a card + [center title, spanning 2 cols] + a card, then 4 cards.
const VALUES = [
  { lines: ["Normal", "f*cking sucks"], tag: "#SCRAPPY" },
  { lines: ["Challenge the norms,", "push the boundaries"], tag: "#GREATNESS" },
  { lines: ["Embrace hard work,", "do hard things"], tag: "#RESILIENCY" },
  { lines: ["Drive urgency"], tag: "#URGENCY" },
  { lines: ["Grow 1%", "every day"], tag: "#GROWTHMINDSET" },
  { lines: ["Be fun to", "work with"], tag: "#FUN" },
  { lines: ["Be in", "the details"], tag: "#DETAILSMATTER" },
  { lines: ["Stay hungry"], tag: "#HARDWORK" },
  { lines: ["Deliver the best", "customer experience"], tag: "#BESTCX" },
  { lines: ["Say what you mean,", "mean what you say"], tag: "#BEDIRECT" },
];

function ValueCard({ lines, tag }) {
  return (
    <div className="flex min-h-[220px] flex-col justify-between border-r border-b border-[#e8e8e8] p-8 md:min-h-[260px] md:p-10">
      <h3 className="text-lg font-bold font-display leading-snug text-[#202020] sm:text-xl md:text-2xl">
        {lines.map((line, i) => (
          <span key={i}>
            {line}
            {i < lines.length - 1 && <br />}
          </span>
        ))}
      </h3>
      <div className="font-mono text-sm text-[#7b7b7b]">{tag}</div>
    </div>
  );
}

export default function CoreValuesGridSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="grid grid-cols-2 border-t border-l border-[#e8e8e8] md:grid-cols-4">
          {VALUES.slice(0, 4).map((v) => (
            <ValueCard key={v.tag} {...v} />
          ))}

          <ValueCard {...VALUES[4]} />

          <div
            className="relative col-span-2 flex min-h-[220px] items-center justify-center overflow-hidden border-r border-b bg-gradient-to-br from-[#eef6ff] via-[#faf0ff] to-[#fff3ec] p-8 md:min-h-[260px]"
            style={{ borderImage: "linear-gradient(135deg, #0091ff, #7612fa 45%, #ff02f0 70%, #fc6d2d) 1" }}
          >
            <h2 className="our-mission-gradient-text text-center text-3xl font-extrabold font-display sm:text-4xl md:text-5xl">
              Our core values
            </h2>
          </div>

          <ValueCard {...VALUES[5]} />

          {VALUES.slice(6, 10).map((v) => (
            <ValueCard key={v.tag} {...v} />
          ))}
        </div>
      </div>
    </section>
  );
}
