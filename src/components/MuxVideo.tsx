'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

interface MuxVideoProps {
  playbackId: string;
  poster?: string;
  title?: string;
  description?: string;
  className?: string;
  autoPlay?: boolean;
  controls?: boolean;
}

export function MuxVideo({
  playbackId,
  poster,
  title,
  description,
  className = '',
  autoPlay = false,
  controls = true,
}: MuxVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // MUX Video URLs
  const videoUrl = `https://stream.mux.com/${playbackId}.m3u8`;
  const thumbnailUrl = poster || `https://image.mux.com/${playbackId}/thumbnail.jpg`;

  const handlePlay = () => {
    setIsLoading(true);
    setIsPlaying(true);
  };

  return (
    <div className={`relative overflow-hidden rounded-brand-lg ${className}`}>
      {!isPlaying ? (
        // Video Thumbnail with Play Button
        <motion.div
          className="group relative cursor-pointer"
          onClick={handlePlay}
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <img
            src={thumbnailUrl}
            alt={title || 'Video thumbnail'}
            className="h-full w-full object-cover"
            loading="lazy"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/10" />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-accent shadow-brand-lg transition-all duration-300 hover:bg-brand-primary group-hover:shadow-brand-xl"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="ml-1 h-6 w-6 text-white" fill="currentColor" />
            </motion.div>
          </div>

          {/* Video info overlay */}
          {(title || description) && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
              {title && <h3 className="mb-1 text-lg font-semibold text-white">{title}</h3>}
              {description && <p className="text-sm text-white/80">{description}</p>}
            </div>
          )}
        </motion.div>
      ) : (
        // Actual Video Player
        <div className="relative">
          {isLoading && (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-black">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-white border-t-transparent" />
            </div>
          )}

          <video
            className="h-full w-full"
            controls={controls}
            autoPlay={autoPlay}
            poster={thumbnailUrl}
            onLoadStart={() => setIsLoading(true)}
            onCanPlay={() => setIsLoading(false)}
            onError={() => {
              setIsLoading(false);
              setIsPlaying(false);
            }}
          >
            <source src={videoUrl} type="application/x-mpegURL" />
            <p className="p-4 text-center text-gray-500">
              Your browser doesn't support video playback.
            </p>
          </video>
        </div>
      )}
    </div>
  );
}

// Alternative component for simple video embeds
export function MuxVideoEmbed({
  playbackId,
  className = '',
  autoPlay = false,
  controls = true,
  muted = false,
}: {
  playbackId: string;
  className?: string;
  autoPlay?: boolean;
  controls?: boolean;
  muted?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden rounded-brand-lg ${className}`}>
      <iframe
        src={`https://stream.mux.com/${playbackId}.html?autoplay=${autoPlay}&controls=${controls}&muted=${muted}`}
        className="h-full w-full border-0"
        allow="autoplay; fullscreen"
        allowFullScreen
        title="Video player"
      />
    </div>
  );
}
