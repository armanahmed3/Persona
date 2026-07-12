'use client';

import { useEffect } from 'react';

// Film grain + mouse-tracking spotlight overlay
export default function CinematicOverlay() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mx', `${e.clientX}px`);
      document.documentElement.style.setProperty('--my', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handler, { passive: true });
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  return (
    <>
      <div className="film-grain" aria-hidden />
      <div
        className="fixed inset-0 pointer-events-none z-[1] spotlight"
        aria-hidden
      />
    </>
  );
}
