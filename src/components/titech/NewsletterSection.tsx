'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Loader2, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AGENCY, NEWSLETTER_BENEFITS } from '@/data/services';
import { toast } from 'sonner';
import { submitToFormSubmit } from './submitForm';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'done'>('idle');

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');

    // Submit via standard FormSubmit endpoint (hidden form POST)
    // Uses: https://formsubmit.co/titechagency@gmail.com
    await submitToFormSubmit(
      {
        email,
        _subject: 'Newsletter subscription',
        source: 'Newsletter section',
        type: 'newsletter',
      },
      AGENCY.email
    );

    setStatus('done');
    toast.success('Subscribed! Check your inbox for confirmation.');
    setEmail('');
  };

  return (
    <section className="relative py-20 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden border border-white/10"
        >
          {/* gradient backdrop */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-fuchsia-600/10 to-cyan-500/20" />
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-violet-600/30 blur-[80px] animate-float-orb pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-cyan-500/30 blur-[80px] animate-float-orb pointer-events-none" style={{ animationDelay: '4s' }} />

          <div className="relative p-8 sm:p-12 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left: pitch */}
            <div>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-white/10 mb-5"
              >
                <Mail className="w-4 h-4 text-cyan-300" />
                <span className="text-xs font-medium uppercase tracking-wider">Insights Newsletter</span>
              </motion.div>
              <h2 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                Get the <span className="gradient-text-animated">Edge</span> in Your Inbox
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6">
                Join 12,000+ founders, designers, and engineers getting our monthly insights on AI, 3D, and the cinematic web.
              </p>
              <ul className="space-y-2">
                {NEWSLETTER_BENEFITS.map((b, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-2 text-sm text-foreground/80"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    {b}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Right: form */}
            <div>
              {status === 'done' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass-strong rounded-2xl p-8 text-center border border-white/10"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                    className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center glow-violet mb-4"
                  >
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold mb-2">
                    You're In!
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Check your inbox for a confirmation email.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={onSubmit} className="glass-strong rounded-2xl p-6 sm:p-7 border border-white/10 space-y-4">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      required
                      className="bg-white/5 border-white/10 focus:border-violet-500 h-12 text-base"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full h-12 bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white border-0 glow-violet group"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Subscribing...
                      </>
                    ) : (
                      <>
                        Subscribe Free
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>
                  <p className="text-[11px] text-center text-muted-foreground">
                    No spam. Unsubscribe in one click.
                  </p>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
