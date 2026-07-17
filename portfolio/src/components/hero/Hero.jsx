import { motion } from 'framer-motion';
import { FaDownload, FaEnvelope } from 'react-icons/fa';
import { getIcon } from '../../utils/iconMap';
import portfolioData from '../../data/portfolio.json';
import HeroAvatar from './HeroAvatar';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Hero() {
  const { name, title, tagline, intro, resumeFile, photo, openToWork } = portfolioData.personal;
  const { socialLinks } = portfolioData;

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-sky-600/10 blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-violet-600/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-sky-500/5 blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 container-page pt-32 pb-24 flex flex-col lg:flex-row items-center justify-between gap-20 lg:gap-24">
        {/* Left — Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 text-center lg:text-left"
        >
          {openToWork && (
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for Opportunities
              </span>
            </motion.div>
          )}

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-[5.25rem] font-black leading-[1.05] tracking-tight mb-8"
          >
            Hi, I'm{' '}
            <span className="gradient-text">{name.split(' ')[0]}</span>
            <br />
            <span className="text-slate-100">{name.split(' ').slice(1).join(' ')}</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl lg:text-[1.75rem] font-semibold text-sky-400 mb-6 font-mono leading-snug"
          >
            {title}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-slate-400 italic text-base md:text-lg mb-8"
          >
            {tagline}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-12"
          >
            {intro}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-14"
          >
            <button
              onClick={scrollToContact}
              className="inline-flex items-center justify-center gap-2.5 h-[52px] px-8 min-w-[220px] rounded-full bg-sky-500 hover:bg-sky-400 text-white font-semibold text-base transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-sky-500/30 hover:shadow-xl hover:shadow-sky-500/40"
            >
              <FaEnvelope size={16} />
              Get In Touch
            </button>
            <a
              href={resumeFile}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 h-[52px] px-8 min-w-[220px] rounded-full glass text-slate-100 border border-slate-600/80 hover:border-sky-400/60 font-semibold text-base transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800/50"
            >
              <FaDownload size={16} />
              Download Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-start gap-4"
          >
            {socialLinks.map(({ platform, url, icon, label }) => {
              const Icon = getIcon(icon);
              return (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-12 h-12 flex items-center justify-center rounded-full glass text-slate-300 border border-slate-700/60 hover:text-sky-400 hover:border-sky-500/50 hover:bg-slate-800/60 transition-all duration-200 hover:-translate-y-1"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Right — Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="flex-shrink-0"
        >
          <HeroAvatar name={name} photo={photo} />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-slate-500 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-0.5 h-8 bg-gradient-to-b from-sky-500 to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
}
