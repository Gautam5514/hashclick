"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Check, ChevronDown, X } from "lucide-react";
import { ReviewLogos, StarRating } from "./review-logos";
import LogoCloud from "../shared/LogoCloud";
import Testimonials from "../shared/Testimonials";
import TeamCtaBanner from "../shared/TeamCtaBanner";
import TeamReviewMarquee from "../shared/TeamReviewMarquee";

const groups = [
  {
    eyebrow: "Project planning and setup",
    title: "Plan and launch any project with ease",
    body: "Transform project ideas into trackable plans with clear organization, processes, and resourcing that set your teams and projects up for success.",
    cards: [
      ["15+ views for any project type", "Manage projects with List, Gantt, Calendar, and more—so every team can work the way that works best for them.", "timeline.png"],
      ["Docs centralize project knowledge and plans", "Create SOWs, project plans, and requirements that stay connected to your tasks and timeline.", "docs.png"],
      ["Forms to streamline project requests", "Capture incoming work, change requests, and feedback—then automatically route them to the right workflow and team.", "forms.png"],
      ["Templates speed setup and standardization", "Deploy standardized workflows for any project type—from agile sprints to waterfall plans.", "templates.png"],
      ["Whiteboards bring project plans to life", "Map out project flows, capture requirements, and instantly convert any concept into assignable tasks.", "whiteboards.png"],
    ],
  },
  {
    eyebrow: "Collaboration and automation",
    title: "Collaborate and complete projects faster",
    body: "Communicate and execute in one place, automate routine workflows with AI, and deliver better project outcomes without roadblocks.",
    cards: [
      ["Chat and work on projects in one place", "Discuss projects, action tasks, and assign teammates directly from Chat—with tasks generated from conversation.", "chat.png"],
      ["100+ Automations eliminate project busywork", "Automatically assign tasks, update statuses, and trigger handoffs with automations that save countless hours.", "automations.png"],
      ["AI Notetaker captures meetings and decisions", "AI Notetaker summarizes transcripts and key takeaways from calls, automating post-call documentation.", "notetaker.png"],
      ["Gantt charts manage project dependencies", "Visualize task relationships, identify critical paths, and prevent cascading delays.", "gantt.png"],
      ["Collaborate with guests and contractors", "Invite external collaborators, then set granular permissions that keep your workspace data safe.", "guests.png"],
    ],
  },
  {
    eyebrow: "Reporting and tracking",
    title: "Track project KPIs and optimize resourcing",
    body: "Always know project health, team performance, and key milestones—and make smarter decisions so you never miss a deadline.",
    cards: [
      ["Dashboards to visualize project metrics", "Build real-time views of project health, team capacity, budget status, and timeline progress.", "dashboards.png"],
      ["Workload view to maximize resources", "Balance team assignments, prevent burnout, and identify resource constraints before they impact delivery.", "workload.png"],
      ["AI-powered fields track project data", "Track key details with custom fields that automatically update based on activity.", "fields.png"],
      ["Time tracking optimizes budget", "Monitor hours against estimates, track billable time, and keep projects financially on track.", "timesheets.png"],
      ["AI-powered project updates", "Hashboard AI generates action items, summarizes discussions, and pulls updates automatically.", "updates.png"],
    ],
  },
];

const faqs = [
  ["How does Hashboard support the five project phases?", "Hashboard connects planning, execution, monitoring, and wrap-up in one workspace. Use Whiteboards and Docs to define scope, Gantt and Calendar to plan, tasks to execute, and Dashboards to monitor KPIs."],
  ["Can I switch between Agile, Waterfall, and Kanban?", "Yes. Run sprints in Board view, manage Waterfall timelines with Gantt charts, or switch to Kanban at any time without moving your work."],
  ["How does Hashboard compare to other project management tools?", "Hashboard combines tasks, docs, chat, dashboards, automation, and AI in one configurable platform, reducing context switching across separate tools."],
  ["Does Hashboard have AI agents for project management?", "Yes. AI agents can help with planning, status updates, resource allocation, risk assessment, and project documentation."],
];

function CTA({ children = "Get started. It's FREE", light = false, soft = false, sm = false, arrow = true }) {
  return <Link href="/signup" className={`pm-cta${light ? " pm-cta-light" : ""}${soft ? " pm-cta-soft" : ""}${sm ? " pm-cta-sm" : ""}`}>{children}{arrow && <ArrowRight />}</Link>;
}

