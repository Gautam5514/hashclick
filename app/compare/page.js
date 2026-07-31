import ComingSoon from "../components/shared/ComingSoon";

export const metadata = { title: "Compare" };

export default function ComparePage() {
  return (
    <ComingSoon
      eyebrow="Compare"
      title="How we stack up"
      body="Side-by-side breakdowns against the tools most teams are consolidating away from — features, pricing and migration effort."
      links={["vs. Atlassian", "vs. Asana", "vs. Monday", "vs. Notion", "vs. Smartsheet", "vs. Wrike", "vs. Airtable", "vs. Microsoft"]}
    />
  );
}
