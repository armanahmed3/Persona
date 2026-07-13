'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: 'center' | 'left';
}) {
  return (
    <div
      className={`flex flex-col gap-4 mb-12 md:mb-16 ${
        align === 'center' ? 'items-center text-center' : 'items-start text-left'
      }`}
    >
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-[0.2em] glass text-cyan-300"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="font-[family-name:var(--font-syne)] text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight max-w-3xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className={`text-base sm:text-lg text-muted-foreground max-w-2xl ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
