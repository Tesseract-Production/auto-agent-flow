'use client';

import { motion } from 'framer-motion';
import { Check, Zap, Shield, Users, Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';
import { TesseractLiquidGlass } from './TesseractLiquidGlass';

const pricing = {
  basic: {
    name: 'Self-Paced',
    price: 449,
    originalPrice: 597,
    description: 'Perfect for independent learners',
    features: [
      'Full course access (15+ hours)',
      '50+ production templates',
      'Community Discord access',
      'Monthly live Q&A calls',
      'Lifetime updates',
      'Certificate of completion',
    ],
    cta: 'Start Learning Today',
    popular: false,
  },
  pro: {
    name: 'Professional',
    price: 849,
    originalPrice: 1197,
    description: 'Fast-track your automation career',
    features: [
      'Everything in Self-Paced',
      '1-on-1 onboarding call (30 min)',
      'Weekly group coaching calls',
      'Priority Discord support',
      'Client acquisition blueprint',
      'Agency setup templates',
      'Resume & portfolio review',
      'Job placement assistance',
    ],
    cta: 'Accelerate Your Success',
    popular: true,
  },
  team: {
    name: 'Team License',
    price: 1497,
    originalPrice: 2497,
    description: 'Train your entire team',
    features: [
      'Everything in Professional',
      '5 user licenses',
      'Custom onboarding workshop',
      'Private Slack channel',
      'Team progress dashboard',
      'Bulk discount on additional seats',
    ],
    cta: 'Transform Your Team',
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
      className="bg-gradient-to-b from-transparent via-brand-primary/5 to-transparent px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div className="glass-effect mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">
            <Zap className="h-4 w-4 text-brand-accent" />
            <span>Limited Time Offer - Save up to $1,000</span>
          </div>
          <h2 className="mb-4 text-4xl font-bold sm:text-5xl">Investment in Your Future</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Choose the plan that fits your goals. Upgrade anytime.
          </p>
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
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <TesseractLiquidGlass variant="interactive" enableShimmer={true}>
                      <span className="rounded-full bg-brand-accent px-4 py-1 text-sm font-medium text-white">
                        Most Popular
                      </span>
                    </TesseractLiquidGlass>
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="mb-2 text-2xl font-bold">{plan.name}</h3>
                  <p className="mb-4 text-gray-600 dark:text-gray-400">{plan.description}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-xl text-gray-500 line-through">
                      ${plan.originalPrice}
                    </span>
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

        {/* Payment Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-effect rounded-brand-lg p-8 text-center"
        >
          <h3 className="mb-4 text-2xl font-semibold">Flexible Payment Options</h3>
          <p className="mb-6 text-gray-600 dark:text-gray-400">
            Split your payment into 3 monthly installments • No credit check required
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <img src="/payment-stripe.svg" alt="Stripe" className="h-8" />
            <img src="/payment-paypal.svg" alt="PayPal" className="h-8" />
            <img src="/payment-klarna.svg" alt="Klarna" className="h-8" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
