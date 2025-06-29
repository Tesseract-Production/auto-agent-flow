'use client';

import { useState, useEffect, useMemo } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function FloatingScrollButton() {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSection, setCurrentSection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Define the sections in order
  const sections = useMemo(() => [
    'hero',
    'video-preview', 
    'free-resources',
    'course-outline',
    'tech-stack',
    'resources-bonuses',
    'nodeverse-promotion',
    'instructor',
    'pricing',
    'faq'
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Hide button when near bottom of page
      if (scrollTop + windowHeight >= documentHeight - 100) {
        setIsVisible(false);
        return;
      } else {
        setIsVisible(true);
      }

      // Determine current section
      const sectionElements = sections.map(id => document.getElementById(id)).filter(Boolean);
      
      for (let i = 0; i < sectionElements.length; i++) {
        const element = sectionElements[i];
        if (element) {
          const rect = element.getBoundingClientRect();
          const isInView = rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2;
          
          if (isInView) {
            setCurrentSection(i);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToNextSection = () => {
    const nextSectionIndex = Math.min(currentSection + 1, sections.length - 1);
    const nextSectionId = sections[nextSectionIndex];
    const nextElement = document.getElementById(nextSectionId);
    
    if (nextElement) {
      const elementRect = nextElement.getBoundingClientRect();
      const elementTop = elementRect.top + window.scrollY;
      const elementHeight = elementRect.height;
      const scrollToPosition = elementTop + (elementHeight / 2) - (window.innerHeight / 2);
      
      window.scrollTo({
        top: Math.max(0, scrollToPosition),
        behavior: 'smooth'
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && !isMobile && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToNextSection}
          className="fixed bottom-8 right-8 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-2xl transition-all duration-300 hover:bg-white/30 hover:border-white/40 dark:bg-gray-900/20 dark:border-gray-700/30 dark:hover:bg-gray-900/30"
          style={{
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(0, 0, 0, 0.1)',
          }}
        >
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            <ChevronDown className="h-6 w-6 text-gray-700 dark:text-gray-300" />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}