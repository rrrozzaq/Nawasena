import { createFileRoute } from "@tanstack/react-router";
import { Card, Bar, Tag } from "@/components/primitives";
import { Play, Clock } from "lucide-react";

export const Route = createFileRoute("/app/learning")({
  head: () => ({ meta: [{ title: "Learning Center — Nawasena" }] }),
  component: Learning,
});

const tracks = [
  { cat: "Frontend", title: "Modern React Mastery", hours: 35, level: "Intermediate", progress: 62 },
  { cat: "Frontend", title: "CSS Layouts in Depth", hours: 18, level: "Beginner", progress: 100 },
  { cat: "Backend", title: "Node.js & Express APIs", hours: 28, level: "Intermediate", progress: 24 },
  { cat: "Backend", title: "PostgreSQL Fundamentals", hours: 14, level: "Beginner", progress: 80 },
  { cat: "Mobile", title: "Jetpack Compose Bootcamp", hours: 30, level: "Intermediate", progress: 0 },
  { cat: "Data", title: "Python for Data Analysis", hours: 22, level: "Beginner", progress: 45 },
  { cat: "Product", title: "Product Discovery", hours: 12, level: "Beginner", progress: 12 },
  { cat: "Design", title: "Figma to Design Systems", hours: 16, level: "Intermediate", progress: 55 },
];

const cats = ["All","Frontend","Backend","Mobile","Data","Product","Design"];

function Learning() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Learning Center</h1>
        <p className="text-sm text-muted-foreground mt-1">Roadmap-based learning, tied to real jobs.</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {cats.map((c, i) => (
          <button key={c} className={`px-3 py-1.5 rounded-full text-sm border ${i === 0 ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border text-muted-foreground hover:text-foreground"}`}>{c}</button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {tracks.map(t => (
          <Card key={t.title} className="overflow-hidden hover:border-primary/50 transition-colors">
            <div className="h-32 bg-gradient-to-br from-primary/30 via-secondary/20 to-card relative flex items-center justify-center">
              <Play className="w-10 h-10 text-primary-foreground/80" />
              <Tag variant="muted" >{t.cat}</Tag>
              <div className="absolute top-3 left-3"><Tag variant="muted">{t.cat}</Tag></div>
            </div>
            <div className="p-4">
              <div className="font-medium leading-tight">{t.title}</div>
              <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{t.hours}h</span>
                <span>{t.level}</span>
              </div>
              <div className="mt-3">
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="text-primary font-medium">{t.progress}%</span>
                </div>
                <Bar value={t.progress} />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
