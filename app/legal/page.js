import ComingSoon from "../components/shared/ComingSoon";

export const metadata = { title: "Legal & security" };

export default function LegalPage() {
  return (
    <ComingSoon
      eyebrow="Legal"
      title="Policies, security and status"
      body="Everything you need for a security review, in one place."
      links={["Terms of service", "Privacy policy", "Security overview", "Sub-processors", "System status", "Cookie preferences"]}
    />
  );
}
