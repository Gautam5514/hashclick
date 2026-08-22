import { Fragment } from "react";
import { Check, Minus } from "lucide-react";
import { Container, Section } from "../ui/Container";
import { SectionHeading } from "../ui/Bits";
import { cn } from "@/lib/utils";

const tiers = ["Free", "Unlimited", "Business", "Enterprise"];

const groups = [
  {
    group: "Core",
    rows: [
      ["Tasks and subtasks", "Unlimited", "Unlimited", "Unlimited", "Unlimited"],
      ["Storage", "60MB", "Unlimited", "Unlimited", "Unlimited"],
      ["Members", "Unlimited", "Unlimited", "Unlimited", "Unlimited"],
      ["Guests", "5", "5 per paid seat", "10 per paid seat", "Custom"],
      ["Views (List, Board, Calendar)", true, true, true, true],
      ["Gantt & Timeline", false, true, true, true],
      ["Workload & Resource management", false, true, true, true],
      ["Portfolios", false, "Limited", true, true],
    ],
  },
  {
    group: "Automation & AI",
    rows: [
      ["Automations per month", "100", "1,000", "5,000", "250,000"],
      ["AI assistant", "Trial", "Add-on", "Add-on", "Add-on"],
      ["Super Agents", false, "Add-on", "Add-on", "Add-on"],
      ["AI automation builder", false, false, true, true],
      ["Connected apps & MCP", false, "Limited", true, true],
    ],
  },
  {
    group: "Reporting",
    rows: [
      ["Dashboards", "100 uses", "Unlimited", "Unlimited", "Unlimited"],
      ["Advanced dashboard widgets", false, false, true, true],
      ["Sprint reporting", false, false, true, true],
      ["Custom exporting", false, false, true, true],
      ["Message & activity history", "90 days", "Unlimited", "Unlimited", "Unlimited"],
    ],
  },
  {
    group: "Security & administration",
    rows: [
      ["Two-factor authentication", true, true, true, true],
      ["Google SSO", false, false, true, true],
      ["SAML SSO & SCIM", false, false, false, true],
      ["Custom roles & permissions", false, false, "Limited", "Unlimited"],
      ["Audit log", false, false, false, true],
      ["HIPAA compliance", false, false, false, true],
      ["Custom branding & white labeling", false, false, false, true],
      ["Dedicated success manager", false, false, false, true],
      ["24/7 support", true, true, "Priority", "Dedicated"],
    ],
  },
];

function Cell({ value }) {
  if (value === true) {
    return (
      <Check className="mx-auto size-4 text-accent-green" strokeWidth={3} />
    );
  }
  if (value === false) {
    return <Minus className="mx-auto size-4 text-ink-disabled" />;
  }
  return (
    <span className="text-[13px] font-medium text-ink-secondary">{value}</span>
  );
}

export default function CompareTable() {
  return (
    <Section>
      <Container size="default">
        <SectionHeading
          eyebrow="Compare plans"
          title="Every feature, side by side"
          subtitle="No feature gating games — the free plan is genuinely usable, and the paid tiers add scale and governance."
        />

        <div className="mt-12 overflow-x-auto rounded-panel border border-line">
          <table className="w-full min-w-[720px] border-collapse text-left">
            <thead className="sticky top-0 z-10 bg-bg-main">
              <tr className="border-b border-line">
                <th
                  scope="col"
                  className="px-6 py-5 text-[13px] font-bold tracking-[0.06em] text-ink-tertiary uppercase"
                >
                  Feature
                </th>
                {tiers.map((t, i) => (
                  <th
                    key={t}
                    scope="col"
                    className={cn(
                      "px-5 py-5 text-center text-[14px] font-extrabold text-ink",
                      i === 2 && "bg-accent-purple-badge/60",
                    )}
                  >
                    {t}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {groups.map((g) => (
                <Fragment key={g.group}>
                  <tr className="bg-bg-box">
                    <th
                      scope="colgroup"
                      colSpan={5}
                      className="px-6 py-3 text-left text-[12px] font-bold tracking-[0.08em] text-ink uppercase"
                    >
                      {g.group}
                    </th>
                  </tr>
                  {g.rows.map((row) => (
                    <tr
                      key={row[0]}
                      className="border-t border-line transition-colors hover:bg-bg-box/60"
                    >
                      <th
                        scope="row"
                        className="px-6 py-3.5 text-left text-[13.5px] font-medium text-ink"
                      >
                        {row[0]}
                      </th>
                      {row.slice(1).map((v, i) => (
                        <td
                          key={i}
                          className={cn(
                            "px-5 py-3.5 text-center",
                            i === 2 && "bg-accent-purple-badge/30",
                          )}
                        >
                          <Cell value={v} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </Section>
  );
}
