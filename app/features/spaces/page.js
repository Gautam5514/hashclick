import SpacesPage from "../../components/spaces/SpacesPage";
import "../../components/tasks/tasks.css";

export const metadata = {
  title: "Hashboard Spaces: Organize every team without the chaos",
  description: "Spaces give every team, department, or client its own home—with the hierarchy, permissions, and templates to keep hundreds of projects from turning into a mess.",
};

export default function Page() {
  return <SpacesPage />;
}
