import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaGithub, FaExternalLinkAlt, FaCheckCircle } from 'react-icons/fa';

/**
 * Full-screen modal showing extended project details.
 * Opens when user clicks "View Details" on a compact ProjectCard.
 */
export default function ProjectModal({ project, onClose }) {
  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" aria-hidden="true" />

        {/* Modal panel */}
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
          className="relative glass border border-slate-700/60 rounded-2xl p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700/50 transition-all"
            aria-label="Close modal"
          >
            <FaTimes size={16} />
          </button>

          {/* Header */}
          <div className="mb-6 pr-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
                {project.type}
              </span>
              {project.featured && (
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20">
                  ★ Featured
                </span>
              )}
            </div>
            <h2 id="project-modal-title" className="text-2xl font-bold text-slate-100 leading-tight">{project.title}</h2>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Overview</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Highlights */}
          {project.highlights?.length > 0 && (
            <div className="mb-6">
              <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Key Achievements</h3>
              <ul className="space-y-2">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FaCheckCircle className="text-sky-400 mt-0.5 flex-shrink-0" size={13} />
                    <span className="text-slate-300 text-sm">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>

          {/* Links */}
          {(project.github || project.demo) && (
            <div className="flex items-center gap-3 pt-4 border-t border-slate-700/50">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg glass border border-slate-700/60 text-slate-300 hover:text-sky-400 hover:border-sky-500/40 transition-all text-sm font-medium"
                >
                  <FaGithub size={15} /> GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-400 text-white transition-colors text-sm font-medium"
                >
                  <FaExternalLinkAlt size={13} /> Live Demo
                </a>
              )}
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
