import HeroSection from "./sections/HeroSection";
import ProblemSolutionSection from "./sections/ProblemSolutionSection";
import ValuePropsSection from "./sections/ValuePropsSection";
import ChatAgentsSpotlight from "./sections/ChatAgentsSpotlight";
import BentoFeatureGrid from "./sections/BentoFeatureGrid";
import ImportCtaBanner from "./sections/ImportCtaBanner";
import CoreFeaturesIconGrid from "./sections/CoreFeaturesIconGrid";
import AiFeatureSection from "./sections/AiFeatureSection";
import VoiceVideoCallsSection from "./sections/VoiceVideoCallsSection";
import MobilePerformanceSection from "./sections/MobilePerformanceSection";
import ClosingCtaSection from "./sections/ClosingCtaSection";
import TestimonialStrip from "./sections/TestimonialStrip";
import ChatFaq from "./ChatFaq";
import { disclaimer } from "./chat-content";

/**
 * Section order only — every section owns its own layout and pulls its copy
 * from chat-content.js. Reorder by moving a line; remove by deleting one.
 */
export default function ChatPage() {
  return (
    <div className="chat-page">
      <HeroSection />
      <ProblemSolutionSection />
      <ValuePropsSection />
      <ChatAgentsSpotlight />
      <BentoFeatureGrid />
      <ImportCtaBanner />
      <CoreFeaturesIconGrid />
      <AiFeatureSection />
      <VoiceVideoCallsSection />
      <MobilePerformanceSection />
      <ClosingCtaSection />
      <TestimonialStrip />
      <ChatFaq />
      <p className="chat-disclaimer">{disclaimer}</p>
    </div>
  );
}
