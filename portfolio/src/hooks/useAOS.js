import { useEffect } from 'react';
import AOS from 'aos';

/**
 * Initializes and refreshes AOS (Animate On Scroll) library.
 * Call this hook once at the app root level.
 */
export function useAOS() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
      delay: 0,
    });
  }, []);
}
