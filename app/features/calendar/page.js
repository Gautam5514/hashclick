import CalendarPage from "../../components/calendar/CalendarPage";
import "../../components/tasks/tasks.css";

export const metadata = {
  title: "Hashboard Calendar: Schedule your meetings and your work—automatically",
  description: "Plan, schedule, and manage tasks seamlessly with Hashboard Calendar. Sync with Google Calendar, customize views, and stay on top of deadlines—all in one place.",
};

export default function Page() {
  return <CalendarPage />;
}
