// Menu structure, copy, links and icon references lifted from ClickUp's nav.
// `kind` decides how a column renders:
//   platform — 40px icon + title + description (+ optional badge)
//   product  — 24px sprite icon + title
//   simple   — text-only link list (+ optional "See all →" tail)
//   featured — platform rows built from inline SVG artwork
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
  {
    id: "solutions",
    label: "Solutions",
    columns: [
      {
        title: "Solutions",
        kind: "product",
        items: [
          { label: "Project management", href: "/teams/project-management", icon: "nav-icon-tasks" },
          { label: "Product development", href: "/teams/product-development", icon: "nav-icon-views" },
          { label: "Operations", href: "/teams/operations", icon: "nav-icon-automations" },
          { label: "Enterprise", href: "/enterprise", icon: "nav-icon-hierarchy" },
          { label: "All solutions", href: "/solutions", icon: "nav-icon-all-features" },
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
        kind: "product",
        items: [
          { label: "Getting started", href: "/learn", icon: "nav-icon-rapid-views" },
          { label: "Product walkthrough", href: "/demo", icon: "nav-icon-watch-demo" },
          { label: "Blog", href: "/blog", icon: "nav-icon-docs" },
          { label: "Product reference", href: "/research", icon: "nav-icon-wiki" },
          { label: "Help & contact", href: "/contact", icon: "nav-icon-inbox" },
        ],
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
      { name: "Web workspace", href: "/download" },
      { name: "Responsive access", href: "/download" },
      { name: "Hash AI", href: "/brain" },
      { name: "MCP connectivity", href: "/brain" },
    ],
  },
  {
    title: "AI",
    links: [
      { name: "Hash AI", href: "/brain" },
      { name: "Workspace context", href: "/brain" },
      { name: "Supported actions", href: "/brain" },
      { name: "Model choice", href: "/brain" },
      { name: "Workspace questions", href: "/brain" },
      { name: "MCP access", href: "/brain" },
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
    title: "Explore",
    links: [
      { name: "Hashboard overview", href: "/compare" },
      { name: "Connected work", href: "/compare" },
      { name: "People operations", href: "/compare" },
      { name: "Client operations", href: "/compare" },
      { name: "Hash AI", href: "/brain" },
      { name: "MCP connectivity", href: "/brain" },
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
  { name: "Getting Started", href: "/learn" },
  { name: "Workflow Guides", href: "/learn" },
  { name: "Product Overview", href: "/product" },
  { name: "Hash AI Guide", href: "/brain" },
  { name: "Blog", href: "/blog" },
  { name: "Product Reference", href: "/research" },
];
