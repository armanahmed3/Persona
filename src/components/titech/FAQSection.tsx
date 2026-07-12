'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, MessageCircleQuestion } from 'lucide-react';
import { FAQ } from '@/data/services';
import { SectionHeading } from './SectionHeading';
import { Button } from '@/components/ui/button';

export default function FAQSection({ onBookClick }: { onBookClick: () => void }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 blur-[120px] animate-float-orb pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left: heading + CTA */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                align="left"
                eyebrow="FAQ"
                title={
                  <>
                    Questions? <span className="gradient-text">We've Got Answers</span>
                  </>
                }
                description="Everything you need to know about working with Titech Agency."
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-strong rounded-2xl p-6 border border-white/10"
              >
                <MessageCircleQuestion className="w-8 h-8 text-cyan-300 mb-3" />
                <p className="text-sm text-muted-foreground mb-4">
                  Still have questions? Ask our AI agent in the bottom-right corner, or book a free consultation.
                </p>
                <Button
                  onClick={onBookClick}
                  className="w-full bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white border-0"
                >
                  Book a Free Call
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Right: accordion */}
          <div className="lg:col-span-8">
            <div className="space-y-3">
              {FAQ.map((item, i) => {
                const isOpen = open === i;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ delay: i * 0.06 }}
                    className={`rounded-2xl border transition-all overflow-hidden ${
                      isOpen
                        ? 'glass-strong border-violet-500/40'
                        : 'glass border-white/10 hover:border-white/20'
                    }`}
                  >
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
                    >
                      <span className="font-[family-name:var(--font-syne)] text-base sm:text-lg font-semibold pr-4">
                        {item.q}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                        className={`w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center transition-colors ${
                          isOpen
                            ? 'bg-gradient-to-br from-violet-600 to-cyan-500 text-white'
                            : 'glass border border-white/10 text-foreground/70'
                        }`}
                      >
                        <Plus className="w-4 h-4" />
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="px-5 sm:px-6 pb-6 text-sm sm:text-base text-muted-foreground leading-relaxed">
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
