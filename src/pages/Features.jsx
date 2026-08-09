import {
  Wand2,
  Palette,
  Layers,
  Download,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import SectionHeading from '../components/ui/SectionHeading';
import AnimateOnScroll from '../components/ui/AnimateOnScroll';
import Button from '../components/ui/Button';
import { features } from '../data/features';

const iconComponents = {
  Wand2,
  Palette,
  Layers,
  Download,
  Sparkles,
  ShieldCheck,
};

function FeatureCard({ feature, index }) {
  const Icon = iconComponents[feature.icon] || Wand2;

  return (
    <AnimateOnScroll animation="fadeUp" delay={index * 80}>
      <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-surface-200 bg-white/70 shadow-card backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card-hover">
        <div className="relative aspect-[16/10] overflow-hidden bg-surface-100">
          <img
            src={feature.image}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/90 shadow-card backdrop-blur">
            <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
          </div>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <span className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
            {feature.category}
          </span>
          <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
            {feature.title}
          </h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
            {feature.description}
          </p>
        </div>
      </article>
    </AnimateOnScroll>
  );
}

export default function Features() {
  useDocumentTitle('Features',
    'Explore SketchSpark features — multi-style artwork, HD resolution, batch processing, style consistency, color palette control, and commercial license.'
  );

  return (
    <main className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <AnimateOnScroll animation="fadeUp">
        <SectionHeading
          eyebrow="Features"
          title="Everything You Need to Create Stunning Art"
          subtitle="From a quick pencil sketch to a gallery-ready masterpiece, every SketchSpark feature is built to help you create finished artwork faster — without losing your artistic voice."
        />
      </AnimateOnScroll>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} feature={feature} index={index} />
        ))}
      </div>

      <AnimateOnScroll animation="fadeUp">
        <div className="mt-16 flex flex-col items-center justify-center gap-4 rounded-3xl bg-gradient-to-r from-primary/10 to-accent/10 px-6 py-12 text-center sm:flex-row sm:text-left">
          <div className="flex-1">
            <h3 className="font-display text-2xl font-bold tracking-tight text-ink">
              See the AI in action
            </h3>
            <p className="mt-2 text-ink-soft">
              Try the live sketch-to-artwork demo — no sign-up required.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/#demo" size="lg">
              Try AI Demo
            </Button>
            <Button href="/pricing" variant="secondary" size="lg">
              View Pricing
            </Button>
          </div>
        </div>
      </AnimateOnScroll>
    </main>
  );
}
