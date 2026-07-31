import BrainHero from "../components/ai/BrainHero";
import {
  BrainPillars,
  Benchmarks,
  RolesGrid,
  WhatsNew,
  Outputs,
  BrainSecurity,
} from "../components/ai/BrainSections";
import SuperAgents from "../components/home/SuperAgents";
import Faq from "../components/shared/Faq";
import CtaBanner from "../components/shared/CtaBanner";

export const metadata = {
  title: "Brain² — your company's AI",
  description:
    "Multiplayer AI with your context. Every model in one subscription. A self-updating company brain that finishes the work.",
};

const faqs = [
  {
    q: "How is this different from ChatGPT, Claude or Gemini?",
    a: "Those are excellent general models with no idea what your company is doing. Brain² routes to those same models, but grounds every answer in your tasks, docs, chats and connected apps — and it can act, not just reply.",
  },
  {
    q: "Is my data used to train models?",
    a: "No. We hold zero-retention agreements with every model provider we route to, and your content is never used to train foundation models — ours or theirs.",
  },
  {
    q: "What does it cost?",
    a: "Brain is $9 per user/month and includes unlimited assistant, agents and chat, plus 1,500 AI Super Credits. Everything AI is $28 per user/month and adds image generation, deep research and AI-powered automations.",
  },
  {
    q: "Are there usage limits?",
    a: "The assistant, agents and chat are unlimited. Heavier operations — deep research, image generation, long-running agents — draw from AI Super Credits, and you can buy more at $0.001 each.",
  },
  {
    q: "Can I choose which model handles a request?",
    a: "Yes. Brain² picks the best model per task by default, and you can pin a specific model for a conversation, a workspace or an individual agent.",
  },
  {
    q: "Who can see my Brain² conversations and memory?",
    a: "You can. Private conversations stay private — workspace admins cannot read them — and you can view, edit or delete anything Brain² has remembered about you at any time.",
  },
];

export default function AiPage() {
  return (
    <>
      <BrainHero />
      <BrainPillars />
      <Benchmarks />
      <RolesGrid />
      <SuperAgents />
      <WhatsNew />
      <Outputs />
      <BrainSecurity />
      <Faq title="Brain² questions" items={faqs} />
      <CtaBanner
        title="Bring your memory into Brain² in one click"
        subtitle="Import your ChatGPT, Claude or Gemini history and pick up exactly where you left off — now with your whole company in context."
        primary={{ label: "Try Brain² FREE", href: "/signup" }}
        secondary={{ label: "Import memory", href: "/signup" }}
        showMockup={false}
      />
    </>
  );
}
