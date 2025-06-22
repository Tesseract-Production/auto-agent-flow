'use client';

import { motion } from 'framer-motion';
import { Code2, Cpu, Database, Cloud, Workflow, Sparkles } from 'lucide-react';

const technologies = [
  { icon: Code2, name: 'n8n', description: 'Visual workflow automation' },
  { icon: Cpu, name: 'AI Models', description: 'GPT-4, Claude, Flux' },
  { icon: Database, name: 'Databases', description: 'Supabase, PostgreSQL' },
  { icon: Cloud, name: 'Cloud APIs', description: '1000+ integrations' },
  { icon: Workflow, name: 'No-Code', description: 'Drag & drop builder' },
  { icon: Sparkles, name: 'AI Agents', description: 'Autonomous workflows' },
];

export function TechStack() {
  return (
    <section className="bg-white dark:bg-[#060606] px-4 py-16 sm:py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl text-gray-900 dark:text-gray-100">
              Master the <span className="gradient-text">Future Tech Stack</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Learn the tools that companies desperately need
            </p>
          </div>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-effect group cursor-pointer rounded-brand-lg p-6 text-center"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-brand bg-brand-accent/10 transition-colors group-hover:bg-brand-accent/20">
                <tech.icon className="h-8 w-8 text-brand-accent" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{tech.name}</h3>
              <p className="text-gray-600 dark:text-gray-400">{tech.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Workflow Visualization Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="mb-4 text-3xl font-bold tracking-tight">
              See the <span className="gradient-text">Workflows in Action</span>
            </h3>
            <p className="mb-12 text-xl text-gray-600 dark:text-gray-400">
              Real workflow canvases from our masterclass
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-effect rounded-brand-xl p-4"
            >
              <img
                src="/assets/images/flowise-agent-canvas-beauty-image-1.webp"
                alt="Flowise Agent Canvas - AI Workflow Design"
                className="w-full rounded-brand-lg"
              />
              <h4 className="mt-4 font-semibold">AI Agent Canvas</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Advanced agent workflow with custom tools
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-effect rounded-brand-xl p-4"
            >
              <img
                src="/assets/images/flowise-business-logic-flows-as-agents-canvas-shot-1.webp"
                alt="Flowise Business Logic Flow Canvas"
                className="w-full rounded-brand-lg"
              />
              <h4 className="mt-4 font-semibold">Business Logic Flows</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Complex business automation workflows
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
