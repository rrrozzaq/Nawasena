import { createFileRoute } from "@tanstack/react-router";
import { Card, Tag, ScoreRing, Bar } from "@/components/primitives";
import { Mail, MapPin, GraduationCap, ExternalLink, Award, BriefcaseBusiness, Code2 } from "lucide-react";

export const Route = createFileRoute("/app/profile")({
  head: () => ({ meta: [{ title: "Profile — Nawasena" }] }),
  component: Profile,
});

function Profile() {
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12 lg:col-span-4 space-y-4">
        <Card className="p-6 text-center">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto flex items-center justify-center text-2xl font-bold text-primary-foreground">AR</div>
          <h2 className="mt-4 text-xl font-semibold">Abdul Rozzaq</h2>
          <p className="text-sm text-muted-foreground">Aspiring Frontend Developer</p>
          <div className="mt-4 space-y-2 text-sm text-left">
            <Row icon={Mail}>abdul.rozzaq@itb.ac.id</Row>
            <Row icon={MapPin}>Jakarta, Indonesia</Row>
            <Row icon={GraduationCap}>ITB • Informatika • 2025</Row>
          </div>
          <button className="mt-5 w-full bg-surface border border-border rounded-lg py-2 text-sm hover:border-primary/50">Edit Profile</button>
        </Card>

        <Card className="p-6">
          <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Career Readiness</div>
          <div className="flex justify-center"><ScoreRing value={72} size={130} /></div>
          <div className="mt-5 space-y-3">
            <Stat label="Resume" v={84} /><Stat label="Interview" v={68} /><Stat label="Skills" v={75} />
          </div>
        </Card>
      </div>

      <div className="col-span-12 lg:col-span-8 space-y-4">
        <Card className="p-6">
          <SectionTitle icon={Code2}>Skills</SectionTitle>
          <div className="flex flex-wrap gap-2">
            {["HTML","CSS","JavaScript","TypeScript","React","Tailwind","Git","REST API","Node.js","Figma"].map(s => (
              <Tag key={s} variant="primary">{s}</Tag>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <SectionTitle icon={BriefcaseBusiness}>Projects</SectionTitle>
          <div className="space-y-3">
            {[
              { name: "Studyo — Study Planner", desc: "Open-source planner with 1.2k stars.", tags: ["React","TypeScript","Tailwind"] },
              { name: "ITB Marketplace", desc: "Campus marketplace serving 8k students.", tags: ["Next.js","PostgreSQL","Stripe"] },
            ].map(p => (
              <div key={p.name} className="p-4 bg-surface rounded-lg border border-border">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-medium">{p.name}</div>
                    <div className="text-sm text-muted-foreground mt-1">{p.desc}</div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                </div>
                <div className="mt-3 flex gap-1.5">{p.tags.map(t => <Tag key={t} variant="muted">{t}</Tag>)}</div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <SectionTitle icon={Award}>Certifications & Achievements</SectionTitle>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { name: "Meta Frontend Specialization", date: "2024" },
              { name: "AWS Cloud Practitioner", date: "2024" },
              { name: "Google UX Design", date: "2023" },
              { name: "Nawasena Roadmap: React", date: "2024" },
            ].map(c => (
              <div key={c.name} className="flex items-center gap-3 p-3 bg-surface rounded-lg border border-border">
                <Award className="w-5 h-5 text-primary" />
                <div className="flex-1">
                  <div className="text-sm font-medium leading-tight">{c.name}</div>
                  <div className="text-xs text-muted-foreground">{c.date}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

function Row({ icon: Ico, children }: { icon: any; children: React.ReactNode }) {
  return <div className="flex items-center gap-2 text-muted-foreground"><Ico className="w-4 h-4" />{children}</div>;
}
function Stat({ label, v }: { label: string; v: number }) {
  return <div><div className="flex justify-between text-xs mb-1"><span>{label}</span><span className="text-primary font-medium">{v}</span></div><Bar value={v} /></div>;
}
function SectionTitle({ children, icon: Ico }: { children: React.ReactNode; icon: any }) {
  return <div className="flex items-center gap-2 mb-4 text-lg font-semibold"><Ico className="w-5 h-5 text-primary" />{children}</div>;
}
