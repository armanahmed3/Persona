'use client';

import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';
import { AGENCY } from '@/data/services';
import { SectionHeading } from './SectionHeading';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden glass-strong p-2">
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/ai-images/about-us.png"
                  alt="Titech Agency global presence"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 glass-strong rounded-2xl p-4 border border-white/10 glow-cyan"
              >
                <div className="text-3xl font-[family-name:var(--font-syne)] font-bold gradient-text">3</div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Continents</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: content */}
          <div>
            <SectionHeading
              align="left"
              eyebrow="Global Presence"
              title={
                <>
                  US · UK · UAE <span className="gradient-text">Based</span>
                </>
              }
              description="Headquartered across three continents, Titech Agency delivers around-the-clock digital excellence to clients worldwide."
            />

            <div className="space-y-3">
              {AGENCY.regions.map((r, i) => (
                <motion.div
                  key={r.country}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: i * 0.12, duration: 0.6 }}
                  className="group flex items-start gap-4 p-4 rounded-xl glass border border-white/10 hover:border-violet-500/40 transition-all"
                >
                  <div className="text-3xl flex-shrink-0">{r.flag}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold">{r.city}</h4>
                      <span className="text-xs text-muted-foreground">· {r.country}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1 flex items-start gap-1.5">
                      <MapPin className="w-3 h-3 mt-0.5 flex-shrink-0" />
                      {r.address}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <a
                href={`mailto:${AGENCY.email}`}
                className="inline-flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                {AGENCY.email}
              </a>
              <a
                href={`tel:${AGENCY.phone}`}
                className="inline-flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors"
              >
                <Phone className="w-4 h-4 text-violet-400" />
                {AGENCY.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
