/**
 * Thin line-art glyphs for the Mobile performance stats. Referenced by name
 * from `mobile.stats` in chat-content.js.
 */

const base = {
  viewBox: "0 0 40 40",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.25,
  strokeLinecap: "round",
  xmlns: "http://www.w3.org/2000/svg",
};

/** Speed — stacked motion lines raking forward. */
function SpeedIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M26 8 14 20h12L14 32" strokeWidth="1.5" />
      <path d="M30 11h6M28 15h9M31 20h6M28 25h9M30 29h6" opacity="0.5" />
      <path d="M4 11h6M3 15h8M4 20h5M3 25h8M4 29h6" opacity="0.5" />
    </svg>
  );
}

/** Reliability — a dashed gauge ring with a needle. */
function GaugeIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="20" cy="20" r="12" strokeDasharray="3 3.5" opacity="0.65" />
      <circle cx="20" cy="20" r="7.5" />
      <path d="M20 20l4.5-4" strokeWidth="1.5" />
    </svg>
  );
}

/** Offline — sync lines with a slash through them. */
function OfflineIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M8 13h24M11 20h21M8 27h24" opacity="0.65" />
      <path d="M29 9 12 31" strokeWidth="1.5" />
    </svg>
  );
}

export const MOBILE_ICONS = {
  speed: SpeedIcon,
  gauge: GaugeIcon,
  offline: OfflineIcon,
};
