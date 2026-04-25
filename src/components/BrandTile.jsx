import { Link } from "react-router-dom";
import BrandMark from "./BrandMark";

function BrandTile({ brand, className = "" }) {
  const description = brand.hoverDescription ?? "Coming soon.";

  return (
    <Link
      to={`/brands/${brand.slug}`}
      className={`group relative isolate overflow-hidden bg-black ${className}`}
      aria-label={`Open ${brand.name}`}
    >
      {brand.tile.image ? (
        <img
          src={brand.tile.image}
          alt={brand.tile.alt}
          className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.04] group-hover:opacity-90"
        />
      ) : (
        <div className="absolute inset-0 bg-black" aria-hidden="true" />
      )}

      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.72),rgba(0,0,0,0.45)_34%,rgba(0,0,0,0.78))] transition duration-500 group-hover:bg-[linear-gradient(180deg,rgba(0,0,0,0.82),rgba(0,0,0,0.58)_34%,rgba(0,0,0,0.88))]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-60 transition duration-500 group-hover:opacity-80"
        aria-hidden="true"
      >
        <div className="grain h-full w-full" />
      </div>
      <div
        className="absolute inset-0 ring-1 ring-inset ring-white/10 transition duration-500 group-hover:ring-white/18"
        aria-hidden="true"
      />

      <div className="relative flex h-full items-center justify-center p-6 transition duration-500 group-hover:-translate-y-12 group-hover:opacity-22 sm:p-8">
        <BrandMark brand={brand} context="home" />
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 translate-y-8 px-5 pb-8 pt-10 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 sm:px-7 lg:px-8">
        <p className="text-[0.62rem] font-semibold uppercase tracking-[0.42em] text-stone-300/78">
          {brand.name}
        </p>
        <p className="mt-4 max-w-xl text-sm leading-7 text-stone-100/88 sm:text-base">
          {description}
        </p>
        <div className="mt-6 flex items-center justify-between gap-4 text-[0.62rem] font-semibold uppercase tracking-[0.36em] text-stone-200/70">
          <span>{brand.hoverDescription ? "Discover more" : "Coming soon"}</span>
          <span aria-hidden="true">Open</span>
        </div>
      </div>
    </Link>
  );
}

export default BrandTile;
