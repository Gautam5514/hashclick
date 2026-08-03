import TasksPage from "../../components/tasks/TasksPage";
import "../../components/tasks/tasks.css";

export const metadata = {
  title: "Tasks — Never lose track of work again",
  description: "Capture, assign, organize, and automate every task in one connected workspace.",
};

export default function Page() {
  return <TasksPage />;
}
