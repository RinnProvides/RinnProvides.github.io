/**
 * RECENTLY PLAYED SECTION
 * 
 * Displays the last 3 games the user has played.
 * Uses localStorage to persist data across sessions.
 */

import { Game } from '@/data/games';
import { Clock } from 'lucide-react';
import GameCard from './GameCard';

interface RecentlyPlayedProps {
  games: Game[];
  onGameClick: (gameId: string) => void;
}

export default function RecentlyPlayed({ games, onGameClick }: RecentlyPlayedProps) {
  if (games.length === 0) return null;

  return (
    <section className="mb-12">
      {/* Section header */}
      <div className="flex items-center space-x-2 mb-6">
        <Clock className="w-6 h-6 text-game-primary" />
        <h2 className="text-2xl font-bold text-game-text">Recently Played</h2>
      </div>

      {/* Recently played games grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game) => (
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
