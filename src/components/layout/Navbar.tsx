/**
 * IMPROVED NAVIGATION BAR - Updated for Rinnxus
 * 
 * Features:
 * - Rinnxus branding
 * - Category filtering with active state
 * - Favorites filter
 * - Search functionality
 * - Theme switcher (Dark/Light mode)
 * - Category icons from Lucide React
 * - Responsive design
 * - Removed "unblocked" language
 */

import { useState, useEffect } from 'react';
import { Gamepad2, Search, X, Zap, Brain, Globe, Car, Trophy, Users, Heart, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { getFavoritesCount } from '@/lib/favorites';

interface NavbarProps {
  currentCategory: string;
  onCategoryChange: (category: string) => void;
  onSearch: (query: string) => void;
  searchQuery: string;
}

const categories = [
  { id: 'all', label: 'Home', icon: Gamepad2 },
  { id: 'favorites', label: 'Favorites', icon: Heart },
  { id: 'action', label: 'Action', icon: Zap },
  { id: 'puzzle', label: 'Puzzle', icon: Brain },
  { id: 'io', label: 'IO', icon: Globe },
  { id: 'multiplayer', label: 'Multi', icon: Users },
  { id: 'racing', label: 'Racing', icon: Car },
  { id: 'sports', label: 'Sports', icon: Trophy },
];

export default function Navbar({ currentCategory, onCategoryChange, onSearch, searchQuery }: NavbarProps) {
  const [showSearch, setShowSearch] = useState(false);
  const [favoritesCount, setFavoritesCount] = useState(0);
  const { theme, toggleTheme } = useTheme();

  // Update favorites count
  useEffect(() => {
    const updateCount = () => {
      setFavoritesCount(getFavoritesCount());
    };

    updateCount();

    // Listen for favorites changes
    window.addEventListener('favoritesChanged', updateCount);
    window.addEventListener('storage', updateCount);

    return () => {
      window.removeEventListener('favoritesChanged', updateCount);
      window.removeEventListener('storage', updateCount);
    };
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
    if (e.target.value) {
      onCategoryChange('all');
    }
  };

  const clearSearch = () => {
    onSearch('');
    setShowSearch(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-game-surface via-game-surface to-game-surface-hover border-b border-game-border shadow-xl backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-game-primary to-blue-600 p-2.5 rounded-xl shadow-lg transform hover:scale-110 transition-transform">
              <Gamepad2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-game-primary via-blue-500 to-purple-500 text-transparent bg-clip-text hidden sm:block">
                Rinnxus
              </span>
              <span className="text-xl font-bold bg-gradient-to-r from-game-primary to-blue-500 text-transparent bg-clip-text sm:hidden">
                Rinnxus
              </span>
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Search Bar */}
            {showSearch ? (
              <div className="relative w-72">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-game-text-muted" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Search games..."
                  className="w-full bg-game-surface-hover text-game-text border border-game-border rounded-lg pl-10 pr-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-game-primary transition-all"
                  autoFocus
                />
                {searchQuery && (
                  <button
                    onClick={clearSearch}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-game-text-muted hover:text-game-text"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            ) : (
              <button
                onClick={() => setShowSearch(true)}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-game-surface-hover text-game-text-muted hover:text-game-text hover:bg-game-primary/10 transition-all"
              >
                <Search className="w-4 h-4" />
                <span className="text-sm">Search</span>
              </button>
            )}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-lg bg-game-surface-hover hover:bg-game-primary/10 text-game-text-muted hover:text-game-text transition-all"
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Search + Theme Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="p-2 rounded-lg bg-game-surface-hover text-game-text-muted hover:text-game-text transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-game-surface-hover text-game-text-muted hover:text-game-text transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Category Navigation with Icons */}
        <div className="hidden md:flex items-center space-x-1 pb-3 overflow-x-auto">
          {categories.map((category) => {
            const Icon = category.icon;
            const isFavoritesCategory = category.id === 'favorites';
            const isActive = currentCategory === category.id;
            
            return (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`flex items-center justify-center space-x-1.5 px-3 py-2 rounded-lg font-medium transition-all duration-200 whitespace-nowrap relative ${
                  isActive
                    ? 'bg-gradient-to-r from-game-primary to-blue-600 text-white shadow-lg scale-105'
                    : 'text-game-text-muted hover:text-game-text hover:bg-game-surface-hover hover:scale-105'
                }`}
                title={category.label}
              >
                <Icon className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm font-semibold">{category.label}</span>
                
                {/* Favorites count badge */}
                {isFavoritesCategory && favoritesCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-lg">
                    {favoritesCount}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Mobile Category Dropdown */}
        <div className="md:hidden pb-3 flex items-center space-x-2">
          <select
            value={currentCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="flex-1 bg-game-surface-hover text-game-text border border-game-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-game-primary"
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.label}
                {category.id === 'favorites' && favoritesCount > 0 ? ` (${favoritesCount})` : ''}
              </option>
            ))}
          </select>
        </div>

        {/* Mobile Search Bar */}
        {showSearch && (
          <div className="md:hidden pb-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-game-text-muted" />
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search games..."
                className="w-full bg-game-surface-hover text-game-text border border-game-border rounded-lg pl-10 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-game-primary"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-game-text-muted hover:text-game-text"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
