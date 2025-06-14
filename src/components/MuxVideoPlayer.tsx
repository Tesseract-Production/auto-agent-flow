'use client';

import MuxPlayer from '@mux/mux-player-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

interface MuxVideoPlayerProps {
  playbackId: string;
  streamUrl?: string;
  poster?: string;
  title?: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  showPlayButton?: boolean;
}

export function MuxVideoPlayer({
  playbackId,
  streamUrl,
  poster,
  title,
  className = '',
  autoPlay = false,
  muted = true,
  loop = false,
  controls = true,
  showPlayButton = false,
}: MuxVideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [showControls, setShowControls] = useState(false);

  // Use streamUrl if provided, otherwise construct from playbackId
  const videoSrc = streamUrl || `https://stream.mux.com/${playbackId}.m3u8`;
  const posterUrl = poster || `https://image.mux.com/${playbackId}/thumbnail.jpg?width=1920&height=1080&time=5`;

  const handlePlay = () => {
    setIsPlaying(true);
    setShowControls(true);
  };

  if (showPlayButton && !isPlaying) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <motion.div
          className="group relative cursor-pointer"
          onClick={handlePlay}
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <img
            src={posterUrl}
            alt={title || 'Video thumbnail'}
            className="h-full w-full object-cover"
            loading="lazy"
          />
          
          <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/10" />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-accent shadow-brand-lg transition-all duration-300 hover:bg-brand-primary group-hover:shadow-brand-xl"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="ml-1 h-6 w-6 text-white" fill="currentColor" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <MuxPlayer
        streamType="on-demand"
        src={videoSrc}
        poster={posterUrl}
        autoPlay={isPlaying || autoPlay}
        muted={muted}
        loop={loop}
        controls={showControls || controls}
        style={{ width: '100%', height: '100%' }}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
    </div>
  );
}