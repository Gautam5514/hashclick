import { CalendarDays, FolderKanban, MessageCircle, Users, ReceiptText, Sparkles } from "lucide-react";
import SupportedTeamPage from "../shared/SupportedTeamPage";

const workflows = [
  { icon: FolderKanban, title: "Operational projects", body: "Coordinate internal initiatives, owners, tasks, priorities, dates, and status.", href: "/product" },
  { icon: Users, title: "People operations", body: "Manage employee profiles, attendance, leave, onboarding status, and payroll context.", href: "/features/teams" },
  { icon: CalendarDays, title: "Scheduling", body: "Coordinate supported meetings, availability, bookings, rescheduling, and cancellation.", href: "/features/scheduling" },
  { icon: ReceiptText, title: "Business records", body: "Review clients, leads, agreements, invoices, payments, expenses, and payroll workflows.", href: "/features/invoicing" },
  { icon: MessageCircle, title: "Company Chat", body: "Keep operational communication accessible through company and project channels.", href: "/features/chat" },
  { icon: Sparkles, title: "Hash AI", body: "Ask permission-aware questions across supported operational records.", href: "/brain" },
];

export default function OperationsPage() {
  return <SupportedTeamPage eyebrow="Operations" title="Connect everyday business operations" description="Bring projects, people, scheduling, clients, financial records, and communication together in one operational workspace." workflows={workflows} aiExamples={["Review pending leave requests", "Check today's permitted attendance status", "Find upcoming client meetings", "Review outstanding invoices and recent expenses"]} />;
}
