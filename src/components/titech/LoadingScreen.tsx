'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Fully animated cinematic preloader — shows 3D rotating logo mark + progress
export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const duration = 2200; // 2.2s minimum loader for cinematic effect

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(100, (elapsed / duration) * 100);
      setProgress(Math.round(pct));
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        // small delay before fade-out so users see "100%"
        setTimeout(() => setDone(true), 300);
      }
    };
    raf = requestAnimationFrame(tick);

    // Safety: also dismiss on window load in case rAF stalls
    const onLoad = () => setTimeout(() => setDone(true), 500);
    window.addEventListener('load', onLoad);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('load', onLoad);
    };
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background overflow-hidden"
          style={{ backgroundColor: '#0a0712' }}
        >
          {/* Animated background grid */}
          <div className="absolute inset-0 grid-bg opacity-30" />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-600/20 blur-[120px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-cyan-500/20 blur-[100px]"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          />

          {/* Rotating 3D logo mark */}
          <div className="relative mb-8" style={{ perspective: 600 }}>
            <motion.div
              initial={{ scale: 0, rotateX: -90 }}
              animate={{ scale: 1, rotateX: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Outer rotating ring */}
              <motion.div
                className="absolute -inset-6 rounded-3xl border-2 border-violet-500/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              >
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-violet-500 glow-violet" />
                <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-400 glow-cyan" />
              </motion.div>

              {/* Inner counter-rotating ring */}
              <motion.div
                className="absolute -inset-3 rounded-2xl border border-cyan-400/30"
                animate={{ rotate: -360 }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              >
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-400" />
              </motion.div>

              {/* Logo image */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden glow-violet"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/ai-images/logo-titech.png"
                  alt="Titech Agency"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/30 to-cyan-400/30 mix-blend-overlay" />
              </motion.div>
            </motion.div>
          </div>

          {/* Brand name with letter stagger */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl font-extrabold tracking-tight flex"
          >
            {'TITECH'.split('').map((ch, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: 0.4 + i * 0.08, type: 'spring', stiffness: 200 }}
                className={i < 3 ? 'gradient-text-animated' : 'text-foreground'}
              >
                {ch}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="ml-2 text-sm sm:text-base font-medium text-muted-foreground self-center tracking-[0.3em] uppercase"
            >
              Agency
            </motion.span>
          </motion.div>

          {/* Progress bar */}
          <div className="mt-10 w-56 sm:w-72">
            <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">
              <span>Loading</span>
              <motion.span
                key={progress}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-mono text-cyan-300"
              >
                {progress.toString().padStart(3, '0')}%
              </motion.span>
            </div>
            <div className="h-1 rounded-full bg-white/10 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>
          </div>

          {/* Pulsing tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            className="absolute bottom-10 text-xs text-muted-foreground tracking-[0.3em] uppercase"
          >
            Engineering the Future of Digital
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
