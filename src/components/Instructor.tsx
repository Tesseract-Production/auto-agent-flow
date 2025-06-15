'use client';

import { motion } from 'framer-motion';
import { Award, Building2, Users2, Briefcase } from 'lucide-react';

const achievements = [
  { icon: Award, label: '9 Years Product Development', value: 'AI & Legacy Software' },
  { icon: Building2, label: 'Alumni Programs', value: 'Antler NYC, Founder Institute' },
  { icon: Users2, label: 'Specialized AI Stacks', value: 'Privacy-First Agentic Systems' },
  { icon: Briefcase, label: 'Ex. Native Instruments', value: 'Plugin Alliance' },
];

export function Instructor() {
  return (
    <section className="bg-white dark:bg-[#060606] px-4 py-20 sm:px-6 lg:px-8">
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
                      <span className="gradient-text text-6xl font-bold">V</span>
                    </div>
                  </div>
                  <h3 className="mb-2 text-2xl font-bold">Vadim</h3>
                  <p className="text-gray-600 dark:text-gray-400">Full Stack Developer & Augmented AI Engineer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div>
            <h2 className="mb-6 text-4xl font-bold sm:text-5xl text-gray-900 dark:text-gray-100">
              Learn from a <span className="gradient-text">Product Creator & AI Builder</span>
            </h2>
            <p className="mb-8 text-xl text-gray-600 dark:text-gray-400">
              For the past 9 years, I've been cultivating products and experiences in both AI-native and legacy software development. I specialize in personalized, privacy-first Agentic Stacks that produce higher quality outputs and are more cost-effective to scale.
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
                "AI is the ultimate tool for productizing yourself into an extendable and autonomous system. I spend a lot of time working with those who have specialized domain knowledge and want to enrich it with the latest that Machine Learning and AI have to offer."
              </p>
              <cite className="text-gray-600 dark:text-gray-400">— Vadim</cite>
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
