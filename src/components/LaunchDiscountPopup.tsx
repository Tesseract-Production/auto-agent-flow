'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Percent, Clock } from 'lucide-react'
import { TesseractLiquidGlass } from './TesseractLiquidGlass'

export function LaunchDiscountPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasScrolledPastHero, setHasScrolledPastHero] = useState(false)
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60) // 24 hours in seconds

  // Monitor scroll position to show after scrolling through half the page
  useEffect(() => {
    const handleScroll = () => {
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPosition = window.scrollY
      const scrollPercentage = scrollPosition / pageHeight
      
      if (scrollPercentage > 0.5 && !hasScrolledPastHero) {
        setHasScrolledPastHero(true)
        // Show popup after a small delay
        setTimeout(() => {
          setIsVisible(true)
        }, 1000)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [hasScrolledPastHero])

  // Countdown timer
  useEffect(() => {
    if (!isVisible) return
    
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)

    return () => clearInterval(timer)
  }, [isVisible])

  // Auto-hide after 15 seconds
  useEffect(() => {
    if (!isVisible) return
    
    const autoHideTimer = setTimeout(() => {
      setIsVisible(false)
    }, 15000) // 15 seconds

    return () => clearTimeout(autoHideTimer)
  }, [isVisible])

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const handleClose = () => {
    setIsVisible(false)
  }

  const handleCTAClick = () => {
    // Scroll to pricing section
    const pricingSection = document.getElementById('pricing')
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' })
    }
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 100, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: 100, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-4 right-4 z-50 max-w-xs"
        >
          <TesseractLiquidGlass
            variant="interactive"
            enableShimmer={true}
            className="p-3 border-2 border-brand-accent/30 shadow-[0_25px_50px_-12px_rgba(224,57,47,0.4)]"
          >
            <div className="space-y-2">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-1 bg-brand-accent/20 rounded-full">
                    <Percent className="w-4 h-4 text-brand-accent" />
                  </div>
                  <span className="text-sm font-semibold text-brand-accent">Launch Special</span>
                </div>
                <button
                  onClick={handleClose}
                  className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
                  aria-label="Close notification"
                >
                  <X className="w-4 h-4 text-gray-400" />
                </button>
              </div>

              {/* Main content */}
              <div>
                <h3 className="font-bold text-base text-gray-900 dark:text-gray-100 mb-1">
                  Save 40% Today!
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Limited-time launch discount on the complete n8n masterclass.
                </p>
              </div>

              {/* Countdown */}
              <div className="flex items-center gap-2 p-1.5 bg-brand-accent/10 rounded-lg">
                <Clock className="w-3 h-3 text-brand-accent" />
                <span className="text-xs font-mono text-brand-accent font-semibold">
                  {formatTime(timeLeft)}
                </span>
                <span className="text-xs text-gray-600 dark:text-gray-400">left</span>
              </div>

              {/* CTA */}
              <button
                onClick={handleCTAClick}
                className="w-full btn-primary text-xs py-1.5 px-3"
              >
                Claim 40% Off Now
              </button>
            </div>
          </TesseractLiquidGlass>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

