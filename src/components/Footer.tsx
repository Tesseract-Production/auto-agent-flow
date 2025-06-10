'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Youtube, Twitter, Linkedin, Github } from 'lucide-react';
import Link from 'next/link';

const footerLinks = {
  course: [
    { label: 'Course Outline', href: '#outline' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ],
  resources: [
    { label: 'Free Preview', href: 'https://youtube.com' },
    { label: 'Discord Community', href: 'https://discord.gg' },
    { label: 'Blog', href: '/blog' },
    { label: 'Templates', href: '/templates' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
};

const socialLinks = [
  { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: MessageCircle, href: 'https://discord.gg', label: 'Discord' },
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-transparent to-brand-dark/5 px-4 py-20 dark:to-brand-dark/20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-2xl font-bold">
              <span className="gradient-text">Tesseract</span> Nexus
            </h3>
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
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8 dark:border-gray-800">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Tesseract Nexus. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-gray-600 transition-colors hover:text-brand-accent dark:text-gray-400"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-gray-600 transition-colors hover:text-brand-accent dark:text-gray-400"
              >
                Terms
              </Link>
              <Link
                href="/contact"
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
