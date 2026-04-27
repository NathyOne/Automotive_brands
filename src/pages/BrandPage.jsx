import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import BrandMark from "../components/BrandMark";
import InquiryForm from "../components/InquiryForm";
import PageHeader from "../components/PageHeader";
import RelatedBrands from "../components/RelatedBrands";
import { getBrandBySlug } from "../content/siteContent";
import NotFoundPage from "./NotFoundPage";

function MediaCard({ item }) {
  if (item.type === "quote") {
    return (
      <article
        className={`glass-panel relative overflow-hidden p-8 sm:p-10 ${item.className}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(214,188,153,0.12),_transparent_44%)]" />
        <div className="relative">
          <p className="eyebrow">{item.eyebrow}</p>
          <h3 className="font-display mt-5 text-3xl leading-tight text-white sm:text-[2.45rem]">
            {item.title}
          </h3>
          <p className="mt-5 max-w-md text-sm leading-7 text-stone-300">
            {item.copy}
          </p>
        </div>
      </article>
    );
  }

  if (item.type === "logo") {
    return (
      <article
        className={`glass-panel relative isolate flex items-center justify-center overflow-hidden bg-black p-8 ${item.className}`}
      >
        <div className="absolute inset-0 opacity-60">
          <div className="grain h-full w-full" />
        </div>
        <img
          src={item.src}
          alt={item.alt}
          className={`relative object-contain ${item.imageClassName ?? ""}`}
        />
      </article>
    );
  }

  return (
    <article
      className={`glass-panel relative isolate overflow-hidden ${item.className}`}
    >
      <img
        src={item.src}
        alt={item.alt}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: item.objectPosition ?? "center" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.18),rgba(0,0,0,0.42))]" />
      <div className="absolute inset-0 opacity-55">
        <div className="grain h-full w-full" />
      </div>
    </article>
  );
}

function ProductHero({ brand }) {
  const { product } = brand;
  const heroOverlay =
    product.theme?.heroOverlay ??
    "linear-gradient(180deg,rgba(0,0,0,0.56),rgba(0,0,0,0.1)_42%,rgba(0,0,0,0.82))";
  const logoSrc = product.logo ?? brand.mark.src;

  return (
    <section
      className="relative isolate min-h-[92svh] overflow-hidden"
      style={{ backgroundColor: "var(--product-dark)" }}
    >
      <img
        src={product.hero.image}
        alt={product.hero.alt}
        className="hero-drift absolute inset-0 hidden h-full w-full object-cover sm:block"
        style={{ objectPosition: product.hero.objectPosition ?? "center" }}
      />
      <img
        src={product.hero.image}
        alt=""
        className={`hero-drift absolute inset-0 h-full w-full sm:hidden ${
          product.hero.mobileFit === "contain" ? "object-contain" : "object-cover"
        }`}
        style={{
          objectPosition:
            product.hero.mobileObjectPosition ??
            product.hero.objectPosition ??
            "center",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0" style={{ background: heroOverlay }} />
      <div className="absolute inset-0 opacity-45">
        <div className="grain h-full w-full" />
      </div>

      <PageHeader />

      <div className="relative mx-auto flex min-h-[92svh] max-w-7xl items-end px-6 pb-12 pt-36 sm:px-8 lg:px-12 lg:pb-16">
        <div className="animate-rise w-full text-center">
          <div className="mx-auto flex justify-center">
            {product.logoClassName && brand.mark.type === "image" ? (
              <img
                src={logoSrc}
                alt={brand.mark.alt}
                className={`object-contain ${product.logoClassName}`}
              />
            ) : (
              <BrandMark brand={brand} context="page" />
            )}
          </div>
          <h1 className="mt-7 text-sm font-bold uppercase tracking-[0.56em] text-white sm:text-base">
            {product.headline}
          </h1>
          {product.subheadline ? (
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.32em] text-stone-200/80">
              {product.subheadline}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function ProductIntro({ product }) {
  return (
    <section
      className="px-6 py-20 sm:px-8 lg:px-12"
      data-reveal
      style={{
        backgroundColor: "var(--product-paper)",
        color: "var(--product-ink)",
      }}
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
        <div className="reveal-slide">
          <p
            className="text-[0.7rem] font-bold uppercase tracking-[0.5em]"
            style={{ color: "var(--product-muted)" }}
          >
            {product.eyebrow}
          </p>
          <h2 className="font-display mt-5 text-4xl leading-tight sm:text-5xl">
            {product.introTitle}
          </h2>
        </div>
        <div
          className="reveal-slide space-y-6 text-base leading-8 sm:text-lg"
          style={{ color: "var(--product-body)" }}
          data-reveal-delay="120"
        >
          {product.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductSection({ section, index }) {
  const reverse = index % 2 === 1;

  return (
    <section
      className="px-6 py-10 sm:px-8 lg:px-12 lg:py-14"
      data-reveal
      style={{
        backgroundColor: "var(--product-paper)",
        color: "var(--product-ink)",
      }}
    >
      <div
        className={`mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:items-center lg:gap-14 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <figure
          className="reveal-image relative min-h-[20rem] overflow-hidden bg-stone-200 sm:min-h-[28rem] lg:min-h-[34rem]"
          data-reveal-delay={reverse ? "120" : "0"}
        >
          <img
            src={section.image}
            alt={section.alt}
            className="absolute inset-0 h-full w-full object-cover transition duration-[1400ms] ease-out"
            style={{ objectPosition: section.objectPosition ?? "center" }}
          />
        </figure>

        <div
          className="reveal-slide py-4 lg:py-10"
          data-reveal-delay={reverse ? "0" : "120"}
        >
          <p
            className="text-[0.68rem] font-bold uppercase tracking-[0.48em]"
            style={{ color: "var(--product-muted)" }}
          >
            {section.eyebrow}
          </p>
          <h2 className="font-display mt-5 text-4xl leading-tight sm:text-5xl">
            {section.title}
          </h2>
          <div
            className="mt-7 space-y-5 text-sm leading-8 sm:text-base"
            style={{ color: "var(--product-body)" }}
          >
            {section.copy.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductGallery({ brand }) {
  const { product } = brand;

  return (
    <section
      className="px-6 py-20 sm:px-8 lg:px-12"
      data-reveal
      style={{
        backgroundColor: "var(--product-dark)",
        color: "var(--product-dark-ink)",
      }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="reveal-slide mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Selected gallery</p>
            <h2 className="font-display mt-4 text-4xl sm:text-5xl">
              Selected imagery.
            </h2>
          </div>
          {product.website ? (
            <a
              className="text-xs font-semibold uppercase tracking-[0.34em] text-stone-400 transition hover:text-stone-100"
              href={`https://${product.website}`}
              rel="noreferrer"
              target="_blank"
            >
              {product.website}
            </a>
          ) : null}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {product.gallery.map((image, index) => (
            <figure
              key={`${brand.slug}-gallery-${index}`}
              className={`reveal-image relative overflow-hidden bg-stone-900 ${
                index === 0
                  ? "aspect-[16/9] sm:col-span-2 lg:col-span-3"
                  : "aspect-[4/3]"
              }`}
              data-reveal-delay={String(Math.min(index * 70, 280))}
            >
              <img
                src={image}
                alt={`${brand.name} gallery image ${index + 1}`}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-[1.03]"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductContact({ brand }) {
  return (
    <section
      id="conversation"
      className="px-6 py-20 sm:px-8 lg:px-12"
      data-reveal
      style={{
        backgroundColor: "var(--product-dark)",
        color: "var(--product-dark-ink)",
      }}
    >
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-12">
        <div className="reveal-slide">
          <p className="eyebrow">Begin a conversation</p>
          <h2 className="font-display mt-4 text-4xl sm:text-5xl">
            {brand.product.finalCta}
          </h2>
          <p className="mt-6 max-w-md text-sm leading-8 text-stone-300 sm:text-base">
            {brand.enquiryNote}
          </p>
        </div>

        <div className="reveal-slide" data-reveal-delay="120">
          <InquiryForm brandName={brand.name} />
        </div>
      </div>
    </section>
  );
}

function ProductBrandPage({ brand }) {
  useEffect(() => {
    const revealItems = document.querySelectorAll("[data-reveal], .reveal-slide, .reveal-image");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const delay = entry.target.dataset.revealDelay;

          if (delay) {
            entry.target.style.transitionDelay = `${delay}ms`;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.14,
      },
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [brand.slug]);

  const theme = brand.product.theme ?? {};
  const productStyle = {
    "--product-paper": theme.paper ?? "#f4f1ec",
    "--product-ink": theme.ink ?? "#1c1917",
    "--product-body": theme.body ?? theme.muted ?? "#44403c",
    "--product-muted": theme.muted ?? "#78716c",
    "--product-dark": theme.dark ?? "#000000",
    "--product-dark-ink": theme.darkInk ?? "#f5f5f4",
  };

  return (
    <main style={productStyle}>
      <ProductHero brand={brand} />
      <ProductIntro product={brand.product} />
      {brand.product.sections.map((section, index) => (
        <ProductSection
          key={`${brand.slug}-${section.eyebrow}`}
          section={section}
          index={index}
        />
      ))}
      <ProductGallery brand={brand} />
      <ProductContact brand={brand} />
      <div
        style={{
          backgroundColor: "var(--product-dark)",
          color: "var(--product-dark-ink)",
        }}
      >
        <RelatedBrands currentSlug={brand.slug} />
      </div>
    </main>
  );
}

function LegacyBrandPage({ brand }) {
  return (
    <main className="bg-black text-stone-100">
      <section className="relative isolate overflow-hidden">
        {brand.hero.image ? (
          <img
            src={brand.hero.image}
            alt={brand.hero.alt}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(230,230,230,0.18),_transparent_16%),linear-gradient(135deg,_#111,_#050505_55%,_#101010)]" />
        )}

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.68),rgba(0,0,0,0.26)_28%,rgba(0,0,0,0.82))]" />
        <div className="absolute inset-0 opacity-70">
          <div className="grain h-full w-full" />
        </div>

        <PageHeader />

        <div className="relative mx-auto flex min-h-[76svh] max-w-7xl items-end px-6 pb-14 pt-32 sm:px-8 lg:px-12 lg:pb-20">
          <div className="animate-rise max-w-3xl">
            <p className="eyebrow">{brand.category}</p>
            <div className="mt-6">
              <BrandMark brand={brand} context="page" />
            </div>
            <p className="mt-6 max-w-2xl text-base leading-8 text-stone-200/84 sm:text-lg">
              {brand.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#conversation" className="button-primary">
                Begin a Conversation
              </a>
              <Link to="/" className="button-secondary">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div className="glass-panel p-8 sm:p-10">
            <p className="eyebrow">Brand positioning</p>
            <h2 className="font-display mt-5 text-3xl text-white sm:text-4xl">
              Product information.
            </h2>
            <div className="mt-8 grid gap-3">
              {brand.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="border border-white/8 bg-white/[0.03] px-4 py-4 text-xs font-semibold uppercase tracking-[0.34em] text-stone-300"
                >
                  {highlight}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 text-sm leading-8 text-stone-300 sm:text-base">
            {brand.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-8 lg:px-12">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Supporting imagery</p>
            <h2 className="font-display mt-3 text-3xl text-white sm:text-4xl">
              Editorial supporting frames.
            </h2>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.16fr_0.84fr]">
          {brand.gallery.map((item) => (
            <MediaCard
              key={`${brand.slug}-${item.alt ?? item.title}`}
              item={item}
            />
          ))}
        </div>
      </section>

      <section
        id="conversation"
        className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12"
      >
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-12">
          <div>
            <p className="eyebrow">Enquiry</p>
            <h2 className="font-display mt-4 text-4xl text-white sm:text-5xl">
              Begin a conversation.
            </h2>
            <p className="mt-6 max-w-md text-sm leading-8 text-stone-300 sm:text-base">
              {brand.enquiryNote}
            </p>
          </div>

          <InquiryForm brandName={brand.name} />
        </div>
      </section>

      <RelatedBrands currentSlug={brand.slug} />
    </main>
  );
}

function BrandPage() {
  const { slug } = useParams();
  const brand = getBrandBySlug(slug);

  if (!brand) {
    return <NotFoundPage />;
  }

  if (brand.product) {
    return <ProductBrandPage brand={brand} />;
  }

  return <LegacyBrandPage brand={brand} />;
}

export default BrandPage;
