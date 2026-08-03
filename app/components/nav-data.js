// Menu structure, copy, links and icon references lifted from ClickUp's nav.
// `kind` decides how a column renders:
//   platform — 40px icon + title + description (+ optional badge)
//   product  — 24px sprite icon + title
//   simple   — text-only link list (+ optional "See all →" tail)
//   featured — platform rows built from inline SVG artwork
//   story    — the customer-story card

export const navMenus = [
  {
    id: "brain-ai",
    label: "Brain AI",
    columns: [
      {
        title: "AI Platform",
        kind: "platform",
        items: [
          { label: "Platform Overview", desc: "The converged AI workspace", href: "/brain", icon: "brain-platform", w: 40 },
          { label: "Super Agents", desc: "Delegate your work entirely", href: "/ai", icon: "super-agents", w: 46, badge: "new" },
          { label: "Brain MAX", desc: "One AI app to rule them all", href: "/ai", icon: "brain-max-desktop", w: 49 },
          { label: "Brain MAX extension", desc: "Your AI assistant, in every tab", href: "/download", icon: "brain-max-chrome", w: 49 },
        ],
      },
      {
        title: "AI Features",
        kind: "platform",
        items: [
          { label: "Talk to Text", desc: "Write 4x faster than you type", href: "/ai", icon: "talk-to-text", w: 40 },
          { label: "Notetaker", desc: "Intelligent meeting notes and summaries", href: "/ai", icon: "notetaker", w: 40 },
          { label: "Enterprise Search", desc: "Find anything across your workspace", href: "/ai", icon: "enterprise-search", w: 40 },
        ],
      },
      {
        title: "AI Resources",
        kind: "simple",
        items: [
          { label: "Pricing", href: "/pricing" },
          { label: "State of AI", href: "/learn" },
        ],
      },
    ],
  },
  {
    id: "product",
    label: "Product",
    columns: [
      {
        title: "Projects",
        kind: "product",
        items: [
          { label: "Tasks", href: "/features/tasks", icon: "nav-icon-tasks" },
          { label: "Dashboards", href: "/product", icon: "nav-icon-dashboards" },
          { label: "Board", href: "/product", icon: "nav-icon-views" },
          { label: "Gantt", href: "/product", icon: "nav-icon-hierarchy" },
        ],
      },
      {
        title: "Communication",
        kind: "product",
        items: [
          { label: "Chat", href: "/product", icon: "nav-icon-chat" },
          { label: "SyncUp", href: "/product", icon: "nav-icon-syncup" },
          { label: "Inbox", href: "/product", icon: "nav-icon-inbox" },
          { label: "Clips", href: "/product", icon: "nav-icon-rapid-views" },
        ],
      },
      {
        title: "Knowledge",
        kind: "product",
        items: [
          { label: "Docs", href: "/product", icon: "nav-icon-docs" },
          { label: "Whiteboards", href: "/product", icon: "nav-icon-whiteboards" },
          { label: "Wiki", href: "/product", icon: "nav-icon-wiki" },
          { label: "Forms", href: "/product", icon: "nav-icon-forms" },
        ],
      },
      {
        title: "Time",
        kind: "product",
        items: [
          { label: "Calendar", href: "/product", icon: "nav-icon-calendar" },
          { label: "Scheduling", href: "/product", icon: "nav-icon-scheduling" },
          { label: "Automations", href: "/product", icon: "nav-icon-automations" },
          { label: "Time tracking", href: "/product", icon: "nav-icon-time-tracking" },
        ],
      },
      {
        title: "More",
        kind: "product",
        items: [
          { label: "All features", href: "/product", icon: "nav-icon-all-features" },
          { label: "Integrations", href: "/product", icon: "nav-icon-integrations" },
          { label: "Downloads", href: "/download", icon: "nav-icon-downloads" },
          { label: "Watch demo", href: "/demo", icon: "nav-icon-watch-demo" },
        ],
      },
    ],
  },
  {
    id: "solutions",
    label: "Solutions",
    columns: [
      {
        title: "Teams",
        kind: "simple",
        items: [
          { label: "Project management", href: "/solutions" },
          { label: "Product development", href: "/solutions" },
          { label: "Operations", href: "/solutions" },
          { label: "IT", href: "/solutions" },
          { label: "Marketing", href: "/solutions" },
          { label: "Human Resources", href: "/solutions" },
          { label: "Sales", href: "/solutions" },
        ],
        seeAll: { label: "See all teams →", href: "/teams" },
      },
      {
        title: "Companies",
        kind: "simple",
        items: [
          { label: "Enterprise", href: "/enterprise" },
          { label: "Startup", href: "/solutions" },
          { label: "Small Business", href: "/solutions" },
          { label: "Non-profit", href: "/solutions" },
        ],
      },
      {
        title: "Industries",
        kind: "simple",
        items: [
          { label: "Healthcare", href: "/solutions" },
          { label: "Education", href: "/solutions" },
          { label: "Agency & Services", href: "/solutions" },
          { label: "Consumer & Retail", href: "/solutions" },
          { label: "Construction", href: "/solutions" },
          { label: "Government", href: "/solutions" },
        ],
        seeAll: { label: "See all industries →", href: "/solutions" },
      },
      {
        title: "Featured",
        kind: "featured",
        items: [
          { label: "The Small Business Suite", desc: "The only software your small business needs", href: "/solutions", art: "SMB", badge: "New" },
          { label: "Custom agent solutions", desc: "AI workflows built for your team", href: "/solutions", art: "AGENTS" },
        ],
      },
    ],
  },
  {
    id: "learn",
    label: "Learn",
    columns: [
      {
        title: "Learn",
        kind: "simple",
        items: [
          { label: "University", href: "/learn" },
          { label: "Demos", href: "/demo" },
          { label: "Video tutorials", href: "/learn" },
          { label: "Webinars", href: "/learn" },
        ],
      },
      {
        title: "Discover",
        kind: "simple",
        items: [
          { label: "Blog", href: "/learn" },
          { label: "Customer stories", href: "/learn" },
          { label: "Guides", href: "/learn" },
          { label: "Kill Work Sprawl", href: "/learn" },
        ],
      },
      {
        title: "Support",
        kind: "simple",
        items: [
          { label: "24/7 Support", href: "/learn" },
          { label: "Professional services", href: "/learn" },
          { label: "Premium support", href: "/learn" },
          { label: "Hire an expert", href: "/learn" },
        ],
      },
      {
        title: "Customer stories",
        kind: "story",
        story: {
          quote: "\u201cCartoon Network doubles output in 50% less time with ClickUp\u201d",
          cta: "Read the story \u2192",
          href: "/learn",
          art: "CARTOON",
        },
      },
    ],
  },
];

