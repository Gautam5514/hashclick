import SchedulingPage from "../../components/scheduling/SchedulingPage";
import "../../components/tasks/tasks.css";

export const metadata = {
  title: "Hashboard Scheduling: Let people book time with you—automatically",
  description: "Share a booking link that only shows real availability. Invitees pick a slot, both calendars update instantly, and you never chase a meeting time again.",
};

export default function Page() {
  return <SchedulingPage />;
}
