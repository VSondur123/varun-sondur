/**
 * Reusable section header with gradient title and subtitle.
 * All sections use this to stay visually consistent.
 */
export default function SectionHeader({ tag, title, subtitle }) {
  return (
    <div className="text-center mb-16" data-aos="fade-up">
      {tag && (
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-sky-400 bg-sky-400/10 border border-sky-400/20 mb-4">
          {tag}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="flex items-center justify-center gap-2 mt-8" aria-hidden="true">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-sky-500" />
        <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-sky-400 to-violet-500" />
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-violet-500" />
      </div>
    </div>
  );
}
