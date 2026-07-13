'use client';

import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '@/data/services';
import { SectionHeading } from './SectionHeading';

export default function ProcessSection() {
  return (
    <section id="process" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/ai-images/process-bg.png"
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeading
          eyebrow="How We Work"
          title={
            <>
              Our <span className="gradient-text">Cinematic</span> Process
            </>
          }
          description="A battle-tested, four-stage workflow that turns ambitious ideas into shipped, scalable products."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* connecting line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
            >
              <div className="relative p-6 rounded-2xl glass-strong border border-white/10 h-full hover:border-violet-500/40 transition-all hover:-translate-y-1">
                {/* Step number */}
                <div className="relative mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center font-[family-name:var(--font-syne)] text-2xl font-extrabold text-white glow-violet">
                    {step.step}
                  </div>
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-500 opacity-0 group-hover:opacity-30 blur-lg transition-opacity" />
                </div>

                <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
