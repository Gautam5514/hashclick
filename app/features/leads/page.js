import LeadsPage from "../../components/leads/LeadsPage";
import "../../components/tasks/tasks.css";

export const metadata = {
  title: "Hashboard Leads: Track prospects from capture to conversion",
  description: "Manage lead details, stages, ownership, value, activities, bookings, sources, and conversion into client records.",
};

export default function Page() {
  return <LeadsPage />;
}
