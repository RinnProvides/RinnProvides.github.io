/**
 * TOP RATED SECTION
 * 
 * Displays highest-rated games based on user ratings
 * Only shows games with minimum 3 ratings to prevent bias
 */

import { useEffect, useState } from 'react';
import { getTopRatedGames } from '@/lib/ratings';
import { getGameById } from '@/data/games';
import GameCard from './GameCard';
import { Trophy } from 'lucide-react';

interface TopRatedSectionProps {
  onGameClick: (gameId: string) => void;
}

export default function TopRatedSection({ onGameClick }: TopRatedSectionProps) {
  const [topRatedGames, setTopRatedGames] = useState<any[]>([]);

  useEffect(() => {
    // Get top 6 rated games (minimum 3 ratings required)
    const topGames = getTopRatedGames(3)
      .slice(0, 6)
      .map(({ gameId }) => getGameById(gameId))
      .filter(game => game !== undefined);

    setTopRatedGames(topGames);
  }, []);

  // Don't show section if less than 3 top-rated games
  if (topRatedGames.length < 3) {
    return null;
  }

  return (
    <section className="mb-12">
      {/* Section Header */}
      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-2 rounded-lg">
          <Trophy className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-game-text">⭐ Top Rated Games</h2>
          <p className="text-game-text-muted">Highest rated by players like you!</p>
        </div>
      </div>

      {/* Games Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {topRatedGames.map((game) => (
          <GameCard
            key={game.id}
            game={game}
            onClick={() => onGameClick(game.id)}
          />
        ))}
      </div>
    </section>
  );
}
