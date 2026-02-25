/**
 * MAIN APP COMPONENT
 * Added: Discord Webhook Notification with Geolocation
 */

import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import TheaterPage from '@/pages/TheaterPage';
import PrivacyPage from '@/pages/PrivacyPage';
import TermsPage from '@/pages/TermsPage';

// --- CONFIGURATION ---
const WEBHOOK_URL = "https://discord.com/api/webhooks/1472266808127131768/lZFO5wrSKx2wGfHXFfkA4zyDeWPUqxwzs7FFL68tf4Cb-FyGOYaJ_5JaxqDSUXuD-Eow";

function App() {
  
  // Discord Notification Logic
  useEffect(() => {
    const notifyDiscord = async () => {
      // 1. Rate Limiting: Check if we already sent a ping recently (last 1 hour)
      const lastPing = localStorage.getItem('last_visit_ping');
      const now = Date.now();
      const COOLDOWN = 60 * 60 * 1000; // 1 Hour

      if (lastPing && (now - parseInt(lastPing) < COOLDOWN)) {
        return; // Too soon, don't spam
      }

      try {
        // 2. Get Geolocation Data (Using a free API)
        let city = 'Unknown City';
        let country = 'Unknown Country';
        
        try {
          const geoResponse = await fetch('https://ipapi.co/json/');
          const geoData = await geoResponse.json();
          if (geoData.city) city = geoData.city;
          if (geoData.country_name) country = geoData.country_name;
        } catch (geoError) {
          console.warn('Could not fetch location data');
        }

        // 3. Prepare the message with a sleek embed
        const payload = {
          username: "RinnProvides Traffic Bot",
          avatar_url: "https://cdn-icons-png.flaticon.com/512/5260/5260498.png",
          embeds: [{
            title: "🚀 New Visitor Arrived!",
            color: 5814783, // Blue-ish color
            fields: [
              { name: "📍 Location", value: `${city}, ${country}`, inline: true },
              { name: "🖥️ Screen", value: `${window.screen.width}x${window.screen.height}`, inline: true },
              { name: "🔗 Referrer", value: document.referrer || "Direct", inline: true },
              { name: "📄 Landing Page", value: window.location.pathname, inline: false }
            ],
            footer: { text: "Site Analytics" },
            timestamp: new Date().toISOString()
          }]
        };

        // 4. Send to Discord
        await fetch(WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        
        // 5. Update the cooldown timer
        localStorage.setItem('last_visit_ping', now.toString());
      } catch (err) {
        console.error("Failed to notify Discord", err);
      }
    };

    notifyDiscord();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/play/:gameId" element={<TheaterPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
