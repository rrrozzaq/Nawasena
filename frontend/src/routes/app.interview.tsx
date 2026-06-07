import { createFileRoute } from "@tanstack/react-router";
import { Card, Bar, Tag } from "@/components/primitives";
import { interviewQuestions } from "@/lib/mock-data";
import { Mic, Video, Square, Sparkles } from "lucide-react";

export const Route = createFileRoute("/app/interview")({
  head: () => ({ meta: [{ title: "Interview Practice — Nawasena" }] }),
  component: Interview,
});

function Interview() {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Interview Practice</h1>
          <p className="text-sm text-muted-foreground mt-1">Mock interviews with real-time AI feedback.</p>
        </div>
        <Tag variant="primary">Session 3 of 10</Tag>
      </div>

      <div className="grid grid-cols-12 gap-4">
        {/* LEFT: Question list */}
        <Card className="col-span-12 lg:col-span-3 p-4 h-fit">
          <div className="text-xs uppercase tracking-wider text-muted-foreground px-2 mb-3">Questions</div>
          <div className="space-y-1">
            {interviewQuestions.map((q, i) => (
              <button key={q.id} className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-colors ${i === 2 ? "bg-primary/15 text-primary border border-primary/30" : "hover:bg-surface"}`}>
                <div className="text-xs text-muted-foreground">Q{q.id} • {q.category}</div>
                <div className="mt-0.5 line-clamp-2">{q.q}</div>
              </button>
            ))}
          </div>
        </Card>

        {/* CENTER: Mock interview */}
        <Card className="col-span-12 lg:col-span-6 p-6">
          <Tag variant="muted">Question 3 of {interviewQuestions.length}</Tag>
          <h2 className="mt-3 text-xl font-semibold">How does React's virtual DOM work?</h2>
          <p className="text-sm text-muted-foreground mt-2">Take a deep breath. You have 2 minutes to respond.</p>

          <div className="mt-6 aspect-video bg-surface border border-border rounded-xl flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
            <div className="relative text-center">
              <div className="w-20 h-20 rounded-full bg-card border border-border flex items-center justify-center mx-auto"><Video className="w-8 h-8 text-muted-foreground" /></div>
              <div className="mt-3 text-sm text-muted-foreground">Camera preview</div>
            </div>
            <div className="absolute top-3 left-3 flex items-center gap-2 bg-danger/20 text-destructive px-2.5 py-1 rounded-full text-xs">
              <span className="w-2 h-2 rounded-full bg-destructive animate-pulse" /> REC 01:24
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-3">
            <button className="w-12 h-12 rounded-full bg-surface border border-border hover:border-primary/50 flex items-center justify-center"><Mic className="w-5 h-5" /></button>
            <button className="px-6 h-12 bg-destructive text-white rounded-full font-medium inline-flex items-center gap-2"><Square className="w-4 h-4" /> Stop</button>
            <button className="w-12 h-12 rounded-full bg-surface border border-border hover:border-primary/50 flex items-center justify-center"><Video className="w-5 h-5" /></button>
          </div>
        </Card>

        {/* RIGHT: AI Feedback */}
        <Card className="col-span-12 lg:col-span-3 p-5">
          <div className="flex items-center gap-2 text-primary mb-3"><Sparkles className="w-4 h-4" /><div className="text-xs uppercase tracking-wider">AI Feedback</div></div>
          <div className="text-center mb-4">
            <div className="text-4xl font-bold text-primary">82</div>
            <div className="text-xs text-muted-foreground">Overall Score</div>
          </div>
          <div className="space-y-3">
            <Metric label="Communication" v={88} />
            <Metric label="Confidence" v={76} />
            <Metric label="Clarity" v={82} />
            <Metric label="Technical Accuracy" v={85} />
            <Metric label="Problem Solving" v={79} />
          </div>
          <div className="mt-5 p-3 rounded-lg bg-primary/10 border border-primary/30 text-xs text-muted-foreground">
            <span className="text-primary font-medium">Tip:</span> Slow down when defining technical terms. Pause for 1 second after key concepts.
          </div>
        </Card>
      </div>
    </div>
  );
}

function Metric({ label, v }: { label: string; v: number }) {
  return (
    <div>
      <div className="flex justify-between text-xs mb-1"><span>{label}</span><span className="text-primary font-medium">{v}</span></div>
      <Bar value={v} />
    </div>
  );
}
