import { createFileRoute, Link } from "@tanstack/react-router";
import { Card, Tag, CompanyLogo } from "@/components/primitives";
import { jobs, companies } from "@/lib/mock-data";
import { Bookmark, MapPin, Banknote, Clock, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/app/discover")({
  head: () => ({ meta: [{ title: "Discover — Nawasena" }] }),
  component: Discover,
});

const categories = ["All","Software Engineering","Mobile Development","Product Management","Data Analytics","Finance","Marketing","Design"];

function Discover() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Discover Jobs</h1>
        <p className="text-sm text-muted-foreground mt-1">Find roles matched to your goals — and the roadmap to qualify.</p>
      </div>

      {/* Filters bar */}
      <Card className="p-4 mb-5">
        <div className="flex flex-wrap items-center gap-2">
          <Select label="Location" options={["Any","Jakarta","Bandung","Remote","Singapore"]} />
          <Select label="Salary" options={["Any","Rp 5-10jt","Rp 10-15jt","Rp 15-25jt","25jt+"]} />
          <Select label="Type" options={["Any","Full-time","Internship","Graduate Program"]} />
          <label className="ml-2 flex items-center gap-2 text-sm text-muted-foreground">
            <input type="checkbox" className="accent-[color:var(--color-primary)]" /> Remote only
          </label>
        </div>
      </Card>

      {/* Category chips */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((c, i) => (
          <button key={c}
            className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${i === 0 ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border text-muted-foreground hover:text-foreground hover:border-primary/50"}`}>
            {c}
          </button>
        ))}
      </div>

      {/* Jobs grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {jobs.map(j => <JobCard key={j.id} job={j} />)}
      </div>
    </div>
  );
}

function Select({ label, options }: { label: string; options: string[] }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-muted-foreground">{label}</span>
      <select className="bg-surface border border-border rounded-lg px-3 h-9 text-sm focus:outline-none focus:border-primary">
        {options.map(o => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}

function JobCard({ job }: { job: typeof jobs[0] }) {
  const c = companies[job.companyIdx];
  return (
    <Card className="p-5 flex flex-col hover:border-primary/50 transition-colors">
      <div className="flex items-start gap-3">
        <CompanyLogo name={c.logo} color={c.color} size={44} />
        <div className="flex-1 min-w-0">
          <Link to="/app/jobs/$id" params={{ id: job.id }} className="font-semibold leading-tight hover:text-primary">{job.title}</Link>
          <div className="text-xs text-muted-foreground mt-1">{c.name}</div>
        </div>
        <button className="text-muted-foreground hover:text-primary"><Bookmark className="w-4 h-4" /></button>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> {job.location}</span>
        <span className="flex items-center gap-1.5"><Banknote className="w-3.5 h-3.5" /> {job.salary}</span>
        <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {job.posted}</span>
        <Tag variant="primary"><TrendingUp className="w-3 h-3" /> {job.match}% match</Tag>
      </div>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {job.skills.slice(0, 4).map(s => <Tag key={s} variant="muted">{s}</Tag>)}
      </div>
      <div className="mt-5 pt-4 border-t border-border flex items-center gap-2">
        <Tag>{job.type}</Tag>
        <Link to="/app/jobs/$id" params={{ id: job.id }} className="ml-auto text-xs text-primary font-medium">View roadmap →</Link>
      </div>
    </Card>
  );
}
