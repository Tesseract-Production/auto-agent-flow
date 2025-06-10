'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    category: 'Getting Started',
    questions: [
      {
        q: 'Do I need any coding experience?',
        a: 'No! This masterclass is designed for complete beginners. We start from the absolute basics and build up your skills step by step. Many of our most successful students came from non-technical backgrounds.',
      },
      {
        q: 'How long does it take to complete the course?',
        a: 'The core content is 15+ hours, but most students complete it in 4-6 weeks working part-time. You have lifetime access, so you can learn at your own pace. Many students start earning within 3 months.',
      },
      {
        q: 'What equipment do I need?',
        a: "Just a computer with internet access. n8n runs in the cloud, so you don't need a powerful machine. We'll show you how to set everything up for free during the course.",
      },
    ],
  },
  {
    category: 'Career & Income',
    questions: [
      {
        q: 'Can I really make money with n8n automation?',
        a: 'Absolutely! Our students regularly earn $3,000-$15,000/month as automation consultants. The demand is huge - businesses desperately need people who can connect their tools and automate workflows.',
      },
      {
        q: 'What kind of jobs can I get after this course?',
        a: 'Automation Consultant, Workflow Developer, AI Integration Specialist, No-Code Developer, Process Automation Engineer, or start your own automation agency. We provide career guidance and job search support.',
      },
      {
        q: 'How quickly can I start earning?',
        a: 'Many students land their first client within 30-60 days. We teach you how to find clients, price your services, and deliver value from day one. Some students earn back their investment within weeks.',
      },
    ],
  },
  {
    category: 'Course Details',
    questions: [
      {
        q: 'Is this course updated regularly?',
        a: 'Yes! We update the course monthly as n8n releases new features. You get lifetime access to all updates. The AI landscape changes fast, and we keep you ahead of the curve.',
      },
      {
        q: 'Do I get support if I get stuck?',
        a: "You get access to our private Discord with 2,800+ members, weekly live Q&A calls, and direct instructor support. We're committed to your success - you're never alone in this journey.",
      },
      {
        q: 'What makes this different from free YouTube tutorials?',
        a: 'Structure, depth, and support. We provide a complete learning path, production-ready templates, real client projects, and a community. YouTube is great for basics, but we take you to professional level.',
      },
    ],
  },
];

export function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div className="glass-effect mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">
            <HelpCircle className="h-4 w-4 text-brand-accent" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="mb-4 text-4xl font-bold sm:text-5xl">Everything You Need to Know</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Get answers to common questions about the masterclass
          </p>
        </motion.div>

        <div className="space-y-8">
          {faqs.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <h3 className="mb-4 text-2xl font-semibold text-brand-accent">{category.category}</h3>
              <div className="space-y-3">
                {category.questions.map((item, index) => {
                  const id = `${categoryIndex}-${index}`;
                  const isOpen = openItems.includes(id);

                  return (
                    <div key={id} className="glass-effect overflow-hidden rounded-brand">
                      <button
                        onClick={() => toggleItem(id)}
                        className="flex w-full items-center justify-between px-6 py-4 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/50"
                      >
                        <span className="text-left font-medium">{item.q}</span>
                        <ChevronDown
                          className={cn(
                            'ml-4 h-5 w-5 flex-shrink-0 transition-transform',
                            isOpen && 'rotate-180'
                          )}
                        />
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="px-6 pb-4 text-gray-600 dark:text-gray-400">
                              {item.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-effect mt-12 rounded-brand-lg p-8 text-center"
        >
          <h3 className="mb-4 text-2xl font-semibold">Still Have Questions?</h3>
          <p className="mb-6 text-gray-600 dark:text-gray-400">
            Our team is here to help you make the right decision
          </p>
          <button className="btn-secondary">Contact Support</button>
        </motion.div>
      </div>
    </section>
  );
}
