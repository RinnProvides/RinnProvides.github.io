/**
 * CURATED GAME COLLECTIONS
 * * Hand-picked collections of games for different moods and play styles
 */

export interface GameCollection {
  id: string;
  title: string;
  description: string;
  icon: string; // Emoji icon
  gameIds: string[]; // Array of game IDs
  color: string; // Tailwind color class for styling
}

export const collections: GameCollection[] = [
  {
    id: 'staff-picks',
    title: '👑 Staff Picks',
    description: 'Our favorite games that we keep coming back to',
    icon: '👑',
    gameIds: [
      'slope', 'cookie-clicker', '2048', 'geometry-dash', 'subway-surfers', 'stickman-hook',
      'retro-bowl', 'run-3', 'bloons-td-4', 'drift-hunters'
    ],
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'hidden-gems',
    title: '💎 Hidden Gems',
    description: 'Underrated games that deserve more love',
    icon: '💎',
    gameIds: [
      'worlds-hardest-game', 'tanuki-sunset', 'blumgi-rocket', 'merge-round-racers', 'defly-io', 't-rex-runner',
      'bad-time-simulator', 'duck-life', 'grow-a-garden', 'poly-track'
    ],
    color: 'from-emerald-500 to-teal-500'
  },
  {
    id: 'most-addictive',
    title: '🔥 Most Addictive',
    description: 'Warning: These games are impossible to put down!',
    icon: '🔥',
    gameIds: [
      'cookie-clicker', 'slope', 'paper-io-2', 'slither-io', '2048', 'tetris',
      'tiny-fishing', 'bitlife', 'hole-io', 'zombs-royale', 'papas-freezeria'
    ],
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 'quick-games',
    title: '⚡ Quick 5-Minute Games',
    description: 'Perfect for a quick gaming session between classes',
    icon: '⚡',
    gameIds: [
      'wordle', '2048', 't-rex-runner', 'rooftop-snipers', 'basket-bros', 'worlds-hardest-game',
      'moto-x3m', 'tunnel-rush', 'crossy-road', 'stack', 'eggy-car'
    ],
    color: 'from-yellow-500 to-orange-500'
  },
  {
    id: 'multiplayer-mayhem',
    title: '🎮 Multiplayer Mayhem',
    description: 'Challenge your friends in these epic battles',
    icon: '🎮',
    gameIds: [
      'getaway-shootout', 'football-bros', 'basketball-stars', 'rooftop-snipers', 'house-of-hazards', 'basket-bros',
      '1v1-lol', 'krunker-io', 'fireboy-watergirl', 'basket-random'
    ],
    color: 'from-blue-500 to-indigo-500'
  },
  {
    id: 'brain-teasers',
    title: '🧠 Brain Teasers',
    description: 'Test your IQ with these mind-bending puzzles',
    icon: '🧠',
    gameIds: [
      'sudoku', 'wordle', '2048', 'chess', 'tetris', 'brain-test',
      'little-alchemy-2', 'bob-the-robber-2', 'drive-mad', 'among-us-single'
    ],
    color: 'from-indigo-500 to-purple-500'
  }
];

/**
 * Get a collection by ID
 */
export const getCollectionById = (id: string): GameCollection | undefined => {
  return collections.find(c => c.id === id);
};

/**
 * Get all collections
 */
export const getAllCollections = (): GameCollection[] => {
  return collections;
};
