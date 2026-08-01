const events = [
  ["Post comment to channel", "8:12:45 PM", "New task"],
  ["Summarize weekly report", "8:11:32 PM", "Marketing Backlog"],
  ["Create task", "8:10:18 PM", "Sprint Planning"],
  ["Comment on task", "8:09:05 PM", "Project In Progress"],
  ["Assign task to teammate", "8:07:52 PM", "Team Updates"],
  ["Changed status on task", "8:06:41 PM", "Bug Fixes"],
  ["Update database entry", "8:05:28 PM", "Data Sync"],
  ["Generate analytics report", "8:04:15 PM", "Reporting"],
];

const certs = [
  ["SOC 2", "Type II"],
  ["ISO 27001", "Certified"],
  ["GDPR", "Compliant"],
  ["HIPAA", "Compliant"],
];

export default function Security() {
  return (
    <section className="bn-security" aria-label="Brain² security">
      <div className="bn-container bn-security-inner">
        <div className="bn-security-copy">
          <p className="bn-eyebrow bn-eyebrow-purple">Secure</p>
          <h2 className="bn-h2">
            Your data <em>never trains</em> third-party models
          </h2>
          <p className="bn-security-sub">No third-party data training</p>
          <p className="bn-lede">
            We forbid third-party AI providers from training on your data.
          </p>
          <ul className="bn-certs">
            {certs.map(([k, v]) => (
              <li key={k}>
                <strong>{k}</strong>
                <span>{v}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bn-audit" aria-hidden="true">
          <div className="bn-audit-track">
            {[0, 1].map((g) => (
              <div className="bn-audit-group" key={g}>
                {events.map(([what, when, where]) => (
                  <div className="bn-audit-row" key={`${g}-${what}`}>
                    <span className="bn-audit-what">{what}</span>
                    <span className="bn-audit-meta">
                      {when} <i>•</i> in {where}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
