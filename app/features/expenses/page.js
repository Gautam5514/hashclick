import ExpensesPage from "../../components/expenses/ExpensesPage";
import "../../components/tasks/tasks.css";

export const metadata = {
  title: "Hashboard Expenses: Record and review company spending",
  description: "Record goods and service expenses with invoice, receipt, category, amount, and optional GST details, then search and filter company spending.",
};

export default function Page() {
  return <ExpensesPage />;
}
