import FeatureTabs from "../components/home/FeatureTabs";
// import Testimonials from "../components/shared/Testimonials";
import CtaBanner from "../components/shared/CtaBanner";
import Button from "../components/ui/Button";

export const metadata = {
  title: "Teams & Solutions",
  description:
    "Supported Hashboard workflows for Projects, Marketing, Product & Engineering, IT, HR, and Leadership.",
};

export default function TeamsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden pt-16 pb-6 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#efedfd] px-3.5 py-1.5 text-[12px] font-bold tracking-[0.06em] text-[#7612fa] uppercase">
            Workflows by Team
          </span>
          <h1 className="font-display mt-6 text-[clamp(2.5rem,5.6vw,4.25rem)] leading-[1.03] font-extrabold tracking-[-0.04em] text-[#111827]">
            Hashboard workflows for every{" "}
            <span className="text-[#838383]">team in your company</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[18px] leading-relaxed text-[#6b7280]">
            Bring supported projects, tasks, Chat, people, clients, scheduling, financial workflows, and Hash AI assistance into one company workspace.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button href="/signup" size="xl">
              Get started. It&apos;s FREE
            </Button>
            <Button href="/demo" variant="outline" size="xl">
              Get a demo
            </Button>
          </div>
        </div>
      </section>

      {/* Main Interactive Feature Tabs Section */}
      <FeatureTabs />

      {/* <Testimonials /> */}
      <CtaBanner />
    </main>
  );
}
