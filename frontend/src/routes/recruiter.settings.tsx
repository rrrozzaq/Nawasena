import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/primitives";

export const Route = createFileRoute("/recruiter/settings")({
  head: () => ({ meta: [{ title: "Settings — Recruiter" }] }),
  component: () => (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-semibold mb-6">Settings</h1>
      <Card className="p-6 space-y-4">
        <Row label="Company" value="Bank Mandiri" />
        <Row label="Plan" value="Enterprise" />
        <Row label="Team members" value="12" />
        <Row label="Email notifications" value="Enabled" />
      </Card>
    </div>
  ),
});

function Row({ label, value }: { label: string; value: string }) {
  return <div className="flex justify-between py-2 border-b border-border last:border-0"><span className="text-muted-foreground text-sm">{label}</span><span className="text-sm font-medium">{value}</span></div>;
}
