/**
 * MY FAVORITES SECTION
 * 
 * Display user's favorite games on homepage
 */

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { getFavoriteIds } from '@/lib/favorites';
import { getGameById } from '@/data/games';
import GameCard from './GameCard';

export default function FavoritesSection() {
  const navigate = useNavigate();
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  // Load favorites on mount and when localStorage changes
  useEffect(() => {
    const loadFavorites = () => {
      setFavoriteIds(getFavoriteIds());
    };

    loadFavorites();

    // Listen for storage changes (when favorites are updated)
    window.addEventListener('storage', loadFavorites);
    
    // Custom event for same-tab updates
    window.addEventListener('favoritesChanged', loadFavorites);

    return () => {
      window.removeEventListener('storage', loadFavorites);
      window.removeEventListener('favoritesChanged', loadFavorites);
    };
  }, []);

  // Get actual game objects
  const favoriteGames = favoriteIds
    .map(id => getGameById(id))
    .filter(game => game !== undefined);

  // Don't show section if no favorites
  if (favoriteGames.length === 0) {
    return null;
  }

  const handleGameClick = (gameId: string) => {
    navigate(`/play/${gameId}`);
  };

  return (
    <section className="mb-12">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Heart className="w-7 h-7 text-red-500 fill-red-500" />
          <h2 className="text-3xl font-bold text-game-text">My Favorites</h2>
        </div>
        <div className="text-game-text-muted text-sm">
          {favoriteGames.length} {favoriteGames.length === 1 ? 'game' : 'games'}
        </div>
      </div>

      {/* Games Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {favoriteGames.map((game) => (
          <GameCard
            key={game.id}
            game={game}
            onClick={() => handleGameClick(game.id)}
          />
        ))}
      </div>
    </section>
  );
}
