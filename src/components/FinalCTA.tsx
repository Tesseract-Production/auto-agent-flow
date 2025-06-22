'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function FinalCTA() {

  return (
    <section className="bg-white dark:bg-[#060606] px-4 py-16 sm:py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-effect rounded-brand-xl p-8 text-center shadow-brand-glow sm:p-12"
        >
          {/* Urgency Indicators - commented out */}
          {/*
          <div className="mb-8 flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-brand-accent" />
              <span className="font-semibold">Only {spotsLeft} spots left</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-brand-accent" />
              <span className="font-semibold">{formatTime(timeLeft)} remaining</span>
            </div>
          </div>
          */}

          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Your Future in Automation <span className="gradient-text">Starts Today</span>
            </h2>

            <p className="mb-8 text-xl text-gray-600 dark:text-gray-400">
              Join 2,847+ students who&apos;ve transformed their careers. The demand for automation experts
              is exploding. Will you be ready?
            </p>
          </div>

          <div className="mb-8 flex flex-col justify-center gap-4 sm:flex-row">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary group px-10 py-5 text-lg"
              onClick={() => {
                window.open('https://academy.tesseract.nexus/course/n8n-full-stack-masterclass-2025-building-generative-multimedia-production-system', '_blank');
              }}
            >
              Start Learning Today
              <ArrowRight className="ml-2 inline-block h-5 w-5 transition-transform group-hover:translate-x-1" />
            </motion.button>
            <button className="btn-secondary px-10 py-5 text-lg">Download Course Syllabus</button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-gray-600 dark:text-gray-400">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              30-day money-back guarantee
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              Lifetime access & updates
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              Start earning in 30 days
            </span>
          </div>
        </motion.div>

        {/* Success Metric */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
            Average student ROI: <span className="text-brand-accent">847%</span> in first year
          </p>
        </motion.div>
      </div>
    </section>
  );
}
