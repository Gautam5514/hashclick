import DashboardsPage from "../../components/dashboards/DashboardsPage";
import "../../components/tasks/tasks.css";

export const metadata = {
  title: "Workspace Visibility in Hashboard",
  description: "Review supported project, task, people, client, meeting, and operational information in connected workflows.",
};

export default function Page() {
  return <DashboardsPage />;
}
