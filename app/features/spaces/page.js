import SpacesPage from "../../components/spaces/SpacesPage";
import "../../components/tasks/tasks.css";

export const metadata = {
  title: "Hashboard Spaces: Organize teams, access, and projects",
  description: "Create team spaces, manage members and roles, and keep related projects and channels organized with permission-aware access.",
};

export default function Page() {
  return <SpacesPage />;
}
