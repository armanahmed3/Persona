'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { BLOG_POSTS } from '@/data/services';
import { SectionHeading } from './SectionHeading';
import { Button } from '@/components/ui/button';

export default function BlogSection() {
  return (
    <section id="insights" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-violet-600/8 blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionHeading
            align="left"
            eyebrow="Insights"
            title={
              <>
                From Our <span className="gradient-text">Lab</span>
              </>
            }
            description="Field notes on AI, 3D, and the cinematic web — written by the engineers building it."
          />
          <Button
            variant="outline"
            className="self-start md:self-auto border-white/20 bg-white/5 hover:bg-white/10 group flex-shrink-0"
          >
            View All Articles
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative rounded-2xl overflow-hidden glass-strong border border-white/10 hover:border-violet-500/40 transition-all cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-syne)] text-lg font-bold mb-2 leading-snug group-hover:text-cyan-300 transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 text-sm font-medium text-cyan-300 group-hover:text-cyan-200">
                  Read article
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
