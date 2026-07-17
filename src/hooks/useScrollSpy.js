import { useState, useEffect } from 'react';

/**
 * Tracks which section is currently visible in the viewport.
 * @param {string[]} sectionIds - Array of section element IDs to observe
 * @returns {string} The ID of the currently active section
 */
export function useScrollSpy(sectionIds) {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: '-40% 0px -55% 0px' }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [sectionIds]);

  return activeSection;
}
