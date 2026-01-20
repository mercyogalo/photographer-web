"use client";

import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";
import { motion } from "framer-motion";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
}

export default function VideoPlayer({
  src,
  poster,
  className,
  autoplay = false,
  loop = true,
  muted = true,
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.muted = false;
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div
      className={`relative group ${className}`}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        loop={loop}
        muted={muted}
        playsInline
        className="w-full h-full object-cover"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onError={() => {
          console.warn(`Video failed to load: ${src}`);
        }}
      />
      
      {/* Overlay Controls */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showControls || !isPlaying ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 flex items-center justify-center bg-black/20"
      >
        <button
          onClick={togglePlay}
          className="p-4 bg-white/90 dark:bg-gray-900/90 rounded-full hover:bg-white dark:hover:bg-gray-900 transition-all duration-200 shadow-lg"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <Pause className="w-8 h-8 text-gray-900 dark:text-gray-100" />
          ) : (
            <Play className="w-8 h-8 text-gray-900 dark:text-gray-100 ml-1" />
          )}
        </button>
      </motion.div>
    </div>
  );
}

