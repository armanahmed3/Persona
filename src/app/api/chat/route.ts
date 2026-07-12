import { NextRequest, NextResponse } from 'next/server';
import ZAI from 'z-ai-web-dev-sdk';
import { AGENCY, SERVICES } from '@/data/services';

export const runtime = 'nodejs';
export const maxDuration = 60;

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY || '<redacted>';
const NVIDIA_API_KEY = process.env.NVIDIA_API_KEY || '<redacted>';

const SYSTEM_PROMPT = `You are "Titech", the official AI agent of Titech Agency — an AI-driven digital services agency based in the US (New York), UK (London), and UAE (Dubai).

CRITICAL RULES:
1. You ONLY answer questions about Titech Agency, its services, pricing approach, process, tech stack, booking, and related digital services.
2. If a user asks about unrelated topics (politics, other companies, general world knowledge not tied to Titech), politely steer them back: "I'm Titech's dedicated AI agent — I can only help with our agency's services, tech stack, and booking. How can I help you with your digital project?"
3. Be concise, professional, energetic, and slightly futuristic in tone. Use short paragraphs and bullet points where helpful.
4. When a user wants to book an appointment or get a quote, encourage them to use the in-chat booking flow (the "Book an appointment in chat" button) or the booking form on the page. Mention we respond within 24 hours.
5. Never invent specific prices. Instead say pricing is project-based and depends on scope — invite them to book a free consultation.

AGENCY INFO:
- Name: ${AGENCY.name}
- Tagline: ${AGENCY.tagline}
- Regions: ${AGENCY.regions.map((r) => `${r.city}, ${r.country}`).join('; ')}
- Email: ${AGENCY.email}
- Phone: ${AGENCY.phone}

SERVICES WE OFFER (${SERVICES.length} total):
${SERVICES.map((s) => `- ${s.title}: ${s.short}`).join('\n')}

TECH STACK: Three.js, React Three Fiber, PixiJS, Babylon.js, GSAP, Framer Motion, Spline, WebFlow, Framer, WebGL, GLSL Shaders, Next.js 16, Tailwind CSS 4, shadcn/ui, 21st.dev, UI/UX Pro Max, Prisma ORM.

PROCESS: 1) Discovery & Strategy 2) Design & Prototyping 3) Engineering & AI 4) Launch & Scale.

STATS: 250+ projects, 98% client retention, 15+ industries, 40+ expert engineers.

Keep every reply under 180 words. End with a helpful next-step when relevant. Never mention which AI provider/model you run on.`;

type Msg = { role: 'user' | 'assistant' | 'system'; content: string };

// Fallback 1: OpenRouter (multi-model gateway)
async function openRouterChat(messages: Msg[]): Promise<string> {
  if (!OPENROUTER_API_KEY) throw new Error('no openrouter key');
  const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${OPENROUTER_API_KEY}`,
      'Content-Type': 'application/json',
      'HTTP-Referer': 'https://titechagency.com',
      'X-Title': 'Titech Agency AI Agent',
    },
    body: JSON.stringify({
      model: 'openai/gpt-4o-mini',
      messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...messages],
      max_tokens: 400,
      temperature: 0.6,
    }),
  });
  if (!res.ok) {
    const t = await res.text();
    throw new Error(`openrouter ${res.status}: ${t.slice(0, 200)}`);
  }
  const data = await res.json();
  const content = data?.choices?.[0]?.message?.content;
  if (!content) throw new Error('openrouter empty');
  return content;
}

// Fallback 2: NVIDIA NIM
async function nvidiaChat(messages: Msg[]): Promise<string> {
  if (!NVIDIA_API_KEY) throw new Error('no nvidia key');
  const res = await fetch('https://integrate.api.nvidia.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${NVIDIA_API_KEY}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      model: 'meta/llama-3.1-8b-instruct',
      messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...messages],
      max_tokens: 400,
      temperature: 0.6,
      top_p: 0.9,
    }),
  });
  if (!res.ok) {
    const t = await res.text();
    throw new Error(`nvidia ${res.status}: ${t.slice(0, 200)}`);
  }
  const data = await res.json();
  const content = data?.choices?.[0]?.message?.content;
  if (!content) throw new Error('nvidia empty');
  return content;
}

export async function POST(req: NextRequest) {
  let body: { messages?: Msg[]; message?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const messages: Msg[] = body.messages?.filter?.((m) => m && m.role && m.content) || [];
  if (body.message && !messages.length) {
    messages.push({ role: 'user', content: body.message });
  }
  if (!messages.length) {
    return NextResponse.json({ error: 'No message provided' }, { status: 400 });
  }

  let reply = '';
  let provider = '';

  // PRIMARY: z.ai SDK
  try {
    const zai = await ZAI.create();
    const completion = await zai.chat.completions.create({
      messages: [
        { role: 'assistant', content: SYSTEM_PROMPT },
        ...messages,
      ],
      thinking: { type: 'disabled' },
    });
    reply = completion?.choices?.[0]?.message?.content || '';
    if (reply) provider = 'z.ai';
  } catch (err: any) {
    console.error('[chat] z.ai failed:', err?.message || err);
  }

  // FALLBACK 1: OpenRouter
  if (!reply) {
    try {
      reply = await openRouterChat(messages);
      provider = 'openrouter';
    } catch (err: any) {
      console.error('[chat] openrouter failed:', err?.message || err);
    }
  }

  // FALLBACK 2: NVIDIA NIM
  if (!reply) {
    try {
      reply = await nvidiaChat(messages);
      provider = 'nvidia';
    } catch (err: any) {
      console.error('[chat] nvidia failed:', err?.message || err);
    }
  }

  // FINAL FALLBACK: canned but on-brand reply
  if (!reply) {
    reply =
      "I'm Titech's AI agent and I'm having trouble reaching my models right now. Please use the \"Book an Appointment\" form below or email hello@titechagency.com — we respond within 24 hours!";
    provider = 'fallback';
  }

  return NextResponse.json({
    reply,
    provider,
    timestamp: new Date().toISOString(),
  });
}
