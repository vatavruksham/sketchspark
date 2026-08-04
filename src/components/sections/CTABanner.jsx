import { Link } from 'react-router-dom';
import { Wand2 } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="relative overflow-hidden rounded-3xl border border-primary/25 bg-[radial-gradient(circle_at_15%_20%,rgba(249,115,22,0.35),transparent_36%),radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.35),transparent_40%),linear-gradient(110deg,#1f140a,#32123a_56%,#5b1f0a)] px-6 py-16 text-center shadow-card sm:px-12">
        <div
          className="pointer-events-none absolute -top-16 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-white/25 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.22) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.22) 1px, transparent 1px)',
            backgroundSize: '38px 38px',
          }}
          aria-hidden="true"
        />

        <h2 className="relative mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Transform ideas into visual campaigns
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/90">
          Upload rough concepts, test multiple art directions, and ship
          production-ready visuals from one AI-powered studio.
        </p>

        <div className="relative mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/#demo"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-3.5 text-lg font-semibold text-primary shadow-lg transition-all duration-300 hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
          >
            <Wand2 className="h-5 w-5" aria-hidden="true" />
            Start Creating
          </Link>
          <Link
            to="/pricing"
            className="inline-flex items-center justify-center rounded-lg border-2 border-white/80 px-8 py-3.5 text-lg font-semibold text-white transition-all duration-300 hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
          >
            View Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
