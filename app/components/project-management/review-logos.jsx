/**
 * Rating stars and review-site marks for the hero social proof row.
 * The brand marks are simplified in-house glyphs, not vendor SVGs.
 */

const STAR =
  "M12 2.4l2.95 5.98 6.6.96-4.78 4.66 1.13 6.57L12 17.47l-5.9 3.1 1.13-6.57L2.45 9.34l6.6-.96L12 2.4Z";

/** 4.5 of 5 — the last star is half filled. */
export function StarRating({ rating = 4.5, out = 5 }) {
  return (
    <span className="pm-stars" role="img" aria-label={`${rating} out of ${out} stars`}>
      <svg width="0" height="0" aria-hidden="true">
        <defs>
          <linearGradient id="pm-half-star">
            <stop offset="50%" stopColor="#ffc319" />
            <stop offset="50%" stopColor="#ffe9a8" />
          </linearGradient>
        </defs>
      </svg>

      {Array.from({ length: out }, (_, i) => {
        const filled = i + 1 <= Math.floor(rating);
        const half = !filled && i < rating;
        return (
          <svg key={i} viewBox="0 0 24 24" aria-hidden="true">
            <path d={STAR} fill={half ? "url(#pm-half-star)" : filled ? "#ffc319" : "#ffe9a8"} />
          </svg>
        );
      })}
    </span>
  );
}

function G2Mark() {
  return (
    <svg viewBox="0 0 24 24" aria-label="G2">
      <circle cx="12" cy="12" r="11" fill="#ff492c" />
      <path
        d="M12.4 6.2a5.8 5.8 0 1 0 3.1 10.7l-1.3-1.7a3.7 3.7 0 1 1-1.8-6.9h2.9V6.2h-2.9Z"
        fill="#fff"
      />
      <path d="M15.6 9.7h3.1l-3.1 3.4h3.1v1.6h-5.3v-1.6l3.1-3.4h-3.1V9.7Z" fill="#fff" />
    </svg>
  );
}

function CapterraMark() {
  return (
    <svg viewBox="0 0 24 24" aria-label="Capterra">
      <path d="M2 5.5 9.5 12 2 18.5V5.5Z" fill="#44d0e8" />
      <path d="M9 5.5 16.5 12 9 18.5V5.5Z" fill="#28b8dc" />
      <path d="M16 5.5 23.5 12 16 18.5V5.5Z" fill="#1a97c9" />
    </svg>
  );
}

function GetAppMark() {
  return (
    <svg viewBox="0 0 24 24" aria-label="GetApp">
      <path d="M22 3 2 11.2l7.4 2.2L22 3Z" fill="#3ab3c4" />
      <path d="M22 3 9.4 13.4l.9 7.6L22 3Z" fill="#1c7f96" />
    </svg>
  );
}

function SoftwareAdviceMark() {
  return (
    <svg viewBox="0 0 24 24" aria-label="Software Advice">
      <path d="M3 4h18v13H9.5L4 21.5V17H3V4Z" fill="#f8792b" />
    </svg>
  );
}

function ProductHuntMark() {
  return (
    <svg viewBox="0 0 24 24" aria-label="Product Hunt">
      <circle cx="12" cy="12" r="11" fill="#f04f24" />
      <path
        d="M9.6 6.4h4.1a3.6 3.6 0 0 1 0 7.2h-1.9v4h-2.2V6.4Zm2.2 2.1v3h1.9a1.5 1.5 0 0 0 0-3h-1.9Z"
        fill="#fff"
      />
    </svg>
  );
}

export function ReviewLogos() {
  return (
    <span className="pm-review-logos">
      <G2Mark />
      <CapterraMark />
      <GetAppMark />
      <SoftwareAdviceMark />
      <ProductHuntMark />
    </span>
  );
}
