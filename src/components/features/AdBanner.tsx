import { useEffect, useRef } from 'react';

interface AdBannerProps {
  size: 'leaderboard' | 'rectangle' | 'skyscraper' | 'mobile-banner';
  className?: string;
}

const adSizes = {
  'leaderboard': { width: 728, height: 90 },
  'rectangle': { width: 300, height: 250 },
  'skyscraper': { width: 160, height: 600 },
  'mobile-banner': { width: 320, height: 50 },
};

export default function AdBanner({ size, className = '' }: AdBannerProps) {
  const adSize = adSizes[size];
  const bannerRef = useRef<HTMLDivElement>(null);
  
  // This is your specific Adsterra Key
  const AD_KEY = "25eda8a4a8c0e5a7567249b284cf2c40";

  useEffect(() => {
    if (!bannerRef.current) return;

    // Clear the container to prevent duplicate ads on re-renders
    bannerRef.current.innerHTML = '';

    const confScript = document.createElement('script');
    const adScript = document.createElement('script');

    confScript.type = 'text/javascript';
    confScript.innerHTML = `
      atOptions = {
        'key' : '${AD_KEY}',
        'format' : 'iframe',
        'height' : ${adSize.height},
        'width' : ${adSize.width},
        'params' : {}
      };
    `;

    adScript.type = 'text/javascript';
    adScript.src = `https://www.highperformanceformat.com/${AD_KEY}/invoke.js`;

    bannerRef.current.appendChild(confScript);
    bannerRef.current.appendChild(adScript);
  }, [size]); // Re-run if the size changes

  return (
    <div
      className={`ad-banner bg-game-surface rounded-lg border-2 border-game-border flex flex-col items-center justify-center overflow-hidden ${className}`}
      style={{
        width: `${adSize.width}px`,
        height: `${adSize.height}px`,
        maxWidth: '100%',
      }}
    >
      {/* Container where Adsterra will inject the iframe */}
      <div ref={bannerRef} />
      
      {/* Optional: Small label so users know it's an ad */}
      <span className="text-[10px] text-game-text-muted uppercase tracking-widest mt-1">
        Advertisement
      </span>
    </div>
  );
}
