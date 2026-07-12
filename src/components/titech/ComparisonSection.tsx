'use client';

import { motion } from 'framer-motion';
import { Check, X, Minus, Sparkles } from 'lucide-react';
import { COMPARISON } from '@/data/services';
import { SectionHeading } from './SectionHeading';

type Cell = boolean | 'sometimes';

function CellIcon({ value, accent }: { value: Cell; accent?: boolean }) {
  if (value === true)
    return (
      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${accent ? 'bg-gradient-to-br from-violet-500 to-cyan-400' : 'bg-white/10'}`}>
        <Check className={`w-3.5 h-3.5 ${accent ? 'text-white' : 'text-emerald-400'}`} />
      </div>
    );
  if (value === false)
    return (
      <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center">
        <X className="w-3.5 h-3.5 text-muted-foreground/60" />
      </div>
    );
  return (
    <div className="w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center">
      <Minus className="w-3.5 h-3.5 text-amber-400" />
    </div>
  );
}

export default function ComparisonSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 animated-gradient-bg opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-fuchsia-600/8 blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeading
          eyebrow="The Difference"
          title={
            <>
              Titech vs <span className="gradient-text">Typical Agencies</span>
            </>
          }
          description="A side-by-side reality check. The gap is wider than you think."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto rounded-3xl glass-strong border border-white/10 overflow-hidden"
        >
          {/* Header row */}
          <div className="grid grid-cols-[1fr_100px_100px] sm:grid-cols-[1fr_140px_140px] gap-2 p-4 sm:p-5 border-b border-white/10 bg-white/[0.02]">
            <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-muted-foreground self-center">
              Capability
            </div>
            <div className="text-center">
              <div className="font-[family-name:var(--font-syne)] font-bold text-sm sm:text-base gradient-text-animated flex items-center justify-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                Titech
              </div>
            </div>
            <div className="text-center text-xs sm:text-sm font-semibold uppercase tracking-wider text-muted-foreground self-center">
              Others
            </div>
          </div>

          {/* Rows */}
          {COMPARISON.map((row, i) => (
            <motion.div
              key={row.feature}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className={`grid grid-cols-[1fr_100px_100px] sm:grid-cols-[1fr_140px_140px] gap-2 p-4 sm:p-5 items-center border-b border-white/5 hover:bg-white/[0.02] transition-colors ${
                i % 2 === 0 ? 'bg-white/[0.01]' : ''
              }`}
            >
              <div className="text-sm sm:text-base text-foreground/90 pr-2">{row.feature}</div>
              <div className="flex justify-center">
                <CellIcon value={row.titech as Cell} accent />
              </div>
              <div className="flex justify-center">
                <CellIcon value={row.others as Cell} />
              </div>
            </motion.div>
          ))}

          {/* Footer note */}
          <div className="p-4 sm:p-5 bg-gradient-to-r from-violet-600/10 to-cyan-500/10 text-center">
            <p className="text-sm text-foreground/80">
              <span className="font-bold gradient-text-animated">10 out of 10</span> capabilities —
              that's the Titech standard.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
