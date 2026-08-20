import { CalendarDays, FolderKanban, MessageCircle, Users, CheckSquare, Sparkles } from "lucide-react";
import SupportedTeamPage from "../shared/SupportedTeamPage";

const workflows = [
  { icon: FolderKanban, title: "Delivery projects", body: "Organize product and engineering initiatives with ownership, dates, and current status.", href: "/product" },
  { icon: CheckSquare, title: "Engineering tasks", body: "Keep assignments, priorities, deadlines, descriptions, and completion connected to projects.", href: "/features/tasks" },
  { icon: MessageCircle, title: "Project discussion", body: "Use project channels for delivery decisions, updates, files, and threaded replies.", href: "/features/chat" },
  { icon: CalendarDays, title: "Meetings", body: "Schedule supported planning, review, and delivery meetings with attendees and context.", href: "/features/meetings" },
  { icon: Users, title: "Workload context", body: "Review permitted ownership and open-task context for the delivery team.", href: "/features/teams" },
  { icon: Sparkles, title: "Hash AI", body: "Ask about supported projects and tasks or request an available task action.", href: "/brain" },
];

export default function ProductDevelopmentPage() {
  return <SupportedTeamPage eyebrow="Product and engineering" title="Coordinate product delivery in one workspace" description="Connect product projects, engineering tasks, owners, deadlines, meetings, and team communication from planning through delivery." workflows={workflows} aiExamples={["Find overdue engineering tasks", "Review the current owner of open work", "Create requested delivery follow-ups", "Summarize a permitted project's current tasks"]} />;
}
