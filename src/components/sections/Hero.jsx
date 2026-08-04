import { useEffect, useState } from 'react';
import { Sparkles, ArrowRight, Wand2, CheckCircle2, Gauge, Layers3 } from 'lucide-react';
import Button from '../ui/Button';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const enter = () =>
    `transition-all duration-700 ease-out motion-reduce:transition-none ${
      mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
    }`;

  const stagger = (ms) => ({ transitionDelay: mounted ? `${ms}ms` : '0ms' });

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.20),_transparent_42%),radial-gradient(circle_at_80%_70%,_rgba(168,85,247,0.20),_transparent_38%),linear-gradient(to_bottom_right,_#fff7ed,_#fffbf7_45%,_#fff1f2)]">
      <div
        className="pointer-events-none absolute -left-28 top-0 h-80 w-80 rounded-full bg-primary/25 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-8 h-72 w-72 rounded-full bg-accent/25 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(249,115,22,0.09) 1px, transparent 1px), linear-gradient(to bottom, rgba(249,115,22,0.09) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.7), transparent 75%)',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="text-center lg:text-left">
            <span
              className={`inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/75 px-4 py-1.5 text-sm font-semibold text-primary shadow-sm backdrop-blur ${enter()}`}
              style={stagger(0)}
            >
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              AI Concept Art Engine
            </span>

            <h1
              className={`mt-6 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl ${enter()}`}
              style={stagger(80)}
            >
              Turn Every Sketch Into{' '}
              <span className="gradient-text">Stunning AI Artwork</span>
            </h1>

            <p
              className={`mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-soft lg:mx-0 ${enter()}`}
              style={stagger(160)}
            >
              SketchSpark helps teams go from paper draft to polished visual
              directions in minutes. Generate, compare, and refine styles with a
              studio-style workflow built for creators.
            </p>

            <div
              className={`mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start justify-center ${enter()}`}
              style={stagger(240)}
            >
              <Button href="/#demo" size="lg">
                <span className="inline-flex items-center gap-2">
                  <Wand2 className="h-4 w-4" aria-hidden="true" />
                  AI Trial Demo
                </span>
              </Button>
              <Button href="/pricing" variant="secondary" size="lg">
                <span className="inline-flex items-center gap-2">
                  View Pricing
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Button>
            </div>

            <p
              className={`mt-4 text-sm text-ink-muted ${enter()}`}
              style={stagger(300)}
            >
              Built for speed: preview in seconds, export in production quality.
            </p>

            <div
              className={`mt-8 grid gap-3 sm:grid-cols-3 ${enter()}`}
              style={stagger(340)}
            >
              <div className="glass rounded-2xl px-4 py-3 text-left">
                <p className="text-xs uppercase tracking-wide text-ink-muted">
                  Avg Render
                </p>
                <p className="mt-1 inline-flex items-center gap-2 text-base font-semibold text-ink">
                  <Gauge className="h-4 w-4 text-primary" /> 2.8s
                </p>
              </div>
              <div className="glass rounded-2xl px-4 py-3 text-left">
                <p className="text-xs uppercase tracking-wide text-ink-muted">
                  Style Packs
                </p>
                <p className="mt-1 inline-flex items-center gap-2 text-base font-semibold text-ink">
                  <Layers3 className="h-4 w-4 text-primary" /> 30+
                </p>
              </div>
              <div className="glass rounded-2xl px-4 py-3 text-left">
                <p className="text-xs uppercase tracking-wide text-ink-muted">
                  Commercial
                </p>
                <p className="mt-1 inline-flex items-center gap-2 text-base font-semibold text-ink">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> Rights Included
                </p>
              </div>
            </div>
          </div>

          <div className={`relative ${enter()}`} style={stagger(320)}>
            <div className="glass overflow-hidden rounded-3xl p-4 sm:p-5">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:items-stretch">
                <figure className="flex h-full flex-col overflow-hidden rounded-2xl border border-surface-200 bg-white">
                  <figcaption className="shrink-0 border-b border-surface-200 bg-surface-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
                    Input Sketch
                  </figcaption>
                  <div className="relative aspect-[3/4] w-full flex-1 bg-surface-100">
                    <img
                      src="/images/hero/hero-sketch.png"
                      alt="Mature architectural pencil sketch input"
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover object-center"
                    />
                  </div>
                </figure>
                <figure className="flex h-full flex-col overflow-hidden rounded-2xl border border-surface-200 bg-white">
                  <figcaption className="shrink-0 border-b border-surface-200 bg-surface-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-primary">
                    Art Direction
                  </figcaption>
                  <div className="relative aspect-[3/4] w-full flex-1 bg-surface-100">
                    <img
                      src="/images/hero/hero-artwork.png"
                      alt="AI-generated cinematic architecture concept art"
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover object-center"
                    />
                  </div>
                </figure>
              </div>

              <div className="mt-4 rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-ink-muted">
                      Session preset
                    </p>
                    <p className="mt-1 text-base font-semibold text-ink">
                      Twilight Architecture v7
                    </p>
                  </div>
                  <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-primary">
                    High Fidelity
                  </span>
                </div>
                <div className="mt-3 grid gap-2 text-xs text-ink-soft sm:grid-cols-2">
                  <span className="rounded-lg border border-surface-200 bg-white/70 px-2 py-1">
                    Lighting: Golden dusk
                  </span>
                  <span className="rounded-lg border border-surface-200 bg-white/70 px-2 py-1">
                    Texture: Glass & stone
                  </span>
                  <span className="rounded-lg border border-surface-200 bg-white/70 px-2 py-1">
                    Palette: Ember tones
                  </span>
                  <span className="rounded-lg border border-surface-200 bg-white/70 px-2 py-1">
                    Output: 4K PNG
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
