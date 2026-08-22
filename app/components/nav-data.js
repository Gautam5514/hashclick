// Menu structure, copy, links and icon references lifted from ClickUp's nav.
// `kind` decides how a column renders:
//   platform — 40px icon + title + description (+ optional badge)
//   product  — 24px sprite icon + title
//   simple   — text-only link list (+ optional "See all →" tail)
//   featured — platform rows built from inline SVG artwork, or a lucide `Icon` component
//   story    — the customer-story card

export const navMenus = [
  {
    id: "product",
    label: "Product",
    columns: [
      {
        title: "Work Management",
        kind: "product",
        items: [
          { label: "Spaces", href: "/features/spaces", icon: "nav-icon-hierarchy" },
          { label: "Projects", href: "/features/projects", icon: "nav-icon-views" },
          { label: "Tasks", href: "/features/tasks", icon: "nav-icon-tasks" },
          { label: "Company Docs", href: "/features/docs", icon: "nav-icon-docs" },
          { label: "Dashboard", href: "/features/dashboards", icon: "nav-icon-dashboards" },
        ],
      },
      {
        title: "Communication",
        kind: "product",
        items: [
          { label: "Chat", href: "/features/chat", icon: "nav-icon-chat" },
          { label: "Meetings", href: "/features/meetings", icon: "nav-icon-rapid-views" },
          { label: "Calendar", href: "/features/calendar", icon: "nav-icon-calendar" },
          { label: "Scheduling", href: "/features/scheduling", icon: "nav-icon-scheduling" },
        ],
      },
      {
        title: "Customers",
        kind: "product",
        items: [
          { label: "Leads", href: "/features/leads", icon: "nav-icon-whiteboards" },
          { label: "Clients", href: "/features/clients", icon: "nav-icon-forms" },
          { label: "Invoicing", href: "/features/invoicing", icon: "nav-icon-inbox" },
          { label: "Expenses", href: "/features/expenses", icon: "nav-icon-syncup" },
        ],
      },
      {
        title: "People",
        kind: "product",
        items: [
          { label: "Teams", href: "/features/teams", icon: "nav-icon-forms" },
          { label: "Attendance", href: "/features/attendance", icon: "nav-icon-views" },
          { label: "Leave", href: "/features/leave", icon: "nav-icon-time-tracking" },
          { label: "Payroll", href: "/features/payroll", icon: "nav-icon-automations" },
        ],
      },
      {
        title: "Intelligence",
        kind: "product",
        items: [
          { label: "Hash AI", href: "/brain", icon: "nav-icon-integrations" },
          { label: "All features", href: "/product", icon: "nav-icon-all-features" },
          { label: "Watch demo", href: "/demo", icon: "nav-icon-watch-demo" },
        ],
      },
    ],
  },
];

export const navLinks = [
  { label: "Blog", href: "/blog" },
  { label: "Pricing", href: "/pricing" },
  { label: "Enterprise", href: "/enterprise" },
];

export const footerColumns = [
  {
    title: "Download",
    links: [
      { name: "iOS & Android", href: "/download" },
      { name: "Mac & Windows", href: "/download" },
      { name: "Hash AI", href: "/ai" },
      { name: "Chrome extension", href: "/download" },
    ],
  },
  {
    title: "AI",
    links: [
      { name: "Hash AI", href: "/ai" },
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
      { name: "Chat", href: "/features/chat" },
      { name: "Projects", href: "/features/projects" },
      { name: "People", href: "/features/teams" },
      { name: "Calendar", href: "/features/calendar" },
      { name: "Attendance", href: "/features/attendance" },
      { name: "Leave", href: "/features/leave" },
      { name: "Meetings", href: "/features/meetings" },
      { name: "Invoices", href: "/features/invoicing" },
      { name: "Expenses", href: "/features/expenses" },
      { name: "Payroll", href: "/features/payroll" },
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
  { name: "Guides", href: "/learn" },
  { name: "Product walkthrough", href: "/demo" },
  { name: "Blog", href: "/blog" },
  { name: "Research", href: "/research" },
];
