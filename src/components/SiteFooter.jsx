import { Link } from "react-router-dom";

function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-8 text-center sm:px-8 sm:text-left lg:px-12">
      <div className="mx-auto max-w-7xl space-y-4">
        <nav
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[0.68rem] uppercase tracking-[0.38em] text-stone-400 sm:justify-start sm:text-xs"
          aria-label="Footer"
        >
          <Link
            to="/"
            className="transition hover:text-stone-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-500/50"
          >
            Home
          </Link>
          <Link
            to="/contact"
            className="transition hover:text-stone-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-500/50"
          >
            Contact
          </Link>
        </nav>
        <div className="space-y-2 text-[0.68rem] leading-relaxed text-stone-500 sm:text-xs">
          <p>
            Copyright © 2026 The Automotive Group (TAG) - All Rights Reserved
          </p>
          <p>ABN - 38 692 980 975</p>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
