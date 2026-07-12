'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CTASection({ onBookClick }: { onBookClick: () => void }) {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden border border-white/10"
        >
          {/* Background */}
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/ai-images/cta-bg.png"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>

          <div className="relative p-8 sm:p-12 md:p-16 text-center sm:text-left max-w-3xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass mb-5"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
              <span className="text-xs font-medium uppercase tracking-wider">Limited Slots — Q4 2025</span>
            </motion.div>

            <h2 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Ready to Ship Something{' '}
              <span className="gradient-text text-glow-violet">Unbelievable?</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-xl">
              Partner with Titech Agency and turn your vision into a cinematic, AI-powered digital experience that
              your users will never forget.
            </p>

            <div className="flex flex-wrap items-center gap-4 justify-center sm:justify-start">
              <Button
                onClick={onBookClick}
                size="lg"
                className="group bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white border-0 glow-violet h-14 px-8 text-base"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Book an Appointment
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <a href="#services">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 px-8 border-white/20 bg-white/5 backdrop-blur hover:bg-white/10"
                >
                  View All Services
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
