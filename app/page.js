import Hero from "./components/home/Hero";
import LogoCloud from "./components/shared/LogoCloud";
import ContextGap from "./components/home/ContextGap";
import FeatureWall from "./components/home/FeatureWall";
import Brain2Section from "./components/home/Brain2Section";
import FeatureTabs from "./components/home/FeatureTabs";
import { RoiSection } from "./components/home/RoiSection";
import Testimonials from "./components/shared/Testimonials";
import Achievements from "./components/home/Achievements";
import CtaBanner from "./components/shared/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoCloud />
      <ContextGap />
      <FeatureWall />
      <Brain2Section />
      <FeatureTabs />
      <RoiSection />
      <Testimonials />
      <Achievements />
      <CtaBanner />
    </>
  );
}
