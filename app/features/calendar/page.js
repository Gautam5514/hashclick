import CalendarPage from "../../components/calendar/CalendarPage";
import "../../components/tasks/tasks.css";

export const metadata = {
  title: "Hashboard Calendar: Google Calendar and Hashboard bookings",
  description: "Connect Google Calendar, view external events with Hashboard bookings, check busy time, and keep supported meeting updates synchronized.",
};

export default function Page() {
  return <CalendarPage />;
}
