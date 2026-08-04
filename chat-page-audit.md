# ClickUp `/features/chat` — Page Audit

Source: https://clickup.com/features/chat (fetched 2026-08-04)

Page skeleton, in order. Theme: near-black background (`#030303`), white type, purple→pink→rose gradient accents, generous section padding (~7rem), rounded media containers.

---

## 1. Hero — full-bleed, centered, background video
- **Eyebrow pill:** `# ClickUp Chat` + `New` badge
- **H1:** "Chat, Meet Work"
- **Sub:** "Unlock unparalleled productivity with the world's first Everything App."
- **CTA:** "Try ClickUp Chat" (gradient, glow)
- **Note under CTA:** "It's free. No credit card required*"
- **Media:** background video `videos.ctfassets.net/.../CHAT_LP_2mbps_V09.mp4`, hero product frame with play overlay; poster `images.ctfassets.net/w8fc6tgspyjz/4rXI4tkXSCI3LPm93mLjsV/.../Mask_group__6_.png`
- **Layout:** full-bleed video backdrop w/ radial mask → centered stack → wide product frame bleeding off the bottom edge (rounded top only, gradient border)

## 2. Problem statement — dark, 2-column split
- **H2:** "Chat is broken."
- **Sub:** "Chat and work are in different apps, disconnected."
- **Layout:** left = vertical stepper with red ✕ node; right = animated orbit of disconnected app icons with unread badges and floating "Can't find the task / Who's assigned? / Send me the link?" pills

## 3. Solution + animation embed
- **H2:** "We fixed it."
- **Sub:** "The everything app combines chat and work." + gradient line "With AI superpowers"
- **Media:** Rive animation embed (interactive, not a static asset)
- **Layout:** second node on the same stepper (green ✓), gradient connector line between the two

## 4. Value prop cards — 3 columns
1. **Work from Chat** — Create & manage work while messaging
2. **Context always Connected** — Conversations linked to tasks, docs, chats
3. **AI Keeps Chat Manageable** — Suggested answers, auto-created tasks, summarized threads
- **Layout:** 3 selectable cards above one shared preview frame (tab-switch behavior)

## 5. Chat Agents spotlight — centered
- **Eyebrow:** "Chat Agents"
- **H2:** "See the power of AI in every Chat. Get started with a single click."
- **Body:** "Turn on AI agents in any Chat—use the ones created by the ClickUp team or set up your own with just a prompt."
- **Media:** `images.ctfassets.net/w8fc6tgspyjz/1nsn2sHnwu5Uw61gaGH6Z4/.../AI_ANSWERS_GIF_EDIT_ZOOMFADE.png`
- **Layout:** centered heading → single wide glowing media frame

## 6. Bento feature grid — "Projects and Chats are better together"
- **Sub:** "Context and clarity instead of chaos. Save more than one day every week with everything in one place."
- **6 tiles** (title / one-liner / screenshot):
  1. Connect Tasks — `bento-mobile-1.png`
  2. Posts — `bento-mobile-2.png`
  3. FollowUps — `bento-mobile-3.png`
  4. Sync Threads to Tasks — `bento-mobile-4.png`
  5. Relationships and references — `bento-mobile-5.png`
  6. Organize Chats into Spaces — `bento-mobile-6.png`
- **Layout:** 3-col ≥lg, 2-col ≥md, 1-col below. Copy on top, media pinned to card bottom.

## 7. Import CTA banner
- **H2:** "Ready to switch?"
- **Body:** "Import your channels, message history, team members and custom emojis in one click."
- **CTA:** "Import from Slack"
- **Media:** `chat-import-from-slack.svg`
- **Layout:** full-width rounded banner, text left / illustration right

## 8. Core features icon grid — "Everything you'd expect from Chat"
- **Eyebrow:** "Core features"
- **10 tiles (icon + label):** Chat & Channels · Direct messages · Threads · Voice & Video Calls · Activities · Push Notifications · Reminders · Customisable · Draft & Sent · Integrations
- **Original icons:** `the-basics-1..10` SVG/PNG set on ctfassets
- **Layout:** 5-col ≥lg, 3-col md, 2-col mobile; small square icon above label

## 9. AI section — ClickUp Brain
- **Eyebrow:** ClickUp Brain logo lockup
- **H2:** "Get 10x more done with AI that's your productivity partner"
- **3 blocks:**
  1. **Ask AI** — "Get the right answer right away, using knowledge from ClickUp and any connected apps." (`ai-3.svg`)
  2. **AI Task Creation** — "Action items automatically created, assigned, and linked." (`ai-2.svg`)
  3. **AI CatchUp** — "Get up to speed instantly on important topics and action items." (`ai-1.svg`)
- **Layout:** 3-column, each = illustration panel above title + body

## 10. Voice & Video Calls spotlight
- **Eyebrow:** "Voice and Video Calls"
- **H2:** "One-click calls with automatic summaries and action items"
- **Media:** `meeting-summary.png`, `one-click-absolute_2.png`, `Untitled_2.png` — two stacked mobile screenshots + a wide call screenshot
- **Layout:** 2-column split, stacked phone screens on one side, call frame on the other

## 11. Mobile performance
- **Eyebrow:** "Mobile"
- **H2:** "World-class performance that works wherever you work"
- **3 stats:**
  1. "10x faster with Instant Load Framework™" (lightning + odometer art)
  2. "99.9% guaranteed reliability" (cloud art)
  3. "Offline mode for seamless syncing"
- **Media:** `mobile-v5.png` device mockup + `BluLite.png` / `PinkLite.png` glow accents
- **Layout:** heading centered → device mockup with 3 stat callouts

## 12. Closing CTA — space illustration
- **H2:** "The most powerful productivity platform on the planet in the universe."
- **CTA:** "Try ClickUp Chat"
- **Media:** astronaut `Space_GUY__1__2.png`, `moon.png`, `small-moon_2.png`, `stars.png`, `noise.png`
- **Layout:** full-bleed dark space scene, centered statement + button, astronaut floating

## 13. Press / testimonial strip — 2 cards
- **Card A:** "Times have changed. The way we work hasn't - and it's about time it did." — Zeb Evans, CEO · "Read more"
- **Card B:** VentureBeat — "ClickUp takes on Slack and Teams with its AI-powered 'everything' app" · "Read more" (`VentureBeatLogo.png`)

## 14. Footer disclaimer
- "*ClickUp Chat is free for now. Certain restrictions may apply later."

---

## Notes
- Nothing on the page uses a light background — the whole page is one continuous dark canvas; separation comes from gradient washes and card surfaces, not alternating light/dark bands.
- Interactive elements: hero video autoplay, Rive animation in §3, hover lift on bento tiles.
- All ctfassets URLs above are reference only. See `chat-page-assets-needed.md` — the build ships local assets under `/public/chat/`, no hotlinking.
