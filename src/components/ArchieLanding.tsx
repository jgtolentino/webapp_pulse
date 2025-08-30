import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

const features = [
  { title: 'Account intelligence', body: 'Firmographics + intent + org chart, auto-enriched.' },
  { title: 'Personalized sequences', body: 'Message packs tuned per persona and stage.' },
  { title: 'Live routing', body: 'Handoff to human when reply intent ≥ threshold.' },
  { title: 'Guardrails', body: 'No credential access; Bruno-secure executor only.' }
];

function Hero() {
  return (
    <section className="border-b bg-white">
      <div className="container py-16 md:py-24 max-w-6xl mx-auto px-4">
        <p className="text-xs tracking-widest uppercase text-zinc-500">InsightPulseAI</p>
        <h1 className="mt-3 text-4xl md:text-6xl font-semibold leading-tight">Arkie — AI SDR that books real meetings.</h1>
        <p className="mt-4 max-w-2xl text-zinc-600">
          Cold outreach → lead enrichment → personalized sequences → live handoff. Built for real ROI, not clicks.
        </p>
        <div className="mt-6 flex gap-3">
          <a href="#demo" className="rounded-md px-5 py-3 bg-black text-white hover:bg-gray-800 transition-colors">Watch 60s demo</a>
          <a href="#contact" className="rounded-md px-5 py-3 border border-gray-300 hover:border-gray-400 transition-colors">Start pilot</a>
        </div>
      </div>
    </section>
  );
}

function ProofRow() {
  return (
    <section className="container max-w-6xl mx-auto px-4 py-8">
      <div className="text-xs text-zinc-500 mb-3">As seen in</div>
      <div className="flex flex-wrap items-center gap-6 opacity-80">
        <span className="text-sm">TBWA\\SMP</span>
        <span className="text-sm">Databricks PoC</span>
        <span className="text-sm">Vercel</span>
        <span className="text-sm">Supabase</span>
      </div>
    </section>
  );
}

function FeatureGrid() {
  return (
    <section className="container max-w-6xl mx-auto px-4 py-12 grid gap-6 md:grid-cols-2">
      {features.map(f => (
        <div key={f.title} className="rounded-lg border p-5 hover:border-gray-300 transition-colors">
          <h3 className="text-lg font-semibold">{f.title}</h3>
          <p className="text-zinc-600 mt-2">{f.body}</p>
        </div>
      ))}
    </section>
  );
}

function LeadForm() {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMsg(null);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      email: String(formData.get('email') || '').trim(),
      name: String(formData.get('name') || '').trim(),
      company: String(formData.get('company') || '').trim(),
      intent: String(formData.get('intent') || '').trim(),
      ua: navigator.userAgent
    };
    const ip = undefined; // captured by edge if proxied; optional
    const { error } = await supabase.from('leads').insert([{ ...payload, ip }]);
    setLoading(false);
    if (error) setMsg('Submission failed. Try again in a minute.'); 
    else { 
      setMsg('Thanks — we will reach out.'); 
      form.reset(); 
    }
  };

  return (
    <div className="container max-w-6xl mx-auto px-4 py-12">
      <form id="contact" onSubmit={submit} className="rounded-lg border p-5 grid gap-3 md:grid-cols-2 max-w-2xl mx-auto">
        <input name="email" type="email" placeholder="Work email*" required className="border p-3 rounded focus:border-gray-400 outline-none" />
        <input name="name" placeholder="Name" className="border p-3 rounded focus:border-gray-400 outline-none" />
        <input name="company" placeholder="Company" className="border p-3 rounded md:col-span-2 focus:border-gray-400 outline-none" />
        <input name="intent" placeholder="What do you want Arkie to do?" className="border p-3 rounded md:col-span-2 focus:border-gray-400 outline-none" />
        <button disabled={loading} className="bg-black text-white rounded px-5 py-3 md:col-span-2 hover:bg-gray-800 transition-colors disabled:opacity-50">
          {loading ? 'Sending…' : 'Request pilot'}
        </button>
        {msg && <p className="text-sm text-zinc-600 md:col-span-2">{msg}</p>}
      </form>
    </div>
  );
}

function DemoSection() {
  return (
    <section id="demo" className="container max-w-6xl mx-auto px-4 py-12">
      <div className="rounded-lg border p-5">
        <h2 className="text-xl font-semibold">60-second demo</h2>
        <p className="text-zinc-600 mt-2">Short walkthrough of Arkie's outreach → enrichment → handoff loop.</p>
        <div className="aspect-video bg-zinc-100 mt-4 rounded grid place-items-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-zinc-300 rounded-full mx-auto mb-2"></div>
            <p className="text-sm text-zinc-500">Demo video coming soon</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="container max-w-6xl mx-auto px-4 py-12 text-xs text-zinc-500">
      © {new Date().getFullYear()} InsightPulseAI
    </footer>
  );
}

export default function ArchieLanding() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ProofRow />
      <FeatureGrid />
      <DemoSection />
      <LeadForm />
      <Footer />
    </div>
  );
}