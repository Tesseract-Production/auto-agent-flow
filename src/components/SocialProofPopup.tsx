'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle } from 'lucide-react';
import { TesseractLiquidGlass } from './TesseractLiquidGlass';

interface SocialProofItem {
  id: number;
  name: string;
  location: string;
  action: string;
  timeAgo: string;
}

const socialProofData: SocialProofItem[] = [
  {
    id: 1,
    name: 'Sarah M.',
    location: 'San Francisco',
    action: 'just enrolled in the Professional plan',
    timeAgo: '2 minutes ago',
  },
  {
    id: 2,
    name: 'Michael K.',
    location: 'London',
    action: 'completed Module 3: Advanced Workflows',
    timeAgo: '5 minutes ago',
  },
  {
    id: 3,
    name: 'Jessica R.',
    location: 'Toronto',
    action: 'landed a $95k automation role',
    timeAgo: '12 minutes ago',
  },
  {
    id: 4,
    name: 'David L.',
    location: 'Sydney',
    action: 'just enrolled in the Self-Paced plan',
    timeAgo: '18 minutes ago',
  },
  {
    id: 5,
    name: 'Maria G.',
    location: 'Madrid',
    action: 'earned $15k from first automation project',
    timeAgo: '25 minutes ago',
  },
  {
    id: 6,
    name: 'James W.',
    location: 'New York',
    action: 'just enrolled in the Team License',
    timeAgo: '31 minutes ago',
  },
  {
    id: 7,
    name: 'Anna P.',
    location: 'Berlin',
    action: 'completed the entire masterclass',
    timeAgo: '38 minutes ago',
  },
  {
    id: 8,
    name: 'Ryan T.',
    location: 'Vancouver',
    action: 'started their automation agency',
    timeAgo: '42 minutes ago',
  },
];

export function SocialProofPopup() {
  const [currentNotification, setCurrentNotification] = useState<SocialProofItem | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [notificationIndex, setNotificationIndex] = useState(0);
  const [liveProofData, setLiveProofData] = useState<SocialProofItem[]>(socialProofData);

  // Fetch real social proof data from Supabase
  useEffect(() => {
    const fetchSocialProofData = async () => {
      try {
        const response = await fetch('/api/social-proof')
        if (response.ok) {
          const data = await response.json()
          if (data.socialProofItems && data.socialProofItems.length > 0) {
            setLiveProofData(data.socialProofItems)
          }
        }
      } catch {
        console.warn('Using fallback social proof data')
        // Keep using static data if API fails
      }
    }

    fetchSocialProofData()
    
    // Refresh social proof data every 5 minutes
    const refreshInterval = setInterval(fetchSocialProofData, 5 * 60 * 1000)
    return () => clearInterval(refreshInterval)
  }, [])

  useEffect(() => {
    const showNotification = () => {
      const notification = liveProofData[notificationIndex]
      setCurrentNotification(notification)
      setIsVisible(true)

      // Hide after 4 seconds
      setTimeout(() => {
        setIsVisible(false)
      }, 4000)

      // Update index for next notification
      setNotificationIndex((prev) => (prev + 1) % liveProofData.length)
    }

    // Show first notification after 3 seconds
    const initialDelay = setTimeout(showNotification, 3000)

    // Then show subsequent notifications every 8 seconds
    const interval = setInterval(showNotification, 8000)

    return () => {
      clearTimeout(initialDelay)
      clearInterval(interval)
    }
  }, [notificationIndex, liveProofData])

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && currentNotification && (
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
            className="border border-brand-primary/20 p-4 shadow-[0_25px_50px_-12px_rgba(218,50,41,0.25)]"
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <CheckCircle className="mt-0.5 h-5 w-5 text-brand-accent" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  <span className="font-semibold text-brand-accent">
                    {currentNotification.name}
                  </span>
                  {' from '}
                  <span className="text-gray-600 dark:text-gray-400">
                    {currentNotification.location}
                  </span>
                </p>
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
                  {currentNotification.action}
                </p>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">
                  {currentNotification.timeAgo}
                </p>
              </div>

              <button
                onClick={handleClose}
                className="flex-shrink-0 rounded p-1 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="Close notification"
              >
                <X className="h-4 w-4 text-gray-400" />
              </button>
            </div>
          </TesseractLiquidGlass>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
