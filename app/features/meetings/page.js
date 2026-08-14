import MeetingsPage from "../../components/meetings/MeetingsPage";
import "../../components/tasks/tasks.css";

export const metadata = {
  title: "Hashboard Meetings: Schedule and manage connected meetings",
  description: "Create internal meetings, connect Google Meet or Zoom, manage attendees and hosts, and keep bookings connected to workspace context.",
};

export default function Page() {
  return <MeetingsPage />;
}
