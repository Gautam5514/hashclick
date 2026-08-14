import LeavePage from "../../components/leave/LeavePage";
import "../../components/tasks/tasks.css";

export const metadata = {
  title: "Hashboard Leave: Requests, balances, and approvals",
  description: "Configure leave types and balances, submit full- or half-day requests, and manage approval, rejection, and cancellation workflows.",
};

export default function Page() {
  return <LeavePage />;
}
