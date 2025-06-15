'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Code2, Workflow, Link, Image, Database, FileCode, Layers } from 'lucide-react';
import { cn } from '@/lib/utils';
import { TesseractLiquidGlass } from './TesseractLiquidGlass';

const learningObjectives = [
  {
    id: 1,
    title: 'Develop a Working 30+ Node Orchestrated AI + API Automation',
    description: 'Build complete automation with Agents, Raw Models and node-based processing',
    icon: 'workflow',
    highlights: ['Multi-agent coordination', 'Sequential processing', 'Production deployment']
  },
  {
    id: 2,
    title: 'Master Fundamental n8n Nodes & Integrations',
    description: 'Gain working knowledge of Webhook, HTTP, Edit Fields, Code, OpenAI Assistants, Bannerbear, Supabase and Sendgrid',
    icon: 'code',
    highlights: ['API integrations', 'Data transformation', 'Email automation']
  },
  {
    id: 3,
    title: 'Structure Agentic Chains with Shared Outputs',
    description: 'Build progressive processing chains where agents build on previous work with sequential outputs',
    icon: 'chain',
    highlights: ['Agent collaboration', 'Data flow design', 'Output chaining']
  },
  {
    id: 4,
    title: 'Work with 6 Leading Image Generation Models',
    description: 'Gain comprehensive experience with FAL Generative Media Cloud and advanced image generation workflows',
    icon: 'image',
    highlights: ['Multiple AI models', 'Media generation', 'Quality optimization']
  },
  {
    id: 5,
    title: 'Implement Full-Stack Data Management',
    description: 'Write data to Supabase, AWS S3 and send emails with Sendgrid for complete workflow automation',
    icon: 'database',
    highlights: ['Database operations', 'Cloud storage', 'Email integration']
  },
  {
    id: 6,
    title: 'Master Schema-Constrained AI Outputs',
    description: 'Prompt agents to output structured results and write high-quality HTML/CSS for dynamic frontend development',
    icon: 'schema',
    highlights: ['Structured outputs', 'Frontend generation', 'Quality control']
  },
  {
    id: 7,
    title: 'Create Publication-Ready Content',
    description: 'Compile bespoke text and images with Bannerbear into high-quality, publication-ready posts and media',
    icon: 'content',
    highlights: ['Content compilation', 'Professional output', 'Media production']
  }
];

export function CourseOutline() {
  const [openObjective, setOpenObjective] = useState<number | null>(1);

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'workflow':
        return <Workflow className="h-6 w-6" />;
      case 'code':
        return <Code2 className="h-6 w-6" />;
      case 'chain':
        return <Link className="h-6 w-6" />;
      case 'image':
        return <Image className="h-6 w-6" />;
      case 'database':
        return <Database className="h-6 w-6" />;
      case 'schema':
        return <FileCode className="h-6 w-6" />;
      case 'content':
        return <Layers className="h-6 w-6" />;
      default:
        return <Workflow className="h-6 w-6" />;
    }
  };

  return (
    <section id="outline" className="bg-white dark:bg-[#060606] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-4 text-4xl font-bold sm:text-5xl text-gray-900 dark:text-gray-100">What You'll Master</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              7 core learning objectives for building production-ready AI automations
            </p>
          </div>
        </motion.div>

        <div className="space-y-4">
          {learningObjectives.map((objective, index) => (
            <motion.div
              key={objective.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <TesseractLiquidGlass
                variant="card"
                enableScrollEffects={true}
                enableShimmer={openObjective === objective.id}
                className="overflow-hidden rounded-brand-lg border border-gray-200/50 shadow-brand-lg transition-all duration-700 group-hover:border-brand-primary group-hover:shadow-brand-xl dark:border-gray-700/50"
              >
              <button
                onClick={() => setOpenObjective(openObjective === objective.id ? null : objective.id)}
                className="flex w-full items-center justify-between px-6 py-4 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/50"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-brand bg-brand-accent/10 text-brand-accent">
                    {getIcon(objective.icon)}
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{objective.title}</h3>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                      {objective.description}
                    </p>
                  </div>
                </div>
                <ChevronDown
                  className={cn(
                    'h-5 w-5 transition-transform',
                    openObjective === objective.id && 'rotate-180'
                  )}
                />
              </button>

              <AnimatePresence>
                {openObjective === objective.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-200 dark:border-gray-700"
                  >
                    <div className="p-6">
                      <h4 className="mb-3 font-semibold text-gray-900 dark:text-gray-100">Key Skills You'll Develop:</h4>
                      <div className="grid gap-2 md:grid-cols-3">
                        {objective.highlights.map((highlight, highlightIndex) => (
                          <div
                            key={highlightIndex}
                            className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                          >
                            <div className="h-2 w-2 rounded-full bg-brand-accent"></div>
                            <span className="text-sm">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              </TesseractLiquidGlass>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
