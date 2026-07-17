import { motion } from 'framer-motion';
import { getIcon } from '../../utils/iconMap';
import SectionHeader from '../common/SectionHeader';
import portfolioData from '../../data/portfolio.json';

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="section-padding bg-slate-900/30">
      <div className="container-page">
        <SectionHeader
          tag="Expertise"
          title="Skills & Technologies"
          subtitle="Technologies and tools I've worked with across production systems."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((category, idx) => {
            const Icon = getIcon(category.icon);
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="glass rounded-2xl p-6 hover:border-sky-500/30 hover-glow-blue transition-all duration-300 group"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 group-hover:bg-sky-500/20 transition-colors">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-semibold text-slate-200 text-sm group-hover:text-sky-300 transition-colors">
                    {category.category}
                  </h3>
                </div>

                {/* Skill pills */}
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className="tech-tag hover:bg-sky-400/20 hover:border-sky-400/40 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
