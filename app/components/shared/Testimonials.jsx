import "./testimonials.css";
import TestimonialCard from "./TestimonialCard";

// `video` is the clip that plays on hover — drop an .mp4/.webm in
// public/testimonials/ and point to it. With `video: null` the card stays a
// static poster and the Play pill still shows on hover.
const stories = [
  {
    id: "diggs",
    cover: "/testimonials/home_diggs.webp",
    video: null,
    logo: "/testimonials/home_diggs_logo.webp",
    logoWidth: 179,
    logoHeight: 41,
    company: "PROJECT TEAMS",
    quote: '"Keep responsibilities, priorities, and deadlines clear from one shared workspace."',
    name: "Project workflows",
    role: "Plan, assign, and track work",
  },
  {
    id: "finastra",
    cover: "/testimonials/home_finastra.webp",
    video: null,
    logo: "/testimonials/home_finastra_logo.webp",
    logoWidth: 289,
    logoHeight: 41,
    company: "OPERATIONS",
    quote: '"Bring attendance, leave, clients, meetings, billing, and daily work together."',
    name: "Business operations",
    role: "Coordinate everyday workflows",
  },
  {
    id: "hawke",
    cover: "/testimonials/home_hawke.webp",
    video: null,
    logo: "/testimonials/home_hawke_logo.webp",
    logoWidth: 179,
    logoHeight: 41,
    company: "HASH AI",
    quote: '"Ask questions, review workspace information, and take permitted actions conversationally."',
    name: "AI-assisted work",
    role: "Answers grounded in your workspace",
  },
];

/** `showHeadline={false}` reuses just the cards under a page's own header. */
export default function Testimonials({ showHeadline = true }) {
  return (
    <section className="tm-wrapper" data-testid="home-testimonials">
      {showHeadline && (
        <div className="tm-headline-row">
          <div className="tm-headline">
            <h2>Built around the way modern teams work</h2>
          </div>
          <div className="tm-award">
            <img
              src="/testimonials/awards.svg"
              width="346"
              height="89"
              alt="Hashboard awards"
              loading="lazy"
            />
          </div>
        </div>
      )}

      <div className="tm-grid-wrapper">
        <ul className="tm-grid">
          {stories.map((story) => (
            <li key={story.id}>
              <TestimonialCard story={story} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
