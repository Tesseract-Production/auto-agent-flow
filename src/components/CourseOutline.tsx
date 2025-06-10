'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Clock, Video, FileText, Code2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const modules = [
  {
    id: 1,
    title: 'Foundation: Understanding n8n & AI Orchestration',
    duration: '2.5 hours',
    lessons: 12,
    content: [
      { type: 'video', title: 'Welcome & Course Overview', duration: '15 min' },
      { type: 'video', title: 'Setting Up Your Environment', duration: '20 min' },
      { type: 'code', title: 'Your First Webhook Workflow', duration: '30 min' },
      { type: 'text', title: 'Understanding Node-Based Automation', duration: '10 min' },
    ],
  },
  {
    id: 2,
    title: 'AI Agents & Dynamic Workflows',
    duration: '4 hours',
    lessons: 18,
    content: [
      { type: 'video', title: 'Introduction to AI Agents', duration: '25 min' },
      { type: 'code', title: 'Building Your First Agent', duration: '45 min' },
      { type: 'video', title: 'Connecting Multiple AI Models', duration: '30 min' },
      { type: 'text', title: 'Best Practices for Agent Design', duration: '15 min' },
    ],
  },
  {
    id: 3,
    title: 'Media Generation & Processing',
    duration: '3.5 hours',
    lessons: 15,
    content: [
      { type: 'video', title: 'Working with FAL.AI & Flux', duration: '30 min' },
      { type: 'code', title: 'Automated Image Generation Pipeline', duration: '40 min' },
      { type: 'video', title: 'Video Processing with AI', duration: '35 min' },
      { type: 'text', title: 'Cost Optimization Strategies', duration: '20 min' },
    ],
  },
  {
    id: 4,
    title: 'Production-Ready Systems',
    duration: '5 hours',
    lessons: 22,
    content: [
      { type: 'video', title: 'Error Handling & Debugging', duration: '45 min' },
      { type: 'code', title: 'Building Scalable Architectures', duration: '60 min' },
      { type: 'video', title: 'Database Integration & Storage', duration: '40 min' },
      { type: 'text', title: 'Deployment Best Practices', duration: '25 min' },
    ],
  },
];

export function CourseOutline() {
  const [openModule, setOpenModule] = useState<number | null>(1);

  const getIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <Video className="h-4 w-4" />;
      case 'code':
        return <Code2 className="h-4 w-4" />;
      case 'text':
        return <FileText className="h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <section id="outline" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold sm:text-5xl">What You'll Learn</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            15+ hours of hands-on content across 67 lessons
          </p>
        </motion.div>

        <div className="space-y-4">
          {modules.map((module, index) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect overflow-hidden rounded-brand-lg"
            >
              <button
                onClick={() => setOpenModule(openModule === module.id ? null : module.id)}
                className="flex w-full items-center justify-between px-6 py-4 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/50"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-brand bg-brand-accent/10 font-bold text-brand-accent">
                    {module.id}
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">{module.title}</h3>
                    <div className="mt-1 flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {module.duration}
                      </span>
                      <span>{module.lessons} lessons</span>
                    </div>
                  </div>
                </div>
                <ChevronDown
                  className={cn(
                    'h-5 w-5 transition-transform',
                    openModule === module.id && 'rotate-180'
                  )}
                />
              </button>

              <AnimatePresence>
                {openModule === module.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-200 dark:border-gray-700"
                  >
                    <div className="space-y-3 p-6">
                      {module.content.map((lesson, lessonIndex) => (
                        <div
                          key={lessonIndex}
                          className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                        >
                          <div className="text-brand-accent">{getIcon(lesson.type)}</div>
                          <span className="flex-1">{lesson.title}</span>
                          <span className="text-sm text-gray-500">{lesson.duration}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
