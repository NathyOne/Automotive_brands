import { Link } from "react-router-dom";
import InquiryForm from "../components/InquiryForm";
import PageHeader from "../components/PageHeader";
import { brands, groupOverview } from "../content/siteContent";

function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-stone-100">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(215,188,145,0.14),_transparent_24%),linear-gradient(135deg,_#090909,_#050505_54%,_#101010)]" />
        <div className="absolute inset-0 opacity-65">
          <div className="grain h-full w-full" />
        </div>

        <PageHeader />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-32 sm:px-8 lg:px-12 lg:pt-36">
          <div className="animate-rise">
            <p className="eyebrow">Group contact</p>
            <h1 className="font-display mt-5 max-w-4xl text-5xl leading-none text-white sm:text-6xl lg:text-7xl">
              Brand enquiries for The Automotive Advisory Group.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-stone-300 sm:text-lg">
              {groupOverview.statement} {groupOverview.detail}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-8 lg:px-12">
        <div className="animate-rise-delay-sm animate-rise grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-12">
          <div className="glass-panel p-8 sm:p-10">
            <p className="eyebrow">Brands</p>
            <div className="mt-6 grid gap-3">
              {brands.map((brand) => (
                <Link
                  key={brand.slug}
                  to={`/brands/${brand.slug}`}
                  className="flex items-center justify-between gap-4 border border-white/8 bg-white/[0.03] px-4 py-4 text-sm text-stone-200 transition hover:border-white/20 hover:bg-white/[0.05]"
                >
                  <span>{brand.name}</span>
                  <span className="text-[0.62rem] uppercase tracking-[0.34em] text-stone-400">
                    View page
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <InquiryForm brandName={groupOverview.name} />
        </div>
      </section>
    </main>
  );
}

export default ContactPage;
