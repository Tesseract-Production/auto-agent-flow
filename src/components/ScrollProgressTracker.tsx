'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function ScrollProgressTracker() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollableHeight = documentHeight - windowHeight;
      
      if (scrollableHeight > 0) {
        const progress = (scrollTop / scrollableHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gray-200/50 dark:bg-gray-800/50 overflow-hidden">
      <motion.div
        className="h-full bg-gradient-to-r from-brand-primary to-brand-accent shadow-sm"
        style={{ width: `${scrollProgress}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.1, ease: 'easeOut' }}
      />
    </div>
  );
}