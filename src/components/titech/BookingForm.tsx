'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2, Send, CheckCircle2, Calendar, User, Mail, Phone, MessageSquare, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { AGENCY, SERVICES } from '@/data/services';
import { SectionHeading } from './SectionHeading';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function BookingForm({ bookingFormRef }: { bookingFormRef?: React.RefObject<HTMLDivElement> }) {
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  });

  const update = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in name, email, and message.');
      return;
    }
    setStatus('loading');
    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          _subject: `New Appointment Request — ${form.name} (${form.service || 'General'})`,
        }),
      });
      // Handle both JSON and non-JSON responses gracefully
      const text = await res.text();
      let data: any = null;
      try { data = JSON.parse(text); } catch { data = { success: true }; }
      if (!res.ok && !data?.success) throw new Error(`HTTP ${res.status}`);
      setStatus('success');
      toast.success("Appointment request sent! We'll get back to you within 24 hours.");
      setForm({ name: '', email: '', phone: '', company: '', service: '', budget: '', message: '' });
    } catch (err: any) {
      setStatus('error');
      toast.error('Failed to send. Please email us directly at ' + AGENCY.email);
    }
  };

  return (
    <section
      id="book"
      ref={bookingFormRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* CTA background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/ai-images/cta-bg.png" alt="" className="w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-background/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          {/* Left: pitch */}
          <div className="lg:col-span-2">
            <SectionHeading
              align="left"
              eyebrow="Book an Appointment"
              title={
                <>
                  Let's Build Something <span className="gradient-text">Unbelievable</span>
                </>
              }
              description="Tell us about your project. Our AI agent and senior strategists will respond within 24 hours with a tailored plan."
            />
            <div className="space-y-4 mt-8">
              {[
                { icon: Mail, label: 'Email', value: AGENCY.email, href: `mailto:${AGENCY.email}` },
                { icon: Phone, label: 'Phone', value: AGENCY.phone, href: `tel:${AGENCY.phone}` },
                { icon: Calendar, label: 'Response Time', value: 'Within 24 hours' },
              ].map((c, i) => (
                <motion.a
                  key={i}
                  href={c.href || '#'}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl glass border border-white/10 hover:border-violet-500/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500/20 to-cyan-400/20 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                    <c.icon className="w-5 h-5 text-cyan-300" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">{c.label}</div>
                    <div className="text-sm font-medium">{c.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3"
          >
            <div className="relative rounded-3xl glass-strong border border-white/10 p-6 sm:p-8 overflow-hidden">
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-violet-600/20 blur-[80px] pointer-events-none" />
              <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-cyan-500/20 blur-[80px] pointer-events-none" />

              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative flex flex-col items-center text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                    className="w-20 h-20 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center glow-violet mb-6"
                  >
                    <CheckCircle2 className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="font-[family-name:var(--font-syne)] text-2xl font-bold mb-2">
                    Request Received!
                  </h3>
                  <p className="text-muted-foreground max-w-md">
                    Thank you for reaching out. Our team will review your request and respond within 24 hours.
                  </p>
                  <Button
                    onClick={() => setStatus('idle')}
                    variant="outline"
                    className="mt-6 border-white/20 bg-white/5"
                  >
                    Send Another Request
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="relative space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field icon={User} label="Full Name *">
                      <Input
                        value={form.name}
                        onChange={(e) => update('name', e.target.value)}
                        placeholder="John Doe"
                        required
                        className="bg-white/5 border-white/10 focus:border-violet-500"
                      />
                    </Field>
                    <Field icon={Mail} label="Email *">
                      <Input
                        type="email"
                        value={form.email}
                        onChange={(e) => update('email', e.target.value)}
                        placeholder="john@company.com"
                        required
                        className="bg-white/5 border-white/10 focus:border-violet-500"
                      />
                    </Field>
                    <Field icon={Phone} label="Phone">
                      <Input
                        value={form.phone}
                        onChange={(e) => update('phone', e.target.value)}
                        placeholder="+1 555 000 0000"
                        className="bg-white/5 border-white/10 focus:border-violet-500"
                      />
                    </Field>
                    <Field icon={Briefcase} label="Company">
                      <Input
                        value={form.company}
                        onChange={(e) => update('company', e.target.value)}
                        placeholder="Acme Inc."
                        className="bg-white/5 border-white/10 focus:border-violet-500"
                      />
                    </Field>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Service of Interest">
                      <Select value={form.service} onValueChange={(v) => update('service', v)}>
                        <SelectTrigger className="bg-white/5 border-white/10 focus:border-violet-500">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent className="bg-card border-white/10 max-h-72">
                          {SERVICES.map((s) => (
                            <SelectItem key={s.id} value={s.title}>
                              {s.title}
                            </SelectItem>
                          ))}
                          <SelectItem value="Other">Other / Not sure</SelectItem>
                        </SelectContent>
                      </Select>
                    </Field>
                    <Field label="Budget Range">
                      <Select value={form.budget} onValueChange={(v) => update('budget', v)}>
                        <SelectTrigger className="bg-white/5 border-white/10 focus:border-violet-500">
                          <SelectValue placeholder="Select budget" />
                        </SelectTrigger>
                        <SelectContent className="bg-card border-white/10">
                          <SelectItem value="< $5k">&lt; $5k</SelectItem>
                          <SelectItem value="$5k - $15k">$5k – $15k</SelectItem>
                          <SelectItem value="$15k - $50k">$15k – $50k</SelectItem>
                          <SelectItem value="$50k - $150k">$50k – $150k</SelectItem>
                          <SelectItem value="$150k+">$150k+</SelectItem>
                        </SelectContent>
                      </Select>
                    </Field>
                  </div>

                  <Field icon={MessageSquare} label="Project Details *">
                    <Textarea
                      value={form.message}
                      onChange={(e) => update('message', e.target.value)}
                      placeholder="Tell us about your project, timeline, and goals..."
                      required
                      rows={5}
                      className="bg-white/5 border-white/10 focus:border-violet-500 resize-none"
                    />
                  </Field>

                  <Button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full h-14 bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white border-0 glow-violet text-base group"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2 transition-transform group-hover:translate-x-1" />
                        Send Appointment Request
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    Your request is sent securely via FormSubmit. We never share your data.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  icon: Icon,
  label,
  children,
}: {
  icon?: React.ComponentType<{ className?: string }>;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label className="text-xs uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
        {Icon && <Icon className="w-3.5 h-3.5" />}
        {label}
      </Label>
      {children}
    </div>
  );
}
