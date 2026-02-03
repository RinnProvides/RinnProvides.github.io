import { useEffect, useRef } from 'react';

interface AdBannerProps {
  size: 'leaderboard' | 'rectangle' | 'skyscraper' | 'mobile-banner';
  className?: string;
}

const adConfig = {
  // --- ADSTERRA (Skyscrapers) ---
  'skyscraper': { 
    width: 160, 
    height: 600, 
    provider: 'adsterra',
    key: '25eda8a4a8c0e5a7567249b284cf2c40' // Your Adsterra Key
  },

  // --- MONETAG (Everything Else) ---
  // MAKE SURE TO PASTE YOUR REAL MONETAG URLS BELOW
  'leaderboard': { 
    width: 728, 
    height: 90, 
    provider: 'monetag',
    scriptUrl: '//your-monetag-script-url-for-leaderboard.js' 
  },
  'mobile-banner': { 
    width: 320, 
    height: 50, 
    provider: 'monetag',
    scriptUrl: '//your-monetag-script-url-for-mobile.js' 
  },
  'rectangle': { 
    width: 300, 
    height: 250, 
    provider: 'monetag',
    scriptUrl: '//your-monetag-script-url-for-rectangle.js' 
  },
};

export default function AdBanner({ size, className = '' }: AdBannerProps) {
  const config = adConfig[size];
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear container
    containerRef.current.innerHTML = '';

    // --- STRATEGY 1: MONETAG (Simple Script) ---
    if (config.provider === 'monetag' && config.scriptUrl) {
      const script = document.createElement('script');
      script.src = config.scriptUrl;
      script.async = true; 
      script.setAttribute('data-cfasync', 'false');
      containerRef.current.appendChild(script);
    } 
    
    // --- STRATEGY 2: ADSTERRA (Protected Iframe) ---
    // We write the ad code into a secure iframe so it doesn't conflict with React
    else if (config.provider === 'adsterra' && config.key) {
      const iframe = document.createElement('iframe');
      
      // Iframe styling to make it invisible
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      iframe.style.border = 'none';
      iframe.style.overflow = 'hidden';
      iframe.scrolling = 'no';
      
      containerRef.current.appendChild(iframe);

      // The HTML content for the iframe
      const doc = iframe.contentWindow?.document;
      if (doc) {
        doc.open();
        doc.write(`
          <!DOCTYPE html>
          <html>
            <body style="margin:0;padding:0;display:flex;justify-content:center;align-items:center;">
              <script type="text/javascript">
                atOptions = {
                  'key' : '${config.key}',
                  'format' : 'iframe',
                  'height' : ${config.height},
                  'width' : ${config.width},
                  'params' : {}
                };
              </script>
              <script type="text/javascript" src="https://www.highperformanceformat.com/${config.key}/invoke.js"></script>
            </body>
          </html>
        `);
        doc.close();
      }
    }

  }, [size, config]);

  return (
    <div
      ref={containerRef}
      className={`ad-banner flex flex-col items-center justify-center overflow-hidden bg-black/5 ${className}`}
      style={{
        width: `${config.width}px`,
        height: `${config.height}px`,
        minHeight: `${config.height}px` // Enforce height so layout doesn't jump
      }}
    />
  );
}
