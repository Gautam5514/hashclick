import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "../components/ui/Container";
import CtaBanner from "../components/shared/CtaBanner";
import FeatureSections from "../components/enterprise/FeatureSections";
import "./enterprise.css";

export const metadata = {
  title: "Enterprise",
  description: "Powerful, flexible and secure work management for the enterprise.",
};

const capabilityCards = [
  ["99.9% uptime guarantee", "Ensure your operations never skip a beat with our 99.9% uptime guarantee, keeping your workflow smooth and uninterrupted.", "uptime.png"],
  ["Unmatched speed and scalability", "Leverage our exclusive RapidViews DB™ technology for ultimate scalability and performance unmatched by any other solution.", "speed-scalability.png"],
  ["Advanced admin tools", "Everything you need to protect your data, manage access, configure permissions and keep a comprehensive activities log is built-in.", "advanced-admin-tools.png"],
  ["AI-powered workflows", "The world's first neural network connecting tasks, docs, people, and all of your company's knowledge with AI.", "ai-powered-workflows.png"],
  ["Internationally compliant", "Our unwavering commitment to international standards guarantees your data is managed with exceptional care.", "compliance.png"],
  ["Loved by all teams", "Unmatched flexibility, standards, and scale to support any team - no matter the size or complexity.", "loved-by-teams.png"],
  ["Trusted by leadership", "Clear visibility from strategic plans to daily execution, for a single source for updates, risks, and progress.", "trusted-by-leadership.png"],
  ["Endorsed by IT", "Data is encrypted, safeguarded, and fully compliant with HIPAA, GDPR, Privacy Shield, and more.", "endorsed-by-it.png"],
];


const support = [
  ["Self-serve onboarding", "Access complimentary resources, checklists, and templates to customize Hashboard at your pace, creating a workspace uniquely yours.", "self-serve-onboarding.png"],
  ["Guided onboarding", "Our incredible customer success team provides personalized guidance and best practices for you to fully leverage Hashboard's potential.", "guided-onboarding.png"],
  ["Dedicated professional services", "Our specialists assess your needs and tailor a workspace to your business objectives for a streamlined setup and onboarding.", "professional-services.png"],
  ["Dedicated support", "Our award-winning support team, responsive and available 24/7 to support your team no matter the scale or timezone.", "dedicated-support.png"],
  ["Hashboard University", "Enroll in many of our comprehensive courses to deepen your understanding of Hashboard, ensuring it works exactly how you need it to.", "hashboard-university.png"],
  ["Vetted consultants", "Work with our carefully vetted Hashboard consultants for support ranging from compliance advice to strategic platform utilization.", "vetted-consultants.png"],
];

function Stars() {
  return <span aria-label="4.6 out of 5 stars" className="ent-stars">★★★★★</span>;
}

