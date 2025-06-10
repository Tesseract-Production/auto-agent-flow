'use client';

import { motion } from 'framer-motion';
import { Settings, Package } from 'lucide-react';
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
              <div className="flex aspect-[4/3] items-center justify-center rounded-brand-xl border border-brand-primary/20 bg-gradient-to-br from-brand-primary/10 to-brand-accent/10">
                <div className="text-center">
                  <Package className="mx-auto mb-4 h-16 w-16 text-brand-accent" />
                  <p className="font-medium text-gray-600 dark:text-gray-400">
                    Placeholder for Tools Image
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    (Image URL to be provided)
                  </p>
                </div>
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
        </TesseractLiquidGlass>
      </div>
    </section>
  );
}
