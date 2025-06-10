'use client';

import { Book } from 'lucide-react';
import { TesseractLiquidGlass } from './TesseractLiquidGlass';
import { ContainerScroll } from './ui/container-scroll-animation';

export function NodeversePromotion() {
  const titleComponent = (
    <>
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
    </>
  );

  return (
    <section className="bg-gradient-to-b from-transparent via-brand-accent/5 to-transparent">
      <ContainerScroll titleComponent={titleComponent}>
        <TesseractLiquidGlass
          variant="hero"
          enableColorAdaptation={true}
          className="h-full w-full rounded-brand-xl p-8"
        >
          <div className="aspect-w-16 aspect-h-9 flex h-full items-center justify-center rounded-brand-xl border border-brand-accent/20 bg-gradient-to-br from-brand-primary/10 to-brand-accent/10">
            <div className="text-center">
              <Book className="mx-auto mb-4 h-16 w-16 text-brand-accent" />
              <p className="font-medium text-gray-600 dark:text-gray-400">
                Placeholder for Graphic Novel Cover
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500">(Image URL to be provided)</p>
            </div>
          </div>
        </TesseractLiquidGlass>
      </ContainerScroll>
    </section>
  );
}
