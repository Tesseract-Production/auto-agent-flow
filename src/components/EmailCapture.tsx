'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Clock, Users } from 'lucide-react';
import { TesseractLiquidGlass } from './TesseractLiquidGlass';

export function EmailCapture() {
  const [email, setEmail] = useState('');
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24 hours in seconds
  const [showNotification, setShowNotification] = useState<string | false>(false);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Social proof notifications
  useEffect(() => {
    const names = ['Sarah M.', 'Marcus T.', 'Jennifer K.', 'Alex P.', 'David L.'];
    const actions = ['just enrolled', 'started Module 1', 'completed their first workflow'];

    const showRandomNotification = () => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomAction = actions[Math.floor(Math.random() * actions.length)];

      setShowNotification(`${randomName} ${randomAction}`);

      setTimeout(() => setShowNotification(false), 4000);
    };

    const interval = setInterval(showRandomNotification, 15000);
    setTimeout(showRandomNotification, 3000); // Show first one after 3s

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.warn('Email submitted:', email);
  };

  return (
    <>
      {/* Social Proof Notification */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="glass-effect fixed right-4 top-4 z-50 rounded-brand px-6 py-4 shadow-brand-lg"
          >
            <div className="flex items-center gap-3">
              <Users className="h-5 w-5 text-brand-accent" />
              <p className="text-sm font-medium">{showNotification}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <TesseractLiquidGlass
              variant="hero"
              enableColorAdaptation={true}
              enableShimmer={true}
              className="rounded-brand-xl p-8 shadow-brand-xl sm:p-12"
            >
              <div className="mb-8 text-center">
                <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
                  Join 2,847+ Automation Pioneers
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Get instant access to the masterclass and start building today
                </p>
              </div>

              {/* Countdown Timer */}
              <div className="mb-8 flex justify-center">
                <div className="flex items-center gap-2 rounded-brand bg-brand-accent/10 px-6 py-3 font-mono text-xl text-brand-accent">
                  <Clock className="h-5 w-5" />
                  <span>{formatTime(timeLeft)}</span>
                </div>
              </div>

              {/* Email Form */}
              <form
                onSubmit={handleSubmit}
                className="mx-auto flex max-w-lg flex-col gap-4 sm:flex-row"
              >
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full rounded-brand border border-gray-200 bg-white py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-brand-accent dark:border-gray-700 dark:bg-brand-dark"
                  />
                </div>
                <button type="submit" className="btn-primary whitespace-nowrap">
                  Get Instant Access
                </button>
              </form>

              <p className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
                🔒 Your information is 100% secure. No spam, ever.
              </p>
            </TesseractLiquidGlass>
          </motion.div>
        </div>
      </section>
    </>
  );
}
