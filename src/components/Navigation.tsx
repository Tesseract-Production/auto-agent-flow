'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';
import { TesseractLiquidGlass } from './TesseractLiquidGlass';
import { useTheme } from './ThemeProvider';
import { StarBorder } from './ui/star-border';
import { ScrollProgressTracker } from './ScrollProgressTracker';
import Image from 'next/image';
import Link from 'next/link';

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
    { label: 'Course Outline', href: '#course-outline' },
    // { label: 'Success Stories', href: '#testimonials' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className="fixed left-0 right-0 top-3 z-50 px-4" role="navigation" aria-label="Main navigation">
      <TesseractLiquidGlass
        variant="nav"
        enableScrollEffects={true}
        className={cn(
          'mx-auto max-w-7xl rounded-brand-lg transition-all duration-300',
          'bg-white/85 dark:bg-gray-900/85 backdrop-blur-md',
          'border border-gray-200/50 dark:border-gray-700/50',
          scrolled ? 'shadow-brand bg-white/90 dark:bg-gray-900/90' : ''
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between sm:h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center"
            >
              <Link href="/" aria-label="Auto Agent Flow homepage">
              {/* Desktop: Show full typeface logo */}
              <div className="hidden xl:block">
                <Image
                  src={theme === 'dark' ? '/assets/logos/auto-agent-flow-logo-typeface-light.png' : '/assets/logos/auto-agent-flow-logo-typeface-dark.png'}
                  alt="Auto Agent Flow"
                  width={180}
                  height={45}
                  priority
                  className="h-9 w-auto"
                />
              </div>
              
              {/* Mobile & Tablet: Show icon only */}
              <div className="xl:hidden">
                <Image
                  src={theme === 'dark' ? '/assets/logos/auto-agent-flow-icon-light.png' : '/assets/logos/auto-agent-flow-icon-dark.png'}
                  alt="Auto Agent Flow"
                  width={36}
                  height={36}
                  priority
                  className="h-9 w-9"
                />
              </div>
              </Link>
            </motion.div>

            {/* Desktop Nav */}
            <div className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-gray-900 transition-colors hover:text-brand-accent dark:text-gray-100 font-medium"
                >
                  {item.label}
                </motion.a>
              ))}
              <button
                type="button"
                onClick={toggleTheme}
                className="rounded-brand p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? <Sun className="h-5 w-5 text-gray-900 dark:text-gray-100" aria-hidden="true" /> : <Moon className="h-5 w-5 text-gray-900 dark:text-gray-100" aria-hidden="true" />}
              </button>
              <StarBorder 
                as="a"
                href="https://academy.tesseract.nexus/course/n8n-full-stack-masterclass-2025-building-generative-multimedia-production-system"
                target="_blank"
                rel="noopener noreferrer"
                color="rgb(224, 57, 47)"
                speed="8s"
                className="no-underline"
              >
                Enroll Now
              </StarBorder>
            </div>

            {/* Mobile Menu Button */}
            <button 
              type="button"
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 md:hidden text-gray-900 dark:text-gray-100"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-t border-gray-200 dark:border-gray-700 md:hidden"
            role="menu"
            aria-label="Mobile navigation menu"
          >
            <div className="space-y-4 px-4 py-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-medium text-gray-900 dark:text-gray-100"
                >
                  {item.label}
                </a>
              ))}
              <button
                type="button"
                onClick={toggleTheme}
                className="flex items-center gap-2 rounded-brand p-2 text-lg font-medium text-gray-900 transition-colors hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-700"
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" aria-hidden="true" /> : <Moon className="h-5 w-5" aria-hidden="true" />}
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              </button>
              <StarBorder 
                as="a"
                href="https://academy.tesseract.nexus/course/n8n-full-stack-masterclass-2025-building-generative-multimedia-production-system"
                target="_blank"
                rel="noopener noreferrer"
                color="rgb(224, 57, 47)"
                speed="8s"
                className="no-underline w-full"
              >
                Enroll Now
              </StarBorder>
            </div>
          </motion.div>
        )}
        <ScrollProgressTracker />
      </TesseractLiquidGlass>
    </nav>
  );
}
