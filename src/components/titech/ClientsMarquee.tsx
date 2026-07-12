'use client';

import { motion } from 'framer-motion';
import { CLIENTS } from '@/data/services';

// Animated skewed marquee of client names — gives a "trusted by" feel
export default function ClientsMarquee() {
  const row = [...CLIENTS, ...CLIENTS];

  return (
    <section className="relative py-14 md:py-16 overflow-hidden border-y border-white/5">
      <div className="container mx-auto px-4 sm:px-6 mb-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground"
        >
          Trusted by industry leaders across 40+ countries
        </motion.p>
      </div>

      {/* Skewed marquee */}
      <div className="relative overflow-hidden reveal-mask">
        {/* edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex gap-8 animate-marquee-skew" style={{ width: 'max-content' }}>
          {row.map((name, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-6 py-3 rounded-lg glass border border-white/5 flex-shrink-0"
            >
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />
              <span className="font-[family-name:var(--font-syne)] text-lg sm:text-xl font-bold text-foreground/70 hover:text-foreground transition-colors whitespace-nowrap">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
