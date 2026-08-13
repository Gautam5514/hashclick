import InvoicingPage from "../../components/invoicing/InvoicingPage";
import "../../components/tasks/tasks.css";

export const metadata = {
  title: "Hashboard Invoicing: Get paid without leaving your workspace",
  description: "Create branded invoices from your project data, send them in a click, and track payments as they come in—without switching to a separate billing tool.",
};

export default function Page() {
  return <InvoicingPage />;
}
