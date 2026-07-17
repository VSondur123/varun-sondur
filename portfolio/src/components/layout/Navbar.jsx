import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { NAV_LINKS, SECTION_IDS } from '../../utils/constants';
import portfolioData from '../../data/portfolio.json';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useScrollSpy(SECTION_IDS);
  const { firstName, lastName } = portfolioData.personal;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Full-width sticky navbar */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-slate-950/70 backdrop-blur-xl border-b border-slate-800/60 shadow-lg shadow-black/20'
            : 'bg-slate-950/30 backdrop-blur-md border-b border-transparent'
        }`}
      >
        <nav
          aria-label="Primary"
          className="container-page h-[76px] flex items-center justify-between"
        >
          {/* Logo */}
          <button
            onClick={() => handleNavClick('#hero')}
            className="group flex items-center gap-2 text-xl font-bold tracking-tight"
            aria-label="Back to top"
          >
            <span className="gradient-text">{firstName}</span>
            <span className="text-slate-400 group-hover:text-slate-200 transition-colors">{lastName}</span>
          </button>

          {/* Desktop tabs */}
          <div className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-slate-900/40 border border-slate-800/60 backdrop-blur-md">
            {NAV_LINKS.map(({ label, href }) => {
              const sectionId = href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <button
                  key={href}
                  onClick={() => handleNavClick(href)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    isActive ? 'text-white' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-500/25 to-violet-500/20 border border-sky-500/30"
                      transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </button>
              );
            })}
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2.5 -mr-1 rounded-xl text-slate-200 hover:bg-slate-800/60 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-menu"
          >
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-nav-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="fixed top-[84px] left-4 right-4 z-40 glass border border-slate-700/60 rounded-2xl shadow-2xl shadow-black/40 p-3"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {NAV_LINKS.map(({ label, href }) => {
                const isActive = activeSection === href.replace('#', '');
                return (
                  <button
                    key={href}
                    onClick={() => handleNavClick(href)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`px-4 py-3.5 rounded-xl text-base font-medium text-left transition-all ${
                      isActive
                        ? 'bg-sky-500/15 text-sky-300 border border-sky-500/30'
                        : 'text-slate-200 hover:bg-slate-800/60 border border-transparent'
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
