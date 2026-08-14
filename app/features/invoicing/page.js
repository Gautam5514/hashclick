import InvoicingPage from "../../components/invoicing/InvoicingPage";
import "../../components/tasks/tasks.css";

export const metadata = {
  title: "Hashboard Invoicing: Create, finalize, and track invoices",
  description: "Create invoices from client billing agreements, manage line items and tax details, finalize invoice numbers, and record payments.",
};

export default function Page() {
  return <InvoicingPage />;
}
