'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Play, Users, Star, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { ContainerScroll } from './ui/container-scroll-animation-optimized';
import { TesseractLiquidGlass } from './TesseractLiquidGlass';
import useEmblaCarousel from 'embla-carousel-react';

// Dynamic import for MuxPlayer
const MuxPlayer = dynamic(() => import('@mux/mux-player-react'), {
  ssr: false,
});

export const VideoPreview = React.memo(function VideoPreview() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const titleComponent = (
    <div className="mx-auto max-w-4xl text-center">
      <h2 className="mb-4 font-bold text-gray-900 dark:text-gray-100 text-4xl sm:text-5xl tracking-tight">
        See the <span className="gradient-text">32-Node Automation</span> in Action
      </h2>
      <p className="text-gray-600 dark:text-gray-400 text-xl">
        Watch how we build a complete multi-agent workflow with visual models, Supabase, and publication-ready output
      </p>
    </div>
  );

  return (
    <section id="video-preview" className="bg-white dark:bg-[#060606] -mt-40 pt-12 pb-20">
      <ContainerScroll titleComponent={titleComponent}>
        <div className="rounded-lg w-full h-full overflow-hidden">
          {!isPlaying ? (
            <div className="relative h-full">
              {/* Video Thumbnail */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-brand-accent opacity-90 rounded-lg" />
              <div className="absolute inset-0 flex justify-center items-center">
                <button
                  onClick={() => setIsPlaying(true)}
                  className="group flex justify-center items-center bg-white/20 dark:bg-gray-800/20 backdrop-blur-md rounded-full w-24 h-24 hover:scale-110 active:scale-95 transition-transform"
                >
                  <Play className="ml-1 w-10 h-10 text-white group-hover:scale-110 transition-transform" />
                </button>
              </div>

              {/* Video Info Overlay */}
              <div className="right-0 bottom-0 left-0 absolute bg-gradient-to-t from-black/60 to-transparent p-6 rounded-b-lg">
                <h3 className="mb-2 font-bold text-white text-2xl tracking-tight">
                  Live Build: Sequential Orchestration Pipeline™
                </h3>
                <div className="flex flex-wrap gap-6 text-white/80">
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    12 min preview
                  </span>
                  <span className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    2.8K students
                  </span>
                  <span className="flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    4.9/5 rating
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <MuxPlayer
              playbackId="3TrhHX1Lr00IseXZdb3oOVyP7WnMvpUyVDL8wh99c8YQ"
              primaryColor="#da3229"
              accentColor="#ffffff"
              secondaryColor="#00000e"
              autoPlay={true}
              muted={true}
              controls={true}
              style={{ width: '100%', height: '100%' }}
            />
          )}
        </div>
      </ContainerScroll>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Workflow Images Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <h2 className="mb-2 font-bold text-gray-900 dark:text-gray-100 text-4xl sm:text-5xl text-center tracking-tight">
            See the <span className="gradient-text">Workflows in Action</span>
          </h2>
          
          <div className="relative mx-auto px-4 md:px-8 lg:px-12 py-8 max-w-4xl">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {[
                  { 
                    image: '/assets/images/auto-agent-flow-site-image-main-n8n-workflow-beauty-image-1-prod.webp',
                    title: 'Sequential Orchestration Method Overview',
                    description: 'Complete workflow architecture with 32+ nodes'
                  },
                  { 
                    image: '/assets/images/auto-agent-flow-site-image-main-n8n-wokflow-beauty-image-2-prod.webp',
                    title: 'Multi-Agent Workflow Design',
                    description: 'Advanced AI agent coordination patterns'
                  },
                  { 
                    image: '/assets/images/auto-agent-flow-site-image-main-n8n-wokflow-beauty-image-3-prod.webp',
                    title: 'Advanced Data Processing Pipeline',
                    description: 'Complex data transformation workflows'
                  },
                  { 
                    image: '/assets/images/auto-agent-flow-site-image-main-n8n-wokflow-beauty-image-4-prod.webp',
                    title: 'AI Integration Patterns',
                    description: 'Seamless AI model integration strategies'
                  },
                  { 
                    image: '/assets/images/auto-agent-flow-site-image-main-n8n-wokflow-beauty-image-5-prod.webp',
                    title: 'Production-Ready Automation',
                    description: 'Scalable enterprise workflow solutions'
                  },
                ].map((workflow, index) => (
                  <div key={index} className="flex-[0_0_100%] px-4 sm:px-4 md:px-6 lg:px-8 py-4 min-w-0">
                    <div className="group hover:scale-[1.02] transition-transform cursor-pointer">
                      <TesseractLiquidGlass
                        variant="card"
                        enableScrollEffects={false}
                        enableShimmer={false}
                        className="shadow-brand group-hover:shadow-brand-lg border border-gray-200/50 dark:border-gray-700/50 group-hover:border-brand-primary overflow-hidden transition-all duration-700"
                      >
                        <div className="relative rounded-t-brand aspect-video overflow-hidden">
                          <img
                            src={workflow.image}
                            alt={workflow.title}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-6">
                          <h4 className="mb-2 font-semibold text-gray-900 dark:text-gray-100 text-lg">
                            {workflow.title}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">
                            {workflow.description}
                          </p>
                        </div>
                      </TesseractLiquidGlass>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <button
              onClick={scrollPrev}
              className="top-1/2 left-1 sm:left-2 z-10 absolute flex justify-center items-center bg-white/90 hover:bg-white dark:bg-gray-800/90 dark:hover:bg-gray-800 shadow-lg backdrop-blur-md rounded-full w-10 sm:w-12 h-10 sm:h-12 hover:scale-110 transition-all -translate-y-1/2"
            >
              <ChevronLeft className="w-5 sm:w-6 h-5 sm:h-6 text-gray-700 dark:text-gray-300" />
            </button>
            <button
              onClick={scrollNext}
              className="top-1/2 right-1 sm:right-2 z-10 absolute flex justify-center items-center bg-white/90 hover:bg-white dark:bg-gray-800/90 dark:hover:bg-gray-800 shadow-lg backdrop-blur-md rounded-full w-10 sm:w-12 h-10 sm:h-12 hover:scale-110 transition-all -translate-y-1/2"
            >
              <ChevronRight className="w-5 sm:w-6 h-5 sm:h-6 text-gray-700 dark:text-gray-300" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
});
