import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-stone-100">
      <div className="glass-panel max-w-xl p-10 text-center">
        <p className="eyebrow">Not found</p>
        <h1 className="font-display mt-4 text-5xl text-white">Page unavailable.</h1>
        <p className="mt-5 text-sm leading-7 text-stone-300">
          The requested page is not part of the current portfolio build.
        </p>
        <Link to="/" className="button-primary mt-8">
          Return home
        </Link>
      </div>
    </main>
  );
}

export default NotFoundPage;
