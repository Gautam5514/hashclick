import PayrollPage from "../../components/payroll/PayrollPage";
import "../../components/tasks/tasks.css";

export const metadata = {
  title: "Hashboard Payroll: Run payroll without the spreadsheet gymnastics",
  description: "Approved hours, tax withholding, and payslips handled automatically. Hashboard Payroll turns attendance data straight into an accurate pay run.",
};

export default function Page() {
  return <PayrollPage />;
}
