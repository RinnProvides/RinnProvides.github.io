/**
 * MAIN APP COMPONENT
 * Added: Discord Webhook Notification
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

      // 2. Prepare the message
      const payload = {
        content: "🔔 **New Visitor!** Someone just opened the website.",
        embeds: [{
          title: "Visitor Details",
          color: 5814783, // Blue-ish color
          fields: [
            { name: "Page", value: window.location.pathname, inline: true },
            { name: "Referrer", value: document.referrer || "Direct", inline: true },
            { name: "Screen", value: `${window.screen.width}x${window.screen.height}`, inline: true }
          ],
          timestamp: new Date().toISOString()
        }]
      };

      // 3. Send to Discord
      try {
        await fetch(WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        
        // 4. Update the cooldown timer
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
