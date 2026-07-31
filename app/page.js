import Hero from "./components/home/Hero";
import LogoCloud from "./components/shared/LogoCloud";
import ContextGap from "./components/home/ContextGap";
import FeatureWall from "./components/home/FeatureWall";
import FeatureTabs from "./components/home/FeatureTabs";
import SuperAgents from "./components/home/SuperAgents";
import BrainSection from "./components/home/BrainSection";
import SolutionCards from "./components/shared/SolutionCards";
import { RoiSection, ScaleSection } from "./components/home/RoiSection";
import Testimonials from "./components/shared/Testimonials";
import CtaBanner from "./components/shared/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoCloud />
      <ContextGap />
      <FeatureWall />
      <FeatureTabs />
      <SuperAgents />
      <BrainSection />
      <SolutionCards />
      <RoiSection />
      <Testimonials />
      <ScaleSection />
      <CtaBanner />
    </>
  );
}
