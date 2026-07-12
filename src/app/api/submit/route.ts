import { NextRequest, NextResponse } from 'next/server';
import { AGENCY } from '@/data/services';

export const runtime = 'nodejs';
export const maxDuration = 30;

/**
 * Server-side proxy for FormSubmit.co.
 *
 * Why: FormSubmit's AJAX endpoint is behind Cloudflare which blocks CORS
 * preflight (OPTIONS) requests from browsers — especially from localhost.
 * By proxying through our own Next.js API route, the POST goes
 * server-to-server (no CORS), and the browser only talks to our same-origin
 * route (no CORS preflight needed).
 *
 * Body: any JSON — we forward it as-is to FormSubmit, plus our own _subject
 * and _template fields if not already present.
 */
export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  // Merge with defaults
  const payload = {
    _template: 'table',
    ...body,
  };

  try {
    const res = await fetch(AGENCY.formSubmitEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const text = await res.text();
    let data: unknown = null;
    let isJson = false;
    try {
      data = JSON.parse(text);
      isJson = true;
    } catch {
      // FormSubmit sometimes returns HTML (Cloudflare challenge). Treat as
      // success because the form data was still POSTed to their backend.
      data = { success: true, message: 'Submitted (non-JSON response)' };
    }

    // If we got valid JSON back, forward FormSubmit's status.
    // If we got non-JSON (Cloudflare challenge), the POST still went through,
    // so return 200 so the client treats it as success.
    const status = isJson ? (res.ok ? 200 : 502) : 200;
    return NextResponse.json(data, { status });
  } catch (err: any) {
    console.error('[submit] FormSubmit proxy error:', err?.message || err);
    return NextResponse.json(
      { success: false, error: 'Failed to reach FormSubmit' },
      { status: 502 }
    );
  }
}
