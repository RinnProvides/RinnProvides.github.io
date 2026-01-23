/**
 * LOCAL STORAGE UTILITIES
 * 
 * Manages "Recently Played" games using browser localStorage.
 * Stores the last 3 games the user has played.
 */

const RECENTLY_PLAYED_KEY = 'gamehub_recently_played';
const MAX_RECENT_GAMES = 3;

export interface RecentGame {
  id: string;
  playedAt: number; // Timestamp
}

/**
 * Get recently played games from localStorage
 */
export const getRecentlyPlayed = (): RecentGame[] => {
  try {
    const stored = localStorage.getItem(RECENTLY_PLAYED_KEY);
    if (!stored) return [];
    
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error('Error reading recently played games:', error);
    return [];
  }
};

/**
 * Add a game to recently played
 * Automatically keeps only the last 3 games
 */
export const addRecentlyPlayed = (gameId: string): void => {
  try {
    let recent = getRecentlyPlayed();
    
    // Remove the game if it already exists (to update timestamp)
    recent = recent.filter(game => game.id !== gameId);
    
    // Add the new game at the beginning
    recent.unshift({
      id: gameId,
      playedAt: Date.now()
    });
    
    // Keep only the last 3 games
    recent = recent.slice(0, MAX_RECENT_GAMES);
    
    localStorage.setItem(RECENTLY_PLAYED_KEY, JSON.stringify(recent));
    
    console.log(`Added game ${gameId} to recently played`);
  } catch (error) {
    console.error('Error saving recently played game:', error);
  }
};

/**
 * Clear all recently played games
 */
export const clearRecentlyPlayed = (): void => {
  try {
    localStorage.removeItem(RECENTLY_PLAYED_KEY);
    console.log('Cleared recently played games');
  } catch (error) {
    console.error('Error clearing recently played games:', error);
  }
};

/**
 * Get recently played game IDs (for easy lookup)
 */
export const getRecentGameIds = (): string[] => {
  return getRecentlyPlayed().map(game => game.id);
};
