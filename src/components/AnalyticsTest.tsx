'use client';

import { useEffect } from 'react';
import { triggerTestEvents } from '@/lib/analytics';

export function AnalyticsTest() {
  useEffect(() => {
    // Wait for gtag to be available, then trigger test events
    const timer = setTimeout(() => {
      triggerTestEvents();
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Return null - this is an invisible component for testing
  return null;
}