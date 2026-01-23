/**
 * AD BANNER COMPONENT
 * 
 * Placeholder containers for ad networks (e.g., Google AdSense).
 * Standard IAB sizes included for easy integration.
 * 
 * HOW TO ADD REAL ADS:
 * 1. Replace the placeholder content with your ad network code
 * 2. Common networks: Google AdSense, Media.net, Ezoic
 * 3. Keep the className="ad-banner" for consistent styling
 */

interface AdBannerProps {
  size: 'leaderboard' | 'rectangle' | 'skyscraper' | 'mobile-banner';
  className?: string;
}

const adSizes = {
  'leaderboard': { width: 728, height: 90, label: '728x90 Leaderboard' },
  'rectangle': { width: 300, height: 250, label: '300x250 Rectangle' },
  'skyscraper': { width: 160, height: 600, label: '160x600 Skyscraper' },
  'mobile-banner': { width: 320, height: 50, label: '320x50 Mobile Banner' },
};

export default function AdBanner({ size, className = '' }: AdBannerProps) {
  const adSize = adSizes[size];

  return (
    <div
      className={`ad-banner bg-game-surface rounded-lg border-2 border-game-border flex items-center justify-center ${className}`}
      style={{
        width: `${adSize.width}px`,
        height: `${adSize.height}px`,
        maxWidth: '100%',
      }}
    >
      {/* REAL Google AdSense Integration */}
      {/* To activate: Replace data-ad-client and data-ad-slot with your AdSense codes */}
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-0000000000000000" // Replace with your AdSense publisher ID
        data-ad-slot="0000000000" // Replace with your ad unit ID
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      
      {/* Fallback placeholder (shown until AdSense loads) */}
      <div className="text-center p-4">
        <p className="text-game-text-muted font-semibold">Advertisement</p>
        <p className="text-xs text-game-text-muted mt-1">{adSize.label}</p>
        <p className="text-xs text-game-primary mt-2">Replace AdSense codes to activate</p>
      </div>
    </div>
  );
}
