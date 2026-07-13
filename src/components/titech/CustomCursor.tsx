'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * High-performance custom cursor.
 *
 * Previous version lagged because:
 *  - 3 separate Framer Motion elements each with their own spring
 *  - `mix-blend-difference` forces a full-layer composite every frame
 *  - CSS var (--mx/--my) updated on every mousemove triggers style recalc
 *    across the whole document (the spotlight overlay)
 *  - A big blurred trail element causes expensive repaints
 *
 * Fix:
 *  - Single requestAnimationFrame loop writes transforms directly to DOM
 *    via translate3d (GPU-composited, no React re-render)
 *  - Only 2 elements: a dot (instant) + a ring (lerped for lag effect)
 *  - No mix-blend-mode, no blur trail
 *  - CSS var updates throttled to ~30fps via rAF skip
 *  - `will-change: transform` + `pointer-events: none`
 *  - Disabled on touch / coarse-pointer devices
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [down, setDown] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine)');
    if (!mq.matches) return;

    // Reveal on first move
    let revealed = false;
    const reveal = () => {
      if (!revealed) {
        revealed = true;
        setEnabled(true);
      }
    };

    // Target positions (raw mouse)
    let mx = -100,
      my = -100;
    // Ring's current animated position (lerped)
    let rx = -100,
      ry = -100;
    // Throttle for CSS var (spotlight)
    let lastVarUpdate = 0;

    const isInteractive = (el: Element | null): boolean => {
      if (!el) return false;
      return !!el.closest(
        'a, button, input, textarea, select, [role="button"], [data-cursor="hover"]'
      );
    };

    const onMove = (e: MouseEvent) => {
      reveal();
      mx = e.clientX;
      my = e.clientY;
      // Throttled CSS var update for spotlight (every ~33ms = 30fps)
      const now = performance.now();
      if (now - lastVarUpdate > 33) {
        document.documentElement.style.setProperty('--mx', `${mx}px`);
        document.documentElement.style.setProperty('--my', `${my}px`);
        lastVarUpdate = now;
      }
    };

    const onOver = (e: MouseEvent) => {
      if (isInteractive(e.target as Element)) setHovering(true);
    };
    const onOut = (e: MouseEvent) => {
      if (isInteractive(e.target as Element)) setHovering(false);
    };
    const onDown = () => setDown(true);
    const onUp = () => setDown(false);
    const onLeave = () => setHidden(true);
    const onEnter = () => setHidden(false);

    // Single rAF loop — writes transforms directly, no React re-renders
    let raf = 0;
    const loop = () => {
      // Lerp the ring toward the mouse for a trailing effect
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;

      // Dot follows instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
      }
      // Ring trails
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseover', onOver, { passive: true });
    document.addEventListener('mouseout', onOut, { passive: true });
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* Main dot — follows cursor instantly */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[150]"
        style={{
          opacity: hidden ? 0 : 1,
          willChange: 'transform',
          transition: 'opacity 0.2s, width 0.2s, height 0.2s',
        }}
      >
        <div
          style={{
            width: down ? 6 : hovering ? 5 : 8,
            height: down ? 6 : hovering ? 5 : 8,
            borderRadius: '50%',
            background: hovering
              ? 'oklch(0.72 0.24 190)'
              : 'oklch(0.70 0.28 310)',
            boxShadow: hovering
              ? '0 0 12px oklch(0.72 0.24 190 / 0.8)'
              : '0 0 8px oklch(0.70 0.28 310 / 0.6)',
          }}
        />
      </div>

      {/* Outer ring — trails with lerp */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[149]"
        style={{
          opacity: hidden ? 0 : 1,
          willChange: 'transform',
          transition: 'opacity 0.2s',
        }}
      >
        <div
          style={{
            width: hovering ? 56 : 34,
            height: hovering ? 56 : 34,
            borderRadius: '50%',
            border: `1.5px solid ${
              hovering ? 'oklch(0.72 0.24 190 / 0.7)' : 'oklch(0.70 0.28 310 / 0.4)'
            }`,
            transition: 'width 0.25s ease, height 0.25s ease, border-color 0.25s ease',
          }}
        />
      </div>
    </>
  );
}
