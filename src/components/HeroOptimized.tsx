'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import dynamic from 'next/dynamic';
import { HeroEmailCapture } from './HeroEmailCapture';
import { TesseractLiquidGlassOptimized } from './TesseractLiquidGlassOptimized';
import { ContainerScroll } from './ui/container-scroll-animation-optimized';

// Lazy load the background animation to improve initial render
const NodeNetworkBackground = dynamic(() => import('./NodeNetworkBackground'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/30 via-white/50 to-white/80 dark:from-black/30 dark:via-black/50 dark:to-black/80" />
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
  const titleComponent = (
    <div className="pt-28 sm:pt-32"> {/* Add padding: 112px mobile, 128px desktop to clear navbar with extra spacing */}
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
          <span>Limited Early Access - Save $148</span>
        </TesseractLiquidGlassOptimized>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl"
      >
        Master <span className="gradient-text">AI Orchestration</span>
        <br />
        Transform Your Career
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mx-auto mb-8 max-w-3xl text-xl text-gray-600 dark:text-gray-400 sm:text-2xl"
      >
        The most comprehensive n8n masterclass for beginners. Build AI-powered automations that
        replace entire teams. From zero to production in weeks.
      </motion.p>

      {/* Temporarily comment out buttons
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-12 flex flex-col justify-center gap-4 sm:flex-row"
      >
        <TesseractLiquidGlassOptimized variant="interactive" enableShimmer={true}>
          <button className="btn-primary group w-full">
            Start Learning Today
            <ArrowRight className="ml-2 inline-block h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </TesseractLiquidGlassOptimized>
        <TesseractLiquidGlassOptimized variant="card">
          <button className="btn-secondary w-full">Watch Free Preview</button>
        </TesseractLiquidGlassOptimized>
      </motion.div>
      */}
    </div>
  );

  return (
    <section className="relative min-h-screen overflow-hidden">
      <NodeNetworkBackground />

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
        className="relative z-10 -mt-8 flex justify-center px-4 pb-8"
      >
        <HeroEmailCapture />
      </motion.div>
      
    </section>
  );
}