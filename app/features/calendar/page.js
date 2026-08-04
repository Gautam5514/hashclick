import CalendarPage from "../../components/calendar/CalendarPage";
import "../../components/tasks/tasks.css";

export const metadata = {
  title: "ClickUp™ Calendar: Schedule your meetings and your work—automatically",
  description: "Plan, schedule, and manage tasks seamlessly with ClickUp Calendar. Sync with Google Calendar, customize views, and stay on top of deadlines—all in one place.",
};

export default function Page() {
  return <CalendarPage />;
}
