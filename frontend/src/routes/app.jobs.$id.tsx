import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Card, Tag, ScoreRing, Bar, CompanyLogo } from "@/components/primitives";
import { jobs, companies, roadmaps, type RoadmapNode } from "@/lib/mock-data";
import { MapPin, Banknote, Clock, Bookmark, CheckCircle2, Lock, X, BookOpen, Video, FileText, FolderKanban, MessageSquare, BrainCircuit, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/app/jobs/$id")({
  head: () => ({ meta: [{ title: "Job — Nawasena" }] }),
  loader: ({ params }) => {
    const job = jobs.find(j => j.id === params.id);
    if (!job) throw notFound();
    return { job };
  },
  component: JobDetail,
  notFoundComponent: () => <div className="p-8">Job not found.</div>,
  errorComponent: ({ error }) => <div className="p-8">Failed: {error.message}</div>,
});

function JobDetail() {
  const { job } = Route.useLoaderData();
  const c = companies[job.companyIdx];
  const roadmap = roadmaps[job.roadmapKey] || roadmaps.frontend;
  const [openNode, setOpenNode] = useState<RoadmapNode | null>(null);
  const [completed, setCompleted] = useState<Record<string, boolean>>(
    Object.fromEntries(roadmap.map(n => [n.id, !!n.completed]))
  );
  const doneCount = Object.values(completed).filter(Boolean).length;
  const progressPct = Math.round((doneCount / roadmap.length) * 100);

  return (
    <div>
      <Link to="/app/discover" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4">
        <ArrowLeft className="w-4 h-4" /> Back to Discover
      </Link>

      <div className="grid grid-cols-12 gap-6">
        {/* LEFT 70% — Content */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <CompanyLogo name={c.logo} color={c.color} size={56} />
              <div className="flex-1">
                <h1 className="text-2xl font-semibold">{job.title}</h1>
                <div className="mt-1 text-muted-foreground">{c.name}</div>
                <div className="mt-3 flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {job.location}</span>
                  <span className="flex items-center gap-1.5"><Banknote className="w-4 h-4" /> {job.salary}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {job.posted}</span>
                  <Tag>{job.type}</Tag>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="w-10 h-10 rounded-lg border border-border bg-surface hover:border-primary/50"><Bookmark className="w-4 h-4 mx-auto" /></button>
                <button className="bg-primary text-primary-foreground font-medium rounded-lg px-5 h-10 hover:bg-secondary">Apply</button>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-3">About the role</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">{job.description}</p>

            <h3 className="mt-6 font-semibold">Requirements</h3>
            <ul className="mt-2 space-y-1.5">
              {job.requirements.map((r: string) => (
                <li key={r} className="text-sm flex gap-2"><span className="text-primary">•</span> {r}</li>
              ))}
            </ul>

            <h3 className="mt-6 font-semibold">Responsibilities</h3>
            <ul className="mt-2 space-y-1.5">
              {job.responsibilities.map((r: string) => (
                <li key={r} className="text-sm flex gap-2"><span className="text-primary">•</span> {r}</li>
              ))}
            </ul>
          </Card>

          {/* ROADMAP */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-semibold">Career Roadmap</h2>
                <p className="text-sm text-muted-foreground">Click any milestone to start learning.</p>
              </div>
              <div className="text-right">
                <div className="text-xs text-muted-foreground">Progress</div>
                <div className="text-xl font-semibold text-primary">{progressPct}%</div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-5 top-2 bottom-2 w-px bg-border" />
              <div className="space-y-3">
                {roadmap.map((node, i) => {
                  const done = completed[node.id];
                  const isNext = !done && roadmap.slice(0, i).every(n => completed[n.id]);
                  return (
                    <button key={node.id} onClick={() => setOpenNode(node)}
                      className="relative w-full text-left flex items-center gap-4 bg-surface hover:bg-card border border-border hover:border-primary/50 rounded-xl p-4 transition-colors group">
                      <div className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${done ? "bg-primary text-primary-foreground" : isNext ? "bg-primary/20 text-primary border-2 border-primary" : "bg-card text-muted-foreground border border-border"}`}>
                        {done ? <CheckCircle2 className="w-5 h-5" /> : isNext ? <span className="text-xs font-semibold">{i+1}</span> : <Lock className="w-3.5 h-3.5" />}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{node.title}</div>
                        <div className="text-xs text-muted-foreground mt-0.5">{node.difficulty} • {node.hours}h • {node.resources.length} resources</div>
                      </div>
                      {isNext && <Tag variant="primary">Continue</Tag>}
                    </button>
                  );
                })}
              </div>
            </div>
          </Card>
        </div>

        {/* RIGHT 30% — Readiness panel */}
        <div className="col-span-12 lg:col-span-4 space-y-4">
          <Card className="p-6 sticky top-20">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Your Match Score</div>
            <div className="mt-4 flex justify-center"><ScoreRing value={job.match} size={140} /></div>

            <div className="mt-6">
              <div className="flex items-center gap-2 mb-3">
                <BrainCircuit className="w-4 h-4 text-primary" />
                <div className="text-xs uppercase tracking-wider text-primary">AI Gap Analysis</div>
              </div>
              <p className="text-sm text-muted-foreground">You have {doneCount} of {roadmap.length} required skills. Close the gap in ~{roadmap.filter(n => !completed[n.id]).reduce((a, n) => a + n.hours, 0)}h to reach 95% match.</p>
            </div>

            <div className="mt-5 space-y-3">
              <div>
                <div className="text-xs text-muted-foreground mb-2">Completed skills</div>
                <div className="flex flex-wrap gap-1.5">
                  {roadmap.filter(n => completed[n.id]).map(n => <Tag key={n.id} variant="success">✓ {n.title}</Tag>)}
                </div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground mb-2">Missing skills</div>
                <div className="flex flex-wrap gap-1.5">
                  {roadmap.filter(n => !completed[n.id]).map(n => <Tag key={n.id} variant="warning">{n.title}</Tag>)}
                </div>
              </div>
            </div>

            <div className="mt-5 pt-5 border-t border-border space-y-2 text-sm">
              <Row label="Estimated learning" value={`${roadmap.filter(n => !completed[n.id]).reduce((a, n) => a + n.hours, 0)}h`} />
              <Row label="Readiness after" value="95%" />
            </div>

            <button className="mt-5 w-full bg-primary text-primary-foreground font-medium rounded-lg py-2.5 hover:bg-secondary">Start Roadmap</button>
          </Card>
        </div>
      </div>

      {openNode && (
        <NodeDrawer
          node={openNode}
          completed={!!completed[openNode.id]}
          onToggle={() => setCompleted(c => ({ ...c, [openNode.id]: !c[openNode.id] }))}
          onClose={() => setOpenNode(null)}
        />
      )}
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between"><span className="text-muted-foreground">{label}</span><span className="font-medium">{value}</span></div>
  );
}

const resIcon: Record<string, any> = { Article: FileText, Video: Video, Docs: BookOpen, Project: FolderKanban, Quiz: BrainCircuit, Community: MessageSquare };

function NodeDrawer({ node, completed, onToggle, onClose }: { node: RoadmapNode; completed: boolean; onToggle: () => void; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="flex-1 bg-black/60" onClick={onClose} />
      <div className="w-full max-w-md bg-card border-l border-border overflow-y-auto">
        <div className="sticky top-0 bg-card/95 backdrop-blur border-b border-border p-5 flex items-start gap-3">
          <div className="flex-1">
            <Tag variant={node.difficulty === "Beginner" ? "success" : node.difficulty === "Intermediate" ? "warning" : "danger"}>{node.difficulty}</Tag>
            <h2 className="mt-2 text-xl font-semibold">{node.title}</h2>
          </div>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground"><X className="w-5 h-5" /></button>
        </div>

        <div className="p-5 space-y-6">
          <p className="text-sm text-muted-foreground">{node.description}</p>

          <div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Learning Objectives</div>
            <ul className="space-y-1.5 text-sm">
              {["Understand core concepts","Build a hands-on project","Pass the assessment quiz"].map(o => (
                <li key={o} className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />{o}</li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-surface rounded-lg p-3"><div className="text-xs text-muted-foreground">Estimated time</div><div className="font-semibold mt-1">{node.hours} hours</div></div>
            <div className="bg-surface rounded-lg p-3"><div className="text-xs text-muted-foreground">Difficulty</div><div className="font-semibold mt-1">{node.difficulty}</div></div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Resources</div>
            <div className="space-y-2">
              {(node.resources.length ? node.resources : [{type:"Article",title:"Intro guide"},{type:"Video",title:"Walkthrough"},{type:"Project",title:"Hands-on lab"}]).map((r, i) => {
                const Ico = resIcon[r.type] || FileText;
                return (
                  <div key={i} className="flex items-center gap-3 bg-surface rounded-lg p-3 border border-border hover:border-primary/50 cursor-pointer">
                    <Ico className="w-4 h-4 text-primary" />
                    <div className="flex-1 text-sm">{r.title}</div>
                    <Tag variant="muted">{r.type}</Tag>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Progress</div>
            <Bar value={completed ? 100 : 35} />
          </div>

          <button onClick={onToggle}
            className={`w-full font-medium rounded-lg py-3 ${completed ? "bg-surface border border-border" : "bg-primary text-primary-foreground hover:bg-secondary"}`}>
            {completed ? "✓ Marked as completed" : "Mark milestone as completed"}
          </button>
        </div>
      </div>
    </div>
  );
}
