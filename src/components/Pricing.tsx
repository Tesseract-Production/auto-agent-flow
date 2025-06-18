'use client';

import { motion } from 'framer-motion';
import { Check, Zap, Shield, Users, Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';
import { TesseractLiquidGlass } from './TesseractLiquidGlass';

const pricing = {
  free: {
    name: 'Free Resources',
    price: 0,
    originalPrice: 0,
    description: 'Core tutorial & essential assets',
    features: [
      '2.5 Hour core tutorial on YouTube',
      'All deconstructed project assets',
      'GitHub Gist with prompts & code',
      'Basic implementation guide',
      'Community support',
    ],
    cta: 'Access Free Resources',
    popular: false,
  },
  academy: {
    name: 'Full Academy Access',
    price: 299,
    originalPrice: 447,
    description: 'Complete masterclass experience',
    features: [
      'Everything in Free Resources',
      '6+ hours extended footage',
      'All 4 setup guides (Supabase, AWS S3, FAL.AI, Flowise)',
      'Full implementation guide',
      '20 custom tool functions',
      'Flowise agent templates',
      'Private community access',
      'Launch bonus: Group implementation calls',
    ],
    cta: 'Join the Academy',
    popular: true,
  },
  team: {
    name: 'Team License',
    price: 999,
    originalPrice: 1497,
    description: 'Train your entire team (4 seats)',
    features: [
      'Everything in Full Academy',
      '4 user licenses',
      'Priority support channel',
      'Team progress tracking',
      'Custom onboarding session',
      'Volume discount on additional seats',
    ],
    cta: 'Get Team Access',
    popular: false,
  },
};

const guarantees = [
  { icon: Shield, text: '30-day money-back guarantee' },
  { icon: Users, text: 'Join 2,847+ successful students' },
  { icon: Trophy, text: '90% land jobs within 6 months' },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-white dark:bg-[#060606] px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <TesseractLiquidGlass
            variant="interactive"
            enableShimmer={true}
            className="mb-4 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium"
          >
            <Zap className="h-4 w-4 text-brand-accent" />
            <span className="text-gray-900 dark:text-gray-100">Launch Special - Save $148 on Academy Access</span>
          </TesseractLiquidGlass>
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-4 text-4xl font-bold sm:text-5xl text-gray-900 dark:text-gray-100">Choose Your Learning Path</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Start free, upgrade when ready. Build production-ready AI automations at your own pace.
            </p>
          </div>
        </motion.div>

        {/* Bento Grid Pricing */}
        <div className="mb-12 grid gap-8 lg:grid-cols-3">
          {Object.entries(pricing).map(([key, plan], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <TesseractLiquidGlass
                variant={plan.popular ? 'interactive' : 'card'}
                enableShimmer={plan.popular}
                enableScrollEffects={true}
                className={cn(
                  'relative p-8 transition-all duration-300',
                  plan.popular && 'shadow-brand-glow ring-2 ring-brand-accent'
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 z-10 -translate-x-1/2">
                    <TesseractLiquidGlass 
                      variant="interactive" 
                      enableShimmer={true}
                      className="rounded-full bg-brand-accent px-4 py-1 text-sm font-medium text-white shadow-lg"
                    >
                      <span className="text-white">Most Popular</span>
                    </TesseractLiquidGlass>
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-gray-100">{plan.name}</h3>
                  <p className="mb-4 text-gray-600 dark:text-gray-400">{plan.description}</p>
                  <div className="flex items-baseline gap-2">
                    {plan.price === 0 ? (
                      <span className="text-4xl font-bold text-gray-900 dark:text-gray-100">Free</span>
                    ) : (
                      <>
                        <span className="text-4xl font-bold text-gray-900 dark:text-gray-100">${plan.price}</span>
                        {plan.originalPrice > plan.price && (
                          <span className="text-xl text-gray-500 dark:text-gray-400 line-through">
                            ${plan.originalPrice}
                          </span>
                        )}
                      </>
                    )}
                  </div>
                </div>

                <ul className="mb-8 space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-accent" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={cn(
                    'w-full rounded-brand py-4 font-semibold transition-all duration-300',
                    plan.popular ? 'btn-primary' : 'btn-secondary'
                  )}
                >
                  {plan.cta}
                </button>
              </TesseractLiquidGlass>
            </motion.div>
          ))}
        </div>

        {/* Trust Guarantees */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-wrap justify-center gap-8"
        >
          {guarantees.map((guarantee, index) => (
            <div key={index} className="flex items-center gap-3">
              <guarantee.icon className="h-6 w-6 text-brand-accent" />
              <span className="text-gray-700 dark:text-gray-300">{guarantee.text}</span>
            </div>
          ))}
        </motion.div>

        {/* Payment Options - Temporarily commented out */}
        {/* 
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-effect rounded-brand-lg p-8 text-center"
        >
          <h3 className="mb-4 text-2xl font-semibold">Flexible Payment Options</h3>
          <p className="mb-6 text-gray-600 dark:text-gray-400">
            Academy: 3-payment plan available ($159 × 3 months) • No credit check required
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <img src="/payment-stripe.svg" alt="Stripe" className="h-8" />
            <img src="/payment-paypal.svg" alt="PayPal" className="h-8" />
            <img src="/payment-klarna.svg" alt="Klarna" className="h-8" />
          </div>
        </motion.div>
        */}
      </div>
    </section>
  );
}
