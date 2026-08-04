import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scroll to in-page hash targets (#demo, #how-it-works) after React Router
 * navigation. Retries until the element exists (lazy routes / transitions).
 */
export default function useScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) return undefined;

    let cancelled = false;
    let attempts = 0;

    const scrollToTarget = () => {
      if (cancelled) return;
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
      if (attempts < 15) {
        attempts += 1;
        setTimeout(scrollToTarget, 100);
      }
    };

    const id = setTimeout(scrollToTarget, 100);
    return () => {
      cancelled = true;
      clearTimeout(id);
    };
  }, [pathname, hash]);
}
