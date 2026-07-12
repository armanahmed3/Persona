'use client';

import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { WHY_CHOOSE_US } from '@/data/services';
import { SectionHeading } from './SectionHeading';

export default function WhyChooseUsSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-violet-600/10 blur-[120px] animate-float-orb pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 blur-[120px] animate-float-orb pointer-events-none" style={{ animationDelay: '4s' }} />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeading
          eyebrow="Why Titech"
          title={
            <>
              Why Teams <span className="gradient-text-animated">Choose Us</span>
            </>
          }
          description="Six reasons we're the partner of choice for ambitious brands worldwide."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((f, i) => {
            const Icon =
              ((Icons as unknown) as Record<string, React.ComponentType<{ className?: string }>>)[f.icon] ||
              Icons.Sparkles;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: (i % 3) * 0.12, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative p-6 sm:p-7 rounded-2xl glass-strong border border-white/10 hover:border-violet-500/40 transition-all overflow-hidden"
              >
                {/* gradient glow on hover */}
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-violet-500/0 via-transparent to-cyan-400/0 group-hover:from-violet-500/10 group-hover:to-cyan-400/10 transition-all" />

                {/* Animated number badge */}
                <div className="absolute top-4 right-5 font-[family-name:var(--font-syne)] text-5xl font-extrabold text-white/[0.03] group-hover:text-white/[0.06] transition-colors">
                  0{i + 1}
                </div>

                <div className="relative">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-400/20 flex items-center justify-center border border-white/10 mb-5 group-hover:from-violet-500/40 group-hover:to-cyan-400/40 transition-all"
                  >
                    <Icon className="w-7 h-7 text-cyan-300 group-hover:text-white transition-colors" />
                  </motion.div>

                  <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold mb-2">
                    {f.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {f.description}
                  </p>

                  {/* Animated underline */}
                  <div className="mt-4 h-px bg-gradient-to-r from-violet-500 to-cyan-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
