import useDocumentTitle from '../hooks/useDocumentTitle';
import SectionHeading from '../components/ui/SectionHeading';
import AnimateOnScroll from '../components/ui/AnimateOnScroll';

const sections = [
  {
    title: '1. Information We Collect',
    body: 'We collect the information you provide when you create an account (such as your name and email), the sketches and images you upload for processing, and basic usage data that helps us keep SketchSpark fast and reliable. We do not sell your personal information.',
  },
  {
    title: '2. How We Use Your Information',
    body: 'Your information is used to operate your account, generate your artwork, provide support, process payments, and improve the product. We use aggregated, non-identifying analytics to understand how features are used.',
  },
  {
    title: '3. Your Sketches & Artwork',
    body: 'The sketches you upload and the artwork you generate belong to you. We do not use your private uploads or outputs to train our AI models, and we do not share them with third parties for their own purposes.',
  },
  {
    title: '4. Data Storage & Security',
    body: 'We encrypt data in transit and at rest and apply strict access controls. Uploaded sketches and generated artwork are stored securely and can be deleted from your account at any time. We retain data only as long as needed to provide the service.',
  },
  {
    title: '5. Cookies & Tracking',
    body: 'We use essential cookies to keep you signed in and remember preferences, plus limited analytics cookies to measure performance. You can control non-essential cookies through your browser settings.',
  },
  {
    title: '6. Third-Party Services',
    body: 'We rely on trusted providers for hosting, payment processing, and analytics. These providers only receive the data needed to perform their function and are bound by their own data-protection commitments.',
  },
  {
    title: '7. Your Rights',
    body: 'You may access, correct, export, or delete your personal data at any time. To exercise these rights, contact us at support@sketchspark.art and we will respond promptly in line with applicable data-protection laws.',
  },
  {
    title: '8. Changes to This Policy',
    body: 'We may update this Privacy Policy from time to time. When we make material changes, we will notify you and update the effective date below.',
  },
];

export default function Privacy() {
  useDocumentTitle('Privacy Policy',
    'How SketchSpark collects, uses, and protects your personal information and your uploaded sketches and artwork.'
  );

  return (
    <main className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
      <AnimateOnScroll animation="fadeUp">
        <SectionHeading
          eyebrow="Legal"
          title="Privacy Policy"
          subtitle="Your privacy matters. This policy explains, in plain language, how we handle your data at SketchSpark."
        />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fadeUp">
        <div className="rounded-2xl border border-surface-200 bg-white/70 p-8 shadow-card backdrop-blur">
          <p className="mb-8 text-sm text-ink-muted">
            Effective date: 1 January 2026
          </p>
          <div className="space-y-8">
            {sections.map((s) => (
              <section key={s.title}>
                <h2 className="mb-2 font-display text-lg font-semibold text-ink">
                  {s.title}
                </h2>
                <p className="text-sm leading-relaxed text-ink-soft">{s.body}</p>
              </section>
            ))}
          </div>
          <p className="mt-8 border-t border-surface-200 pt-6 text-sm text-ink-soft">
            Questions about this policy? Email us at{' '}
            <a
              href="mailto:support@sketchspark.art"
              className="font-medium text-primary hover:text-primary-dark"
            >
              support@sketchspark.art
            </a>
            .
          </p>
        </div>
      </AnimateOnScroll>
    </main>
  );
}
