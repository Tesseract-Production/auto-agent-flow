'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X, MapPin, Clock } from 'lucide-react';
import { TesseractLiquidGlass } from './TesseractLiquidGlass';

interface SocialProofItem {
  id: number;
  name: string;
  location: string;
  action: string;
  timeAgo: string;
}

export function SocialProofPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentItem, setCurrentItem] = useState<SocialProofItem | null>(null);
  const [socialProofItems, setSocialProofItems] = useState<SocialProofItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch social proof data
  useEffect(() => {
    const fetchSocialProof = async () => {
      try {
        const response = await fetch('/api/social-proof');
        const data = await response.json();
        if (data.socialProofItems) {
          setSocialProofItems(data.socialProofItems);
        }
      } catch (error) {
        console.error('Failed to fetch social proof data:', error);
      }
    };

    fetchSocialProof();
  }, []);

  // Show popup every 10 seconds and cycle through items
  useEffect(() => {
    if (socialProofItems.length === 0) return;

    const interval = setInterval(() => {
      setCurrentItem(socialProofItems[currentIndex]);
      setIsVisible(true);
      
      // Hide after 4 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 4000);

      // Move to next item
      setCurrentIndex((prev) => (prev + 1) % socialProofItems.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [socialProofItems, currentIndex]);

  if (!currentItem) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: -100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -100, scale: 0.8 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-6 left-6 z-50 max-w-sm"
        >
          <TesseractLiquidGlass
            variant="card"
            enableShimmer={true}
            className="relative overflow-hidden rounded-brand-lg border border-green-200 bg-white/95 p-4 shadow-xl backdrop-blur-sm dark:border-green-800 dark:bg-gray-900/95"
          >
            <button
              onClick={() => setIsVisible(false)}
              className="absolute right-2 top-2 rounded-full p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-300"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex items-start gap-3">
              <div className="mt-1 flex-shrink-0">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                  <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-semibold text-gray-900 dark:text-gray-100">
                    {currentItem.name}
                  </span>
                  <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                    <MapPin className="h-3 w-3" />
                    <span className="text-xs">{currentItem.location}</span>
                  </div>
                </div>
                
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                  {currentItem.action}
                </p>
                
                <div className="mt-2 flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                  <Clock className="h-3 w-3" />
                  <span>{currentItem.timeAgo}</span>
                </div>
              </div>
            </div>

            {/* Animated progress bar */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 4, ease: "linear" }}
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-green-500 to-green-600"
            />
          </TesseractLiquidGlass>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
