import "./testimonials.css";
import TestimonialCard from "./TestimonialCard";

// `video` is the clip that plays on hover — drop an .mp4/.webm in
// public/testimonials/ and point to it. With `video: null` the card stays a
// static poster and the Play pill still shows on hover.
const stories = [
  {
    id: "diggs",
    cover: "/operations/testimonials/home_diggs.webp",
    video: null,
    logo: "/operations/testimonials/home_diggs_logo.webp",
    logoWidth: 179,
    logoHeight: 41,
    company: "DIGGS",
    quote: '"ClickUp is serving us so we can serve our pet guardians."',
    name: "Samantha Dengate",
    role: "Sr. Project Manager",
  },
  {
    id: "finastra",
    cover: "/operations/testimonials/home_finastra.webp",
    video: null,
    logo: "/operations/testimonials/home_finastra_logo.webp",
    logoWidth: 289,
    logoHeight: 41,
    company: "FINASTRA",
    quote: '"It\'s a low-code platform that helps us automate processes."',
    name: "Joerg Klueckmann",
    role: "VP of Marketing",
  },
  {
    id: "hawke",
    cover: "/operations/testimonials/home_hawke.webp",
    video: null,
    logo: "/operations/testimonials/home_hawke_logo.webp",
    logoWidth: 179,
    logoHeight: 41,
    company: "Hawke Media",
    quote: '"ClickUp is the best thing I\'ve rolled out in the past two years."',
    name: "Lauren Makielski",
    role: "Chief of Staff",
  },
];

/** `showHeadline={false}` reuses just the cards under a page's own header. */
export default function Testimonials({ showHeadline = true }) {
  return (
    <section className="tm-wrapper" data-testid="home-testimonials">
      {showHeadline && (
        <div className="tm-headline-row">
          <div className="tm-headline">
            <h2>Loved by 5+ million teams, backed by 100+ awards</h2>
          </div>
          <div className="tm-award">
            <img
              src="/operations/testimonials/awards.svg"
              width="346"
              height="89"
              alt="ClickUp awards"
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
