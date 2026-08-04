import { useEffect, useRef, useState } from 'react';
import { Wand2, Loader2, RefreshCw, Sparkles } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { demoSamples, demoStyles } from '../../data/demoSamples';

const styleMeta = {
  'Oil Painting': {
    renderTime: '3.1s',
    filter: 'saturate(1.08) contrast(1.05)',
    mood: 'Painterly textures and rich brush-like depth.',
  },
  'Digital Art': {
    renderTime: '2.6s',
    filter: 'saturate(1.15) contrast(1.1) brightness(1.02)',
    mood: 'Clean edges with vivid modern color balance.',
  },
  Anime: {
    renderTime: '2.4s',
    filter: 'contrast(1.16) saturate(1.2) brightness(1.03)',
    mood: 'Bold lines and stylized high-contrast tones.',
  },
  Watercolor: {
    renderTime: '2.9s',
    filter: 'brightness(1.05) saturate(0.9) contrast(0.95)',
    mood: 'Soft gradients and subtle pigment transitions.',
  },
  'Concept Art': {
    renderTime: '3.4s',
    filter: 'contrast(1.08) saturate(1.05)',
    mood: 'Cinematic lighting and atmosphere-first treatment.',
  },
};

/**
 * Interactive sketch → artwork demo.
 * Visitors pick Architecture / Landscape / Product, choose an art style,
 * and generate a finished preview. Architecture has dedicated per-style
 * outputs; other subjects use polished artwork + style treatment filters.
 */
export default function AIDemo() {
  const [selected, setSelected] = useState(demoSamples[0]);
  const [style, setStyle] = useState(demoStyles[0]);
  const [status, setStatus] = useState('idle'); // idle | loading | done
  const timerRef = useRef(null);
  const activeStyle = styleMeta[style] || styleMeta['Concept Art'];
  const resultSrc =
    selected.outputs?.[style] ||
    selected.outputs?.['Concept Art'] ||
    selected.source;

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const reset = (sample) => {
    clearTimeout(timerRef.current);
    setSelected(sample);
    setStatus('idle');
  };

  const pickStyle = (nextStyle) => {
    setStyle(nextStyle);
    if (status === 'done') {
      setStatus('loading');
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setStatus('done'), 900);
    } else {
      setStatus('idle');
    }
  };

  const generate = () => {
    setStatus('loading');
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setStatus('done'), 1800);
  };

  return (
    <section
      id="demo"
      className="relative overflow-hidden bg-gradient-to-b from-surface-100 via-surface-50 to-surface-100 py-20"
    >
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Live AI Demo"
          title="Try the AI Right Here"
          subtitle="Pick a mature sample sketch, choose an art style, and watch SketchSpark transform it into finished artwork — no sign-up required."
        />

        <div className="section-shell mx-auto max-w-5xl rounded-3xl p-6 sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="mb-2 text-sm font-semibold text-ink">
                1. Choose a sketch
              </p>
              <div className="flex flex-wrap gap-3">
                {demoSamples.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => reset(s)}
                    aria-pressed={selected.id === s.id}
                    className={`overflow-hidden rounded-xl border-2 transition-all duration-300 ${
                      selected.id === s.id
                        ? 'border-primary shadow-card-hover'
                        : 'border-surface-200 hover:border-primary/40'
                    }`}
                  >
                    <img
                      src={s.source}
                      alt={`${s.label} sketch sample`}
                      loading="lazy"
                      className="h-16 w-20 object-cover"
                    />
                  </button>
                ))}
              </div>
              <p className="mt-2 text-xs text-ink-muted">
                Subjects: Architecture · Landscape · Product
              </p>
            </div>

            <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-white/70 to-accent/10 p-4">
              <p className="mb-2 text-sm font-semibold text-ink">
                2. Pick an art style
              </p>
              <div className="flex flex-wrap gap-2">
                {demoStyles.map((st) => (
                  <button
                    key={st}
                    type="button"
                    onClick={() => pickStyle(st)}
                    aria-pressed={style === st}
                    className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-300 ${
                      style === st
                        ? 'bg-gradient-to-r from-primary to-accent text-white shadow-card'
                        : 'border border-surface-200 bg-white/70 text-ink-soft hover:border-primary/40 hover:text-primary'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
              <div className="mt-3 rounded-xl border border-white/70 bg-white/70 p-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
                  Style behavior
                </p>
                <p className="mt-1 text-sm text-ink-soft">{activeStyle.mood}</p>
                <p className="mt-1 text-xs text-primary">
                  Est. render: {activeStyle.renderTime}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <figure className="overflow-hidden rounded-2xl border border-surface-200 bg-white">
              <figcaption className="flex items-center justify-between border-b border-surface-200 bg-surface-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-ink-muted">
                Your Sketch
              </figcaption>
              <img
                src={selected.source}
                alt={`${selected.label} input sketch`}
                loading="lazy"
                className="aspect-square w-full object-cover"
              />
            </figure>

            <figure className="relative overflow-hidden rounded-2xl border border-surface-200 bg-white">
              <figcaption className="flex items-center justify-between border-b border-surface-200 bg-surface-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-primary">
                <span className="inline-flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                  AI Artwork
                </span>
                <span className="text-ink-muted">{style}</span>
              </figcaption>

              <div className="relative aspect-square w-full">
                {status === 'done' ? (
                  <img
                    key={`${selected.id}-${style}`}
                    src={resultSrc}
                    alt={`AI-generated ${style} artwork of ${selected.label}`}
                    loading="lazy"
                    className="h-full w-full animate-fade-in object-cover"
                    style={{ filter: activeStyle.filter }}
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-primary/5 to-accent/10 p-6 text-center">
                    {status === 'loading' ? (
                      <>
                        <Loader2
                          className="h-9 w-9 animate-spin text-primary"
                          aria-hidden="true"
                        />
                        <p className="text-sm font-medium text-ink-soft">
                          Creating your {style.toLowerCase()} artwork…
                        </p>
                      </>
                    ) : (
                      <>
                        <Wand2
                          className="h-9 w-9 text-primary/60"
                          aria-hidden="true"
                        />
                        <p className="text-sm text-ink-muted">
                          Hit Create Artwork to see the finished piece.
                        </p>
                      </>
                    )}
                  </div>
                )}
              </div>
            </figure>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {status === 'done' ? (
              <button
                type="button"
                onClick={generate}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary bg-white/70 px-8 py-3 text-base font-semibold text-primary transition-all duration-300 hover:bg-primary/5"
              >
                <RefreshCw className="h-4 w-4" aria-hidden="true" />
                Regenerate
              </button>
            ) : (
              <button
                type="button"
                onClick={generate}
                disabled={status === 'loading'}
                className="btn-glow inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-accent px-8 py-3 text-base font-semibold text-white transition-all duration-300 hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === 'loading' ? (
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                ) : (
                  <Wand2 className="h-4 w-4" aria-hidden="true" />
                )}
                {status === 'loading' ? 'Creating…' : 'Create Artwork'}
              </button>
            )}
            <p className="text-xs text-ink-muted">
              Interactive preview · style-aware output
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
