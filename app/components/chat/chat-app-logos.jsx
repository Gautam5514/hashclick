/**
 * Simplified brand marks for the "chat is broken" orbit graphic.
 * Geometric approximations, drawn in-house — no vendor SVGs are shipped.
 */

const box = { viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" };

export function NotionMark(props) {
  return (
    <svg {...box} {...props}>
      <path
        d="M6 18V6.6l1.9-.3L15 15.2V6.9l-1.4-.3V6l3.9-.4v.7l-1.1.3v11.2l-1.6.2L7.4 8.6v8.5l1.5.3v.6L6 18Z"
        fill="#fff"
      />
    </svg>
  );
}

export function MondayMark(props) {
  return (
    <svg {...box} {...props}>
      <rect x="2" y="15.5" width="20" height="4" rx="2" transform="rotate(-24 2 15.5)" fill="#FF3D57" />
      <rect x="2" y="12" width="20" height="4" rx="2" transform="rotate(-24 2 12)" fill="#FFCB00" />
      <rect x="2" y="8.5" width="20" height="4" rx="2" transform="rotate(-24 2 8.5)" fill="#00CA72" />
    </svg>
  );
}

export function JiraMark(props) {
  return (
    <svg {...box} {...props}>
      <path d="M12 2 21 11h-4.5a4.5 4.5 0 0 1-4.5-4.5V2Z" fill="#2684FF" />
      <path d="M12 22 3 13h4.5A4.5 4.5 0 0 1 12 17.5V22Z" fill="#0052CC" />
      <path d="M12 8.5 16.5 13 12 17.5 7.5 13 12 8.5Z" fill="#2684FF" />
    </svg>
  );
}

export function GoogleChatMark(props) {
  return (
    <svg {...box} {...props}>
      <path d="M12 2.5 21.5 12 12 21.5 2.5 12 12 2.5Z" fill="#4285F4" />
      <path d="M12 2.5 21.5 12H12V2.5Z" fill="#34A853" />
      <path d="M21.5 12 12 21.5V12h9.5Z" fill="#FBBC05" />
      <path d="M12 21.5 2.5 12H12v9.5Z" fill="#EA4335" />
    </svg>
  );
}

export function SlackMark(props) {
  return (
    <svg {...box} {...props}>
      <rect x="9.5" y="2" width="2.8" height="9" rx="1.4" fill="#36C5F0" />
      <rect x="9.5" y="13" width="2.8" height="9" rx="1.4" fill="#2EB67D" />
      <rect x="2" y="9.5" width="9" height="2.8" rx="1.4" fill="#E01E5A" />
      <rect x="13" y="9.5" width="9" height="2.8" rx="1.4" fill="#ECB22E" />
    </svg>
  );
}

export function TeamsMark(props) {
  return (
    <svg {...box} {...props}>
      <circle cx="18" cy="6.5" r="2.6" fill="#5059C9" />
      <rect x="13" y="9" width="9" height="9" rx="2.5" fill="#5059C9" />
      <rect x="2" y="4.5" width="13" height="15" rx="2.5" fill="#7B83EB" />
      <path d="M5 8.4h7v1.7H9.7v6.4H8.3v-6.4H5V8.4Z" fill="#fff" />
    </svg>
  );
}

export function ZoomMark(props) {
  return (
    <svg {...box} {...props}>
      <rect x="2" y="6" width="13" height="12" rx="3" fill="#4A8CFF" />
      <path d="M16 11.2 22 8v8l-6-3.2v-1.6Z" fill="#4A8CFF" />
    </svg>
  );
}

export function LinearMark(props) {
  return (
    <svg {...box} {...props}>
      <path d="M3 13.4A9 9 0 0 0 10.6 21L3 13.4ZM3 10.2 13.8 21c.8-.15 1.55-.4 2.25-.75L3.75 7.95c-.35.7-.6 1.45-.75 2.25ZM5.15 6.1 17.9 18.85c.55-.45 1.05-.95 1.5-1.5L6.65 4.6c-.55.45-1.05.95-1.5 1.5ZM8.55 3.5 20.5 15.45c.35-.7.6-1.45.75-2.25L10.8 2.75c-.8.15-1.55.4-2.25.75Z" fill="#5E6AD2" />
    </svg>
  );
}

export function GithubMark(props) {
  return (
    <svg {...box} fill="currentColor" {...props}>
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

/** Four-point sparkle with the Brain gradient. `id` must be unique per use. */
export function SparkleMark({ id = "spark", ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7b6cff" />
          <stop offset="45%" stopColor="#d92ec0" />
          <stop offset="100%" stopColor="#ff7a45" />
        </linearGradient>
      </defs>
      <path
        d="M12 1.5c.9 4.7 2.4 7.5 9 10.5-6.6 3-8.1 5.8-9 10.5-.9-4.7-2.4-7.5-9-10.5 6.6-3 8.1-5.8 9-10.5Z"
        fill={`url(#${id})`}
      />
    </svg>
  );
}

export const APP_LOGOS = {
  notion: NotionMark,
  monday: MondayMark,
  jira: JiraMark,
  googleChat: GoogleChatMark,
  slack: SlackMark,
  teams: TeamsMark,
  zoom: ZoomMark,
  linear: LinearMark,
};
