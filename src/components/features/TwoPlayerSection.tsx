/**
 * 2-PLAYER GAMES SECTION
 * 
 * Dedicated section for multiplayer games you can play with a friend.
 * Perfect for school computer labs or gaming with friends!
 */

import { Game } from '@/data/games';
import { Users } from 'lucide-react';
import GameCard from './GameCard';

interface TwoPlayerSectionProps {
  games: Game[];
  onGameClick: (gameId: string) => void;
}

export default function TwoPlayerSection({ games, onGameClick }: TwoPlayerSectionProps) {
  if (games.length === 0) return null;

  return (
    <section className="mb-12">
      {/* Section header with gradient background */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 mb-6 shadow-xl">
        <div className="flex items-center space-x-3">
          <Users className="w-8 h-8 text-white" />
          <div>
            <h2 className="text-3xl font-bold text-white">2-Player Games</h2>
            <p className="text-white/90 mt-1">Challenge your friend on the same keyboard!</p>
          </div>
        </div>
      </div>

      {/* 2-player games grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
