/**
 * GAME CARD COMPONENT - Updated with Smart Image Loading
 * * Now attempts to load local thumbnails first!
 * Path: /public/images/thumbnails/{game-id}.webp
 */

import { useState, useEffect } from 'react';
import { Game, isGameNew } from '@/data/games';
import { Play, Heart } from 'lucide-react';
import LazyImage from './LazyImage';
import GameRating from './GameRating';
import { isFavorite, toggleFavorite } from '@/lib/favorites';

interface GameCardProps {
  game: Game;
  onClick: () => void;
}

export default function GameCard({ game, onClick }: GameCardProps) {
  const [favorited, setFavorited] = useState(false);

  // 1. Construct the path to the local image
  // This assumes your files are named "duck-life.webp", "moto-x3m.webp", etc.
  const localThumbnail = `/images/thumbnails/${game.id}.webp`;

  // Check if game is favorited on mount
  useEffect(() => {
    setFavorited(isFavorite(game.id));
  }, [game.id]);

  // Handle favorite toggle
  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering game click
    const newState = toggleFavorite(game.id);
    setFavorited(newState);
    
    // Dispatch custom event to update FavoritesSection
    window.dispatchEvent(new Event('favoritesChanged'));
  };

  return (
    <div
      onClick={onClick}
      className="game-card cursor-pointer group bg-game-surface rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 relative"
    >
      {/* Thumbnail with 16:9 aspect ratio + Lazy Loading */}
      <div className="relative aspect-video overflow-hidden bg-game-bg">
        <LazyImage
          src={localThumbnail}         // Try to load local file first
          fallbackSrc={game.thumbnail} // If local fails, use the URL from games.ts
          alt={game.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* Play button overlay (shows on hover) */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="bg-game-primary rounded-full p-4">
            <Play className="w-8 h-8 text-white fill-white" />
          </div>
        </div>

        {/* Favorite Heart Icon - Top Left */}
        <button
          onClick={handleFavoriteClick}
          className={`absolute top-2 left-2 z-10 p-2 rounded-full backdrop-blur-sm transition-all duration-200 ${
            favorited
              ? 'bg-red-500/90 hover:bg-red-600 scale-110'
              : 'bg-black/40 hover:bg-black/60'
          }`}
          title={favorited ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart
            className={`w-5 h-5 transition-all duration-200 ${
              favorited ? 'fill-white text-white' : 'text-white'
            }`}
          />
        </button>

        {/* Badges */}
        <div className="absolute top-2 right-2 flex flex-col gap-2">
          {/* NEW Badge */}
          {isGameNew(game) && (
            <div className="bg-red-600 px-3 py-1 rounded-full text-xs font-bold text-white uppercase shadow-lg animate-pulse flex items-center gap-1">
              <span className="text-yellow-300">✨</span>
              NEW
            </div>
          )}
          
          {/* HOT Badge */}
          {game.isHot && (
            <div className="bg-orange-600 px-3 py-1 rounded-full text-xs font-bold text-white uppercase shadow-lg flex items-center gap-1">
              🔥 HOT
            </div>
          )}
          
          {/* Categories badges */}
          {game.categories.slice(0, 2).map((cat, index) => (
            <div key={index} className="bg-game-primary/90 px-3 py-1 rounded-full text-xs font-semibold text-white uppercase">
              {cat}
            </div>
          ))}
        </div>
      </div>

      {/* Game info */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-game-text line-clamp-1 group-hover:text-game-primary transition-colors mb-2">
          {game.title}
        </h3>
        
        {/* Rating Display */}
        <div className="mb-2">
          <GameRating gameId={game.id} canRate={false} size="small" showCount={true} />
        </div>
        
        {game.description && (
          <p className="text-sm text-game-text-muted mt-1 line-clamp-2">
            {game.description}
          </p>
        )}
      </div>
    </div>
  );
}
