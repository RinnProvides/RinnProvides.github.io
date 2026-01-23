/**
 * GAME RATING COMPONENT
 * 
 * Interactive 5-star rating system
 * Shows current average rating
 * Allows users to submit their own rating
 */

import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { getGameRatingStats, hasUserRated, getUserRatingForGame, addRating, type RatingStats } from '@/lib/ratings';

interface GameRatingProps {
  gameId: string;
  canRate?: boolean; // Can user submit a rating?
  size?: 'small' | 'medium' | 'large';
  showCount?: boolean; // Show rating count?
}

export default function GameRating({ 
  gameId, 
  canRate = false, 
  size = 'small',
  showCount = true 
}: GameRatingProps) {
  const [stats, setStats] = useState<RatingStats | null>(null);
  const [userRating, setUserRating] = useState<number | null>(null);
  const [hasRated, setHasRated] = useState(false);
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);

  // Size configurations
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-5 h-5',
    large: 'w-6 h-6'
  };

  const starSize = sizeClasses[size];

  // Load rating data
  useEffect(() => {
    const loadRatings = () => {
      const gameStats = getGameRatingStats(gameId);
      setStats(gameStats);
      
      const alreadyRated = hasUserRated(gameId);
      setHasRated(alreadyRated);
      
      if (alreadyRated) {
        setUserRating(getUserRatingForGame(gameId));
      }
    };

    loadRatings();
  }, [gameId]);

  // Handle rating submission
  const handleRate = (rating: number) => {
    if (!canRate || hasRated) return;

    try {
      addRating(gameId, rating);
      setUserRating(rating);
      setHasRated(true);
      
      // Reload stats
      const updatedStats = getGameRatingStats(gameId);
      setStats(updatedStats);
      
      console.log(`Rated game ${gameId} with ${rating} stars`);
    } catch (error) {
      console.error('Error submitting rating:', error);
    }
  };

  if (!stats) {
    return null; // Loading
  }

  const averageRating = stats.averageRating;
  const displayRating = hoveredStar !== null ? hoveredStar : (userRating || averageRating);

  return (
    <div className="flex items-center space-x-2">
      {/* Stars */}
      <div className="flex items-center space-x-0.5">
        {[1, 2, 3, 4, 5].map((star) => {
          const isFilled = star <= Math.round(displayRating);
          const isHovered = hoveredStar !== null && star <= hoveredStar;
          const isClickable = canRate && !hasRated;

          return (
            <button
              key={star}
              onClick={() => isClickable && handleRate(star)}
              onMouseEnter={() => isClickable && setHoveredStar(star)}
              onMouseLeave={() => isClickable && setHoveredStar(null)}
              disabled={!isClickable}
              className={`transition-all duration-150 ${
                isClickable ? 'cursor-pointer hover:scale-110' : 'cursor-default'
              }`}
            >
              <Star
                className={`${starSize} transition-colors ${
                  isFilled || isHovered
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'fill-none text-gray-500'
                }`}
              />
            </button>
          );
        })}
      </div>

      {/* Rating Text */}
      {stats.totalRatings > 0 && (
        <div className="flex items-center space-x-1 text-xs text-game-text-muted">
          <span className="font-semibold text-game-text">
            {averageRating.toFixed(1)}
          </span>
          {showCount && (
            <span>({stats.totalRatings})</span>
          )}
        </div>
      )}

      {/* User Rating Indicator */}
      {hasRated && userRating && (
        <span className="text-xs text-green-500 font-medium">
          ✓ Rated
        </span>
      )}
    </div>
  );
}
