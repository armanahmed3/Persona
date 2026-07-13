'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '@/data/services';
import { SectionHeading } from './SectionHeading';

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setDirection(1);
    setIndex((i) => (i + 1) % TESTIMONIALS.length);
  }, []);
  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [paused, next]);

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 80 : -80, scale: 0.95 }),
    center: { opacity: 1, x: 0, scale: 1 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -80 : 80, scale: 0.95 }),
  };

  const active = TESTIMONIALS[index];

  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-violet-600/10 blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeading
          eyebrow="Client Love"
          title={
            <>
              Don't Take Our Word — <span className="gradient-text">Take Theirs</span>
            </>
          }
          description="Real results from real clients across fintech, healthcare, Web3, and enterprise."
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Large quote mark */}
          <div className="absolute -top-6 -left-2 sm:-left-6 text-violet-500/20 pointer-events-none">
            <Quote className="w-24 h-24 sm:w-32 sm:h-32" />
          </div>

          {/* Card */}
          <div className="relative min-h-[320px] sm:min-h-[280px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative p-8 sm:p-10 rounded-3xl glass-strong border border-white/10"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: active.rating }).map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0, rotate: -90 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ delay: 0.2 + i * 0.08, type: 'spring' }}
                    >
                      <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                    </motion.span>
                  ))}
                </div>

                <blockquote className="text-lg sm:text-xl leading-relaxed text-foreground/90 mb-8">
                  "{active.quote}"
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center font-[family-name:var(--font-syne)] font-bold text-white">
                    {active.avatar}
                  </div>
                  <div>
                    <div className="font-semibold">{active.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {active.role} · {active.location}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full glass border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    i === index
                      ? 'w-8 bg-gradient-to-r from-violet-500 to-cyan-400'
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-11 h-11 rounded-full glass border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
