'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Youtube, Twitter, Linkedin, Github } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from './ThemeProvider';
import { useEffect, useState } from 'react';

// Responsive logo component
function LogoSection() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="mb-4 h-12 w-48 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
    );
  }

  const isDark = theme === 'dark';

  return (
    <div className="mb-4">
      {/* Desktop: Show full typeface logo */}
      <div className="hidden xl:block">
        <Image
          src={isDark ? '/assets/logos/auto-agent-flow-logo-typeface-light.png' : '/assets/logos/auto-agent-flow-logo-typeface-dark.png'}
          alt="Auto Agent Flow"
          width={240}
          height={60}
          className="h-12 w-auto"
        />
      </div>
      
      {/* Mobile & Tablet: Show icon only */}
      <div className="xl:hidden">
        <Image
          src={isDark ? '/assets/logos/auto-agent-flow-icon-light.png' : '/assets/logos/auto-agent-flow-icon-dark.png'}
          alt="Auto Agent Flow"
          width={48}
          height={48}
          className="h-12 w-12"
        />
      </div>
    </div>
  );
}

const footerLinks = {
  course: [
    { label: 'Course Outline', href: '#outline' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ],
  resources: [
    { label: 'Free Preview', href: '#' },
    { label: 'Discord Community', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Documentation', href: '#' },
  ],
  company: [
    { label: 'About Us', href: '#' },
    { label: 'Contact', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Enterprise', href: '#' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'Refund Policy', href: '#' },
  ],
};

const socialLinks = [
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: MessageCircle, href: '#', label: 'Discord' },
];

export function Footer() {
  return (
    <footer className="bg-white dark:bg-[#060606] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-6">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <LogoSection />
            <p className="mb-6 text-gray-600 dark:text-gray-400">
              Master AI automation and transform your career with the most comprehensive n8n course
              available. Join thousands building the future.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-10 w-10 items-center justify-center rounded-brand bg-gray-100 transition-colors hover:bg-brand-accent hover:text-white dark:bg-gray-800"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="mb-4 font-semibold">Course</h4>
            <ul className="space-y-2">
              {footerLinks.course.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-600 transition-colors hover:text-brand-accent dark:text-gray-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-600 transition-colors hover:text-brand-accent dark:text-gray-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-600 transition-colors hover:text-brand-accent dark:text-gray-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-600 transition-colors hover:text-brand-accent dark:text-gray-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8 dark:border-gray-800">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Auto Agent Flow. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link
                href="#"
                className="text-gray-600 transition-colors hover:text-brand-accent dark:text-gray-400"
              >
                Privacy
              </Link>
              <Link
                href="#"
                className="text-gray-600 transition-colors hover:text-brand-accent dark:text-gray-400"
              >
                Terms
              </Link>
              <Link
                href="#"
                className="text-gray-600 transition-colors hover:text-brand-accent dark:text-gray-400"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