export default function EnterprisePage() {
  return (
    <>
      <section className="ent-hero">
        <Container>
          <div className="ent-hero-copy">
            <span className="ent-kicker">HASHBOARD ENTERPRISE</span>
            <h1>The world&apos;s most powerful,<br/>flexible, and intuitive<br/>enterprise software.</h1>
            <p>Break down silos, align teams, and accelerate AI transformation with Hashboard. Run all your key business<br className="ent-desktop-break"/> processes with ultimate security, scalability, and reliability.</p>
            <div className="ent-actions">
              <Link href="/demo" className="ent-primary">Contact sales <ArrowRight size={17} /></Link>
              <Link href="/signup" className="ent-secondary">Get started free</Link>
            </div>
            <div className="ent-rating"><Stars /><span>25,000+ reviews from</span><div className="ent-review-sites"><i>G</i><i>◇</i><i>➤</i><i>▰</i><i>P</i></div></div>
            <div className="ent-hero-logos"><span>TRUSTED BY THE BEST</span><b>amazon</b><b>NVIDIA</b><b>wayfair</b><b>verizon</b><b>● Spotify</b><b>Stanford</b></div>
            </div>
        </Container>
      </section>

      <section className="ent-trust">
        <Container>
          <div className="ent-stories">
            <article><Image src="/enterprise/cartoon-network.svg" alt="Cartoon Network" width={110} height={56}/><span>Increased output by 2x in half the time.</span><a href="#platform">Read story</a></article>
            <article><Image src="/enterprise/vmware.svg" alt="VMware" width={130} height={48}/><span>8x faster projects and task setup.</span><a href="#platform">Read story</a></article>
            <article><Image src="/enterprise/mayo-clinic.svg" alt="Mayo Clinic" width={80} height={58}/><span>Saved 6h a week with automated workflows.</span><a href="#platform">Watch story</a></article>
          </div>
        </Container>
      </section>

      <section className="ent-capabilities" id="platform">
        <Container>
          <div className="ent-heading"><span>BUILT FOR ENTERPRISE</span><h2>Built for unmatched enterprise scalability, security, and reliability.</h2><p>A platform serious teams can grow into—not out of.</p></div>
          <div className="ent-card-grid">
            {capabilityCards.map(([title, body, image, tone]) => (
              <article className={`ent-cap-card ${tone}`} key={title}>
                <div><h3>{title}</h3><p>{body}</p></div>
                <Image src={`/enterprise/${image}`} alt="" width={550} height={260} sizes="(max-width: 768px) 100vw, 50vw" />
              </article>
            ))}
          </div>
        </Container>
      </section>

      <nav className="ent-anchor"><Container><a href="#complete">Complete solution</a><a href="#controls">Advanced controls</a><a href="#secure">Secure & reliable</a><a href="#ai">AI powered</a><a href="#support">Support</a></Container></nav>

      <FeatureSections />

      <section className="ent-support" id="support">
        <Container>
          <div className="ent-heading"><h2>Supporting your team around the clock and across all fronts</h2><p>Dedicated onboarding, world-class support, and incredibly responsive success managers make getting started and migrating to Hashboard a breeze.</p></div>
          <div className="ent-support-grid">{support.map(([title, body, image]) => <article key={title}><Image src={`/enterprise/${image}`} alt="" width={1080} height={484}/><div><h3>{title}</h3><p>{body}</p></div></article>)}</div>
        </Container>
      </section>

      <section className="enterprise-comparison"><Container><div className="ent-heading"><span>WHY HASHBOARD?</span><h2>Unmatched insight and efficiency</h2><p>Hashboard is the only platform that empowers you to visualize and report on all your data from a single, comprehensive view.</p></div><div className="enterprise-table-wrap"><table><thead><tr><th></th><th>Hashboard</th><th>Monday</th><th>Asana</th><th>Jira</th><th>Notion</th></tr></thead><tbody>{[
        ["Visualize tasks across the entire enterprise in one place, with more than 13 different views for unmatched visibility and seamless workspace management.",[1,1,1,0,0]],
        ["Natively search across your workspace and third-party apps. Get contextual answers with Connected Search and AI.",[1,1,0,0,0]],
        ["Drive informed decisions through comprehensive reporting and dashboards across unlimited projects.",[1,0,1,0,0]],
        ["Boost efficiency by adding tasks to multiple lists simultaneously, cutting duplicate effort.",[1,0,1,0,0]],
      ].map(([label,values]) => <tr key={label}><td>{label}</td>{values.map((value,index) => <td key={index} className={index===0?"clickup-col":""}><i className={value?"yes":"no"}>{value?"✓":"×"}</i></td>)}</tr>)}</tbody></table></div><Image className="enterprise-awards" src="/enterprise/users-love-us.svg" alt="Enterprise software awards" width={1220} height={195}/></Container></section>

      <CtaBanner title="Ready to bring all your work together?" subtitle="See how Hashboard can fit your teams, controls, and growth plan." primaryLabel="Contact sales" primaryHref="/demo" secondaryLabel="Get started free" secondaryHref="/signup" />
    </>
  );
}
