import ComingSoon from "../components/shared/ComingSoon";

export const metadata = { title: "Learn" };

export default function LearnPage() {
  return (
    <ComingSoon
      eyebrow="Learn"
      title="Get good at this fast"
      body="Templates, courses, live webinars and 24/7 support — on every plan, including the free one."
      links={["1,000+ templates", "University courses & certification", "Live and on-demand webinars", "Help center & community", "Customer stories", "Productivity research"]}
    />
  );
}
