import TasksPage from "../../components/tasks/TasksPage";
import "../../components/tasks/tasks.css";

export const metadata = {
  title: "Tasks — Keep every piece of work accounted for",
  description: "Create tasks, set priorities and deadlines, assign team members, and track work from backlog to completion.",
};

export default function Page() {
  return <TasksPage />;
}
