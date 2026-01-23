/**
 * MAIN APP COMPONENT
 * 
 * Handles routing between:
 * - HomePage: Main game browser
 * - TheaterPage: Full-screen game player
 * - PrivacyPage: Privacy policy (required for Google AdSense)
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import TheaterPage from '@/pages/TheaterPage';
import PrivacyPage from '@/pages/PrivacyPage';
import TermsPage from '@/pages/TermsPage';

function App() {
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
