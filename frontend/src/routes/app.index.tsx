import { createFileRoute, Link } from "@tanstack/react-router";
import { Card, ScoreRing, Bar, Tag, CompanyLogo } from "@/components/primitives";
import { jobs, companies, communityPosts } from "@/lib/mock-data";
import { Calendar, TrendingUp, Sparkles, ChevronRight, Briefcase, GraduationCap, Award } from "lucide-react";

export const Route = createFileRoute("/app/")({
  head: () => ({ meta: [{ title: "Home — Nawasena" }] }),
  component: Home,
});

function Home() {
  return (
    <div className="grid grid-cols-12 gap-6">
      {/* LEFT — Readiness */}
      <div className="col-span-12 lg:col-span-3 space-y-4">
        <Card className="p-6">
          <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Career Readiness</div>
          <div className="flex justify-center"><ScoreRing value={72} size={140} label="Overall" /></div>
          <div className="mt-4 text-center text-xs text-muted-foreground">Top 18% of students at ITB</div>
        </Card>
        <Card className="p-5 space-y-4">
          <ScoreItem label="Resume Score" value={84} />
          <ScoreItem label="Interview Score" value={68} />
          <ScoreItem label="Learning Progress" value={62} />
        </Card>
        <Card className="p-5">
          <div className="flex items-center gap-2 text-primary mb-3">
            <Sparkles className="w-4 h-4" /><div className="text-xs uppercase tracking-wider">AI Tip</div>
          </div>
          <div className="text-sm">Complete the <strong>React</strong> module to push your Frontend match at GoTo from 72% → 85%.</div>
        </Card>
      </div>

      {/* CENTER — Jobs */}
      <div className="col-span-12 lg:col-span-6 space-y-6">
        <SectionHeader title="Recommended for You" link="/app/discover" />
        <div className="grid sm:grid-cols-2 gap-4">
          {jobs.slice(0, 4).map(j => <JobMiniCard key={j.id} job={j} />)}
        </div>

        <SectionHeader title="Internship Programs" />
        <div className="grid sm:grid-cols-2 gap-4">
          {jobs.filter(j => j.type === "Internship").map(j => <JobMiniCard key={j.id} job={j} />)}
        </div>

        <SectionHeader title="Graduate & MT Programs" />
        <div className="grid sm:grid-cols-2 gap-4">
          {jobs.filter(j => j.type === "Graduate Program").map(j => <JobMiniCard key={j.id} job={j} />)}
        </div>

        <SectionHeader title="Recent Applications" link="/app/applications" />
        <Card>
          {[
            { job: "Frontend Developer", company: "Shopee", status: "Interview", color: "warning" as const, date: "Jun 3" },
            { job: "Mobile Developer", company: "Tokopedia", status: "Applied", color: "primary" as const, date: "May 30" },
            { job: "PM Graduate", company: "Telkom", status: "Assessment", color: "warning" as const, date: "May 25" },
          ].map((a, i) => (
            <div key={i} className={`flex items-center gap-4 p-4 ${i ? "border-t border-border" : ""}`}>
              <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center"><Briefcase className="w-4 h-4 text-muted-foreground" /></div>
              <div className="flex-1">
                <div className="text-sm font-medium">{a.job}</div>
                <div className="text-xs text-muted-foreground">{a.company} • {a.date}</div>
              </div>
              <Tag variant={a.color}>{a.status}</Tag>
            </div>
          ))}
        </Card>
      </div>

      {/* RIGHT — Community */}
      <div className="col-span-12 lg:col-span-3 space-y-4">
        <Card className="p-5">
          <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Career Tip of the Day</div>
          <div className="text-sm font-medium">Quantify everything on your resume.</div>
          <p className="mt-2 text-xs text-muted-foreground">Replace "improved performance" with "reduced load time by 35%."</p>
        </Card>

        <Card className="p-5">
          <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Upcoming Events</div>
          {[
            { title: "GoTo Tech Talk: System Design", date: "Jun 12 • 7PM" },
            { title: "Mock Interview Day", date: "Jun 15 • All day" },
          ].map(e => (
            <div key={e.title} className="flex gap-3 py-3 border-t border-border first:border-0 first:pt-0">
              <Calendar className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <div>
                <div className="text-sm">{e.title}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{e.date}</div>
              </div>
            </div>
          ))}
        </Card>

        <Card className="p-5">
          <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Featured Mentors</div>
          {[
            { name: "Andi Pratama", role: "Sr FE • GoTo" },
            { name: "Rizky Fauzi", role: "PM • Shopee" },
            { name: "Maya Ramadhani", role: "Data Lead • Tokped" },
          ].map(m => (
            <div key={m.name} className="flex items-center gap-3 py-2.5 border-t border-border first:border-0 first:pt-0">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-xs font-semibold text-primary-foreground">{m.name.split(" ").map(n => n[0]).join("")}</div>
              <div className="flex-1">
                <div className="text-sm font-medium">{m.name}</div>
                <div className="text-xs text-muted-foreground">{m.role}</div>
              </div>
              <button className="text-xs text-primary">Connect</button>
            </div>
          ))}
        </Card>

        <Card className="p-5">
          <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Community Feed</div>
          {communityPosts.slice(0, 2).map(p => (
            <div key={p.title} className="py-3 border-t border-border first:border-0 first:pt-0">
              <div className="text-xs text-muted-foreground">{p.author} • {p.time}</div>
              <div className="text-sm font-medium mt-1 leading-snug">{p.title}</div>
            </div>
          ))}
          <Link to="/app/community" className="mt-3 inline-flex items-center text-xs text-primary">See all <ChevronRight className="w-3 h-3" /></Link>
        </Card>
      </div>
    </div>
  );
}

function ScoreItem({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="flex items-center justify-between text-sm mb-1.5">
        <span>{label}</span><span className="text-primary font-medium">{value}</span>
      </div>
      <Bar value={value} />
    </div>
  );
}

function SectionHeader({ title, link }: { title: string; link?: string }) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-lg font-semibold">{title}</h2>
      {link && <Link to={link} className="text-xs text-primary inline-flex items-center">View all <ChevronRight className="w-3 h-3" /></Link>}
    </div>
  );
}

function JobMiniCard({ job }: { job: typeof jobs[0] }) {
  const c = companies[job.companyIdx];
  return (
    <Link to="/app/jobs/$id" params={{ id: job.id }}>
      <Card className="p-4 hover:border-primary/50 transition-colors h-full">
        <div className="flex items-start gap-3">
          <CompanyLogo name={c.logo} color={c.color} />
          <div className="flex-1 min-w-0">
            <div className="font-medium text-sm leading-tight">{job.title}</div>
            <div className="text-xs text-muted-foreground mt-1">{c.name} • {job.location}</div>
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between text-xs">
          <span className="text-muted-foreground">{job.salary}</span>
          <Tag variant="primary"><TrendingUp className="w-3 h-3" /> {job.match}% match</Tag>
        </div>
      </Card>
    </Link>
  );
}
