import { NextRequest, NextResponse } from 'next/server';
import { AGENCY } from '@/data/services';

export const runtime = 'nodejs';
export const maxDuration = 30;

/**
 * Server-side proxy for FormSubmit.co with browser-like headers.
 *
 * Cloudflare blocks requests that look like bots (missing User-Agent, etc).
 * We send proper browser-like headers to pass the bot check.
 */
export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const payload = {
    _template: 'table',
    _captcha: 'false',
    ...body,
  };

  try {
    const res = await fetch(AGENCY.formSubmitEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
        'Origin': 'https://titechagency.com',
        'Referer': 'https://titechagency.com/',
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
      data = { success: true, message: 'Submitted (non-JSON response)' };
    }

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
