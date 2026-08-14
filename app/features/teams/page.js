import TeamsPage from "../../components/teams/TeamsPage";
import "../../components/tasks/tasks.css";

export const metadata = {
  title: "Hashboard Teams: Users, roles, and employee records",
  description: "Manage company users, global roles, employee profiles, documents, salary history, and membership across spaces and projects.",
};

export default function Page() {
  return <TeamsPage />;
}
