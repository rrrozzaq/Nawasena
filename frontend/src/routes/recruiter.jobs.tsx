import { createFileRoute, Link } from "@tanstack/react-router";
import { Card, Tag } from "@/components/primitives";
import { jobs, companies } from "@/lib/mock-data";
import { Plus, MoreVertical, Users } from "lucide-react";

export const Route = createFileRoute("/recruiter/jobs")({
  head: () => ({ meta: [{ title: "Jobs — Recruiter" }] }),
  component: RecruiterJobs,
});

function RecruiterJobs() {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Jobs</h1>
          <p className="text-sm text-muted-foreground mt-1">Manage your open roles and roadmap templates.</p>
        </div>
        <button className="bg-primary text-primary-foreground font-medium rounded-lg px-4 py-2.5 text-sm hover:bg-secondary inline-flex items-center gap-2"><Plus className="w-4 h-4" /> Create Job</button>
      </div>

      <Card>
        <table className="w-full text-sm">
          <thead className="text-xs text-muted-foreground uppercase tracking-wider">
            <tr className="border-b border-border">
              <th className="text-left p-4">Position</th>
              <th className="text-left p-4">Type</th>
              <th className="text-left p-4">Applicants</th>
              <th className="text-left p-4">Roadmap</th>
              <th className="text-left p-4">Status</th>
              <th className="w-12"></th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((j, i) => (
              <tr key={j.id} className="border-b border-border last:border-0 hover:bg-surface">
                <td className="p-4">
                  <div className="font-medium">{j.title}</div>
                  <div className="text-xs text-muted-foreground">{companies[j.companyIdx].name} • {j.location}</div>
                </td>
                <td className="p-4"><Tag variant="muted">{j.type}</Tag></td>
                <td className="p-4 text-muted-foreground"><Users className="w-3.5 h-3.5 inline mr-1.5" />{Math.floor(Math.random() * 80) + 20}</td>
                <td className="p-4"><Tag variant="primary">{j.roadmapKey}</Tag></td>
                <td className="p-4"><Tag variant={i % 4 === 3 ? "warning" : "success"}>{i % 4 === 3 ? "Draft" : "Active"}</Tag></td>
                <td className="p-4"><button className="text-muted-foreground hover:text-foreground"><MoreVertical className="w-4 h-4" /></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      {/* Create job preview card */}
      <Card className="mt-6 p-6">
        <h2 className="font-semibold mb-1">Create a new job</h2>
        <p className="text-sm text-muted-foreground mb-5">Roadmap templates are auto-attached for matching.</p>
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="Position"><input className="input" placeholder="e.g. Frontend Developer" /></Field>
          <Field label="Department"><input className="input" placeholder="Engineering" /></Field>
          <Field label="Location"><input className="input" placeholder="Jakarta, ID" /></Field>
          <Field label="Salary Range"><input className="input" placeholder="Rp 12 – 18 jt" /></Field>
          <Field label="Employment Type">
            <select className="input"><option>Full-time</option><option>Internship</option><option>Graduate Program</option></select>
          </Field>
          <Field label="Experience Level">
            <select className="input"><option>Entry</option><option>Mid</option><option>Senior</option></select>
          </Field>
          <Field label="Roadmap Template">
            <select className="input"><option>Frontend</option><option>Backend</option><option>Data</option><option>Mobile</option><option>Product</option><option>Design</option></select>
          </Field>
          <Field label="Required Skills"><input className="input" placeholder="React, TypeScript, REST API" /></Field>
        </div>
        <Field label="Description" className="mt-4">
          <textarea className="input min-h-[100px]" placeholder="What will the candidate do?" />
        </Field>
        <div className="mt-5 flex gap-2">
          <button className="bg-primary text-primary-foreground rounded-lg px-5 py-2.5 text-sm font-medium hover:bg-secondary">Publish Job</button>
          <button className="bg-surface border border-border rounded-lg px-5 py-2.5 text-sm">Save Draft</button>
        </div>
      </Card>

      <style>{`.input{width:100%;background:var(--color-surface);border:1px solid var(--color-border);border-radius:10px;padding:10px 12px;font-size:14px;color:var(--color-foreground);outline:none}.input:focus{border-color:var(--color-primary)}`}</style>
    </div>
  );
}

function Field({ label, children, className = "" }: { label: string; children: React.ReactNode; className?: string }) {
  return <label className={`block ${className}`}><div className="text-xs text-muted-foreground mb-1.5">{label}</div>{children}</label>;
}
