/**
 * Shared navigation links used by Navbar and Footer.
 * Keep in sync with section IDs in App.jsx.
 */
export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Contact', href: '#contact' },
];

export const SECTION_IDS = NAV_LINKS.map((l) => l.href.replace('#', ''));
