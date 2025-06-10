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
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
            Master the <span className="gradient-text">Future Tech Stack</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Learn the tools that companies desperately need
          </p>
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
      </div>
    </section>
  );
}
