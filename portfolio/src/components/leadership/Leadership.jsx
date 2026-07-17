import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import portfolioData from '../../data/portfolio.json';

export default function Leadership() {
  const { leadership } = portfolioData;

  return (
    <section id="leadership" className="section-padding">
      <div className="container-page">
        <SectionHeader
          tag="Leadership"
          title="Leadership & Mentorship"
          subtitle="Impact beyond code — driving teams, culture, and engineering excellence."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {leadership.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass rounded-2xl p-6 hover:border-violet-500/30 hover-glow-purple transition-all duration-300 group flex flex-col"
            >
              {/* Badge */}
              <span className="inline-block self-start px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-400 border border-violet-500/20 mb-4">
                {item.duration}
              </span>

              <h3 className="text-base font-bold text-slate-100 group-hover:text-violet-300 transition-colors mb-1">
                {item.title}
              </h3>
              <p className="text-sky-400 text-sm font-medium mb-4">{item.organization}</p>

              <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">
                {item.description}
              </p>

              <div className="pt-4 border-t border-slate-700/50">
                <p className="text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-1">Impact</p>
                <p className="text-slate-300 text-sm leading-relaxed">{item.impact}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
