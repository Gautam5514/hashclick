import KanbanPage from "../../components/kanban/KanbanPage";
import "../../components/tasks/tasks.css";

export const metadata = {
  title: "Task Status and Project Work in Hashboard",
  description: "Organize project tasks with ownership, priority, dates, descriptions, completion, and current status.",
};

export default function Page() {
  return <KanbanPage />;
}
