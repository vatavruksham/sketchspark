import { useState } from 'react';
import { Mail, Headphones, MessagesSquare, CheckCircle2 } from 'lucide-react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import AnimateOnScroll from '../components/ui/AnimateOnScroll';
import { validateContactForm } from '../utils/validation';

export default function Contact() {
  useDocumentTitle(
    'Contact',
    'Get in touch with the SketchSpark team. Questions about the AI, pricing, or your account? We would love to hear from you.'
  );

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateContactForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
    } else {
      setErrors({});
      setSubmitted(true);
      setFormData({ fullName: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <AnimateOnScroll animation="fadeUp">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Left column - contact info */}
          <div>
            <SectionHeading
              align="left"
              eyebrow="Contact"
              title="Get in Touch"
              subtitle="Questions about the AI, pricing, or bringing SketchSpark to your studio? Our team is here to help."
            />

            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <Mail
                  className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-medium text-ink">General enquiries</p>
                  <a
                    href="mailto:support@sketchspark.art"
                    className="text-ink-soft transition-colors hover:text-primary"
                  >
                    support@sketchspark.art
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Headphones
                  className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-medium text-ink">Support</p>
                  <a
                    href="mailto:support@sketchspark.art"
                    className="text-ink-soft transition-colors hover:text-primary"
                  >
                    support@sketchspark.art
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessagesSquare
                  className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-medium text-ink">Response time</p>
                  <p className="text-ink-soft">
                    We typically reply within one business day.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-surface-200 bg-gradient-to-br from-primary/10 to-accent/10 p-6">
              <p className="font-display font-semibold text-ink">
                Prefer to see it first?
              </p>
              <p className="mt-1 text-sm text-ink-soft">
                Try the live sketch-to-artwork demo on our home page — no
                sign-up needed.
              </p>
              <div className="mt-4">
                <Button href="/#demo" size="sm">
                  Try AI Demo
                </Button>
              </div>
            </div>
          </div>

          {/* Right column - form */}
          <div>
            <Card>
              {submitted && (
                <div className="mb-6 flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 p-4 text-green-700">
                  <CheckCircle2 className="h-5 w-5 shrink-0" aria-hidden="true" />
                  <span>
                    Message sent successfully! We'll get back to you soon.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <Input
                  label="Full Name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  error={errors.fullName}
                  placeholder="Your full name"
                  required
                />

                <Input
                  label="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  placeholder="you@example.com"
                  required
                />

                <Input
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  error={errors.subject}
                  placeholder="What's this about?"
                  required
                />

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-ink-soft"
                  >
                    Message
                    <span className="ml-1 text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    required
                    rows={5}
                    className={`w-full resize-none rounded-lg border bg-white px-4 py-2.5 text-ink placeholder-ink-muted transition-all duration-200 focus:border-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                      errors.message
                        ? 'border-red-500 ring-1 ring-red-500'
                        : 'border-surface-200 hover:border-surface-300'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-sm text-red-500">{errors.message}</p>
                  )}
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </AnimateOnScroll>
    </main>
  );
}
