import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '../ui/Logo';

const navLinks = [
  { to: '/features', label: 'Features' },
  { to: '/#how-it-works', label: 'How It Works' },
  { to: '/pricing', label: 'Pricing' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const linkClasses = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-300 ${
      isActive ? 'text-primary' : 'text-ink-soft hover:text-primary'
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-surface-200/80 bg-white/75 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        {/* Desktop: links left-of-actions, AI Trial highlighted + Login beside */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) =>
            link.to.includes('#') ? (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm font-medium text-ink-soft transition-colors duration-300 hover:text-primary"
              >
                {link.label}
              </Link>
            ) : (
              <NavLink key={link.to} to={link.to} className={linkClasses}>
                {link.label}
              </NavLink>
            )
          )}

          <div className="ml-1 flex items-center gap-3">
            <NavLink
              to="/login"
              className="rounded-lg border border-primary/25 bg-white/70 px-4 py-2 text-sm font-semibold text-primary transition-all duration-300 hover:border-primary/40 hover:bg-primary/5"
            >
              Login
            </NavLink>
            <Link
              to="/#demo"
              className="btn-glow rounded-lg bg-gradient-to-r from-primary via-primary to-accent px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:brightness-105"
            >
              AI Demo
            </Link>
          </div>
        </div>

        <button
          className="p-2 text-ink-soft hover:text-primary md:hidden"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
          type="button"
        >
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute inset-y-0 right-0 flex w-64 flex-col border-l border-surface-200 bg-white p-6 shadow-xl">
            <button
              className="mb-6 self-end p-2 text-ink-soft hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              type="button"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="flex flex-col gap-4">
              {navLinks.map((link) =>
                link.to.includes('#') ? (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-sm font-medium text-ink-soft transition-colors duration-300 hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={linkClasses}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                )
              )}
              <NavLink
                to="/login"
                className="mt-4 rounded-lg border border-primary/25 px-4 py-2 text-center font-semibold text-primary transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </NavLink>
              <Link
                to="/#demo"
                className="rounded-lg bg-gradient-to-r from-primary to-accent px-4 py-2 text-center font-semibold text-white transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                AI Trial
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
