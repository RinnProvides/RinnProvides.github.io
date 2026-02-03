import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Game } from '@/data/games';
import { Badge } from '@/components/ui/badge';

// --- COMMENTED OUT THE BROKEN CAROUSEL IMPORTS ---
// import SwipeableViews from 'react-swipeable-views';
// import { autoPlay } from 'react-swipeable-views-utils';
// import { FaPlay, FaStar } from 'react-icons/fa';

interface FeaturedSectionProps {
  games: Game[];
  onGameClick?: (gameId: string) => void;
}

export default function FeaturedSection({ games, onGameClick }: FeaturedSectionProps) {
  const navigate = useNavigate();

  // 1. Check if data exists
  if (!games || games.length === 0) {
    return <div className="p-10 text-center text-red-500">No Games Found</div>;
  }

  // 2. Render a SIMPLE list instead of the Carousel
  return (
    <section className="mb-16 p-8 bg-gray-900 rounded-3xl text-white">
      <h1 className="text-3xl font-bold mb-4">DEBUG MODE: Featured Section</h1>
      <p className="mb-4 text-green-400">If you can see this, the Carousel was the problem!</p>
      
      <div className="grid gap-4">
        {games.map(game => (
            <div key={game.id} className="p-4 border border-white/10 rounded-xl flex gap-4">
                <img src={game.thumbnail} alt={game.title} className="w-32 h-20 object-cover rounded" />
                <div>
                    <h3 className="text-xl font-bold">{game.title}</h3>
                    {/* Test the Badge here safely */}
                    <Badge variant="accent">Test Badge</Badge>
                </div>
            </div>
        ))}
      </div>
    </section>
  );
}
