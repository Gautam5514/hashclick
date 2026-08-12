import LegalLayout, { LegalSection, LegalCallout } from "./LegalLayout";

const SECTIONS = [
  { id: "scope", label: "Scope of This Policy" },
  { id: "information-we-collect", label: "Information We Collect" },
  { id: "how-we-use-information", label: "How We Use Your Information" },
  { id: "biometric-attendance", label: "Biometric Attendance & Face Verification" },
  { id: "vault-security", label: "Vault, Spaces & Credential Security" },
  { id: "how-we-share", label: "How We Share Information" },
  { id: "cookies", label: "Cookies & Similar Technologies" },
  { id: "data-retention", label: "Data Retention" },
  { id: "security-measures", label: "Security Measures" },
  { id: "your-rights", label: "Your Rights & Choices" },
  { id: "childrens-privacy", label: "Children's Privacy" },
  { id: "international-transfers", label: "International Data Transfers" },
  { id: "changes", label: "Changes to This Policy" },
  { id: "contact", label: "Contact Us" },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Privacy Policy"
      effectiveDate="May 30, 2026"
      version="2.4.1"
      sections={SECTIONS}
    >
      <p className="mb-10 text-[15.5px] leading-[1.75] text-ink-secondary">
        Hashboard is an internal operating system for agencies — team spaces, client rooms, credentials,
        attendance, and billing in one workspace. This policy explains what we collect while you and your
        team use it, why we collect it, and the choices you have. It's written and operated by{" "}
        <strong className="font-[650] text-ink">Triplehash Technologies</strong> ("Triplehash", "Hashboard",
        "we", "us", "our"), headquartered in Ranchi, Jharkhand, India.
      </p>

      <LegalSection id="scope" number="01" label="Scope of This Policy">
        <p>
          This Privacy Policy applies to hashboard.in, the Hashboard web application, and any related
          services we operate (together, the "Service"). It covers personal data belonging to workspace
          administrators, team members, and — where applicable — the clients they invite into isolated
          client rooms.
        </p>
        <p>
          It does not cover third-party sites you may reach through links inside Hashboard, or the privacy
          practices of the individual companies who use Hashboard to run their own agency (each of them is
          responsible for how they configure and use their workspace).
        </p>
      </LegalSection>

      <LegalSection id="information-we-collect" number="02" label="Information We Collect">
        <p>We collect the information needed to run a workspace, plus what you choose to put into it:</p>
        <ul>
          <li><strong>Account details</strong> — name, work email, phone number, role, and password (stored hashed, never in plain text).</li>
          <li><strong>Workspace & operational data</strong> — tasks, projects, timelines, files, and boards you and your team create.</li>
          <li><strong>Client portal data</strong> — information your clients submit inside the isolated rooms you set up for them.</li>
          <li><strong>Attendance & timesheet data</strong> — clock-in/clock-out timestamps and the pass/fail result of biometric verification (see Section 4).</li>
          <li><strong>Communication data</strong> — messages sent through Hashboard's built-in channels and comments.</li>
          <li><strong>Billing data</strong> — plan, seat count, and invoices. Card details are handled directly by our payment processor; Hashboard never stores full card numbers.</li>
          <li><strong>Device & usage data</strong> — IP address, browser type, and log data collected automatically for security and reliability.</li>
        </ul>
      </LegalSection>

      <LegalSection id="how-we-use-information" number="03" label="How We Use Your Information">
        <p>We use the information above to:</p>
        <ul>
          <li>Run core workspace modules — task boards, payroll and leave calculations, invoicing, and calendar scheduling.</li>
          <li>Power collaboration features such as messaging, comments, and secure file sharing.</li>
          <li>Authenticate sign-ins and enforce the role-based permissions your workspace administrator sets.</li>
          <li>Send service notifications — meeting links, task assignments, billing receipts, and security alerts.</li>
          <li>Monitor for abuse, debug issues, and improve reliability and performance.</li>
        </ul>
        <p>We do not use your workspace content to train third-party AI or advertising models.</p>
      </LegalSection>

      <LegalSection id="biometric-attendance" number="04" label="Biometric Attendance & Face Verification">
        <p>
          Hashboard's optional face-verification attendance feature runs entirely in your browser. The
          camera frame is processed locally on the device — it is never uploaded, streamed, or stored as
          video or audio on our servers.
        </p>
        <LegalCallout>
          Only the final confirmation result — <strong>Authorized</strong> or <strong>Unauthorized</strong>{" "}
          — together with a timestamp, is sent to Hashboard to log attendance. Raw camera footage never
          leaves the employee's device.
        </LegalCallout>
        <p>
          Workspace administrators choose whether to enable this feature. Employees can request the local
          verification model be reset or disabled through their workspace admin at any time.
        </p>
      </LegalSection>

      <LegalSection id="vault-security" number="05" label="Vault, Spaces & Credential Security">
        <p>
          Hashboard's Vault lets teams store shared logins, API keys, and client credentials inside a
          workspace. Everything stored in Vault is protected with <strong>AES-256 encryption</strong> at
          rest, and access is scoped to the roles a workspace administrator explicitly grants.
        </p>
        <p>
          We cannot read the contents of your Vault to fulfil support requests without your explicit,
          time-boxed authorization.
        </p>
      </LegalSection>

      <LegalSection id="how-we-share" number="06" label="How We Share Information">
        <p>Information is only shared in the following circumstances:</p>
        <ul>
          <li><strong>With your workspace members</strong> — visibility follows the roles and permissions your administrator configures.</li>
          <li><strong>With integrations you connect</strong> — only the data required for that integration to function, and only after you authorize it.</li>
          <li><strong>With service providers</strong> — infrastructure, payment processing, and email delivery vendors bound by confidentiality and data-processing agreements.</li>
          <li><strong>For legal compliance</strong> — where required to comply with a valid legal process or to protect the rights, safety, or property of Hashboard and our users.</li>
        </ul>
        <LegalCallout>
          We do not sell, rent, or distribute your workspace records to third-party data brokers or
          advertisers — under any circumstances.
        </LegalCallout>
      </LegalSection>

      <LegalSection id="cookies" number="07" label="Cookies & Similar Technologies">
        <p>
          We use essential cookies to keep you signed in and to remember workspace preferences, plus a
          small set of analytics cookies to understand product usage and fix bugs. We do not use
          third-party advertising cookies.
        </p>
        <p>You can control or clear cookies through your browser settings at any time.</p>
      </LegalSection>

      <LegalSection id="data-retention" number="08" label="Data Retention">
        <p>
          We retain workspace data for as long as your account is active. If a workspace is cancelled, we
          retain the data for a limited recovery window before permanent deletion, unless a longer period
          is required by law or by your billing and tax records obligations.
        </p>
        <p>Attendance and biometric confirmation logs are retained only as long as your workspace's payroll and compliance settings require.</p>
      </LegalSection>

      <LegalSection id="security-measures" number="09" label="Security Measures">
        <p>We protect data in transit and at rest through:</p>
        <ul>
          <li>HTTPS/TLS encryption on every connection to Hashboard.</li>
          <li>AES-256 encryption for Vault credentials and sensitive configuration.</li>
          <li>Role-based access controls, enforced at both the application and infrastructure layer.</li>
          <li>Automatic session timeouts and re-authentication for sensitive actions.</li>
          <li>Regular dependency updates and internal security reviews.</li>
        </ul>
        <p>No system is 100% secure, but we treat every workspace's data as if it were our own.</p>
      </LegalSection>

      <LegalSection id="your-rights" number="10" label="Your Rights & Choices">
        <p>Depending on where you're located, you may have the right to:</p>
        <ul>
          <li>Access a copy of the personal data we hold about you.</li>
          <li>Correct inaccurate or incomplete information from your account settings.</li>
          <li>Request deletion of your personal data, subject to our retention obligations above.</li>
          <li>Export your workspace data in a portable format.</li>
          <li>Object to or restrict certain processing of your data.</li>
        </ul>
        <p>
          Hashboard's practices are designed to be <strong>GDPR</strong> and <strong>CCPA</strong>{" "}
          compatible for the users and clients who fall under those frameworks. To exercise any of these
          rights, contact us using the details in Section 14.
        </p>
      </LegalSection>

      <LegalSection id="childrens-privacy" number="11" label="Children's Privacy">
        <p>
          Hashboard is a workplace tool built for agencies and their teams. It is not directed at, and we do
          not knowingly collect personal data from, anyone under the age of 16. If you believe a minor has
          provided us with personal data, contact us and we will remove it.
        </p>
      </LegalSection>

      <LegalSection id="international-transfers" number="12" label="International Data Transfers">
        <p>
          Hashboard is operated from India, and workspace data is primarily processed and stored there. If
          your team or clients access Hashboard from outside India, your information may be transferred to,
          stored, and processed in India or in the countries where our infrastructure and service providers
          operate, under safeguards consistent with this policy.
        </p>
      </LegalSection>

      <LegalSection id="changes" number="13" label="Changes to This Policy">
        <p>
          We may update this policy as Hashboard evolves. Material changes will be announced inside the
          product or by email to workspace administrators before they take effect. The "Effective" date at
          the top of this page always reflects the current version.
        </p>
      </LegalSection>

      <LegalSection id="contact" number="14" label="Contact Us">
        <p>
          Questions, requests, or concerns about this policy can be sent to our privacy team at{" "}
          <a href="mailto:connect@triplehash.in" className="text-accent-purple underline underline-offset-2">
            connect@triplehash.in
          </a>
          , or by post to:
        </p>
        <p>
          Triplehash Technologies
          <br />
          Attn: Privacy Officer
          <br />
          Ranchi, Jharkhand, India
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
