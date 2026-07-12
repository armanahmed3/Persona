'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SKILLS_CLOUD, CAPABILITIES } from '@/data/services';
import { SectionHeading } from './SectionHeading';

const CATEGORIES = ['All', 'Frontend', '3D', 'Animation', 'AI', 'Backend', 'Mobile', 'Cloud', 'Design', 'Web3'];

export default function SkillsSection() {
  const [active, setActive] = useState('All');
  const filtered =
    active === 'All' ? SKILLS_CLOUD : SKILLS_CLOUD.filter((s) => s.category === active);

  return (
    <section id="skills" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 blur-[120px] animate-float-orb pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 blur-[120px] animate-float-orb pointer-events-none" style={{ animationDelay: '5s' }} />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeading
          eyebrow="Capabilities"
          title={
            <>
              Our <span className="gradient-text-animated">Skill Universe</span>
            </>
          }
          description="48 technologies across 10 disciplines — a comprehensive arsenal for any digital challenge."
        />

        {/* Capability meters (radial-style bars) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-14">
          {CAPABILITIES.map((cap, i) => (
            <motion.div
              key={cap.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="relative p-5 rounded-2xl glass-strong border border-white/10 text-center"
            >
              {/* Circular progress ring */}
              <div className="relative w-20 h-20 mx-auto mb-3">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 80 80">
                  <circle cx="40" cy="40" r="34" fill="none" stroke="oklch(1 0 0 / 0.1)" strokeWidth="4" />
                  <motion.circle
                    cx="40"
                    cy="40"
                    r="34"
                    fill="none"
                    stroke={cap.color}
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 34}`}
                    initial={{ strokeDashoffset: 2 * Math.PI * 34 }}
                    whileInView={{ strokeDashoffset: 2 * Math.PI * 34 * (1 - cap.value / 100) }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
                    style={{ filter: `drop-shadow(0 0 6px ${cap.color})` }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center font-[family-name:var(--font-syne)] font-bold text-lg">
                  {cap.value}%
                </div>
              </div>
              <div className="text-xs font-medium text-muted-foreground">{cap.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {CATEGORIES.map((c) => (
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
                  layoutId="skills-tab"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{c}</span>
            </button>
          ))}
        </div>

        {/* Skills cloud — floating tags with skill bars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filtered.map((skill, i) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (i % 6) * 0.05, duration: 0.4 }}
              whileHover={{ y: -3 }}
              className="group p-4 rounded-xl glass border border-white/10 hover:border-violet-500/40 transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-sm">{skill.name}</span>
                <span className="text-xs text-muted-foreground font-mono">{skill.level}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-violet-500 to-cyan-400"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: i * 0.03 }}
                />
              </div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                {skill.category}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
