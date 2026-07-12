'use client';

import { motion } from 'framer-motion';
import { TECH_STACK } from '@/data/services';
import { SectionHeading } from './SectionHeading';

export default function TechStackSection() {
  // Duplicate for seamless marquee
  const marquee = [...TECH_STACK, ...TECH_STACK];

  return (
    <section id="tech" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 animated-gradient-bg opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-600/10 blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeading
          eyebrow="Our Arsenal"
          title={
            <>
              Advanced <span className="gradient-text">Frameworks</span> We Master
            </>
          }
          description="We combine the most powerful 3D, animation, and AI engines on the planet to build experiences that feel impossible."
        />

        {/* Marquee row 1 — left to right */}
        <div className="relative overflow-hidden mb-6 reveal-mask">
          <div className="flex gap-4 animate-marquee" style={{ width: 'max-content' }}>
            {marquee.map((t, i) => (
              <TechCard key={`r1-${i}`} tech={t} index={i} />
            ))}
          </div>
        </div>

        {/* Marquee row 2 — right to left (reverse) */}
        <div className="relative overflow-hidden reveal-mask">
          <div
            className="flex gap-4 animate-marquee"
            style={{ width: 'max-content', animationDirection: 'reverse', animationDuration: '40s' }}
          >
            {[...marquee].reverse().map((t, i) => (
              <TechCard key={`r2-${i}`} tech={t} index={i} />
            ))}
          </div>
        </div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="mt-16 glass-strong rounded-2xl p-6 sm:p-8 text-center"
        >
          <p className="text-lg sm:text-xl text-foreground/90">
            And <span className="gradient-text font-bold">many more advanced frameworks</span> — combined into
            unbelievable, fully-animated experiences.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Three.js · R3F · PixiJS · Babylon.js · GSAP · Framer Motion · Spline · WebFlow · Framer · WebGL · GLSL ·
            21st.dev · UI/UX Pro Max · Next.js 16 · Tailwind 4 · shadcn/ui · Prisma
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function TechCard({ tech, index }: { tech: (typeof TECH_STACK)[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 10) * 0.04 }}
      className="group flex-shrink-0 w-64 p-5 rounded-xl glass border border-white/10 hover:border-white/20 transition-all hover:-translate-y-1"
    >
      <div className="flex items-center gap-3 mb-3">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm"
          style={{
            background: `${tech.color}22`,
            color: tech.color,
            border: `1px solid ${tech.color}44`,
          }}
        >
          {tech.name.charAt(0)}
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-sm">{tech.name}</span>
          <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
            {tech.category}
          </span>
        </div>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed">{tech.description}</p>
    </motion.div>
  );
}
