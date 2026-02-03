/**
 * FEATURED GAMES SECTION
 * 
 * Magazine-style hero section with:
 * - Large hero card (2 columns wide) for first featured game
 * - Two smaller cards stacked vertically on the right
 * - Creates visual hierarchy and professional look
 */

import { Game } from '@/data/games';
import { Star, Play } from 'lucide-react';

interface FeaturedSectionProps {
  games: Game[];
  onGameClick: (gameId: string) => void;
}

export default function FeaturedSection({ games, onGameClick }: FeaturedSectionProps) {
  if (games.length === 0) return null;

  const [heroGame, ...sideGames] = games;

  return (
    <section className="mb-12">
      {/* Section header */}
      <div className="flex items-center space-x-2 mb-6">
        <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
        <h2 className="text-3xl font-bold text-game-text">Featured Games</h2>
      </div>

      {/* HUGE Hero Game (Epic/Steam style) - Takes full width on mobile, 2 cols on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* MASSIVE Hero Card - Takes 2 columns and 2 rows for Epic impact */}
        <div
          onClick={() => onGameClick(heroGame.id)}
          className="lg:col-span-2 lg:row-span-2 game-card cursor-pointer group bg-game-surface rounded-xl overflow-hidden shadow-2xl hover:shadow-[0_0_50px_rgba(88,101,242,0.5)] transition-all duration-500"
        >
          <div className="relative lg:aspect-[16/10] aspect-video overflow-hidden bg-game-bg">
            <img
              src={heroGame.thumbnail}
              alt={heroGame.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              style={{ objectFit: 'cover' }}
            />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            {/* Play button overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="bg-game-primary rounded-full p-8 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                <Play className="w-14 h-14 text-white fill-white" />
              </div>
            </div>

            {/* Game info overlay (bottom) */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center space-x-2 mb-3">
                <span className="bg-yellow-400 px-4 py-2 rounded-full text-sm font-bold text-black uppercase flex items-center space-x-2">
                  <Star className="w-4 h-4 fill-black" />
                  <span>Hero Game</span>
                </span>
                <span className="bg-game-primary/90 px-3 py-1 rounded-full text-xs font-bold text-white uppercase">
                  {heroGame.category}
                </span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">{heroGame.title}</h3>
              {heroGame.description && (
                <p className="text-base text-gray-200">{heroGame.description}</p>
              )}
            </div>
          </div>
        </div>

        {/* Side Cards - Stacked vertically */}
        <div className="flex flex-col gap-6">
          {sideGames.slice(0, 2).map((game) => (
            <div
              key={game.id}
              onClick={() => onGameClick(game.id)}
              className="game-card cursor-pointer group bg-game-surface rounded-xl overflow-hidden shadow-xl hover:shadow-2xl"
            >
              <div className="relative lg:aspect-[16/10] aspect-video overflow-hidden bg-game-bg">
                <img
                  src={game.thumbnail}
                  alt={game.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ objectFit: 'cover' }}
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Play button overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-game-primary rounded-full p-5 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Play className="w-8 h-8 text-white fill-white" />
                  </div>
                </div>

                {/* Game info overlay (bottom) */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="bg-game-primary/90 px-3 py-1 rounded-full text-xs font-bold text-white uppercase">
                      {game.category}
                    </span>
                    <span className="bg-yellow-500 px-2 py-0.5 rounded-full text-xs font-bold text-black uppercase flex items-center space-x-1">
                      <Star className="w-3 h-3 fill-black" />
                      <span>Featured</span>
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{game.title}</h3>
                  {game.description && (
                    <p className="text-xs text-gray-200 line-clamp-1">{game.description}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
