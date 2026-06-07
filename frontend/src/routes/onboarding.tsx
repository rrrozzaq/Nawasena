import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles, ArrowRight, ArrowLeft, Check, Mail, Linkedin, ChevronRight } from "lucide-react";
import { universities, careerInterests, locations, skillBank } from "@/lib/mock-data";

export const Route = createFileRoute("/onboarding")({
  head: () => ({ meta: [{ title: "Get Started — Nawasena" }] }),
  component: Onboarding,
});

type Data = {
  fullName: string; university: string; major: string; year: string;
  interests: string[]; locations: string[]; skills: string[]; salary: number;
};

function Onboarding() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [data, setData] = useState<Data>({
    fullName: "Abdul Rozzaq", university: "", major: "Informatika", year: "2025",
    interests: [], locations: [], skills: [], salary: 10,
  });

  const steps = ["Sign up","Personal Info","Career Interests","Locations","Skills","Salary","Review"];

  const next = () => setStep(s => Math.min(s + 1, steps.length - 1));
  const back = () => setStep(s => Math.max(s - 1, 0));
  const finish = () => navigate({ to: "/app" });

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="h-16 border-b border-border flex items-center px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center"><Sparkles className="w-4 h-4 text-primary-foreground" /></div>
          <span className="font-semibold">Nawasena</span>
        </Link>
        <div className="ml-auto text-sm text-muted-foreground">Step {step + 1} of {steps.length}</div>
      </header>

      {/* progress */}
      <div className="h-1 bg-surface">
        <div className="h-full bg-primary transition-all" style={{ width: `${((step + 1) / steps.length) * 100}%` }} />
      </div>

      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-2xl">
          {step === 0 && <StepSignup onNext={next} />}
          {step === 1 && <StepPersonal data={data} setData={setData} />}
          {step === 2 && <StepInterests data={data} setData={setData} />}
          {step === 3 && <StepLocations data={data} setData={setData} />}
          {step === 4 && <StepSkills data={data} setData={setData} />}
          {step === 5 && <StepSalary data={data} setData={setData} />}
          {step === 6 && <StepReview data={data} />}

          {step > 0 && (
            <div className="mt-8 flex items-center justify-between">
              <button onClick={back} className="inline-flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground">
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
              {step < steps.length - 1 ? (
                <button onClick={next} className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-medium rounded-xl px-6 py-3 hover:bg-secondary">
                  Continue <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button onClick={finish} className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-medium rounded-xl px-6 py-3 hover:bg-secondary">
                  Enter Nawasena <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

function Title({ k, t, s }: { k: string; t: string; s: string }) {
  return (
    <div className="mb-8">
      <div className="text-xs uppercase tracking-wider text-primary mb-2">{k}</div>
      <h1 className="text-3xl font-bold tracking-tight">{t}</h1>
      <p className="mt-2 text-muted-foreground">{s}</p>
    </div>
  );
}

function StepSignup({ onNext }: { onNext: () => void }) {
  return (
    <div>
      <Title k="Welcome" t="Create your Nawasena account" s="Start your AI-guided career journey." />
      <div className="space-y-3">
        {[
          { icon: <GoogleIcon />, label: "Continue with Google" },
          { icon: <Linkedin className="w-5 h-5 text-[#0A66C2]" />, label: "Continue with LinkedIn" },
          { icon: <Mail className="w-5 h-5 text-primary" />, label: "Continue with Email" },
        ].map((o) => (
          <button key={o.label} onClick={onNext}
            className="w-full flex items-center gap-3 bg-card border border-border rounded-xl px-5 py-4 hover:border-primary/50 transition">
            {o.icon}
            <span className="font-medium">{o.label}</span>
            <ChevronRight className="ml-auto w-4 h-4 text-muted-foreground" />
          </button>
        ))}
      </div>
      <p className="mt-6 text-xs text-muted-foreground text-center">
        By continuing, you agree to our Terms and Privacy Policy.
      </p>
    </div>
  );
}

function GoogleIcon() {
  return <div className="w-5 h-5 rounded-sm bg-white flex items-center justify-center text-[10px] font-bold text-[#4285F4]">G</div>;
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <div className="text-sm text-muted-foreground mb-1.5">{label}</div>
      {children}
    </label>
  );
}

const inputCls = "w-full bg-card border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary";

function StepPersonal({ data, setData }: { data: Data; setData: (d: Data) => void }) {
  return (
    <div>
      <Title k="Step 2" t="Tell us about yourself" s="We'll personalize your roadmap recommendations." />
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Full Name"><input className={inputCls} value={data.fullName} onChange={e => setData({ ...data, fullName: e.target.value })} /></Field>
        <Field label="University">
          <select className={inputCls} value={data.university} onChange={e => setData({ ...data, university: e.target.value })}>
            <option value="">Select…</option>
            {universities.map(u => <option key={u}>{u}</option>)}
          </select>
        </Field>
        <Field label="Major"><input className={inputCls} value={data.major} onChange={e => setData({ ...data, major: e.target.value })} /></Field>
        <Field label="Graduation Year">
          <select className={inputCls} value={data.year} onChange={e => setData({ ...data, year: e.target.value })}>
            {["2023","2024","2025","2026","2027"].map(y => <option key={y}>{y}</option>)}
          </select>
        </Field>
      </div>
    </div>
  );
}

function ToggleChip({ on, onClick, children }: { on: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button onClick={onClick}
      className={`px-4 py-2 rounded-xl border text-sm transition-colors ${on ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border hover:border-primary/50"}`}>
      {children}
    </button>
  );
}

function StepInterests({ data, setData }: { data: Data; setData: (d: Data) => void }) {
  const toggle = (v: string) => {
    if (data.interests.includes(v)) setData({ ...data, interests: data.interests.filter(i => i !== v) });
    else if (data.interests.length < 3) setData({ ...data, interests: [...data.interests, v] });
  };
  return (
    <div>
      <Title k="Step 3" t="What roles interest you?" s="Pick up to 3. We'll show roadmaps and jobs for these." />
      <div className="flex flex-wrap gap-2">
        {careerInterests.map(c => <ToggleChip key={c} on={data.interests.includes(c)} onClick={() => toggle(c)}>{c}</ToggleChip>)}
      </div>
      <div className="mt-4 text-xs text-muted-foreground">{data.interests.length}/3 selected</div>
    </div>
  );
}

function StepLocations({ data, setData }: { data: Data; setData: (d: Data) => void }) {
  const toggle = (v: string) => {
    if (data.locations.includes(v)) setData({ ...data, locations: data.locations.filter(i => i !== v) });
    else if (data.locations.length < 3) setData({ ...data, locations: [...data.locations, v] });
  };
  return (
    <div>
      <Title k="Step 4" t="Where do you want to work?" s="Pick up to 3 countries." />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {locations.map(l => {
          const on = data.locations.includes(l.code);
          return (
            <button key={l.code} onClick={() => toggle(l.code)}
              className={`p-4 rounded-xl border text-left transition ${on ? "bg-primary/10 border-primary" : "bg-card border-border hover:border-primary/50"}`}>
              <div className="text-3xl">{l.flag}</div>
              <div className="mt-2 text-sm font-medium">{l.name}</div>
              {on && <Check className="w-4 h-4 text-primary mt-1" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function StepSkills({ data, setData }: { data: Data; setData: (d: Data) => void }) {
  const toggle = (v: string) => {
    setData({ ...data, skills: data.skills.includes(v) ? data.skills.filter(i => i !== v) : [...data.skills, v] });
  };
  return (
    <div>
      <Title k="Step 5" t="What skills do you already have?" s="We'll use this to calculate your Career Readiness Score." />
      <div className="flex flex-wrap gap-2">
        {skillBank.map(s => <ToggleChip key={s} on={data.skills.includes(s)} onClick={() => toggle(s)}>{s}</ToggleChip>)}
      </div>
    </div>
  );
}

function StepSalary({ data, setData }: { data: Data; setData: (d: Data) => void }) {
  return (
    <div>
      <Title k="Step 6" t="Expected monthly salary" s="In millions of IDR. Just so we can match you better." />
      <div className="bg-card border border-border rounded-2xl p-8">
        <div className="text-center">
          <div className="text-5xl font-bold text-primary">Rp {data.salary} jt</div>
          <div className="text-sm text-muted-foreground mt-2">per month</div>
        </div>
        <input type="range" min={3} max={50} value={data.salary}
          onChange={e => setData({ ...data, salary: Number(e.target.value) })}
          className="w-full mt-8 accent-(--color-primary)" />
        <div className="flex justify-between text-xs text-muted-foreground mt-2">
          <span>Rp 3 jt</span><span>Rp 50 jt</span>
        </div>
      </div>
    </div>
  );
}

function StepReview({ data }: { data: Data }) {
  return (
    <div>
      <Title k="Almost done!" t="Your profile is ready" s="Review and dive into Nawasena." />
      <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
        <Row label="Name" value={data.fullName} />
        <Row label="Education" value={`${data.university || "—"} • ${data.major} • ${data.year}`} />
        <Row label="Interests" value={data.interests.join(", ") || "—"} />
        <Row label="Locations" value={data.locations.map(c => locations.find(l => l.code === c)?.name).join(", ") || "—"} />
        <Row label="Skills" value={`${data.skills.length} skills selected`} />
        <Row label="Expected salary" value={`Rp ${data.salary} jt / month`} />
      </div>
    </div>
  );
}
function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4 pb-3 border-b border-border last:border-0 last:pb-0">
      <div className="text-sm text-muted-foreground">{label}</div>
      <div className="text-sm text-right max-w-[60%]">{value}</div>
    </div>
  );
}
