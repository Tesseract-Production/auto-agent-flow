'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';
import { TesseractLiquidGlass } from './TesseractLiquidGlass';
import Image from 'next/image';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const navItems = [
    { label: 'Course Outline', href: '#outline' },
    { label: 'Success Stories', href: '#testimonials' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className="fixed left-0 right-0 top-3 z-50 px-4">
      <TesseractLiquidGlass
        variant="nav"
        enableScrollEffects={true}
        className={cn('mx-auto max-w-7xl rounded-brand-lg transition-all duration-300', scrolled ? 'shadow-brand' : '')}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between sm:h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center"
            >
              {/* Replace /assets/logos/tesseract-logo.webp with your actual logo file */}
              <Image
                src="/assets/logos/tesseract-logo.webp"
                alt="Tesseract n8n Masterclass"
                width={180}
                height={48}
                priority
                className="h-10 w-auto sm:h-12"
              />
            </motion.div>

            {/* Desktop Nav */}
            <div className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-gray-700 transition-colors hover:text-brand-accent dark:text-gray-300"
                >
                  {item.label}
                </motion.a>
              ))}
              <button
                onClick={() => setIsDark(!isDark)}
                className="rounded-brand p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              <button className="btn-primary">Enroll Now</button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 md:hidden">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-effect border-t border-gray-200 dark:border-gray-700 md:hidden"
          >
            <div className="space-y-4 px-4 py-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-medium"
                >
                  {item.label}
                </a>
              ))}
              <button className="btn-primary w-full">Enroll Now</button>
            </div>
          </motion.div>
        )}
      </TesseractLiquidGlass>
    </nav>
  );
}
