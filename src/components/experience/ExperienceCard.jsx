import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp, FaMapMarkerAlt } from 'react-icons/fa';

/**
 * Experience card using a 3-column CSS grid layout on desktop:
 *   [card | center-dot | empty]  (even index — card on left)
 *   [empty | center-dot | card]  (odd index — card on right)
 * Collapses to single column on mobile/tablet.
 */
export default function ExperienceCard({ exp, index, total }) {
  const [expanded, setExpanded] = useState(index === 0);
  const isLeft = index % 2 === 0;
  const isLast = index === total - 1;

  const card = (
    <div className="glass rounded-2xl p-6 hover:border-sky-500/30 transition-all duration-300 group">
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="min-w-0">
          <span className="inline-block text-xs font-semibold px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20 mb-2">
            {exp.type}
          </span>
          <h3 className="text-base font-bold text-slate-100 group-hover:text-sky-300 transition-colors leading-tight">
            {exp.role}
          </h3>
          <p className="text-sky-400 font-semibold text-sm mt-0.5">{exp.company}</p>
        </div>
        <div className="text-right flex-shrink-0">
          <p className="text-slate-400 text-xs font-medium">{exp.duration}</p>
          <p className="text-slate-500 text-xs mt-1 flex items-center justify-end gap-1">
            <FaMapMarkerAlt size={9} /> {exp.location}
          </p>
        </div>
      </div>

      {/* Technologies */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {exp.technologies.map((tech) => (
          <span key={tech} className="tech-tag">{tech}</span>
        ))}
      </div>

      {/* Toggle */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-sky-400 transition-colors font-medium"
      >
        {expanded ? (
          <><FaChevronUp size={11} /> Hide Responsibilities</>
        ) : (
          <><FaChevronDown size={11} /> View Responsibilities ({exp.responsibilities.length})</>
        )}
      </button>

      {/* Responsibilities */}
      <AnimatePresence>
        {expanded && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="mt-4 space-y-2 overflow-hidden"
          >
            {exp.responsibilities.map((resp, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-500 flex-shrink-0" />
                <span className="text-slate-300 text-xs leading-relaxed">{resp}</span>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <>
      {/* Mobile / tablet: single column */}
      <div
        className="lg:hidden mb-6"
        data-aos="fade-up"
        data-aos-delay={index * 80}
      >
        <div className="flex gap-4">
          <div className="flex flex-col items-center pt-6">
            <div className="w-3 h-3 rounded-full bg-sky-500 border-2 border-slate-900 shadow-md shadow-sky-500/50 z-10 flex-shrink-0" />
            {!isLast && <div className="w-px flex-1 mt-1 bg-gradient-to-b from-sky-500/60 to-transparent min-h-[2rem]" />}
          </div>
          <div className="flex-1 pb-6">{card}</div>
        </div>
      </div>

      {/* Desktop: 3-column grid alternating left / right */}
      <div
        className="hidden lg:grid pb-12"
        style={{ gridTemplateColumns: '1fr 48px 1fr' }}
        data-aos={isLeft ? 'fade-right' : 'fade-left'}
        data-aos-delay={index * 80}
      >
        {/* Left column */}
        <div className={isLeft ? 'pr-8' : ''}>
          {isLeft && card}
        </div>

        {/* Center column — dot + line */}
        <div className="flex flex-col items-center">
          <div className="w-4 h-4 rounded-full bg-sky-500 border-4 border-slate-900 shadow-lg shadow-sky-500/50 z-10 mt-7 flex-shrink-0" />
          {!isLast && (
            <div className="w-px flex-1 mt-1 bg-gradient-to-b from-sky-500/40 to-transparent" />
          )}
        </div>

        {/* Right column */}
        <div className={!isLeft ? 'pl-8' : ''}>
          {!isLeft && card}
        </div>
      </div>
    </>
  );
}
