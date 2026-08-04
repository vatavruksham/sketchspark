import { useEffect, useState, useCallback } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { testimonials } from '../../data/testimonials';

const AUTO_MS = 5000;

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = testimonials.length;

  const go = useCallback(
    (next) => setIndex((prev) => (next + count) % count),
    [count]
  );

  useEffect(() => {
    if (paused) return undefined;
    const id = setInterval(() => setIndex((p) => (p + 1) % count), AUTO_MS);
    return () => clearInterval(id);
  }, [paused, count]);

  const active = testimonials[index];

  return (
    <section className="bg-gradient-to-b from-surface-100 to-surface-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by Creators Worldwide"
        />

        <div
          className="relative mx-auto max-w-3xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <figure className="glass rounded-3xl p-8 sm:p-10 text-center">
            <Quote
              className="mx-auto h-10 w-10 text-primary/40"
              aria-hidden="true"
            />
            <blockquote className="mt-5 min-h-[7rem] text-lg leading-relaxed text-ink-soft">
              “{active.quote}”
            </blockquote>
            <figcaption className="mt-6 flex flex-col items-center gap-3">
              <img
                src={active.avatar}
                alt={`${active.name} avatar`}
                loading="lazy"
                className="h-16 w-16 rounded-full border-2 border-white bg-surface-100 shadow-card"
              />
              <div>
                <p className="font-display font-semibold text-ink">
                  {active.name}
                </p>
                <p className="text-sm text-ink-muted">
                  {active.role}, {active.company}
                </p>
              </div>
            </figcaption>
          </figure>

          {/* Controls */}
          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 rounded-full border border-surface-200 bg-white/80 p-2 text-ink-soft shadow-card backdrop-blur transition-all duration-300 hover:text-primary sm:-translate-x-5"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 rounded-full border border-surface-200 bg-white/80 p-2 text-ink-soft shadow-card backdrop-blur transition-all duration-300 hover:text-primary sm:translate-x-5"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Dots */}
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                aria-current={i === index}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === index
                    ? 'w-8 bg-gradient-to-r from-primary to-accent'
                    : 'w-2.5 bg-surface-300 hover:bg-primary/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
