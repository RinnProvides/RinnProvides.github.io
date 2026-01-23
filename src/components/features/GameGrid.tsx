/**
 * GAME GRID COMPONENT
 * 
 * Responsive grid that displays all games.
 * Features:
 * - Auto-fill columns based on screen size (min 250px per card)
 * - 16:9 aspect ratio enforcement
 * - Smooth filtering animations
 */

import { Game } from '@/data/games';
import GameCard from './GameCard';
import AdBanner from './AdBanner';

interface GameGridProps {
  games: Game[];
  onGameClick: (gameId: string) => void;
  categoryLabel?: string;
}

export default function GameGrid({ games, onGameClick, categoryLabel = 'All Games' }: GameGridProps) {
  return (
    <section className="mb-12">
      {/* Section header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-game-text">{categoryLabel}</h2>
        <p className="text-game-text-muted mt-1">{games.length} games available</p>
      </div>

      {/* Games grid with auto-fill responsive columns */}
      {games.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {games.map((game, index) => (
            <>
              <GameCard
                key={game.id}
                game={game}
                onClick={() => onGameClick(game.id)}
              />
              {/* Inject ad as 5th item (index 4) that blends with game cards */}
              {index === 3 && (
                <div className="bg-game-surface rounded-lg overflow-hidden shadow-lg flex items-center justify-center aspect-video">
                  <AdBanner size="rectangle" />
                </div>
              )}
            </>
          ))}
        </div>
      ) : (
        // Empty state
        <div className="text-center py-16 bg-game-surface rounded-xl border border-game-border">
          <p className="text-game-text-muted text-lg">No games found in this category</p>
        </div>
      )}
    </section>
  );
}
