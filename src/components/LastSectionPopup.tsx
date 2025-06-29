'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Zap, ArrowRight } from 'lucide-react';
import { TesseractLiquidGlass } from './TesseractLiquidGlass';

export function LastSectionPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the FAQ section (last main component before footer)
      const faqSection = document.getElementById('faq');
      
      if (!faqSection || hasTriggered) return;

      const rect = faqSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Check if user has scrolled to at least 70% of the FAQ section
      const sectionProgress = (windowHeight - rect.top) / rect.height;
      
      if (sectionProgress >= 0.7 && !isVisible) {
        setIsVisible(true);
        setHasTriggered(true);
        
        // Auto-hide after 8 seconds
        setTimeout(() => {
          setIsVisible(false);
        }, 8000);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasTriggered, isVisible]);

  const handleCTAClick = () => {
    // Scroll to pricing section
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 50, scale: 0.9 }}
          transition={{ 
            duration: 0.4, 
            type: "spring",
            stiffness: 300,
            damping: 30
          }}
          className="fixed bottom-6 right-6 z-50 max-w-sm"
        >
          <TesseractLiquidGlass
            variant="card"
            enableShimmer={true}
            className="relative overflow-hidden rounded-brand-lg border border-brand-primary/20 bg-white/95 backdrop-blur-md shadow-2xl dark:border-brand-primary/30 dark:bg-gray-900/95"
          >
            <button
              onClick={() => setIsVisible(false)}
              className="absolute right-3 top-3 rounded-full p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-300 z-10"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="p-5">
              {/* Icon and accent */}
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-brand-primary to-brand-accent">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <div className="h-2 w-2 rounded-full bg-brand-accent animate-pulse" />
              </div>
              
              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                  Ready to Start Building?
                </h3>
                
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  You've seen what's possible with n8n AI automation. Join hundreds of developers already building the future with Auto Agent Flow Academy.
                </p>
                
                {/* CTA Button */}
                <button
                  onClick={handleCTAClick}
                  className="w-full mt-4 bg-gradient-to-r from-brand-primary to-brand-accent text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2 group"
                >
                  <span>View Pricing</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                
                {/* Trust indicator */}
                <div className="flex items-center justify-center gap-2 text-xs text-gray-500 dark:text-gray-400 mt-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span>Join 500+ developers this month</span>
                </div>
              </div>
            </div>

            {/* Animated border */}
            <div className="absolute inset-0 rounded-brand-lg">
              <div className="absolute inset-0 rounded-brand-lg bg-gradient-to-r from-brand-primary/20 to-brand-accent/20 animate-pulse" />
            </div>
          </TesseractLiquidGlass>
        </motion.div>
      )}
    </AnimatePresence>
  );
}