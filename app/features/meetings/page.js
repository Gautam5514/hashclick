import MeetingsPage from "../../components/meetings/MeetingsPage";
import "../../components/tasks/tasks.css";

export const metadata = {
  title: "Hashboard Meetings: Meetings that turn into action, automatically",
  description: "Start a call in one click, get notes and action items without lifting a finger, and leave every meeting with tasks already assigned.",
};

export default function Page() {
  return <MeetingsPage />;
}
