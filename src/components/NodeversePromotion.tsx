'use client';

import { Book, Download } from 'lucide-react';
import { TesseractLiquidGlass } from './TesseractLiquidGlass';
import { motion } from 'framer-motion';

export function NodeversePromotion() {
  const handleDownload = () => {
    window.open('https://geenuity-mantra-ai-generated.s3.us-west-2.amazonaws.com/n8n-masterclass-website-media/Nodeverse_Adventures_of_Tesseractian_McMartian_COMPRESSED.pdf', '_blank');
  };

  return (
    <section className="bg-gradient-to-b from-transparent via-brand-accent/5 to-transparent px-4 py-20 sm:px-6 lg:px-8">
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
            className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
          >
            <Book className="h-4 w-4 text-brand-accent" />
            <span>Immerse Yourself in the Nodeverse</span>
          </TesseractLiquidGlass>

          <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
            Discover the <span className="gradient-text">Nodeverse</span>
          </h2>

          <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-400">
            Dive into our exclusive graphic novel, "Nodeverse: Adventures of Tesseractian McMartian."
            Join in the automation quest and explore the wonders of our masterclass walkthrough.
          </p>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="relative overflow-hidden rounded-brand-xl">
              <img
                src="/assets/images/Nodeverse_Adventures_of_Tesseractian_McMartian-4x5-1.webp"
                alt="Nodeverse: Adventures of Tesseractian McMartian - Graphic Novel Cover"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h3 className="mb-6 text-3xl font-bold">An Epic Automation Adventure</h3>
            <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
              Follow Tesseractian McMartian on an incredible journey through the world of automation. 
              This exclusive graphic novel brings the concepts from our masterclass to life through 
              engaging storytelling and stunning visuals.
            </p>

            <button 
              onClick={handleDownload}
              className="btn-primary flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Download Graphic Novel
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
