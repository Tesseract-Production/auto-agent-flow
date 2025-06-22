'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, MessageCircle, Loader2 } from 'lucide-react';
import { TesseractLiquidGlass } from './TesseractLiquidGlass';
import { cn } from '@/lib/utils';

interface SupportPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SupportPopup({ isOpen, onClose }: SupportPopupProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    question: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    if (!formData.fullName.trim() || !formData.question.trim()) {
      setError('Please fill in all fields');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/support', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName.trim(),
          question: formData.question.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit question');
      }

      setIsSubmitted(true);
      setFormData({ fullName: '', question: '' });
      
      // Auto close after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        onClose();
      }, 3000);
    } catch {
      setError('Failed to submit your question. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (error) setError(''); // Clear error when user types
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <TesseractLiquidGlass
              variant="card"
              enableShimmer={false}
              className="w-full max-w-md bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-brand-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Contact Support
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        We're here to help you
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                    aria-label="Close support popup"
                  >
                    <X className="w-5 h-5 text-gray-500" />
                  </button>
                </div>

                {isSubmitted ? (
                  // Success State
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      Message Sent!
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Thanks for reaching out. We'll get back to you within 24 hours via email.
                    </p>
                  </motion.div>
                ) : (
                  // Form State
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Full Name Field */}
                    <div>
                      <label 
                        htmlFor="fullName" 
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={cn(
                          "w-full px-4 py-3 rounded-lg border transition-colors",
                          "bg-white dark:bg-gray-800",
                          "border-gray-300 dark:border-gray-600",
                          "text-gray-900 dark:text-gray-100",
                          "placeholder-gray-500 dark:placeholder-gray-400",
                          "focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20",
                          "disabled:opacity-50 disabled:cursor-not-allowed"
                        )}
                        placeholder="Enter your full name"
                        disabled={isSubmitting}
                        required
                      />
                    </div>

                    {/* Question Field */}
                    <div>
                      <label 
                        htmlFor="question" 
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Question or Comment
                      </label>
                      <textarea
                        id="question"
                        name="question"
                        value={formData.question}
                        onChange={handleChange}
                        rows={4}
                        className={cn(
                          "w-full px-4 py-3 rounded-lg border transition-colors resize-none",
                          "bg-white dark:bg-gray-800",
                          "border-gray-300 dark:border-gray-600",
                          "text-gray-900 dark:text-gray-100",
                          "placeholder-gray-500 dark:placeholder-gray-400",
                          "focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20",
                          "disabled:opacity-50 disabled:cursor-not-allowed"
                        )}
                        placeholder="How can we help you? Be as specific as possible..."
                        disabled={isSubmitting}
                        required
                      />
                    </div>

                    {/* Error Message */}
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"
                      >
                        <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
                      </motion.div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={cn(
                        "w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg",
                        "bg-brand-primary hover:bg-brand-secondary",
                        "text-white font-medium transition-all duration-200",
                        "disabled:opacity-50 disabled:cursor-not-allowed",
                        "focus:ring-2 focus:ring-brand-primary/20"
                      )}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </TesseractLiquidGlass>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}