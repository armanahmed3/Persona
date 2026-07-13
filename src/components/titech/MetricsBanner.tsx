'use client';

import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { METRICS_BANNER } from '@/data/services';

export default function MetricsBanner() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-violet-950/20 via-transparent to-cyan-950/20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-fuchsia-600/10 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="rounded-3xl glass-strong border border-white/10 overflow-hidden">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/10">
            {METRICS_BANNER.map((m, i) => (
              <MetricItem key={i} metric={m} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricItem({
  metric,
  index,
}: {
  metric: (typeof METRICS_BANNER)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-30px' });
  const count = useMotionValue(0);
  const display = useTransform(count, (v) => v.toFixed(metric.decimals || 0));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, metric.value, {
        duration: 2,
        ease: [0.16, 1, 0.3, 1],
      });
      return controls.stop;
    }
  }, [inView, metric.value, count]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="p-6 sm:p-8 text-center group hover:bg-white/[0.02] transition-colors"
    >
      <div className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl font-extrabold gradient-text-animated ticker-glow flex items-center justify-center">
        <motion.span>{display}</motion.span>
        <span>{metric.suffix}</span>
      </div>
      <div className="mt-2 text-xs sm:text-sm text-muted-foreground uppercase tracking-wider">
        {metric.label}
      </div>
    </motion.div>
  );
}