export const navLinks = [
  { label: "Pricing", href: "/pricing" },
  { label: "Enterprise", href: "/enterprise" },
];

export const footerColumns = [
  {
    title: "Download",
    links: [
      { name: "iOS & Android", href: "/download" },
      { name: "Mac & Windows", href: "/download" },
      { name: "Brain MAX", href: "/ai" },
      { name: "Chrome extension", href: "/download" },
    ],
  },
  {
    title: "AI",
    links: [
      { name: "Brain²", href: "/ai" },
      { name: "Super Agents", href: "/ai#agents" },
      { name: "Ambient Agents", href: "/ai#ambient" },
      { name: "AI Notetaker", href: "/ai#notetaker" },
      { name: "Enterprise Search", href: "/ai#search" },
      { name: "Talk to Text", href: "/ai#talk" },
    ],
  },
  {
    title: "Product",
    links: [
      { name: "Chat", href: "/product#chat" },
      { name: "Projects", href: "/product#projects" },
      { name: "Docs & Wikis", href: "/product#docs" },
      { name: "Calendar", href: "/product#calendar" },
      { name: "Dashboards", href: "/product#dashboards" },
      { name: "Time Tracking", href: "/product#time" },
      { name: "Gantt Charts", href: "/product#gantt" },
      { name: "Automations", href: "/product#automations" },
      { name: "Whiteboards", href: "/product#whiteboards" },
      { name: "Integrations", href: "/product#integrations" },
    ],
  },
  {
    title: "Compare",
    links: [
      { name: "vs. Atlassian", href: "/compare" },
      { name: "vs. Microsoft", href: "/compare" },
      { name: "vs. Asana", href: "/compare" },
      { name: "vs. Monday", href: "/compare" },
      { name: "vs. Slack", href: "/compare" },
      { name: "vs. Notion", href: "/compare" },
      { name: "vs. Smartsheet", href: "/compare" },
      { name: "vs. Wrike", href: "/compare" },
      { name: "vs. Airtable", href: "/compare" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/company" },
      { name: "Careers", href: "/company" },
      { name: "Customers", href: "/company" },
      { name: "Partners", href: "/company" },
      { name: "Affiliates", href: "/company" },
      { name: "Events", href: "/company" },
      { name: "Press", href: "/company" },
      { name: "Brand", href: "/company" },
      { name: "Roadmap", href: "/company" },
    ],
  },
];

export const footerHelpLinks = [
  { name: "Support", href: "/learn#support" },
  { name: "Contact Sales", href: "/enterprise#contact" },
  { name: "Get a Demo", href: "/demo" },
  { name: "Import", href: "/learn" },
  { name: "Templates", href: "/learn#templates" },
  { name: "Community", href: "/learn" },
  { name: "University", href: "/learn#university" },
  { name: "Webinars", href: "/learn#webinars" },
  { name: "Blog", href: "/learn#blog" },
  { name: "Research", href: "/learn#blog" },
];
