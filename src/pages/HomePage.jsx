import { Link } from "react-router-dom";
import BrandTile from "../components/BrandTile";
import PageHeader from "../components/PageHeader";
import { getBrandsForHome } from "../content/siteContent";

function HomePage() {
  const [zb, encor, classicDriver, taag, kerr] = getBrandsForHome();

  return (
    <main id="top" className="relative min-h-screen overflow-hidden bg-black text-stone-100">
      <PageHeader />

      <div className="pointer-events-none absolute inset-0 z-10 opacity-70">
        <div className="grain h-full w-full" />
      </div>

      <p className="pointer-events-none absolute left-5 top-[7.25rem] z-20 hidden max-w-xs animate-rise text-sm leading-6 text-stone-300/70 sm:left-8 sm:top-[7.75rem] sm:block lg:top-[8rem] lg:max-w-sm lg:text-[0.8125rem] lg:leading-7">
        Explore current brand pages and product enquiries.
      </p>

      <section className="hidden min-h-screen lg:grid lg:grid-rows-[1.04fr_0.96fr]">
        <div className="grid grid-cols-2">
          <BrandTile brand={zb} staggerIndex={0} />
          <BrandTile brand={encor} staggerIndex={1} />
        </div>
        <div className="grid grid-cols-3">
          <BrandTile brand={classicDriver} staggerIndex={2} />
          <BrandTile brand={taag} staggerIndex={3} />
          <BrandTile brand={kerr} staggerIndex={4} />
        </div>
      </section>

      <section className="flex min-h-screen flex-col lg:hidden">
        {[zb, encor, classicDriver, taag, kerr].map((brand, index) => (
          <BrandTile
            key={brand.slug}
            brand={brand}
            staggerIndex={index}
            className="min-h-[46svh] flex-1"
          />
        ))}
      </section>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex flex-wrap items-end justify-between gap-x-6 gap-y-3 px-5 py-5 sm:px-8 lg:px-10">
        <div className="pointer-events-auto animate-veil">
          <p className="text-[0.6rem] uppercase tracking-[0.5em] text-stone-200/60">
            Five brands. Product pages in progress.
          </p>
        </div>
        <nav
          className="pointer-events-auto flex animate-veil flex-wrap items-center gap-x-5 gap-y-2 text-[0.6rem] uppercase tracking-[0.5em] text-stone-200/50"
          aria-label="Home shortcuts"
        >
          <Link
            to="/contact"
            className="transition hover:text-stone-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-400/60"
          >
            Contact
          </Link>
          <a
            href="#top"
            onClick={(event) => {
              event.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="transition hover:text-stone-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-400/60"
          >
            Top
          </a>
        </nav>
      </div>
    </main>
  );
}

export default HomePage;
