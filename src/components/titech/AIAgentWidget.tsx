'use client';

import { useState, useRef, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Send, X, Sparkles, Loader2, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

type ChatMsg = { role: 'user' | 'assistant'; content: string; provider?: string };

const SUGGESTIONS = [
  'What services do you offer?',
  'How much does a website cost?',
  'Tell me about your tech stack',
  'I want to book a call',
];

const WELCOME: ChatMsg = {
  role: 'assistant',
  content:
    "Hey! I'm **Titech** — the official AI agent of Titech Agency. I can answer questions about our services, tech stack, and help you book an appointment. What would you like to know?",
};

export default function AIAgentWidget({ onBookClick }: { onBookClick: () => void }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMsg[]>([WELCOME]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [unread, setUnread] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const taRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  useEffect(() => {
    if (open) setUnread(false);
  }, [open]);

  const send = async (text?: string) => {
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
      const provider = data?.provider;
      setMessages((m) => [...m, { role: 'assistant', content: reply, provider }]);

      // If user mentions booking, gently nudge with a button-style message (handled by suggestion)
      if (/book|appointment|call|consult|quote|hire/i.test(content)) {
        setTimeout(() => {
          setMessages((m) => [
            ...m,
            {
              role: 'assistant',
              content:
                '👇 You can book directly using the form below, or I can answer more questions first.',
            },
          ]);
        }, 600);
      }
    } catch (err) {
      setMessages((m) => [
        ...m,
        {
          role: 'assistant',
          content:
            "I'm having trouble connecting right now. Please use the Book an Appointment form or email hello@titechagency.com.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    send();
  };

  // Auto-resize textarea
  useEffect(() => {
    if (taRef.current) {
      taRef.current.style.height = 'auto';
      taRef.current.style.height = Math.min(taRef.current.scrollHeight, 120) + 'px';
    }
  }, [input]);

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
                className="relative z-10"
              >
                <Bot className="w-7 h-7 text-white" />
              </motion.span>
            )}
          </AnimatePresence>
          {unread && !open && (
            <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-fuchsia-500 border-2 border-background" />
          )}
          {/* Tooltip */}
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
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-background" />
              </div>
              <div className="flex-1">
                <div className="font-[family-name:var(--font-syne)] font-bold text-sm flex items-center gap-2">
                  Titech AI Agent
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-violet-500/20 text-violet-300 uppercase tracking-wider">
                    Official
                  </span>
                </div>
                <div className="text-xs text-muted-foreground flex items-center gap-1">
                  <MessageCircle className="w-3 h-3" />
                  Online · Replies instantly
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
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-4"
            >
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      m.role === 'user'
                        ? 'bg-gradient-to-br from-violet-600 to-cyan-500 text-white rounded-br-sm'
                        : 'glass border border-white/10 rounded-bl-sm'
                    }`}
                  >
                    {m.role === 'assistant' ? (
                      <MarkdownLite text={m.content} />
                    ) : (
                      m.content
                    )}
                    {m.provider && m.role === 'assistant' && (
                      <div className="mt-1.5 text-[9px] uppercase tracking-wider opacity-50">
                        via {m.provider}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Loading */}
              {loading && (
                <div className="flex justify-start">
                  <div className="glass border border-white/10 rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-1.5">
                    {[0, 1, 2].map((d) => (
                      <motion.span
                        key={d}
                        className="w-2 h-2 rounded-full bg-violet-400"
                        animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
                        transition={{ duration: 1, repeat: Infinity, delay: d * 0.15 }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Suggestions (only show first turn) */}
              {messages.length === 1 && !loading && (
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
                </div>
              )}
            </div>

            {/* Quick book button */}
            <div className="px-4 pt-2 border-t border-white/5">
              <Button
                onClick={() => {
                  setOpen(false);
                  onBookClick();
                }}
                variant="ghost"
                size="sm"
                className="w-full text-xs text-cyan-300 hover:text-cyan-200 hover:bg-cyan-500/10"
              >
                <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                Book an appointment instead
              </Button>
            </div>

            {/* Input */}
            <form onSubmit={onSubmit} className="p-3 border-t border-white/10 flex items-end gap-2">
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
                {loading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </Button>
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
