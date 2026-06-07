import { createFileRoute, Link } from "@tanstack/react-router";
import { Card, Stat, Tag } from "@/components/primitives";
import { candidates, jobs, companies } from "@/lib/mock-data";
import { ArrowUpRight, TrendingUp, Users, Briefcase, Calendar, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/recruiter/")({
  head: () => ({ meta: [{ title: "Recruiter Dashboard — Nawasena" }] }),
  component: RecruiterDash,
});

function RecruiterDash() {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Welcome back, Sarah</h1>
          <p className="text-sm text-muted-foreground mt-1">Bank Mandiri • Talent Acquisition</p>
        </div>
        <Link to="/recruiter/jobs" className="bg-primary text-primary-foreground font-medium rounded-lg px-4 py-2.5 text-sm hover:bg-secondary">+ Post a Job</Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
        <Stat label="Active Jobs" value={12} sub="+2 this week" accent />
        <Stat label="Applications" value={284} sub="+38 today" />
        <Stat label="Shortlisted" value={42} sub="14% of total" />
        <Stat label="Interviews" value={9} sub="This week" />
        <Stat label="Offers Sent" value={5} sub="3 accepted" />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Top candidates */}
        <Card className="lg:col-span-2 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold">AI-Matched Top Candidates</h2>
            <Link to="/recruiter/candidates" className="text-xs text-primary inline-flex items-center">View all <ArrowUpRight className="w-3 h-3 ml-1" /></Link>
          </div>
          <div className="space-y-2">
            {candidates.slice(0, 5).map(c => (
              <div key={c.name} className="flex items-center gap-4 p-3 bg-surface rounded-lg border border-border hover:border-primary/50">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-xs font-semibold text-primary-foreground">{c.name.split(" ").map(n => n[0]).join("")}</div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm">{c.name}</div>
                  <div className="text-xs text-muted-foreground truncate">{c.uni} • {c.major} • {c.year}</div>
                </div>
                <div className="hidden md:flex gap-3 text-xs text-muted-foreground">
                  <span>Resume <strong className="text-foreground">{c.resume}</strong></span>
                  <span>Interview <strong className="text-foreground">{c.interview}</strong></span>
                </div>
                <Tag variant="primary"><TrendingUp className="w-3 h-3" /> {c.match}% match</Tag>
                <button className="text-xs text-primary font-medium px-3">View →</button>
              </div>
            ))}
          </div>
        </Card>

        <div className="space-y-4">
          <Card className="p-5">
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Hiring Funnel</div>
            <Funnel />
          </Card>
          <Card className="p-5">
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Upcoming Interviews</div>
            {[
              { name: "Abdul Rozzaq", job: "Frontend Dev", when: "Today 14:00" },
              { name: "Siti Nurhaliza", job: "Backend Eng", when: "Tomorrow 10:00" },
            ].map(i => (
              <div key={i.name} className="flex items-center gap-3 py-3 border-t border-border first:border-0 first:pt-0">
                <Calendar className="w-4 h-4 text-primary" />
                <div className="flex-1">
                  <div className="text-sm font-medium">{i.name}</div>
                  <div className="text-xs text-muted-foreground">{i.job} • {i.when}</div>
                </div>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
}

function Funnel() {
  const stages = [
    { label: "Applied", v: 284, pct: 100 },
    { label: "Shortlisted", v: 42, pct: 15 },
    { label: "Assessment", v: 28, pct: 10 },
    { label: "Interview", v: 12, pct: 4 },
    { label: "Offer", v: 5, pct: 2 },
  ];
  return (
    <div className="space-y-2">
      {stages.map(s => (
        <div key={s.label}>
          <div className="flex justify-between text-xs mb-1"><span>{s.label}</span><span className="text-muted-foreground">{s.v}</span></div>
          <div className="h-6 bg-surface rounded-md overflow-hidden border border-border">
            <div className="h-full bg-gradient-to-r from-primary to-secondary" style={{ width: `${s.pct}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}
