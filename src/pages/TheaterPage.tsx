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
import { getGameById, isGameNew } from '@/data/games';
import { addRecentlyPlayed } from '@/lib/localStorage';
import { ArrowLeft, Maximize, Minimize, Loader2 } from 'lucide-react';
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
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingTip, setLoadingTip] = useState(0);
  const [loadingStage, setLoadingStage] = useState('Initializing');

  // Loading tips that rotate
  const loadingTips = [
    "💡 Use WASD or Arrow Keys to control most games",
    "🎯 Tip: Practice makes perfect - don't give up!",
    "⚡ Pro tip: Some games have hidden shortcuts",
    "🎮 Challenge your friends to beat your high score",
    "🌟 Rate games to help others find the best ones",
    "🔥 New games are added regularly - check back often",
    "🎪 Try different game categories for variety",
    "🏆 Compete on the leaderboards for glory",
    "🎨 Each game has unique controls - read the instructions",
    "⭐ Favorite games you love for quick access later"
  ];

  // Load game data
  const game = gameId ? getGameById(gameId) : undefined;

  useEffect(() => {
    if (game) {
      // Add to recently played
      addRecentlyPlayed(game.id);
      console.log(`Playing game: ${game.title}`);
      
      // Start loading animation
      setIsLoading(true);
      setLoadingProgress(0);
      
      // Simulate loading progress with stages
      const progressInterval = setInterval(() => {
        setLoadingProgress(prev => {
          const newProgress = prev + Math.random() * 12;
          
          // Update loading stage based on progress
          if (newProgress >= 0 && newProgress < 25) {
            setLoadingStage('Initializing game...');
          } else if (newProgress >= 25 && newProgress < 50) {
            setLoadingStage('Loading assets...');
          } else if (newProgress >= 50 && newProgress < 75) {
            setLoadingStage('Preparing controls...');
          } else if (newProgress >= 75 && newProgress < 90) {
            setLoadingStage('Almost ready...');
          }
          
          if (newProgress >= 90) {
            clearInterval(progressInterval);
            setLoadingStage('Finalizing...');
            return 90; // Stop at 90%, wait for iframe to actually load
          }
          return newProgress;
        });
      }, 150);

      // Rotate loading tips every 3 seconds
      const tipInterval = setInterval(() => {
        setLoadingTip(prev => (prev + 1) % loadingTips.length);
      }, 3000);

      return () => {
        clearInterval(progressInterval);
        clearInterval(tipInterval);
      };
    }
  }, [game]);

  // Handle iframe load
  const handleIframeLoad = () => {
    setLoadingProgress(100);
    setLoadingStage('Ready!');
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

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

      {/* Theater layout: game centered */}
      <div className="flex items-start justify-center min-h-[calc(100vh-80px)] py-8 px-4">
        {/* Center: Game Player */}
        <div className="flex-1 max-w-5xl">
          {/* Game iframe container */}
          <div className="bg-game-surface rounded-xl overflow-hidden shadow-2xl relative">
            {/* Enhanced Loading screen overlay */}
            {isLoading && (
              <div className="absolute inset-0 z-50 bg-gradient-to-br from-game-bg via-game-surface to-game-bg flex flex-col items-center justify-center overflow-hidden">
                {/* Animated background particles */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-game-primary rounded-full animate-ping" style={{ animationDelay: '0s', animationDuration: '3s' }} />
                  <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-blue-500 rounded-full animate-ping" style={{ animationDelay: '1s', animationDuration: '4s' }} />
                  <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-purple-500 rounded-full animate-ping" style={{ animationDelay: '2s', animationDuration: '3.5s' }} />
                  <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-game-primary rounded-full animate-ping" style={{ animationDelay: '1.5s', animationDuration: '4.5s' }} />
                </div>

                <div className="text-center relative z-10 max-w-2xl px-6">
                  {/* Game thumbnail preview */}
                  <div className="mb-6 relative inline-block">
                    <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-2xl border-4 border-game-primary/30 relative group">
                      <img 
                        src={game.thumbnail} 
                        alt={game.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      {/* Spinning loader overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative">
                          <Loader2 className="w-16 h-16 text-white animate-spin drop-shadow-lg" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-8 h-8 bg-game-primary rounded-full animate-pulse" />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Glowing ring effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-game-primary to-blue-500 opacity-30 blur-xl animate-pulse" />
                  </div>
                  
                  {/* Game title with gradient */}
                  <h2 className="text-4xl font-black mb-3 bg-gradient-to-r from-game-primary via-blue-500 to-purple-500 text-transparent bg-clip-text animate-pulse">
                    {game.title}
                  </h2>
                  
                  {/* Loading stage */}
                  <p className="text-game-text font-semibold mb-2 flex items-center justify-center gap-2">
                    <span className="inline-block w-2 h-2 bg-game-primary rounded-full animate-pulse" />
                    {loadingStage}
                  </p>
                  
                  {/* Category badges */}
                  <div className="mb-8 flex items-center justify-center gap-2 flex-wrap">
                    {game.categories.map((cat, index) => (
                      <span key={index} className="bg-game-primary/20 border border-game-primary/40 px-4 py-1.5 rounded-full text-xs font-bold text-game-primary uppercase tracking-wider">
                        {cat}
                      </span>
                    ))}
                  </div>
                  
                  {/* Enhanced Progress bar */}
                  <div className="w-full max-w-md mx-auto mb-4">
                    <div className="bg-game-surface-hover rounded-full h-4 overflow-hidden shadow-inner border border-game-border relative">
                      <div 
                        className="bg-gradient-to-r from-game-primary via-blue-500 to-purple-500 h-full transition-all duration-300 ease-out relative overflow-hidden"
                        style={{ width: `${loadingProgress}%` }}
                      >
                        {/* Animated shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_1.5s_infinite]" />
                        {/* Pulse effect at the end */}
                        <div className="absolute right-0 top-0 bottom-0 w-8 bg-white/30 blur-sm" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Progress percentage with better styling */}
                  <div className="flex items-center justify-center gap-4 mb-10">
                    <div className="text-center">
                      <p className="text-5xl font-black text-game-primary drop-shadow-lg">
                        {Math.round(loadingProgress)}<span className="text-2xl">%</span>
                      </p>
                    </div>
                  </div>
                  
                  {/* Rotating loading tips with fade animation */}
                  <div className="relative h-16 mb-6">
                    <div 
                      key={loadingTip}
                      className="absolute inset-0 flex items-center justify-center animate-fadeIn"
                    >
                      <div className="bg-game-surface-hover/80 backdrop-blur-sm border border-game-border rounded-xl px-6 py-3 shadow-lg">
                        <p className="text-sm text-game-text font-medium">
                          {loadingTips[loadingTip]}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Loading dots animation */}
                  <div className="flex items-center justify-center gap-2 mt-4">
                    <div className="w-3 h-3 bg-game-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            
            <iframe
              ref={iframeRef}
              src={game.embedUrl}
              title={game.title}
              className="w-full aspect-video bg-black"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowFullScreen
              onLoad={handleIframeLoad}
            />
          </div>

          {/* Game info and controls */}
          <div className="mt-6 bg-game-surface rounded-xl p-6 shadow-lg">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2 flex-wrap">
                  <h1 className="text-3xl font-bold text-game-text">{game.title}</h1>
                  {game.categories.map((cat, index) => (
                    <span key={index} className="bg-game-primary px-3 py-1 rounded-full text-xs font-bold text-white uppercase">
                      {cat}
                    </span>
                  ))}
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

        </div>
      </div>

      {/* Panic Button - Also available while playing games! */}
      <PanicButton />
    </div>
  );
}
