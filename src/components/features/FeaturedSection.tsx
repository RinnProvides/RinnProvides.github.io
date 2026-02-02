import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Game } from '@/data/games'; // <--- FIXED IMPORT PATH
import { FaPlay, FaStar } from 'react-icons/fa';
import { Badge } from '@/components/ui/badge';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

interface FeaturedSectionProps {
  games: Game[];
  onGameClick?: (gameId: string) => void;
}

export default function FeaturedSection({ games, onGameClick }: FeaturedSectionProps) {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  if (games.length === 0) return null;

  const handlePlayClick = (gameId: string) => {
    if (onGameClick) {
      onGameClick(gameId);
    } else {
      navigate(`/play/${gameId}`);
    }
  };

  return (
    <section className="mb-16">
      <div className="relative h-[600px] md:h-[500px] bg-game-card-dark rounded-3xl overflow-hidden shadow-2xl group">
        <AutoPlaySwipeableViews
          index={index}
          onChangeIndex={setIndex}
          enableMouseEvents
          interval={5000}
          className="h-full"
          containerStyle={{ height: '100%' }}
          slideStyle={{ height: '100%' }}
        >
          {games.map((game) => (
            <div key={game.id} className="flex flex-col md:flex-row h-full">
              {/* LEFT SIDE: BIG IMAGE */}
              <div className="w-full h-1/2 md:h-full md:w-2/3 relative overflow-hidden">
                <div className="absolute inset-0 bg-game-accent/10 z-10"></div>
                <img 
                  src={game.thumbnail} 
                  alt={game.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* RIGHT SIDE: CONTENT BOX */}
              <div className="w-full h-1/2 md:h-full md:w-1/3 bg-gradient-to-br from-game-card-dark to-game-bg p-6 md:p-10 flex flex-col justify-center relative z-20 border-t md:border-t-0 md:border-l border-white/10">
                
                {/* Badges & Rating */}
                <div className="flex items-center space-x-2 mb-4">
                  <Badge variant="accent" size="md">Featured</Badge>
                  {game.rating > 4.5 && (
                    <Badge variant="success" size="md" icon={<FaStar className="text-yellow-400" />}>
                      Top Rated
                    </Badge>
                  )}
                </div>

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
                  {game.title}
                </h2>

                {/* Description */}
                <p className="text-game-text-muted text-sm md:text-base mb-6 line-clamp-3 md:line-clamp-5 font-medium">
                  {game.description}
                </p>

                {/* Categories */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {game.categories.slice(0, 3).map(cat => (
                    <span key={cat} className="text-xs px-3 py-1 rounded-full bg-white/10 text-game-text-light uppercase tracking-wider font-bold">
                      {cat}
                    </span>
                  ))}
                </div>

                {/* Play Button */}
                <button
                  onClick={() => handlePlayClick(game.id)}
                  className="btn-game-primary w-full md:w-auto text-lg py-4 flex items-center justify-center space-x-3 group/btn"
                >
                  <FaPlay className="group-hover/btn:scale-110 transition-transform" />
                  <span>Play Now</span>
                </button>
              </div>
            </div>
          ))}
        </AutoPlaySwipeableViews>

        {/* Carousel Indicators (Bottom Right) */}
        <div className="absolute bottom-6 right-6 flex space-x-2 z-30">
          {games.map((_, i) => (
            <button
              key={i}
              className={`h-3 rounded-full transition-all duration-300 ${
                i === index ? 'w-8 bg-game-accent' : 'w-3 bg-white/30 hover:bg-white/50'
              }`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
