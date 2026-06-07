import { createFileRoute } from "@tanstack/react-router";
import { Card, Stat } from "@/components/primitives";

export const Route = createFileRoute("/recruiter/analytics")({
  head: () => ({ meta: [{ title: "Analytics — Recruiter" }] }),
  component: Analytics,
});

function Analytics() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Hiring Analytics</h1>
        <p className="text-sm text-muted-foreground mt-1">Insights across your hiring funnel.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <Stat label="Applications (30d)" value="1,284" sub="+12% vs prev" accent />
        <Stat label="Avg. Time to Hire" value="18d" sub="-3d vs prev" />
        <Stat label="Offer Acceptance" value="78%" />
        <Stat label="Cost per Hire" value="Rp 3.2M" />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="font-semibold mb-1">Hiring Funnel</h2>
          <p className="text-xs text-muted-foreground mb-5">Stage-by-stage conversion</p>
          <Funnel />
        </Card>

        <Card className="p-6">
          <h2 className="font-semibold mb-1">Candidate Pipeline</h2>
          <p className="text-xs text-muted-foreground mb-5">Open roles vs supply</p>
          <BarChart data={[
            { l: "Frontend", v: 84 }, { l: "Backend", v: 62 }, { l: "Mobile", v: 38 },
            { l: "Data", v: 52 }, { l: "PM", v: 28 }, { l: "Design", v: 44 },
          ]} />
        </Card>

        <Card className="p-6">
          <h2 className="font-semibold mb-1">University Distribution</h2>
          <p className="text-xs text-muted-foreground mb-5">Top sources of applicants</p>
          <Donut data={[
            { l: "ITB", v: 26, c: "var(--color-primary)" },
            { l: "UI", v: 22, c: "oklch(0.7 0.13 165)" },
            { l: "UGM", v: 18, c: "oklch(0.78 0.15 75)" },
            { l: "ITS", v: 14, c: "oklch(0.6 0.18 250)" },
            { l: "BINUS", v: 12, c: "oklch(0.63 0.21 25)" },
            { l: "Others", v: 8, c: "var(--color-border)" },
          ]} />
        </Card>

        <Card className="p-6">
          <h2 className="font-semibold mb-1">Skill Distribution</h2>
          <p className="text-xs text-muted-foreground mb-5">Most common in candidate pool</p>
          <BarChart data={[
            { l: "JavaScript", v: 78 }, { l: "React", v: 64 }, { l: "Python", v: 58 },
            { l: "SQL", v: 70 }, { l: "Figma", v: 36 }, { l: "AWS", v: 28 },
          ]} />
        </Card>

        <Card className="p-6 lg:col-span-2">
          <h2 className="font-semibold mb-1">Application Sources</h2>
          <p className="text-xs text-muted-foreground mb-5">Where candidates come from</p>
          <div className="grid sm:grid-cols-4 gap-3">
            {[
              { l: "Nawasena Discovery", v: 48 },
              { l: "Direct Apply", v: 22 },
              { l: "Referrals", v: 18 },
              { l: "Campus Events", v: 12 },
            ].map(s => (
              <div key={s.l} className="p-4 bg-surface rounded-lg border border-border">
                <div className="text-3xl font-bold text-primary">{s.v}%</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

function Funnel() {
  const stages = [
    { l: "Applied", v: 100, n: 1284 },
    { l: "Shortlisted", v: 36, n: 462 },
    { l: "Assessment", v: 22, n: 282 },
    { l: "Interview", v: 12, n: 154 },
    { l: "Offer", v: 5, n: 64 },
    { l: "Hired", v: 4, n: 50 },
  ];
  return (
    <div className="space-y-2">
      {stages.map(s => (
        <div key={s.l}>
          <div className="flex justify-between text-xs mb-1"><span>{s.l}</span><span className="text-muted-foreground">{s.n}</span></div>
          <div className="h-7 bg-surface rounded-md overflow-hidden border border-border">
            <div className="h-full bg-gradient-to-r from-primary to-secondary flex items-center px-2 text-xs font-medium text-primary-foreground" style={{ width: `${s.v}%` }}>{s.v}%</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function BarChart({ data }: { data: { l: string; v: number }[] }) {
  const max = Math.max(...data.map(d => d.v));
  return (
    <div className="flex items-end gap-3 h-44">
      {data.map(d => (
        <div key={d.l} className="flex-1 flex flex-col items-center gap-2">
          <div className="w-full bg-gradient-to-t from-primary to-secondary rounded-md" style={{ height: `${(d.v / max) * 100}%` }} />
          <div className="text-xs text-muted-foreground">{d.l}</div>
        </div>
      ))}
    </div>
  );
}

function Donut({ data }: { data: { l: string; v: number; c: string }[] }) {
  const total = data.reduce((a, d) => a + d.v, 0);
  let acc = 0;
  const r = 60, c = 2 * Math.PI * r;
  return (
    <div className="flex items-center gap-6">
      <svg width="160" height="160" viewBox="0 0 160 160" className="-rotate-90">
        {data.map((d, i) => {
          const len = (d.v / total) * c;
          const off = c - acc;
          acc += len;
          return <circle key={i} cx="80" cy="80" r={r} stroke={d.c} strokeWidth="20" fill="none"
            strokeDasharray={`${len} ${c - len}`} strokeDashoffset={off} />;
        })}
      </svg>
      <div className="flex-1 space-y-1.5">
        {data.map(d => (
          <div key={d.l} className="flex items-center gap-2 text-xs">
            <span className="w-3 h-3 rounded-sm" style={{ background: d.c }} />
            <span className="flex-1">{d.l}</span>
            <span className="text-muted-foreground">{d.v}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
