'use client';

import { motion } from 'framer-motion';
import { Play, Users, Star, Clock } from 'lucide-react';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { ContainerScroll } from './ui/container-scroll-animation-optimized';

// Dynamic import for MuxPlayer
const MuxPlayer = dynamic(() => import('@mux/mux-player-react'), {
  ssr: false,
});

export function VideoPreview() {
  const [isPlaying, setIsPlaying] = useState(false);

  const titleComponent = (
    <>
      <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
        See the <span className="gradient-text">Masterclass in Action</span>
      </h2>
      <p className="text-xl text-gray-600 dark:text-gray-400">
        Watch how we build a complete AI automation from scratch
      </p>
    </>
  );

  return (
    <section className="py-12 bg-gradient-to-b from-transparent to-brand-primary/5">
      <ContainerScroll titleComponent={titleComponent}>
        <div className="h-full w-full rounded-lg overflow-hidden">
          {!isPlaying ? (
            <div className="relative h-full">
              {/* Video Thumbnail */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-brand-primary to-brand-accent opacity-90" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsPlaying(true)}
                  className="group flex h-24 w-24 items-center justify-center rounded-full bg-white/20 backdrop-blur-md"
                >
                  <Play className="ml-1 h-10 w-10 text-white transition-transform group-hover:scale-110" />
                </motion.button>
              </div>

              {/* Video Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 rounded-b-lg bg-gradient-to-t from-black/60 to-transparent p-6">
                <h3 className="mb-2 text-2xl font-bold text-white">
                  Preview: Building Complete AI Automation System
                </h3>
                <div className="flex flex-wrap gap-6 text-white/80">
                  <span className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    12 min preview
                  </span>
                  <span className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    2.8K students
                  </span>
                  <span className="flex items-center gap-2">
                    <Star className="h-4 w-4" />
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
              controls={true}
              style={{ width: '100%', height: '100%' }}
            />
          )}
        </div>
      </ContainerScroll>

      <div className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
        {/* Video Chapters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 grid gap-6 md:grid-cols-3"
        >
          {[
            { time: '00:00', title: 'Course Introduction & Setup', views: '2.8K' },
            { time: '02:45', title: 'Building Your First n8n Workflow', views: '2.4K' },
            { time: '08:30', title: 'Integrating AI Models & APIs', views: '2.1K' },
          ].map((chapter, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="glass-effect group cursor-pointer rounded-brand p-4"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-brand bg-brand-accent/10 transition-colors group-hover:bg-brand-accent/20">
                  <Play className="h-5 w-5 text-brand-accent" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold">{chapter.title}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {chapter.time} • {chapter.views} views
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
