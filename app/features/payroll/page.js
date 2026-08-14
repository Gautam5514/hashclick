import PayrollPage from "../../components/payroll/PayrollPage";
import "../../components/tasks/tasks.css";

export const metadata = {
  title: "Hashboard Payroll: Generate, review, and finalize monthly runs",
  description: "Calculate monthly payroll from salary, attendance, approved leave, holidays, week-offs, deductions, and controlled manual adjustments.",
};

export default function Page() {
  return <PayrollPage />;
}
