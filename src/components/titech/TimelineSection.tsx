'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { TIMELINE } from '@/data/services';
import { SectionHeading } from './SectionHeading';

export default function TimelineSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section ref={ref} id="journey" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-violet-600/10 blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeading
          eyebrow="Our Journey"
          title={
            <>
              From Spark to <span className="gradient-text-animated">Cinematic Web</span>
            </>
          }
          description="Six years. Three continents. One obsession — building the future of digital."
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical track */}
          <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-px bg-white/10" />

          {/* Animated progress line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 w-px bg-gradient-to-b from-violet-500 via-fuchsia-500 to-cyan-400"
          />

          <div className="space-y-10 sm:space-y-16">
            {TIMELINE.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 60, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative flex items-center ${
                    isLeft ? 'sm:justify-start' : 'sm:justify-end'
                  } pl-12 sm:pl-0`}
                >
                  {/* Node dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 border-4 border-background z-10 glow-violet"
                  >
                    <span className="absolute inset-0 rounded-full bg-violet-500 animate-ping opacity-40" />
                  </motion.div>

                  {/* Card */}
                  <div
                    className={`w-full sm:w-[calc(50%-3rem)] ${
                      isLeft ? 'sm:pr-8 sm:text-right' : 'sm:pl-8'
                    }`}
                  >
                    <div className="group p-5 sm:p-6 rounded-2xl glass-strong border border-white/10 hover:border-violet-500/40 transition-all hover:-translate-y-1">
                      <div
                        className={`flex items-center gap-3 mb-3 ${
                          isLeft ? 'sm:justify-end' : ''
                        }`}
                      >
                        <span className="font-[family-name:var(--font-syne)] text-2xl sm:text-3xl font-extrabold gradient-text-animated">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="font-[family-name:var(--font-syne)] text-lg font-bold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                        {item.description}
                      </p>
                      <div
                        className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full bg-gradient-to-r from-violet-600/20 to-cyan-500/20 border border-violet-500/30 text-cyan-300 ${
                          isLeft ? 'sm:ml-auto' : ''
                        }`}
                      >
                        <span className="w-1 h-1 rounded-full bg-cyan-400" />
                        {item.milestone}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
