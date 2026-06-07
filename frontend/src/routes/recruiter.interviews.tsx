import { createFileRoute } from "@tanstack/react-router";
import { Card, Tag } from "@/components/primitives";

export const Route = createFileRoute("/recruiter/interviews")({
  head: () => ({ meta: [{ title: "Interviews — Recruiter" }] }),
  component: () => (
    <div>
      <h1 className="text-2xl font-semibold mb-2">Interviews</h1>
      <p className="text-sm text-muted-foreground mb-6">Scheduled and completed interview sessions.</p>
      <Card>
        {[
          { c: "Abdul Rozzaq", r: "Frontend Developer", w: "Today 14:00", s: "Scheduled" },
          { c: "Siti Nurhaliza", r: "Backend Engineer", w: "Tomorrow 10:00", s: "Scheduled" },
          { c: "Budi Santoso", r: "Frontend Developer", w: "Yesterday", s: "Completed" },
          { c: "Dewi Lestari", r: "PM Graduate", w: "2 days ago", s: "Completed" },
        ].map((i, idx) => (
          <div key={idx} className={`flex items-center gap-4 p-4 ${idx ? "border-t border-border" : ""}`}>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-xs font-semibold text-primary-foreground">{i.c.split(" ").map(n => n[0]).join("")}</div>
            <div className="flex-1">
              <div className="text-sm font-medium">{i.c}</div>
              <div className="text-xs text-muted-foreground">{i.r} • {i.w}</div>
            </div>
            <Tag variant={i.s === "Scheduled" ? "warning" : "success"}>{i.s}</Tag>
          </div>
        ))}
      </Card>
    </div>
  ),
});
