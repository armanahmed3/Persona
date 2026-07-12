'use client';

import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero3D = lazy(() => import('./Hero3D'));

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};
const item = {
  hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Hero({ onBookClick }: { onBookClick: () => void }) {
  return (
    <section
      id="top"
      className="relative min-h-screen w-full flex items-center overflow-hidden pt-24"
    >
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<div className="absolute inset-0 animated-gradient-bg" />}>
          <Hero3D className="absolute inset-0" />
        </Suspense>
        {/* gradient overlays for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/60 pointer-events-none" />
      </div>

      {/* Decorative grid + glow */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-violet-600/20 blur-[120px] animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-cyan-500/20 blur-[120px] animate-pulse-glow pointer-events-none" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
            </span>
            <span className="text-xs font-medium tracking-wide text-foreground/80">
              AI-Driven Digital Agency · US · UK · UAE
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-[family-name:var(--font-syne)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] tracking-tight"
          >
            We Engineer the{' '}
            <span className="gradient-text text-glow-violet">Future</span>{' '}
            of Digital.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            Titech Agency fuses <span className="text-foreground font-medium">AI, 3D, and cinematic motion</span> to ship
            unbelievable web, mobile, and brand experiences. Powered by Three.js, R3F, GSAP, z.ai, OpenRouter & NVIDIA.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <Button
              onClick={onBookClick}
              size="lg"
              className="group bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white border-0 glow-violet h-14 px-8 text-base"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Book an Appointment
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <a href="#services">
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-base border-white/20 bg-white/5 backdrop-blur hover:bg-white/10"
              >
                <Play className="w-4 h-4 mr-2" />
                Explore Services
              </Button>
            </a>
          </motion.div>

          {/* Quick stats strip */}
          <motion.div variants={item} className="mt-14 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { v: '250+', l: 'Projects' },
              { v: '40+', l: 'Engineers' },
              { v: '3', l: 'Continents' },
            ].map((s, i) => (
              <div key={i} className="text-center sm:text-left">
                <div className="font-[family-name:var(--font-syne)] text-3xl font-bold gradient-text">
                  {s.v}
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-violet-500 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
