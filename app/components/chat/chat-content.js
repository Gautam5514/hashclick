/**
 * Every piece of copy and every media path for the /features/chat page.
 * Edit here — never inside the section components.
 *
 * Media notes: each `src` points at a file in /public/chat. Slots that are
 * still filled with a stand-in are marked TODO and listed in
 * chat-page-assets-needed.md with the size to supply.
 */

export const hero = {
  eyebrow: { symbol: "#", label: "Hashboard Chat", tag: "New" },
  title: "Agency conversations, without losing context",
  subtitle:
    "Chat with your team and clients while keeping projects, tasks, files, and agency knowledge connected in one workspace.",
  cta: { label: "Try Hashboard Chat", href: "/signup" },
  note: "It’s free. No credit card required",
  media: {
    src: "/chat/Mask_group__6_.avif",
    alt: "Hashboard Chat workspace with channels, threads, and connected tasks",
    width: 2160,
    height: 1216,
  },
};

export const problemSolution = {
  problem: {
    title: "Agency chat is broken.",
    body: "Team chat, client chat, and your projects live in separate apps, disconnected.",
  },
  solution: {
    title: "We fixed it.",
    body: "Hashboard connects chat with your projects, tasks, and clients.",
    highlight: "With Hash AI superpowers",
  },
  /**
   * The two dashed rings of disconnected apps.
   *
   * ProblemSolutionSection renders the Rive embed when `riveUrl` is set, and
   * falls back to the in-house CSS orbit below when it's null.
   */
  riveUrl: "https://rive.app/s/LU0HEXSaeEOjgAVczN5hJA/embed",
  orbit: {
    // `angle` is degrees clockwise from 3 o'clock on the ring.
    left: [
      { logo: "notion", label: "Notion", badge: "4", angle: -62, badgePos: "top" },
      { logo: "monday", label: "Monday", badge: "29", angle: 0, badgePos: "top" },
      { logo: "jira", label: "Jira", badge: "57", angle: 62, badgePos: "bottom" },
    ],
    right: [
      { logo: "googleChat", label: "Google Chat", badge: "8", angle: -118, badgePos: "top" },
      { logo: "slack", label: "Slack", badge: "31", angle: 180, badgePos: "top" },
      { logo: "teams", label: "Microsoft Teams", badge: "16", angle: 118, badgePos: "top" },
    ],
    // Dimmed, out-of-focus apps drifting behind the rings.
    ghosts: [
      { logo: "linear", side: "left", top: "6%", left: "-6%" },
      { logo: "zoom", side: "left", top: "78%", left: "-9%" },
      { logo: "jira", side: "right", top: "4%", left: "86%" },
      { logo: "monday", side: "right", top: "80%", left: "90%" },
    ],
    pills: [
      { text: "Who’s assigned?" },
      { text: "Send me the link?", active: true },
      { text: "Can’t find the task" },
    ],
  },
};

/**
 * Auto-advancing carousel. The active card's progress bar fills over the slide,
 * then hands off to the next one and loops.
 *
 * `media.type: "video"` drives the bar off the clip's real duration and
 * advances on its `ended` event, so `duration` is ignored there.
 * `media.type: "image"` uses `duration` (ms) as the dwell time.
 */
export const valueProps = [
  {
    title: "Work from Chat",
    description:
      "Create and manage work without leaving the conversation. Turn any message into a task in one click.",
    duration: 6000,
    media: {
      type: "image",
      src: "/chat/bento-1.png",
      alt: "A message being turned into a task",
    },
  },
  {
    title: "Context always Connected",
    description:
      "Every conversation — team or client — automatically linked to its project, tasks, and files.",
    duration: 6000,
    media: {
      type: "image",
      src: "/chat/bento-2.png",
      alt: "A conversation showing its linked tasks and documents",
    },
  },
  {
    title: "Hash AI Keeps Chat Manageable",
    description:
      "Ask questions across your agency, get auto-created tasks, and summarized threads.",
    duration: 6000,
    media: {
      type: "image",
      src: "/chat/meeting-summary.png",
      alt: "An AI summary of a long thread with action items",
    },
  },
];

