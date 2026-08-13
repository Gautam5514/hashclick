import ExpensesPage from "../../components/expenses/ExpensesPage";
import "../../components/tasks/tasks.css";

export const metadata = {
  title: "Hashboard Expenses: Track spend without chasing receipts",
  description: "Capture receipts, route approvals, and see budgets in real time. Hashboard Expenses keeps company spend visible without a single spreadsheet.",
};

export default function Page() {
  return <ExpensesPage />;
}
