/**
 * GAME COLLECTION CAROUSEL
 * 
 * Horizontal scrolling carousel for curated game collections
 * Features:
 * - Smooth horizontal scrolling
 * - Arrow navigation buttons
 * - Gradient fade edges
 * - Responsive design
 */

import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { type GameCollection } from '@/data/collections';
import { getGameById } from '@/data/games';
import LazyImage from './LazyImage';
import GameRating from './GameRating';

interface GameCollectionProps {
  collection: GameCollection;
  onGameClick: (gameId: string) => void;
}

export default function GameCollection({ collection, onGameClick }: GameCollectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Get actual game objects from IDs
  const games = collection.gameIds
    .map(id => getGameById(id))
    .filter(game => game !== undefined);

  // Check scroll position
  const checkScroll = () => {
    if (!scrollContainerRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  // Scroll left/right
  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    
    const scrollAmount = 300;
    const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
    
    scrollContainerRef.current.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
    });
    
    setTimeout(checkScroll, 300);
  };

  return (
    <section className="mb-10">
      {/* Collection Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className={`text-2xl font-bold bg-gradient-to-r ${collection.color} text-transparent bg-clip-text inline-block`}>
            {collection.title}
          </h3>
          <p className="text-sm text-game-text-muted mt-1">{collection.description}</p>
        </div>
        
        {/* Navigation Arrows */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`p-2 rounded-lg transition-all ${
              canScrollLeft
                ? 'bg-game-surface-hover hover:bg-game-primary/20 text-game-text'
                : 'bg-game-surface text-game-text-muted cursor-not-allowed'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`p-2 rounded-lg transition-all ${
              canScrollRight
                ? 'bg-game-surface-hover hover:bg-game-primary/20 text-game-text'
                : 'bg-game-surface text-game-text-muted cursor-not-allowed'
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Scrollable Game Cards */}
      <div className="relative">
        {/* Left Gradient Fade */}
        {canScrollLeft && (
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-game-bg to-transparent z-10 pointer-events-none" />
        )}
        
        {/* Right Gradient Fade */}
        {canScrollRight && (
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-game-bg to-transparent z-10 pointer-events-none" />
        )}

        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          onScroll={checkScroll}
          className="flex space-x-4 overflow-x-auto scrollbar-hide scroll-smooth pb-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {games.map((game) => (
            <div
              key={game.id}
              onClick={() => onGameClick(game.id)}
              className="flex-shrink-0 w-64 cursor-pointer group"
            >
              <div className="bg-game-surface rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                {/* Game Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <LazyImage
                    src={game.thumbnail}
                    alt={game.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  
                  {/* Play Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className={`bg-gradient-to-r ${collection.color} rounded-full p-3`}>
                      <svg className="w-6 h-6 text-white fill-white" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Game Info */}
                <div className="p-3">
                  <h4 className="text-sm font-semibold text-game-text line-clamp-1 mb-1">
                    {game.title}
                  </h4>
                  <GameRating gameId={game.id} size="small" showCount={false} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hide scrollbar CSS */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
