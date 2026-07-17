import { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import ProjectCard from './ProjectCard';
import portfolioData from '../../data/portfolio.json';

const FILTERS = ['All', 'Featured', 'Professional', 'Open Source'];

export default function Projects() {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = projects.filter((p) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Featured') return p.featured;
    return p.type === activeFilter;
  });

  return (
    <section id="projects" className="section-padding">
      <div className="container-page">
        <SectionHeader
          tag="Portfolio"
          title="Projects"
          subtitle="Systems and products I've designed, built, and shipped."
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12" data-aos="fade-up">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeFilter === filter
                  ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/25'
                  : 'glass text-slate-400 hover:text-white hover:border-slate-600'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
          {filtered.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-slate-500 py-12">No projects match the current filter.</p>
        )}
      </div>
    </section>
  );
}
