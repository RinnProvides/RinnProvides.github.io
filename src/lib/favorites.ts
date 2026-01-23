/**
 * FAVORITES SYSTEM - localStorage Management
 * 
 * Store and retrieve user's favorite games
 */

const FAVORITES_KEY = 'rinnxus_favorites';

export interface FavoriteGame {
  id: string;
  addedAt: number; // timestamp
}

// Get all favorites
export const getFavorites = (): FavoriteGame[] => {
  try {
    const stored = localStorage.getItem(FAVORITES_KEY);
    if (!stored) return [];
    return JSON.parse(stored);
  } catch (error) {
    console.error('Error reading favorites:', error);
    return [];
  }
};

// Check if game is favorited
export const isFavorite = (gameId: string): boolean => {
  const favorites = getFavorites();
  return favorites.some(fav => fav.id === gameId);
};

// Add game to favorites
export const addFavorite = (gameId: string): void => {
  try {
    const favorites = getFavorites();
    
    // Don't add if already exists
    if (favorites.some(fav => fav.id === gameId)) {
      return;
    }
    
    const newFavorite: FavoriteGame = {
      id: gameId,
      addedAt: Date.now()
    };
    
    favorites.push(newFavorite);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  } catch (error) {
    console.error('Error adding favorite:', error);
  }
};

// Remove game from favorites
export const removeFavorite = (gameId: string): void => {
  try {
    const favorites = getFavorites();
    const filtered = favorites.filter(fav => fav.id !== gameId);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(filtered));
  } catch (error) {
    console.error('Error removing favorite:', error);
  }
};

// Toggle favorite status
export const toggleFavorite = (gameId: string): boolean => {
  if (isFavorite(gameId)) {
    removeFavorite(gameId);
    return false;
  } else {
    addFavorite(gameId);
    return true;
  }
};

// Get favorite game IDs (sorted by most recent)
export const getFavoriteIds = (): string[] => {
  const favorites = getFavorites();
  // Sort by most recently added first
  favorites.sort((a, b) => b.addedAt - a.addedAt);
  return favorites.map(fav => fav.id);
};

// Get count of favorites
export const getFavoritesCount = (): number => {
  return getFavorites().length;
};
