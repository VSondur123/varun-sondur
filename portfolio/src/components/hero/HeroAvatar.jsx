import { motion } from 'framer-motion';

/**
 * Clean, minimal avatar for the Hero section.
 * Shows a photo if provided; falls back to a styled monogram.
 * No orbits, no rotating rings, no floating badges — just a premium frame.
 */
export default function HeroAvatar({ photo, name }) {
  const initials = name
    ? name.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase()
    : 'VS';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="relative flex items-center justify-center"
    >
      {/* Soft ambient glow behind avatar */}
      <div
        className="absolute rounded-full"
        style={{
          width: '110%',
          height: '110%',
          background: 'radial-gradient(circle, rgba(14,165,233,0.12) 0%, rgba(139,92,246,0.08) 50%, transparent 70%)',
          filter: 'blur(24px)',
        }}
      />

      {/* Avatar frame */}
      <div
        className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem] rounded-full overflow-hidden shadow-2xl shadow-sky-500/10"
        style={{
          background: 'linear-gradient(135deg, rgba(14,165,233,0.4) 0%, rgba(139,92,246,0.4) 100%)',
          padding: '3px',
        }}
      >
        <div
          className="w-full h-full rounded-full overflow-hidden flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, #0f2944 0%, #1a1035 50%, #0f172a 100%)',
          }}
        >
          {photo ? (
            <img src={photo} alt={name} className="w-full h-full object-cover" />
          ) : (
            <span
              className="text-6xl md:text-7xl font-black select-none"
              style={{
                background: 'linear-gradient(135deg, #38bdf8 0%, #a78bfa 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {initials}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
