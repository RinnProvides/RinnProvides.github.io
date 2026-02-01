/**
 * HOME PAGE - Updated with Favorites Support
 * 
 * Main landing page with:
 * - Ad blocker detection (MUST disable ad blocker to play!)
 * - My Favorites section
 * - Featured games section (hero)
 * - Top Rated section (user ratings)
 * - Game Collections (curated carousels)
 * - Recently played section
 * - All games grid (filtered by category)
 * - Ad banners (leaderboard at top, rectangles between sections)
 * - Footer
 */

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
import AdBanner from '@/components/features/AdBanner';
import PanicButton from '@/components/features/PanicButton';
import AdBlockerDetector from '@/components/features/AdBlockerDetector';
import TopRatedSection from '@/components/features/TopRatedSection';
import GameCollection from '@/components/features/GameCollection';
import { triggerSmartAd } from '@/lib/ads'; 

export default function HomePage() {
  const navigate = useNavigate();
  const [currentCategory, setCurrentCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [recentGameIds, setRecentGameIds] = useState<string[]>([]);

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
    
    // Update URL query parameter without page reload
    const url = new URL(window.location.href);
    if (category === 'all') {
      url.searchParams.delete('category');
    } else {
      url.searchParams.set('category', category);
    }
    window.history.pushState({}, '', url.toString());
  };

  // Handle game click - navigate to theater mode
  const handleGameClick = (gameId: string) => {
   // smart ad
    triggerSmartAd();
    // actual game
    navigate(`/play/${gameId}`);
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
    // Show favorites
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
  
  // Determine if we're in search mode or favorites mode
  const isSearching = searchQuery.length > 0;
  const isFavoritesMode = currentCategory === 'favorites';
  const showAllSections = currentCategory === 'all' && !isSearching;

  // Get category label for display
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
      {/* Ad Blocker Detection */}
      <AdBlockerDetector />

      {/* Sticky Navigation */}
      <Navbar 
        currentCategory={currentCategory} 
        onCategoryChange={handleCategoryChange}
        onSearch={handleSearch}
        searchQuery={searchQuery}
      />

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Top Leaderboard Ad */}
        <div className="flex justify-center mb-8">
          <AdBanner size="leaderboard" />
        </div>

        {/* Featured Games Section (only on 'all' category and not searching) */}
        {showAllSections && (
          <FeaturedSection games={featuredGames} onGameClick={handleGameClick} />
        )}

        {/* My Favorites Section (only on 'all' category and not searching) */}
        {showAllSections && <FavoritesSection />}

        {/* Top Rated Section (only on 'all' category and not searching) */}
        {showAllSections && (
          <>
            <TopRatedSection onGameClick={handleGameClick} />
            
            {/* Ad between sections */}
            <div className="flex justify-center my-8">
              <AdBanner size="rectangle" />
            </div>
          </>
        )}

        {/* Game Collections - Curated Carousels (only on 'all' category and not searching) */}
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
            
            {/* Ad between sections */}
            <div className="flex justify-center my-8">
              <AdBanner size="rectangle" />
            </div>
          </div>
        )}

        {/* 2-Player Games Section (only on 'all' category and not searching) */}
        {showAllSections && (
          <>
            <TwoPlayerSection games={twoPlayerGames} onGameClick={handleGameClick} />
            
            {/* Ad between sections */}
            <div className="flex justify-center my-8">
              <AdBanner size="rectangle" />
            </div>
          </>
        )}

        {/* Recently Played Section (only on 'all' category and not searching) */}
        {showAllSections && recentGames.length > 0 && (
          <>
            <RecentlyPlayed games={recentGames} onGameClick={handleGameClick} />
            
            {/* Ad between sections */}
            <div className="flex justify-center my-8">
              <AdBanner size="rectangle" />
            </div>
          </>
        )}

        {/* All Games Grid (filtered by category, favorites, or search) */}
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
