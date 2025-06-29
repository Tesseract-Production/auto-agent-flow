'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { TesseractLiquidGlass } from './TesseractLiquidGlass';
import { SupportPopup } from './SupportPopup';

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
        a: 'The core content is 8+ hours, but most students complete it in 4-6 weeks working part-time. You have lifetime access, so you can learn at your own pace. Many students start earning within 3 months.',
      },
      {
        q: 'What equipment do I need?',
        a: "Just a computer with internet access. n8n runs in the cloud or locally and all modern computers can handle it.",
      },
    ],
  },
  {
    category: 'Career & Income',
    questions: [
      {
        q: 'Can I really make money with n8n automation?',
        a: 'Absolutely! There are many career paths that you can pursue once you master n8n. Automation agencies and consultants are growing fast. The demand is huge - businesses desperately need people who can connect new AI tools to their legacy stacks and automate workflows.',
      },
      {
        q: 'What kind of jobs can I get after this course?',
        a: 'Automation Consultant, Workflow Developer, AI Integration Specialist, No-Code Developer, Process Automation Engineer, or start your own automation agency. We provide basic career guidance and tips.',
      },
      {
        q: 'How quickly can I start earning?',
        a: 'Students can land their first client within 60-120 days. While we focus on teaching you how to do the technical part, our Slack/Discord/WhatsApp based communities can help you ideate how to get clients, price your services, and deliver value from day one. It is possible to earn your investment within weeks.',
      },
    ],
  },
  {
    category: 'Course Details',
    questions: [
      {
        q: 'Is this course updated regularly?',
        a: 'Yes! We update the course monthly as n8n releases new features and core updates. You get lifetime access to all updates. The AI landscape changes super fast in 2025, and we do our best to keep you ahead of the curve.',
      },
      {
        q: 'Do I get support if I get stuck?',
        a: "You get access to our private Discord with 100+ members, periodic live Q&A calls, and direct instructor support. We're committed to your success - you're never alone in this journey.",
      },
      {
        q: 'What makes this different from free YouTube tutorials?',
        a: 'Structure, depth, and support. Most YouTube material shows you how to get things up and running. We provide the full production automation and the A-Z of how it all works. Expect a complete learning roadmap, an n8n based API endpoint, path to real client projects, and a community. YouTube is great for basics, but we take you to full scale pro faster than most.',
      },
    ],
  },
];

export function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [isSupportPopupOpen, setIsSupportPopupOpen] = useState(false);

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="bg-white dark:bg-[#060606] px-4 sm:px-6 lg:px-8 py-16 sm:py-12">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <TesseractLiquidGlass
            variant="interactive"
            enableShimmer={true}
            className="inline-flex items-center gap-2 mb-4 px-6 py-3 rounded-full font-medium text-sm"
          >
            <HelpCircle className="w-4 h-4 text-brand-accent" />
            <span>Frequently Asked Questions</span>
          </TesseractLiquidGlass>
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-4 font-bold text-gray-900 dark:text-gray-100 text-4xl sm:text-5xl tracking-tight">Everything You Need to Know</h2>
            <p className="text-gray-600 dark:text-gray-400 text-xl">
              Get answers to common questions about the masterclass
            </p>
          </div>
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
              <h3 className="mb-4 font-semibold text-brand-accent text-2xl tracking-tight">{category.category}</h3>
              <div className="space-y-3">
                {category.questions.map((item, index) => {
                  const id = `${categoryIndex}-${index}`;
                  const isOpen = openItems.includes(id);

                  return (
                    <motion.div
                      key={id}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="group"
                    >
                      <TesseractLiquidGlass
                        variant="card"
                        enableScrollEffects={true}
                        enableShimmer={isOpen}
                        className="shadow-brand group-hover:shadow-brand-lg border border-gray-200/50 dark:border-gray-700/50 group-hover:border-brand-primary rounded-brand-lg overflow-hidden transition-all duration-700"
                      >
                        <button
                          onClick={() => toggleItem(id)}
                          className="flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-800/50 px-6 py-4 w-full transition-colors"
                        >
                          <span className="font-medium text-left text-gray-900 dark:text-gray-100">{item.q}</span>
                          <ChevronDown
                            className={cn(
                              'ml-4 h-5 w-5 flex-shrink-0 transition-transform text-brand-accent',
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
                              className="border-gray-200 dark:border-gray-700 border-t"
                            >
                              <div className="px-6 py-4 text-gray-600 dark:text-gray-400">
                                {item.a}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </TesseractLiquidGlass>
                    </motion.div>
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
          className="mt-12"
        >
          <TesseractLiquidGlass
            variant="card"
            enableShimmer={true}
            className="p-8 text-center"
          >
            <div className="mb-4 flex justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-brand-primary to-brand-accent">
                <HelpCircle className="h-6 w-6 text-white" />
              </div>
            </div>
            <h3 className="mb-4 font-semibold text-2xl tracking-tight text-gray-900 dark:text-gray-100">Still Have Questions?</h3>
            <p className="mb-6 text-gray-600 dark:text-gray-400">
              Our team is here to help you make the right decision
            </p>
            <button 
              onClick={() => setIsSupportPopupOpen(true)}
              className="btn-secondary"
            >
              Contact Support
            </button>
          </TesseractLiquidGlass>
        </motion.div>
      </div>

      <SupportPopup 
        isOpen={isSupportPopupOpen}
        onClose={() => setIsSupportPopupOpen(false)}
      />
    </section>
  );
}
