import { FaCheckCircle, FaMapMarkerAlt } from 'react-icons/fa';
import SectionHeader from '../common/SectionHeader';
import portfolioData from '../../data/portfolio.json';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="section-padding bg-slate-900/30">
      <div className="container-page">
        <SectionHeader
          tag="Learning"
          title="Education"
          subtitle="Academic foundation that underpins my engineering career."
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-sky-500 to-violet-500 hidden md:block" />

          <div className="space-y-8">
            {education.map((edu, idx) => (
              <div
                key={edu.id}
                className="flex gap-8"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                {/* Dot */}
                <div className="hidden md:flex flex-col items-center flex-shrink-0">
                  <div className="w-4 h-4 rounded-full bg-sky-500 border-4 border-slate-900 shadow-lg shadow-sky-500/40 mt-6 z-10" />
                </div>

                {/* Card */}
                <div className="flex-1 glass rounded-2xl p-7 hover:border-sky-500/30 hover-glow-blue transition-all duration-300 group">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-slate-100 group-hover:text-sky-300 transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-sky-400 font-semibold">{edu.field}</p>
                      <p className="text-slate-300 text-sm mt-1">{edu.institution}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-slate-400 text-sm font-medium">{edu.duration}</p>
                      <p className="text-slate-500 text-xs mt-1 flex items-center justify-end gap-1">
                        <FaMapMarkerAlt size={10} /> {edu.location}
                      </p>
                    </div>
                  </div>

                  <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-4">
                    {edu.grade}
                  </div>

                  {edu.highlights && edu.highlights.length > 0 && (
                    <ul className="space-y-2">
                      {edu.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <FaCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0" size={14} />
                          <span className="text-slate-300 text-sm">{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
