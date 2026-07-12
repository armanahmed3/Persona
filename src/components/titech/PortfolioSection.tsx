'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { PORTFOLIO } from '@/data/services';
import { SectionHeading } from './SectionHeading';
import { Badge } from '@/components/ui/badge';

export default function PortfolioSection() {
  const categories = ['All', ...Array.from(new Set(PORTFOLIO.map((p) => p.category.split(' · ')[0])))];
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? PORTFOLIO : PORTFOLIO.filter((p) => p.category.startsWith(active));

  return (
    <section id="work" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 animated-gradient-bg opacity-20 pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/10 blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeading
          eyebrow="Selected Work"
          title={
            <>
              Work That <span className="gradient-text">Moves Markets</span>
            </>
          }
          description="A snapshot of recent launches — each engineered for measurable impact."
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all ${
                active === c
                  ? 'text-white'
                  : 'text-muted-foreground hover:text-foreground glass border border-white/10'
              }`}
            >
              {active === c && (
                <motion.span
                  layoutId="portfolio-tab"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{c}</span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <PortfolioCard key={p.id} item={p} index={i} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function PortfolioCard({ item, index }: { item: (typeof PORTFOLIO)[number]; index: number }) {
  const ref = useState<HTMLDivElement | null>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [6, -6]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-6, 6]), { stiffness: 150, damping: 20 });

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      style={{ perspective: 1200 }}
    >
      <motion.div
        onMouseMove={(e) => {
          const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
          mx.set((e.clientX - rect.left) / rect.width);
          my.set((e.clientY - rect.top) / rect.height);
        }}
        onMouseLeave={() => { mx.set(0.5); my.set(0.5); }}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="group relative rounded-2xl overflow-hidden glass-strong border border-white/10 hover:border-violet-500/40 transition-all"
      >
        {/* Image */}
        <div className="relative h-56 sm:h-64 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/30 to-cyan-400/30" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

          {/* Metric badge */}
          <div className="absolute top-4 right-4">
            <Badge className="bg-gradient-to-r from-violet-600 to-cyan-500 text-white border-0 glow-violet">
              <Sparkles className="w-3 h-3 mr-1" />
              {item.metric}
            </Badge>
          </div>

          {/* Category */}
          <div className="absolute bottom-4 left-4 text-xs uppercase tracking-wider text-cyan-300 font-medium">
            {item.category}
          </div>
        </div>

        {/* Body */}
        <div className="p-6" style={{ transform: 'translateZ(30px)' }}>
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold">
              {item.title}
            </h3>
            <div className="w-9 h-9 rounded-full glass border border-white/10 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-violet-600 group-hover:to-cyan-500 group-hover:border-transparent transition-all flex-shrink-0">
              <ArrowUpRight className="w-4 h-4 group-hover:text-white transition-colors" />
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {item.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {item.tags.map((t) => (
              <span
                key={t}
                className="text-[10px] px-2 py-1 rounded-md bg-white/5 border border-white/10 text-foreground/70"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
