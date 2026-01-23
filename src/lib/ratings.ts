/**
 * RATING SYSTEM - LocalStorage Management
 * 
 * Store and retrieve game ratings from localStorage
 * Calculate average ratings per game
 * Track user ratings and prevent duplicate ratings
 */

export interface GameRating {
  gameId: string;
  rating: number; // 1-5 stars
  timestamp: number;
}

export interface RatingStats {
  averageRating: number;
  totalRatings: number;
  distribution: Record<number, number>; // star count => number of ratings
}

const RATINGS_KEY = 'game_ratings';
const USER_RATINGS_KEY = 'user_game_ratings';

/**
 * Get all ratings for all games
 */
export const getAllRatings = (): GameRating[] => {
  try {
    const data = localStorage.getItem(RATINGS_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error reading ratings:', error);
    return [];
  }
};

/**
 * Get user's ratings (games they've already rated)
 */
export const getUserRatings = (): Record<string, number> => {
  try {
    const data = localStorage.getItem(USER_RATINGS_KEY);
    return data ? JSON.parse(data) : {};
  } catch (error) {
    console.error('Error reading user ratings:', error);
    return {};
  }
};

/**
 * Check if user has already rated a game
 */
export const hasUserRated = (gameId: string): boolean => {
  const userRatings = getUserRatings();
  return gameId in userRatings;
};

/**
 * Get user's rating for a specific game
 */
export const getUserRatingForGame = (gameId: string): number | null => {
  const userRatings = getUserRatings();
  return userRatings[gameId] || null;
};

/**
 * Add a new rating for a game
 */
export const addRating = (gameId: string, rating: number): void => {
  if (rating < 1 || rating > 5) {
    throw new Error('Rating must be between 1 and 5');
  }

  // Add to all ratings
  const allRatings = getAllRatings();
  allRatings.push({
    gameId,
    rating,
    timestamp: Date.now()
  });
  localStorage.setItem(RATINGS_KEY, JSON.stringify(allRatings));

  // Update user ratings
  const userRatings = getUserRatings();
  userRatings[gameId] = rating;
  localStorage.setItem(USER_RATINGS_KEY, JSON.stringify(userRatings));

  console.log(`Added rating ${rating} stars for game ${gameId}`);
};

/**
 * Get rating statistics for a specific game
 */
export const getGameRatingStats = (gameId: string): RatingStats => {
  const allRatings = getAllRatings();
  const gameRatings = allRatings.filter(r => r.gameId === gameId);

  if (gameRatings.length === 0) {
    return {
      averageRating: 0,
      totalRatings: 0,
      distribution: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
    };
  }

  // Calculate distribution
  const distribution: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  let sum = 0;

  gameRatings.forEach(({ rating }) => {
    distribution[rating]++;
    sum += rating;
  });

  return {
    averageRating: sum / gameRatings.length,
    totalRatings: gameRatings.length,
    distribution
  };
};

/**
 * Get top rated games (by average rating)
 * Requires minimum number of ratings to prevent games with 1 five-star rating from dominating
 */
export const getTopRatedGames = (minRatings: number = 3): Array<{ gameId: string; stats: RatingStats }> => {
  const allRatings = getAllRatings();
  const gameIds = Array.from(new Set(allRatings.map(r => r.gameId)));

  const gamesWithStats = gameIds
    .map(gameId => ({
      gameId,
      stats: getGameRatingStats(gameId)
    }))
    .filter(({ stats }) => stats.totalRatings >= minRatings)
    .sort((a, b) => {
      // Sort by average rating, then by total ratings if tied
      if (Math.abs(b.stats.averageRating - a.stats.averageRating) < 0.1) {
        return b.stats.totalRatings - a.stats.totalRatings;
      }
      return b.stats.averageRating - a.stats.averageRating;
    });

  return gamesWithStats;
};

/**
 * Get most rated games (by total ratings count)
 */
export const getMostRatedGames = (limit: number = 10): Array<{ gameId: string; stats: RatingStats }> => {
  const allRatings = getAllRatings();
  const gameIds = Array.from(new Set(allRatings.map(r => r.gameId)));

  return gameIds
    .map(gameId => ({
      gameId,
      stats: getGameRatingStats(gameId)
    }))
    .sort((a, b) => b.stats.totalRatings - a.stats.totalRatings)
    .slice(0, limit);
};
