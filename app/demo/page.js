import ComingSoon from "../components/shared/ComingSoon";

export const metadata = { title: "Get a demo" };

export default function DemoPage() {
  return (
    <ComingSoon
      eyebrow="Get a demo"
      title="See it running on your workflow"
      body="A solutions engineer will map your current stack, show the consolidation, and answer the security questions in one 30-minute call."
      links={["Live product walkthrough", "Migration plan for your tools", "Security & compliance Q&A", "Pricing built for your seat count"]}
    />
  );
}
