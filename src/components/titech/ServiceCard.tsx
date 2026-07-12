'use client';

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useRef, MouseEvent } from 'react';
import * as Icons from 'lucide-react';
import { Service } from '@/data/services';
import { Badge } from '@/components/ui/badge';

export default function ServiceCard({
  service,
  index = 0,
  onMore,
}: {
  service: Service;
  index?: number;
  onMore?: (s: Service) => void;
}) {
  // 3D tilt on mouse move
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [8, -8]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-8, 8]), { stiffness: 150, damping: 20 });

  const Icon = ((Icons as unknown) as Record<string, React.ComponentType<{ className?: string }>>)[service.icon] || Icons.Sparkles;

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };
  const handleLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: -10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 1000 }}
      className="h-full"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="group relative h-full rounded-2xl overflow-hidden glass-strong p-6 transition-shadow hover:glow-violet"
      >
        {/* gradient border glow */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/20 via-transparent to-cyan-400/20" />
        </div>

        {/* Image */}
        <div className="relative mb-5 h-40 rounded-xl overflow-hidden" style={{ transform: 'translateZ(40px)' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/30 to-cyan-400/30" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          <div className="absolute top-3 right-3">
            {service.trending && (
              <Badge className="bg-gradient-to-r from-violet-600 to-cyan-500 text-white border-0">
                Trending
              </Badge>
            )}
          </div>
        </div>

        {/* Icon + Title */}
        <div className="flex items-center gap-3 mb-3" style={{ transform: 'translateZ(30px)' }}>
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500/20 to-cyan-400/20 flex items-center justify-center border border-white/10">
            <Icon className="w-5 h-5 text-cyan-300" />
          </div>
          <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold">
            {service.title}
          </h3>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed mb-4" style={{ transform: 'translateZ(20px)' }}>
          {service.short}
        </p>

        {/* Feature chips */}
        <div className="flex flex-wrap gap-1.5 mb-5" style={{ transform: 'translateZ(15px)' }}>
          {service.features.slice(0, 3).map((f) => (
            <span
              key={f}
              className="text-[10px] px-2 py-1 rounded-md bg-white/5 border border-white/10 text-foreground/70"
            >
              {f}
            </span>
          ))}
          <span className="text-[10px] px-2 py-1 rounded-md bg-white/5 border border-white/10 text-foreground/70">
            +{service.features.length - 3} more
          </span>
        </div>

        <button
          onClick={() => onMore?.(service)}
          className="relative w-full mt-auto py-2.5 rounded-lg text-sm font-medium border border-white/10 bg-white/5 hover:bg-gradient-to-r hover:from-violet-600 hover:to-cyan-500 hover:border-transparent hover:text-white transition-all flex items-center justify-center gap-2 group/btn"
          style={{ transform: 'translateZ(25px)' }}
        >
          View Details
          <Icons.ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
        </button>
      </motion.div>
    </motion.div>
  );
}
