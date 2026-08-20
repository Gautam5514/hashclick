import PricingPlans from "../components/pricing/PricingPlans";
import Faq from "../components/shared/Faq";

export const metadata = {
  title: "Hashboard Pricing",
  description: "Explore Hashboard plan options for your team, workflows, and use of Hash AI.",
};

const faqs = [
  {
    q: "Where can I find current Hashboard prices?",
    a: "Contact Hashboard for current plan options and a quote based on the workflows your team needs.",
  },
  {
    q: "Is there a Free Forever plan?",
    a: "Ask the team about current ways to get started, including any available trial or entry plan.",
  },
  {
    q: "How is Hash AI billed?",
    a: "Hash AI options depend on your plan, available models, and expected usage. We’ll explain the current choices when preparing your quote.",
  },
  {
    q: "Are refunds or money-back guarantees available?",
    a: "Refund and cancellation terms depend on the selected plan. Our team can explain the applicable terms before you subscribe.",
  },
  {
    q: "Which payment methods are accepted?",
    a: "Payment options can vary by plan and contract. Contact us to discuss the best setup for your organization.",
  },
  {
    q: "What happens to data after cancellation?",
    a: "Our team can explain the current access, export, retention, and deletion options for your plan.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PricingPlans />
      <Faq title="Pricing questions" description="Talk with us about plans, Hash AI options, and the workflows your team needs." contactHref="/demo" items={faqs} />
    </>
  );
}
