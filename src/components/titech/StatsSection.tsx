'use client';

import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { AGENCY } from '@/data/services';

export default function StatsSection() {
  return (
    <section className="relative py-20 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {AGENCY.stats.map((s, i) => (
            <StatCard key={i} value={s.value} suffix={s.suffix} label={s.label} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({
  value,
  suffix,
  label,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: [0.16, 1, 0.3, 1],
      });
      return controls.stop;
    }
  }, [inView, value, count]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="relative group"
    >
      <div className="relative p-6 sm:p-8 rounded-2xl glass-strong border border-white/10 text-center overflow-hidden">
        {/* glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 via-violet-500/5 to-cyan-400/0 group-hover:from-violet-500/10 group-hover:to-cyan-400/10 transition-all" />
        <div className="relative">
          <div className="font-[family-name:var(--font-syne)] text-4xl sm:text-5xl font-extrabold gradient-text">
            <motion.span>{rounded}</motion.span>
            {suffix}
          </div>
          <div className="mt-2 text-xs sm:text-sm text-muted-foreground uppercase tracking-wider">
            {label}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
