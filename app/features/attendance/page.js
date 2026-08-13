import AttendancePage from "../../components/attendance/AttendancePage";
import "../../components/tasks/tasks.css";

export const metadata = {
  title: "Hashboard Attendance: Track time and presence without the spreadsheets",
  description: "Clock in, clock out, and see who's working right now. Hashboard Attendance turns shift logs and timesheets into one clean, always-current record.",
};

export default function Page() {
  return <AttendancePage />;
}
