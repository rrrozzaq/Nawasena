import { Link, useRouterState } from "@tanstack/react-router";
import { ReactNode } from "react";
import {
  Home, Compass, Bookmark, Users, Mic, GraduationCap, ClipboardList, User,
  LayoutDashboard, Briefcase, UserCheck, ClipboardCheck, BarChart3, Settings,
  Sparkles, Bell, Search, ArrowLeftRight,
} from "lucide-react";

const studentNav = [
  { to: "/app", label: "Home", icon: Home, exact: true },
  { to: "/app/discover", label: "Discover", icon: Compass },
  { to: "/app/saved", label: "Saved Jobs", icon: Bookmark },
  { to: "/app/community", label: "Community", icon: Users },
  { to: "/app/interview", label: "Interview Practice", icon: Mic },
  { to: "/app/learning", label: "Learning Center", icon: GraduationCap },
  { to: "/app/applications", label: "Applications", icon: ClipboardList },
  { to: "/app/profile", label: "Profile", icon: User },
];

const recruiterNav = [
  { to: "/recruiter", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { to: "/recruiter/jobs", label: "Jobs", icon: Briefcase },
  { to: "/recruiter/candidates", label: "Candidates", icon: UserCheck },
  { to: "/recruiter/assessments", label: "Assessments", icon: ClipboardCheck },
  { to: "/recruiter/interviews", label: "Interviews", icon: Mic },
  { to: "/recruiter/analytics", label: "Analytics", icon: BarChart3 },
  { to: "/recruiter/settings", label: "Settings", icon: Settings },
];

export function AppShell({ children, mode = "student" }: { children: ReactNode; mode?: "student" | "recruiter" }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const nav = mode === "student" ? studentNav : recruiterNav;
  const switchTo = mode === "student" ? "/recruiter" : "/app";

  const isActive = (to: string, exact?: boolean) =>
    exact ? pathname === to : pathname === to || pathname.startsWith(to + "/");

  return (
    <div className="min-h-screen flex bg-background text-foreground">
      <aside className="w-64 shrink-0 bg-sidebar border-r border-sidebar-border flex flex-col sticky top-0 h-screen">
        <Link to="/" className="px-6 h-16 flex items-center gap-2 border-b border-sidebar-border">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-semibold tracking-tight">Nawasena</span>
        </Link>
        <div className="px-3 py-2">
          <div className="text-[11px] uppercase tracking-wider text-muted-foreground px-3 py-2">
            {mode === "student" ? "Student" : "Recruiter"}
          </div>
          <nav className="space-y-1">
            {nav.map(({ to, label, icon: Icon, exact }) => {
              const active = isActive(to, exact);
              return (
                <Link
                  key={to} to={to}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                    active
                      ? "bg-primary text-primary-foreground font-medium"
                      : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-foreground"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="mt-auto p-3 border-t border-sidebar-border">
          <Link to={switchTo}
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-sidebar-accent hover:text-foreground">
            <ArrowLeftRight className="w-4 h-4" />
            Switch to {mode === "student" ? "Recruiter" : "Student"}
          </Link>
        </div>
      </aside>

      <div className="flex-1 min-w-0 flex flex-col">
        <header className="h-16 sticky top-0 z-20 bg-background/85 backdrop-blur border-b border-border flex items-center px-6 gap-4">
          <div className="flex-1 max-w-xl relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              placeholder={mode === "student" ? "Search jobs, skills, companies…" : "Search candidates, jobs…"}
              className="w-full bg-surface border border-border rounded-lg pl-9 pr-3 h-9 text-sm focus:outline-none focus:border-primary"
            />
          </div>
          <button className="w-9 h-9 rounded-lg bg-surface border border-border flex items-center justify-center hover:border-primary/50">
            <Bell className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-sm font-semibold text-primary-foreground">
              {mode === "student" ? "AR" : "HR"}
            </div>
            <div className="text-sm leading-tight">
              <div className="font-medium">{mode === "student" ? "Abdul Rozzaq" : "Sarah Recruiter"}</div>
              <div className="text-xs text-muted-foreground">{mode === "student" ? "ITB • 2025" : "Bank Mandiri"}</div>
            </div>
          </div>
        </header>
        <main className="flex-1 p-6">{children}</main>

        {mode === "student" && <AIAssistant />}
      </div>
    </div>
  );
}

function AIAssistant() {
  return (
    <button className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg glow-primary flex items-center justify-center hover:scale-105 transition-transform z-30">
      <Sparkles className="w-6 h-6" />
    </button>
  );
}
