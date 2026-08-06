"use client";

import {
  GitBranch,
  Search,
  CheckSquare,
  Network,
  BookOpen,
  NotebookPen,
  CalendarDays,
  Stamp,
  Briefcase,
  LayoutTemplate,
  BellRing,
  BarChart3,
  Target,
  Gauge,
  CircleDot,
  PenLine,
  Code2,
  Flag,
  ClipboardList,
  Workflow,
  ListPlus,
  Timer,
  MessagesSquare,
  ArrowUpNarrowWide,
  Hourglass,
  Video,
  Eye,
  KeyRound,
  Mail,
  LayoutDashboard,
  Columns3,
  Plug,
  UserPlus,
  Tags,
  Headphones,
  ListChecks,
  CalendarClock,
  Table2,
  PenTool,
  GanttChartSquare,
  Map,
  Inbox,
  Users,
} from "lucide-react";
import { Container } from "../ui/Container";
import { cn } from "@/lib/utils";

const topRowItems = [
  { name: "Dependencies", icon: GitBranch },
  { name: "Connected Search", icon: Search },
  { name: "Tasks", icon: CheckSquare },
  { name: "Mind Maps", icon: Network },
  { name: "Wikis", icon: BookOpen },
  { name: "AI Notetaker", icon: NotebookPen },
  { name: "Calendar", icon: CalendarDays },
  { name: "Proofing", icon: Stamp },
  { name: "Portfolios", icon: Briefcase },
  { name: "Templates", icon: LayoutTemplate },
];

const sideRowItemsLeft = [
  { name: "Reminders", icon: BellRing },
  { name: "Reporting", icon: BarChart3 },
  { name: "Goals", icon: Target },
];

const sideRowItemsRight = [
  { name: "Sprints", icon: Gauge },
  { name: "Custom Status", icon: CircleDot },
  { name: "AI Writer", icon: PenLine },
];

const midRowItemsLeft = [
  { name: "API Calls", icon: Code2 },
  { name: "Milestones", icon: Flag },
  { name: "Forms", icon: ClipboardList },
];

const midRowItemsRight = [
  { name: "Automations", icon: Workflow },
  { name: "Custom Fields", icon: ListPlus },
  { name: "Timesheets", icon: Timer },
];

const lowerRowItemsLeft = [
  { name: "AI Q&A", icon: MessagesSquare },
  { name: "Priorities", icon: ArrowUpNarrowWide },
  { name: "Time Estimates", icon: Hourglass },
];

const lowerRowItemsRight = [
  { name: "Clips", icon: Video },
  { name: "Everything view", icon: Eye },
  { name: "Single Sign-on", icon: KeyRound },
];

const extraRowItemsLeft = [
  { name: "Emails", icon: Mail },
  { name: "Dashboards", icon: LayoutDashboard },
  { name: "Time Tracking", icon: Timer },
];

const extraRowItemsRight = [
  { name: "Kanban Boards", icon: Columns3 },
  { name: "Integrations", icon: Plug },
  { name: "Guests", icon: UserPlus },
];

const bottomRowItems = [
  { name: "Tags", icon: Tags },
  { name: "24/7 Support", icon: Headphones },
  { name: "Checklists", icon: ListChecks },
  { name: "Scheduling", icon: CalendarClock },
  { name: "Spreadsheets", icon: Table2 },
  { name: "Whiteboards", icon: PenTool },
  { name: "Gantt Charts", icon: GanttChartSquare },
  { name: "Roadmaps", icon: Map },
  { name: "Inbox", icon: Inbox },
  { name: "Teams", icon: Users },
];

function GridTile({ item, colIndex = 5, isGhost = false }) {
  if (isGhost) {
    return <div className="border border-[#eef0f3] bg-white min-h-[60px] opacity-60" />;
  }

  // Column opacity: Leftmost (0) & Rightmost (9) half-faded (opacity-45) on desktop lg:
  let opacityClass = "opacity-100";
  if (colIndex === 0 || colIndex === 9) opacityClass = "max-lg:opacity-100 lg:opacity-45";
  else if (colIndex === 1 || colIndex === 8) opacityClass = "max-lg:opacity-100 lg:opacity-80";

  return (
    <div
      className={cn(
        "group relative flex flex-col items-center justify-center gap-2.5 border border-[#eef0f3] bg-white p-3 sm:p-4 text-center transition-all duration-200 hover:z-30 hover:-translate-y-1 hover:border-2 hover:border-[#111111] hover:bg-white hover:shadow-xl cursor-pointer min-h-[90px] sm:min-h-[110px]",
        opacityClass
      )}
    >
      <item.icon className="size-5 text-[#8e8e8e] transition-colors group-hover:text-[#111111]" />
      <span className="text-[11.5px] sm:text-[12.5px] font-semibold text-[#646464] transition-colors group-hover:text-[#111111] whitespace-nowrap">
        {item.name}
      </span>
    </div>
  );
}

