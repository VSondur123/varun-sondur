import { motion } from 'framer-motion';
import { getIcon } from '../../utils/iconMap';
import SectionHeader from '../common/SectionHeader';
import portfolioData from '../../data/portfolio.json';

export default function Achievements() {
  const { achievements, certifications } = portfolioData;

  return (
    <section id="achievements" className="section-padding bg-slate-900/30">
      <div className="container-page">
        <SectionHeader
          tag="Recognition"
          title="Achievements & Certifications"
          subtitle="Milestones, recognitions, and professional credentials earned along the way."
        />

        {/* Achievements grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-16">
          {achievements.map((item, idx) => {
            const Icon = getIcon(item.icon);
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="glass rounded-2xl p-6 hover:border-yellow-500/30 hover-glow-yellow transition-all duration-300 group flex gap-5"
              >
                <div className="p-3 rounded-xl bg-yellow-500/10 text-yellow-400 h-fit flex-shrink-0 group-hover:bg-yellow-500/20 transition-colors">
                  <Icon size={22} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-base font-bold text-slate-100 group-hover:text-yellow-300 transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-xs text-slate-500 font-medium">{item.year}</span>
                  </div>
                  <p className="text-sky-400 text-sm font-medium mb-2">{item.organization}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications */}
        {certifications.length > 0 && (
          <>
            <h3
              className="text-xl font-bold text-slate-200 text-center mb-8"
              data-aos="fade-up"
            >
              Professional Certifications
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, idx) => (
                <motion.a
                  key={cert.id}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="glass rounded-xl p-5 hover:border-sky-500/30 hover-glow-blue transition-all duration-300 group block"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-sky-500 mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-200 text-sm group-hover:text-sky-300 transition-colors">
                        {cert.title}
                      </p>
                      <p className="text-slate-400 text-xs mt-1">{cert.issuer}</p>
                      <p className="text-slate-500 text-xs mt-1">{cert.year}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
