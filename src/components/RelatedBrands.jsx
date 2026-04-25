import { Link } from "react-router-dom";
import BrandMark from "./BrandMark";
import { brands } from "../content/siteContent";

function RelatedBrands({ currentSlug }) {
  const relatedBrands = brands.filter((brand) => brand.slug !== currentSlug);

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="eyebrow">Brands</p>
          <h2 className="font-display mt-3 text-3xl text-white sm:text-4xl">
            Explore the wider group.
          </h2>
        </div>
        <Link
          to="/"
          className="text-xs uppercase tracking-[0.34em] text-stone-400 transition hover:text-stone-100"
        >
          Back to home
        </Link>
      </div>

      <div className="grid gap-px overflow-hidden rounded-[1.75rem] border border-white/8 bg-white/8 md:grid-cols-2 xl:grid-cols-4">
        {relatedBrands.map((brand) => (
          <Link
            key={brand.slug}
            to={`/brands/${brand.slug}`}
            className="group relative isolate flex min-h-52 items-center justify-center overflow-hidden bg-black px-6 py-8"
          >
            {brand.tile.image ? (
              <img
                src={brand.tile.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-40 transition duration-700 group-hover:scale-105 group-hover:opacity-55"
              />
            ) : (
              <div className="absolute inset-0 bg-black" aria-hidden="true" />
            )}

            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.76),rgba(0,0,0,0.82))]" />
            <div className="absolute inset-0 opacity-50">
              <div className="grain h-full w-full" />
            </div>
            <div className="relative flex flex-col items-center gap-5 text-center">
              <BrandMark brand={brand} context="compact" />
              <span className="text-[0.62rem] uppercase tracking-[0.42em] text-stone-300/75">
                {brand.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default RelatedBrands;
