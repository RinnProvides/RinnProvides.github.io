/**
 * LAZY LOADING IMAGE COMPONENT
 * 
 * Only loads images when they're about to enter the viewport
 * Shows skeleton loader while loading
 * Fallback placeholder for broken images
 */

import { useState, useEffect, useRef } from 'react';
import { ImageOff } from 'lucide-react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackIcon?: boolean;
}

export default function LazyImage({ src, alt, className = '', fallbackIcon = true }: LazyImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  // Intersection Observer to detect when image enters viewport
  useEffect(() => {
    if (!imgRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect(); // Stop observing once loaded
          }
        });
      },
      {
        rootMargin: '50px', // Start loading 50px before entering viewport
        threshold: 0.01
      }
    );

    observer.observe(imgRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    console.warn(`Failed to load image: ${src}`);
  };

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {/* Skeleton Loader */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-r from-game-surface-hover via-game-surface to-game-surface-hover animate-pulse">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-game-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      )}

      {/* Error Placeholder */}
      {hasError && fallbackIcon && (
        <div className="absolute inset-0 bg-game-surface-hover flex flex-col items-center justify-center text-game-text-muted">
          <ImageOff className="w-12 h-12 mb-2" />
          <p className="text-xs">Image not available</p>
        </div>
      )}

      {/* Actual Image - only load when in view */}
      {isInView && (
        <img
          src={src}
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
