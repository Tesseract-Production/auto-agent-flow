import { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { FileText, Shield, Cookie, FileCheck, AlertCircle, ScrollText, ArrowRight } from 'lucide-react';
import { TesseractLiquidGlass } from '@/components/TesseractLiquidGlass';

export const metadata: Metadata = {
  title: 'Legal Information | Tesseract n8n Masterclass',
  description: 'Legal documents, policies, and terms for the Tesseract n8n AI Orchestration Masterclass.',
};

const legalDocuments = [
  {
    title: 'Privacy Policy',
    description: 'Learn how we collect, use, and protect your personal information.',
    href: '/legal/privacy',
    icon: Shield,
    lastUpdated: 'February 3, 2025',
  },
  {
    title: 'Terms of Service',
    description: 'The terms and conditions that govern your use of our services.',
    href: '/legal/tos',
    icon: FileText,
    lastUpdated: 'February 3, 2025',
  },
  {
    title: 'Cookie Policy',
    description: 'How we use cookies and similar tracking technologies.',
    href: '/legal/cookies',
    icon: Cookie,
    lastUpdated: 'February 3, 2025',
  },
  {
    title: 'Acceptable Use Policy',
    description: 'Guidelines for appropriate and responsible use of our platform.',
    href: '/legal/acceptable-use',
    icon: FileCheck,
    lastUpdated: 'February 3, 2025',
  },
  {
    title: 'End User License Agreement',
    description: 'Software licensing terms for our products and services.',
    href: '/legal/eula',
    icon: ScrollText,
    lastUpdated: 'February 3, 2025',
  },
  {
    title: 'Legal Disclaimer',
    description: 'Important disclaimers and limitations of liability.',
    href: '/legal/disclaimer',
    icon: AlertCircle,
    lastUpdated: 'February 3, 2025',
  },
];

function LegalPageClient() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
      <Navigation />
      
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Legal Information
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Transparency is important to us. Review our legal documents to understand how we operate and protect your rights.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {legalDocuments.map((doc) => {
              const Icon = doc.icon;
              
              return (
                <div key={doc.href}>
                  <Link href={doc.href}>
                    <TesseractLiquidGlass
                      variant="card"
                      enableShimmer={false}
                      className="h-full p-6 transition-all duration-300 hover:shadow-brand-lg hover:border-brand-primary cursor-pointer group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-brand-primary/10 flex items-center justify-center group-hover:bg-brand-primary/20 transition-colors">
                          <Icon className="h-6 w-6 text-brand-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100 group-hover:text-brand-primary transition-colors">
                            {doc.title}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                            {doc.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500 dark:text-gray-500">
                              Updated: {doc.lastUpdated}
                            </span>
                            <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-brand-primary group-hover:translate-x-1 transition-all" />
                          </div>
                        </div>
                      </div>
                    </TesseractLiquidGlass>
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                Have Questions?
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                If you have any questions about our legal documents or need clarification on any terms, 
                please don't hesitate to reach out to our team.
              </p>
              <Link
                href="https://tesseract.nexus/contact"
                className="btn-primary inline-flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default function LegalPage() {
  return <LegalPageClient />;
}