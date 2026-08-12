import LegalLayout, { LegalSection, LegalCallout } from "./LegalLayout";

const SECTIONS = [
  { id: "acceptance", label: "Acceptance of Terms" },
  { id: "eligibility", label: "Eligibility & Account Registration" },
  { id: "workspaces", label: "Workspaces, Roles & Administrators" },
  { id: "billing", label: "Subscription Plans, Billing & Renewal" },
  { id: "acceptable-use", label: "Acceptable Use Policy" },
  { id: "client-data", label: "Client Data, Vault & Your Responsibilities" },
  { id: "integrations", label: "Third-Party Integrations" },
  { id: "ip", label: "Intellectual Property & Feedback" },
  { id: "warranties", label: "Disclaimer of Warranties" },
  { id: "liability", label: "Limitation of Liability" },
  { id: "termination", label: "Termination & Suspension" },
  { id: "governing-law", label: "Governing Law & Dispute Resolution" },
  { id: "changes", label: "Changes to These Terms" },
  { id: "contact", label: "Contact Us" },
];

export default function TermsPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Terms of Service"
      effectiveDate="May 30, 2026"
      version="1.8.0"
      sections={SECTIONS}
    >
      <p className="mb-10 text-[15.5px] leading-[1.75] text-ink-secondary">
        These Terms of Service ("Terms") govern access to and use of Hashboard, operated by{" "}
        <strong className="font-[650] text-ink">Triplehash Technologies</strong> ("Triplehash", "Hashboard",
        "we", "us", "our") from Ranchi, Jharkhand, India. By creating a workspace or otherwise using the
        Service, you agree to these Terms on behalf of yourself and, where applicable, the organization you
        represent.
      </p>

      <LegalSection id="acceptance" number="01" label="Acceptance of Terms">
        <p>
          By registering for a Hashboard workspace, accessing a workspace as a member, or using any part of
          the Service, you confirm that you have read, understood, and agree to be bound by these Terms and
          our Privacy Policy. If you do not agree, you are restricted from exploring or using Hashboard's
          modules.
        </p>
      </LegalSection>

      <LegalSection id="eligibility" number="02" label="Eligibility & Account Registration">
        <p>
          You must be at least 18 years old and able to form a binding contract to create a Hashboard
          workspace. You agree to provide accurate registration information and to keep your login
          credentials confidential — you're responsible for all activity that happens under your account.
        </p>
      </LegalSection>

      <LegalSection id="workspaces" number="03" label="Workspaces, Roles & Administrators">
        <p>
          Every Hashboard workspace has one or more administrators. Administrators are responsible for
          managing member access, assigning roles, configuring Vault permissions, and for all actions taken
          within their workspace's domain — including actions taken by members they invite.
        </p>
        <p>
          Hashboard enforces the role-based access controls an administrator configures, but it is the
          administrator's responsibility to keep those roles accurate and to remove access promptly when a
          team member or client relationship ends.
        </p>
      </LegalSection>

      <LegalSection id="billing" number="04" label="Subscription Plans, Billing & Renewal">
        <p>
          Paid workspaces are billed on a monthly or annual recurring basis, based on active seats, spaces,
          or modules enabled. Prices and plan details are shown at checkout and on our pricing page.
        </p>
        <LegalCallout>
          Subscriptions <strong>renew automatically</strong> at the end of each billing term unless
          cancelled beforehand from the billing dashboard.
        </LegalCallout>
        <p>
          You're responsible for keeping payment details current. Except where required by law, fees already
          paid are non-refundable, and downgrades or cancellations take effect at the end of the current
          billing cycle.
        </p>
      </LegalSection>

      <LegalSection id="acceptable-use" number="05" label="Acceptable Use Policy">
        <p>You agree not to, and not to allow anyone else to:</p>
        <ul>
          <li>Upload malicious code, malware, or anything designed to disrupt Hashboard or other users.</li>
          <li>Attempt denial-of-service attacks or otherwise interfere with the Service's availability.</li>
          <li>Attempt to spoof, bypass, or defeat the biometric attendance verification feature.</li>
          <li>Reverse engineer, decompile, or attempt to extract the source code of the Service, except where permitted by law.</li>
          <li>Access another workspace, account, or Vault entry without authorization.</li>
          <li>Use Hashboard to store or transmit content that is unlawful, infringing, or violates a third party's rights.</li>
        </ul>
        <p>Violating this policy may result in suspension or termination under Section 11.</p>
      </LegalSection>

      <LegalSection id="client-data" number="06" label="Client Data, Vault & Your Responsibilities">
        <p>
          If you invite clients into isolated client rooms or store their information in Hashboard, you act
          as the data controller for that information, and Hashboard acts as your data processor. You are
          responsible for having the legal right to share that data through the Service.
        </p>
        <p>
          Credentials and secrets you store in Vault are encrypted with AES-256, but you remain responsible
          for who you grant Vault access to within your workspace.
        </p>
      </LegalSection>

      <LegalSection id="integrations" number="07" label="Third-Party Integrations">
        <p>
          Hashboard may let you connect third-party services. Those services are governed by their own
          terms and privacy policies, and Hashboard is not responsible for how they handle data once it
          leaves our Service. You can disconnect an integration at any time from workspace settings.
        </p>
      </LegalSection>

      <LegalSection id="ip" number="08" label="Intellectual Property & Feedback">
        <p>
          Hashboard's platform, source code, design, and branding are the exclusive property of Triplehash
          Technologies. Subject to your compliance with these Terms, we grant you a{" "}
          <strong>limited, non-exclusive, revocable license</strong> to access and use the Service for your
          organization's internal business purposes.
        </p>
        <p>
          You retain all rights to the content and data you upload to your workspace. If you send us
          feedback or suggestions, you agree we may use them to improve Hashboard without any obligation to
          you.
        </p>
      </LegalSection>

      <LegalSection id="warranties" number="09" label="Disclaimer of Warranties">
        <p>
          The Service is provided <strong>"as is"</strong> and <strong>"as available,"</strong> without
          warranties of any kind, express or implied, including merchantability, fitness for a particular
          purpose, or non-infringement. We do not warrant that the Service will be uninterrupted, error-free,
          or completely secure.
        </p>
      </LegalSection>

      <LegalSection id="liability" number="10" label="Limitation of Liability">
        <p>
          To the maximum extent permitted by law, Triplehash Technologies will not be liable for any
          indirect, incidental, special, or consequential damages, or for any loss of profits, data, or
          business arising from your use of, or inability to use, the Service. Our total liability for any
          claim arising from these Terms will not exceed the amount you paid us in the twelve months
          preceding the claim.
        </p>
      </LegalSection>

      <LegalSection id="termination" number="11" label="Termination & Suspension">
        <p>
          Workspace administrators may cancel their subscription at any time from the billing dashboard.
          Hashboard may suspend or terminate access to the Service, with notice where reasonably possible,
          for violations of these Terms, non-payment, or activity that puts other users or the Service at
          risk.
        </p>
        <p>
          On termination, your right to access the Service ends immediately; data export requests made
          before termination will be honored where technically feasible.
        </p>
      </LegalSection>

      <LegalSection id="governing-law" number="12" label="Governing Law & Dispute Resolution">
        <p>
          These Terms are governed by, interpreted, and enforced in accordance with the laws of India,
          without regard to conflict-of-law principles. Any dispute arising from these Terms or your use of
          Hashboard will be subject to the exclusive jurisdiction of the state courts located in{" "}
          <strong>Ranchi, Jharkhand, India</strong>.
        </p>
      </LegalSection>

      <LegalSection id="changes" number="13" label="Changes to These Terms">
        <p>
          We may revise these Terms as Hashboard evolves. We'll notify workspace administrators of material
          changes by email or in-product notice before they take effect. Continued use of the Service after
          changes take effect constitutes acceptance of the revised Terms.
        </p>
      </LegalSection>

      <LegalSection id="contact" number="14" label="Contact Us">
        <p>
          Questions about these Terms can be sent to{" "}
          <a href="mailto:connect@triplehash.in" className="text-accent-purple underline underline-offset-2">
            connect@triplehash.in
          </a>
          , or by post to:
        </p>
        <p>
          Triplehash Technologies
          <br />
          Ranchi, Jharkhand, India
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
