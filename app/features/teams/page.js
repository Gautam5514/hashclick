import TeamsPage from "../../components/teams/TeamsPage";
import "../../components/tasks/tasks.css";

export const metadata = {
  title: "Hashboard Teams: See your whole organization in one place",
  description: "Directory, roles, workload, and onboarding for every team—so growing your headcount doesn't mean losing track of who does what.",
};

export default function Page() {
  return <TeamsPage />;
}
