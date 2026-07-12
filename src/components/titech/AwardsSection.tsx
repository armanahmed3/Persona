'use client';

import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { Award } from 'lucide-react';
import { AWARDS } from '@/data/services';

export default function AwardsSection() {
  return (
    <section className="relative py-20 md:py-24 overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 bg-gradient-to-r from-violet-950/10 via-transparent to-cyan-950/10 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-medium uppercase tracking-[0.2em] text-amber-300 mb-3">
            <Award className="w-3.5 h-3.5" />
            Recognition
          </div>
          <h2 className="font-[family-name:var(--font-syne)] text-2xl sm:text-3xl font-bold">
            Awarded by the <span className="gradient-text-animated">best in the industry</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {AWARDS.map((a, i) => (
            <AwardCard key={a.name} award={a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AwardCard({ award, index }: { award: (typeof AWARDS)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-30px' });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, award.count, { duration: 1.8, ease: [0.16, 1, 0.3, 1] });
      return controls.stop;
    }
  }, [inView, award.count, count]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      whileHover={{ y: -5, scale: 1.03 }}
      className="group relative p-5 rounded-2xl glass border border-white/10 hover:border-amber-500/40 transition-all text-center"
    >
      <div className="mb-2">
        <Award className="w-6 h-6 mx-auto text-amber-400 group-hover:text-amber-300 transition-colors" />
      </div>
      <div className="font-[family-name:var(--font-syne)] text-3xl font-extrabold ticker-glow">
        <motion.span>{rounded}</motion.span>
        {award.count > 1 ? '×' : ''}
      </div>
      <div className="text-xs font-semibold text-foreground/80 mt-1">{award.name}</div>
      <div className="text-[10px] text-muted-foreground mt-0.5">{award.label}</div>
    </motion.div>
  );
}
