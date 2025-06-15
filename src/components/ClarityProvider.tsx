'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    clarity: (action: string, ...args: unknown[]) => void;
  }
}

export function ClarityProvider() {
  useEffect(() => {
    const clarityId = process.env.NEXT_PUBLIC_MICROSOFT_CLARITY_ID || 'rzjz2antsr';
    
    if (clarityId && typeof window !== 'undefined') {
      // Initialize Clarity
      (function(c: any, l: Document, a: string, r: string, i: string) {
        c[a] = c[a] || function(...args: unknown[]) { (c[a].q = c[a].q || []).push(args); };
        const t = l.createElement(r) as HTMLScriptElement;
        t.async = true;
        t.src = "https://www.clarity.ms/tag/" + i;
        const y = l.getElementsByTagName(r)[0];
        y.parentNode?.insertBefore(t, y);
      })(window, document, "clarity", "script", clarityId);
    }
  }, []);

  return null;
}