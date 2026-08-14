import ClientsPage from "../../components/clients/ClientsPage";
import "../../components/tasks/tasks.css";

export const metadata = {
  title: "Hashboard Clients: Profiles, projects, billing, and portal access",
  description: "Manage client contact and billing details, connect projects and invoices, and provide supported client-portal access.",
};

export default function Page() {
  return <ClientsPage />;
}
