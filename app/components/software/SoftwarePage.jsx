"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Check, ChevronDown, CircleCheck, Code2, Sparkles, X } from "lucide-react";
import TeamCtaBanner from "../shared/TeamCtaBanner";
import TeamReviewMarquee from "../shared/TeamReviewMarquee";

const groups = [
  {
    eyebrow: "Sprint and backlog management",
    title: "Manage backlogs and bugs in one place",
    body: "Align your team, visualize dependencies, and ship faster without roadblocks or busywork.",
    cards: [
      ["Visualize tasks your way", "Organize backlogs, allocate sprints, and track dependencies in 15+ views that adapt to any engineering workflow.", "board.png"],
      ["Automate your sprint cycles", "Instantly assign tasks, update statuses, and manage handoffs with 100+ powerful automations.", "/project-management/automations.png"],
      ["Visualize roadmaps clearly", "Map tasks, releases, and dependencies with interactive Gantt charts.", "gantt.png"],
      ["Prioritize with AI Custom Fields", "Score, track, and sort tasks automatically based on priorities.", "fields.png"],
      ["Instant bug & feedback capture", "Turn bug reports and requests into task workflows with custom Forms.", "forms.png"],
    ],
  },
  {
    eyebrow: "Engineering collaboration",
    title: "Break down silos and build faster together",
    body: "Keep your teams aligned from planning to production—and go from idea to action without switching tools.",
    cards: [
      ["Chat and work in one place", "Manage tasks and updates from Chat—and instantly convert standups and threads into clear action items.", "chat.png"],
      ["Centralize engineering docs", "Bring PRDs, specs, and SOPs into one searchable knowledge base.", "docs.png"],
      ["Track sprint progress visually", "Monitor velocity, releases, and bugs with real-time Dashboards.", "/project-management/dashboards.png"],
      ["Capture call notes instantly", "Use AI to document standups and retros—never lose track of next steps.", "notetaker.png"],
      ["Whiteboard your workflows", "Map ideas visually, then convert them directly into actionable tasks.", "whiteboard.png"],
    ],
  },
  {
    eyebrow: "Git and DevOps integrations",
    title: "Connect your entire DevOps pipeline",
    body: "Sync issues, tasks, and deployments seamlessly—accelerating your entire engineering workflow.",
    cards: [
      ["Sync tasks with Git tools", "Connect commits, branches, and pull requests to Hashboard tasks from GitHub, GitLab, and Bitbucket.", "git.png"],
      ["Migrate Jira seamlessly", "Easily import and manage Jira issues directly in Hashboard.", "jira.png"],
      ["Centralize CI/CD alerts", "Turn Jenkins, CircleCI, and Sentry alerts into actionable tasks instantly.", "devops.png"],
      ["Find anything instantly", "AI-powered search instantly surfaces issues and tasks across your tools.", "search.png"],
    ],
  },
];

const faqs = [
  ["How does Hashboard compare with other project management tools for software teams?", "Hashboard centralizes tasks, sprints, and bug tracking while integrating the DevOps pipeline into one workspace, streamlining work from planning through deployment."],
  ["Can Hashboard help software teams track their DevOps performance effectively?", "Yes. Customizable Dashboards and direct DevOps integrations help teams monitor lead time, deployment frequency, recovery time, and bottlenecks."],
];

function CTA({ children = "Get started. It's FREE", light = false }) {
  return <Link href="/signup" className={`pm-cta${light ? " pm-cta-light" : ""}`}>{children}<ArrowRight /></Link>;
}

function Hero() {
  return <section className="pm-hero sw-hero"><div className="pm-shell pm-hero-grid"><div className="pm-hero-copy"><p className="pm-kicker"><Code2 /> AI-powered software management</p><h1>The everything app for <span>software teams</span></h1><p className="pm-lede">Plan, build, and ship all in one place. Hashboard centralizes your entire engineering lifecycle, from roadmap to release, so your teams ship faster without roadblocks.</p><div className="pm-action-row"><CTA /><span>Free forever.<br />No credit card.</span></div><div className="pm-reviews"><b>★★★★★</b><span>4.6 stars · 25,000+ reviews</span></div></div><div className="pm-hero-art"><Image src="/software/hero.png" alt="Hashboard software team List view" width={1460} height={828} priority /></div></div></section>;
}

function Comparison() {
  const old = ["Sprints, backlogs, and bugs scattered across tools", "Manual bug tracking slows down releases and handoffs", "Limited visibility into workload and dependencies", "Repetitive processes delay launches and fixes"];
  const better = ["One platform for backlogs, bugs, and sprints", "Automated bug tracking, handoffs, and updates", "Real-time collaboration keeps everyone aligned", "Integrated DevOps for faster delivery"];
  return <section className="pm-dark"><div className="pm-shell"><header className="pm-center"><p className="pm-overline">The Hashboard way</p><h2>Product management is chaotic,<br /><em>let&apos;s fix it</em></h2><p>Disconnected tools sabotage software teams. Hashboard unifies your backlog, bug tracking, sprints, and roadmaps—so your teams can collaborate, build, and ship faster.</p></header><div className="pm-compare">{[["The old way", old, false], ["The Hashboard way", better, true]].map(([title, list, good]) => <article className={good ? "good" : "bad"} key={title}><h3>{title}</h3><ul>{list.map(item => <li key={item}>{good ? <Check /> : <X />}{item}</li>)}</ul></article>)}</div><div className="pm-center"><CTA light /></div></div></section>;
}

