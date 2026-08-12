import BrainHero from "../components/brain/BrainHero";
import SocialProof from "../components/brain/SocialProof";
import Benchmark from "../components/brain/Benchmark";
import IcpStories from "../components/brain/IcpStories";
import Cards from "../components/brain/Cards";
import Headline from "../components/brain/Headline";
import Features from "../components/brain/Features";
import WhatsNew from "../components/brain/WhatsNew";
import Quote from "../components/brain/Quote";
import Accessibility from "../components/brain/Accessibility";
import Security from "../components/brain/Security";
import Faq from "../components/brain/Faq";
import MemoryImport from "../components/brain/MemoryImport";

export const metadata = {
  title: "Hash AI — The best AI is your AI",
  description:
    "Multiplayer AI with your context. Every model, one subscription, and a self-updating company Hash AI.",
};

export default function BrainPage() {
  return (
    <div className="bn-page">
      <BrainHero />
      <SocialProof />
      <Benchmark />
      <IcpStories />
      <Cards />
      <Headline />
      <Features />
      <WhatsNew />
      <Quote />
      <Accessibility />
      <Security />
      <Faq />
      <MemoryImport />
    </div>
  );
}
