import BrainHero from "../components/ai/BrainHero";
import {
  BrainPillars,
  Benchmarks,
  RolesGrid,
  WhatsNew,
  Outputs,
  BrainSecurity,
} from "../components/ai/BrainSections";
import Faq from "../components/shared/Faq";
import CtaBanner from "../components/shared/CtaBanner";

export const metadata = {
  title: "Hash AI — workspace assistance inside Hashboard",
  description:
    "Ask about permitted Hashboard data and use supported actions with an AI model you select.",
};

const faqs = [
  {
    q: "How is this different from ChatGPT, Claude or Gemini?",
    a: "Hash AI works inside Hashboard. It can use workspace information your role is permitted to access and perform supported Hashboard actions when you request them.",
  },
  {
    q: "What information can Hash AI access?",
    a: "Access follows your company, role, and workspace permissions. Hash AI uses information that the signed-in user is authorized to access.",
  },
  {
    q: "What can Hash AI help with?",
    a: "Supported workflows include questions and actions involving projects, tasks, people, attendance, leave, clients, leads, meetings, invoices, expenses, payroll, and other available workspace tools.",
  },
  {
    q: "Does Hash AI work autonomously?",
    a: "No. Hash AI responds to user requests and uses supported tools. It does not independently run a team or perform unsupported background work.",
  },
  {
    q: "Can I choose which model handles a request?",
    a: "Yes. You choose from the models available in your workspace. Hashboard does not claim to automatically choose the best model for every request.",
  },
  {
    q: "Does Hash AI learn my personality or writing style?",
    a: "No. Hash AI does not claim to learn how you or your team talk. Its useful context comes from current, permitted workspace information supplied to the conversation.",
  },
];

export default function AiPage() {
  return (
    <>
      <BrainHero />
      <BrainPillars />
      <Benchmarks />
      <RolesGrid />
      <WhatsNew />
      <Outputs />
      <BrainSecurity />
      <Faq title="Hash AI questions" items={faqs} />
      <CtaBanner
        title="Bring workspace questions and actions into one conversation"
        subtitle="Choose an available model, ask about the work you can access, and use supported Hashboard actions from the same interface."
        primary={{ label: "Try Hash AI", href: "/signup" }}
        secondary={{ label: "Explore Hash AI", href: "/brain" }}
        showMockup={false}
      />
    </>
  );
}
