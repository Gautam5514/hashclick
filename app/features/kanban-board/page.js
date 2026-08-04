import KanbanPage from "../../components/kanban/KanbanPage";
import "../../components/tasks/tasks.css";

export const metadata = {
  title: "Free Kanban Board Software for Teams | ClickUp",
  description: "Plan, track, and move work with ClickUp's free Kanban board. Set WIP limits, connect to docs and chat, and let AI surface what's stuck. Try it free.",
};

export default function Page() {
  return <KanbanPage />;
}
