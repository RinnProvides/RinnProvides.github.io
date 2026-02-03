import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { games, getFeaturedGames, getGamesByCategory, getTwoPlayerGames, searchGames, getGameById } from '@/data/games';
import { getRecentGameIds } from '@/lib/localStorage';
import { getFavoriteIds } from '@/lib/favorites';
import { getAllCollections } from '@/data/collections';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FeaturedSection from '@/components/features/FeaturedSection';
import RecentlyPlayed from '@/components/features/RecentlyPlayed';
import TwoPlayerSection from '@/components/features/TwoPlayerSection';
import FavoritesSection from '@/components/features/FavoritesSection';
import GameGrid from '@/components/features/GameGrid';
import PanicButton from '@/components/features/PanicButton';
import TopRatedSection from '@/components/features/TopRatedSection';
import GameCollection from '@/components/features/GameCollection';
// --- 1. NEW IMPORTS ---
import { triggerSmartAd } from '@/lib/ads';
import AdPreloader from '@/components/features/AdPreloader';

export default function HomePage() {
  const navigate = useNavigate();
  const [currentCategory, setCurrentCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [recentGameIds, setRecentGameIds] = useState<string[]>([]);
  
  // --- 2. NEW STATE FOR ADS ---
  const [isAdLoading, setIsAdLoading] = useState(false);
  const [pendingGameId, setPendingGameId] = useState<string | null>(null);

  // Get game collections
  const collections = getAllCollections();

  // Load recently played games from localStorage
  useEffect(() => {
    setRecentGameIds(getRecentGameIds());
  }, []);

  // Update URL query parameter when category changes
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlCategory = params.get('category');
    
    if (urlCategory && urlCategory !== currentCategory) {
      setCurrentCategory(urlCategory);
    }
  }, []);

  // Handle category change
  const handleCategoryChange = (category: string) => {
    setCurrentCategory(category);
    
    const url = new URL(window.location.href);
    if (category === 'all') {
      url.searchParams.delete('category');
    } else {
      url.searchParams.set('category', category);
    }
    window.history.pushState({}, '', url.toString());
  };

  // --- 3. UPDATED GAME CLICK HANDLER ---
  const handleGameClick = (gameId: string) => {
    // Try to trigger the ad
    const adShown = triggerSmartAd();

    if (adShown) {
      // If ad opened, show the "Video Player" Loading Screen
      setPendingGameId(gameId);
      setIsAdLoading(true);
    } else {
      // If cooldown active, go straight to game
      navigate(`/play/${gameId}`);
    }
  };

  // --- 4. CALLBACK WHEN AD TIMER FINISHES ---
  const onAdComplete = () => {
    setIsAdLoading(false);
    if (pendingGameId) {
      navigate(`/play/${pendingGameId}`);
    }
  };

  // Handle search
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query) {
      setCurrentCategory('all'); // Reset category when searching
    }
  };

  // Get data for display
  const featuredGames = getFeaturedGames();
  const twoPlayerGames = getTwoPlayerGames();
  
  // Apply search or category filter or favorites
  let filteredGames;
  if (currentCategory === 'favorites') {
    const favoriteIds = getFavoriteIds();
    filteredGames = favoriteIds
      .map(id => getGameById(id))
      .filter(game => game !== undefined);
  } else if (searchQuery) {
    filteredGames = searchGames(searchQuery);
  } else {
    filteredGames = getGamesByCategory(currentCategory);
  }
  
  const recentGames = games.filter(game => recentGameIds.includes(game.id));
  
  const isSearching = searchQuery.length > 0;
  const isFavoritesMode = currentCategory === 'favorites';
  const showAllSections = currentCategory === 'all' && !isSearching;

  const getCategoryLabel = () => {
    if (isSearching) {
      return `Search Results for "${searchQuery}" (${filteredGames.length} games)`;
    }
    if (isFavoritesMode) {
      return `My Favorites (${filteredGames.length} games)`;
    }
    if (currentCategory === 'all') return 'All Games';
    return currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1) + ' Games';
  };

  return (
    <div className="min-h-screen bg-game-bg flex flex-col">
      {/* --- 5. ADD THE PRELOADER COMPONENT HERE --- */}
      <AdPreloader 
        isOpen={isAdLoading} 
        onComplete={onAdComplete} 
      />

      {/* Sticky Navigation */}
      <Navbar 
        currentCategory={currentCategory} 
        onCategoryChange={handleCategoryChange}
        onSearch={handleSearch}
        searchQuery={searchQuery}
      />

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Featured Games Banner - Compact horizontal carousel */}
        {showAllSections && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-game-text flex items-center gap-2">
                <span className="text-yellow-400">⭐</span>
                Featured Games
              </h2>
              <span className="text-sm text-game-text-muted">Play the best games instantly!</span>
            </div>
            <FeaturedSection games={featuredGames} onGameClick={handleGameClick} />
          </div>
        )}

        {/* My Favorites Section */}
        {showAllSections && <FavoritesSection />}

        {/* Top Rated Section */}
        {showAllSections && (
          <TopRatedSection onGameClick={handleGameClick} />
        )}

        {/* Game Collections */}
        {showAllSections && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-game-text mb-6">🎯 Curated Collections</h2>
            {collections.map((collection) => (
              <GameCollection
                key={collection.id}
                collection={collection}
                onGameClick={handleGameClick}
              />
            ))}
          </div>
        )}

        {/* 2-Player Games Section */}
        {showAllSections && (
          <TwoPlayerSection games={twoPlayerGames} onGameClick={handleGameClick} />
        )}

        {/* Recently Played Section */}
        {showAllSections && recentGames.length > 0 && (
          <RecentlyPlayed games={recentGames} onGameClick={handleGameClick} />
        )}

        {/* All Games Grid */}
        {filteredGames.length > 0 ? (
          <GameGrid
            games={filteredGames}
            onGameClick={handleGameClick}
            categoryLabel={getCategoryLabel()}
          />
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">
              {isFavoritesMode ? '💔' : '🎮'}
            </div>
            <h3 className="text-2xl font-bold text-game-text mb-2">
              {isFavoritesMode ? 'No favorites yet' : 'No games found'}
            </h3>
            <p className="text-game-text-muted">
              {isFavoritesMode 
                ? 'Start adding games to your favorites by clicking the heart icon!'
                : 'Try searching for something else or browse all categories'
              }
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setCurrentCategory('all');
              }}
              className="mt-6 px-6 py-3 bg-game-primary text-white rounded-lg font-semibold hover:bg-game-primary/90 transition-colors"
            >
              {isFavoritesMode ? 'Browse All Games' : 'Clear Search'}
            </button>
          </div>
        )}
      </main>

      {/* Panic Button */}
      <PanicButton />

      {/* Footer */}
      <Footer />
    </div>
  );
}
