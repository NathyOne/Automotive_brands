function TextMark({ label, className = "" }) {
  return (
    <div className={`flex flex-col items-center gap-4 text-center ${className}`}>
      <div className="font-display flex items-center text-[clamp(3.1rem,7vw,5rem)] leading-none tracking-[-0.08em]">
        <span className="rounded-full border border-white/30 px-[0.24em] py-[0.02em]">
          C
        </span>
        <span className="-ml-3 rounded-full border border-white/30 px-[0.24em] py-[0.02em]">
          D
        </span>
      </div>
      <span className="text-[0.7rem] font-semibold uppercase tracking-[0.72em] text-stone-100/90 sm:text-[0.78rem]">
        {label}
      </span>
    </div>
  );
}

function BrandMark({ brand, context = "home" }) {
  const className = brand.mark[`${context}ClassName`] ?? "";

  if (brand.mark.type === "text") {
    return <TextMark label={brand.mark.label} className={className} />;
  }

  return (
    <img
      src={brand.mark.src}
      alt={brand.mark.alt}
      className={`object-contain ${className}`}
    />
  );
}

export default BrandMark;
