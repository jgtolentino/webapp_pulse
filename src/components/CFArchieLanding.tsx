import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import '../styles/cleverfranke-system.css';

const features = [
  { 
    title: 'Account Intelligence', 
    body: 'Firmographics + intent + org chart, auto-enriched.',
    metric: '94%',
    metricLabel: 'Data Accuracy'
  },
  { 
    title: 'Personalized Sequences', 
    body: 'Message packs tuned per persona and stage.',
    metric: '3.2x',
    metricLabel: 'Response Rate'
  },
  { 
    title: 'Live Routing', 
    body: 'Handoff to human when reply intent ≥ threshold.',
    metric: '<2min',
    metricLabel: 'Response Time'
  },
  { 
    title: 'Enterprise Guardrails', 
    body: 'No credential access; Bruno-secure executor only.',
    metric: '100%',
    metricLabel: 'Security Compliance'
  }
];

const proofPoints = [
  'TBWA\\SMP',
  'Databricks PoC',
  'Vercel Partner',
  'Supabase Accelerator'
];

function Hero() {
  return (
    <section className="cf-section" style={{ paddingTop: 'var(--space-32)' }}>
      <div className="cf-container">
        <div className="cf-fade-in">
          <div className="cf-caption" style={{ marginBottom: 'var(--space-6)' }}>
            InsightPulseAI
          </div>
          
          <h1 className="cf-headline" style={{ marginBottom: 'var(--space-8)' }}>
            Arkie
            <br />
            <span style={{ fontWeight: 'var(--font-weight-heavy)' }}>Books real meetings.</span>
            <br />
            <span style={{ color: 'var(--color-neutral-500)' }}>Not vanity clicks.</span>
          </h1>
          
          <div className="cf-subhead" style={{ maxWidth: '600px', marginBottom: 'var(--space-12)' }}>
            Cold outreach → lead enrichment → personalized sequences → live handoff. 
            Built for real ROI, not engagement theater.
          </div>
          
          <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
            <a href="#demo" className="cf-button cf-button-primary">
              Watch 60s Demo
            </a>
            <a href="#contact" className="cf-button cf-button-secondary">
              Start Pilot Program
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProofSection() {
  return (
    <section style={{ paddingTop: 'var(--space-20)', paddingBottom: 'var(--space-12)' }}>
      <div className="cf-container">
        <div className="cf-caption" style={{ marginBottom: 'var(--space-6)' }}>
          Trusted by
        </div>
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: 'var(--space-8)',
          alignItems: 'center',
          opacity: 0.7
        }}>
          {proofPoints.map((point, i) => (
            <div key={i} style={{ 
              fontSize: '1.125rem',
              fontWeight: 'var(--font-weight-medium)',
              color: 'var(--color-neutral-600)'
            }}>
              {point}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MetricsGrid() {
  const metrics = [
    { value: '127%', label: 'Meeting booking rate vs. human SDRs', highlight: true },
    { value: '18min', label: 'Average qualification time' },
    { value: '94%', label: 'Lead data accuracy' },
    { value: '$47K', label: 'Average pipeline per month' }
  ];

  return (
    <section className="cf-section">
      <div className="cf-container">
        <div className="grid-cf-2" style={{ gap: 'var(--space-16)', alignItems: 'center' }}>
          <div>
            <h2 className="cf-headline" style={{ fontSize: 'clamp(1.875rem, 4vw, 3rem)', marginBottom: 'var(--space-6)' }}>
              Performance that matters
            </h2>
            <div className="cf-body" style={{ marginBottom: 'var(--space-8)' }}>
              Stop optimizing for vanity metrics. Arkie focuses on the only thing that matters: 
              qualified meetings that convert to revenue.
            </div>
            <a href="#contact" className="cf-link">
              See case studies →
            </a>
          </div>
          
          <div className="grid-cf" style={{ gap: 'var(--space-8)' }}>
            {metrics.map((metric, i) => (
              <div key={i} className="cf-card" style={{ 
                textAlign: 'center',
                ...(metric.highlight && {
                  borderColor: 'var(--color-black)',
                  background: 'linear-gradient(135deg, var(--color-neutral-50) 0%, var(--color-white) 100%)'
                })
              }}>
                <div style={{ 
                  fontSize: '2.5rem',
                  fontWeight: 'var(--font-weight-heavy)',
                  color: metric.highlight ? 'var(--color-black)' : 'var(--color-neutral-800)',
                  marginBottom: 'var(--space-2)'
                }}>
                  {metric.value}
                </div>
                <div style={{ 
                  fontSize: '0.875rem',
                  color: 'var(--color-neutral-600)',
                  lineHeight: 1.4
                }}>
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureGrid() {
  return (
    <section className="cf-section" style={{ backgroundColor: 'var(--color-neutral-50)' }}>
      <div className="cf-container">
        <div className="cf-caption" style={{ marginBottom: 'var(--space-6)' }}>
          How it works
        </div>
        <h2 className="cf-headline" style={{ 
          fontSize: 'clamp(1.875rem, 4vw, 3rem)', 
          marginBottom: 'var(--space-16)' 
        }}>
          Four-stage qualification engine
        </h2>
        
        <div className="grid-cf-2" style={{ gap: 'var(--space-12)' }}>
          {features.map((feature, i) => (
            <div key={i} className="cf-card" style={{ position: 'relative' }}>
              <div style={{ 
                position: 'absolute',
                top: 'var(--space-4)',
                right: 'var(--space-6)',
                fontSize: '0.75rem',
                color: 'var(--color-neutral-400)',
                fontWeight: 'var(--font-weight-medium)'
              }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              
              <h3 style={{ 
                fontSize: '1.5rem',
                fontWeight: 'var(--font-weight-semibold)',
                marginBottom: 'var(--space-4)',
                color: 'var(--color-neutral-900)'
              }}>
                {feature.title}
              </h3>
              
              <p className="cf-body" style={{ 
                marginBottom: 'var(--space-8)',
                color: 'var(--color-neutral-700)'
              }}>
                {feature.body}
              </p>
              
              <div style={{ 
                display: 'flex',
                alignItems: 'baseline',
                gap: 'var(--space-2)'
              }}>
                <div style={{ 
                  fontSize: '2rem',
                  fontWeight: 'var(--font-weight-heavy)',
                  color: 'var(--color-neutral-900)'
                }}>
                  {feature.metric}
                </div>
                <div style={{ 
                  fontSize: '0.875rem',
                  color: 'var(--color-neutral-500)',
                  fontWeight: 'var(--font-weight-medium)'
                }}>
                  {feature.metricLabel}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DemoSection() {
  return (
    <section id="demo" className="cf-section">
      <div className="cf-container">
        <div className="grid-cf-2" style={{ gap: 'var(--space-16)', alignItems: 'center' }}>
          <div>
            <div className="cf-caption" style={{ marginBottom: 'var(--space-6)' }}>
              See it in action
            </div>
            <h2 className="cf-headline" style={{ 
              fontSize: 'clamp(1.875rem, 4vw, 3rem)', 
              marginBottom: 'var(--space-6)' 
            }}>
              60-second walkthrough
            </h2>
            <div className="cf-body" style={{ marginBottom: 'var(--space-8)' }}>
              Watch Arkie handle a complete outreach cycle: prospecting → enrichment → 
              personalized sequence → qualified handoff to human.
            </div>
            <a href="#contact" className="cf-link">
              Request live demo →
            </a>
          </div>
          
          <div style={{ 
            aspectRatio: '16/9',
            backgroundColor: 'var(--color-neutral-100)',
            border: '1px solid var(--color-neutral-200)',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                width: '64px',
                height: '64px',
                backgroundColor: 'var(--color-neutral-300)',
                borderRadius: '50%',
                margin: '0 auto var(--space-4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{ 
                  width: '0',
                  height: '0',
                  borderLeft: '16px solid var(--color-neutral-600)',
                  borderTop: '12px solid transparent',
                  borderBottom: '12px solid transparent',
                  marginLeft: '4px'
                }} />
              </div>
              <div style={{ 
                fontSize: '0.875rem',
                color: 'var(--color-neutral-500)',
                fontWeight: 'var(--font-weight-medium)'
              }}>
                Demo video coming soon
              </div>
            </div>
          </div>
        </div>
      </div>
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
    const ip = undefined;
    const { error } = await supabase.from('leads').insert([{ ...payload, ip }]);
    setLoading(false);
    if (error) setMsg('Submission failed. Try again in a minute.'); 
    else { 
      setMsg('Thanks — we will reach out within 24 hours.'); 
      form.reset(); 
    }
  };

  return (
    <section id="contact" className="cf-section" style={{ backgroundColor: 'var(--color-neutral-900)' }}>
      <div className="cf-container">
        <div className="grid-cf-2" style={{ gap: 'var(--space-16)', alignItems: 'center' }}>
          <div>
            <div className="cf-caption" style={{ 
              marginBottom: 'var(--space-6)',
              color: 'var(--color-neutral-400)'
            }}>
              Start pilot program
            </div>
            <h2 className="cf-headline" style={{ 
              fontSize: 'clamp(1.875rem, 4vw, 3rem)', 
              marginBottom: 'var(--space-6)',
              color: 'var(--color-white)'
            }}>
              Book more meetings next month
            </h2>
            <div className="cf-body" style={{ 
              marginBottom: 'var(--space-8)',
              color: 'var(--color-neutral-300)'
            }}>
              30-day pilot program. No long-term contracts. 
              We'll set up Arkie for your specific use case and you only pay for qualified meetings.
            </div>
            
            <div style={{ marginBottom: 'var(--space-8)' }}>
              <div style={{ 
                fontSize: '0.875rem',
                fontWeight: 'var(--font-weight-medium)',
                color: 'var(--color-neutral-400)',
                marginBottom: 'var(--space-4)'
              }}>
                Pilot includes:
              </div>
              <ul style={{ 
                listStyle: 'none',
                padding: 0,
                margin: 0,
                color: 'var(--color-neutral-300)'
              }}>
                {[
                  'Account list analysis & scoring',
                  'Custom message sequence creation',
                  'CRM integration & handoff setup',
                  'Weekly performance reviews'
                ].map((item, i) => (
                  <li key={i} style={{ 
                    padding: 'var(--space-2) 0',
                    position: 'relative',
                    paddingLeft: 'var(--space-6)'
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: 0,
                      top: 'var(--space-3)',
                      width: '4px',
                      height: '4px',
                      backgroundColor: 'var(--color-neutral-400)',
                      borderRadius: '50%'
                    }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div style={{ 
            backgroundColor: 'var(--color-white)',
            padding: 'var(--space-10)',
            borderRadius: '4px'
          }}>
            <form onSubmit={submit} style={{ display: 'grid', gap: 'var(--space-6)' }}>
              <input
                name="email"
                type="email"
                placeholder="Work email*"
                required
                className="cf-input"
              />
              <input
                name="name"
                placeholder="Name"
                className="cf-input"
              />
              <input
                name="company"
                placeholder="Company"
                className="cf-input"
              />
              <input
                name="intent"
                placeholder="What do you want Arkie to help with?"
                className="cf-input"
              />
              <button
                disabled={loading}
                className="cf-button cf-button-primary"
                type="submit"
                style={{ padding: 'var(--space-5) var(--space-8)' }}
              >
                {loading ? 'Sending…' : 'Start 30-Day Pilot'}
              </button>
              {msg && (
                <p style={{ 
                  fontSize: '0.875rem',
                  color: msg.includes('failed') ? 'var(--color-red-500)' : 'var(--color-green-500)',
                  margin: 0,
                  textAlign: 'center'
                }}>
                  {msg}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ 
      padding: 'var(--space-12) 0',
      backgroundColor: 'var(--color-black)',
      color: 'var(--color-neutral-400)'
    }}>
      <div className="cf-container">
        <div style={{ 
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 'var(--space-4)'
        }}>
          <div style={{ 
            fontSize: '0.875rem',
            fontWeight: 'var(--font-weight-medium)'
          }}>
            © {new Date().getFullYear()} InsightPulseAI
          </div>
          <div style={{ 
            fontSize: '0.875rem'
          }}>
            Built with Bruno + Supabase + Vercel
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function CFArchieLanding() {
  return (
    <div style={{ 
      minHeight: '100vh',
      backgroundColor: 'var(--color-white)',
      fontFamily: 'var(--font-family)'
    }}>
      <Hero />
      <ProofSection />
      <MetricsGrid />
      <FeatureGrid />
      <DemoSection />
      <LeadForm />
      <Footer />
    </div>
  );
}