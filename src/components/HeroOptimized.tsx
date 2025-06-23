'use client';

import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { useState, useEffect, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { HeroEmailCapture } from './HeroEmailCapture';
import { TesseractLiquidGlassOptimized } from './TesseractLiquidGlassOptimized';
import { ContainerScroll } from './ui/container-scroll-animation-optimized';

// Lightweight background for better performance
const SimpleBackground = dynamic(() => import('./SimpleBackground'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 -z-10 bg-white/80 dark:bg-[#060606]/80" />
});

// Dynamic import for MuxPlayer to fix SSR issues
const MuxPlayer = dynamic(() => import('@mux/mux-player-react'), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-gradient-to-br from-brand-primary to-brand-accent rounded-lg flex items-center justify-center">
      <div className="text-white text-center">
        <div className="animate-spin h-8 w-8 border-2 border-white border-t-transparent rounded-full mx-auto mb-2"></div>
        <p className="text-sm">Loading video...</p>
      </div>
    </div>
  )
});

export function HeroOptimized() {
  const [titleNumber, setTitleNumber] = useState(0);
  const rotatingTexts = useMemo(() => [
    'NODE AUTOMATION',
    'AI DEVELOPMENT', 
    'AGENTIC ORCHESTRATION',
    'VIBE CODING',
    'API SEQUENCING'
  ], []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === rotatingTexts.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, rotatingTexts]);

  const titleComponent = (
    <div className="pt-16 sm:pt-20"> {/* Restored original spacing */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <TesseractLiquidGlassOptimized
          variant="interactive"
          enableShimmer={true}
          className="mb-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium"
        >
          <Sparkles className="h-4 w-4 text-brand-accent" />
          <span className="text-gray-900 dark:text-gray-100">Auto Agent Flow Academy - Launch Special</span>
        </TesseractLiquidGlassOptimized>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-6 text-4xl font-black text-gray-900 dark:text-white sm:text-5xl lg:text-6xl text-center tracking-tight"
      >
        <div className="mb-2">Master</div>
        <div className="relative flex justify-center overflow-hidden py-2" style={{ height: '5rem' }}>
          &nbsp;
          {rotatingTexts.map((text, index) => (
            <motion.span
              key={index}
              className="absolute font-black gradient-text text-3xl sm:text-4xl lg:text-5xl tracking-tight"
              style={{ top: '0.8rem' }}
              initial={{ opacity: 0, y: "-100" }}
              transition={{ type: "spring", stiffness: 50 }}
              animate={
                titleNumber === index
                  ? {
                      y: 0,
                      opacity: 1,
                    }
                  : {
                      y: titleNumber > index ? -150 : 150,
                      opacity: 0,
                    }
              }
            >
              {text}
            </motion.span>
          ))}
        </div>
        <div className="-mt-2">Develop Solutions Confidently</div>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mx-auto mb-8 max-w-3xl text-xl text-gray-600 dark:text-gray-400 sm:text-2xl"
      >
        Build a production-ready 32-node automation using custom AI agents, visual models, and n8n's powerful orchestration platform. From zero to advanced workflows in one comprehensive masterclass.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-12 flex justify-center"
      >
        <TesseractLiquidGlassOptimized variant="interactive" enableShimmer={true}>
          <button 
            className="btn-primary group"
            onClick={() => {
              window.open('https://academy.tesseract.nexus/course/n8n-full-stack-masterclass-2025-building-generative-multimedia-production-system', '_blank');
            }}
          >
            Start Learning Today
            <ArrowRight className="ml-2 inline-block h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </TesseractLiquidGlassOptimized>
      </motion.div>
    </div>
  );

  return (
    <section className="relative overflow-hidden pb-20">
      <SimpleBackground />

      <ContainerScroll titleComponent={titleComponent}>
        <div className="h-full w-full rounded-lg overflow-hidden">
          <MuxPlayer
              playbackId="H9KiKlFIc3p7KStkJmV18GpJ2xl3sILy77EPdY5td00c"
              primaryColor="#da3229"
              accentColor="#e0392f"
              autoPlay={true}
              muted={true}
              loop={true}
              controls={true}
              style={{ width: '100%', height: '100%' }}
            />
        </div>
      </ContainerScroll>
      
      {/* Email capture below video frame */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="relative z-10 mt-4 flex justify-center px-4 pb-8"
      >
        <HeroEmailCapture />
      </motion.div>
      
    </section>
  );
}