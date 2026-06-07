import { createFileRoute, Link } from "@tanstack/react-router";
import { Card, Tag, CompanyLogo } from "@/components/primitives";
import { jobs, companies } from "@/lib/mock-data";
import { Bookmark } from "lucide-react";

export const Route = createFileRoute("/app/saved")({
  head: () => ({ meta: [{ title: "Saved Jobs — Nawasena" }] }),
  component: Saved,
});

const filters = ["Saved","Applied","Roadmap Started","Roadmap Completed"];

function Saved() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Saved Jobs</h1>
        <p className="text-sm text-muted-foreground mt-1">Jobs you've bookmarked and started preparing for.</p>
      </div>
      <div className="flex flex-wrap gap-2 mb-6">
        {filters.map((f, i) => (
          <button key={f} className={`px-3 py-1.5 rounded-full text-sm border ${i === 0 ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border text-muted-foreground hover:text-foreground"}`}>{f}</button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {jobs.slice(0, 5).map(j => {
          const c = companies[j.companyIdx];
          return (
            <Card key={j.id} className="p-5 hover:border-primary/50">
              <div className="flex items-start gap-3">
                <CompanyLogo name={c.logo} color={c.color} />
                <div className="flex-1">
                  <Link to="/app/jobs/$id" params={{ id: j.id }} className="font-semibold hover:text-primary">{j.title}</Link>
                  <div className="text-xs text-muted-foreground mt-1">{c.name} • {j.location}</div>
                </div>
                <Bookmark className="w-4 h-4 fill-primary text-primary" />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <Tag variant="primary">{j.match}% match</Tag>
                <span className="text-xs text-muted-foreground">{j.salary}</span>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
