'use client';

import { motion } from 'framer-motion';
import { Download, BookOpen, FileText, Zap, Users, Lock } from 'lucide-react';
import { TesseractLiquidGlass } from './TesseractLiquidGlass';
import { useEmailSubmission } from '@/contexts/EmailSubmissionContext';

const ebooks = [
  {
    id: 1,
    title: 'Getting Started with AWS S3 & n8n',
    description: 'Complete guide to integrating Amazon S3 with your workflows',
    icon: Zap,
    pages: 'PDF Guide',
    downloadCount: '2,847+',
    downloadUrl: 'https://geenuity-mantra-ai-generated.s3.us-west-2.amazonaws.com/n8n-masterclass-website-media/Getting_Started_with_AWS_S3_and_n8n_FINAL_FOR_DISTRIBUTION.pdf'
  },
  {
    id: 2,
    title: 'Getting Started with Supabase & n8n',
    description: 'Master database automation with Supabase integration',
    icon: FileText,
    pages: 'PDF Guide',
    downloadCount: '1,923+',
    downloadUrl: 'https://geenuity-mantra-ai-generated.s3.us-west-2.amazonaws.com/n8n-masterclass-website-media/n8n_Summer_2025_Masterclass_-_Supabase_Setup_Guide_FINAL_STANDARD_ISSUE.pdf'
  },
  {
    id: 3,
    title: 'Getting Started with Fal AI Developer Cloud & n8n',
    description: 'AI-powered automation with cutting-edge machine learning',
    icon: BookOpen,
    pages: 'PDF Guide',
    downloadCount: '1,456+',
    downloadUrl: 'https://geenuity-mantra-ai-generated.s3.us-west-2.amazonaws.com/n8n-masterclass-website-media/Getting_Started_with_FAL.AI_n8n_FINAL_PUBLIC.pdf'
  },
  {
    id: 4,
    title: 'Getting Started with Flowise & n8n',
    description: 'Build intelligent conversational AI workflows',
    icon: Users,
    pages: 'PDF Guide',
    downloadCount: '892+',
    downloadUrl: 'https://geenuity-mantra-ai-generated.s3.us-west-2.amazonaws.com/n8n-masterclass-website-media/Getting_Started_With_n8n_and_Flowise.pdf'
  },
];

export function FreeEbookResources() {
  const { hasSubmittedEmail } = useEmailSubmission();

  const handleDownloadAll = () => {
    if (!hasSubmittedEmail) return;
    ebooks.forEach(ebook => {
      window.open(ebook.downloadUrl, '_blank');
    });
  };

  const handleDownload = (url: string) => {
    if (!hasSubmittedEmail) return;
    window.open(url, '_blank');
  };

  return (
    <section className="bg-white dark:bg-[#060606] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <TesseractLiquidGlass
            variant="interactive"
            enableShimmer={true}
            className="mb-4 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium"
          >
            <Download className="h-4 w-4 text-brand-accent" />
            <span>Free Implementation Resources</span>
          </TesseractLiquidGlass>
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-4 text-4xl font-bold sm:text-5xl text-gray-900 dark:text-gray-100">
              Essential <span className="gradient-text">Implementation Resources</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Everything you need to follow along with the masterclass. Download essential setup guides for Supabase, AWS S3, FAL.AI, and Flowise - the core integrations in our 32-node automation.
            </p>
          </div>
        </motion.div>

        <div className="mb-16 grid items-center gap-12 lg:grid-cols-2">
          {/* Hero Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="relative overflow-hidden rounded-brand-xl">
              <img
                src="/assets/images/n8n-masterclass-website-ebooks-final.webp"
                alt="n8n Masterclass Ebooks Collection"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h3 className="mb-6 text-3xl font-bold text-gray-900 dark:text-gray-100">Ready-to-Follow Implementation</h3>
            <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
              Each guide includes step-by-step setup instructions, API key configuration, and troubleshooting tips. Perfect for both beginners and experienced builders following the masterclass.
            </p>

            <button 
              onClick={handleDownloadAll}
              disabled={!hasSubmittedEmail}
              className={`flex items-center gap-2 ${
                hasSubmittedEmail 
                  ? 'btn-primary' 
                  : 'bg-gray-400 text-white px-6 py-3 rounded-full font-semibold cursor-not-allowed opacity-50'
              }`}
            >
              {hasSubmittedEmail ? (
                <>
                  <Download className="h-4 w-4" />
                  Download All Guides
                </>
              ) : (
                <>
                  <Lock className="h-4 w-4" />
                  Submit Email to Download
                </>
              )}
            </button>
          </motion.div>
        </div>

        {/* Ebook Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {ebooks.map((ebook, index) => (
            <motion.div
              key={ebook.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <TesseractLiquidGlass
                variant="card"
                enableScrollEffects={true}
                enableShimmer={true}
                className="p-6 text-center border border-gray-200/50 shadow-brand-lg transition-all duration-700 group-hover:border-brand-primary group-hover:shadow-brand-xl dark:border-gray-700/50"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-brand bg-brand-accent/10">
                  <ebook.icon className="h-6 w-6 text-brand-accent" />
                </div>
                <h4 className="mb-2 font-semibold text-gray-900 dark:text-gray-100">{ebook.title}</h4>
                <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">{ebook.description}</p>
                <div className="mb-4 flex justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span>{ebook.pages}</span>
                  <span>{ebook.downloadCount} downloads</span>
                </div>
                <button
                  onClick={() => handleDownload(ebook.downloadUrl)}
                  disabled={!hasSubmittedEmail}
                  className={`flex w-full items-center justify-center gap-2 text-sm ${
                    hasSubmittedEmail 
                      ? 'btn-secondary' 
                      : 'bg-gray-400 text-white px-4 py-2 rounded-full font-semibold cursor-not-allowed opacity-50'
                  }`}
                >
                  {hasSubmittedEmail ? (
                    <>
                      <Download className="h-3 w-3" />
                      Download
                    </>
                  ) : (
                    <>
                      <Lock className="h-3 w-3" />
                      Locked
                    </>
                  )}
                </button>
              </TesseractLiquidGlass>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
