import { Link } from "react-router-dom";
import BrandMark from "./BrandMark";

function BrandTile({ brand, className = "", staggerIndex }) {
  const description = brand.hoverDescription ?? "Coming soon.";
  const entrance =
    typeof staggerIndex === "number"
      ? {
          className: "animate-rise",
          style: { animationDelay: `${staggerIndex * 70}ms` },
        }
      : { className: "", style: undefined };

  return (
    <Link
      to={`/brands/${brand.slug}`}
      className={`group relative isolate overflow-hidden bg-black ${entrance.className} ${className}`}
      style={entrance.style}
      aria-label={`Open ${brand.name}`}
    >
      {brand.tile.image ? (
        <img
          src={brand.tile.image}
          alt={brand.tile.alt}
          className="brand-tile-hero-motion absolute inset-0 h-full w-full origin-center scale-100 object-cover opacity-100 transform-gpu lg:group-hover:scale-[1.026] lg:group-hover:opacity-[0.94]"
        />
      ) : (
        <div className="absolute inset-0 bg-black" aria-hidden="true" />
      )}

      {/* Base tint (static). Hover darkening via opacity crossfade — gradients cannot tween smoothly. */}
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.68),rgba(0,0,0,0.42)_38%,rgba(0,0,0,0.76))]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.84),rgba(0,0,0,0.52)_40%,rgba(0,0,0,0.9))] opacity-0 transition-opacity duration-[1420ms] ease-brand-editorial delay-0 lg:group-hover:opacity-100 lg:group-hover:delay-[90ms]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-[0.55] transition-opacity duration-[1420ms] ease-brand-editorial delay-0 lg:group-hover:opacity-[0.78] lg:group-hover:delay-[55ms]"
        aria-hidden="true"
      >
        <div className="grain h-full w-full" />
      </div>
      <div
        className="absolute inset-0 ring-1 ring-inset ring-white/[0.09] transition-[box-shadow,color] duration-[1480ms] ease-brand-editorial delay-0 lg:group-hover:ring-white/[0.17] lg:group-hover:delay-[70ms]"
        aria-hidden="true"
      />

      <div className="brand-tile-hero-motion relative flex h-full items-center justify-center p-6 pb-28 max-lg:translate-y-0 max-lg:opacity-100 sm:p-8 sm:pb-32 lg:pb-6 lg:group-hover:-translate-y-10 lg:group-hover:opacity-[0.11]">
        <BrandMark brand={brand} context="home" />
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 translate-y-0 px-5 pb-8 pt-10 opacity-100 transition-[transform,opacity,filter] duration-[1720ms] ease-brand-editorial delay-0 max-lg:translate-y-0 max-lg:opacity-100 max-lg:blur-none sm:px-7 lg:translate-y-8 lg:opacity-0 lg:blur-[6px] lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-hover:blur-none lg:group-hover:delay-[260ms] lg:group-focus-visible:translate-y-0 lg:group-focus-visible:opacity-100 lg:group-focus-visible:blur-none lg:group-focus-visible:delay-[260ms] lg:px-8">
        <p className="text-[0.62rem] font-semibold uppercase tracking-[0.42em] text-stone-300/78">
          {brand.name}
        </p>
        <p className="mt-4 max-w-xl text-sm leading-7 text-stone-100/88 sm:text-base">
          {description}
        </p>
        <div className="mt-6 flex items-center justify-between gap-4 text-[0.62rem] font-semibold uppercase tracking-[0.36em] text-stone-200/70">
          <span>
            {brand.hoverDescription ? "Discover More" : "Coming soon"}
          </span>
          <span aria-hidden="true">Open</span>
        </div>
      </div>
    </Link>
  );
}

export default BrandTile;
