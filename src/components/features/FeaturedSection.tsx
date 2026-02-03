/**
 * FEATURED GAMES BANNER - Unblocked Games Style
 * 
 * Horizontal scrolling banner with featured games:
 * - Compact cards in a row
 * - Quick visual recognition
 * - Badge indicators (NEW, HOT, POPULAR)
 * - Instant click to play
 */

import { Game } from '@/data/games';
import { Flame, Sparkles, Play } from 'lucide-react';

interface FeaturedSectionProps {
  games: Game[];
  onGameClick: (gameId: string) => void;
}

export default function FeaturedSection({ games, onGameClick }: FeaturedSectionProps) {
  if (games.length === 0) return null;

  return (
    <div className="relative">
      {/* Horizontal scroll container */}
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-game-primary scrollbar-track-game-surface">
        {games.map((game, index) => (
          <div
            key={game.id}
            onClick={() => onGameClick(game.id)}
            className="flex-shrink-0 w-72 cursor-pointer group"
          >
            <div className="relative bg-game-surface rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              {/* Game thumbnail */}
              <div className="relative aspect-video overflow-hidden bg-game-bg">
                <img
                  src={game.thumbnail}
                  alt={game.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Badges - positioned top-left */}
                <div className="absolute top-2 left-2 flex flex-col gap-1">
                  {index === 0 && (
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 px-2 py-1 rounded text-xs font-bold text-black uppercase flex items-center gap-1 shadow-lg">
                      <Sparkles className="w-3 h-3" />
                      Popular
                    </span>
                  )}
                  {game.isHot && (
                    <span className="bg-gradient-to-r from-red-500 to-pink-500 px-2 py-1 rounded text-xs font-bold text-white uppercase flex items-center gap-1 shadow-lg">
                      <Flame className="w-3 h-3" />
                      Hot
                    </span>
                  )}
                  {game.isNew && (
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 px-2 py-1 rounded text-xs font-bold text-white uppercase shadow-lg">
                      New
                    </span>
                  )}
                </div>

                {/* Play overlay on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-game-primary rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Play className="w-8 h-8 text-white fill-white" />
                  </div>
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>

              {/* Game info */}
              <div className="p-3">
                <h3 className="text-lg font-bold text-game-text truncate group-hover:text-game-primary transition-colors">
                  {game.title}
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-game-text-muted uppercase font-semibold">
                    {game.category}
                  </span>
                  <span className="text-xs bg-game-primary/20 text-game-primary px-2 py-1 rounded font-semibold">
                    Play Now →
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll hint */}
      <div className="absolute right-0 top-0 bottom-4 w-16 bg-gradient-to-l from-game-bg to-transparent pointer-events-none" />
    </div>
  );
}
