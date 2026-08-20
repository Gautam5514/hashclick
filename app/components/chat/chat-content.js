/**
 * Every piece of copy and every media path for the /features/chat page.
 * Edit here — never inside the section components.
 *
 * Media notes: each `src` points at a file in /public/chat. Slots that are
 * still filled with a stand-in are marked TODO and listed in
 * chat-page-assets-needed.md with the size to supply.
 */

export const hero = {
  eyebrow: { symbol: "#", label: "Hashboard Chat", tag: "" },
  title: "Where conversations turn into action",
  subtitle:
    "Bring team and project discussions into Hashboard, where messages, files, members, and project activity remain in one accessible workspace.",
  cta: { label: "Get started with Hashboard Chat", href: "/signup" },
  note: "Available as part of the Hashboard workspace",
  media: {
    src: "/chat/Mask_group__6_.avif",
    alt: "Hashboard Chat workspace with channels, threads, and connected tasks",
    width: 2160,
    height: 1216,
  },
};

export const problemSolution = {
  problem: {
    title: "Work conversations lose value when they live apart.",
    body: "Important decisions, project details, and follow-ups can become difficult to find when conversations and work are managed separately.",
  },
  solution: {
    title: "Keep communication closer to execution.",
    body: "Use company and project channels to discuss work with people who already have access to the relevant workspace.",
    highlight: "Organized around your work",
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
    title: "Organized communication",
    description:
      "Separate company-wide communication from project-specific discussions.",
    duration: 6000,
    media: {
      type: "image",
      src: "/chat/bento-1.png",
      alt: "A message being turned into a task",
    },
  },
  {
    title: "Project context",
    description:
      "Use project channels to keep relevant conversations close to the project and its members.",
    duration: 6000,
    media: {
      type: "image",
      src: "/chat/bento-2.png",
      alt: "A conversation showing its linked tasks and documents",
    },
  },
  {
    title: "Clear follow-ups",
    description:
      "Share task activity in project chat so responsibilities and progress stay visible alongside discussion.",
    duration: 6000,
    media: {
      type: "image",
      src: "/chat/meeting-summary.png",
      alt: "Project activity displayed alongside a team conversation",
    },
  },
];

export const chatAgents = {
  eyebrow: "Communication that supports the work",
  title: "Move from discussion to action.",
  body: "Discuss projects, share information, and keep important messages accessible with essential team communication tools.",
  video: {
    src: "/chat/answer-agent.mp4",
    poster: "/chat/ai-poster.png",
    alt: "A Hashboard project conversation",
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
    "Give every project a place for discussion so communication remains organized around the work.",
  cta: { label: "Try Hashboard Chat", href: "/signup" },
  tiles: [
    {
      title: "Project activity.",
      description: "Keep supported task activity visible alongside the relevant project conversation.",
      layout: "tall",
      glow: { color: "pink", corner: "bottom-left" },
      media: { type: "image", src: "/chat/bento-1.png", alt: "A task being connected to a chat message" },
    },
    {
      title: "Important updates.",
      description:
        "Keep everyone in the loop on important announcements, updates, and discussions.",
      layout: "half",
      media: { type: "image", src: "/chat/bento-2.png", alt: "An announcement post published to a channel" },
    },
    {
      title: "Threaded replies.",
      description:
        "Continue focused discussions beneath a message without interrupting the main channel.",
      layout: "half",
      glow: { color: "blue", corner: "bottom-left" },
      media: { type: "video", src: "/chat/syncup-huddle.mp4", alt: "A focused project discussion in Hashboard Chat" },
    },
    {
      title: "Pinned messages.",
      description: "Keep decisions, instructions, and important updates easy to revisit.",
      layout: "third",
      glow: { color: "pink", corner: "top-left" },
      media: { type: "image", src: "/chat/bento-4.png", alt: "A thread kept in sync with its task" },
    },
    {
      title: "Searchable conversations.",
      description:
        "Find previous decisions and updates across conversations you can access.",
      layout: "third",
      media: { type: "image", src: "/chat/bento-5.png", alt: "Related work referenced from a chat" },
    },
    {
      title: "Company and project channels.",
      description:
        "Separate organization-wide communication from discussions tied to individual projects.",
      layout: "third",
      glow: { color: "blue", corner: "top-right" },
      media: { type: "image", src: "/chat/bento-6.png", alt: "Chats organized into spaces alongside work" },
    },
  ],
};

export const importBanner = {
  title: "Ready to bring conversations closer to the work?",
  body: "Create company and project channels, add the right members, and start communicating inside Hashboard.",
  cta: { label: "Create your first channel", href: "/signup" },
  // Slack mark → toggle → ClickUp mark lockup, at its natural size
  image: {
    src: "/chat/slack-import.svg",
    alt: "Decorative communication setup artwork",
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
  title: "Everything teams need for focused communication",
  items: [
    { label: "Team Chat", mockup: "chatsChannels" },
    { label: "Project Chats", mockup: "customSidebar" },
    { label: "Channel Membership", mockup: "clientChat" },
    { label: "Reactions", mockup: "directMessages" },
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
  title: "Keep communication close to execution",
  features: [
    {
      title: "Task activity in Chat.",
      description:
        "Share supported task activity in the relevant project channel and keep the team informed about new work.",
      image: {
        src: "/chat/ai-2.svg",
        alt: "Launch, GitHub, Google Drive, campaigns, and more",
        width: 340,
        height: 238,
      },
    },
    {
      title: "Hash AI workspace actions.",
      description: "Use Hash AI to find accessible tasks, review project information, and create or update permitted workspace tasks.",
      image: { src: "/chat/ai-3.svg", alt: "Create task", width: 340, height: 238 },
    },
    {
      title: "Permission-aware answers.",
      description:
        "Get answers from permitted workspace information while keeping access aligned with your role.",
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
  eyebrow: "Workspace communication",
  title: "Discuss work with the people who have access",
  app: {
    src: "/chat/chat-preview.png",
    alt: "A Hashboard workspace conversation",
    width: 2160,
    height: 1216,
  },
  call: {
    src: "/chat/one-click-absolute_2.avif",
    alt: "Team members collaborating in a workspace",
    width: 1547,
    height: 1199,
  },
};

/** `icon` names a line-art glyph in chat-mobile-icons.jsx. */
export const mobile = {
  eyebrow: "Built around your workspace",
  title: "Communication with access and notification controls",
  stats: [
    { icon: "speed", label: "Access-aware company and project channels" },
    { icon: "gauge", label: "Real-time messages and conversation updates" },
    { icon: "offline", label: "Per-channel notification preferences" },
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
    lead: "Keep conversations",
    strike: "scattered",
    tail: "connected to the work.",
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
      "Organize company and project communication without separating conversations from the workspace.",
    author: "Connected communication",
    role: "Built into Hashboard",
    link: { label: "Read more", href: "#" },
    // Drop a portrait in here to replace the lit-stage gradient backdrop.
    // Wants a wide, dark, low-contrast shot — the copy sits on top of it.
    background: null,
  },
  {
    type: "press",
    logo: {
      src: "/chat/venture-beat.png",
      alt: "Hashboard",
      width: 358,
      height: 47,
    },
    headline:
      "Threads, files, mentions, reactions, search, pins, bookmarks, and notification controls in one workspace",
    link: { label: "Read more", href: "#" },
  },
];

export const disclaimer =
  "Chat availability and usage limits may vary by workspace and subscription.";
