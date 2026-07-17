import SectionHeader from '../common/SectionHeader';
import ExperienceCard from './ExperienceCard';
import portfolioData from '../../data/portfolio.json';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Career"
          title="Work Experience"
          subtitle="My professional journey building fintech and enterprise software systems."
        />

        {/* 3-column timeline grid: [left-card] [center-line] [right-card] */}
        <div className="relative">
          {/* Desktop: vertical center line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-sky-500/80 via-violet-500/60 to-transparent" />

          <div className="space-y-0">
            {experience.map((exp, index) => (
              <ExperienceCard key={exp.id} exp={exp} index={index} total={experience.length} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
