import ProjectManagementPage from "../../components/project-management/ProjectManagementPage";
import "../../components/project-management/project-management.css";

export const metadata = {
  title: "Project Management Software",
  description: "Coordinate supported projects, tasks, deadlines, people, and project conversations in Hashboard.",
};

export default function Page() {
  return <ProjectManagementPage />;
}
