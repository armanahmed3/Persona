'use client';

import { useState, useRef, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Send, X, Sparkles, Loader2, MessageCircle, CalendarCheck, CheckCircle2, User, Mail, Phone, Briefcase, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AGENCY, SERVICES, AI_QUICK_REPLIES } from '@/data/services';
import { submitToFormSubmit } from './submitForm';

type ChatMsg = { role: 'user' | 'assistant'; content: string; booking?: boolean };

const SUGGESTIONS = [
  'What services do you offer?',
  'How much does a website cost?',
  'Tell me about your tech stack',
  'I want to book a call',
];

const WELCOME: ChatMsg = {
  role: 'assistant',
  content:
    "Hey! I'm **Titech** — the official AI agent. I can answer questions about our services, or book an appointment directly here in chat. What would you like to do?",
};

// Guided booking flow fields
type BookingState = {
  active: boolean;
  step: number; // 0=name, 1=email, 2=phone, 3=service, 4=message, 5=submitting, 6=done
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const INITIAL_BOOKING: BookingState = {
  active: false,
  step: 0,
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
};

const BOOKING_STEPS = [
  { key: 'name' as const, label: "What's your name?", placeholder: 'John Doe', icon: User, type: 'text' },
  { key: 'email' as const, label: "Best email to reach you?", placeholder: 'john@company.com', icon: Mail, type: 'email' },
  { key: 'phone' as const, label: "What's your phone number?", placeholder: '+92 321 380 9420', icon: Phone, type: 'tel' },
];

export default function AIAgentWidget({ onBookClick }: { onBookClick: () => void }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMsg[]>([WELCOME]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [unread, setUnread] = useState(true);
  const [booking, setBooking] = useState<BookingState>(INITIAL_BOOKING);
  const [bookingInput, setBookingInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);
  const taRef = useRef<HTMLTextAreaElement>(null);
  const bookingInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading, booking]);

  useEffect(() => {
    if (open) setUnread(false);
  }, [open]);

  // Focus booking input when step changes
  useEffect(() => {
    if (booking.active && booking.step < 3) {
      setTimeout(() => bookingInputRef.current?.focus(), 100);
    }
  }, [booking.step, booking.active]);

  // ---------- Booking flow ----------
  const startBooking = () => {
    setBooking({ ...INITIAL_BOOKING, active: true });
    setMessages((m) => [
      ...m,
      {
        role: 'assistant',
        content: "Let's book your appointment. I'll ask a few quick questions — takes 30 seconds. 🚀",
      },
      {
        role: 'assistant',
        content: "**Step 1 of 5** — What's your full name?",
        booking: true,
      },
    ]);
  };

  const submitBookingField = async () => {
    const value = bookingInput.trim();
    if (!value) return; // all fields including phone are required

    const step = BOOKING_STEPS[booking.step];
    const newBooking = { ...booking, [step.key]: value };
    setBookingInput('');

    if (booking.step < 2) {
      // advance to next text step
      const nextStep = booking.step + 1;
      setBooking({ ...newBooking, step: nextStep });
      setMessages((m) => [
        ...m,
        { role: 'user', content: value },
        {
          role: 'assistant',
          content: `**Step ${nextStep + 1} of 5** — ${BOOKING_STEPS[nextStep].label}`,
          booking: true,
        },
      ]);
    } else {
      // phone done -> now service select (step 3)
      setBooking({ ...newBooking, step: 3 });
      setMessages((m) => [
        ...m,
        { role: 'user', content: value },
        {
          role: 'assistant',
          content: '**Step 4 of 5** — Which service are you interested in? (pick below)',
          booking: true,
        },
      ]);
    }
  };

  const pickService = (service: string) => {
    const newBooking = { ...booking, service, step: 4 };
    setBooking(newBooking);
    setMessages((m) => [
      ...m,
      { role: 'user', content: service },
      {
        role: 'assistant',
        content: '**Step 5 of 5** — Tell me about your project (goals, timeline, budget).',
        booking: true,
      },
    ]);
  };

  const submitBookingFinal = async () => {
    const message = bookingInput.trim();
    if (!message) return;
    setBookingInput('');
    setMessages((m) => [...m, { role: 'user', content: message }]);

    // Submitting
    setBooking((b) => ({ ...b, step: 5 }));
    setMessages((m) => [
      ...m,
      { role: 'assistant', content: '⏳ Submitting your appointment request...' },
    ]);

    try {
      // Submit via standard FormSubmit endpoint (hidden form POST)
      // Uses: https://formsubmit.co/titechagency@gmail.com
      await submitToFormSubmit(
        {
          name: booking.name,
          email: booking.email,
          phone: booking.phone,
          company: '—',
          service: booking.service,
          budget: '—',
          message,
          _subject: `AI-Agent Booking: ${booking.name} (${booking.service})`,
          source: 'AI Agent Chat Widget',
        },
        AGENCY.email
      );
      setBooking((b) => ({ ...b, step: 6, active: false }));
      setMessages((m) => [
        ...m,
        {
          role: 'assistant',
          content: `✅ **Booking confirmed!** Thanks ${booking.name.split(' ')[0]} — your request for **${booking.service}** is in. Our team will email ${booking.email} within 24 hours. Anything else I can help with?`,
        },
      ]);
    } catch (err) {
      setMessages((m) => [
        ...m,
        {
          role: 'assistant',
          content:
            `I couldn't submit the form right now, but I've noted your details. Please also email ${AGENCY.email} to confirm. Sorry for the hiccup!`,
        },
      ]);
      setBooking(INITIAL_BOOKING);
    }
  };

  const cancelBooking = () => {
    setBooking(INITIAL_BOOKING);
    setBookingInput('');
    setMessages((m) => [
      ...m,
      { role: 'assistant', content: 'No problem — booking cancelled. How else can I help?' },
    ]);
  };

  // ---------- AI chat ----------
  const send = async (text?: string) => {
    if (booking.active) return; // don't allow free chat during booking
    const content = (text ?? input).trim();
    if (!content || loading) return;
    const next: ChatMsg[] = [...messages, { role: 'user', content }];
    setMessages(next);
    setInput('');
    setLoading(true);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: next.map((m) => ({ role: m.role, content: m.content })),
        }),
      });
      const data = await res.json();
      const reply = data?.reply || 'Sorry, I could not generate a response. Please try again.';
      setMessages((m) => [...m, { role: 'assistant', content: reply }]);

      // If user mentions booking, offer in-chat booking
      if (/book|appointment|call|consult|quote|hire|schedule/i.test(content)) {
        setTimeout(() => {
          setMessages((m) => [
            ...m,
            {
              role: 'assistant',
              content:
                'Want me to book it for you right here in chat? Click below 👇',
              booking: true,
            },
          ]);
        }, 700);
      }
    } catch (err) {
      setMessages((m) => [
        ...m,
        {
          role: 'assistant',
          content:
            "I'm having trouble connecting right now. Please use the booking form below or email hello@titechagency.com.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (booking.active) {
      if (booking.step === 4) submitBookingFinal();
      else submitBookingField();
    } else {
      send();
    }
  };

  // Auto-resize textarea
  useEffect(() => {
    if (taRef.current && !booking.active) {
      taRef.current.style.height = 'auto';
      taRef.current.style.height = Math.min(taRef.current.scrollHeight, 120) + 'px';
    }
  }, [input, booking.active]);

  const showBookingUI = booking.active && booking.step < 3;
  const showServicePicker = booking.active && booking.step === 3;
  const showFinalMessage = booking.active && booking.step === 4;

  return (
    <>
      {/* Launcher button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: 'spring', stiffness: 200 }}
        className="fixed bottom-6 right-6 z-[90]"
      >
        <motion.button
          onClick={() => setOpen((o) => !o)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-16 h-16 rounded-full bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center glow-violet group"
          aria-label="Open AI agent chat"
        >
          <span className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 opacity-50 blur-md animate-pulse-glow" />
          <AnimatePresence mode="wait">
            {open ? (
              <motion.span
                key="x"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                className="relative z-10"
              >
                <X className="w-7 h-7 text-white" />
              </motion.span>
            ) : (
              <motion.span
                key="bot"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                className="relative z-10 w-9 h-9 rounded-full overflow-hidden border border-white/20"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/ai-images/logo-titech.png" alt="Titech" className="w-full h-full object-cover" />
              </motion.span>
            )}
          </AnimatePresence>
          {unread && !open && (
            <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-fuchsia-500 border-2 border-background" />
          )}
          {!open && (
            <motion.span
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2 }}
              className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap glass-strong px-3 py-1.5 rounded-lg text-xs font-medium pointer-events-none hidden sm:block"
            >
              Ask Titech AI ✨
            </motion.span>
          )}
        </motion.button>
      </motion.div>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-4 sm:right-6 z-[90] w-[calc(100vw-2rem)] sm:w-[400px] h-[560px] max-h-[calc(100vh-8rem)] rounded-3xl glass-strong border border-white/10 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="relative px-5 py-4 border-b border-white/10 flex items-center gap-3 bg-gradient-to-r from-violet-600/20 to-cyan-500/20">
              <div className="relative">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/ai-images/logo-titech.png"
                    alt="Titech"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-background" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-[family-name:var(--font-syne)] font-bold text-sm flex items-center gap-2">
                  Titech AI Agent
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-violet-500/20 text-violet-300 uppercase tracking-wider">
                    Official
                  </span>
                </div>
                <div className="text-xs text-muted-foreground flex items-center gap-1">
                  <MessageCircle className="w-3 h-3" />
                  Online · Books appointments
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar">
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[88%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      m.role === 'user'
                        ? 'bg-gradient-to-br from-violet-600 to-cyan-500 text-white rounded-br-sm'
                        : 'glass border border-white/10 rounded-bl-sm'
                    }`}
                  >
                    {m.role === 'assistant' ? <MarkdownLite text={m.content} /> : m.content}
                  </div>
                </motion.div>
              ))}

              {/* Booking CTA inline button (when booking intent detected & not already booking) */}
              {messages.some((m) => m.booking) && !booking.active && booking.step !== 6 && (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                  <button
                    onClick={startBooking}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white text-sm font-medium hover:from-violet-500 hover:to-cyan-400 transition-all glow-violet"
                  >
                    <CalendarCheck className="w-4 h-4" />
                    Book appointment in chat
                  </button>
                </motion.div>
              )}

              {/* Loading — advanced typing indicator */}
              {loading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start items-end gap-2"
                >
                  <div className="w-7 h-7 rounded-full overflow-hidden border border-white/20 flex-shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/ai-images/logo-titech.png" alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="glass border border-white/10 rounded-2xl rounded-bl-sm px-4 py-3">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Titech is typing</span>
                      <div className="flex gap-0.5">
                        {[0, 1, 2].map((d) => (
                          <motion.span
                            key={d}
                            className="w-1 h-1 rounded-full bg-cyan-400"
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 1, repeat: Infinity, delay: d * 0.2 }}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      {[0, 1, 2, 3].map((d) => (
                        <motion.span
                          key={d}
                          className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400"
                          animate={{ y: [0, -6, 0], opacity: [0.4, 1, 0.4] }}
                          transition={{ duration: 0.9, repeat: Infinity, delay: d * 0.12, ease: 'easeInOut' }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Quick replies — show after each assistant response (when not booking) */}
              {!loading && !booking.active && messages.length > 1 && messages[messages.length - 1].role === 'assistant' && booking.step !== 6 && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-wrap gap-1.5 pt-1"
                >
                  {AI_QUICK_REPLIES.map((qr) => (
                    <button
                      key={qr.label}
                      onClick={() => send(qr.message)}
                      className="text-[11px] px-2.5 py-1.5 rounded-full glass border border-white/10 hover:border-violet-500/40 hover:bg-violet-500/10 text-foreground/80 hover:text-foreground transition-all flex items-center gap-1"
                    >
                      <Zap className="w-2.5 h-2.5 text-cyan-400" />
                      {qr.label}
                    </button>
                  ))}
                </motion.div>
              )}

              {/* Service picker (step 3) */}
              {showServicePicker && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col gap-2"
                >
                  <div className="grid grid-cols-1 gap-1.5 max-h-60 overflow-y-auto no-scrollbar">
                    {SERVICES.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => pickService(s.title)}
                        className="text-left text-xs px-3 py-2 rounded-lg glass border border-white/10 hover:border-violet-500/40 hover:bg-violet-500/10 transition-all flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />
                        {s.title}
                      </button>
                    ))}
                    <button
                      onClick={() => pickService('Other / Not sure')}
                      className="text-left text-xs px-3 py-2 rounded-lg glass border border-white/10 hover:border-violet-500/40 hover:bg-violet-500/10 transition-all"
                    >
                      Other / Not sure
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Suggestions (first turn only) */}
              {messages.length === 1 && !loading && !booking.active && (
                <div className="flex flex-col gap-2 pt-2">
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground px-1">
                    Suggested questions
                  </div>
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => send(s)}
                      className="text-left text-sm px-3 py-2 rounded-xl glass border border-white/10 hover:border-violet-500/40 hover:bg-violet-500/5 transition-all"
                    >
                      {s}
                    </button>
                  ))}
                  <button
                    onClick={startBooking}
                    className="text-left text-sm px-3 py-2.5 rounded-xl bg-gradient-to-r from-violet-600/20 to-cyan-500/20 border border-violet-500/30 hover:border-violet-500/60 transition-all flex items-center gap-2 font-medium"
                  >
                    <CalendarCheck className="w-4 h-4 text-cyan-300" />
                    Book an appointment now
                  </button>
                </div>
              )}
            </div>

            {/* Booking progress bar */}
            {booking.active && (
              <div className="px-4 py-2 border-t border-white/5 bg-white/[0.02]">
                <div className="flex items-center justify-between text-[10px] text-muted-foreground mb-1.5">
                  <span>Booking progress</span>
                  <span>{Math.min(booking.step + 1, 5)} / 5</span>
                </div>
                <div className="h-1 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-violet-500 to-cyan-400"
                    animate={{ width: `${(Math.min(booking.step + 1, 5) / 5) * 100}%` }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
                {booking.step < 5 && (
                  <button
                    onClick={cancelBooking}
                    className="mt-2 text-[10px] text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Cancel booking
                  </button>
                )}
              </div>
            )}

            {/* Input */}
            <form onSubmit={onSubmit} className="p-3 border-t border-white/10 flex items-end gap-2">
              {booking.active ? (
                <>
                  {showBookingUI ? (
                    <Input
                      ref={bookingInputRef}
                      value={bookingInput}
                      onChange={(e) => setBookingInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          submitBookingField();
                        }
                      }}
                      placeholder={BOOKING_STEPS[booking.step].placeholder}
                      type={BOOKING_STEPS[booking.step].type}
                      className="flex-1 bg-white/5 border-white/10 focus:border-violet-500 text-sm h-11"
                    />
                  ) : showFinalMessage ? (
                    <Textarea
                      ref={taRef}
                      value={bookingInput}
                      onChange={(e) => setBookingInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          submitBookingFinal();
                        }
                      }}
                      placeholder="Tell me about your project, timeline, budget..."
                      rows={2}
                      className="flex-1 resize-none bg-white/5 border-white/10 focus:border-violet-500 text-sm"
                    />
                  ) : (
                    <div className="flex-1 text-xs text-muted-foreground px-2 py-3">
                      {booking.step === 5 ? 'Submitting...' : 'Pick a service above ☝️'}
                    </div>
                  )}
                  <Button
                    type="submit"
                    size="icon"
                    disabled={
                      booking.step === 3 ||
                      booking.step === 5 ||
                      (booking.step < 4 && !bookingInput.trim()) ||
                      (booking.step === 4 && !bookingInput.trim())
                    }
                    className="bg-gradient-to-br from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 border-0 h-11 w-11 flex-shrink-0"
                  >
                    {booking.step === 4 ? <Send className="w-4 h-4" /> : <Send className="w-4 h-4" />}
                  </Button>
                </>
              ) : (
                <>
                  <Textarea
                    ref={taRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        send();
                      }
                    }}
                    placeholder="Ask Titech anything..."
                    rows={1}
                    className="flex-1 resize-none bg-white/5 border-white/10 focus:border-violet-500 min-h-[44px] max-h-[120px] text-sm"
                    disabled={loading}
                  />
                  <Button
                    type="submit"
                    size="icon"
                    disabled={loading || !input.trim()}
                    className="bg-gradient-to-br from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 border-0 h-11 w-11 flex-shrink-0"
                  >
                    {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                  </Button>
                </>
              )}
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Tiny markdown renderer for **bold** and line breaks
function MarkdownLite({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((p, i) => {
        if (p.startsWith('**') && p.endsWith('**')) {
          return <strong key={i} className="font-semibold">{p.slice(2, -2)}</strong>;
        }
        return <span key={i} className="whitespace-pre-wrap">{p}</span>;
      })}
    </>
  );
}