export const chatAgents = {
  eyebrow: "Chat Agents",
  title: "See the power of Hash AI in every Chat. Get started with a single click.",
  body: "Turn on Hash AI agents in any Chat — use the ones built by the Hashboard team, or set up your own with just a prompt.",
  video: {
    src: "/chat/answer-agent.mp4",
    poster: "/chat/ai-poster.png",
    alt: "An AI agent answering a teammate’s question inside a channel",
  },
};

/**
 * Bento grid. `layout` drives the tile's footprint:
 *   "tall" — half width, full height of the first band
 *   "half" — half width, one row of the first band
 *   "third" — one of three equal tiles in the second band
 * `glow` paints a soft corner light: { color: "pink" | "blue", corner: ... }.
 */
export const bento = {
  title: "Projects and Chats are better together",
  subtitle:
    "Context and clarity instead of chaos. Save more than one day every week with everything in one place.",
  cta: { label: "Try Hashboard Chat", href: "/signup" },
  tiles: [
    {
      title: "Connect Tasks.",
      description: "Link tasks to any message — team or client — so context is never lost.",
      layout: "tall",
      glow: { color: "pink", corner: "bottom-left" },
      media: { type: "image", src: "/chat/bento-1.png", alt: "A task being connected to a chat message" },
    },
    {
      title: "Posts.",
      description:
        "Keep everyone in the loop on important announcements, updates, and discussions.",
      layout: "half",
      media: { type: "image", src: "/chat/bento-2.png", alt: "An announcement post published to a channel" },
    },
    {
      title: "FollowUps.",
      description:
        "Triage comments and turn them into actionable tasks, ensuring nothing slips through the cracks.",
      layout: "half",
      glow: { color: "blue", corner: "bottom-left" },
      media: { type: "video", src: "/chat/syncup-huddle.mp4", alt: "A comment being turned into a task" },
    },
    {
      title: "Sync Threads to Tasks.",
      description: "Keep all of your conversations in sync across tasks and Chat.",
      layout: "third",
      glow: { color: "pink", corner: "top-left" },
      media: { type: "image", src: "/chat/bento-4.png", alt: "A thread kept in sync with its task" },
    },
    {
      title: "Relationships and references.",
      description:
        "Get the complete picture across all your work right where the action is.",
      layout: "third",
      media: { type: "image", src: "/chat/bento-5.png", alt: "Related work referenced from a chat" },
    },
    {
      title: "Organize Chats into Spaces.",
      description:
        "Structure conversations by project or client, the way your agency actually works.",
      layout: "third",
      glow: { color: "blue", corner: "top-right" },
      media: { type: "image", src: "/chat/bento-6.png", alt: "Chats organized into spaces alongside work" },
    },
  ],
};

export const importBanner = {
  title: "Ready to switch?",
  body: "Import your channels, message history, team members and custom emojis in one click.",
  cta: { label: "Import from Slack", href: "/signup" },
  // Slack mark → toggle → ClickUp mark lockup, at its natural size
  image: {
    src: "/chat/slack-import.svg",
    alt: "Slack switching over to Hashboard Chat",
    width: 254,
    height: 78,
  },
};

/**
 * Ten tiles, each a miniature UI mockup built in markup — no screenshots.
 * `mockup` names a component in chat-core-mockups.jsx.
 */
