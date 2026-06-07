import { ReactNode } from "react";

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`bg-card border border-border rounded-xl ${className}`}>{children}</div>;
}

export function Stat({ label, value, sub, accent = false }: { label: string; value: string | number; sub?: string; accent?: boolean }) {
  return (
    <Card className="p-4">
      <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className={`mt-2 text-2xl font-semibold ${accent ? "text-primary" : ""}`}>{value}</div>
      {sub && <div className="text-xs text-muted-foreground mt-1">{sub}</div>}
    </Card>
  );
}

export function ScoreRing({ value, size = 120, label }: { value: number; size?: number; label?: string }) {
  const r = (size - 12) / 2;
  const c = 2 * Math.PI * r;
  const offset = c - (value / 100) * c;
  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size/2} cy={size/2} r={r} stroke="var(--color-border)" strokeWidth="8" fill="none" />
        <circle cx={size/2} cy={size/2} r={r} stroke="var(--color-primary)" strokeWidth="8" fill="none"
          strokeDasharray={c} strokeDashoffset={offset} strokeLinecap="round" className="transition-all" />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-2xl font-semibold">{value}<span className="text-base text-muted-foreground">%</span></div>
        {label && <div className="text-[10px] text-muted-foreground uppercase tracking-wider">{label}</div>}
      </div>
    </div>
  );
}

export function Bar({ value, color = "var(--color-primary)" }: { value: number; color?: string }) {
  return (
    <div className="h-2 bg-surface rounded-full overflow-hidden">
      <div className="h-full rounded-full transition-all" style={{ width: `${value}%`, background: color }} />
    </div>
  );
}

export function Tag({ children, variant = "default" }: { children: ReactNode; variant?: "default" | "primary" | "success" | "warning" | "danger" | "muted" }) {
  const cls = {
    default: "bg-surface text-foreground border-border",
    primary: "bg-primary/15 text-primary border-primary/30",
    success: "bg-primary/15 text-primary border-primary/30",
    warning: "bg-[oklch(0.78_0.15_75)]/15 text-[oklch(0.78_0.15_75)] border-[oklch(0.78_0.15_75)]/30",
    danger: "bg-destructive/15 text-destructive border-destructive/30",
    muted: "bg-surface text-muted-foreground border-border",
  }[variant];
  return <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs border ${cls}`}>{children}</span>;
}

export function CompanyLogo({ name, color, size = 40 }: { name: string; color: string; size?: number }) {
  return (
    <div
      className="rounded-lg flex items-center justify-center font-bold text-white text-sm shrink-0"
      style={{ width: size, height: size, background: color }}
    >
      {name.slice(0, 2).toUpperCase()}
    </div>
  );
}
