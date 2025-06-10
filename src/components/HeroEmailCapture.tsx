'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Loader2, Mail } from 'lucide-react';
import { useEmailSubscription } from '@/hooks/useEmailSubscription';
import { TesseractLiquidGlass } from './TesseractLiquidGlass';

export function HeroEmailCapture() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { subscribe, isLoading, error, success } = useEmailSubscription();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim() || !firstName.trim()) return;

    const result = await subscribe(email, 'hero', {
      firstName: firstName.trim(),
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString(),
      page: 'landing-hero',
    });

    if (result.alreadySubscribed || success) {
      setIsSubmitted(true);
      setEmail('');
      setFirstName('');
    }
  };

  if (isSubmitted || success) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
        <TesseractLiquidGlass
          variant="interactive"
          enableShimmer={true}
          className="flex items-center justify-center gap-3 border border-green-200 bg-green-50 px-6 py-4 dark:border-green-800 dark:bg-green-900/20"
        >
          <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
          <span className="font-medium text-green-700 dark:text-green-300">
            Thanks! Check your email for exclusive bonuses.
          </span>
        </TesseractLiquidGlass>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="mx-auto max-w-md"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First name"
          className="glass-effect w-full rounded-brand border border-gray-200 py-4 px-4 text-gray-900 placeholder-gray-500 transition-all duration-300 focus:border-transparent focus:ring-2 focus:ring-brand-accent dark:border-gray-700 dark:text-gray-100 dark:placeholder-gray-400"
          required
          disabled={isLoading}
        />
        
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email for free bonus materials"
            className="glass-effect w-full rounded-brand border border-gray-200 py-4 pl-12 pr-4 text-gray-900 placeholder-gray-500 transition-all duration-300 focus:border-transparent focus:ring-2 focus:ring-brand-accent dark:border-gray-700 dark:text-gray-100 dark:placeholder-gray-400"
            required
            disabled={isLoading}
          />
        </div>

        <motion.button
          type="submit"
          disabled={isLoading || !email.trim() || !firstName.trim()}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="btn-primary group flex w-full items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isLoading ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>Subscribing...</span>
            </>
          ) : (
            <>
              <span>Get Free Bonus Materials</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </motion.button>

        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-sm text-red-600 dark:text-red-400"
          >
            {error}
          </motion.p>
        )}

        <p className="text-center text-xs text-gray-500 dark:text-gray-400">
          Get instant access to 5 exclusive automation templates + course preview
        </p>
      </form>
    </motion.div>
  );
}
