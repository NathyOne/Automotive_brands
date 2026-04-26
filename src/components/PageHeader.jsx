import { Link, NavLink } from "react-router-dom";
import { brands, groupOverview } from "../content/siteContent";

function PageHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-30 border-b border-white/10 bg-black/72 shadow-[0_18px_70px_rgba(0,0,0,0.34)] backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between gap-4">
          <Link
            to="/"
            className="text-xs font-semibold uppercase tracking-[0.45em] text-white transition hover:text-stone-200"
          >
            {groupOverview.name}
          </Link>

          <Link to="/contact" className="button-secondary">
            Group Enquiries
          </Link>
        </div>

        <nav className="flex gap-2 overflow-x-auto pb-1 text-[0.62rem] uppercase tracking-[0.34em] text-stone-400">
          {brands.map((brand) => (
            <NavLink
              key={brand.slug}
              to={`/brands/${brand.slug}`}
              className={({ isActive }) =>
                `whitespace-nowrap rounded-full border px-4 py-2 transition ${
                  isActive
                    ? "border-white/34 bg-white/18 text-white"
                    : "border-white/14 bg-black/36 text-stone-200 hover:border-white/28 hover:bg-white/10 hover:text-white"
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
