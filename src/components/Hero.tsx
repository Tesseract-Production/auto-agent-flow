'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Users, Zap } from 'lucide-react';
import NodeNetworkBackground from './NodeNetworkBackground';
import { HeroEmailCapture } from './HeroEmailCapture';
import { TesseractLiquidGlass } from './TesseractLiquidGlass';
import { ContainerScroll } from './ui/container-scroll-animation';

export function Hero() {
  const titleComponent = (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <TesseractLiquidGlass
          variant="interactive"
          enableShimmer={true}
          className="mb-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium"
        >
          <Sparkles className="h-4 w-4 text-brand-accent" />
          <span>Limited Early Access - Save $148</span>
        </TesseractLiquidGlass>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-6 text-5xl font-bold sm:text-7xl"
      >
        Master <span className="gradient-text">AI Orchestration</span>
        <br />
        Transform Your Career
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mx-auto mb-12 max-w-3xl text-xl text-gray-600 dark:text-gray-400 sm:text-2xl"
      >
        The most comprehensive n8n masterclass for beginners. Build AI-powered automations that
        replace entire teams. From zero to production in weeks.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-12 flex flex-col justify-center gap-4 sm:flex-row"
      >
        <TesseractLiquidGlass variant="interactive" enableShimmer={true}>
          <button className="btn-primary group w-full">
            Start Learning Today
            <ArrowRight className="ml-2 inline-block h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </TesseractLiquidGlass>
        <TesseractLiquidGlass variant="card">
          <button className="btn-secondary w-full">Watch Free Preview</button>
        </TesseractLiquidGlass>
      </motion.div>
    </>
  );

  return (
    <section className="relative overflow-hidden">
      <NodeNetworkBackground />

      <ContainerScroll titleComponent={titleComponent}>
        <TesseractLiquidGlass
          variant="hero"
          enableColorAdaptation={true}
          className="h-full w-full rounded-brand-xl p-8"
        >
          <div className="flex h-full items-center justify-center">
            <div className="space-y-8 text-center">
              <HeroEmailCapture />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-wrap justify-center gap-8 text-gray-600 dark:text-gray-400"
              >
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-brand-accent" />
                  <span className="font-semibold">2,847+ Students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-brand-accent" />
                  <span className="font-semibold">50+ Templates</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-brand-accent">★★★★★</span>
                  <span className="font-semibold">4.9/5 Rating</span>
                </div>
              </motion.div>
            </div>
          </div>
        </TesseractLiquidGlass>
      </ContainerScroll>
    </section>
  );
}
