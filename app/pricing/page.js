import PricingPlans from "../components/pricing/PricingPlans";
import SavingsCalculator from "../components/pricing/SavingsCalculator";
import Faq from "../components/shared/Faq";
import { ArrowRight, Bot, GraduationCap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import "./pricing.css";

export const metadata = {
  title: "Pricing",
  description:
    "Free forever for unlimited members. Paid plans from $7 per user/month, with AI available on every tier.",
};

const faqs = [
  {
    q: "How do I upgrade or downgrade my plan?",
    a: "Any Workspace owner or admin can change plans from Settings → Billing. Upgrades take effect immediately and we prorate the difference; downgrades take effect at the end of your current billing period so you keep what you paid for.",
  },
  {
    q: "What payment methods do you accept?",
    a: "All major credit and debit cards, plus ACH and wire transfer for annual contracts. Enterprise customers can pay by invoice with net terms.",
  },
  {
    q: "Do you really offer a money-back guarantee?",
    a: "Yes. If the platform isn't right for your team, contact support within 30 days of your first payment and we'll refund it in full — no forms, no retention call.",
  },
  {
    q: "Are guests free?",
    a: "Guests are free on every paid plan. Unlimited includes 5 guests per paid seat and Business includes 10, with read-only or comment permissions you control.",
  },
  {
    q: "How does AI billing work?",
    a: "AI is a per-user add-on that works on any plan, including Free. Brain is $9 per user/month and includes 1,500 AI Super Credits. If you exceed them, credits are $0.001 each in blocks of 10,000 — and under our Super Fair Billing policy, when underlying model costs fall, your credit costs fall with them.",
  },
  {
    q: "Do I have to pay for every member of my team?",
    a: "You pay for members who need to create and edit work. Viewers and clients can be added as free guests, and the Free Forever plan supports unlimited members at no cost.",
  },
  {
    q: "What happens to my data if I cancel?",
    a: "Your Workspace stays accessible on the Free plan and you can export everything — tasks, docs, comments and attachments — to CSV or via the API at any time. We never hold data hostage.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PricingPlans />
      <section className="fair-billing">
        <div className="pricing-container fair-inner"><div><span>SUPER FAIR BILLING POLICY</span><h2>When we optimize,<br /><em>you save $</em></h2><p>When our teams save on AI costs, we pass the savings to you. When sudden increases occur, we subsidize the cost and adjust pricing gradually and transparently.</p><Link href="/legal">See our billing policy <ArrowRight size={15} /></Link></div><div className="fair-live-art"><Image src="/pricing/super-agent-billing-policy.webp" alt="Super Agent price per credit — $0.001" width={630} height={558} sizes="(max-width: 900px) 100vw, 50vw" /></div></div>
      </section>
      <section className="assist-section"><div className="pricing-container assist-card"><div><span>CLICKUP ASSIST</span><h2>Live training and support for AI.</h2><p>Personalized expert guidance for setup and success.</p><ul><li><Bot />2 hours of 1:1 expert time/month</li><li><GraduationCap />Guidance on setting up AI agents</li></ul><Link href="/signup">Get started <ArrowRight size={15} /></Link></div><div className="assist-live-art"><Image src="/pricing/clickup-assist-bg.png" alt="ClickUp Assist workspace and AI agent interface" width={1972} height={600} sizes="(max-width: 900px) 100vw, 55vw" /><span className="assist-play"><Image src="/pricing/play-icon.svg" alt="" width={24} height={24} /></span></div></div></section>
      <SavingsCalculator />
      <Faq title="Frequently asked questions" description="Find answers to your questions right here, and don't hesitate to contact us if you couldn't find what you're looking for." contactHref="/demo" items={faqs} />
    </>
  );
}
