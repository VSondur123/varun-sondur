import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import ProjectModal from './ProjectModal';

/**
 * Compact project card — title, short description, tech tags, action buttons.
 * Full details open in ProjectModal to keep cards clean and scannable.
 */
export default function ProjectCard({ project, index }) {
  const [modalOpen, setModalOpen] = useState(false);
  const isFeatured = project.featured;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.08 }}
        whileHover={{ y: -4, transition: { duration: 0.2 } }}
        className={`glass rounded-2xl p-6 flex flex-col h-full hover:border-sky-500/30 transition-all duration-300 group ${
          isFeatured ? 'glow-blue' : ''
        }`}
      >
        {/* Badge row */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
            {project.type}
          </span>
          {isFeatured && (
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20">
              ★ Featured
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-slate-100 group-hover:text-sky-300 transition-colors leading-snug mb-2">
          {project.title}
        </h3>

        {/* Short description — 2 lines max */}
        <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
          {project.description}
        </p>

        {/* Tech tags — top 4 only to keep card compact */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="tech-tag">{tech}</span>
          ))}
          {project.technologies.length > 4 && (
            <span className="tech-tag opacity-60">+{project.technologies.length - 4}</span>
          )}
        </div>

        {/* Action row */}
        <div className="flex items-center gap-2 pt-4 border-t border-slate-700/50">
          <button
            onClick={() => setModalOpen(true)}
            className="flex-1 py-2 rounded-lg text-xs font-semibold text-sky-400 border border-sky-500/30 hover:bg-sky-500/10 transition-colors"
          >
            View Details
          </button>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg glass text-slate-400 hover:text-sky-400 transition-colors"
            >
              <FaGithub size={15} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live Demo"
              className="p-2 rounded-lg glass text-slate-400 hover:text-sky-400 transition-colors"
            >
              <FaExternalLinkAlt size={13} />
            </a>
          )}
        </div>
      </motion.div>

      {/* Detail modal */}
      {modalOpen && (
        <ProjectModal project={project} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
}
