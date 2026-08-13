import LeavePage from "../../components/leave/LeavePage";
import "../../components/tasks/tasks.css";

export const metadata = {
  title: "Hashboard Leave: Time off, approved without the email chain",
  description: "Request, approve, and track leave from one place. Hashboard Leave keeps balances accurate and the whole team's calendar in sync.",
};

export default function Page() {
  return <LeavePage />;
}
