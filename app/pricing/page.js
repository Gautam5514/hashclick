import PricingPlans from "../components/pricing/PricingPlans";
import CompareTable from "../components/pricing/CompareTable";
import LogoCloud from "../components/shared/LogoCloud";
import Testimonials from "../components/shared/Testimonials";
import Faq from "../components/shared/Faq";
import CtaBanner from "../components/shared/CtaBanner";

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
      <LogoCloud headline="The pricing 5+ million teams already said yes to" />
      <CompareTable />
      <Testimonials />
      <Faq title="Pricing questions, answered" items={faqs} />
      <CtaBanner
        title="Start free. Upgrade when it pays for itself."
        subtitle="No credit card, no sales call, no seat minimums. Most teams are running real work inside an hour."
        secondary={{ label: "Compare plans", href: "#" }}
        showMockup={false}
      />
    </>
  );
}
