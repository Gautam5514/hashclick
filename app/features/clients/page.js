import ClientsPage from "../../components/clients/ClientsPage";
import "../../components/tasks/tasks.css";

export const metadata = {
  title: "Hashboard Clients: Give every client a home inside your workspace",
  description: "Keep client details, projects, files, and communication in one profile, so anyone on your team can get up to speed in seconds.",
};

export default function Page() {
  return <ClientsPage />;
}
