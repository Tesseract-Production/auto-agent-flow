'use client';

import { motion } from 'framer-motion';
import { Settings } from 'lucide-react';
import { TesseractLiquidGlass } from './TesseractLiquidGlass';

export function ResourcesBonuses() {
  return (
    <section className="bg-white dark:bg-[#060606] px-4 py-24 sm:py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <TesseractLiquidGlass
            variant="interactive"
            enableShimmer={true}
            className="mb-4 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium"
          >
            <Settings className="h-4 w-4 text-brand-accent" />
            <span className="text-gray-900 dark:text-gray-100">Curated Tools & Bonuses</span>
          </TesseractLiquidGlass>
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl text-gray-900 dark:text-gray-100">
              Bonus: Flowise <span className="gradient-text">Templates & Custom Tools</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Access our production-ready Flowise agent canvases and 20+ custom tool functions. Everything you see built in the masterclass, ready for your own projects.
            </p>
          </div>
        </motion.div>

        {/* Content */}
        <TesseractLiquidGlass
          variant="card"
          enableScrollEffects={true}
          className="rounded-brand-xl p-8"
        >
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden rounded-brand-xl">
                <img
                  src="/assets/images/n8n-masterclass-website-resource-pack-final.webp"
                  alt="Flowise Agents and Tools Resource Pack"
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Production-Ready Agent Templates</h3>
              <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
                Get the exact Flowise canvases used in the masterclass: Cross-Functional Generalized Agentic Assistant templates and SEO Keywords Research Agent - plus 20 fully implemented custom tool functions.
              </p>
            </motion.div>
          </div>

          {/* Additional Tool Examples */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 grid gap-6 md:grid-cols-2"
          >
            <div className="group">
              <TesseractLiquidGlass
                variant="card"
                enableScrollEffects={true}
                enableShimmer={true}
                className="rounded-brand-xl p-4 border border-gray-200/50 shadow-brand-lg transition-all duration-700 group-hover:border-brand-primary group-hover:shadow-brand-xl dark:border-gray-700/50"
              >
                <img
                  src="/assets/images/flowise-agent-canvas-beauty-image-2.jpg.webp"
                  alt="Advanced Flowise Agent Canvas"
                  className="w-full rounded-brand-lg"
                />
                <h4 className="mt-4 font-semibold">Cross-Functional Agent Canvas</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Generalized agentic assistant template from the masterclass
                </p>
              </TesseractLiquidGlass>
            </div>

            <div className="group">
              <TesseractLiquidGlass
                variant="card"
                enableScrollEffects={true}
                enableShimmer={true}
                className="rounded-brand-xl p-4 border border-gray-200/50 shadow-brand-lg transition-all duration-700 group-hover:border-brand-primary group-hover:shadow-brand-xl dark:border-gray-700/50"
              >
                <img
                  src="/assets/images/flowise-custom-tools-resources-beauty-image-1.jpg.webp"
                  alt="Custom Flowise Tools and Resources"
                  className="w-full rounded-brand-lg"
                />
                <h4 className="mt-4 font-semibold">20+ Custom Tool Functions</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Ready-to-use API enrichment, media generation, and utility tools
                </p>
              </TesseractLiquidGlass>
            </div>
          </motion.div>
        </TesseractLiquidGlass>
      </div>
    </section>
  );
}
