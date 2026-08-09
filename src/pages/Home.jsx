import useDocumentTitle from '../hooks/useDocumentTitle';
import AnimateOnScroll from '../components/ui/AnimateOnScroll';
import Hero from '../components/sections/Hero';
import AIDemo from '../components/sections/AIDemo';
import FeaturesTeaser from '../components/sections/FeaturesTeaser';
import HowItWorks from '../components/sections/HowItWorks';
import Testimonials from '../components/sections/Testimonials';
import CTABanner from '../components/sections/CTABanner';

export default function Home() {
  useDocumentTitle(
    null,
    'SketchSpark turns rough sketches into polished AI visuals with a live demo, style controls, and fast export-ready outputs for creators.'
  );

  return (
    <main>
      <Hero />

      <AIDemo />

      <AnimateOnScroll animation="fadeUp">
        <FeaturesTeaser />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fadeUp" delay={100}>
        <HowItWorks />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fadeUp" delay={100}>
        <Testimonials />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fadeIn" delay={100}>
        <CTABanner />
      </AnimateOnScroll>
    </main>
  );
}
