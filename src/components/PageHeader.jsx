import { Link, NavLink } from "react-router-dom";
import { brands, groupOverview } from "../content/siteContent";

function PageHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-30 px-4 pt-4 sm:px-6 lg:pt-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 rounded-[1.45rem] border border-white/14 bg-black/52 px-5 py-4 shadow-[0_18px_70px_rgba(0,0,0,0.32)] backdrop-blur-2xl sm:px-7">
        <div className="flex items-center justify-between gap-4">
          <Link
            to="/"
            className="text-xs font-semibold uppercase tracking-[0.45em] text-white/95 transition hover:text-white"
          >
            {groupOverview.name}
          </Link>

          <Link
            to="/contact"
            className="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.34em] text-white transition duration-300 hover:border-white/40 hover:bg-white/18"
          >
            Group Enquiries
          </Link>
        </div>

        <nav className="flex gap-2 overflow-x-auto pb-1 text-[0.62rem] font-semibold uppercase tracking-[0.34em]">
          {brands.map((brand) => (
            <NavLink
              key={brand.slug}
              to={`/brands/${brand.slug}`}
              className={({ isActive }) =>
                `whitespace-nowrap rounded-full border px-4 py-2 transition ${
                  isActive
                    ? "border-white/55 bg-white/92 text-stone-950 shadow-[0_10px_28px_rgba(0,0,0,0.28)]"
                    : "border-white/18 bg-white/[0.07] text-white/88 hover:border-white/34 hover:bg-white/14 hover:text-white"
                }`
              }
            >
              {brand.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default PageHeader;
