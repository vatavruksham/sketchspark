import { useState } from 'react';
import { Check, Minus, ShieldCheck, RefreshCw, Lock, ChevronDown } from 'lucide-react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import SectionHeading from '../components/ui/SectionHeading';
import AnimateOnScroll from '../components/ui/AnimateOnScroll';
import Button from '../components/ui/Button';
import { pricing, comparison, faqs } from '../data/pricing';

function PriceDisplay({ tier }) {
  return (
    <span className="flex items-baseline gap-1">
      <span className="font-display text-4xl font-bold tracking-tight text-ink">
        ${tier.price}
      </span>
      <span className="text-ink-muted">/month</span>
    </span>
  );
}

function PricingCard({ tier }) {
  const highlighted = tier.highlighted;

  return (
    <div
      className={`relative flex h-full flex-col rounded-2xl bg-white/80 p-8 backdrop-blur transition-all duration-300 ${
        highlighted
          ? 'border-2 border-primary shadow-card-hover lg:-translate-y-4'
          : 'border border-surface-200 shadow-card hover:-translate-y-1 hover:shadow-card-hover'
      }`}
    >
      {highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-card">
          Most Popular
        </span>
      )}

      <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
        {tier.name}
      </h3>

      <div className="mt-4">
        <PriceDisplay tier={tier} />
      </div>

      <div className="mt-4 rounded-lg bg-surface-50 px-4 py-3">
        <p className="text-sm font-semibold text-primary">{tier.renderLimit}</p>
      </div>

      <ul className="mt-6 flex-1 space-y-3">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check
              className={`mt-0.5 h-5 w-5 shrink-0 ${
                highlighted ? 'text-primary' : 'text-accent'
              }`}
              aria-hidden="true"
            />
            <span className="text-sm leading-relaxed text-ink-soft">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <Button
          href="/login"
          variant={highlighted ? 'primary' : 'secondary'}
          className="w-full"
        >
          {tier.ctaText}
        </Button>
      </div>
    </div>
  );
}

function ComparisonCell({ value }) {
  if (value === true) {
    return <Check className="mx-auto h-5 w-5 text-primary" aria-hidden="true" />;
  }
  if (value === false) {
    return <Minus className="mx-auto h-5 w-5 text-ink-muted/50" aria-hidden="true" />;
  }
  return <span className="text-sm text-ink-soft">{value}</span>;
}

function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <div className="overflow-hidden rounded-xl border border-surface-200 bg-white/70 backdrop-blur">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="font-display font-semibold text-ink">{faq.q}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        />
      </button>
      <div
        className={`grid transition-all duration-300 ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-sm leading-relaxed text-ink-soft">
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Pricing() {
  useDocumentTitle('Pricing',
    'Simple, transparent pricing for SketchSpark — Artist, Studio, and Agency plans. 30-day money-back guarantee.'
  );

  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <AnimateOnScroll animation="fadeUp">
        <SectionHeading
          eyebrow="Pricing"
          title="Plans That Scale With Your Art"
          subtitle="Pick a plan and start turning sketches into artwork today. Every paid plan is backed by our 30-day money-back guarantee."
        />
      </AnimateOnScroll>

      {/* Tiers */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center">
        {pricing.map((tier, index) => (
          <AnimateOnScroll key={tier.id} animation="fadeUp" delay={index * 100}>
            <PricingCard tier={tier} />
          </AnimateOnScroll>
        ))}
      </div>

      {/* Warranty / guarantee */}
      <AnimateOnScroll animation="fadeUp">
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            {
              Icon: RefreshCw,
              title: '30-Day Money-Back Guarantee',
              body: 'Not satisfied? Get a full, no-questions-asked refund within 30 days of any purchase.',
            },
            {
              Icon: ShieldCheck,
              title: 'Full Commercial Rights',
              body: 'You own every artwork you create, with a full commercial license on all plans.',
            },
            {
              Icon: Lock,
              title: 'Quality Guarantee',
              body: 'Your sketches are encrypted and never used to train our models. Gallery-quality output guaranteed.',
            },
          ].map(({ Icon, title, body }) => (
            <div
              key={title}
              className="flex flex-col items-start gap-3 rounded-2xl border border-surface-200 bg-white/70 p-6 shadow-card backdrop-blur"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-accent/15">
                <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
              </div>
              <h3 className="font-display font-semibold text-ink">{title}</h3>
              <p className="text-sm leading-relaxed text-ink-soft">{body}</p>
            </div>
          ))}
        </div>
      </AnimateOnScroll>

      {/* Comparison table */}
      <AnimateOnScroll animation="fadeUp">
        <section className="mt-20">
          <h2 className="mb-8 text-center font-display text-2xl font-bold tracking-tight text-ink">
            Compare Plans
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-surface-200 bg-white/70 shadow-card backdrop-blur">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-b border-surface-200 bg-surface-50">
                  <th className="px-5 py-4 text-sm font-semibold text-ink">
                    Feature
                  </th>
                  <th className="px-5 py-4 text-center text-sm font-semibold text-ink">
                    Artist
                  </th>
                  <th className="px-5 py-4 text-center text-sm font-semibold text-primary">
                    Studio
                  </th>
                  <th className="px-5 py-4 text-center text-sm font-semibold text-ink">
                    Agency
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr
                    key={row.label}
                    className={i % 2 === 1 ? 'bg-surface-50/60' : ''}
                  >
                    <td className="px-5 py-3 text-sm font-medium text-ink-soft">
                      {row.label}
                    </td>
                    <td className="px-5 py-3 text-center">
                      <ComparisonCell value={row.artist} />
                    </td>
                    <td className="px-5 py-3 text-center">
                      <ComparisonCell value={row.studio} />
                    </td>
                    <td className="px-5 py-3 text-center">
                      <ComparisonCell value={row.agency} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </AnimateOnScroll>

      {/* FAQ */}
      <AnimateOnScroll animation="fadeUp">
        <section className="mx-auto mt-20 max-w-3xl">
          <h2 className="mb-8 text-center font-display text-2xl font-bold tracking-tight text-ink">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FaqItem
                key={faq.q}
                faq={faq}
                isOpen={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
              />
            ))}
          </div>
        </section>
      </AnimateOnScroll>

      {/* Final CTA */}
      <AnimateOnScroll animation="fadeUp">
        <div className="mt-16 text-center">
          <p className="mb-5 text-ink-soft">
            Still deciding? Try the live AI demo first — no sign-up required.
          </p>
          <Button href="/#demo" size="lg">
            Try AI Demo
          </Button>
        </div>
      </AnimateOnScroll>
    </main>
  );
}
