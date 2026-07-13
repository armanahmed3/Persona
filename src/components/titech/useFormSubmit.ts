'use client';

import { useRef, useState, useCallback } from 'react';

/**
 * Reliable FormSubmit.co submission via hidden HTML form + iframe.
 *
 * Why: FormSubmit's AJAX endpoint is behind Cloudflare which blocks:
 *   1. Browser fetch() CORS preflight (OPTIONS 403)
 *   2. Server-side fetch (bot detection → challenge page, data never received)
 *
 * Solution: Use a standard HTML <form> with method="POST" targeting a hidden
 * <iframe>. This is a normal browser navigation (not AJAX), so Cloudflare
 * processes it normally and the form data reaches FormSubmit's backend.
 *
 * Usage:
 *   const { submit, iframeRef, formRef, status } = useFormSubmit();
 *   // Render <form ref={formRef} target="hidden-iframe"> + <iframe ref={iframeRef} name="hidden-iframe" />
 *   // Call submit({ name, email, message, _subject }) to fill + submit
 */
export function useFormSubmit() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const submit = useCallback(
    (data: Record<string, string>) => {
      const form = formRef.current;
      if (!form) {
        setStatus('error');
        return;
      }

      // Clear existing fields
      form.innerHTML = '';

      // Add all data as hidden inputs
      const fields: Record<string, string> = {
        _template: 'table',
        _captcha: 'false',
        _subject: 'New Submission — Titech Agency',
        ...data,
      };

      for (const [key, value] of Object.entries(fields)) {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = value;
        form.appendChild(input);
      }

      // Submit the form (targets the hidden iframe)
      setStatus('submitting');
      form.submit();

      // The iframe will load FormSubmit's response. Give it time, then
      // mark as success. FormSubmit's non-AJAX endpoint redirects to a
      // thank-you page — we detect completion via iframe onload.
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setStatus('success');
      }, 4000);
    },
    []
  );

  // When iframe finishes loading, mark success
  const onIframeLoad = useCallback(() => {
    // Only fire after we've started submitting (iframe loads about:blank initially)
    if (status === 'submitting') {
      setStatus('success');
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    }
  }, [status]);

  const reset = useCallback(() => setStatus('idle'), []);

  return { iframeRef, formRef, submit, status, onIframeLoad, reset };
}
