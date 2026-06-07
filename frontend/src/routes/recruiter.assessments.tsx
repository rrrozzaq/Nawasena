import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/primitives";

export const Route = createFileRoute("/recruiter/assessments")({
  head: () => ({ meta: [{ title: "Assessments — Recruiter" }] }),
  component: () => (
    <div>
      <h1 className="text-2xl font-semibold mb-2">Assessments</h1>
      <p className="text-sm text-muted-foreground mb-6">Skill tests and coding challenges sent to candidates.</p>
      <div className="grid md:grid-cols-3 gap-4">
        {["Frontend Coding Challenge","Data Analyst SQL Test","PM Case Study"].map(n => (
          <Card key={n} className="p-5">
            <div className="font-medium">{n}</div>
            <div className="text-xs text-muted-foreground mt-1">12 candidates • Avg 78%</div>
            <button className="mt-4 text-xs text-primary">View results →</button>
          </Card>
        ))}
      </div>
    </div>
  ),
});
