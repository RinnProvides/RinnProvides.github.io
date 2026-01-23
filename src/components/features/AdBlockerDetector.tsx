/**
 * AD BLOCKER DETECTOR - Improved UI
 * 
 * Detects if user has an ad blocker enabled and blocks game access until disabled.
 * This is ESSENTIAL for monetization - no ads = no revenue = no free games!
 * 
 * IMPROVED: Smaller, cleaner modal with better visual hierarchy
 */

import { useState, useEffect } from 'react';
import { Shield, RefreshCw } from 'lucide-react';

export default function AdBlockerDetector() {
  const [adBlockerDetected, setAdBlockerDetected] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  // Detect ad blocker
  const detectAdBlocker = async (): Promise<boolean> => {
    try {
      const response = await fetch('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', {
        method: 'HEAD',
        mode: 'no-cors',
        cache: 'no-store'
      });
      return false;
    } catch (error) {
      return true;
    }
  };

  // Alternative detection method using DOM manipulation
  const detectAdBlockerDOM = (): boolean => {
    const testAd = document.createElement('div');
    testAd.innerHTML = '&nbsp;';
    testAd.className = 'adsbox ad adsbygoogle';
    testAd.style.cssText = 'position: absolute; top: -1px; left: -1px; width: 1px; height: 1px;';
    
    document.body.appendChild(testAd);
    
    const isBlocked = 
      testAd.offsetHeight === 0 ||
      testAd.offsetWidth === 0 ||
      window.getComputedStyle(testAd).display === 'none' ||
      window.getComputedStyle(testAd).visibility === 'hidden';
    
    document.body.removeChild(testAd);
    
    return isBlocked;
  };

  // Run detection on mount
  useEffect(() => {
    const checkAdBlocker = async () => {
      setIsChecking(true);
      
      const networkBlocked = await detectAdBlocker();
      const domBlocked = detectAdBlockerDOM();
      
      const hasAdBlocker = networkBlocked || domBlocked;
      setAdBlockerDetected(hasAdBlocker);
      setIsChecking(false);
      
      if (hasAdBlocker) {
        console.warn('Ad blocker detected! Please disable to support free games.');
      }
    };

    checkAdBlocker();
  }, []);

  // Recheck every 3 seconds if ad blocker is detected
  useEffect(() => {
    if (!adBlockerDetected) return;

    const interval = setInterval(async () => {
      const networkBlocked = await detectAdBlocker();
      const domBlocked = detectAdBlockerDOM();
      
      if (!networkBlocked && !domBlocked) {
        setAdBlockerDetected(false);
        window.location.reload();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [adBlockerDetected]);

  // Handle manual recheck
  const handleRecheck = async () => {
    setIsChecking(true);
    
    const networkBlocked = await detectAdBlocker();
    const domBlocked = detectAdBlockerDOM();
    
    const hasAdBlocker = networkBlocked || domBlocked;
    setAdBlockerDetected(hasAdBlocker);
    setIsChecking(false);
    
    if (!hasAdBlocker) {
      window.location.reload();
    }
  };

  if (!adBlockerDetected && !isChecking) {
    return null;
  }

  if (isChecking && !adBlockerDetected) {
    return null;
  }

  if (adBlockerDetected) {
    return (
      <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
        <div className="bg-gradient-to-br from-game-surface to-game-surface-hover rounded-2xl shadow-2xl max-w-md w-full p-6 border border-game-border">
          {/* Icon */}
          <div className="flex justify-center mb-4">
            <div className="bg-red-500/20 p-4 rounded-full">
              <Shield className="w-10 h-10 text-red-400" />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-center text-game-text mb-2">
            Ad Blocker Detected
          </h2>

          {/* Message */}
          <div className="space-y-3 mb-6 text-center">
            <p className="text-game-text-muted text-sm">
              Please disable your ad blocker to continue playing free games.
            </p>
            
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3 text-left">
              <p className="text-xs text-game-text-muted leading-relaxed">
                💡 <strong className="text-game-text">Quick Fix:</strong> Click your ad blocker icon and select "Disable for this site"
              </p>
            </div>
          </div>

          {/* Action Button */}
          <button
            onClick={handleRecheck}
            disabled={isChecking}
            className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-game-primary to-blue-600 hover:from-blue-600 hover:to-game-primary disabled:from-gray-600 disabled:to-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg disabled:cursor-not-allowed transform hover:scale-105 active:scale-95"
          >
            {isChecking ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Checking...</span>
              </>
            ) : (
              <>
                <RefreshCw className="w-4 h-4" />
                <span>I Disabled It</span>
              </>
            )}
          </button>

          {/* Auto-check notice */}
          <p className="text-center text-game-text-muted text-xs mt-4 opacity-70">
            Automatically checking every 3 seconds
          </p>
        </div>
      </div>
    );
  }

  return null;
}
