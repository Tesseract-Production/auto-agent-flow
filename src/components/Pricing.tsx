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
    price: 199,
    originalPrice: 299,
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

// Commented out team pricing - keep for future use
/*
const teamPricing = {
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
*/

const guarantees = [
  { icon: Shield, text: '30-day money-back guarantee' },
  { icon: Users, text: 'Join 2,847+ successful students' },
  { icon: Trophy, text: '90% land jobs within 6 months' },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-white dark:bg-[#060606] px-4 py-16 sm:py-16 sm:px-6 lg:px-8"
      aria-labelledby="pricing-title"
      role="region"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div role="banner" aria-label="Limited time offer">
            <TesseractLiquidGlass
              variant="interactive"
              enableShimmer={false}
              className="mb-4 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium"
            >
              <Zap className="h-4 w-4 text-brand-accent" aria-hidden="true" />
              <span className="text-gray-900 dark:text-gray-100">Launch Special - Save $100 on Academy Access</span>
            </TesseractLiquidGlass>
          </div>
          <div className="max-w-4xl mx-auto">
            <h2 id="pricing-title" className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl text-gray-900 dark:text-gray-100">Choose Your Learning Path</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Start free, upgrade when ready. Build production-ready AI automations at your own pace.
            </p>
          </div>
        </motion.div>

        {/* Bento Grid Pricing */}
        <div className="mb-12 mt-8 grid gap-8 lg:grid-cols-2" role="group" aria-labelledby="pricing-options-label">
          <h3 id="pricing-options-label" className="sr-only">Pricing Options</h3>
          {Object.entries(pricing)
            .filter(([key]) => key !== 'team') // Hide team card
            .map(([key, plan]) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
              role="article"
              aria-labelledby={`plan-title-${key}`}
              aria-describedby={`plan-description-${key} plan-price-${key} plan-features-${key}`}
            >
              <TesseractLiquidGlass
                variant={plan.popular ? 'interactive' : 'card'}
                enableShimmer={false}
                enableScrollEffects={false}
                className={cn(
                  'relative p-8 transition-all duration-300',
                  plan.popular && 'shadow-brand-glow ring-2 ring-brand-accent'
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-6 left-1/2 z-10 -translate-x-1/2">
                    <div className="rounded-full bg-brand-accent px-4 py-2 text-sm font-medium text-white shadow-lg" role="banner" aria-label="Most popular pricing plan">
                      <span className="text-white">Most Popular</span>
                    </div>
                  </div>
                )}

                <div className="mb-8">
                  <h3 id={`plan-title-${key}`} className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">{plan.name}</h3>
                  <p id={`plan-description-${key}`} className="mb-4 text-gray-600 dark:text-gray-400">{plan.description}</p>
                  <div id={`plan-price-${key}`} className="flex items-baseline gap-2" role="group" aria-label={`Price information for ${plan.name}`}>
                    {plan.price === 0 ? (
                      <span className="text-4xl font-bold text-gray-900 dark:text-gray-100" aria-label="Free plan">Free</span>
                    ) : (
                      <>
                        <span className="text-4xl font-bold text-gray-900 dark:text-gray-100" aria-label={`Current price $${plan.price}`}>${plan.price}</span>
                        {plan.originalPrice > plan.price && (
                          <span className="text-xl text-gray-500 dark:text-gray-400 line-through" aria-label={`Original price $${plan.originalPrice}`}>
                            ${plan.originalPrice}
                          </span>
                        )}
                      </>
                    )}
                  </div>
                </div>

                <ul id={`plan-features-${key}`} className="mb-8 space-y-4" role="list" aria-label={`Features included in ${plan.name} plan`}>
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3" role="listitem">
                      <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-accent" aria-hidden="true" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className={cn(
                    'w-full rounded-brand py-4 font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900',
                    plan.popular ? 'btn-primary' : 'btn-secondary'
                  )}
                  onClick={() => {
                    if (key === 'academy') {
                      window.open('https://academy.tesseract.nexus/course/n8n-full-stack-masterclass-2025-building-generative-multimedia-production-system', '_blank');
                    }
                  }}
                  aria-label={`${plan.cta} - ${plan.name} plan for ${plan.price === 0 ? 'free' : '$' + plan.price}`}
                  aria-describedby={`plan-description-${key} plan-features-${key}`}
                >
                  {plan.cta}
                </button>
              </TesseractLiquidGlass>
            </motion.div>
          ))}
          
          {/* Udemy Option - Smaller Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex justify-center"
            role="article"
            aria-labelledby="udemy-plan-title"
            aria-describedby="udemy-plan-description udemy-plan-price"
          >
            <TesseractLiquidGlass
              variant="card"
              enableShimmer={false}
              className="max-w-md p-6 transition-all duration-300 hover:shadow-lg"
            >
              <div className="text-center">
                <h3 id="udemy-plan-title" className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">Udemy Alternative</h3>
                <p id="udemy-plan-description" className="mb-4 text-sm text-gray-600 dark:text-gray-400">Prefer Udemy's platform? Get the course there too.</p>
                <div id="udemy-plan-price" className="mb-4" role="group" aria-label="Price information for Udemy course">
                  <span className="text-2xl font-bold text-gray-900 dark:text-gray-100" aria-label="Price $199">$199</span>
                </div>
                <button
                  type="button"
                  className="w-full rounded-brand py-3 text-sm font-semibold btn-secondary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900"
                  onClick={() => {
                    window.open('https://www.udemy.com/course/n8n-masterclass-build-multi-agent-ai-api-orchestrations/?referralCode=46746C047330EF867E46', '_blank');
                  }}
                  aria-label="View course on Udemy platform - opens in new tab"
                  aria-describedby="udemy-plan-description udemy-plan-price"
                >
                  View on Udemy
                </button>
              </div>
            </TesseractLiquidGlass>
          </motion.div>
        </div>

        {/* Trust Guarantees */}
        <div className="mb-12 flex flex-wrap justify-center gap-8" role="group" aria-labelledby="trust-guarantees-label">
          <h3 id="trust-guarantees-label" className="sr-only">Trust and Guarantees</h3>
          {guarantees.map((guarantee, index) => (
            <div key={index} className="flex items-center gap-3" role="listitem" aria-label={guarantee.text}>
              <guarantee.icon className="h-6 w-6 text-brand-accent" aria-hidden="true" />
              <span className="text-gray-700 dark:text-gray-300">{guarantee.text}</span>
            </div>
          ))}
        </div>

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