export const coreFeatures = {
  eyebrow: "Core features",
  title: "Everything your agency needs from Chat",
  items: [
    { label: "Team Chat", mockup: "chatsChannels" },
    { label: "Project Chats", mockup: "customSidebar" },
    { label: "Client Chat", mockup: "clientChat" },
    { label: "Direct Messages", mockup: "directMessages" },
    { label: "File Sharing", mockup: "fileSharing" },
    { label: "Mentions", mockup: "activityFeed" },
    { label: "Threaded Replies", mockup: "threads" },
    { label: "Message Search", mockup: "messageSearch" },
    { label: "Notifications", mockup: "pushNotifications" },
    { label: "Pinned Messages", mockup: "pinnedMessages" },
  ],
};

export const aiSection = {
  eyebrow: "Hash AI",
  title: "Hash AI that knows your whole agency — not just this chat",
  features: [
    {
      title: "Ask AI.",
      description:
        "Ask “What did the client approve?” or “What’s blocking this project?” — get answers pulled from across your agency, not just this chat.",
      image: {
        src: "/chat/ai-2.svg",
        alt: "Launch, GitHub, Google Drive, campaigns, and more",
        width: 340,
        height: 238,
      },
    },
    {
      title: "AI Task Creation.",
      description: "Action items from any conversation automatically created, assigned, and linked to the right project.",
      image: { src: "/chat/ai-3.svg", alt: "Create task", width: 340, height: 238 },
    },
    {
      title: "AI CatchUp.",
      description:
        "“Summarize today’s updates.” Catch up on any project or client thread in seconds.",
      image: { src: "/chat/ai-1.svg", alt: "Catch me up", width: 340, height: 238 },
    },
  ],
};

/**
 * A meeting-summary doc with the call window laid over its right side. The two
 * assets are sized to compose — the call sits at 72% of the app's width, which
 * is its natural ratio, so it stays inside the app frame instead of floating
 * loose over the section.
 */
export const voiceVideo = {
  eyebrow: "Voice and Video Calls",
  title: "One-click calls with automatic summaries and action items",
  app: {
    src: "/chat/chat-preview.png",
    alt: "A meeting summary doc with AI-generated action items",
    width: 2160,
    height: 1216,
  },
  call: {
    src: "/chat/one-click-absolute_2.avif",
    alt: "A team on a video call with recording in progress",
    width: 1547,
    height: 1199,
  },
};

/** `icon` names a line-art glyph in chat-mobile-icons.jsx. */
export const mobile = {
  eyebrow: "Mobile",
  title: "World-class performance that works wherever you work",
  stats: [
    { icon: "speed", label: "10x faster with Instant Load Framework™" },
    { icon: "gauge", label: "99.9% guaranteed reliability" },
    { icon: "offline", label: "Offline mode for seamless syncing" },
  ],
  image: {
    src: "/chat/mobile-v5.avif",
    alt: "Hashboard Chat running on a phone",
    width: 1419,
    height: 1257,
  },
};

/** `strike` renders struck through — "on the planet" crossed out for "in the universe". */
export const closingCta = {
  title: {
    lead: "The most powerful productivity platform",
    strike: "on the planet",
    tail: "in the universe.",
  },
  cta: { label: "Try Hashboard Chat", href: "/signup" },
  image: {
    src: "/chat/space-guy.png",
    alt: "An astronaut floating in front of the moon",
    width: 1128,
    height: 695,
  },
};

export const testimonials = [
  {
    type: "quote",
    quote:
      "Times have changed. The way we work hasn't - and it's about time it did.",
    author: "Zeb Evans",
    role: "CEO",
    link: { label: "Read more", href: "#" },
    // Drop a portrait in here to replace the lit-stage gradient backdrop.
    // Wants a wide, dark, low-contrast shot — the copy sits on top of it.
    background: null,
  },
  {
    type: "press",
    logo: {
      src: "/chat/venture-beat.png",
      alt: "VentureBeat",
      width: 358,
      height: 47,
    },
    headline:
      "Hashboard takes on Slack and Teams with its AI-powered ‘everything’ app",
    link: { label: "Read more", href: "#" },
  },
];

export const disclaimer =
  "*Hashboard Chat is free for now. Certain restrictions may apply later.";
