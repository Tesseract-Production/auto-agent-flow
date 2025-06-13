'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Users } from 'lucide-react';
import { TesseractLiquidGlass } from './TesseractLiquidGlass';

export function SocialProofPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [signupCount, setSignupCount] = useState(0);
  const [hasScrolledPastHero, setHasScrolledPastHero] = useState(false);
  const hasShownRef = useRef(false);

  // Fetch real signup count from API
  useEffect(() => {
    const fetchSignupCount = async () => {
      try {
        const response = await fetch('/api/social-proof')
        if (response.ok) {
          const data = await response.json()
          // Use the total count from API
          if (data.totalSignups) {
            setSignupCount(data.totalSignups)
          }
        }
      } catch {
        // Use fallback count if API fails
        setSignupCount(2847)
      }
    }

    fetchSignupCount()
    
    // Refresh count every minute
    const refreshInterval = setInterval(fetchSignupCount, 60 * 1000)
    return () => clearInterval(refreshInterval)
  }, [])

  // Monitor scroll position to show popup after hero
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight // Assuming hero is full viewport height
      const scrollPosition = window.scrollY
      
      if (scrollPosition > heroHeight * 0.8 && !hasScrolledPastHero) {
        setHasScrolledPastHero(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [hasScrolledPastHero])

  // Show popup once after scrolling past hero
  useEffect(() => {
    if (hasScrolledPastHero && !hasShownRef.current) {
      hasShownRef.current = true
      
      // Show popup after a short delay
      setTimeout(() => {
        setIsVisible(true)
        
        // Auto-hide after 10 seconds
        setTimeout(() => {
          setIsVisible(false)
        }, 10000)
      }, 1000)
    }
  }, [hasScrolledPastHero])

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 100, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: 100, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-4 right-4 z-50 max-w-sm"
        >
          <TesseractLiquidGlass
            variant="interactive"
            enableShimmer={true}
            className="border border-brand-primary/20 p-6 shadow-[0_25px_50px_-12px_rgba(218,50,41,0.25)]"
          >
            <a 
              href="https://academy.tesseract.nexus/course/n8n-full-stack-masterclass-2025-building-generative-multimedia-production-system"
              target="_blank"
              rel="noopener noreferrer"
              className="block space-y-4 no-underline"
            >
              {/* 50% Discount Offer */}
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <Sparkles className="h-6 w-6 text-brand-accent animate-pulse" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-lg text-gray-900">
                    Limited Time: <span className="text-brand-accent">50% OFF</span>
                  </p>
                  <p className="text-sm text-gray-600">
                    Early Access Pricing Ends Soon
                  </p>
                  <p className="text-xs font-mono text-brand-primary mt-1">
                    Code: N8NSUMMER50AAFLAUNCH2311
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200/50" />

              {/* Dynamic Signup Count */}
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <Users className="h-5 w-5 text-brand-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold text-brand-dark">{signupCount.toLocaleString()}</span> people just signed up
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Join the automation revolution
                  </p>
                </div>
              </div>

              {/* Click to enroll text */}
              <div className="text-center pt-2 border-t border-gray-200/50">
                <p className="text-xs font-medium text-brand-accent">
                  Click to enroll now →
                </p>
              </div>

              {/* Close button */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleClose();
                }}
                className="absolute top-2 right-2 rounded p-1 transition-colors hover:bg-gray-100"
                aria-label="Close notification"
              >
                <X className="h-4 w-4 text-gray-400" />
              </button>
            </a>
          </TesseractLiquidGlass>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
