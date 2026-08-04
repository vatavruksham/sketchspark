import useDocumentTitle from '../hooks/useDocumentTitle';
import Button from '../components/ui/Button';

export default function NotFound() {
  useDocumentTitle(
    'Page Not Found',
    'The page you are looking for does not exist.'
  );

  return (
    <main className="mx-auto flex max-w-2xl flex-col items-center px-4 py-32 text-center sm:px-6 lg:px-8">
      <p className="gradient-text font-display text-7xl font-bold tracking-tight md:text-8xl">
        404
      </p>
      <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink">
        Page Not Found
      </h1>
      <p className="mt-3 max-w-md text-ink-soft">
        The page you are looking for does not exist or has been moved. Let's get
        you back on track.
      </p>
      <div className="mt-8">
        <Button href="/">Back to Home</Button>
      </div>
    </main>
  );
}
