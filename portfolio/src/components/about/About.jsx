import { FaCheckCircle, FaMapMarkerAlt, FaClock, FaGraduationCap, FaHeart } from 'react-icons/fa';
import SectionHeader from '../common/SectionHeader';
import portfolioData from '../../data/portfolio.json';

export default function About() {
  const { summary, highlights, personalNote } = portfolioData.about;
  const { contact, education, experience, interests, personal } = portfolioData;

  // Derive current role from first experience entry
  const currentRole = experience[0];

  // Quick facts driven entirely from JSON
  const quickFacts = [
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: contact.location,
    },
    {
      icon: FaClock,
      label: 'Current Role',
      value: `${currentRole.role} @ ${currentRole.company}`,
    },
    {
      icon: FaGraduationCap,
      label: 'Education',
      value: `${education[0].degree}, ${education[0].institution.split('(')[0].trim()}`,
    },
  ];

  return (
    <section id="about" className="section-padding bg-slate-900/30">
      <div className="container-page">
        <SectionHeader
          tag="About Me"
          title="Who I Am"
          subtitle="A brief introduction to who I am and what drives me."
        />

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Left — Professional Summary */}
          <div data-aos="fade-right" className="flex">
            <div className="glass rounded-2xl p-8 glow-blue w-full flex flex-col">
              <h3 className="text-lg font-bold text-slate-100 mb-5">Professional Summary</h3>
              <p className="text-slate-300 leading-relaxed text-sm mb-6">{summary}</p>
              <div className="mt-auto border-t border-slate-700/50 pt-5">
                <p className="text-slate-400 leading-relaxed text-sm italic">{personalNote}</p>
              </div>
            </div>
          </div>

          {/* Right — Highlights + Quick Facts */}
          <div data-aos="fade-left" data-aos-delay="100" className="space-y-6">
            {/* Key highlights */}
            <div className="glass rounded-2xl p-8 glow-purple">
              <h3 className="text-lg font-bold text-slate-100 mb-5">Key Highlights</h3>
              <ul className="space-y-3">
                {highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <FaCheckCircle className="text-sky-400 mt-0.5 flex-shrink-0" size={14} />
                    <span className="text-slate-300 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick facts */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Quick Facts</h3>
              <div className="space-y-3">
                {quickFacts.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-700/50 text-sky-400 flex-shrink-0">
                      <Icon size={13} />
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs">{label}</p>
                      <p className="text-slate-200 text-sm font-medium">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="glass rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <FaHeart className="text-violet-400" size={13} />
                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Interests</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-violet-500/10 text-violet-300 border border-violet-500/20"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
