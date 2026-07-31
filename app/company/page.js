import ComingSoon from "../components/shared/ComingSoon";

export const metadata = { title: "Company" };

export default function CompanyPage() {
  return (
    <ComingSoon
      eyebrow="Company"
      title="Saving the world one day a week"
      body="We build software that gives people back the time their tools were quietly taking."
      links={["About us", "Careers", "Customers", "Partners & consultants", "Affiliates", "Events", "Press & brand", "Public roadmap"]}
    />
  );
}
