'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
// import Image from 'next/image'
import { useState } from 'react';
import { TesseractLiquidGlass } from './TesseractLiquidGlass';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Martinez',
    role: 'Former Marketing Manager → Automation Consultant',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    content:
      'After being laid off, I discovered n8n through this course. Within 3 months, I was earning more as a freelance automation consultant than my previous job. The support community is incredible.',
    rating: 5,
    income: '$8,500/month',
    timeToSuccess: '3 months',
  },
  {
    id: 2,
    name: 'Marcus Thompson',
    role: 'Pastor → Tech Entrepreneur',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    content:
      'After 19 years in ministry, I needed a career change. This course made automation accessible. Now I run a successful agency helping churches automate their operations.',
    rating: 5,
    income: '$12,000/month',
    timeToSuccess: '5 months',
  },
  {
    id: 3,
    name: 'Jennifer Kim',
    role: 'Teacher → AI Workflow Developer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    content:
      'The step-by-step approach was perfect for someone with no tech background. I went from zero to building complex AI workflows. Best investment I ever made.',
    rating: 5,
    income: '$6,200/month',
    timeToSuccess: '4 months',
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-white dark:bg-[#060606] px-4 py-[120px] sm:py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl text-gray-900 dark:text-gray-100">Real People, Real Transformations</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Join thousands who've changed their careers with n8n automation
            </p>
          </div>
        </motion.div>

        <div className="mb-12 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <TesseractLiquidGlass
                variant="card"
                enableScrollEffects={true}
                enableShimmer={activeIndex === index}
                className="group relative overflow-hidden p-8 transition-all duration-300 hover:shadow-brand-xl"
              >
                <Quote className="absolute right-4 top-4 h-8 w-8 text-brand-accent/20" />

                <div className="mb-6 flex items-center gap-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-full bg-gradient-to-br from-brand-primary to-brand-accent p-1">
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-white dark:bg-brand-dark">
                      <span className="gradient-text text-xl font-bold">
                        {testimonial.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>

                <div className="mb-4 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-brand-accent text-brand-accent" />
                  ))}
                </div>

                <p className="mb-6 text-gray-700 dark:text-gray-300">"{testimonial.content}"</p>

                <div className="grid grid-cols-2 gap-4 border-t border-gray-200 pt-6 dark:border-gray-700">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Now earning</p>
                    <p className="font-bold text-brand-accent">{testimonial.income}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Time to success</p>
                    <p className="font-bold">{testimonial.timeToSuccess}</p>
                  </div>
                </div>
              </TesseractLiquidGlass>
            </motion.div>
          ))}
        </div>

        {/* Video Testimonial CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="btn-secondary group">
            Watch Video Success Stories
            <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
