import { Link } from 'react-router-dom';
import {
  Wand2,
  Palette,
  Layers,
  Download,
  Sparkles,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { features } from '../../data/features';

const iconComponents = {
  Wand2,
  Palette,
  Layers,
  Download,
  Sparkles,
  ShieldCheck,
};

const summaries = {
  'multi-style-artwork':
    'Oil painting, digital art, anime, watercolor, and more.',
  'hd-resolution': '4K exports ready for print, display, or commercial use.',
  'batch-processing': 'Upload multiple sketches and process them all at once.',
  'style-consistency': 'Lock a style and apply it across your whole project.',
  'color-palette-control': 'Define exact colors for perfectly branded artwork.',
  'commercial-license': 'Full commercial rights — your art is always yours.',
};

export default function FeaturesTeaser() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Features"
        title="A Creative Workflow, Not Just a Generator"
        subtitle="SketchSpark is designed like a visual studio for creators who iterate fast and need brand-grade outputs."
      />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
        {features.map((feature) => {
          const Icon = iconComponents[feature.icon] || Wand2;
          return (
            <div
              key={feature.id}
              className="section-shell flex items-start gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card-hover sm:col-span-6 lg:col-span-4"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary/15 to-accent/15">
                <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-display font-semibold tracking-tight text-ink">
                  {feature.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                  {summaries[feature.id] || feature.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-10 text-center">
        <Link
          to="/features"
          className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/80 px-5 py-2 font-medium text-primary transition-all duration-300 hover:border-primary/40 hover:bg-primary/5"
        >
          View all features
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
