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
    key: '25eda8a4a8c0e5a7567249b284cf2c40' 
  },

  // --- HILLTOPADS (Rectangle 300x250) ---
  // I moved your new code here
  'rectangle': { 
    width: 300, 
    height: 250, 
    provider: 'hilltop', 
    // This is the long URL from the code you pasted
    scriptUrl: '//metalliceducation.com/b.XhVKsjd/G/lg0RYAWfcB/Iewmh9EuWZnURlOkSPBT/Yf3mNIzcMmyrNRzTc_t/NSj/cd3cMVzNIy4/MeQC' 
  },

  // --- MONETAG (Others) ---
  // REMINDER: You still need real links for these!
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
};

export default function AdBanner({ size, className = '' }: AdBannerProps) {
  const config = adConfig[size];
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear container to prevent duplicate ads on re-renders
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
    else if (config.provider === 'adsterra' && config.key) {
      const iframe = document.createElement('iframe');
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      iframe.style.border = 'none';
      iframe.style.overflow = 'hidden';
      iframe.scrolling = 'no';
      containerRef.current.appendChild(iframe);

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

    // --- STRATEGY 3: HILLTOPADS (Injected Script) ---
    else if (config.provider === 'hilltop' && config.scriptUrl) {
      const script = document.createElement('script');
      
      // We manually attach the settings object the raw code was trying to pass
      // @ts-ignore - 'settings' is a custom property expected by Hilltop
      script.settings = {}; 
      
      script.src = config.scriptUrl;
      script.async = true;
      script.referrerPolicy = 'no-referrer-when-downgrade';
      
      // Instead of "l.parentNode.insertBefore", we just append to our React ref
      containerRef.current.appendChild(script);
    }

  }, [size, config]);

  return (
    <div
      ref={containerRef}
      className={`ad-banner flex flex-col items-center justify-center overflow-hidden bg-black/5 ${className}`}
      style={{
        width: `${config.width}px`,
        height: `${config.height}px`,
        minHeight: `${config.height}px`
      }}
    />
  );
}
