'use client';

import type React from 'react';
import { useEffect, useRef } from 'react';
import { getMediaUrl } from '@/utilities/getMediaUrl';
import { cn } from '@/utilities/ui';
import type { Props as MediaProps } from '../types';

export const VideoMedia: React.FC<MediaProps> = (props) => {
  const { onClick, resource, videoClassName } = props;

  const videoRef = useRef<HTMLVideoElement>(null);
  // const [showFallback] = useState<boolean>()

  useEffect(() => {
    const { current: video } = videoRef;
    if (video) {
      video.addEventListener('suspend', () => {
        // setShowFallback(true);
        // console.warn('Video was suspended, rendering fallback image.')
      });
    }
  }, []);

  if (resource && typeof resource === 'object') {
    const { filename } = resource;

    return (
      <video
        autoPlay
        className={cn(videoClassName)}
        controls={false}
        loop
        muted
        onClick={onClick}
        playsInline
        ref={videoRef}
      >
        <source src={getMediaUrl(`/media/${filename}`)} />
      </video>
    );
  }

  return null;
};
