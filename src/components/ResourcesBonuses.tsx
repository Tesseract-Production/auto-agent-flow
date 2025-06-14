'use client';

import { motion } from 'framer-motion';
import { Settings } from 'lucide-react';
import { TesseractLiquidGlass } from './TesseractLiquidGlass';

export function ResourcesBonuses() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div className="glass-effect mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">
            <Settings className="h-4 w-4 text-brand-accent" />
            <span>Curated Tools & Bonuses</span>
          </div>
          <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
            Exclusive Flowise <span className="gradient-text">Agents & Tools</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-400">
            Gain access to our premium agents and tools pack. Perfect for enhancing your workflow
            and automations.
          </p>
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
              <h3 className="mb-6 text-3xl font-bold">Enhance Your Automation Suite</h3>
              <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
                Unlock 2 powerful Flowise agents and a comprehensive pack of 20 custom tools to
                skyrocket your automation capabilities.
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
            <div className="glass-effect rounded-brand-xl p-4">
              <img
                src="/assets/images/flowise-agent-canvas-beauty-image-2.jpg.webp"
                alt="Advanced Flowise Agent Canvas"
                className="w-full rounded-brand-lg"
              />
              <h4 className="mt-4 font-semibold">Advanced Agent Design</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Multi-step agent workflows with conditional logic
              </p>
            </div>

            <div className="glass-effect rounded-brand-xl p-4">
              <img
                src="/assets/images/flowise-custom-tools-resources-beauty-image-1.jpg.webp"
                alt="Custom Flowise Tools and Resources"
                className="w-full rounded-brand-lg"
              />
              <h4 className="mt-4 font-semibold">Custom Tool Integration</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Specialized tools for enhanced functionality
              </p>
            </div>
          </motion.div>
        </TesseractLiquidGlass>
      </div>
    </section>
  );
}
