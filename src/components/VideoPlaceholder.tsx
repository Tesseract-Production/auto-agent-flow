'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface VideoPlaceholderProps {
  title: string;
  subtitle?: string;
  thumbnailUrl: string;
  onPlayClick?: () => void;
  className?: string;
}

export function VideoPlaceholder({
  title,
  subtitle,
  thumbnailUrl,
  onPlayClick,
  className = '',
}: VideoPlaceholderProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`relative h-full w-full overflow-hidden ${className}`}>
      {/* Background - gradient fallback if image fails */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-brand-accent" />
      
      {/* Thumbnail image */}
      {!imageError && (
        <img
          src={thumbnailUrl}
          alt={title}
          className="h-full w-full object-cover"
          onError={() => {
            console.warn('Thumbnail failed to load:', thumbnailUrl);
            setImageError(true);
          }}
          onLoad={() => {
            console.warn('Thumbnail loaded successfully');
            setImageError(false);
          }}
        />
      )}
      
      {/* Debug info in development */}
      {process.env.NODE_ENV === 'development' && (
        <div className="absolute top-2 left-2 text-xs text-white bg-black/50 p-1 rounded">
          {imageError ? 'Image failed' : 'Image loading...'}
        </div>
      )}
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.button
          className="rounded-full bg-white/20 p-6 backdrop-blur-sm hover:bg-white/30 transition-all focus:outline-none focus:ring-2 focus:ring-white/50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={onPlayClick}
          aria-label={`Play ${title}`}
        >
          <svg className="h-12 w-12 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </motion.button>
      </div>
      
      {/* Video info */}
      <div className="absolute bottom-4 left-4 right-4">
        <div className="rounded-lg bg-black/50 p-3 backdrop-blur-sm">
          <h4 className="text-white font-semibold text-sm">{title}</h4>
          {subtitle && <p className="text-white/80 text-xs">{subtitle}</p>}
        </div>
      </div>
      
      {/* Loading indicator (when trying to play actual video) */}
      <div className="absolute top-4 right-4 opacity-0 transition-opacity">
        <div className="rounded-full bg-black/50 p-2 backdrop-blur-sm">
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
        </div>
      </div>
    </div>
  );
}