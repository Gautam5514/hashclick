import AttendancePage from "../../components/attendance/AttendancePage";
import "../../components/tasks/tasks.css";

export const metadata = {
  title: "Hashboard Attendance: Check-ins, records, and team summaries",
  description: "Record check-ins and check-outs, review attendance history, and manage permission-aware team attendance from Hashboard.",
};

export default function Page() {
  return <AttendancePage />;
}
