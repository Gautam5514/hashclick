# Chat Page — Media Checklist

Every media slot on `/features/chat`, what it shows, the aspect ratio to supply, and the original ClickUp asset it maps to (**reference only — do not download or hotlink these**, they are ClickUp brand assets).

All paths below are what the code expects under `public/chat/`. Slots marked ✅ already have a local file in the repo; slots marked ⚠️ are currently filled with a **stand-in from another slot** and should be replaced with your own artwork.

| # | Local path | Section | What it should show | Recommended size / ratio | Original ClickUp asset |
|---|---|---|---|---|---|
| 1 | `/chat/chat-hero.mp4` ✅ | Hero backdrop + frame | Product tour loop, muted, ~10s | 1920×1080, 16:9, <2 Mbps | `videos.ctfassets.net/.../CHAT_LP_2mbps_V09.mp4` |
| 2 | `/chat/chat-poster.png` ✅ | Hero video poster | First frame of the hero video | 1920×1080, 16:9 | `.../Mask_group__6_.png` |
| 3 | `/chat/answer-agent.mp4` ✅ | Chat Agents spotlight | AI agent answering in a channel | 1600×900, 16:9 | `.../AI_ANSWERS_GIF_EDIT_ZOOMFADE.png` |
| 4 | `/chat/ai-poster.png` ✅ | Chat Agents poster | First frame of the agent video | 1600×900, 16:9 | — |
| 5 | `/chat/bento-1.png` ✅ | Bento — Connect Tasks | Task card linked from a message | 800×560, 10:7 | `.../bento-mobile-1.png` |
| 6 | `/chat/bento-2.png` ✅ | Bento — Posts | Rich post / announcement composer | 800×560, 10:7 | `.../bento-mobile-2.png` |
| 7 | `/chat/syncup-huddle.mp4` ✅ | Bento — FollowUps | Short loop of the feature in use | 800×560, 10:7 | `.../bento-mobile-3.png` |
| 8 | `/chat/bento-4.png` ✅ | Bento — Sync Threads to Tasks | Thread synced onto a task | 800×560, 10:7 | `.../bento-mobile-4.png` |
| 9 | `/chat/bento-5.png` ✅ | Bento — Relationships & references | Linked items panel | 800×560, 10:7 | `.../bento-mobile-5.png` |
| 10 | `/chat/bento-6.png` ✅ | Bento — Organize Chats into Spaces | Space/channel sidebar tree | 800×560, 10:7 | `.../bento-mobile-6.png` |
| 11 | `/chat/slack-import.svg` ✅ | Import CTA banner | Slack → your app migration illustration | 560×360, vector | `.../chat-import-from-slack.svg` |
| 12 | `/chat/meeting-summary.png` ✅ | AI — Ask AI / Voice & Video | AI summary + action items panel | 900×640, ~7:5 | `.../meeting-summary.png` |
| 13 | `/chat/chat-preview.png` ✅ | AI — AI Task Creation | Task auto-created from a message | 900×640, ~7:5 | `.../ai-2.svg` |
| 14 | ⚠️ currently `/chat/ai-poster.png` | AI — AI CatchUp | Catch-up briefing card | 900×640, ~7:5 | `.../ai-1.svg` |
| 15 | `/chat/chat-preview.png` ✅ | Voice & Video Calls | App window — back layer of the composite | 2160×1216, ~16:9 | — |
| 15b | `/chat/one-click-absolute_2.avif` ✅ | Voice & Video Calls | Call window — overlays the app's right side at 72% width | 1547×1199, ~13:10 | `.../one-click-absolute_2.png` |
| 18 | `/chat/mobile-v5.avif` ✅ | Mobile performance | Tilted phone render, frame and screen baked in | 1419×1257 | `.../mobile-v5.png` |
| 19 | `/chat/space-guy.png` ✅ | Closing CTA | Floating astronaut, transparent PNG | 760×760, 1:1 | `.../Space_GUY__1__2.png` |
| 20 | `/chat/venture-beat.png` ✅ | Press card | Outlet wordmark, transparent — used as both the logo and the oversized watermark | 358×47, ~7.6:1 | `.../VentureBeatLogo.png` |
| 20b | ⚠️ none — gradient fallback | Quote card | Portrait backdrop behind the CEO quote. Wide, dark, low-contrast; copy sits on top at ~55% image opacity | ~1200×640, ~15:8 | — |
| 21 | `/chat/chat-footer.png` ✅ | Voice & Video fallback | Wide workspace screenshot | 1240×460, ~2.7:1 | — |

## Not shipped as image assets (built in code instead)
- **Core features grid (10 tiles)** — the reference page ships these as the `the-basics-1…10` artwork. Rebuilt as miniature UI mockups in [chat-core-mockups.jsx](app/components/chat/chat-core-mockups.jsx): skeleton avatars, bars, reaction pills, avatar stacks and mention chips, composed per tile. Nothing to source, and it stays sharp at any size.
- **Problem/solution animation** — ClickUp embeds a Rive animation here. Rebuilt as a CSS orbit graphic (`ProblemSolutionSection.jsx`) so there's no new dependency. Swap for a Lottie/Rive embed later if you want motion parity.
- **Stars, moon, noise texture in the closing CTA** — done with CSS gradients.
- **Blue/pink glow accents in the Mobile section** — CSS blur, not `BluLite.png` / `PinkLite.png`.

## Swapping a stand-in
Drop your file into `public/chat/`, then point the matching `src` in [chat-content.js](app/components/chat/chat-content.js) at it. Every ⚠️ row is marked with a `TODO` comment in that file. No component file needs to change.