export default function FeatureWall() {
  return (
    <section className="relative w-full bg-white py-16 md:py-24 overflow-hidden">
      <Container size="wide">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-12 md:mb-16">
          <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.8rem)] leading-[1.04] font-bold tracking-[-0.04em] text-[#202020]">
            All apps, AI Agents, <br className="hidden sm:inline" />
            and humans in <span className="text-[#646464]">ClickUp</span>
          </h2>
          <p className="mt-4 text-[16px] font-medium text-[#7b7b7b]">
            100+ products to replace fragmented software &amp; maximize human productivity.
          </p>
        </div>

        {/* Unified Grid Matrix with Clearly Visible Half-Box Top/Bottom Ghost Rows */}
        <div className="relative mx-auto w-full max-w-[1480px] overflow-hidden bg-white select-none">
          {/* Subtle Top & Bottom Fade Overlays */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white via-white/70 to-transparent z-20" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white via-white/70 to-transparent z-20" />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-20" />

          {/* Grid Container */}
          <div className="border border-[#eef0f3] bg-white">
            {/* TOP CLEARLY VISIBLE HALF GHOST BOX ROW (Desktop lg: only) */}
            <div className="hidden lg:grid lg:grid-cols-10 border-b border-[#eef0f3]">
              {Array.from({ length: 10 }).map((_, i) => (
                <GridTile key={`top-ghost-${i}`} isGhost />
              ))}
            </div>

            {/* ROW 1: 10 TOP FEATURE TILES */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 border-b border-[#eef0f3]">
              {topRowItems.map((item, idx) => (
                <GridTile key={item.name} item={item} colIndex={idx} />
              ))}
            </div>

            {/* MIDDLE SECTION: 3 COLS LEFT + 4 COLS SPOTLIGHT + 3 COLS RIGHT */}
            <div className="grid grid-cols-1 lg:grid-cols-10 border-b border-[#eef0f3]">
              {/* Left Side (3 Columns = 30% width on Desktop) */}
              <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 border-b lg:border-b-0 lg:border-r border-[#eef0f3]">
                {sideRowItemsLeft.map((item, idx) => (
                  <GridTile key={item.name} item={item} colIndex={idx} />
                ))}
                {midRowItemsLeft.map((item, idx) => (
                  <GridTile key={item.name} item={item} colIndex={idx} />
                ))}
                {lowerRowItemsLeft.map((item, idx) => (
                  <GridTile key={item.name} item={item} colIndex={idx} />
                ))}
                {extraRowItemsLeft.map((item, idx) => (
                  <GridTile key={item.name} item={item} colIndex={idx} />
                ))}
              </div>

              {/* Center 2x2 Spotlight Cards (4 Columns = 40% width on Desktop) */}
              <div className="lg:col-span-4 grid grid-cols-2 gap-px bg-[#eef0f3] p-px">
                {/* Spotlight 1: Projects */}
                <div className="group relative flex flex-col items-center justify-center bg-gradient-to-b from-[#fffdfa] to-white p-3 sm:p-4 transition-all duration-300 hover:z-30 hover:shadow-2xl cursor-pointer overflow-hidden min-h-[180px] sm:min-h-[250px]">
                  <img
                    src="/feature-projects.avif"
                    alt="Projects"
                    className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>

                {/* Spotlight 2: Docs */}
                <div className="group relative flex flex-col items-center justify-center bg-gradient-to-b from-[#f4fbff] to-white p-3 sm:p-4 transition-all duration-300 hover:z-30 hover:shadow-2xl cursor-pointer overflow-hidden min-h-[180px] sm:min-h-[250px]">
                  <img
                    src="/feature-docs.avif"
                    alt="Docs"
                    className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>

                {/* Spotlight 3: Brain */}
                <div className="group relative flex flex-col items-center justify-center bg-gradient-to-b from-[#fff5fd] to-white p-3 sm:p-4 transition-all duration-300 hover:z-30 hover:shadow-2xl cursor-pointer overflow-hidden min-h-[180px] sm:min-h-[250px]">
                  <img
                    src="/feature-brain.avif"
                    alt="Brain"
                    className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>

                {/* Spotlight 4: Chat */}
                <div className="group relative flex flex-col items-center justify-center bg-gradient-to-b from-[#faf8ff] to-white p-3 sm:p-4 transition-all duration-300 hover:z-30 hover:shadow-2xl cursor-pointer overflow-hidden min-h-[180px] sm:min-h-[250px]">
                  <img
                    src="/feature-chat.avif"
                    alt="Chat"
                    className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
              </div>

              {/* Right Side (3 Columns = 30% width on Desktop) */}
              <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 border-t lg:border-t-0 lg:border-l border-[#eef0f3]">
                {sideRowItemsRight.map((item, idx) => (
                  <GridTile key={item.name} item={item} colIndex={idx + 7} />
                ))}
                {midRowItemsRight.map((item, idx) => (
                  <GridTile key={item.name} item={item} colIndex={idx + 7} />
                ))}
                {lowerRowItemsRight.map((item, idx) => (
                  <GridTile key={item.name} item={item} colIndex={idx + 7} />
                ))}
                {extraRowItemsRight.map((item, idx) => (
                  <GridTile key={item.name} item={item} colIndex={idx + 7} />
                ))}
              </div>
            </div>

            {/* ROW 5: 10 BOTTOM FEATURE TILES */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 border-b border-[#eef0f3]">
              {bottomRowItems.map((item, idx) => (
                <GridTile key={item.name} item={item} colIndex={idx} />
              ))}
            </div>

            {/* BOTTOM CLEARLY VISIBLE HALF GHOST BOX ROW (Desktop lg: only) */}
            <div className="hidden lg:grid lg:grid-cols-10">
              {Array.from({ length: 10 }).map((_, i) => (
                <GridTile key={`bottom-ghost-${i}`} isGhost />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
