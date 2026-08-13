import LeadsPage from "../../components/leads/LeadsPage";
import "../../components/tasks/tasks.css";

export const metadata = {
  title: "Hashboard Leads: Turn conversations into a pipeline that moves",
  description: "Capture leads the moment they come in, track them through a visual pipeline, and never let a follow-up slip through the cracks again.",
};

export default function Page() {
  return <LeadsPage />;
}