function Hero() {
  return <section className="pm-hero">
    <div className="pm-shell pm-hero-grid">
      <div className="pm-hero-copy">
        <p className="pm-kicker">AI-powered project management</p>
        {/* Spaces before each break so the line still wraps when the <br>s are hidden on mobile */}
        <h1>The world&apos;s{" "}<br />most powerful &amp;{" "}<br />flexible project{" "}<br />management{" "}<br />software</h1>
        <p className="pm-lede"><strong>Manage your projects, docs, and chat in one place—all powered by AI.</strong> Hashboard adapts to any project, eliminates busywork, and keeps everything organized so your team delivers projects on time, all the time.</p>
        <div className="pm-action-row"><CTA /><span>Free forever.<br />No credit card.</span></div>
        <div className="pm-reviews"><StarRating /><span>25,000+ reviews from</span><ReviewLogos /></div>
      </div>
      <div className="pm-hero-art"><Image src="/project-management/hero.png" alt="Hashboard project management workspace" width={3075} height={1800} priority /></div>
    </div>
  </section>;
}

function OldNew() {
  // [text, underlined tail]
  const old = [
    ["Projects scattered across ", "multiple tools"],
    ["Critical info hidden in siloed systems and meetings"],
    ["Manual updates and repetitive work strain capacity"],
    ["Missed deadlines and tasks cause bottlenecks"],
  ];
  // [bold lead, rest]
  const better = [
    ["All projects, docs, and chat", " in one platform"],
    ["Instantly find anything", " across all tools"],
    ["Automated reporting", ", updates, and resource management"],
    ["AI-powered workflows", " manage tasks, dependencies, and deadlines"],
  ];
  return <section className="pm-way"><div className="pm-shell">
    <header className="pm-center pm-way-head"><p className="pm-kicker">The Hashboard way</p><h2>Project management is <span>broken,</span><br />we fixed it</h2><p className="pm-way-lede">Disconnected tools sabotage projects. Hashboard brings everything into one place so teams <strong>focus on delivering their best work, not managing tools.</strong></p></header>
    <div className="pm-compare">
      <article className="bad"><h3>The old way</h3><ul>{old.map(([text, tail]) => <li key={text}><X /><span>{text}{tail && <u>{tail}</u>}</span></li>)}</ul></article>
      <article className="good"><h3>The Hashboard way</h3><ul>{better.map(([lead, rest]) => <li key={lead}><Check /><span><strong>{lead}</strong>{rest}</span></li>)}</ul><CTA soft /></article>
    </div>
  </div></section>;
}

function AISection() {
  // [title, body, bold tail, image]
  const cards = [
    ["Automates routine project tasks", "Hashboard AI generates project plans, assign tasks, and handle status updates—replacing busywork with execution and delivery.", "", "ai-platform.png"],
    ["Moves decision to action", "Automatically capture tasks from project discussions and capture next steps—replacing information overload with clarity and action.", "", "ai-action.png"],
    ["Finds project info, instantly", "Find projects and files in seconds across Hashboard and connected apps—", "replacing information gathering with instant context and insights.", "ai-search.png"],
  ];
  return <section className="pm-section pm-ai"><div className="pm-shell">
    <header className="pm-center pm-ai-head"><p className="pm-kicker">Hashboard AI</p><h2>The world&apos;s most complete<br />AI for project management</h2><p className="pm-ai-lede">Meet the first AI that works across your entire project lifecycle. From drafting project plans, capturing meetings, and setting priorities, <strong>Hashboard AI frees your team to focus on impact.</strong></p></header>
    <div className="pm-ai-grid">{cards.map(([title, body, bold, image]) => <article key={title}><Image src={`/project-management/${image}`} alt={title} width={560} height={420} /><h3>{title}</h3><p>{body}{bold && <strong>{bold}</strong>}</p></article>)}</div>
  </div></section>;
}

function FeatureCard([title, body, image]) {
  return <article key={title}>
    <div className="pm-card-copy"><h3>{title}</h3><p>{body}</p></div>
    <div className="pm-card-image"><Image src={`/project-management/${image}`} alt={title} width={900} height={680} /></div>
  </article>;
}

function FeatureGroup({ group }) {
  // Two cards on the first row, three on the second
  const top = group.cards.slice(0, 2);
  const bottom = group.cards.slice(2);
  return <section className="pm-feature-group"><div className="pm-shell">
    <header className="pm-feature-head">
      <p className="pm-kicker">{group.eyebrow}</p>
      <h2>{group.title}</h2>
      <p className="pm-feature-lede">{group.body}</p>
      <CTA sm>Get started</CTA>
    </header>
    <div className="pm-card-row pm-card-row-2">{top.map(FeatureCard)}</div>
    <div className="pm-card-row pm-card-row-3">{bottom.map(FeatureCard)}</div>
  </div></section>;
}