function AI() {
  const cards = [
    ["Automates your backlog", "Automatically assign tickets, update sprints, and refine your backlog—so you focus on building without busywork.", "/project-management/ai-platform.png"],
    ["Moves conversation to action", "Hashboard AI converts PRD reviews, retros, and conversations into trackable tasks with clear next steps.", "/software/ai-action.png"],
    ["Finds anything, instantly", "Find pull requests, files, and projects in seconds from Hashboard and connected apps.", "/software/ai-search.png"],
  ];
  return <section className="pm-section pm-ai"><div className="pm-shell"><header className="pm-center"><p className="pm-overline purple">Hashboard AI</p><h2>The world&apos;s most complete AI<br /><span>for software teams</span></h2><p>Meet the first AI that works across your entire engineering cycle—automating backlogs, capturing decisions, and surfacing insights.</p></header><div className="pm-ai-grid">{cards.map(([title, body, image]) => <article key={title}><div><CircleCheck /><h3>{title}</h3><p>{body}</p></div><Image src={image} alt={title} width={560} height={420} /></article>)}</div></div></section>;
}

function FeatureGroup({ group, index }) {
  const path = image => image.startsWith("/") ? image : `/software/${image}`;
  return <section className={`pm-feature-group tone-${index}`}><div className="pm-shell"><header className="pm-feature-head"><div><p className="pm-overline">{group.eyebrow}</p><h2>{group.title}</h2></div><div><p>{group.body}</p><Link href="/signup">Get started. It&apos;s FREE <ArrowRight /></Link></div></header><div className="pm-card-grid">{group.cards.map(([title, body, image], i) => <article className={i === 0 ? "wide" : ""} key={title}><div className="pm-card-image"><Image src={path(image)} alt={title} fill sizes="(max-width: 720px) 100vw, 50vw" /></div><div className="pm-card-copy"><h3>{title}</h3><p>{body}</p></div></article>)}</div></div></section>;
}

function More() {
  const devLogos = ["jira", "github", "gitlab", "slack", "sentry", "linear", "figma", "jenkins"];
  const available = { jira: "/pricing/apps/jira.svg", github: "/pricing/apps/github.svg", gitlab: "/pricing/apps/gitlab.svg", slack: "/pricing/apps/slack.svg", sentry: "/pricing/apps/sentry.svg", linear: "/pricing/apps/linear.svg", figma: "/pricing/apps/figma.svg", jenkins: "/pricing/apps/jenkins.svg" };
  return <><section className="pm-results"><div className="pm-shell"><header className="pm-center"><p className="pm-overline">Customer stories</p><h2>Real teams, unreal results</h2><p>From startups to global orgs, software teams use Hashboard to plan smarter, build faster, and ship better.</p></header><div className="pm-quotes">{[["HAWKE", "“Hashboard is the best thing I've rolled out in the past two years.”", "Lauren Makielski", "Chief of Staff"], ["FINASTRA", "“It's a low-code platform that helps us automate processes。”", "Joerg Klueckmann", "VP of Marketing"], ["NAVIGATE", "“Hashboard has made collaboration really easy。”", "Kelli Williams", "SVP Consumer Insights & Strategy"]].map(q => <article key={q[0]}><b>{q[0]}</b><blockquote>{q[1]}</blockquote><p><strong>{q[2]}</strong><br />{q[3]}</p></article>)}</div></div></section><section className="pm-integrations sw-integrations"><div className="pm-shell pm-integrations-grid"><div><p className="pm-overline purple">Integrations</p><h2>Hashboard makes your DevOps stack better</h2><p>Turn disconnected tools into a unified powerhouse with over 1,000+ integrations.</p><Link href="/product">Explore integrations <ArrowRight /></Link></div><div className="sw-dev-grid">{devLogos.map((name, i) => <span key={name}>{available[name] && <Image src={available[name]} width={48} height={48} alt="" onError={e => { e.currentTarget.style.display = "none" }} />}<b>{name}</b><small>{i % 2 ? "Connected" : "Synced"}</small></span>)}</div></div></section><section className="pm-templates"><div className="pm-shell"><header className="pm-center"><p className="pm-overline">Templates</p><h2>Get started fast with templates built for software teams</h2><p>Set up development workflows in minutes with customizable templates for backlog management, sprint planning, release tracking, and more.</p></header><div className="pm-template-grid">{["Ultimate Software Development", "Product Roadmap", "Product Brief", "Release Notes", "Agile Scrum Management", "Bug and Issue Tracking"].map((x, i) => <Link href="/signup" key={x}><span>0{i + 1}</span><h3>{x}</h3><ArrowRight /></Link>)}</div></div></section></>;
}

function FAQ() { const [open, setOpen] = useState(0); return <section className="pm-faq"><div className="pm-shell"><h2>Frequently Asked Questions</h2><div>{faqs.map(([q, a], i) => <article key={q}><button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>{q}<ChevronDown /></button>{open === i && <p>{a}</p>}</article>)}</div></div></section>; }

export default function SoftwarePage() { return <div className="pm-page sw-page"><Hero /><Comparison /><AI />{groups.map((g, i) => <FeatureGroup group={g} index={i} key={g.title} />)}<More /><TeamCtaBanner description="Unify your development process, automate repetitive work, and ship faster together—all in one place." /><TeamReviewMarquee software /><FAQ /></div> }
