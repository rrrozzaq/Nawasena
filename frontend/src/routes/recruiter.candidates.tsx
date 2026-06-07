import { createFileRoute } from "@tanstack/react-router";
import { Card, Tag, ScoreRing } from "@/components/primitives";
import { candidates, universities } from "@/lib/mock-data";
import { TrendingUp, Search, Filter } from "lucide-react";

export const Route = createFileRoute("/recruiter/candidates")({
  head: () => ({ meta: [{ title: "Candidates — Nawasena" }] }),
  component: Candidates,
});

function Candidates() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Candidate Database</h1>
        <p className="text-sm text-muted-foreground mt-1">AI-ranked talent across Indonesian universities.</p>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Filters */}
        <Card className="col-span-12 lg:col-span-3 p-5 h-fit">
          <div className="flex items-center gap-2 mb-4"><Filter className="w-4 h-4 text-primary" /><span className="font-medium text-sm">Filters</span></div>

          <FilterGroup title="University">
            {universities.slice(0, 4).map(u => <CheckRow key={u}>{u}</CheckRow>)}
          </FilterGroup>
          <FilterGroup title="Major">
            {["Informatika","Sistem Informasi","Teknik Elektro"].map(u => <CheckRow key={u}>{u}</CheckRow>)}
          </FilterGroup>
          <FilterGroup title="Graduation Year">
            <div className="flex gap-2 flex-wrap">
              {["2024","2025","2026","2027"].map(y => (
                <button key={y} className="px-3 py-1.5 rounded-md text-xs bg-surface border border-border hover:border-primary/50">{y}</button>
              ))}
            </div>
          </FilterGroup>
          <FilterGroup title="English Level">
            {["Professional","Conversational","Native"].map(u => <CheckRow key={u}>{u}</CheckRow>)}
          </FilterGroup>
          <FilterGroup title="Min. Readiness Score">
            <input type="range" min={0} max={100} defaultValue={70} className="w-full accent-[color:var(--color-primary)]" />
            <div className="text-xs text-muted-foreground">70+</div>
          </FilterGroup>
        </Card>

        {/* List */}
        <div className="col-span-12 lg:col-span-9">
          <Card className="p-3 mb-4 flex items-center gap-2">
            <Search className="w-4 h-4 text-muted-foreground ml-2" />
            <input placeholder="Search by name, skill, or company…" className="flex-1 bg-transparent text-sm focus:outline-none h-9" />
            <select className="bg-surface border border-border rounded-lg px-3 h-9 text-sm">
              <option>Sort: Match Score</option><option>Readiness</option><option>Recent</option>
            </select>
          </Card>

          <div className="space-y-3">
            {candidates.map(c => (
              <Card key={c.name} className="p-5 hover:border-primary/50">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-sm font-semibold text-primary-foreground">{c.name.split(" ").map(n => n[0]).join("")}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{c.name}</span>
                      <Tag variant="primary"><TrendingUp className="w-3 h-3" />{c.match}% match</Tag>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">{c.uni} • {c.major} • Class of {c.year}</div>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {c.skills.map(s => <Tag key={s} variant="muted">{s}</Tag>)}
                    </div>
                  </div>
                  <div className="hidden md:flex items-center gap-6 text-center">
                    <ScoreCol label="Readiness" v={c.readiness} />
                    <ScoreCol label="Resume" v={c.resume} />
                    <ScoreCol label="Interview" v={c.interview} />
                  </div>
                  <button className="bg-primary text-primary-foreground rounded-lg px-4 py-2 text-sm font-medium hover:bg-secondary">View</button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="py-4 border-t border-border first:border-0 first:pt-0">
      <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">{title}</div>
      <div className="space-y-1.5">{children}</div>
    </div>
  );
}
function CheckRow({ children }: { children: React.ReactNode }) {
  return <label className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground cursor-pointer"><input type="checkbox" className="accent-[color:var(--color-primary)]" />{children}</label>;
}
function ScoreCol({ label, v }: { label: string; v: number }) {
  return <div><div className="text-lg font-semibold text-primary">{v}</div><div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div></div>;
}
