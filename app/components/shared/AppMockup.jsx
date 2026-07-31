"use client";

import { useState, useEffect } from "react";
import {
  Search,
  Plus,
  Sparkles,
  Home,
  Inbox,
  Calendar,
  CheckCircle2,
  Lock,
  MessageCircle,
  FolderKanban,
  FileText,
  MessageSquare,
  GanttChart,
  Users,
  ChevronDown,
  Hash,
  PenSquare,
  Bot,
  Settings,
  Grid,
} from "lucide-react";
import { cn } from "@/lib/utils";

const heroImageMap = {
  Projects: "/hero_projects_real.png",
  Chat: "https://clickup.com/assets/home_2026/hero_chat.avif",
  "Brain MAX": "https://clickup.com/assets/home_2026/hero_brain.avif",
  "AI Agents": "https://clickup.com/assets/home_2026/hero_agents.avif",
  Sprints: "https://clickup.com/assets/home_2026/hero_sprints.avif",
  "Time Tracking": "https://clickup.com/assets/home_2026/hero_timetracking.avif",
  Calendar: "https://clickup.com/assets/home_2026/hero_calendar.avif",
  Docs: "https://clickup.com/assets/home_2026/hero_docs.avif",
  Whiteboards: "https://clickup.com/assets/home_2026/hero_whiteboards.avif",
  Automations: "https://clickup.com/assets/home_2026/hero_automations.avif",
  Dashboards: "https://clickup.com/assets/home_2026/hero_dashboards.avif",
  Scheduling: "https://clickup.com/assets/home_2026/hero_scheduling.avif",
};

const doneTasks = [
  {
    id: "task-1",
    title: "Social campaign",
    subtasks: 0,
    assignees: [{ name: "Alex K.", color: "#7612fa", initial: "AK" }],
  },
  {
    id: "task-2",
    title: "Website assets",
    subtasks: 2,
    assignees: [
      { name: "Dean P.", color: "#fa12e3", initial: "DP" },
      { name: "Sarah M.", color: "#0091ff", initial: "SM" },
    ],
    children: [
      { id: "sub-1", title: "Landing page", assignees: [{ name: "Sarah M.", color: "#0091ff", initial: "SM" }] },
      { id: "sub-2", title: "About page", assignees: [{ name: "Dean P.", color: "#fa12e3", initial: "DP" }] },
    ],
  },
  {
    id: "task-3",
    title: "Mobile assets",
    subtasks: 0,
    assignees: [{ name: "Zeb E.", color: "#078d3b", initial: "ZE" }],
  },
];

const inProgressTasks = [
  {
    id: "prog-1",
    icon: Sparkles,
    iconColor: "#0091ff",
    title: "Market Research Analysis",
    subtasks: 0,
    assignees: [{ name: "Dean P.", color: "#fa12e3", initial: "DP" }],
  },
  {
    id: "prog-2",
    icon: Users,
    iconColor: "#7612fa",
    title: "Competitor Benchmarking",
    subtasks: 1,
    assignees: [
      { name: "Alex K.", color: "#7612fa", initial: "AK" },
      { name: "Zeb E.", color: "#078d3b", initial: "ZE" },
    ],
  },
  {
    id: "prog-3",
    icon: Home,
    iconColor: "#fc6d2d",
    title: "Brand Positioning Strategy",
    isLocked: true,
    subtasks: 5,
    comments: 1,
    assignees: [{ name: "Sarah M.", color: "#0091ff", initial: "SM" }],
  },
];

