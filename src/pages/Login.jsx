import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import AnimateOnScroll from '../components/ui/AnimateOnScroll';
import { validateLoginForm, validateRegisterForm } from '../utils/validation';

export default function Login() {
  const [mode, setMode] = useState('login'); // 'login' | 'register'

  useDocumentTitle(
    mode === 'login' ? 'Login' : 'Register',
    'Sign in to your SketchSpark account or create a new one to start transforming sketches into artwork.'
  );

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const switchMode = (next) => {
    setMode(next);
    setErrors({});
    setSubmitted(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors =
      mode === 'login'
        ? validateLoginForm(formData)
        : validateRegisterForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
    } else {
      setErrors({});
      setSubmitted(true);
    }
  };

  const isLogin = mode === 'login';

  return (
    <main className="mx-auto flex max-w-md flex-col px-4 py-24 sm:px-6 lg:px-8">
      <AnimateOnScroll animation="fadeUp">
        <Card className="bg-white/80 backdrop-blur">
          {/* Tabs */}
          <div className="mb-6 flex rounded-xl border border-surface-200 bg-surface-50 p-1">
            <button
              type="button"
              onClick={() => switchMode('login')}
              aria-pressed={isLogin}
              className={`flex-1 rounded-lg py-2 text-sm font-semibold transition-all duration-300 ${
                isLogin
                  ? 'bg-gradient-to-r from-primary to-accent text-white shadow-card'
                  : 'text-ink-soft hover:text-primary'
              }`}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => switchMode('register')}
              aria-pressed={!isLogin}
              className={`flex-1 rounded-lg py-2 text-sm font-semibold transition-all duration-300 ${
                !isLogin
                  ? 'bg-gradient-to-r from-primary to-accent text-white shadow-card'
                  : 'text-ink-soft hover:text-primary'
              }`}
            >
              Register
            </button>
          </div>

          <div className="mb-6 text-center">
            <h1 className="font-display text-2xl font-bold tracking-tight text-ink">
              {isLogin ? 'Welcome Back' : 'Create Your Account'}
            </h1>
            <p className="mt-2 text-ink-soft">
              {isLogin
                ? 'Sign in to keep transforming your sketches into artwork.'
                : 'Join SketchSpark and start creating stunning AI artwork today.'}
            </p>
          </div>

          {submitted && (
            <div className="mb-6 flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 p-4 text-green-700">
              <CheckCircle2 className="h-5 w-5 shrink-0" aria-hidden="true" />
              <span>
                {isLogin
                  ? 'Login successful!'
                  : 'Account created successfully!'}
              </span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            {!isLogin && (
              <Input
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                placeholder="Your full name"
                required
              />
            )}

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
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
              placeholder={isLogin ? 'Your password' : 'Create a password'}
              required
            />

            {!isLogin && (
              <Input
                label="Confirm Password"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                error={errors.confirmPassword}
                placeholder="Re-enter your password"
                required
              />
            )}

            <Button type="submit" className="w-full">
              {isLogin ? 'Sign In' : 'Create Account'}
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-ink-soft">
            {isLogin ? (
              <>
                Don't have an account?{' '}
                <button
                  type="button"
                  onClick={() => switchMode('register')}
                  className="font-medium text-primary transition-colors hover:text-primary-dark"
                >
                  Create one
                </button>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={() => switchMode('login')}
                  className="font-medium text-primary transition-colors hover:text-primary-dark"
                >
                  Sign in
                </button>
              </>
            )}
          </p>
        </Card>
      </AnimateOnScroll>
    </main>
  );
}
