/**
 * Smart Ad Trigger
 * Opens the high-paying Direct Link in a new tab, but only once every X minutes.
 */

// Your specific Monetag Direct Link
const DIRECT_LINK_URL = "https://otieu.com/4/10551637"; 

// CONFIGURATION: Cooldown time (1 minute = 60000ms)
// Changed from 30 to 60
const AD_COOLDOWN = 60 * 1000; 

export const triggerSmartAd = () => {
  try {
    const lastAdTime = localStorage.getItem('lastAdShown');
    const now = Date.now();

    // Check if we are allowed to show an ad (Cooldown finished OR First time ever)
    if (!lastAdTime || (now - parseInt(lastAdTime) > AD_COOLDOWN)) {
      
      // Open your Monetag link in a new tab
      window.open(DIRECT_LINK_URL, '_blank');
      
      // Reset the timer so it doesn't happen again for 1 minute
      localStorage.setItem('lastAdShown', now.toString());
      console.log('$$$ Smart Ad Triggered');
      
    } else {
      console.log('Ad is in cooldown. User is safe.');
    }
  } catch (error) {
    console.error('Ad trigger failed:', error);
  }
};
