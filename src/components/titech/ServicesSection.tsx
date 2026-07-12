'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SERVICES, TRENDING_SERVICES, Service } from '@/data/services';
import { SectionHeading } from './SectionHeading';
import ServiceCard from './ServiceCard';
import ServiceModal from './ServiceModal';

export default function ServicesSection() {
  const [showAll, setShowAll] = useState(false);
  const [active, setActive] = useState<Service | null>(null);

  const visible = showAll ? SERVICES : TRENDING_SERVICES;

  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden">
      {/* bg accents */}
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-violet-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeading
          eyebrow="What We Do"
          title={
            <>
              Trending <span className="gradient-text">Digital Services</span>
            </>
          }
          description="The most in-demand capabilities our clients are shipping right now — powered by AI and cinematic engineering."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {visible.map((s, i) => (
              <motion.div
                key={s.id}
                layout
                className="h-full"
              >
                <ServiceCard service={s} index={i} onMore={setActive} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* See more / less button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4 mt-14"
        >
          <Button
            onClick={() => setShowAll((v) => !v)}
            size="lg"
            variant="outline"
            className="h-14 px-8 border-white/20 bg-white/5 hover:bg-gradient-to-r hover:from-violet-600 hover:to-cyan-500 hover:border-transparent hover:text-white transition-all group"
          >
            <Layers className="w-5 h-5 mr-2" />
            {showAll ? 'Show Trending Only' : `See All ${SERVICES.length} Digital Services`}
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
          <p className="text-xs text-muted-foreground">
            {showAll
              ? 'Showing complete catalog'
              : `Showing ${TRENDING_SERVICES.length} of ${SERVICES.length} services`}
          </p>
        </motion.div>
      </div>

      <ServiceModal service={active} onClose={() => setActive(null)} />
    </section>
  );
}
