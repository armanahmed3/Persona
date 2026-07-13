'use client';

import { motion } from 'framer-motion';
import { Twitter, Linkedin, Sparkles } from 'lucide-react';
import { TEAM } from '@/data/services';
import { SectionHeading } from './SectionHeading';

export default function TeamSection() {
  return (
    <section id="team" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 animated-gradient-bg opacity-20 pointer-events-none" />
      <div className="absolute -top-32 right-1/4 w-96 h-96 bg-violet-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 left-1/4 w-96 h-96 bg-cyan-500/10 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeading
          eyebrow="The Team"
          title={
            <>
              Meet the <span className="gradient-text">Architects</span>
            </>
          }
          description="Senior operators from Google, NVIDIA, Figma, and Stanford — distributed across three continents."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="flip-card h-80"
            >
              <div className="flip-card-inner">
                {/* Front */}
                <div className="flip-card-front glass-strong border border-white/10 p-6 flex flex-col items-center justify-center text-center">
                  <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center font-[family-name:var(--font-syne)] text-3xl font-extrabold text-white mb-4 glow-violet`}>
                    {member.avatar}
                  </div>
                  <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-cyan-300 font-medium mb-3">{member.role}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Sparkles className="w-3 h-3" />
                    <span>Hover to flip</span>
                  </div>
                </div>

                {/* Back */}
                <div className={`flip-card-back bg-gradient-to-br ${member.color} p-6 flex flex-col items-center justify-center text-center text-white`}>
                  <div className="absolute inset-0 bg-background/40" />
                  <div className="relative">
                    <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold mb-3">
                      {member.name}
                    </h3>
                    <p className="text-sm leading-relaxed mb-6 text-white/90">
                      {member.bio}
                    </p>
                    <div className="flex items-center justify-center gap-3">
                      <a
                        href={member.socials.twitter}
                        className="w-10 h-10 rounded-full glass border border-white/30 flex items-center justify-center hover:bg-white/20 transition-colors"
                        aria-label={`${member.name} on Twitter`}
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                      <a
                        href={member.socials.linkedin}
                        className="w-10 h-10 rounded-full glass border border-white/30 flex items-center justify-center hover:bg-white/20 transition-colors"
                        aria-label={`${member.name} on LinkedIn`}
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
