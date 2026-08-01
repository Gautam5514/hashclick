"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Bot, CheckCircle2, ChartPie, Link2, LockKeyhole, SlidersHorizontal, UsersRound } from "lucide-react";

const sections = [
  { id:"complete", label:"Complete solution", eyebrow:"Complete solution", title:"The everything app for work", copy:"All the tools you need in one platform, boosting efficiency, enhancing visibility, and empowering everyone with data-driven decisions.", icon:CheckCircle2, cards:[["Projects and Tasks","Simplify project and task management, freeing up time to focus on what matters most.","projects-tasks.png"],["Views and Dashboards","Visualize work in 15+ views including list, board, gantt, with productivity analytics at your fingertips.","views-dashboards.png"],["Docs and Whiteboards","Create, share, and visualize plans with collaborative docs and fully-featured whiteboards.","docs-whiteboards.png"]]},
  { id:"flexible", label:"Fully flexible", eyebrow:"Fully flexible", title:"Perfectly fits all workflows", copy:"ClickUp offers incredible flexibility that empowers teams to work in their own style, while seamlessly collaborating towards shared goals, all from a single platform.", icon:SlidersHorizontal, cards:[["Custom workflows","Designed for how teams want to work. No more workarounds or tradeoffs.","custom-workflows.png"],["Custom Task types","Turn tasks into leads, tickets, and more, fitting the needs of any team.","custom-task-types.png"],["Reusable templates","Start with 100s of prebuilt templates, or build your own for repeated success.","reusable-templates.png"]]},
  { id:"controls", label:"Advanced controls", eyebrow:"Advanced controls", title:"Manage controls and permissions", copy:"Change permissions and security settings for guests, members, and admins. You control what users can and can't see or do for each level of your Workspace.", icon:UsersRound, cards:[["Secure access","Enforce authorized access through SSO, SAML, and 2FA to meet enterprise security standards.","secure-access.png"],["Custom permissions","Design user roles with granular permissions, for precise control and access levels across the workspace.","custom-permissions.png"],["Admin management","Equip admins with intuitive user access management and permissions, maximizing efficiency and operations.","admin-management.png"]]},
  { id:"secure", label:"Secure and reliable", eyebrow:"Secure and reliable", title:"Scale your enterprise confidently", copy:"Your workspace is built with privacy, security, and data residency in mind, adapting to your ever-growing needs and challenges.", icon:LockKeyhole, cards:[["Monitoring and operations","Effortlessly access audit logs, 24/7 monitoring, and comprehensive penetration testing, securing your data around the clock.","monitoring-and-operations.png"],["Regional data residency","Choose from US, EU, or APAC data storage under Regional Data Residency, keeping your data secure within your chosen region.","regional-data-residency.png"],["Your data stays yours","We collect just what's needed to support you and enhance our services, ensuring your data is never shared or sold.","data-stays-yours.png"]]},
  { id:"visibility", label:"Actionable visibility", eyebrow:"Actionable visibility", title:"Visibility without busywork", copy:"Gain real-time insight and visibility into projects, people, and resources—fueling faster, data-driven decisions.", icon:ChartPie, cards:[["Dashboards","See progress at a glance with dashboards across any team, project, or goal.","dashboards.png"],["Analytics","Make smarter decisions with real-time data and analytics support.","analytics.png"],["Goals and OKRs","Keep teams aligned and moving forward with automated OKR tracking.","goals-okrs.png"]]},
  { id:"integrations", label:"100+ Integrations", eyebrow:"Integration", title:"Seamlessly connected", copy:"Connect your entire technology stack and bring every source of work into one searchable place.", icon:Link2, cards:[["Integrations","Instantly connect to Slack, Salesforce, GSuite, Github, and more.","integrations.png"],["Enterprise search","Unified search across all connected apps, docs, and tasks in one place.","universal-search.png"],["ClickUp API","Developers get full access to build custom apps and integrations.","clickup-api.png"]]},
  { id:"ai", label:"AI powered", eyebrow:"ClickUp Brain", title:"AI-powered productivity", copy:"Speed up and simplify work with the world's first neural network connecting tasks, docs, people, and all of your company's knowledge with AI.", icon:Bot, cards:[["AI Knowledge Manager™","Ask questions and get answers from your docs, tasks, and projects.","ai-knowledge-manager.png"],["AI Project Manager™","A side-kick that manages and automates work such as updates.","ai-project-manager.png"],["AI Writer for Work™","Create content and reply quickly with an assistant tailored for work.","ai-writer-for-work.png"]]},
];

export default function FeatureSections() {
  const [active, setActive] = useState("complete");
  const refs = useRef({});

  useEffect(() => {
    let frame = 0;
    const updateActiveSection = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const readingLine = Math.min(240, window.innerHeight * 0.3);
        let current = sections[0].id;
        for (const section of sections) {
          const node = refs.current[section.id];
          if (node && node.getBoundingClientRect().top <= readingLine) current = section.id;
        }
        setActive(current);
      });
    };
    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return <section className="enterprise-features"><div className="enterprise-feature-layout"><div className="enterprise-feature-scroll">{sections.map(section => <article className="enterprise-feature-section" id={`enterprise-${section.id}`} ref={node => { refs.current[section.id]=node; }} key={section.id}><span>{section.eyebrow}</span><h2>{section.title}</h2><p className="enterprise-feature-copy">{section.copy}</p><div className="enterprise-card-grid">{section.cards.map(([title,body,image]) => <div className="enterprise-product-card" key={title}><Image src={`/enterprise/${image}`} alt="" width={838} height={484}/><div><h3>{title}</h3><p>{body}</p></div></div>)}</div>{section.id === "ai" && <div className="enterprise-ai-note"><h3>No training on your data</h3><p>We have strict contracts with all AI sub-processors, explicitly prohibiting the use of your data for model training purposes. Your data is never shared or sold or used in any other way.</p></div>}</article>)}</div><aside className="enterprise-sticky-rail">{sections.map(section => { const Icon=section.icon; return <button type="button" className={active===section.id?"active":""} onClick={() => refs.current[section.id]?.scrollIntoView({behavior:"smooth",block:"start"})} key={section.id}><Icon/><span>{section.label}</span></button>; })}</aside></div></section>;
}
