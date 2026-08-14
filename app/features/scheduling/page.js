import SchedulingPage from "../../components/scheduling/SchedulingPage";
import "../../components/tasks/tasks.css";

export const metadata = {
  title: "Hashboard Scheduling: Configurable public booking pages",
  description: "Create tenant-branded booking pages with configurable fields, an internal host, provider choice, Google Calendar availability, and optional webhooks.",
};

export default function Page() {
  return <SchedulingPage />;
}
