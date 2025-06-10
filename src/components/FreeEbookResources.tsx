'use client';

import { motion } from 'framer-motion';
import { Download, BookOpen, FileText, Zap, Users } from 'lucide-react';
import { TesseractLiquidGlass } from './TesseractLiquidGlass';

const ebooks = [
  {
    id: 1,
    title: 'n8n Quick Start Guide',
    description: 'Get up and running with n8n in under 30 minutes',
    icon: Zap,
    pages: '24 pages',
    downloadCount: '2,847+',
  },
  {
    id: 2,
    title: 'AI Automation Blueprints',
    description: '15 proven automation templates for business growth',
    icon: FileText,
    pages: '68 pages',
    downloadCount: '1,923+',
  },
  {
    id: 3,
    title: 'Workflow Optimization Handbook',
    description: 'Advanced techniques to 10x your automation efficiency',
    icon: BookOpen,
    pages: '94 pages',
    downloadCount: '1,456+',
  },
  {
    id: 4,
    title: 'Enterprise Integration Playbook',
    description: 'Scale your automations across teams and departments',
    icon: Users,
    pages: '112 pages',
    downloadCount: '892+',
  },
];

export function FreeEbookResources() {
  return (
    <section className="bg-gradient-to-b from-transparent via-brand-primary/5 to-transparent px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div className="glass-effect mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">
            <Download className="h-4 w-4 text-brand-accent" />
            <span>Free Implementation Resources</span>
          </div>
          <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
            Get Your Free <span className="gradient-text">Implementation Ebooks</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-400">
            Download our comprehensive guides and start implementing automation strategies today.
            Used by 7,000+ professionals worldwide.
          </p>
        </motion.div>

        <div className="mb-16 grid items-center gap-12 lg:grid-cols-2">
          {/* Hero Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="flex aspect-[4/3] items-center justify-center rounded-brand-xl border border-brand-primary/20 bg-gradient-to-br from-brand-primary/10 to-brand-accent/10">
              <div className="text-center">
                <BookOpen className="mx-auto mb-4 h-16 w-16 text-brand-accent" />
                <p className="font-medium text-gray-600 dark:text-gray-400">
                  Hero Image Placeholder
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  (Image URL to be provided)
                </p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h3 className="mb-6 text-3xl font-bold">Everything You Need to Get Started</h3>
            <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
              These comprehensive guides have helped thousands of professionals implement automation
              successfully. Download all 4 ebooks instantly and start your automation journey today.
            </p>

            <button className="btn-primary flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download All Ebooks
            </button>
          </motion.div>
        </div>

        {/* Ebook Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {ebooks.map((ebook, index) => (
            <motion.div
              key={ebook.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <TesseractLiquidGlass
                variant="card"
                enableScrollEffects={true}
                className="p-6 text-center transition-all duration-300 hover:shadow-brand-lg"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-brand bg-brand-accent/10">
                  <ebook.icon className="h-6 w-6 text-brand-accent" />
                </div>
                <h4 className="mb-2 font-semibold">{ebook.title}</h4>
                <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">{ebook.description}</p>
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-500">
                  <span>{ebook.pages}</span>
                  <span>{ebook.downloadCount} downloads</span>
                </div>
              </TesseractLiquidGlass>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
