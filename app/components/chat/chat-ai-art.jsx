/**
 * Chrome for the Hash AI section: the wordmark and the circuit-trace
 * backdrop. The three card illustrations are SVG files in /public/chat
 * (ai-1/2/3.svg), wired up from `aiSection` in chat-content.js.
 */

/** "Hash AI" — the AI half picks up the gradient. */
export function HashAiWordmark({ text = "Hash AI" }) {
  return (
    <span className="ai-wordmark">
      <img src="/hashai.svg" className="ai-wordmark-spark" alt="" aria-hidden="true" />
      <span aria-label={text}>
        <span aria-hidden="true">Hash </span>
        <span aria-hidden="true" className="ai-wordmark-ai">AI</span>
      </span>
    </span>
  );
}

/**
 * One tall column of circuit traces. Rendered twice — the right copy is
 * mirrored and nudged vertically in CSS so the two edges don't read as a
 * literal reflection.
 */
function CircuitPanel({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 360 1140"
      preserveAspectRatio="xMinYMid slice"
      aria-hidden="true"
    >
      <g fill="none" stroke="rgba(255,255,255,0.085)" strokeWidth="1.25">
        {/* long traces bending in from the edge */}
        <path d="M0 60h96q18 0 31-13l26-26q13-13 31-13h176" />
        <path d="M0 140h60q17 0 29-12l40-40q12-12 29-12h202" />
        <path d="M0 250l52-50q12-12 29-12h30" />
        <path d="M360 176H224q-17 0-29 12l-38 38q-12 12-12 29v336q0 17-12 29l-54 54q-12 12-29 12H0" />
        <path d="M360 250h-74q-17 0-29 12l-22 22q-12 12-12 29v300" />
        <path d="M360 560h-46q-17 0-29-12l-42-42q-12-12-12-29V300" />
        <path d="M0 700h34q17 0 29 12l36 36q12 12 12 29v268" />
        <path d="M0 1100h46q17 0 29-12l54-54q12-12 29-12h202" />
        <path d="M360 880h-58q-17 0-29 12l-36 36q-12 12-12 29v183" />
        <path d="M360 1020h-92q-17 0-29 12l-30 30" />

        {/* isolated stubs */}
        <path d="M30 470v90" />
        <path d="M62 340v130" />
        <path d="M104 420v96" />
        <path d="M218 348v122" />
        <path d="M300 452v104" />
        <path d="M140 754v158" />
        <path d="M182 800v120" />
        <path d="M258 700v130" />
      </g>

      {/* solder pads where traces terminate */}
      <g fill="rgba(255,255,255,0.16)">
        <circle cx="153" cy="21" r="2.5" />
        <circle cx="235" cy="613" r="2.5" />
        <circle cx="111" cy="1045" r="2.5" />
        <circle cx="225" cy="1099" r="2.5" />
      </g>

      {/* magenta pulses riding a few of the traces */}
      <g
        fill="none"
        stroke="#d92ec0"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.85"
        style={{ filter: "drop-shadow(0 0 6px #d92ec0)" }}
      >
        <path d="M197 0v24" />
        <path d="M62 372v28" />
        <path d="M218 500v40" />
        <path d="M312 176h30" />
        <path d="M140 776v34" />
        <path d="M258 730v26" />
      </g>
    </svg>
  );
}

/** Circuit traces running down both edges of the section. */
export function CircuitBackdrop() {
  return (
    <div className="ai-circuit" aria-hidden="true">
      <CircuitPanel className="ai-circuit-panel ai-circuit-left" />
      <CircuitPanel className="ai-circuit-panel ai-circuit-right" />
    </div>
  );
}
