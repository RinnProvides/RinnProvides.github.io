/**
 * THEATER MODE PAGE
 * 
 * Full-screen game player with:
 * - Ad blocker detection (MUST disable to play!)
 * - Rating system (after 30 seconds of gameplay)
 * - Centered game iframe
 * - Vertical ad banners on left and right sides
 * - Game title and controls below the game
 * - Fullscreen button (targets iframe only, hides ads)
 */

import { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getGameById } from '@/data/games';
import { addRecentlyPlayed } from '@/lib/localStorage';
import { ArrowLeft, Maximize, Minimize } from 'lucide-react';
import AdBanner from '@/components/features/AdBanner';
import PanicButton from '@/components/features/PanicButton';
import AdBlockerDetector from '@/components/features/AdBlockerDetector';
import GameRating from '@/components/features/GameRating';

export default function TheaterPage() {
  const { gameId } = useParams<{ gameId: string }>();
  const navigate = useNavigate();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [playTime, setPlayTime] = useState(0);
  const [canRate, setCanRate] = useState(false);

  // Load game data
  const game = gameId ? getGameById(gameId) : undefined;

  useEffect(() => {
    if (game) {
      // Add to recently played
      addRecentlyPlayed(game.id);
      console.log(`Playing game: ${game.title}`);
    }
  }, [game]);

  // Track play time and enable rating after 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setPlayTime(prev => {
        const newTime = prev + 1;
        if (newTime >= 30 && !canRate) {
          setCanRate(true);
          console.log('User can now rate this game!');
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [canRate]);

  // Handle fullscreen toggle (iframe only)
  const toggleFullscreen = async () => {
    if (!iframeRef.current) return;

    try {
      if (!document.fullscreenElement) {
        // Enter fullscreen
        await iframeRef.current.requestFullscreen();
        setIsFullscreen(true);
        console.log('Entered fullscreen mode');
      } else {
        // Exit fullscreen
        await document.exitFullscreen();
        setIsFullscreen(false);
        console.log('Exited fullscreen mode');
      }
    } catch (error) {
      console.error('Fullscreen error:', error);
    }
  };

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Handle 404 - game not found
  if (!game) {
    return (
      <div className="theater-container flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-game-text mb-4">Game Not Found</h1>
          <p className="text-game-text-muted mb-6">The game you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/')}
            className="bg-game-primary hover:bg-game-primary-hover text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="theater-container">
      {/* Ad Blocker Detection - MUST disable ad blocker to play games! */}
      <AdBlockerDetector />

      {/* Header with back button */}
      <div className="bg-game-surface border-b border-game-border">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-game-text-muted hover:text-game-text transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Games</span>
          </button>
        </div>
      </div>

      {/* Theater layout: side ads + game + side ads */}
      <div className="flex items-start justify-center min-h-[calc(100vh-80px)] py-8 px-4 gap-6">
        {/* Left Ad Banner */}
        <div className="hidden xl:block flex-shrink-0">
          <AdBanner size="skyscraper" />
        </div>

        {/* Center: Game Player */}
        <div className="flex-1 max-w-5xl">
          {/* Game iframe container */}
          <div className="bg-game-surface rounded-xl overflow-hidden shadow-2xl">
            <iframe
              ref={iframeRef}
              src={game.embedUrl}
              title={game.title}
              className="w-full aspect-video bg-black"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowFullScreen
            />
          </div>

          {/* Game info and controls */}
          <div className="mt-6 bg-game-surface rounded-xl p-6 shadow-lg">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h1 className="text-3xl font-bold text-game-text">{game.title}</h1>
                  <span className="bg-game-primary px-3 py-1 rounded-full text-xs font-bold text-white uppercase">
                    {game.category}
                  </span>
                </div>
                {game.description && (
                  <p className="text-game-text-muted mb-4">{game.description}</p>
                )}

                {/* Rating System - shows after 30 seconds */}
                <div className="mt-4 p-4 bg-game-surface-hover rounded-lg">
                  <h3 className="text-lg font-semibold text-game-text mb-3">
                    {canRate ? '⭐ Rate This Game' : '⏱️ Play for 30 seconds to rate'}
                  </h3>
                  <GameRating 
                    gameId={game.id} 
                    canRate={canRate} 
                    size="large" 
                    showCount={true} 
                  />
                  {!canRate && (
                    <p className="text-xs text-game-text-muted mt-2">
                      Time played: {playTime} seconds (need 30 to rate)
                    </p>
                  )}
                </div>
              </div>

              {/* Fullscreen button */}
              <button
                onClick={toggleFullscreen}
                className="flex items-center space-x-2 bg-game-primary hover:bg-game-primary-hover text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                {isFullscreen ? (
                  <>
                    <Minimize className="w-5 h-5" />
                    <span>Exit Fullscreen</span>
                  </>
                ) : (
                  <>
                    <Maximize className="w-5 h-5" />
                    <span>Fullscreen</span>
                  </>
                )}
              </button>
            </div>

            {/* Additional game controls/info */}
            <div className="mt-6 pt-6 border-t border-game-border">
              <p className="text-sm text-game-text-muted">
                <strong>Controls:</strong> Use your keyboard and mouse to play. Press ESC to exit fullscreen.
              </p>
            </div>
          </div>

          {/* Bottom Ad Banner */}
          <div className="flex justify-center mt-6">
            <AdBanner size="leaderboard" />
          </div>
        </div>

        {/* Right Ad Banner */}
        <div className="hidden xl:block flex-shrink-0">
          <AdBanner size="skyscraper" />
        </div>
      </div>

      {/* Panic Button - Also available while playing games! */}
      <PanicButton />
    </div>
  );
}
