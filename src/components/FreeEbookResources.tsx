'use client';

import { motion } from 'framer-motion';
import { Download, BookOpen, FileText, Zap, Users } from 'lucide-react';
import { TesseractLiquidGlass } from './TesseractLiquidGlass';

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
  const handleDownloadAll = () => {
    ebooks.forEach(ebook => {
      window.open(ebook.downloadUrl, '_blank');
    });
  };

  const handleDownload = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section className="bg-gradient-to-b from-transparent via-brand-primary/5 to-transparent px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div className="glass-effect mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">
            <Download className="h-4 w-4 text-brand-accent" />
            <span>Free Implementation Resources</span>
          </div>
          <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
            Get Your Free <span className="gradient-text">Setup & Integration Guides</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-400">
            Download our comprehensive setup guides for the most essential integrations. 
            Master AWS S3, Supabase, FAL.AI, and Flowise integration with n8n.
          </p>
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
            <h3 className="mb-6 text-3xl font-bold">Essential Integration Mastery</h3>
            <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
              These comprehensive guides cover the most critical integrations for n8n automation.
              Download all 4 setup guides instantly and start building powerful workflows today.
            </p>

            <button 
              onClick={handleDownloadAll}
              className="btn-primary flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Download All Guides
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
            >
              <TesseractLiquidGlass
                variant="card"
                enableScrollEffects={true}
                className="p-6 text-center transition-all duration-300 hover:shadow-brand-lg"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-brand bg-brand-accent/10">
                  <ebook.icon className="h-6 w-6 text-brand-accent" />
                </div>
                <h4 className="mb-2 font-semibold">{ebook.title}</h4>
                <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">{ebook.description}</p>
                <div className="mb-4 flex justify-between text-xs text-gray-500 dark:text-gray-500">
                  <span>{ebook.pages}</span>
                  <span>{ebook.downloadCount} downloads</span>
                </div>
                <button
                  onClick={() => handleDownload(ebook.downloadUrl)}
                  className="btn-secondary flex w-full items-center justify-center gap-2 text-sm"
                >
                  <Download className="h-3 w-3" />
                  Download
                </button>
              </TesseractLiquidGlass>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
