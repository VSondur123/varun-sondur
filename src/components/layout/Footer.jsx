import { getIcon } from '../../utils/iconMap';
import { NAV_LINKS } from '../../utils/constants';
import portfolioData from '../../data/portfolio.json';

const handleNavClick = (href) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function Footer() {
  const { name, title, resumeFile } = portfolioData.personal;
  const { socialLinks } = portfolioData;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/60 bg-slate-950/70">
      <div className="container-page py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand column */}
          <div>
            <p className="font-bold text-xl gradient-text mb-1">{name}</p>
            <p className="text-slate-400 text-sm">{title}</p>
            <p className="text-slate-500 text-xs mt-3 leading-relaxed max-w-xs">
              Building scalable fintech systems with precision and purpose.
            </p>
          </div>

          {/* Navigation column */}
          <div>
            <p className="text-slate-300 text-xs font-semibold uppercase tracking-wider mb-4">Navigate</p>
            <nav className="grid grid-cols-2 gap-x-4 gap-y-2">
              {NAV_LINKS.map(({ label, href }) => (
                <button
                  key={href}
                  onClick={() => handleNavClick(href)}
                  className="text-left text-sm text-slate-400 hover:text-sky-400 transition-colors"
                >
                  {label}
                </button>
              ))}
            </nav>
          </div>

          {/* Connect column */}
          <div>
            <p className="text-slate-300 text-xs font-semibold uppercase tracking-wider mb-4">Connect</p>
            <div className="flex flex-wrap gap-3 mb-4">
              {socialLinks.map(({ platform, url, icon, label }) => {
                const Icon = getIcon(icon);
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-2.5 rounded-full glass text-slate-400 hover:text-sky-400 hover:border-sky-500/40 transition-all duration-200"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
            <a
              href={resumeFile}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/30 hover:bg-sky-500/20 transition-colors"
            >
              Download Resume ↗
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs">
            © {year} {name}. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-xs text-slate-400 hover:text-sky-400 transition-colors flex items-center gap-1"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
