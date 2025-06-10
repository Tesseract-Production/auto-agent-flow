'use client';

import { motion } from 'framer-motion';
import { Award, Building2, Users2, Briefcase } from 'lucide-react';

const achievements = [
  { icon: Award, label: '9+ Years in Automation', value: 'Since 2015' },
  { icon: Building2, label: 'Built 500+ Workflows', value: 'For Fortune 500s' },
  { icon: Users2, label: 'Taught 2,847+ Students', value: 'Globally' },
  { icon: Briefcase, label: '$2M+ Client Revenue', value: 'Generated' },
];

export function Instructor() {
  return (
    <section className="bg-gradient-to-b from-transparent to-brand-primary/5 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid items-center gap-12 lg:grid-cols-2"
        >
          {/* Image Section */}
          <div className="relative">
            <div className="relative mx-auto aspect-square w-full max-w-md">
              <div className="absolute inset-0 rounded-brand-xl bg-gradient-to-br from-brand-primary to-brand-accent opacity-20" />
              <div className="glass-effect relative flex h-full items-center justify-center rounded-brand-xl p-8">
                <div className="text-center">
                  <div className="mx-auto mb-6 h-48 w-48 rounded-full bg-gradient-to-br from-brand-primary to-brand-accent p-1">
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-white dark:bg-brand-dark">
                      <span className="gradient-text text-6xl font-bold">TN</span>
                    </div>
                  </div>
                  <h3 className="mb-2 text-2xl font-bold">Tesseract Nexus</h3>
                  <p className="text-gray-600 dark:text-gray-400">Lead Instructor</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div>
            <h2 className="mb-6 text-4xl font-bold sm:text-5xl">
              Learn from a <span className="gradient-text">Proven Expert</span>
            </h2>
            <p className="mb-8 text-xl text-gray-600 dark:text-gray-400">
              I've spent the last 9 years mastering automation, building systems for Fortune 500
              companies, and teaching thousands how to transform their careers with n8n.
            </p>

            <div className="mb-8 grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <achievement.icon className="mt-1 h-6 w-6 flex-shrink-0 text-brand-accent" />
                  <div>
                    <p className="font-semibold">{achievement.label}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{achievement.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <blockquote className="glass-effect rounded-brand border-l-4 border-brand-accent p-6">
              <p className="mb-4 text-lg italic text-gray-700 dark:text-gray-300">
                "My mission is simple: democratize automation. You don't need a CS degree or years
                of coding experience. With the right guidance, anyone can build powerful AI
                workflows that change lives."
              </p>
              <cite className="text-gray-600 dark:text-gray-400">— Tesseract Nexus</cite>
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
