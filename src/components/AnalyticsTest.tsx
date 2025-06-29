'use client';

import { useEffect } from 'react';
import { triggerTestEvents, GA_TRACKING_ID } from '@/lib/analytics';

export function AnalyticsTest() {
  useEffect(() => {
    // Wait for gtag to be available, then trigger test events
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined') {
        // Check if gtag is available
        if (typeof window.gtag === 'function') {
          console.warn('✅ Google Analytics gtag is available');
          console.warn('📊 GA Tracking ID:', GA_TRACKING_ID);
          triggerTestEvents();
        } else {
          console.warn('❌ Google Analytics gtag is not available');
          console.warn('🔍 Checking for gtag in 5 seconds...');
          
          // Try again after 5 seconds
          setTimeout(() => {
            if (typeof window.gtag === 'function') {
              console.warn('✅ Google Analytics gtag is now available (delayed)');
              triggerTestEvents();
            } else {
              console.error('❌ Google Analytics gtag still not available after 7 seconds');
            }
          }, 5000);
        }
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Return null - this is an invisible component for testing
  return null;
}