import { createFileRoute } from "@tanstack/react-router";
import { Card, Tag } from "@/components/primitives";
import { communityPosts } from "@/lib/mock-data";
import { Heart, MessageSquare, Bookmark, Share2 } from "lucide-react";

export const Route = createFileRoute("/app/community")({
  head: () => ({ meta: [{ title: "Community — Nawasena" }] }),
  component: Community,
});

const sections = ["All","Career Articles","Student Discussions","Mentor Sessions","Company Insights","Interview Experiences"];

function Community() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Community</h1>
        <p className="text-sm text-muted-foreground mt-1">Learn from mentors and peers walking the same path.</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {sections.map((s, i) => (
          <button key={s} className={`px-3 py-1.5 rounded-full text-sm border ${i === 0 ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border text-muted-foreground hover:text-foreground"}`}>{s}</button>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          {communityPosts.map(p => (
            <Card key={p.title} className="p-5 hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-xs font-semibold text-primary-foreground">{p.author.split(" ").map(n => n[0]).join("")}</div>
                <div className="flex-1">
                  <div className="text-sm font-medium">{p.author}</div>
                  <div className="text-xs text-muted-foreground">{p.role} • {p.time}</div>
                </div>
                <Tag variant="muted">{p.tag}</Tag>
              </div>
              <h3 className="font-semibold text-lg leading-snug">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
              <div className="mt-4 pt-4 border-t border-border flex items-center gap-5 text-xs text-muted-foreground">
                <button className="flex items-center gap-1.5 hover:text-primary"><Heart className="w-4 h-4" /> {p.likes}</button>
                <button className="flex items-center gap-1.5 hover:text-primary"><MessageSquare className="w-4 h-4" /> {p.comments}</button>
                <button className="flex items-center gap-1.5 hover:text-primary ml-auto"><Bookmark className="w-4 h-4" /></button>
                <button className="flex items-center gap-1.5 hover:text-primary"><Share2 className="w-4 h-4" /></button>
              </div>
            </Card>
          ))}
        </div>

        <div className="space-y-4">
          <Card className="p-5">
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Trending Topics</div>
            {["#FrontendInterview","#MagangBUMN","#FreshGrad2025","#ProductManager","#DataAnalyst"].map(t => (
              <div key={t} className="py-2 border-t border-border first:border-0 first:pt-0 text-sm hover:text-primary cursor-pointer">{t}</div>
            ))}
          </Card>
          <Card className="p-5">
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Active Mentors</div>
            {["Andi Pratama","Rizky Fauzi","Maya R."].map(m => (
              <div key={m} className="flex items-center gap-3 py-2.5 border-t border-border first:border-0 first:pt-0">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-xs font-semibold text-primary-foreground">{m.split(" ").map(n => n[0]).join("")}</div>
                <div className="flex-1 text-sm">{m}</div>
                <button className="text-xs text-primary">Follow</button>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
}
