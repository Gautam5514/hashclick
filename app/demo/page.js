import ComingSoon from "../components/shared/ComingSoon";

export const metadata = { title: "Get a demo" };

export default function DemoPage() {
  return (
    <ComingSoon
      eyebrow="Get a demo"
      title="See it running on your workflow"
      body="Walk through the Hashboard workflows most relevant to your team and discuss how projects, people, clients, operations, and Hash AI can fit together."
      links={["Live product walkthrough", "Workflow planning", "Hash AI capabilities", "Plan and pricing options"]}
    />
  );
}