function TestimonialAndMore() {
  const logos = ["asana", "slack", "drive", "jira", "miro", "notion", "teams", "trello", "monday", "airtable", "linear", "loom", "openai", "salesforce", "hubspot", "confluence", "wrike", "smartsheet", "discord", "figma", "zoom", "dropbox", "github", "zendesk", "box", "intercom", "todoist", "calendly", "sharepoint"];
  return <>
    <section className="pm-results"><div className="pm-shell">
      <header className="pm-results-head"><p className="pm-kicker">Why teams love Hashboard</p><h2>Real teams, unreal results</h2><p className="pm-results-lede">Whether you&apos;re supporting a small team or managing complex cross-functional projects—Hashboard helps project managers of all types deliver consistently.</p></header>
      <Testimonials showHeadline={false} />
    </div></section>
    <section className="pm-integrations">
      <div className="pm-shell"><header className="pm-int-head"><p className="pm-kicker">Integrations</p><h2>Hashboard makes your other tools better</h2><p className="pm-int-lede">Bring your essential project tools into one place with over 1,000+ integrations. From cloud storage to communication apps, Hashboard connects to the tools your team relies on for project delivery.</p></header></div>
      {/* Two belts drifting in opposite directions behind a centred badge */}
      <div className="pm-marquee">
        {[logos, [...logos].reverse()].map((row, i) => <div className="pm-marquee-row" key={i}>
          <div className={`pm-marquee-track${i ? " reverse" : ""}`}>
            {[...row, ...row].map((name, j) => <span className="pm-tile" key={`${name}-${j}`}><Image src={`/pricing/apps/${name}.svg`} width={38} height={38} alt="" /></span>)}
          </div>
        </div>)}
        <span className="pm-marquee-badge"><Image src="/project-management/comparison-logo-mark.svg" alt="Hashboard" width={130} height={155} className="pm-marquee-mark" /></span>
      </div>
    </section>
    <section className="pm-templates"><div className="pm-shell">
      <header className="pm-tpl-head"><p className="pm-kicker">Templates</p><h2>Get started with a project<br />management template</h2><p className="pm-tpl-lede">Launch your Hashboard workflow in minutes with customizable templates for any team or project type.</p><CTA sm arrow={false}>Browse Templates</CTA></header>
      <div className="pm-tpl-grid">{[["Project Management Template", "gantt.png"], ["Agile Management Template", "dashboards.png"], ["Team Requests Template", "forms.png"], ["Scope of Work Template", "docs.png"], ["OKRs Template", "workload.png"], ["Project Charter Template", "templates.png"]].map(([name, img]) => <Link href="/signup" key={name}>
        <span className="pm-tpl-shot"><Image src={`/project-management/${img}`} alt={name} width={900} height={620} /></span>
        <h3>{name}</h3>
      </Link>)}</div>
    </div></section>
  </>;
}

function Resources() {
  // [title, author, role, art, avatar tone] — `brand` swaps in the Hashboard mark
  const posts = [
    ["Hashboard Project Management Resources", "Hashboard", "Guest Author", "resource-1.svg", "brand"],
    ["What is Project Scope? Examples, Templates, and Resources to Succeed", "Alex York", "Senior Content Marketing Manager", "resource-2.svg", "blue"],
    ["Sprint Planning: A Project Manager’s Guide", "Zach Wills", "Product Marketing Manager", "resource-3.svg", "amber"],
  ];
  return <section className="pm-resources"><div className="pm-shell">
    <header className="pm-res-head"><p className="pm-kicker">Resources</p><h2>Hashboard resources for<br />project management</h2></header>
    <div className="pm-res-grid">{posts.map(([title, author, role, art, tone]) => <article key={title}>
      <span className="pm-res-art"><Image src={`/project-management/${art}`} alt="" width={380} height={240} /></span>
      <h3>{title}</h3>
      <div className="pm-res-by">
        {tone === "brand"
          ? <span className="pm-res-avatar pm-res-avatar-brand"><Image src="/project-management/comparison-logo-mark.svg" alt="" width={130} height={155} /></span>
          : <span className={`pm-res-avatar pm-res-avatar-${tone}`}>{author.split(" ").map(w => w[0]).join("")}</span>}
        <p><strong>{author}</strong><br />{role}</p>
      </div>
      <Link href="/learn" className="pm-res-cta">Read More <ArrowRight /></Link>
    </article>)}</div>
  </div></section>;
}

function FAQ() {
  const [open, setOpen] = useState(0);
  return <section className="pm-faq"><div className="pm-shell"><h2>Frequently Asked Questions</h2><div>{faqs.map(([q, a], i) => <article key={q}><button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>{q}<ChevronDown /></button>{open === i && <p>{a}</p>}</article>)}</div></div></section>;
}

export default function ProjectManagementPage() {
  return <div className="pm-page"><Hero /><LogoCloud /><OldNew /><AISection />{groups.map((group, i) => <FeatureGroup group={group} index={i} key={group.title} />)}<TestimonialAndMore /><Resources /><TeamCtaBanner /><TeamReviewMarquee /><FAQ /></div>;
}
