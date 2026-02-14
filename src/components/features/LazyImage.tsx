/**
 * LAZY LOADING IMAGE COMPONENT - Multi-Format Support
 * Logic:
 * 1. Try local images in order (webp -> png -> jpg)
 * 2. If all local fail, use fallbackSrc (original URL)
 * 3. If that fails, show error icon
 */

import { useState, useEffect, useRef } from 'react';
import { ImageOff } from 'lucide-react';

interface LazyImageProps {
  src: string | string[]; // Can now be a single string OR a list of strings
  fallbackSrc?: string;
  alt: string;
  className?: string;
  fallbackIcon?: boolean;
}

export default function LazyImage({ src, fallbackSrc, alt, className = '', fallbackIcon = true }: LazyImageProps) {
  // Convert single string to array for consistent handling
  const srcList = Array.isArray(src) ? src : [src];
  
  const [currentSrcIndex, setCurrentSrcIndex] = useState(0);
  const [imgSrc, setImgSrc] = useState<string | undefined>(undefined);
  
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  // Initialize with the first image in the list
  useEffect(() => {
    setImgSrc(srcList[0]);
    setCurrentSrcIndex(0);
    setHasError(false);
    setIsLoading(true);
  }, [src]);

  useEffect(() => {
    if (!imgRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '50px', threshold: 0.01 }
    );
    observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleError = () => {
    const nextIndex = currentSrcIndex + 1;

    // 1. Try the next local file format (e.g., switch from webp -> png)
    if (nextIndex < srcList.length) {
      setCurrentSrcIndex(nextIndex);
      setImgSrc(srcList[nextIndex]);
    } 
    // 2. If ran out of local files, try the fallback URL (from games.ts)
    else if (fallbackSrc && imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
    } 
    // 3. Give up
    else {
      setIsLoading(false);
      setHasError(true);
    }
  };

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {/* Loading Skeleton */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-r from-game-surface-hover via-game-surface to-game-surface-hover animate-pulse">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-game-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      )}

      {/* Error State */}
      {hasError && fallbackIcon && (
        <div className="absolute inset-0 bg-game-surface-hover flex flex-col items-center justify-center text-game-text-muted">
          <ImageOff className="w-12 h-12 mb-2" />
          <p className="text-xs">No Image</p>
        </div>
      )}

      {/* The Image */}
      {isInView && imgSrc && !hasError && (
        <img
          src={imgSrc}
          alt={alt}
          className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
        />
      )}
    </div>
  );
}
