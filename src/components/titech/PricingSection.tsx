'use client';

import { motion } from 'framer-motion';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { PRICING } from '@/data/services';
import { Button } from '@/components/ui/button';
import { SectionHeading } from './SectionHeading';

export default function PricingSection({ onBookClick }: { onBookClick: () => void }) {
  return (
    <section id="pricing" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-fuchsia-600/10 blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeading
          eyebrow="Packages"
          title={
            <>
              Simple, <span className="gradient-text">Transparent Pricing</span>
            </>
          }
          description="Every package includes AI-first engineering, cinematic design, and our follow-the-sun delivery."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {PRICING.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className={`relative rounded-3xl p-7 sm:p-8 flex flex-col ${
                p.popular
                  ? 'glass-strong border-2 border-violet-500/50 animate-glow-ring lg:scale-105 lg:-my-2'
                  : 'glass-strong border border-white/10 hover:border-white/20'
              }`}
            >
              {p.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 glow-violet">
                    <Sparkles className="w-3.5 h-3.5" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-[family-name:var(--font-syne)] text-2xl font-bold mb-1">
                  {p.name}
                </h3>
                <p className="text-sm text-muted-foreground">{p.tagline}</p>
              </div>

              <div className="mb-6 pb-6 border-b border-white/10">
                <div className="flex items-baseline gap-2">
                  <span className="font-[family-name:var(--font-syne)] text-4xl sm:text-5xl font-extrabold gradient-text-animated">
                    {p.price}
                  </span>
                  <span className="text-sm text-muted-foreground">{p.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {p.features.map((f, fi) => (
                  <motion.li
                    key={f}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + fi * 0.05 }}
                    className="flex items-start gap-3 text-sm"
                  >
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-foreground/80">{f}</span>
                  </motion.li>
                ))}
              </ul>

              <Button
                onClick={onBookClick}
                className={`w-full h-12 group ${
                  p.popular
                    ? 'bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white border-0 glow-violet'
                    : 'bg-white/5 hover:bg-white/10 border border-white/10 text-foreground'
                }`}
              >
                {p.cta}
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mt-10"
        >
          All packages include NDAs, source code ownership, and post-launch support. Need something custom?{' '}
          <button onClick={onBookClick} className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4">
            Talk to us
          </button>
          .
        </motion.p>
      </div>
    </section>
  );
}
