import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, Compass, Map, BookOpen, Mic, Users, Building2, ArrowRight, CheckCircle2, Target, Brain, Rocket } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nawasena — Prepare for Your Dream Career with AI" },
      { name: "description", content: "AI-powered career prep platform. Discover jobs, follow roadmaps, learn skills, practice interviews, become job-ready." },
      { property: "og:title", content: "Nawasena — AI Career Preparation" },
      { property: "og:description", content: "Don't just find jobs. Build the journey to land them." },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Logos />
      <Features />
      <HowItWorks />
      <Differentiator />
      <CTA />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-background/80 border-b border-border">
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-semibold tracking-tight">Nawasena</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground">Features</a>
          <a href="#how" className="hover:text-foreground">How it works</a>
          <Link to="/recruiter" className="hover:text-foreground">For Recruiters</Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/onboarding" className="text-sm text-muted-foreground hover:text-foreground px-3 py-2">Sign in</Link>
          <Link to="/onboarding" className="text-sm bg-primary text-primary-foreground font-medium rounded-lg px-4 py-2 hover:bg-secondary transition-colors">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px]" />
      <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-medium mb-6">
            <Sparkles className="w-3 h-3" /> AI-Powered Career Preparation
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
            Prepare for Your Dream Career with <span className="text-gradient-primary">AI</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-lg">
            Discover jobs, follow career roadmaps, learn required skills, practice interviews, and become truly job-ready.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/onboarding"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-medium rounded-xl px-6 py-3 hover:bg-secondary transition-colors">
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/app/discover"
              className="inline-flex items-center gap-2 bg-surface border border-border rounded-xl px-6 py-3 font-medium hover:border-primary/50">
              Explore Jobs
            </Link>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> 6,000+ students</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> 800+ companies</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> 100+ roadmaps</div>
          </div>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-2xl" />
      <div className="relative bg-card border border-border rounded-2xl p-6 shadow-2xl">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-xs text-muted-foreground">Frontend Developer • GoTo</div>
            <div className="font-semibold mt-0.5">Your Career Readiness</div>
          </div>
          <div className="text-3xl font-bold text-primary">72%</div>
        </div>
        <div className="h-2 bg-surface rounded-full overflow-hidden mb-6">
          <div className="h-full bg-gradient-to-r from-primary to-secondary rounded-full" style={{ width: "72%" }} />
        </div>
        <div className="space-y-3">
          {[
            { skill: "HTML", done: true },
            { skill: "CSS", done: true },
            { skill: "JavaScript", done: true },
            { skill: "React", done: false },
            { skill: "State Management", done: false },
          ].map((s) => (
            <div key={s.skill} className="flex items-center gap-3 p-3 bg-surface rounded-lg border border-border">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center ${s.done ? "bg-primary text-primary-foreground" : "bg-card border border-border text-muted-foreground"}`}>
                {s.done ? <CheckCircle2 className="w-4 h-4" /> : <span className="text-xs">•</span>}
              </div>
              <div className="flex-1 text-sm">{s.skill}</div>
              <div className="text-xs text-muted-foreground">{s.done ? "Done" : "Learn"}</div>
            </div>
          ))}
        </div>
        <div className="mt-5 p-4 rounded-xl bg-primary/10 border border-primary/30">
          <div className="flex items-start gap-3">
            <Brain className="w-5 h-5 text-primary mt-0.5" />
            <div className="text-sm">
              <div className="font-medium text-primary">AI Suggests</div>
              <div className="text-muted-foreground mt-1">Complete React (35h) to reach 85% readiness for this role.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Logos() {
  return (
    <section className="border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="text-center text-xs uppercase tracking-wider text-muted-foreground mb-6">
          Students hired at
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 text-muted-foreground/70 font-semibold text-lg">
          {["GoTo","Shopee","Tokopedia","Bank Mandiri","Telkom","Astra","BINUS","ITB"].map(n => (
            <span key={n}>{n}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

const features = [
  { icon: Compass, title: "Job Discovery", desc: "Curated jobs and internships from top Indonesian companies." },
  { icon: Map, title: "Career Roadmaps", desc: "Every job comes with a structured roadmap from zero to qualified." },
  { icon: BookOpen, title: "Learning Resources", desc: "Articles, videos, projects, quizzes — tied to every skill." },
  { icon: Mic, title: "AI Interview Practice", desc: "Mock interviews with real-time AI feedback on clarity, confidence, and content." },
  { icon: Users, title: "Community Learning", desc: "Connect with mentors and peers walking the same path." },
  { icon: Building2, title: "Recruiter Matching", desc: "Get auto-matched and ranked to roles you're truly ready for." },
];

function Features() {
  return (
    <section id="features" className="border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-wider text-primary mb-3">Everything you need</div>
          <h2 className="text-4xl font-bold tracking-tight">A complete platform to become job-ready</h2>
          <p className="mt-4 text-muted-foreground">Not just job listings. The full journey — from discovery to offer.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-colors">
              <div className="w-11 h-11 rounded-xl bg-primary/15 text-primary flex items-center justify-center mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <div className="font-semibold">{title}</div>
              <div className="mt-2 text-sm text-muted-foreground">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  { icon: Compass, title: "Discover a job", desc: "Browse roles matched to your goals." },
  { icon: Map, title: "View career roadmap", desc: "See the exact path to qualify." },
  { icon: BookOpen, title: "Learn required skills", desc: "Follow guided learning resources." },
  { icon: Mic, title: "Practice interviews", desc: "Mock interviews with AI feedback." },
  { icon: Rocket, title: "Apply confidently", desc: "Track applications, land offers." },
];

function HowItWorks() {
  return (
    <section id="how" className="border-b border-border bg-surface/40">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-wider text-primary mb-3">How it works</div>
          <h2 className="text-4xl font-bold tracking-tight">From curious student to confident hire</h2>
        </div>
        <div className="mt-12 grid md:grid-cols-5 gap-4">
          {steps.map((s, i) => (
            <div key={s.title} className="bg-card border border-border rounded-2xl p-5 relative">
              <div className="text-xs text-primary font-mono">STEP {i + 1}</div>
              <div className="mt-3 w-10 h-10 rounded-lg bg-surface flex items-center justify-center">
                <s.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="mt-3 font-semibold">{s.title}</div>
              <div className="mt-1 text-xs text-muted-foreground">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Differentiator() {
  return (
    <section className="border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-xs uppercase tracking-wider text-primary mb-3">Why Nawasena</div>
          <h2 className="text-4xl font-bold tracking-tight leading-tight">
            LinkedIn shows jobs.<br />
            <span className="text-gradient-primary">Nawasena shows the journey.</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            Every job posting on Nawasena contains a structured career roadmap. Every roadmap contains
            real learning resources. Every user gets a Career Readiness Score — so you know exactly
            what to do next.
          </p>
          <div className="mt-8 space-y-3">
            {[
              "Structured roadmap for every job posting",
              "AI gap analysis vs your current skills",
              "Mock interviews with measurable feedback",
              "Career Readiness Score recruiters trust",
            ].map(t => (
              <div key={t} className="flex items-center gap-3">
                <Target className="w-5 h-5 text-primary" />
                <span className="text-sm">{t}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-card border border-border rounded-2xl p-6">
          <div className="text-xs uppercase tracking-wider text-muted-foreground mb-4">Frontend Developer Roadmap</div>
          <div className="space-y-2">
            {["HTML","CSS","JavaScript","React","State Management","REST API","Portfolio Project","Interview Prep"].map((n, i) => (
              <div key={n} className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-semibold ${i < 3 ? "bg-primary text-primary-foreground" : "bg-surface border border-border text-muted-foreground"}`}>{i+1}</div>
                <div className={`flex-1 px-3 py-2 rounded-lg border text-sm ${i < 3 ? "bg-primary/10 border-primary/30 text-foreground" : "bg-surface border-border text-muted-foreground"}`}>{n}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="relative bg-card border border-border rounded-3xl p-12 overflow-hidden text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/20 blur-[120px]" />
          <div className="relative">
            <h2 className="text-4xl font-bold tracking-tight">Your dream career is one roadmap away.</h2>
            <p className="mt-4 text-muted-foreground">Free for students. No credit card required.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/onboarding" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-medium rounded-xl px-6 py-3 hover:bg-secondary">
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/recruiter" className="inline-flex items-center gap-2 bg-surface border border-border rounded-xl px-6 py-3 font-medium hover:border-primary/50">
                I'm a Recruiter
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center">
            <Sparkles className="w-3 h-3 text-primary-foreground" />
          </div>
          <span>© 2026 Nawasena. Built for ambitious students.</span>
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground">Privacy</a>
          <a href="#" className="hover:text-foreground">Terms</a>
          <a href="#" className="hover:text-foreground">Contact</a>
        </div>
      </div>
    </footer>
  );
}
