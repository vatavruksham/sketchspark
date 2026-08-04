import { Upload, Palette, Wand2 } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const steps = [
  {
    number: '01',
    icon: Upload,
    title: 'Upload Your Sketch',
    description:
      'Drop in a photo of a pencil sketch, a napkin doodle, or a digital line drawing. Any rough concept works — SketchSpark reads your composition and artistic intent.',
  },
  {
    number: '02',
    icon: Palette,
    title: 'Choose an Art Style',
    description:
      'Pick from oil painting, digital art, anime, watercolor, concept art, and more — or apply a saved style profile to keep everything consistent across your project.',
  },
  {
    number: '03',
    icon: Wand2,
    title: 'Get Your Artwork',
    description:
      'SketchSpark generates stunning, finished artwork in seconds while preserving your original gesture, proportions, and creative energy. Export in HD and use it anywhere.',
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-20 bg-gradient-to-b from-surface-50 to-surface-100 py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title="From Sketch to Artwork in Three Steps"
        />

        <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative overflow-hidden rounded-xl border border-surface-200 bg-white/70 p-6 shadow-card backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <span
                  className="pointer-events-none absolute right-4 top-2 select-none font-display text-6xl font-bold text-surface-100"
                  aria-hidden="true"
                >
                  {step.number}
                </span>

                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-primary to-accent text-white shadow-card">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="relative mt-5 font-display text-lg font-semibold tracking-tight text-ink">
                  {step.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-ink-soft">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
