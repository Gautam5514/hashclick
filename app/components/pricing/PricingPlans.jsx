"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const plans = [
  { name: "Free Forever", monthly: 0, yearly: 0, features: ["60MB Storage", "Unlimited Tasks", "Unlimited Free Plan Members", "Two-Factor Authentication", "Collaborative Docs", "Kanban Boards", "Sprint Management", "Calendar View", "Basic Custom Field Manager", "In-App Video Recording", "24/7 Support", "1 Form"] },
  { name: "Unlimited", monthly: 10, yearly: 7, features: ["Unlimited Spaces, Folders, and Forms", "Unlimited Gantt Charts", "Unlimited Integrations", "Unlimited Storage", "Unlimited Custom Fields", "Native Time Tracking", "Goals & Portfolio Management", "Guests With Permission Control", "Resource Management", "ClickUp Chat", "Email in ClickUp", "Integrations like Slack, Hubspot, Google Drive, and more"] },
  { name: "Business", monthly: 19, yearly: 12, popular: true, features: ["Unlimited Dashboards with Advanced Cards", "Unlimited Message History", "Unlimited Activity Views", "Unlimited Timeline Views", "Webhooks & Automation Integrations", "5K Automations Per Month", "Mind Mapping", "Private Whiteboards", "Custom Exporting", "Sprint Points & Reporting", "Portfolio Workload Management", "Google SSO", "SMS 2-Factor Authentication", "Unlimited Proofing"] },
  { name: "Enterprise", custom: true, features: ["Enterprise Permissions and Governance", "Unlimited Custom Roles", "SAML SSO & SCIM Provisioning", "Audit Log", "Session Management", "Enterprise API", "250K Automations Per Month", "Custom Branding", "Default Personal Views", "MSA & HIPAA Available", "Data Residency", "Enterprise-Scale Automations & Integrations", "Enterprise-Scale API Usage", "Live Onboarding Training", "Customer Success Manager", "Access to Managed Services"] },
];

const aiPlans = [
  { name: "Free Forever", price: 0, label: "Start using AI", features: ["Try AI across chat, tasks and docs", "Trial access to advanced AI features", "Upgrade at any time"] },
  { name: "Brain AI", price: 9, label: "Highlights", features: ["Unlimited Brain Assistant", "Unlimited @Brain Agent", "Unlimited AI chat — Claude, ChatGPT, Gemini", "Expanded use of Premium AI Models", "Unlimited AI writing", "Enterprise Search — Workspace"], credits: "+1,500 AI Super Credits" },
  { name: "Everything AI", price: 28, label: "Best for full agentic suite", recommended: true, features: ["Unlimited Ambient Answers", "Unlimited AI Notetaker", "Unlimited Image Generation *", "Unlimited AI Fields", "Unlimited AI Automations & Dashboards", "Unlimited AI Assign & Prioritize", "3X more usage of Super Agents", "Enterprise Search — Private & Workspace"], credits: "+5,000 AI Super Credits" },
];

function BillingToggle({ yearly, onChange, saving = "30%" }) {
  return <div className="price-toggle-wrap"><span>Save up to {saving} with yearly</span><div className="price-toggle"><button type="button" className={!yearly ? "active" : ""} onClick={() => onChange(false)}>Monthly</button><button type="button" className={yearly ? "active" : ""} onClick={() => onChange(true)}>Yearly</button></div></div>;
}

function PlanCard({ plan, yearly }) {
  const price = yearly ? plan.yearly : plan.monthly;
  const prior = plan.name === "Unlimited" ? "Free Forever" : plan.name === "Business" ? "Unlimited" : "Business";
  return <article className={`price-card ${plan.popular ? "popular" : ""}`}>
    <div className="price-summary">
      <div className="price-card-head"><h3>{plan.name}</h3>{plan.popular && <span>Popular</span>}</div>
      <div className="price-amount">{plan.custom ? <strong className="custom-demo">Get a custom demo</strong> : price === 0 ? null : <><strong>${price}</strong><span>Per user/month, billed {yearly ? "yearly" : "monthly"}</span></>}</div>
      <Link href={plan.custom ? "/demo" : "/signup"} className="price-cta">{plan.custom ? "Contact sales" : plan.name === "Free Forever" ? "Get Started" : "Get started"}</Link>
    </div>
    <div className="price-features"><div className="price-includes">{plan.name === "Free Forever" ? "Key features:" : `Everything in ${prior}, plus:`}</div><ul>{plan.features.map(feature => <li key={feature}><Check size={15}/><span>{feature}</span></li>)}</ul>{plan.name !== "Free Forever" && <em>and much more...</em>}</div>
  </article>;
}

export default function PricingPlans() {
  const [yearly, setYearly] = useState(true);
  const [aiYearly, setAiYearly] = useState(true);
  return <>
    <section className="pricing-hero"><div className="pricing-container"><h1>The best work solution,<br/><span>for the best price.</span></h1><div className="price-controls"><div className="price-guarantee"><Check size={17}/>100% Money-back Guarantee</div><BillingToggle yearly={yearly} onChange={setYearly}/></div><div className="price-grid" id="compare">{plans.map(plan => <PlanCard key={plan.name} plan={plan} yearly={yearly}/>)}</div></div></section>
    <section className="pricing-trusted"><div className="pricing-container"><span>TRUSTED BY THE BEST</span><div><b>Kraft Heinz</b><b>Deloitte.</b><b>Pfizer</b><b>Adobe</b><b>American</b><b>NBCUniversal</b></div><a href="#compare">Complete feature list⌄</a></div></section>
    <section className="ai-pricing" id="ai-pricing"><div className="pricing-container"><div className="ai-heading"><div className="ai-chip">[ AI PRICING ]</div><h2>The world&apos;s most<br/>advanced AI for work</h2><BillingToggle yearly={aiYearly} onChange={setAiYearly} saving="20%"/></div><div className="ai-table"><div className="ai-price-grid">{aiPlans.map(plan => <article className="ai-price-card" key={plan.name}><div className="ai-summary"><div className="ai-title-row"><h3>{plan.name}</h3>{plan.recommended && <span className="ai-recommended">Recommended</span>}</div><div className="ai-amount">{plan.price !== 0 && <><strong>${aiYearly ? plan.price : Math.ceil(plan.price * 1.2)}</strong><span>Per user/month</span></>}</div><Link href="/signup">Get started</Link></div><div className="ai-features"><h4>{plan.label}</h4><ul>{plan.features.map(item => <li key={item}><Check size={16}/>{item}</li>)}</ul>{plan.credits && <div className="ai-credits">{plan.credits}<small>user / mo for {plan.name === "Brain AI" ? "Agents, Automations, & more" : "Super Agents"}</small></div>}</div></article>)}</div><div className="ai-bottom-grid"><article><div className="ai-bottom-title"><h3>AI Super Credits</h3><strong>$0.001<small>$10 per 10,000 credits</small></strong></div><p>Every AI plan includes a monthly credit allowance shared across your Workspace. Credits fuel Super Agents, AI Fields, Automations, Image Generation, and more.</p><Link href="/signup">Get AI Super Credits <ArrowRight size={15}/></Link></article><article><h3>ClickUp Certified Agents</h3><p>Built, tested, and verified by ClickUp&apos;s AI experts. The only agents that power complex workflows, with complete context across your tools and teams.</p><Link href="/demo">Book a demo <ArrowRight size={15}/></Link></article></div></div><p className="ai-policy-note">* Usage subject to our fair use policy</p></div></section>
  </>;
}
