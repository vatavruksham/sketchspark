import useDocumentTitle from '../hooks/useDocumentTitle';
import SectionHeading from '../components/ui/SectionHeading';
import AnimateOnScroll from '../components/ui/AnimateOnScroll';

const sections = [
  {
    title: '1. Acceptance of Terms',
    body: 'By creating an account or using SketchSpark, you agree to these Terms of Service. If you do not agree, please do not use the service.',
  },
  {
    title: '2. Your Account',
    body: 'You are responsible for keeping your account credentials secure and for all activity under your account. You must provide accurate information and be at least 16 years old to use SketchSpark.',
  },
  {
    title: '3. Acceptable Use',
    body: 'You agree not to upload content you do not have the rights to, generate unlawful or infringing material, or attempt to disrupt, reverse-engineer, or abuse the service. We may suspend accounts that violate these terms.',
  },
  {
    title: '4. Content Ownership & License',
    body: 'You retain ownership of the sketches you upload and the artwork you generate, and receive a full commercial license to use your outputs. You grant SketchSpark only the limited rights needed to process your files and provide the service.',
  },
  {
    title: '5. Subscriptions & Billing',
    body: 'Paid plans are billed in advance on a recurring basis. You can upgrade, downgrade, or cancel at any time from your account settings; changes take effect at the next billing cycle. Prices may change with prior notice.',
  },
  {
    title: '6. Money-Back Guarantee',
    body: 'Every paid plan is covered by a 30-day money-back guarantee. If you are not satisfied, contact support@sketchspark.art within 30 days of purchase for a full refund.',
  },
  {
    title: '7. Service Availability',
    body: 'We work hard to keep SketchSpark available and performant, but the service is provided "as is" without warranties of uninterrupted or error-free operation. We may update or modify features over time.',
  },
  {
    title: '8. Limitation of Liability',
    body: 'To the maximum extent permitted by law, SketchSpark is not liable for indirect, incidental, or consequential damages arising from your use of the service. Our total liability is limited to the amount you paid in the preceding 12 months.',
  },
  {
    title: '9. Changes to These Terms',
    body: 'We may revise these Terms from time to time. When we make material changes, we will notify you and update the effective date below. Continued use after changes means you accept the updated terms.',
  },
];

export default function Terms() {
  useDocumentTitle(
    'Terms of Service',
    'The terms and conditions governing your use of SketchSpark, including content ownership, billing, and acceptable use.'
  );

  return (
    <main className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
      <AnimateOnScroll animation="fadeUp">
        <SectionHeading
          eyebrow="Legal"
          title="Terms of Service"
          subtitle="These terms explain the rules for using SketchSpark and the rights you keep to your own work."
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
            Questions about these terms? Email us at{' '}
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
