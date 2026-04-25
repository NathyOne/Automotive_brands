import BrandTile from "../components/BrandTile";
import { brands, groupOverview } from "../content/siteContent";

function HomePage() {
  const [zb, encor, classicDriver, kerr, taag] = [
    brands.find((brand) => brand.slug === "zeigler-bailey"),
    brands.find((brand) => brand.slug === "encor"),
    brands.find((brand) => brand.slug === "classic-driver"),
    brands.find((brand) => brand.slug === "kerr-collection"),
    brands.find((brand) => brand.slug === "the-automotive-advisory-group"),
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-stone-100">
      <div className="pointer-events-none absolute inset-0 z-10 opacity-70">
        <div className="grain h-full w-full" />
      </div>

      <header className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-start justify-between gap-4 px-5 py-5 sm:px-8 lg:px-10">
        <div className="pointer-events-auto max-w-sm animate-rise">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.56em] text-stone-200/78">
            {groupOverview.name}
          </p>
          <p className="mt-3 hidden max-w-xs text-sm leading-6 text-stone-300/70 sm:block">
            Explore current brand pages and product enquiries.
          </p>
        </div>
      </header>

      <section className="hidden min-h-screen lg:grid lg:grid-rows-[1.04fr_0.96fr]">
        <div className="grid grid-cols-2">
          <BrandTile brand={zb} />
          <BrandTile brand={encor} />
        </div>
        <div className="grid grid-cols-3">
          <BrandTile brand={classicDriver} />
          <BrandTile brand={taag} />
          <BrandTile brand={kerr} />
        </div>
      </section>

      <section className="flex min-h-screen flex-col lg:hidden">
        {[zb, encor, classicDriver, taag, kerr].map((brand) => (
          <BrandTile
            key={brand.slug}
            brand={brand}
            className="min-h-[46svh] flex-1"
          />
        ))}
      </section>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex items-end justify-between gap-4 px-5 py-5 sm:px-8 lg:px-10">
        <div className="pointer-events-auto animate-veil">
          <p className="text-[0.6rem] uppercase tracking-[0.5em] text-stone-200/60">
            Five brands. Product pages in progress.
          </p>
        </div>
        <div className="pointer-events-auto animate-veil">
          <a
            href="#"
            onClick={(event) => {
              event.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-[0.6rem] uppercase tracking-[0.5em] text-stone-200/50 transition hover:text-stone-100"
          >
            Home
          </a>
        </div>
      </div>
    </main>
  );
}

export default HomePage;
