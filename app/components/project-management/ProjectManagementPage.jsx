import { CalendarDays, FolderKanban, MessageCircle, Users, CheckSquare, Sparkles } from "lucide-react";
import SupportedTeamPage from "../shared/SupportedTeamPage";

const workflows = [
  { icon: FolderKanban, title: "Projects", body: "Create project records with ownership, dates, description, status, and related work.", href: "/product" },
  { icon: CheckSquare, title: "Tasks", body: "Assign tasks, priorities, dates, and supported status within the relevant project.", href: "/features/tasks" },
  { icon: MessageCircle, title: "Project Chat", body: "Discuss work in project channels with threads, mentions, files, pins, and search.", href: "/features/chat" },
  { icon: CalendarDays, title: "Calendar", body: "Review supported meetings, bookings, availability, and connected Google Calendar events.", href: "/features/calendar" },
  { icon: Users, title: "Team workload", body: "Review permitted employee and open-task context across current projects.", href: "/features/teams" },
  { icon: Sparkles, title: "Hash AI", body: "Ask supported questions about projects, owners, priorities, deadlines, and overdue work.", href: "/brain" },
];

export default function ProjectManagementPage() {
  return <SupportedTeamPage eyebrow="Project management" title="Plan projects and keep ownership clear" description="Coordinate projects, tasks, deadlines, people, and project conversations in one connected workspace." workflows={workflows} aiExamples={["List overdue tasks in a permitted project", "Create requested tasks with owners and due dates", "Summarize current project status from supported records", "Review open work assigned to a team member"]} />;
}
