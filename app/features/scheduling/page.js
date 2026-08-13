import SchedulingPage from "../../components/scheduling/SchedulingPage";
import "../../components/tasks/tasks.css";

export const metadata = {
  title: "Hashboard Scheduling: Let people book time with you—automatically",
  description: "Share a booking link, set availability rules, and route meetings with round-robin and collective scheduling—all synced with your calendar.",
};

export default function Page() {
  return <SchedulingPage />;
}
