'use client';

import { motion } from 'framer-motion';
import { Sparkles, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import * as Icons from 'lucide-react';
import { AGENCY, SOCIAL_LINKS, SERVICES } from '@/data/services';

export default function Footer() {
  return (
    <footer className="relative mt-auto border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-violet-600/10 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-[family-name:var(--font-syne)] text-lg font-extrabold tracking-tight">
                  TITECH
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Agency
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              AI-driven digital excellence across US · UK · UAE. We architect the future of digital experiences.
            </p>
            <div className="flex flex-wrap gap-2">
              {SOCIAL_LINKS.map((s, i) => {
                const Icon =
                  ((Icons as unknown) as Record<string, React.ComponentType<{ className?: string }>>)[s.icon] ||
                  Icons.Link;
                return (
                  <motion.a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ y: -3, scale: 1.1 }}
                    className="w-10 h-10 rounded-lg glass border border-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-violet-500/40 hover:bg-gradient-to-br hover:from-violet-600/20 hover:to-cyan-500/20 transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-[family-name:var(--font-syne)] text-sm font-bold uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-violet-500 group-hover:w-3 transition-all" />
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices */}
          <div>
            <h4 className="font-[family-name:var(--font-syne)] text-sm font-bold uppercase tracking-wider mb-4">
              Offices
            </h4>
            <ul className="space-y-3">
              {AGENCY.regions.map((r) => (
                <li key={r.country} className="flex items-start gap-2">
                  <span className="text-base flex-shrink-0">{r.flag}</span>
                  <div>
                    <div className="text-sm font-medium">{r.city}</div>
                    <div className="text-xs text-muted-foreground">{r.country}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-[family-name:var(--font-syne)] text-sm font-bold uppercase tracking-wider mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${AGENCY.email}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-4 h-4 text-cyan-400" />
                  {AGENCY.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${AGENCY.phone}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone className="w-4 h-4 text-violet-400" />
                  {AGENCY.phone}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-fuchsia-400 mt-0.5 flex-shrink-0" />
                <span>New York · London · Dubai</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Titech Agency. All rights reserved. Built with{' '}
            <span className="gradient-text font-semibold">AI · 3D · Cinematic motion</span>.
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors group"
          >
            Back to top
            <span className="w-7 h-7 rounded-full glass border border-white/10 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-violet-600 group-hover:to-cyan-500 transition-all">
              <ArrowUp className="w-3.5 h-3.5" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
