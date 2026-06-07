import { createFileRoute } from "@tanstack/react-router";
import { Card, Tag } from "@/components/primitives";
import { applications } from "@/lib/mock-data";
import { Plus } from "lucide-react";

export const Route = createFileRoute("/app/applications")({
  head: () => ({ meta: [{ title: "Applications — Nawasena" }] }),
  component: Applications,
});

const cols = ["Wishlist","Applied","Assessment","Interview","Offer","Rejected"] as const;
const colorMap: Record<string, "muted"|"primary"|"warning"|"success"|"danger"> = {
  Wishlist: "muted", Applied: "primary", Assessment: "warning",
  Interview: "warning", Offer: "success", Rejected: "danger",
};

function Applications() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Application Tracker</h1>
        <p className="text-sm text-muted-foreground mt-1">Manage every step of your job hunt.</p>
      </div>

      <div className="grid grid-cols-6 gap-4 min-w-[1100px] overflow-x-auto">
        {cols.map(col => (
          <div key={col}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full bg-${colorMap[col] === "muted" ? "muted-foreground" : "primary"}`} />
                <h2 className="text-sm font-semibold">{col}</h2>
                <span className="text-xs text-muted-foreground">({applications[col].length})</span>
              </div>
              <button className="text-muted-foreground hover:text-primary"><Plus className="w-4 h-4" /></button>
            </div>
            <div className="space-y-2">
              {applications[col].map(a => (
                <Card key={a.id} className="p-3 cursor-grab hover:border-primary/50">
                  <div className="text-sm font-medium leading-tight">{a.job}</div>
                  <div className="text-xs text-muted-foreground mt-1">{a.company}</div>
                  <div className="mt-3 flex items-center justify-between">
                    <Tag variant={colorMap[col]}>{col}</Tag>
                    <span className="text-xs text-muted-foreground">{a.date}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