export default function AppMockup({ className, activePill = "Projects" }) {
  const [activeTab, setActiveTab] = useState("Tasks");
  const [expandedSubtasks, setExpandedSubtasks] = useState(true);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setImgError(false);
  }, [activePill]);

  const currentImageSrc = heroImageMap[activePill] || heroImageMap["Projects"];

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl bg-white text-left transition-all duration-300",
        className
      )}
    >
      {/* Soft Gradient Fade Overlays on Right & Bottom Edges */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-20" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white via-white/85 to-transparent z-20" />

      {!imgError && currentImageSrc ? (
        <div className="relative w-full overflow-hidden rounded-2xl bg-white">
          <picture>
            <source srcSet={currentImageSrc} type="image/avif" />
            <img
              src={currentImageSrc}
              alt={`ClickUp ${activePill} UI Preview`}
              onError={() => setImgError(true)}
              className="h-auto w-full max-h-[580px] rounded-2xl object-cover object-left-top transition-all duration-300 shadow-lg"
              loading="eager"
            />
          </picture>
        </div>
      ) : (
        /* CODED UI FALLBACK */
        <div className="bg-white">
          {/* Top Header Bar */}
          <div className="flex items-center justify-between border-b border-[#e8e8e8] bg-[#fafafa] px-3.5 py-2">
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="flex items-center gap-1.5 rounded-lg border border-[#e8e8e8] bg-white px-2.5 py-1 text-[11.5px] font-bold text-[#202020] shadow-2xs hover:bg-[#f4f4f5]"
              >
                <span className="flex size-3.5 items-center justify-center rounded-full bg-[#fc6d2d] text-white text-[8px]">
                  ✳
                </span>
                <span>Mango Inc.</span>
                <ChevronDown className="size-3 text-[#7b7b7b]" />
              </button>
            </div>

            {/* Search bar */}
            <div className="flex items-center gap-2">
              <div className="flex w-48 items-center gap-1.5 rounded-md bg-[#f0f0f0] px-2.5 py-1 text-[10.5px] text-[#7b7b7b]">
                <Search className="size-3 text-[#7b7b7b]" />
                <span className="truncate">Search workspace...</span>
                <Sparkles className="ml-auto size-3 text-[#7612fa]" />
              </div>
            </div>
          </div>

          <div className="flex min-h-[380px]">
            {/* Dark Left-Most Icon Bar */}
            <div className="flex w-[44px] shrink-0 flex-col items-center gap-3.5 border-r border-[#202020] bg-[#111111] py-3 text-white">
              <div className="relative flex size-6.5 items-center justify-center rounded-full bg-[#7612fa] text-[9.5px] font-bold ring-2 ring-[#fa12e3]">
                MI
              </div>
              <button type="button" className="flex size-6.5 items-center justify-center rounded-lg text-[#b4b4b4] hover:bg-white/10 hover:text-white">
                <Inbox className="size-3.5" />
              </button>
              <button type="button" className="flex size-6.5 items-center justify-center rounded-lg bg-white/15 text-white">
                <FolderKanban className="size-3.5" />
              </button>
              <button type="button" className="flex size-6.5 items-center justify-center rounded-lg text-[#b4b4b4] hover:bg-white/10 hover:text-white">
                <Settings className="size-3.5" />
              </button>
              <button type="button" className="mt-auto flex size-6.5 items-center justify-center rounded-lg text-[#b4b4b4] hover:bg-white/10 hover:text-white">
                <Grid className="size-3.5" />
              </button>
            </div>

            {/* Left Sidebar Navigation */}
            <div className="hidden w-[175px] shrink-0 border-r border-[#e8e8e8] bg-[#fafafa] p-2.5 sm:block">
              <div className="mb-2 flex items-center justify-between px-1">
                <span className="text-[11.5px] font-bold text-[#202020]">Home</span>
                <div className="flex items-center gap-0.5 text-[#7b7b7b]">
                  <Plus className="size-3 cursor-pointer hover:text-[#202020]" />
                  <ChevronDown className="size-3 cursor-pointer hover:text-[#202020]" />
                </div>
              </div>

              <ul className="space-y-0.5">
                <li className="flex items-center justify-between rounded-lg px-2 py-1 text-[10.5px] font-semibold text-[#646464] hover:bg-[#f0f0f0]">
                  <span className="flex items-center gap-1.5">
                    <Inbox className="size-3" /> Inbox
                  </span>
                  <span className="flex size-3.5 items-center justify-center rounded-full bg-[#f0382d] text-[8px] font-bold text-white">
                    3
                  </span>
                </li>
                <li className="flex items-center gap-1.5 rounded-lg px-2 py-1 text-[10.5px] font-semibold text-[#646464] hover:bg-[#f0f0f0]">
                  <FileText className="size-3" /> My Tasks
                </li>
                <li className="flex items-center gap-1.5 rounded-lg px-2 py-1 text-[10.5px] font-semibold text-[#646464] hover:bg-[#f0f0f0]">
                  <Calendar className="size-3" /> Schedule
                </li>
              </ul>

              <div className="mt-3 mb-1 px-1 text-[9px] font-bold tracking-wider text-[#a0a0b9] uppercase">
                Creative Team
              </div>
              <ul className="space-y-0.5 text-[10.5px]">
                <li className="flex items-center gap-1.5 rounded-lg px-2 py-1 text-[#646464] hover:bg-[#f0f0f0]">
                  <Hash className="size-3 text-[#a0a0b9]" /> Product Backlog
                </li>
                <li className="flex items-center gap-1.5 rounded-lg px-2 py-1 text-[#646464] hover:bg-[#f0f0f0]">
                  <Hash className="size-3 text-[#a0a0b9]" /> Creative
                </li>
                <li className="flex items-center justify-between rounded-lg px-2 py-1 text-[#646464] hover:bg-[#f0f0f0]">
                  <span className="flex items-center gap-1.5">
                    <span className="flex size-3.5 items-center justify-center rounded-full bg-[#fa12e3] text-[7.5px] font-bold text-white">DP</span>
                    Dean P.
                  </span>
                  <span className="flex size-3.5 items-center justify-center rounded-full bg-[#f0382d] text-[7.5px] font-bold text-white">1</span>
                </li>
                <li className="flex items-center justify-between rounded-lg px-2 py-1 text-[#646464] hover:bg-[#f0f0f0]">
                  <span className="flex items-center gap-1.5">
                    <Bot className="size-3 text-[#fa12e3]" />
                    Campaign Agent
                  </span>
                  <span className="flex size-3.5 items-center justify-center rounded-full bg-[#f0382d] text-[7.5px] font-bold text-white">3</span>
                </li>
              </ul>

              <div className="mt-3 mb-1 px-1 text-[9px] font-bold tracking-wider text-[#a0a0b9] uppercase">
                Spaces
              </div>
              <ul className="space-y-0.5 text-[10.5px]">
                <li className="flex items-center gap-1.5 rounded-lg bg-[#e8e8e8] px-2 py-1 font-bold text-[#202020]">
                  <PenSquare className="size-3 text-[#f0382d]" /> Marketing
                </li>
              </ul>
            </div>

            {/* Main Workspace View Area */}
            <div className="min-w-0 flex-1 bg-white p-3">
              {/* Header breadcrumb & Space title */}
              <div className="mb-2 flex items-center justify-between border-b border-[#e8e8e8] pb-2">
                <div className="flex items-center gap-1.5">
                  <span className="flex size-4.5 items-center justify-center rounded-md bg-[#f0382d] text-white">
                    <PenSquare className="size-2.5" />
                  </span>
                  <h3 className="text-[13px] font-bold text-[#202020]">Marketing</h3>
                  <ChevronDown className="size-3 text-[#7b7b7b]" />
                </div>

                <div className="flex items-center gap-1.5 text-[10.5px] text-[#7b7b7b]">
                  <span className="rounded bg-[#f4f4f5] px-2 py-0.5 font-semibold text-[#202020]">
                    View: {activePill}
                  </span>
                </div>
              </div>

              {/* View Tab Bar */}
              <div className="mb-3 flex items-center gap-1.5 border-b border-[#e8e8e8] pb-1.5 text-[11px] font-semibold text-[#646464]">
                <button
                  type="button"
                  onClick={() => setActiveTab("Tasks")}
                  className={cn("flex items-center gap-1 border-b-2 px-2 py-0.5 transition-colors", activeTab === "Tasks" ? "border-[#202020] font-bold text-[#202020]" : "border-transparent hover:text-[#202020]")}
                >
                  <FolderKanban className="size-3" /> Tasks
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("Chat")}
                  className={cn("flex items-center gap-1 px-2 py-0.5 rounded-md transition-colors", activeTab === "Chat" && "bg-[#efedfd] text-[#7612fa] font-bold")}
                >
                  <MessageSquare className="size-3" /> Chat
                </button>
              </div>

              {/* GROUP 1: DONE 5 */}
              <div className="mb-3">
                <div className="mb-1.5 flex items-center gap-1.5">
                  <span className="inline-flex items-center gap-1 rounded-md bg-[#078d3b] px-1.5 py-0.5 text-[9.5px] font-bold text-white uppercase">
                    <CheckCircle2 className="size-2.5" /> DONE
                  </span>
                  <span className="text-[10.5px] font-bold text-[#7b7b7b]">5</span>
                </div>

                <div className="space-y-1 pl-1">
                  {doneTasks.map((task) => (
                    <div key={task.id} className="flex items-center justify-between rounded-lg py-1 px-1.5 hover:bg-[#f8f9fa]">
                      <div className="flex items-center gap-1.5 text-[11.5px]">
                        <CheckCircle2 className="size-3 text-[#078d3b]" />
                        <span className="font-medium text-[#202020]">{task.title}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        {task.assignees.map((a, idx) => (
                          <span key={idx} className="flex size-4.5 items-center justify-center rounded-full text-[8px] font-bold text-white" style={{ background: a.color }}>
                            {a.initial}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* GROUP 2: IN PROGRESS 3 */}
              <div>
                <div className="mb-1.5 flex items-center gap-1.5">
                  <span className="inline-flex items-center gap-1 rounded-md bg-[#0091ff] px-1.5 py-0.5 text-[9.5px] font-bold text-white uppercase">
                    IN PROGRESS
                  </span>
                  <span className="text-[10.5px] font-bold text-[#7b7b7b]">3</span>
                </div>

                <div className="space-y-1 pl-1">
                  {inProgressTasks.map((task) => (
                    <div key={task.id} className="flex items-center justify-between rounded-lg py-1 px-1.5 hover:bg-[#f8f9fa]">
                      <div className="flex items-center gap-1.5 text-[11.5px]">
                        <task.icon className="size-3" style={{ color: task.iconColor }} />
                        <span className="font-medium text-[#202020]">{task.title}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        {task.assignees.map((a, idx) => (
                          <span key={idx} className="flex size-4.5 items-center justify-center rounded-full text-[8px] font-bold text-white" style={{ background: a.color }}>
                            {a.initial}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
