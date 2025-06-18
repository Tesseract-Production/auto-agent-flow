'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';
import { TesseractLiquidGlass } from './TesseractLiquidGlass';
import { useTheme } from './ThemeProvider';
import { StarBorder } from './ui/star-border';
import Image from 'next/image';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

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
                width={140}
                height={36}
                priority
                className="h-8 w-auto sm:h-9"
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
                onClick={toggleTheme}
                className="rounded-brand p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5 text-gray-900 dark:text-gray-100" /> : <Moon className="h-5 w-5 text-gray-900 dark:text-gray-100" />}
              </button>
              <StarBorder 
                as="a"
                href="https://academy.tesseract.nexus/course/n8n-full-stack-masterclass-2025-building-generative-multimedia-production-system"
                target="_blank"
                rel="noopener noreferrer"
                color="rgb(224, 57, 47)"
                speed="4s"
                className="no-underline"
              >
                Enroll Now
              </StarBorder>
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
                  className="block text-lg font-medium text-gray-900 dark:text-gray-300"
                >
                  {item.label}
                </a>
              ))}
              <StarBorder 
                as="a"
                href="https://academy.tesseract.nexus/course/n8n-full-stack-masterclass-2025-building-generative-multimedia-production-system"
                target="_blank"
                rel="noopener noreferrer"
                color="rgb(224, 57, 47)"
                speed="4s"
                className="no-underline w-full"
              >
                Enroll Now
              </StarBorder>
            </div>
          </motion.div>
        )}
      </TesseractLiquidGlass>
    </nav>
  );
}
