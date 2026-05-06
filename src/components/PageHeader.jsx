import { Link, NavLink } from "react-router-dom";
import { brands, groupOverview } from "../content/siteContent";

function PageHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-30 px-4 pt-4 sm:px-6 lg:pt-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 rounded-[1.2rem] border border-white/14 bg-black/52 px-5 py-4 shadow-[0_18px_70px_rgba(0,0,0,0.32)] backdrop-blur-2xl sm:rounded-[1.45rem] sm:px-7">
        <div className="flex items-center justify-between gap-4">
          <Link
            to="/"
            className="max-w-44 text-[0.66rem] font-semibold uppercase tracking-[0.42em] text-white/95 transition hover:text-white sm:max-w-none sm:text-xs sm:tracking-[0.45em]"
          >
            {groupOverview.name}
          </Link>

          <details className="group relative sm:hidden">
            <summary className="flex min-h-10 cursor-pointer list-none items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-white transition duration-300 hover:border-white/36 hover:bg-white/16 [&::-webkit-details-marker]:hidden">
              <span>Brands</span>
              <span
                className="relative h-3 w-4 before:absolute before:left-0 before:top-0 before:h-px before:w-full before:bg-current after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-current"
                aria-hidden="true"
              />
            </summary>
            <nav className="absolute right-0 mt-3 grid min-w-64 gap-2 rounded-[1.1rem] border border-white/14 bg-black/82 p-3 text-[0.62rem] font-semibold uppercase tracking-[0.28em] shadow-[0_18px_70px_rgba(0,0,0,0.42)] backdrop-blur-2xl">
              {brands.map((brand) => (
                <NavLink
                  key={brand.slug}
                  to={`/brands/${brand.slug}`}
                  className={({ isActive }) =>
                    `rounded-full border px-4 py-3 transition ${
                      isActive
                        ? "border-white/60 bg-stone-950/92 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.18),0_10px_28px_rgba(0,0,0,0.32)]"
                        : "border-white/14 bg-white/[0.06] text-white/88 hover:border-white/34 hover:bg-white/14 hover:text-white"
                    }`
                  }
                >
                  {brand.shortName ?? brand.name}
                </NavLink>
              ))}
            </nav>
          </details>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 px-3.5 py-2.5 text-[0.58rem] font-semibold uppercase tracking-[0.28em] text-white transition duration-300 hover:border-white/40 hover:bg-white/18 sm:px-5 sm:py-3 sm:text-xs sm:tracking-[0.34em]"
          >
            <span className="sm:hidden">Enquiries</span>
            <span className="hidden sm:inline">Group Enquiries</span>
          </Link>
        </div>

        <nav className="hidden gap-2 overflow-x-auto pb-1 text-[0.62rem] font-semibold uppercase tracking-[0.34em] sm:flex">
          {brands.map((brand) => (
            <NavLink
              key={brand.slug}
              to={`/brands/${brand.slug}`}
              className={({ isActive }) =>
                `whitespace-nowrap rounded-full border px-4 py-2 transition ${
                  isActive
                    ? "border-white/60 bg-stone-950/92 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.18),0_10px_28px_rgba(0,0,0,0.32)]"
                    : "border-white/18 bg-white/[0.07] text-white/88 hover:border-white/34 hover:bg-white/14 hover:text-white"
                }`
              }
            >
              {brand.shortName ?? brand.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default PageHeader;
