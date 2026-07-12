'use client';

/**
 * Submit form data to FormSubmit.co via a hidden HTML form POST.
 *
 * Uses the STANDARD endpoint (https://formsubmit.co/email) — NOT the AJAX one.
 * This is a normal browser form submission (navigation), which Cloudflare
 * allows. Real browsers solve the JS challenge automatically.
 *
 * The form targets a hidden iframe so the page doesn't navigate away.
 *
 * Usage:
 *   submitToFormSubmit({ name: 'John', email: 'john@example.com', message: 'Hi' });
 */

let iframeId = 'formsubmit-hidden-iframe';
let formId = 'formsubmit-hidden-form';

// Ensure the hidden iframe + form exist in the DOM (created once)
function ensureHiddenElements() {
  if (typeof document === 'undefined') return null;

  let iframe = document.getElementById(iframeId) as HTMLIFrameElement | null;
  let form = document.getElementById(formId) as HTMLFormElement | null;

  if (!iframe) {
    iframe = document.createElement('iframe');
    iframe.id = iframeId;
    iframe.name = iframeId;
    iframe.style.display = 'none';
    iframe.style.width = '0';
    iframe.style.height = '0';
    iframe.style.border = '0';
    iframe.setAttribute('aria-hidden', 'true');
    iframe.setAttribute('tabindex', '-1');
    document.body.appendChild(iframe);
  }

  if (!form) {
    form = document.createElement('form');
    form.id = formId;
    form.method = 'POST';
    form.target = iframeId;
    form.style.display = 'none';
    form.setAttribute('aria-hidden', 'true');
    document.body.appendChild(form);
  }

  return { iframe, form };
}

export function submitToFormSubmit(
  data: Record<string, string>,
  email: string
): Promise<boolean> {
  return new Promise((resolve) => {
    const elements = ensureHiddenElements();
    if (!elements) {
      resolve(false);
      return;
    }
    const { form } = elements;

    // Clear existing fields
    form.innerHTML = '';

    // Set action to the standard FormSubmit endpoint
    form.action = `https://formsubmit.co/${email}`;

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

    // Submit the form into the hidden iframe
    try {
      form.submit();
      // Give FormSubmit time to process (it redirects to a thank-you page)
      setTimeout(() => resolve(true), 3000);
    } catch (err) {
      console.error('[formsubmit] submit error:', err);
      resolve(false);
    }
  });
}
