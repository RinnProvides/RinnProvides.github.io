import { useEffect, useRef } from 'react';

interface AdBannerProps {
  size: 'leaderboard' | 'rectangle' | 'skyscraper' | 'mobile-banner';
  className?: string;
}

// Mapping your specific keys and scripts
const adConfig = {
  'skyscraper': { 
    width: 160, height: 600, 
    key: '25eda8a4a8c0e5a7567249b284cf2c40', 
    type: 'standard' 
  },
  'leaderboard': { 
    width: 728, height: 90, 
    key: '8299188f877e0beed915965fc571bac7', 
    type: 'standard' 
  },
  'mobile-banner': { 
    width: 320, height: 50, 
    key: '1360f9f2b1096174487624e9f2a8cf52', 
    type: 'standard' 
  },
  'rectangle': { 
    width: 300, height: 250, 
    key: '3dfcccad9efe36b5497c3fc15ad86080', 
    type: 'container' // This one uses the "container-" div style
  },
};

export default function AdBanner({ size, className = '' }: AdBannerProps) {
  const config = adConfig[size];
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!bannerRef.current) return;

    // 1. Clear previous content
    bannerRef.current.innerHTML = '';

    // 2. Handle Rectangle (The "Effective Gate" container version)
    if (config.type === 'container') {
      const containerDiv = document.createElement('div');
      containerDiv.id = `container-${config.key}`;
      
      const script = document.createElement('script');
      script.async = true;
      script.setAttribute('data-cfasync', 'false');
      script.src = `https://pl28604721.effectivegatecpm.com/${config.key}/invoke.js`;
      
      bannerRef.current.appendChild(containerDiv);
      bannerRef.current.appendChild(script);
    } 
    
    // 3. Handle Others (The "atOptions" iframe version)
    else {
      const confScript = document.createElement('script');
      const adScript = document.createElement('script');

      confScript.type = 'text/javascript';
      confScript.innerHTML = `
        atOptions = {
          'key' : '${config.key}',
          'format' : 'iframe',
          'height' : ${config.height},
          'width' : ${config.width},
          'params' : {}
        };
      `;
      adScript.src = `https://www.highperformanceformat.com/${config.key}/invoke.js`;

      bannerRef.current.appendChild(confScript);
      bannerRef.current.appendChild(adScript);
    }
  }, [size]);

  return (
    <div
      className={`ad-banner flex flex-col items-center justify-center overflow-hidden ${className}`}
      style={{
        width: `${config.width}px`,
        height: `${config.height}px`,
        maxWidth: '100%',
        minHeight: `${config.height}px`
      }}
    >
      <div ref={bannerRef} />
      <span className="text-[10px] text-gray-500 uppercase mt-1">Advertisement</span>
    </div>
  );
}
